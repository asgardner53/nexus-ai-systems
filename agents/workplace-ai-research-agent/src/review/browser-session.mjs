import {randomBytes,createHash} from 'node:crypto';
const hash=s=>createHash('sha256').update(s).digest('hex');
const page='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Sign in to report review</title><h1>Sign in to report review</h1><p>Use your existing Nexus account. Sessions last up to 15 minutes.</p><form method="post" action="/sign-in"><label>Email <input name="email" type="email" autocomplete="username" required></label><label>Password <input name="password" type="password" autocomplete="current-password" required></label><button>Sign in</button></form></html>';
// Single-host, short-lived sessions. No refresh token or password is persisted.
export function createBrowserSession({identity,origin,now=()=>Date.now(),allowLocalHttp=false}){
 const url=new URL(origin);
 if(url.origin!==origin||(url.protocol!=='https:'&&!(allowLocalHttp&&url.protocol==='http:'&&['localhost','127.0.0.1'].includes(url.hostname))))throw new Error('secure_review_origin_required');
 const sessions=new Map(),attempts=new Map();const name=url.protocol==='https:'?'__Host-nexus-review':'nexus-review-local';
 const cookie=(value,seconds)=>`${name}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${seconds}${url.protocol==='https:'?'; Secure':''}`;
 const sessionKey=req=>{const parts=String(req.headers.cookie||'').split(';').map(x=>x.trim()).filter(x=>x.startsWith(name+'='));if(parts.length!==1)return null;const raw=parts[0].slice(name.length+1);return /^[a-f0-9]{64}$/.test(raw)?hash(raw):null};
 const cleanup=()=>{for(const [k,v] of sessions)if(v.expires<=now())sessions.delete(k);for(const[k,v]of attempts)if(v.until<=now())attempts.delete(k)};
 return {
  authenticateRequest:async req=>{cleanup();const key=sessionKey(req),session=key&&sessions.get(key);return {accessToken:session?.accessToken||null}},
  handlePublicRequest:async(req,res)=>{
   const path=new URL(req.url,origin).pathname;if(!['/sign-in','/sign-out'].includes(path))return false;
   if(req.method==='GET'&&path==='/sign-in'){res.setHeader('Content-Type','text/html; charset=utf-8');res.end(page);return true}
   if(req.method!=='POST'||req.headers.origin!==origin||!String(req.headers['content-type']).startsWith('application/x-www-form-urlencoded'))throw new Error('sign_in_denied');
   cleanup();
   if(path==='/sign-out'){const key=sessionKey(req);if(key)sessions.delete(key);res.writeHead(303,{'Set-Cookie':cookie('',0),Location:'/sign-in'});res.end();return true}
   const address=req.socket.remoteAddress||'unknown',count=attempts.get(address)||{count:0,until:now()+60000};
   if(count.count>=5||(!attempts.has(address)&&attempts.size>=1000)||sessions.size>=1000){res.writeHead(429);res.end('Please wait before signing in again.');return true}
   count.count++;attempts.set(address,count);
   let body='';for await(const chunk of req){body+=chunk.toString();if(Buffer.byteLength(body)>8192)throw new Error('body_limit')}
   const form=new URLSearchParams(body);let session;
   try{session=await identity.signIn({email:form.get('email'),password:form.get('password')})}catch{res.writeHead(403);res.end('Sign-in could not be verified.');return true}
   const old=sessionKey(req);if(old)sessions.delete(old);
   const raw=randomBytes(32).toString('hex');sessions.set(hash(raw),{accessToken:session.accessToken,expires:now()+session.expiresIn*1000});
   res.writeHead(303,{'Set-Cookie':cookie(raw,session.expiresIn),Location:'/reports'});res.end();return true;
  }
 };
}
