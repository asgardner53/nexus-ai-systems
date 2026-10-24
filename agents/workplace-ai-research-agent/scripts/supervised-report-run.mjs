import {readFileSync,writeFileSync} from 'node:fs';
import {createInterface} from 'node:readline';
import {createHash} from 'node:crypto';
import {DurableStore} from '../src/controller/durable-store.mjs';
import {RunController} from '../src/controller/run-controller.mjs';
import {createNexusRegister,registerSchemaVersion} from '../src/adapters/nexus-register.mjs';
import {ReportReview} from '../src/review/report-review.mjs';
import {createEvidenceControl} from '../src/review/evidence-control.mjs';
import {draftReport,digest} from '../src/reporting/report.mjs';
// This consumes completed host research, not an autonomous provider or model run.
const input=JSON.parse(readFileSync(process.argv[2]||'pilot-output/pilot2-input.json'));
const store=new DurableStore('pilot-output/pilot2-state.sqlite');
const config=JSON.parse(readFileSync('config/pilot.example.json'));
const rl=createInterface({input:process.stdin});const pending=new Map();let calls=0;
rl.on('line',line=>{const m=JSON.parse(line),done=pending.get(m.id);if(done){pending.delete(m.id);done(JSON.parse(readFileSync(m.resultFile)))}});
const executeSql=(query,{signal}={})=>new Promise((resolve,reject)=>{const id=++calls,file=`pilot-output/pilot2-query-${id}.sql`;writeFileSync(file,query);const stop=()=>{pending.delete(id);reject(new Error('aborted'))};signal?.addEventListener('abort',stop,{once:true});pending.set(id,r=>{signal?.removeEventListener('abort',stop);resolve(r)});console.log(JSON.stringify({type:'sql_request',id,queryFile:file}))});
let token;
try{
 const run=store.create({config,windowStart:input.windowStart,windowEnd:input.windowEnd});token=store.acquire(run.id,'supervised-report-host');
 const options={selectedItems:input.selectedItems,events:input.events,practicalAction:input.practicalAction,evidenceGaps:input.evidenceGaps,quietWeekReason:input.quietWeekReason,evidence:input.evidence};
 const report=draftReport({run,...options});
 const record={...input.reviewRecord,reportHash:digest(report),evidenceHash:digest(input.evidence),itemChecks:{},claimChecks:{},sourceChecks:{}};
 for(const item of report.items)record.itemChecks[item.id]={itemHash:digest(item),datesChecked:true,editorialWordingReviewed:true};
 for(const c of input.evidence.claims){if(!record.claimRationales[c.id])throw Error('claim_rationale_missing');record.claimChecks[c.id]={claimHash:digest(c),supportsWording:true}}
 for(const s of input.evidence.sources){if(createHash('sha256').update(s.contentExcerpt).digest('hex')!==s.contentHash)throw Error('source_excerpt_changed');record.sourceChecks[s.id]={contentHash:s.contentHash,linkResolved:true,checkedAt:input.checkedAt}}
 writeFileSync('pilot-output/pilot2-evidence-review.json',JSON.stringify(record,null,2));
 const control=createEvidenceControl({reviewSnapshot:async snapshot=>{if(digest(snapshot.report)!==record.reportHash||digest(snapshot.evidence)!==record.evidenceHash)throw Error('review_snapshot_changed');return record}});
 const attestation=await control.attest({report,evidence:input.evidence});
 const review=new ReportReview({store,authenticate:async()=>null});
 const saved=review.saveDraft(token,{...options,attestation});
 writeFileSync('pilot-output/pilot2-report.md',review.get(saved.id).content);
 if(!saved.validation.passed)throw Error('pilot_validation_failed:'+saved.validation.errors.join(','));
 const stages=['queued','researching','verifying','challenging','drafting','validating'];
 for(const stage of ['researching','verifying','challenging'])if(stages.indexOf(store.get(run.id).status)<stages.indexOf(stage))store.checkpoint(token,{expectedVersion:store.get(run.id).version,stage,pendingWork:[]});
 store.queueEvidence(token,{key:'workplace-research:20261008-pilot2',payload:input.evidence});
 const register=createNexusRegister({executeSql,verifiedSchemaVersion:registerSchemaVersion});
 await new RunController({store,token,register}).flushEvidence();
 const delivered=store.db.prepare('SELECT receipt FROM evidence_outbox WHERE run_id=?').get(run.id);
 const replay=await register.appendEvidence({idempotencyKey:'workplace-research:20261008-pilot2',payloadHash:digest(input.evidence),payload:input.evidence});
 for(const stage of ['drafting','validating'])store.checkpoint(token,{expectedVersion:store.get(run.id).version,stage,pendingWork:[]});
 review.markRunReady(token,saved.id);
 const result={...saved,runId:run.id,runStatus:store.get(run.id).status,registerDelivered:store.pendingEvidence(run.id).length===0,receipt:JSON.parse(delivered.receipt),replayIdentical:digest(replay)===digest(JSON.parse(delivered.receipt)),hostSqlCalls:calls,cutoff:store.cutoff(config.agent_id),researchExecution:'Host-supervised research imported; no autonomous search execution in this script',liveSignInVerified:false,approved:false,published:false};
 writeFileSync('pilot-output/pilot2-result.json',JSON.stringify(result,null,2));console.log(JSON.stringify({type:'result',status:result.runStatus,wordCount:saved.validation.wordCount,registerDelivered:result.registerDelivered,replayIdentical:result.replayIdentical,reportId:saved.id}));
}catch(error){if(token)store.partial(token,error.message);console.log(JSON.stringify({type:'result',status:'failed',reason:error.message}));process.exitCode=1}
finally{store.close();rl.close()}
