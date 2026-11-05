import {randomUUID} from 'node:crypto';
import {draftReport,renderReport,validateReport,digest} from '../reporting/report.mjs';
export class ReportReview {
 constructor({store,authenticate,now=()=>Date.now()}){
  this.store=store;this.authenticate=authenticate;this.now=now;
  store.db.exec(`CREATE TABLE IF NOT EXISTS report_versions(id TEXT PRIMARY KEY,run_id TEXT NOT NULL,version INTEGER NOT NULL,parent_id TEXT,report TEXT NOT NULL,evidence TEXT NOT NULL,content TEXT NOT NULL,hash TEXT NOT NULL,validation TEXT NOT NULL,status TEXT NOT NULL,created_at INTEGER NOT NULL,UNIQUE(run_id,version));
   CREATE TABLE IF NOT EXISTS report_review_decisions(id TEXT PRIMARY KEY,report_id TEXT NOT NULL,report_hash TEXT NOT NULL,reviewer_subject TEXT NOT NULL,decision TEXT NOT NULL,comments TEXT NOT NULL,decided_at INTEGER NOT NULL);`);
 }
 saveDraft(token,{selectedItems,events,practicalAction,evidenceGaps,quietWeekReason,evidence,attestation}){
  const run=this.store.assertLease(token),report=draftReport({run,selectedItems,events,practicalAction,evidenceGaps,quietWeekReason});
  return this.append(run.id,report,evidence,attestation);
 }
 append(runId,report,evidence,attestation,parentId=null){
  const run=this.store.get(runId),validation=validateReport(report,{run,evidence,attestation,now:this.now()}),content=renderReport(report,evidence);
  return this.store.transaction(()=>{
   if(parentId){const latest=this.store.db.prepare('SELECT id FROM report_versions WHERE run_id=? ORDER BY version DESC LIMIT 1').get(runId);if(latest?.id!==parentId)throw new Error('superseded_report');}
   const id=randomUUID(),version=this.store.db.prepare('SELECT coalesce(max(version),0)+1 AS version FROM report_versions WHERE run_id=?').get(runId).version;
   const hash=digest({report,evidence,content});
   this.store.db.prepare('INSERT INTO report_versions VALUES(?,?,?,?,?,?,?,?,?,?,?)').run(id,runId,version,parentId,JSON.stringify(report),JSON.stringify(evidence),content,hash,JSON.stringify(validation),validation.passed?'ready_for_review':'draft',this.now());
   return {id,version,hash,status:validation.passed?'ready_for_review':'draft',validation};
  });
 }
 get(id){const r=this.store.db.prepare('SELECT * FROM report_versions WHERE id=?').get(id);if(!r)throw new Error('report_missing');return {...r,report:JSON.parse(r.report),evidence:JSON.parse(r.evidence),validation:JSON.parse(r.validation)}}
 async principal(authContext){
  if(typeof this.authenticate!=='function')throw new Error('human_authentication_unconfigured');
  const p=await this.authenticate(authContext);
  if(p?.authenticated!==true||p?.actorType!=='human'||!p.subject||p.owner!=='Alec Gardner'||!p.scopes?.includes('workplace_report_review'))throw new Error('human_review_denied');
  return p;
 }
 async revise(id,{expectedHash,report,evidence,attestation,authContext}){
  await this.principal(authContext);const old=this.get(id);if(old.hash!==expectedHash)throw new Error('stale_report_hash');
  if(report.runId!==old.run_id)throw new Error('run_mismatch');
  // New versions always require their own validation and review; earlier decisions remain history.
  return this.append(old.run_id,report,evidence,attestation,id);
 }
 async decide(id,{expectedHash,decision,comments='',authContext}){
  const p=await this.principal(authContext);
  if(!['approve','request_changes','reject'].includes(decision))throw new Error('invalid_decision');
  return this.store.transaction(()=>{
   const r=this.get(id);if(r.hash!==expectedHash)throw new Error('stale_report_hash');
   const latest=this.store.db.prepare('SELECT id FROM report_versions WHERE run_id=? ORDER BY version DESC LIMIT 1').get(r.run_id);
   if(latest.id!==id)throw new Error('superseded_report');
   if(!['draft','ready_for_review'].includes(r.status))throw new Error('decision_already_recorded');
   if(decision==='approve'&&(this.now()-r.validation.validatedAt>86400000||this.now()<r.validation.validatedAt))throw new Error('validation_expired');
   if(decision==='approve'&&(!r.validation.passed||r.status!=='ready_for_review'))throw new Error('validation_failed');
   if(decision!=='approve'&&!comments.trim())throw new Error('review_comments_required');
   const state={approve:'approved',request_changes:'changes_requested',reject:'rejected'}[decision],reviewId=randomUUID();
   this.store.db.prepare('INSERT INTO report_review_decisions VALUES(?,?,?,?,?,?,?)').run(reviewId,id,r.hash,p.subject,decision,comments,this.now());
   this.store.db.prepare('UPDATE report_versions SET status=? WHERE id=?').run(state,id);
   return {reviewId,reportId:id,reportHash:r.hash,status:state,published:false};
  });
 }
 markRunReady(token,id){const r=this.get(id);const latest=this.store.db.prepare('SELECT id FROM report_versions WHERE run_id=? ORDER BY version DESC LIMIT 1').get(r.run_id);if(latest.id!==id||r.run_id!==token.runId||r.status!=='ready_for_review'||!r.validation.passed)throw new Error('validation_failed');return this.store.saveReady(token,{content:r.content,validation:r.validation})}
}
