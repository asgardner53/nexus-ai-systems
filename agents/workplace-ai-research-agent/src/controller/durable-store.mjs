import {DatabaseSync} from 'node:sqlite';
import {randomUUID,createHash} from 'node:crypto';
import {validateConfig} from '../config.mjs';
const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
const stages=['queued','researching','verifying','challenging','drafting','validating','ready_for_review'];
export class DurableStore {
 constructor(path,{now=()=>Date.now()}={}){
  if(!path||path===':memory:')throw new Error('persistent_path_required');
  this.now=now;this.db=new DatabaseSync(path);
  this.db.exec(`PRAGMA journal_mode=WAL; PRAGMA synchronous=FULL; PRAGMA busy_timeout=5000;
  CREATE TABLE IF NOT EXISTS runs(id TEXT PRIMARY KEY, window_key TEXT UNIQUE NOT NULL, agent TEXT NOT NULL, start TEXT NOT NULL,end TEXT NOT NULL,config TEXT NOT NULL,config_hash TEXT NOT NULL,status TEXT NOT NULL,checkpoint TEXT NOT NULL DEFAULT '{}',version INTEGER NOT NULL DEFAULT 0,calls INTEGER NOT NULL DEFAULT 0,deadline INTEGER NOT NULL,owner TEXT,lease_until INTEGER,fence INTEGER NOT NULL DEFAULT 0,cancelled INTEGER NOT NULL DEFAULT 0,stop_reason TEXT);
  CREATE TABLE IF NOT EXISTS actions(run_id TEXT NOT NULL,action_key TEXT NOT NULL,input_hash TEXT NOT NULL,tool TEXT NOT NULL,status TEXT NOT NULL,result TEXT, PRIMARY KEY(run_id,action_key));
  CREATE TABLE IF NOT EXISTS evidence_outbox(id TEXT PRIMARY KEY, run_id TEXT NOT NULL,delivery_key TEXT UNIQUE NOT NULL,payload TEXT NOT NULL,payload_hash TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',receipt TEXT,attempts INTEGER NOT NULL DEFAULT 0,last_error TEXT);
  CREATE TABLE IF NOT EXISTS reports(id TEXT PRIMARY KEY,run_id TEXT NOT NULL,content TEXT NOT NULL,hash TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'draft',validation TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS cutoffs(agent TEXT PRIMARY KEY,end TEXT NOT NULL);
  `);
 }
 close(){this.db.close()}
 transaction(fn){this.db.exec('BEGIN IMMEDIATE');try{const result=fn();this.db.exec('COMMIT');return result}catch(e){this.db.exec('ROLLBACK');throw e}}
 get(id){const r=this.db.prepare('SELECT * FROM runs WHERE id=?').get(id);if(!r)throw new Error('run_missing');return {...r,config:JSON.parse(r.config),checkpoint:JSON.parse(r.checkpoint)}}
 create({config,windowStart,windowEnd}){
  validateConfig(config);const start=Date.parse(windowStart),end=Date.parse(windowEnd);if(!Number.isFinite(start)||!Number.isFinite(end)||start>=end)throw new Error('invalid_window');
  const a=new Date(start).toISOString(),b=new Date(end).toISOString(),key=`${config.agent_id}:${a}:${b}`,configHash=hash(config);
  return this.transaction(()=>{
   const old=this.db.prepare('SELECT id,config_hash FROM runs WHERE window_key=?').get(key);
   if(old){if(old.config_hash!==configHash)throw new Error('configuration_changed');return this.get(old.id)}
   const id=randomUUID();this.db.prepare('INSERT INTO runs(id,window_key,agent,start,end,config,config_hash,status,deadline) VALUES(?,?,?,?,?,?,?,?,?)').run(id,key,config.agent_id,a,b,JSON.stringify(config),configHash,'queued',this.now()+config.limits.timeout_seconds*1000);return this.get(id);
  });
 }
 acquire(id,owner,{leaseMs=30000}={}){
  if(typeof owner!=='string'||!owner||!Number.isSafeInteger(leaseMs)||leaseMs<1||leaseMs>60000)throw new Error('invalid_lease');
  return this.transaction(()=>{
   const r=this.get(id);if(r.cancelled||['ready_for_review','failed','cancelled'].includes(r.status))throw new Error('run_terminal');
   if(r.owner&&r.lease_until>this.now())throw new Error('lease_busy');
   if(r.status==='partial'){const resume=r.checkpoint.resumeStage;if(!stages.includes(resume)||resume==='ready_for_review')throw new Error('resume_stage_missing');this.db.prepare('UPDATE runs SET status=? WHERE id=?').run(resume,id);}
   this.db.prepare('UPDATE runs SET owner=?,lease_until=?,fence=fence+1 WHERE id=?').run(owner,this.now()+leaseMs,id);
   return {runId:id,owner,fence:r.fence+1};
  });
 }
 assertLease(token){const r=this.get(token.runId);if(r.owner!==token.owner||r.fence!==token.fence||r.lease_until<=this.now())throw new Error('lease_lost');if(r.cancelled)throw new Error('cancelled');if(this.now()>=r.deadline)throw new Error('deadline');return r}
 heartbeat(token,leaseMs=30000){if(!Number.isSafeInteger(leaseMs)||leaseMs<1||leaseMs>60000)throw new Error('invalid_lease');return this.transaction(()=>{this.assertLease(token);this.db.prepare('UPDATE runs SET lease_until=? WHERE id=?').run(this.now()+leaseMs,token.runId)})}
 release(token){this.db.prepare('UPDATE runs SET owner=NULL,lease_until=NULL WHERE id=? AND owner=? AND fence=?').run(token.runId,token.owner,token.fence)}
 cancel(id){this.db.prepare("UPDATE runs SET cancelled=1,status='cancelled',stop_reason='owner_cancelled',version=version+1 WHERE id=?").run(id)}
 checkpoint(token,{expectedVersion,stage,pendingWork}){
  return this.transaction(()=>{const r=this.assertLease(token);if(r.version!==expectedVersion)throw new Error('checkpoint_conflict');const current=stages.indexOf(r.status),next=stages.indexOf(stage);if(next<0||next===stages.length-1||next<current||next>current+1)throw new Error('invalid_transition');this.db.prepare('UPDATE runs SET status=?,checkpoint=?,version=version+1 WHERE id=?').run(stage,JSON.stringify({pendingWork}),r.id);return this.get(r.id)});
 }
 reserve(token,{key,tool,input,costAudCents=0}){
  return this.transaction(()=>{
   const r=this.assertLease(token);if(typeof key!=='string'||!key)throw new Error('action_key_required');
   if(!r.config.permissions.allowed_tools.includes(tool))throw new Error('tool_denied');
   if(costAudCents!==0)throw new Error('paid_or_unknown_cost_disabled');
   const inputHash=hash(input),old=this.db.prepare('SELECT * FROM actions WHERE run_id=? AND action_key=?').get(r.id,key);
   if(old){if(old.input_hash!==inputHash||old.tool!==tool)throw new Error('idempotency_conflict');if(old.status==='complete')return {cached:true,result:JSON.parse(old.result)};if(!['search_public_web','fetch_public_source'].includes(tool))throw new Error('uncertain_write_requires_reconciliation')}
   const research=['search_public_web','fetch_public_source'].includes(tool);
   if(research&&r.calls>=r.config.limits.research_calls)throw new Error('allowance_exhausted');
   if(old){const attempts=Number(JSON.parse(old.result||'{}').attempts||1);if(attempts>=1+r.config.limits.retries_per_failure)throw new Error('retry_limit');this.db.prepare("UPDATE actions SET status='reserved',result=? WHERE run_id=? AND action_key=?").run(JSON.stringify({attempts:attempts+1}),r.id,key)}
   else this.db.prepare('INSERT INTO actions(run_id,action_key,input_hash,tool,status,result) VALUES(?,?,?,?,?,?)').run(r.id,key,inputHash,tool,'reserved',JSON.stringify({attempts:1}));
   if(research)this.db.prepare('UPDATE runs SET calls=calls+1 WHERE id=?').run(r.id);return {cached:false};
  });
 }
 complete(token,key,result){return this.transaction(()=>{this.assertLease(token);const changed=this.db.prepare("UPDATE actions SET status='complete',result=? WHERE run_id=? AND action_key=? AND status='reserved'").run(JSON.stringify(result),token.runId,key);if(changed.changes!==1)throw new Error('action_not_reserved')})}
 partial(token,reason){return this.transaction(()=>{const r=this.get(token.runId);if(r.owner!==token.owner||r.fence!==token.fence||r.cancelled)return;this.db.prepare("UPDATE runs SET status='partial',stop_reason=?,checkpoint=?,owner=NULL,lease_until=NULL,version=version+1 WHERE id=?").run(reason,JSON.stringify({...r.checkpoint,resumeStage:r.status}),r.id)})}
 cutoff(agent){return this.db.prepare('SELECT end FROM cutoffs WHERE agent=?').get(agent)?.end||null}
 saveReady(token,{content,validation}){
  return this.transaction(()=>{const r=this.assertLease(token);if(r.status!=='validating'||validation?.passed!==true||validation?.evidenceReviewed!==true||!content?.trim())throw new Error('validation_required');if(this.db.prepare("SELECT count(*) AS n FROM evidence_outbox WHERE run_id=? AND status!='delivered'").get(r.id).n)throw new Error('evidence_delivery_pending');const id=randomUUID();this.db.prepare('INSERT INTO reports(id,run_id,content,hash,validation) VALUES(?,?,?,?,?)').run(id,r.id,content,hash(content),JSON.stringify(validation));this.db.prepare("UPDATE runs SET status='ready_for_review',version=version+1,owner=NULL,lease_until=NULL WHERE id=?").run(r.id);this.db.prepare('INSERT INTO cutoffs(agent,end) VALUES(?,?) ON CONFLICT(agent) DO UPDATE SET end=MAX(end,excluded.end)').run(r.agent,r.end);return {id,hash:hash(content),status:'draft'};});
 }
 queueEvidence(token,{key,payload}){
  return this.transaction(()=>{this.assertLease(token);validateEvidence(payload);const h=hash(payload),old=this.db.prepare('SELECT * FROM evidence_outbox WHERE delivery_key=?').get(key);if(old){if(old.payload_hash!==h||old.run_id!==token.runId)throw new Error('idempotency_conflict');return old.id}const id=randomUUID();this.db.prepare('INSERT INTO evidence_outbox(id,run_id,delivery_key,payload,payload_hash) VALUES(?,?,?,?,?)').run(id,token.runId,key,JSON.stringify(payload),h);return id});
 }
 pendingEvidence(runId){return this.db.prepare("SELECT * FROM evidence_outbox WHERE run_id=? AND status='pending' ORDER BY rowid").all(runId).map(r=>({...r,payload:JSON.parse(r.payload)}))}
 delivered(token,id,receipt){return this.transaction(()=>{this.assertLease(token);const r=this.db.prepare('SELECT * FROM evidence_outbox WHERE id=? AND run_id=?').get(id,token.runId);if(!r||receipt?.idempotencyKey!==r.delivery_key||receipt?.payloadHash!==r.payload_hash||!Array.isArray(receipt?.recordIds)||!receipt.recordIds.length)throw new Error('invalid_register_receipt');this.db.prepare("UPDATE evidence_outbox SET status='delivered',receipt=?,attempts=attempts+1,last_error=NULL WHERE id=?").run(JSON.stringify(receipt),id)})}
 deliveryFailed(token,id){return this.transaction(()=>{this.assertLease(token);this.db.prepare("UPDATE evidence_outbox SET attempts=attempts+1,last_error='register_unavailable' WHERE id=? AND run_id=?").run(id,token.runId)})}
}
export function validateEvidence(payload){
 if(!payload||payload.materiality!=='M2'||payload.status!=='Draft'||payload.humanDecisionOwner!=='Alec Gardner'||!Array.isArray(payload.sources)||!Array.isArray(payload.claims)||!Array.isArray(payload.links)||!payload.sources.length||!payload.claims.length)throw new Error('invalid_evidence_bundle');
 const sources=new Set(),claims=new Set();
 for(const s of payload.sources){if(!s.id||sources.has(s.id)||!s.url||!s.contentHash||!s.retrievedAt)throw new Error('invalid_source');const u=new URL(s.url);if(!['https:','http:'].includes(u.protocol)||u.username||u.password)throw new Error('invalid_source');sources.add(s.id)}
 for(const c of payload.claims){if(!c.id||claims.has(c.id)||!c.text||!['attributed claim','interpretation','hypothesis','unresolved'].includes(c.type)||!['provisionally supported','unresolved'].includes(c.verificationStatus)||c.humanApprovalRequired!==true)throw new Error('claim_approval_forbidden');claims.add(c.id)}
 for(const l of payload.links)if(!claims.has(l.claimId)||!sources.has(l.sourceId)||!['supporting','contradicting','context'].includes(l.role)||!l.locator)throw new Error('invalid_claim_source_link');
 for(const id of claims)if(!payload.links.some(l=>l.claimId===id))throw new Error('unlinked_claim');
}
