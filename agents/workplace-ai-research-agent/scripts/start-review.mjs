import {readFileSync} from 'node:fs';
import {DurableStore} from '../src/controller/durable-store.mjs';
import {createConnectedReview} from '../src/review/connected-review.mjs';
const required=['NEXUS_REVIEW_PROJECT_URL','NEXUS_REVIEW_PUBLIC_KEY','NEXUS_REVIEW_OWNER_SUBJECT','NEXUS_REVIEW_ORIGIN','NEXUS_REVIEW_DATABASE'];
const missing=required.filter(k=>!process.env[k]);
if(missing.length){console.error('Review setup incomplete: '+missing.join(', '));process.exit(1)}
const port=Number(process.env.NEXUS_REVIEW_PORT||8787);if(!Number.isSafeInteger(port)||port<1||port>65535)throw Error('invalid_port');
const store=new DurableStore(process.env.NEXUS_REVIEW_DATABASE);
const connected=createConnectedReview({store,auth:{projectUrl:process.env.NEXUS_REVIEW_PROJECT_URL,publishableKey:process.env.NEXUS_REVIEW_PUBLIC_KEY,ownerSubject:process.env.NEXUS_REVIEW_OWNER_SUBJECT},origin:process.env.NEXUS_REVIEW_ORIGIN,reviewSnapshot:async snapshot=>{
 const path=process.env.NEXUS_EVIDENCE_REVIEW_FILE;if(!path)throw Error('evidence_reviewer_unconfigured');
 const record=JSON.parse(readFileSync(path));
 const {digest}=await import('../src/reporting/report.mjs');
 if(record.reportHash!==digest(snapshot.report)||record.evidenceHash!==digest(snapshot.evidence))throw Error('review_snapshot_changed');
 return record;
}});
connected.server.listen(port,'127.0.0.1',()=>console.log('Review service ready behind the configured HTTPS origin.'));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>connected.server.close(()=>{store.close();process.exit(0)}));
