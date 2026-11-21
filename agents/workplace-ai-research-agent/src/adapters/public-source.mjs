import { lookup } from 'node:dns/promises';
import { isIP, BlockList } from 'node:net';
import https from 'node:https';
import http from 'node:http';
import { createHash } from 'node:crypto';

const denied = new BlockList();
for (const [ip, bits] of [['0.0.0.0',8],['10.0.0.0',8],['100.64.0.0',10],['127.0.0.0',8],['169.254.0.0',16],['172.16.0.0',12],['192.0.0.0',24],['192.0.2.0',24],['192.168.0.0',16],['198.18.0.0',15],['198.51.100.0',24],['203.0.113.0',24],['224.0.0.0',3]]) denied.addSubnet(ip,bits,'ipv4');
const global6 = new BlockList(); global6.addSubnet('2000::',3,'ipv6');
for (const [ip,bits] of [['2001::',23],['2001:db8::',32],['2002::',16]]) denied.addSubnet(ip,bits,'ipv6');
export function isPublicAddress(ip) {
 const family=isIP(ip);
 return family===4 ? !denied.check(ip,'ipv4') : family===6 && global6.check(ip,'ipv6') && !denied.check(ip,'ipv6');
}
export function publicUrl(value) {
 const u=new URL(value);
 if (!['http:','https:'].includes(u.protocol) || u.username || u.password || (u.port && !['80','443'].includes(u.port))) throw new Error('unsafe_url');
 const host=u.hostname.replace(/^\[|\]$/g,'');
 if (!host.includes('.') && !isIP(host)) throw new Error('unsafe_url');
 if (isIP(host) && !isPublicAddress(host)) throw new Error('unsafe_address');
 u.hash=''; return u;
}
// Pin the checked DNS address to the connection, retaining Host and TLS hostname.
async function boundedOperation(operation,signal){
 signal?.throwIfAborted();
 if(!signal)return operation;
 let stop;
 try{return await Promise.race([operation,new Promise((_,reject)=>{stop=()=>reject(new Error('aborted'));signal.addEventListener('abort',stop,{once:true});})]);}
 finally{signal.removeEventListener('abort',stop);}
}
export async function requestPublic(u,{signal,maxBytes=2_000_000,resolve=lookup}={}) {
 const hostname=u.hostname.replace(/^\[|\]$/g,'');
 const addresses=isIP(hostname)?[{address:hostname,family:isIP(hostname)}]:await boundedOperation(resolve(hostname,{all:true}),signal);
 if (!addresses.length || addresses.some(a=>!isPublicAddress(a.address))) throw new Error('unsafe_address');
 signal?.throwIfAborted();
 const selected=addresses[0];
 return new Promise((accept,reject)=>{
  const req=(u.protocol==='https:'?https:http).request(u,{signal,agent:false,headers:{Accept:'text/html,text/plain,application/json','Accept-Encoding':'identity','User-Agent':'Nexus-Research-Pilot/0.1'},lookup:(_host,options,cb)=>cb(null,options.all?[selected]:selected.address,selected.family)},res=>{
   if (res.headers['content-encoding'] && res.headers['content-encoding']!=='identity') {res.destroy();reject(new Error('unsupported_encoding'));return;}
   if (Number(res.headers['content-length'])>maxBytes) {res.destroy();reject(new Error('response_too_large'));return;}
   const chunks=[];let size=0;
   res.on('data',c=>{size+=c.length;if(size>maxBytes)res.destroy(new Error('response_too_large'));else chunks.push(c)});
   res.on('error',reject);res.on('end',()=>accept({status:res.statusCode,headers:res.headers,body:Buffer.concat(chunks).toString('utf8')}));
  });req.on('error',reject);req.end();
 });
}
function decode(s){return s.replace(/&(?:amp|lt|gt|quot|apos|#39);/g,x=>({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&#39;':"'"}[x]));}
export function extractSource(body,type,url){
 const html=type==='text/html';
 const meta={};
 if(html) for(const tag of body.match(/<meta\b[^>]*>/gi)||[]){
  const attrs={};for(const m of tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs))attrs[m[1].toLowerCase()]=decode(m[3]);
  if(attrs.property||attrs.name)meta[attrs.property||attrs.name]=attrs.content;
 }
 const dates=['article:published_time','datePublished','citation_publication_date'].filter(k=>meta[k]).map(k=>({value:meta[k],locator:`meta:${k}`}));
 const content=html?decode(body.replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi,' ').replace(/<!--[\s\S]*?-->/g,' ').replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim():body;
 return {content,metadata:{url,title:meta['og:title']||decode(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||''),author:meta.author||null,publisher:meta['og:site_name']||null,publicationDateCandidates:dates,publicationDateVerified:false,contentHash:createHash('sha256').update(body).digest('hex'),trust:'untrusted-source',claimVerification:'pending'}};
}
export function createSourceAdapter({guard,request=requestPublic,timeoutMs=15000,maxBytes=2_000_000,maxRedirects=4,now=()=>new Date()}={}){
 if(!guard)throw new Error('guard_required');
 return async ({url,signal}={})=>{
  let u=publicUrl(url);const visited=[];
  const bounded=signal?AbortSignal.any([signal,AbortSignal.timeout(timeoutMs)]):AbortSignal.timeout(timeoutMs);
  try{
   for(let i=0;i<=maxRedirects;i++){
    guard.reserve('fetch_public_source');bounded.throwIfAborted();visited.push(u.href);
    const r=await boundedOperation(request(u,{signal:bounded,maxBytes}),bounded);
    if(Buffer.byteLength(r.body)>maxBytes)throw new Error('response_too_large');
    if([301,302,303,307,308].includes(r.status)){
     if(!r.headers.location || i===maxRedirects)throw new Error('redirect_limit');
     const next=publicUrl(new URL(r.headers.location,u).href);
     if(u.protocol==='https:'&&next.protocol!=='https:')throw new Error('unsafe_redirect');
     u=next;continue;
    }
    if(r.status!==200) return {retrievalStatus:'unavailable',httpStatus:r.status,content:null,metadata:{url:u.href,retrievedAt:now().toISOString(),redirects:visited}};
    const type=(r.headers['content-type']||'').split(';')[0].trim().toLowerCase();
    if(!['text/html','text/plain','application/json'].includes(type))throw new Error('unsupported_content_type');
    return {...extractSource(r.body,type,u.href),retrievalStatus:'retrieved',httpStatus:200,retrievedAt:now().toISOString(),redirects:visited};
   }
  }catch(error){
   // Permission, cancellation and budget errors must stop orchestration.
   if(['cancelled','deadline','tool denied','allowance exhausted'].includes(error.message))throw error;
   return {retrievalStatus:'failed',content:null,errorCode:['unsafe_address','unsafe_url','unsafe_redirect','redirect_limit','response_too_large','unsupported_content_type','unsupported_encoding'].includes(error.message)?error.message:'retrieval_failed'};
  }
 };
}

// Passage matching establishes provenance only; a reviewer still checks claim meaning.
export function locateEvidence(source,passage){
 if(source.retrievalStatus!=='retrieved'||typeof passage!=='string'||passage.trim().length<20)return {status:'not_verified',reason:'missing_source_or_passage'};
 const offset=source.content.indexOf(passage);
 return offset<0?{status:'not_verified',reason:'passage_not_found'}:{status:'passage_located',offset,length:passage.length,contentHash:source.metadata.contentHash,semanticVerification:'pending'};
}
