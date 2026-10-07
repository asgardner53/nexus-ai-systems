import {ReportReview} from './report-review.mjs';
import {createReviewServer} from './review-server.mjs';
import {createSupabaseReviewAuth} from './supabase-auth.mjs';
import {createEvidenceControl} from './evidence-control.mjs';
export function createConnectedReview({store,auth,reviewSnapshot,origin,now}) {
 const identity=createSupabaseReviewAuth(auth);
 const evidenceControl=createEvidenceControl({reviewSnapshot,now});
 const review=new ReportReview({store,authenticate:identity.authenticate,now});
 const server=createReviewServer({review,authenticateRequest:identity.authenticateRequest,origin});
 return {review,server,evidenceControl};
}
