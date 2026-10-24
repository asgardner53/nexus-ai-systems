import {validateConfig} from './config.mjs';
export class RunGuard {
 #config;#started;#now;#cancelled=false;#calls=0;
 constructor(config,now=()=>Date.now()){this.#config=structuredClone(validateConfig(config));this.#now=now;this.#started=now()}
 cancel(){this.#cancelled=true}
 reserve(tool,costAudCents=0){
  if(this.#cancelled)throw new Error('cancelled');
  if(this.#now()-this.#started>=this.#config.limits.timeout_seconds*1000)throw new Error('deadline');
  if(!this.#config.permissions.allowed_tools.includes(tool))throw new Error('tool denied');
  if(!Number.isSafeInteger(costAudCents)||costAudCents<0)throw new Error('unknown pricing');
  if(costAudCents>0)throw new Error('paid execution disabled');
  if(['search_public_web','fetch_public_source'].includes(tool)){
   if(this.#calls>=this.#config.limits.research_calls)throw new Error('allowance exhausted');this.#calls++;
  }
  return {researchCalls:this.#calls};
 }
}
