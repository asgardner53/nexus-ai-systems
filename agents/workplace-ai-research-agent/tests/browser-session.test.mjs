import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {DurableStore} from '../src/controller/durable-store.mjs';
import {createConnectedReview} from '../src/review/connected-review.mjs';
import {createBrowserSession} from '../src/review/browser-session.mjs';
const config=JSON.parse(readFileSync(new URL('../config/pilot.example.json',import.meta.url)));
test('browser sign-in, cookie review, expiry and logout are connected to verified owner',async t=>{
 const dir=mkdtempSync(join(tmpdir(),'review-session-'));let now=Date.now(),accepted=true;
 const store=new DurableStore(join(dir,'state.sqlite'));
 const connected=createConnectedReview({store,origin:'http://127.0.0.1',allowLocalHttp:true,now:()=>now,reviewSnapshot:async()=>({reviewCompleted:false}),auth:{projectUrl:'https://test.supabase.co',publishableKey:'test-public',ownerSubject:'owner',fetchImpl:async(url,options)=>{
  if(new URL(url).pathname.endsWith('/token')){assert.equal(JSON.parse(options.body).email,'owner@example.com');return {ok:true,json:async()=>({access_token:'server-only-token',expires_in:600})}}
  return {ok:true,json:async()=>({id:accepted?'owner':'other',email_confirmed_at:'date'})};
 }}});
 await new Promise(resolve=>connected.server.listen(0,'127.0.0.1',resolve));t.after(()=>{connected.server.close();store.close();rmSync(dir,{recursive:true,force:true})});
 const url=`http://127.0.0.1:${connected.server.address().port}`,headers={'content-type':'application/x-www-form-urlencoded',origin:'http://127.0.0.1'},body=new URLSearchParams({email:'owner@example.com',password:'fixture-password'});
 assert.equal((await fetch(url+'/sign-in')).status,200);assert.equal((await fetch(url+'/reports')).status,403);
 assert.equal((await fetch(url+'/sign-in',{method:'POST',headers:{...headers,origin:'https://hostile.example'},body})).status,403);
 const signed=await fetch(url+'/sign-in',{method:'POST',redirect:'manual',headers,body});assert.equal(signed.status,303);
 const setCookie=signed.headers.get('set-cookie');assert.match(setCookie,/HttpOnly/);assert.match(setCookie,/SameSite=Strict/);assert.ok(!setCookie.includes('server-only-token'));
 const cookie=setCookie.split(';')[0];assert.equal((await fetch(url+'/reports',{headers:{cookie}})).status,200);
 accepted=false;assert.equal((await fetch(url+'/reports',{headers:{cookie}})).status,403);accepted=true;
 const logout=await fetch(url+'/sign-out',{method:'POST',redirect:'manual',headers:{...headers,cookie},body:''});assert.equal(logout.status,303);assert.equal((await fetch(url+'/reports',{headers:{cookie}})).status,403);
 const again=await fetch(url+'/sign-in',{method:'POST',redirect:'manual',headers,body});const other=again.headers.get('set-cookie').split(';')[0];assert.notEqual(other,cookie);now+=600001;assert.equal((await fetch(url+'/reports',{headers:{cookie:other}})).status,403);
});
test('production session requires HTTPS and limits repeated login attempts',async()=>{
 assert.throws(()=>createBrowserSession({identity:{},origin:'http://example.com'}),/secure/);
 const s=createBrowserSession({identity:{signIn:async()=>{throw Error('invalid')}},origin:'https://review.example.com'});
 const req=()=>({url:'/sign-in',method:'POST',headers:{origin:'https://review.example.com','content-type':'application/x-www-form-urlencoded'},socket:{remoteAddress:'test'},async *[Symbol.asyncIterator](){yield Buffer.from('email=x&password=x')}});
 const res={writeHead(status){this.status=status},end(){}};
 for(let i=0;i<5;i++)await s.handlePublicRequest(req(),res);await s.handlePublicRequest(req(),res);assert.equal(res.status,429);
});

test('connected evidence control and browser session approve only the reviewed snapshot',async t=>{
 const {digest}=await import('../src/reporting/report.mjs');
 const now=Date.parse('2026-10-08T00:00:00Z'),dir=mkdtempSync(join(tmpdir(),'connected-review-'));
 const store=new DurableStore(join(dir,'state.sqlite'),{now:()=>now});
 const evidence={sources:[{id:'s1',title:'Fixture source',authorIssuingBody:'Fixture author',url:'https://example.com/source',contentHash:'fixture-excerpt',retrievalStatus:'retrieved'}],claims:[{id:'c1',text:'The publisher describes a workplace example.',type:'attributed claim',verificationStatus:'provisionally supported'}],links:[{claimId:'c1',sourceId:'s1',role:'supporting'}]};
 const connected=createConnectedReview({store,origin:'http://127.0.0.1',allowLocalHttp:true,now:()=>now,auth:{projectUrl:'https://test.supabase.co',publishableKey:'public-fixture',ownerSubject:'owner',fetchImpl:async url=>({ok:true,json:async()=>new URL(url).pathname.endsWith('/token')?{access_token:'fixture-token',expires_in:600}:{id:'owner',email_confirmed_at:'date'}})},reviewSnapshot:async({report,evidence})=>({reviewCompleted:true,reviewerSubject:'fixture-host-reviewer',coverage:{completed:true,searchPasses:['primary','academic','practitioner','challenge','currency']},australianSearchCompleted:true,challengeCompleted:true,itemChecks:{item:{itemHash:digest(report.items[0]),datesChecked:true,editorialWordingReviewed:true}},claimChecks:{c1:{claimHash:digest(evidence.claims[0]),supportsWording:true}},sourceChecks:{s1:{contentHash:'fixture-excerpt',linkResolved:true,checkedAt:new Date(now).toISOString()}}})});
 const run=store.create({config,windowStart:'2026-10-01',windowEnd:'2026-10-08'}),token=store.acquire(run.id,'fixture-host');
 const saved=await connected.saveReviewedDraft(token,{evidence,selectedItems:[{id:'item',title:'Fixture example',organisation:'Fixture organisation',category:'workplace_examples',publicationDate:'2026-10-03',rankingRationale:'Fixture',workplaceRelevance:'Fixture only.',limitations:'Synthetic evidence.',claimIds:['c1'],sourceIds:['s1']}],events:[],practicalAction:'Review the fixture.',evidenceGaps:[],quietWeekReason:'Fixture search found one suitable item.'});
 assert.equal(saved.validation.passed,true);
 await new Promise(resolve=>connected.server.listen(0,'127.0.0.1',resolve));t.after(()=>{connected.server.close();store.close();rmSync(dir,{recursive:true,force:true})});
 const url=`http://127.0.0.1:${connected.server.address().port}`,headers={origin:'http://127.0.0.1','content-type':'application/x-www-form-urlencoded'};
 const signIn=await fetch(url+'/sign-in',{method:'POST',redirect:'manual',headers,body:new URLSearchParams({email:'fixture@example.com',password:'fixture-password'})});
 headers.cookie=signIn.headers.get('set-cookie').split(';')[0];
 const decision=expectedHash=>fetch(`${url}/reports/${saved.id}/decision`,{method:'POST',redirect:'manual',headers,body:new URLSearchParams({decision:'approve',expectedHash})});
 assert.equal((await decision('stale-hash')).status,403);assert.equal((await decision(saved.hash)).status,303);
 assert.equal(connected.review.get(saved.id).status,'approved');
 assert.equal(store.db.prepare('SELECT reviewer_subject FROM report_review_decisions').get().reviewer_subject,'owner');
});
