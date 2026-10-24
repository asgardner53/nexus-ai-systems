import {createInterface} from 'node:readline';
import {readFileSync,mkdtempSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {DurableStore} from '../src/controller/durable-store.mjs';
import {RunController} from '../src/controller/run-controller.mjs';
import {createNexusRegister,registerSchemaVersion} from '../src/adapters/nexus-register.mjs';
const rl=createInterface({input:process.stdin});const waiting=new Map();let calls=0;
rl.on('line',line=>{const m=JSON.parse(line),pending=waiting.get(m.id);if(pending){waiting.delete(m.id);pending(JSON.parse(readFileSync(m.resultFile)))}});
const executeSql=(query,{signal}={})=>new Promise((resolve,reject)=>{const id=++calls;const stop=()=>{waiting.delete(id);reject(new Error('aborted'))};signal?.addEventListener('abort',stop,{once:true});waiting.set(id,r=>{signal?.removeEventListener('abort',stop);resolve(r)});process.stdout.write(JSON.stringify({type:'sql_request',id,query})+'\n')});
const config=JSON.parse(readFileSync(new URL('../config/pilot.example.json',import.meta.url)));
const source=JSON.parse(readFileSync(new URL('../docs/live-connectivity-test-2026-10-07.json',import.meta.url)));
const stamp='20261008-connection-v1';
const payload={materiality:'M2',status:'Draft',humanDecisionOwner:'Alec Gardner',sources:[{id:`NEE-AI-RA-SRC-${stamp}`,title:'Generative AI at Work — authors’ arXiv abstract',authorIssuingBody:'Erik Brynjolfsson, Danielle Li and Lindsey Raymond',sourceType:'ACADEMIC',provenance:'PRIMARY',sourceQuality:'B',url:source.selectedUrl,contentHash:source.sourceMetadata.contentHash,retrievedAt:source.completedAt}],claims:[{id:`NEE-AI-RA-CLM-${stamp}`,text:'The authors describe a study of AI assistance in customer-support work.',type:'attributed claim',verificationStatus:'unresolved',humanApprovalRequired:true,jurisdiction:'Study context; applicability to Australia not verified',populationContext:'Customer-support agents in the authors’ study',limitations:'Connection-test record based on retrieved abstract; semantic verification, publication date and generalisability require review. Not approved for publication.'}],links:[{claimId:`NEE-AI-RA-CLM-${stamp}`,sourceId:`NEE-AI-RA-SRC-${stamp}`,role:'supporting',locator:'arXiv abstract, host line 16; excerpt hash recorded on source'}]};
const directory=mkdtempSync(join(tmpdir(),'nexus-register-smoke-'));const store=new DurableStore(join(directory,'state.sqlite'));
try{
 const run=store.create({config,windowStart:'2026-10-07T00:00:00Z',windowEnd:'2026-10-08T00:00:00Z'}),token=store.acquire(run.id,'host-register-smoke');
 store.queueEvidence(token,{key:`workplace-research:${stamp}`,payload});const item=store.pendingEvidence(run.id)[0];
 const register=createNexusRegister({executeSql,verifiedSchemaVersion:registerSchemaVersion});
 const controller=new RunController({store,token,register});await controller.flushEvidence();
 const replay=await register.appendEvidence({idempotencyKey:item.delivery_key,payloadHash:item.payload_hash,payload:item.payload});
 if(store.pendingEvidence(run.id).length!==0)throw new Error('queue_not_acknowledged');
 process.stdout.write(JSON.stringify({type:'result',status:'live_register_append_and_replay_pass',recordIds:replay.recordIds,payloadHash:replay.payloadHash,hostSqlCalls:calls,cutoff:store.cutoff(config.agent_id),approvalStatus:'Draft/UNRESOLVED',directory})+'\n');store.release(token);
}catch(e){process.stdout.write(JSON.stringify({type:'result',status:'failed',error:e.message})+'\n');process.exitCode=1}
finally{store.close();rl.close()}
