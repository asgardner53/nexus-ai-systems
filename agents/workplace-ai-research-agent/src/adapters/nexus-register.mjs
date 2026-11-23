import {createHash} from 'node:crypto';
import {validateEvidence} from '../controller/durable-store.mjs';
export const registerSchemaVersion='nexus-register-research-append-v1';
export function buildAppendQuery({idempotencyKey,payloadHash,payload}){
 validateEvidence(payload);
 if(typeof idempotencyKey!=='string'||!idempotencyKey||idempotencyKey.length>200)throw new Error('invalid_delivery_key');
 const text=JSON.stringify(payload),actual=createHash('sha256').update(text).digest('hex');
 if(payloadHash!==actual)throw new Error('payload_hash_mismatch');
 for(const source of payload.sources)if(!source.title||!source.authorIssuingBody||!source.sourceType||!source.provenance||!source.sourceQuality)throw new Error('source_mapping_incomplete');
 for(const claim of payload.claims)if(!claim.jurisdiction)throw new Error('claim_mapping_incomplete');
 const quote=s=>"'"+s.replaceAll("'","''")+"'";
 return `select evidence.append_research_bundle(${quote(idempotencyKey)},${quote(payloadHash)},${quote(text)}) as receipt;`;
}
function unwrap(result){
 if(result?.isError)throw new Error('register_sql_failed');
 if(Array.isArray(result))return result[0]?.receipt;
 if(result?.rows)return result.rows[0]?.receipt;
 const raw=result?.content?.find(x=>x.type==='text')?.text;
 const outer=JSON.parse(raw||'{}');
 const inner=outer.result; if(typeof inner!=='string')throw new Error('invalid_sql_response');
 const data=inner.match(/(?:^|\n)<untrusted-data-[^>]+>\s*([\s\S]*?)\s*<\/untrusted-data-[^>]+>/)?.[1];
 return JSON.parse(data||'null')?.[0]?.receipt;
}
export function createNexusRegister({executeSql,verifiedSchemaVersion}={}){
 if(typeof executeSql!=='function'||verifiedSchemaVersion!==registerSchemaVersion)throw new Error('register_schema_not_verified');
 return {schemaVerified:true,supportsIdempotency:true,appendEvidence:async input=>{
  input.signal?.throwIfAborted();const query=buildAppendQuery(input);
  const receipt=unwrap(await executeSql(query,{signal:input.signal}));
  if(receipt?.idempotencyKey!==input.idempotencyKey||receipt?.payloadHash!==input.payloadHash||!receipt.recordIds?.length)throw new Error('invalid_register_receipt');
  return receipt;
 }};
}
