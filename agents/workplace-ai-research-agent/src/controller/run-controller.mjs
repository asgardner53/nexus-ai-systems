// Host owns tools and register connection; the model cannot replace these boundaries.
export class RunController {
 constructor({store,token,tools={},register}){this.store=store;this.token=token;this.tools=tools;this.register=register}
 async call({key,tool,input,signal}){
  const adapter=this.tools[tool];if(typeof adapter!=='function')throw new Error('adapter_unconfigured');signal?.throwIfAborted();
  const reservation=this.store.reserve(this.token,{key,tool,input});if(reservation.cached)return reservation.result;
  const local=new AbortController();const bounded=signal?AbortSignal.any([signal,local.signal]):local.signal;
  let nested=0,listener;const guard={reserve:(nestedTool,cost=0)=>{
   this.store.assertLease(this.token);if(nestedTool!==tool||cost!==0)throw new Error('nested_tool_denied');
   if(nested++===0)return;
   const nestedKey=`${key}:transport:${nested}`;
   this.store.reserve(this.token,{key:nestedKey,tool,input});this.store.complete(this.token,nestedKey,null);
  }};
  const poll=setInterval(()=>{try{this.store.heartbeat(this.token)}catch{local.abort()}},250);
  try{
   const result=await Promise.race([adapter(input,{signal:bounded,guard}),new Promise((_,reject)=>{listener=()=>reject(new Error('run_stopped'));bounded.addEventListener('abort',listener,{once:true});if(bounded.aborted)listener();})]);
   bounded.throwIfAborted();this.store.complete(this.token,key,result);return result;
  }finally{clearInterval(poll);if(listener)bounded.removeEventListener('abort',listener)}
 }
 async flushEvidence({signal}={}){
  if(this.register?.schemaVerified!==true||this.register?.supportsIdempotency!==true||typeof this.register.appendEvidence!=='function')throw new Error('register_connection_unverified');
  for(const item of this.store.pendingEvidence(this.token.runId)){
   signal?.throwIfAborted();const run=this.store.assertLease(this.token);
   if(item.attempts>=1+run.config.limits.retries_per_failure)throw new Error('register_retry_limit');
   const local=new AbortController();const bounded=signal?AbortSignal.any([signal,local.signal]):local.signal;let listener;
   const poll=setInterval(()=>{try{this.store.heartbeat(this.token)}catch{local.abort()}},250);
   try{
    const receipt=await Promise.race([this.register.appendEvidence({idempotencyKey:item.delivery_key,payloadHash:item.payload_hash,payload:item.payload,signal:bounded}),new Promise((_,reject)=>{listener=()=>reject(new Error('run_stopped'));bounded.addEventListener('abort',listener,{once:true});if(bounded.aborted)listener();})]);
    this.store.delivered(this.token,item.id,receipt);
   }catch(error){try{this.store.deliveryFailed(this.token,item.id)}catch{}throw new Error('register_delivery_pending')}
   finally{clearInterval(poll);if(listener)bounded.removeEventListener('abort',listener)}
  }
 }
}
