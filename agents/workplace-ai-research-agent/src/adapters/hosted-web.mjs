import {createHash} from 'node:crypto';
import {publicUrl,locateEvidence} from './public-source.mjs';
import {createSearchAdapter} from './public-search.mjs';

function toolText(result){
 if(result?.isError)throw new Error('host_tool_failed');
 const blocks=result?.content?.filter(x=>x.type==='text').map(x=>x.text)||[];
 const text=blocks.join('\n');
 if(!text || Buffer.byteLength(text)>2_000_000)throw new Error('invalid_host_response');
 return text;
}
export function parseSearchResponse(result){
 const text=toolText(result),results=[];
 // Service returns result headings followed by a source reference and synopsis.
 const pattern=/^(.+?) \((https?:\/\/[^\s]+)\)\n【([^】]+)】([^\n]*)(?:\n|$)/gm;
 for(const m of text.matchAll(pattern))results.push({title:m[1],url:m[2],snippet:m[4].slice(0,2000),sourceRef:m[3]});
 if(!results.length && !/no results|no search results/i.test(text))throw new Error('unknown_search_response_format');
 return results.slice(0,100);
}
// invoke is a trusted host callback, not a deployed API URL. It must abort promptly.
// No additional provider charge is reserved; host subscription usage is unmetered here.
export function createHostedWeb({guard,invoke,timeoutMs=30000}={}){
 if(typeof invoke!=='function')throw new Error('host_connection_required');
 const search=createSearchAdapter({guard,timeoutMs,provider:{costAudCents:0,search:async({query,windowStart,windowEnd,signal})=>parseSearchResponse(await invoke({system2_search_query:[{q:`${query} after:${windowStart.slice(0,10)} before:${windowEnd.slice(0,10)}`}],response_length:'short'},signal))}});
 async function retrieve({url,signal}){
  const u=publicUrl(url);guard.reserve('fetch_public_source');signal?.throwIfAborted();
  const bounded=signal?AbortSignal.any([signal,AbortSignal.timeout(timeoutMs)]):AbortSignal.timeout(timeoutMs);
  let listener;
  try{
   const response=await Promise.race([invoke({open:[{ref_id:u.href}],response_length:'short'},bounded),new Promise((_,reject)=>{listener=()=>reject(new Error('host_timeout'));bounded.addEventListener('abort',listener,{once:true});if(bounded.aborted)listener();})]);
   const raw=toolText(response);
   if(/Failed to fetch|^Internal Error|^Error|403.*Forbidden/i.test(raw))return {retrievalStatus:'unavailable',content:null,errorCode:'host_source_unavailable'};
   const ref=raw.match(/【([^】]+)】/u)?.[1];
   const lines=[...raw.matchAll(/^L(\d+): ?(.*)$/gm)];
   if(!lines.length || !ref)return {retrievalStatus:'failed',content:null,errorCode:'unknown_source_response_format'};
   const content=lines.map(m=>m[2]).join('\n');
   return {retrievalStatus:'retrieved',content,retrievedAt:new Date().toISOString(),metadata:{url:u.href,sourceRef:ref,contentHash:createHash('sha256').update(content).digest('hex'),hashScope:'host-returned-excerpt',publicationDateVerified:false,claimVerification:'pending',trust:'untrusted-source',transport:'host-managed',transportSecurityVerifiedByAdapter:false,coverage:'excerpt',lineStart:Number(lines[0][1]),lineEnd:Number(lines.at(-1)[1]),usageCost:'unmetered-host-subscription'}};
  }catch{return {retrievalStatus:'failed',content:null,errorCode:'host_retrieval_failed'}}
  finally{if(listener)bounded.removeEventListener('abort',listener)}
 }
 return {search,retrieve,locateEvidence};
}
