import {createInterface} from 'node:readline';
import {readFileSync,writeFileSync} from 'node:fs';
import {RunGuard} from '../src/guard.mjs';
import {createHostedWeb} from '../src/adapters/hosted-web.mjs';
const config=JSON.parse(readFileSync(new URL('../config/pilot.example.json',import.meta.url)));
const rl=createInterface({input:process.stdin});const waiting=new Map();let calls=0;
rl.on('line',line=>{const message=JSON.parse(line);const pending=waiting.get(message.id);if(pending){waiting.delete(message.id);pending.resolve(message.resultFile?JSON.parse(readFileSync(message.resultFile)):message.result)}});
const invoke=(args,signal)=>new Promise((resolve,reject)=>{
 const id=++calls;const cancel=()=>{waiting.delete(id);reject(new Error('aborted'))};
 signal.addEventListener('abort',cancel,{once:true});
 waiting.set(id,{resolve:r=>{signal.removeEventListener('abort',cancel);resolve(r)}});
 process.stdout.write(JSON.stringify({type:'host_request',id,args})+'\n');
});
const web=createHostedWeb({guard:new RunGuard(config),invoke,timeoutMs:60000});
try{
 const results=await web.search({query:'site.arxiv.org/abs/2304.11771 Generative AI at Work',windowStart:'2023-01-01T00:00:00Z',windowEnd:'2025-01-01T00:00:00Z'});
 if(!results.candidates.length)throw new Error('no_candidates');
 const candidate=results.candidates.find(c=>c.url.includes('/abs/2304.11771'))||results.candidates[0];
 const source=await web.retrieve({url:candidate.url});
 if(source.retrievalStatus!=='retrieved')throw new Error('source_retrieval_failed');
 // Confirm a returned passage exists; never treat this as semantic claim approval.
 const passage=source.content.split('\n').find(x=>x.startsWith('> Abstract:'))?.slice(0,160);
 const evidence=web.locateEvidence(source,passage);
 if(evidence.status!=='passage_located')throw new Error('passage_not_located');
 const record={status:'supervised_host_smoke_pass',scope:'Historical-source connectivity test; not a weekly report or production release',candidateCount:results.candidates.length,selectedUrl:candidate.url,retrievalStatus:source.retrievalStatus,sourceMetadata:source.metadata,evidence,hostCalls:calls,completedAt:new Date().toISOString(),remaining:['Native source transport failed DNS resolution','Deployed provider connection absent','Semantic claim and publication date review pending','Shared register and report workflow pending']};
 if(process.argv[2])writeFileSync(process.argv[2],JSON.stringify(record,null,2)+'\n');
 process.stdout.write(JSON.stringify({type:'result',record})+'\n');
}catch(error){process.stdout.write(JSON.stringify({type:'result',status:'failed',error:error.message})+'\n');process.exitCode=1}
finally{rl.close()}
