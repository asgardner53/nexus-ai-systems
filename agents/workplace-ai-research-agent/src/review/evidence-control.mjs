import {digest} from '../reporting/report.mjs';
// Trusted host owns this callback. Never expose attestation creation as an agent tool.
export function createEvidenceControl({reviewSnapshot,now=()=>Date.now()}) {
 if(typeof reviewSnapshot!=='function')throw new Error('evidence_reviewer_unconfigured');
 return {attest:async({report,evidence})=>{
  const snapshot=structuredClone({report,evidence});
  const checks=await reviewSnapshot(snapshot);
  if(checks?.reviewCompleted!==true||!checks.reviewerSubject)throw new Error('evidence_review_incomplete');
  return {...checks,reportHash:digest(snapshot.report),evidenceHash:digest(snapshot.evidence),reviewedAt:now()};
 }};
}
