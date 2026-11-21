import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateConfig,validateSchema} from '../src/config.mjs';
import {RunGuard} from '../src/guard.mjs';
import {toolContracts,unconfiguredAdapter} from '../src/tool-contracts.mjs';
const example=()=>JSON.parse(readFileSync(new URL('../config/pilot.example.json',import.meta.url)));
test('safe profile and matching contracts',()=>assert.deepEqual(validateConfig(example()).permissions.allowed_tools.sort(),Object.keys(toolContracts).sort()));
const mutations={
 'secret field':c=>c.api_key='secret','scheduling':c=>c.schedule.enabled=true,'payment':c=>c.limits.paid_execution_enabled=true,
 'publication':c=>c.permissions.external_publication=true,'extra tool':c=>c.permissions.allowed_tools.push('publish'),
 'duplicates':c=>c.scope.categories[0]=c.scope.categories[1],'timeout':c=>c.limits.timeout_seconds=1201,
 'budget':c=>c.limits.budget_aud_cents=501,'type':c=>c.limits.research_calls='60','missing owner':c=>delete c.owner,
 'word range':c=>c.report.target_max_words=700,'item range':c=>c.report.max_items=4
};
for(const [name,mutate]of Object.entries(mutations))test(`reject ${name}`,()=>{const c=example();mutate(c);assert.throws(()=>validateConfig(c))});
test('unsupported keyword fails closed',()=>assert.throws(()=>validateSchema('x',{pattern:'x'})));
test('cancel',()=>{const g=new RunGuard(example());g.cancel();assert.throws(()=>g.reserve('search_public_web'),/cancelled/)});
test('deadline',()=>{let n=0;const g=new RunGuard(example(),()=>n);n=1200000;assert.throws(()=>g.reserve('search_public_web'),/deadline/)});
test('denied tool',()=>assert.throws(()=>new RunGuard(example()).reserve('publish'),/denied/));
test('unknown and paid cost',()=>{const g=new RunGuard(example());assert.throws(()=>g.reserve('search_public_web',NaN),/pricing/);assert.throws(()=>g.reserve('search_public_web',1),/paid/)});
test('research limit counts retries',()=>{const c=example();c.limits.research_calls=2;const g=new RunGuard(c);g.reserve('search_public_web');g.reserve('fetch_public_source');assert.throws(()=>g.reserve('fetch_public_source'),/allowance/);assert.doesNotThrow(()=>g.reserve('save_checkpoint'))});
test('config mutation cannot expand guard',()=>{const c=example();const g=new RunGuard(c);c.permissions.allowed_tools.push('publish');assert.throws(()=>g.reserve('publish'))});
test('unconfigured adapter',async()=>assert.rejects(unconfiguredAdapter(),/unconfigured/));
