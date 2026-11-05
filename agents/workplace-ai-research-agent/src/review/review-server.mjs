import http from 'node:http';
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
export function reviewPage(record){
 return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Workplace AI report review</title><style>body{font:17px system-ui;max-width:960px;margin:40px auto;padding:20px;background:#f5f8fa;color:#183143}pre{white-space:pre-wrap;background:white;padding:24px}button{padding:12px;margin:8px}textarea{width:95%;height:80px}</style><h1>Report review</h1><p>Alec Gardner · Version ${record.version} · ${escape(record.status)}</p><p>Validation: ${record.validation.passed?'Passed':'Needs attention'}</p><ul>${record.validation.errors.map(e=>`<li>${escape(e)}</li>`).join('')}</ul><pre>${escape(record.content)}</pre><form method="post" action="/reports/${encodeURIComponent(record.id)}/decision"><input type="hidden" name="expectedHash" value="${escape(record.hash)}"><label>Review comments<textarea name="comments"></textarea></label><p><button name="decision" value="approve" ${!record.validation.passed||record.status!=='ready_for_review'?'disabled':''}>Approve this version</button><button name="decision" value="request_changes">Request changes</button><button name="decision" value="reject">Reject</button></p></form><p>Approval records your decision. It does not publish or distribute the report.</p></html>`;
}
export function createReviewServer({review,authenticateRequest,origin,handlePublicRequest}={}){
 if(typeof authenticateRequest!=='function'||!origin)throw new Error('review_authentication_required');
 return http.createServer(async(req,res)=>{
  res.setHeader('Content-Security-Policy',"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
  try{
   if(handlePublicRequest&&await handlePublicRequest(req,res))return;
   const context=await authenticateRequest(req);await review.principal(context);
   if(req.method==='GET'&&new URL(req.url,origin).pathname==='/reports'){
    const records=review.store.db.prepare('SELECT id,version,status FROM report_versions ORDER BY created_at DESC LIMIT 30').all();
    res.setHeader('Content-Type','text/html; charset=utf-8');res.end(`<!doctype html><html lang="en"><meta charset="utf-8"><title>Reports</title><h1>Reports for review</h1><ul>${records.map(r=>`<li><a href="/reports/${encodeURIComponent(r.id)}">Version ${r.version}: ${escape(r.status)}</a></li>`).join('')}</ul><form method="post" action="/sign-out"><button>Sign out</button></form></html>`);return;
   }
   const path=new URL(req.url,origin).pathname,match=path.match(/^\/reports\/([^/]+)(\/decision)?$/);
   if(!match){res.writeHead(404);res.end('Report not found');return}
   if(req.method==='GET'&&!match[2]){const record=review.get(decodeURIComponent(match[1]));res.setHeader('Content-Type','text/html; charset=utf-8');res.end(reviewPage(record));return}
   if(req.method!=='POST'||!match[2]){res.writeHead(405);res.end('Method not allowed');return}
   if(req.headers.origin!==origin)throw new Error('origin_denied');
   if(!String(req.headers['content-type']).startsWith('application/x-www-form-urlencoded'))throw new Error('invalid_body');
   let body='';for await(const chunk of req){body+=chunk.toString();if(Buffer.byteLength(body)>16384)throw new Error('body_limit')}
   const fields=new URLSearchParams(body);await review.decide(decodeURIComponent(match[1]),{expectedHash:fields.get('expectedHash'),decision:fields.get('decision'),comments:fields.get('comments')||'',authContext:context});
   res.writeHead(303,{Location:`/reports/${encodeURIComponent(match[1])}`});res.end();
  }catch{res.writeHead(403);res.end('Review unavailable or request not authorised');}
 });
}
