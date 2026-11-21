import {ReportReview} from './report-review.mjs';
import {createReviewServer} from './review-server.mjs';
import {createSupabaseReviewAuth} from './supabase-auth.mjs';
import {createEvidenceControl} from './evidence-control.mjs';
import {createBrowserSession} from './browser-session.mjs';
import {draftReport} from '../reporting/report.mjs';
export function createConnectedReview({store,auth,reviewSnapshot,origin,now,allowLocalHttp=false}) {
 const identity=createSupabaseReviewAuth(auth);
 const evidenceControl=createEvidenceControl({reviewSnapshot,now});
 const review=new ReportReview({store,authenticate:identity.authenticate,now});
 const browser=createBrowserSession({identity,origin,now,allowLocalHttp});
 const server=createReviewServer({review,authenticateRequest:browser.authenticateRequest,handlePublicRequest:browser.handlePublicRequest,origin});
 const saveReviewedDraft=async(token,options)=>{
  const run=store.assertLease(token),snapshot=structuredClone(options);
  const report=draftReport({run,...snapshot});
  const attestation=await evidenceControl.attest({report,evidence:snapshot.evidence});
  return review.saveDraft(token,{...snapshot,attestation});
 };
 return {review,server,evidenceControl,saveReviewedDraft};
}
