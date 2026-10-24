import { publicUrl } from './public-source.mjs';
// Host supplies an approved public-web connector; no arbitrary endpoint or secret is model input.
export function createSearchAdapter({guard,provider,timeoutMs=15000}={}){
 if(!guard)throw new Error('guard_required');
 if(!provider || typeof provider.search!=='function' || provider.costAudCents!==0)throw new Error('approved_zero_cost_provider_required');
 return async ({query,windowStart,windowEnd,signal}={})=>{
  if(typeof query!=='string'||!query.trim()||query.length>1000)throw new Error('invalid_query');
  const start=Date.parse(windowStart),end=Date.parse(windowEnd);
  if(!Number.isFinite(start)||!Number.isFinite(end)||start>=end)throw new Error('invalid_window');
  signal?.throwIfAborted();
  guard.reserve('search_public_web',provider.costAudCents);
  const bounded=signal?AbortSignal.any([signal,AbortSignal.timeout(timeoutMs)]):AbortSignal.timeout(timeoutMs);
  let timer;
  try{
   const results=await Promise.race([provider.search({query:query.trim(),windowStart,windowEnd,signal:bounded}),new Promise((_,reject)=>{const stop=()=>reject(new Error('search_cancelled'));bounded.addEventListener('abort',stop,{once:true});timer=()=>bounded.removeEventListener('abort',stop);if(bounded.aborted)stop();})]);
   if(!Array.isArray(results)||results.length>100)throw new Error('invalid_provider_response');
   const seen=new Set(),candidates=[];
   for(const item of results){
    try{const url=publicUrl(item.url).href;if(seen.has(url))continue;seen.add(url);
     candidates.push({url,title:String(item.title||'').slice(0,500),snippet:String(item.snippet||'').slice(0,2000),reportedDate:item.date||null,verificationStatus:'unverified',trust:'untrusted-source'});
    }catch{continue;}
   }
   return {candidateUrls:candidates.map(x=>x.url),candidates,windowStart,windowEnd,dateFilterIsEvidence:false};
  }catch(error){
   if(signal?.aborted)throw new Error('search_cancelled');
   throw new Error(bounded.aborted?'search_timeout':'search_failed');
  }finally{timer?.();}
 };
}
