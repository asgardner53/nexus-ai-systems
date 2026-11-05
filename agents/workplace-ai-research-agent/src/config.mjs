import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
export const schema = JSON.parse(readFileSync(new URL('../schemas/config.schema.json',import.meta.url)));
const supported = new Set(['$schema','title','description','type','const','enum','required','properties','additionalProperties','minimum','maximum','minLength','items','minItems','maxItems','uniqueItems']);
export function validateSchema(v,s,p='$') {
 const fail=m=>{throw new Error(`${p}: ${m}`)};
 for(const k of Object.keys(s))if(!supported.has(k))fail(`unsupported schema keyword ${k}`);
 if('const' in s && JSON.stringify(v)!==JSON.stringify(s.const))fail('fixed policy mismatch');
 if(s.enum&&!s.enum.includes(v))fail('value not allowed');
 const match=t=>({null:v===null,object:v!==null&&typeof v==='object'&&!Array.isArray(v),array:Array.isArray(v),string:typeof v==='string',boolean:typeof v==='boolean',integer:Number.isSafeInteger(v)})[t]===true;
 if(s.type&&!(Array.isArray(s.type)?s.type:[s.type]).some(match))fail('invalid type');
 if(typeof v==='number'&&((s.minimum!==undefined&&v<s.minimum)||(s.maximum!==undefined&&v>s.maximum)))fail('outside limits');
 if(typeof v==='string'&&s.minLength!==undefined&&[...v].length<s.minLength)fail('string too short');
 if(Array.isArray(v)) {
  if((s.minItems!==undefined&&v.length<s.minItems)||(s.maxItems!==undefined&&v.length>s.maxItems))fail('item count');
  if(s.uniqueItems&&new Set(v.map(x=>JSON.stringify(x))).size!==v.length)fail('duplicates');
  if(s.items)v.forEach((x,i)=>validateSchema(x,s.items,`${p}[${i}]`));
 }else if(v!==null&&typeof v==='object') {
  for(const k of s.required??[])if(!Object.hasOwn(v,k))fail(`missing ${k}`);
  for(const [k,x]of Object.entries(v))if(Object.hasOwn(s.properties??{},k))validateSchema(x,s.properties[k],`${p}.${k}`);else if(s.additionalProperties===false)fail(`unknown ${k}`);
 }
 return v;
}
export function validateConfig(c) {
 validateSchema(c,schema);
 if(c.report.target_min_words>c.report.target_max_words)throw new Error('inverted word range');
 if(c.report.target_min_items>c.report.max_items)throw new Error('inverted item range');
 return c;
}
export function loadConfig(p){return validateConfig(JSON.parse(readFileSync(p,'utf8')))}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 try{loadConfig(process.argv[2]??fileURLToPath(new URL('../config/pilot.example.json',import.meta.url)));console.log('Configuration valid; live execution disabled.')}catch(e){console.error(e.message);process.exitCode=1}
}
