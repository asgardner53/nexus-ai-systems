import test from 'node:test';
import assert from 'node:assert/strict';
import {createSupabaseReviewAuth} from '../src/review/supabase-auth.mjs';
import {createEvidenceControl} from '../src/review/evidence-control.mjs';
const settings={projectUrl:'https://test.supabase.co',publishableKey:'public-test',ownerSubject:'owner'};
test('server validates owner identity and rejects other or anonymous users',async()=>{
 for(const user of [{id:'other',email_confirmed_at:'date'},{id:'owner',email_confirmed_at:'date',is_anonymous:true},{id:'owner'}]){
 const auth=createSupabaseReviewAuth({...settings,fetchImpl:async()=>({ok:true,json:async()=>user})});assert.equal(await auth.authenticate({accessToken:'token'}),null);
 }
 const auth=createSupabaseReviewAuth({...settings,fetchImpl:async(url,options)=>{assert.equal(new URL(url).pathname,'/auth/v1/user');assert.equal(options.redirect,'error');return {ok:true,json:async()=>({id:'owner',email_confirmed_at:'date'})}}});assert.equal((await auth.authenticate({accessToken:'token'})).subject,'owner');
});
test('auth configuration and transport failures fail closed',async()=>{
 assert.throws(()=>createSupabaseReviewAuth({...settings,ownerSubject:null}),/configuration/);
 const auth=createSupabaseReviewAuth({...settings,fetchImpl:async()=>{throw Error('offline')}});assert.equal(await auth.authenticate({accessToken:'token'}),null);
});
test('evidence control refuses unfinished review and binds snapshot',async()=>{
 const control=createEvidenceControl({reviewSnapshot:async()=>({reviewCompleted:false})});await assert.rejects(control.attest({report:{},evidence:{}}),/incomplete/);
 const completed=createEvidenceControl({reviewSnapshot:async()=>({reviewCompleted:true,reviewerSubject:'host-reviewer'})});assert.equal((await completed.attest({report:{},evidence:{}})).reportHash.length,64);
});
