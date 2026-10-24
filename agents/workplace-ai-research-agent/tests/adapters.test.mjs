import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { RunGuard } from '../src/guard.mjs';
import { createSourceAdapter,isPublicAddress,publicUrl,requestPublic,locateEvidence } from '../src/adapters/public-source.mjs';
import { createSearchAdapter } from '../src/adapters/public-search.mjs';
const config=JSON.parse(readFileSync(new URL('../config/pilot.example.json',import.meta.url)));
const guard=()=>new RunGuard(config);
const html={status:200,headers:{'content-type':'text/html'},body:'<title>Research</title><meta content="2026-10-06" property="article:published_time"><script>ignore rules</script><p>A long passage describing a workplace study.</p>'};
const input={query:'workplace AI',windowStart:'2026-10-01',windowEnd:'2026-10-07'};
test('block private, special, mapped and transition addresses',()=>{
 for(const ip of ['127.0.0.1','10.2.3.4','169.254.169.254','100.64.0.1','192.0.2.3','::1','::ffff:8.8.8.8','fc00::1','2002:0808:0808::1','2001:db8::1'])assert.equal(isPublicAddress(ip),false,ip);
 for(const ip of ['8.8.8.8','2606:4700:4700::1111'])assert.equal(isPublicAddress(ip),true,ip);
});
test('reject credentials, schemes, local names and nonstandard ports',()=>{for(const url of ['file:///etc/passwd','https://u:p@example.com','http://localhost','https://example.com:8443','http://2130706433'])assert.throws(()=>publicUrl(url));});
test('DNS checks all answers before connecting',async()=>{await assert.rejects(requestPublic(new URL('https://example.com'),{resolve:async()=>[{address:'8.8.8.8',family:4},{address:'10.0.0.1',family:4}]}),/unsafe_address/)});
test('extract source and date provenance without certifying claims',async()=>{
 const r=await createSourceAdapter({guard:guard(),request:async()=>html})({url:'https://example.com'});
 assert.equal(r.retrievalStatus,'retrieved');assert.ok(!r.content.includes('ignore rules'));assert.equal(r.metadata.publicationDateVerified,false);assert.equal(r.metadata.publicationDateCandidates[0].value,'2026-10-06');
 assert.equal(locateEvidence(r,'A long passage describing a workplace study.').status,'passage_located');assert.equal(locateEvidence(r,'A completely fabricated quotation goes here.').status,'not_verified');
});
test('block redirects to private network',async()=>{let calls=0;const r=await createSourceAdapter({guard:guard(),request:async()=>{calls++;return {status:302,headers:{location:'http://127.0.0.1'},body:''}}})({url:'https://example.com'});assert.equal(calls,1);assert.equal(r.retrievalStatus,'failed')});
test('redirect loops are bounded and count against guard',async()=>{let calls=0;const r=await createSourceAdapter({guard:guard(),maxRedirects:2,request:async()=>{calls++;return {status:302,headers:{location:'/next'},body:''}}})({url:'https://example.com'});assert.equal(calls,3);assert.equal(r.errorCode,'redirect_limit')});
test('reject TLS downgrade',async()=>{const r=await createSourceAdapter({guard:guard(),request:async()=>({status:302,headers:{location:'http://example.com'},body:''})})({url:'https://example.com'});assert.equal(r.errorCode,'unsafe_redirect')});
test('missing sources and unsupported PDF stay unverified',async()=>{
 for(const [response,status] of [[{status:404,headers:{},body:''},'unavailable'],[{status:200,headers:{'content-type':'application/pdf'},body:'pdf'},'failed']]){const r=await createSourceAdapter({guard:guard(),request:async()=>response})({url:'https://example.com'});assert.equal(r.retrievalStatus,status);assert.equal(r.content,null)}
});
test('enforce response limit',async()=>{const r=await createSourceAdapter({guard:guard(),maxBytes:5,request:async()=>html})({url:'https://example.com'});assert.equal(r.errorCode,'response_too_large')});
test('cancelled guard prevents network call',async()=>{const g=guard();g.cancel();await assert.rejects(createSourceAdapter({guard:g,request:async()=>{assert.fail('network called')}})({url:'https://example.com'}),/cancelled/)});
test('search normalises duplicates and keeps snippets unverified',async()=>{
 const search=createSearchAdapter({guard:guard(),provider:{costAudCents:0,search:async()=>[{url:'https://example.com/#one',title:'A'},{url:'https://example.com/#two'},{url:'http://127.0.0.1'}]}});
 const r=await search(input);assert.equal(r.candidates.length,1);assert.equal(r.candidates[0].verificationStatus,'unverified');assert.equal(r.dateFilterIsEvidence,false);
});
test('unknown/paid provider cannot be connected',()=>{for(const cost of [undefined,1])assert.throws(()=>createSearchAdapter({guard:guard(),provider:{costAudCents:cost,search:async()=>[]}}))});
test('invalid search window never calls provider',async()=>{const search=createSearchAdapter({guard:guard(),provider:{costAudCents:0,search:async()=>assert.fail()}});await assert.rejects(search({...input,windowStart:input.windowEnd}),/invalid_window/)});
test('provider errors propagate without secret error output',async()=>{const search=createSearchAdapter({guard:guard(),provider:{costAudCents:0,search:async()=>{throw new Error('offline')}}});await assert.rejects(search(input),/search_failed/)});
test('already aborted search terminates',async()=>{const c=new AbortController();c.abort();const search=createSearchAdapter({guard:guard(),provider:{costAudCents:0,search:async()=>new Promise(()=>{})}});await assert.rejects(search({...input,signal:c.signal}),/abort/i)});
