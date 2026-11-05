-- Additive integration with inspected evidence.sources/claims/claim_sources.
-- Server/host connection only; no browser/client role is granted access.
create table evidence.research_delivery_receipts (
 delivery_key text primary key,
 payload_hash text not null,
 receipt jsonb not null,
 created_at timestamptz not null default now()
);
alter table evidence.research_delivery_receipts enable row level security;
revoke all on evidence.research_delivery_receipts from public,anon,authenticated;

create function evidence.append_research_bundle(p_key text,p_hash text,p_payload_text text)
returns jsonb language plpgsql security invoker set search_path=''
as $$
declare
 p jsonb := p_payload_text::jsonb;
 old_receipt jsonb; old_hash text; s jsonb; c jsonb; l jsonb;
 ids jsonb := '[]'::jsonb; receipt jsonb;
begin
 if p_key is null or length(p_key) not between 1 and 200 or p_hash is distinct from encode(sha256(convert_to(p_payload_text,'UTF8')),'hex') then raise exception 'Invalid delivery identity/hash'; end if;
 perform pg_advisory_xact_lock(hashtextextended(p_key,0));
 select r.receipt,r.payload_hash into old_receipt,old_hash from evidence.research_delivery_receipts r where delivery_key=p_key;
 if found then
  if old_hash<>p_hash then raise exception 'Idempotency payload conflict'; end if;
  return old_receipt;
 end if;
 if p->>'materiality' is distinct from 'M2' or p->>'status' is distinct from 'Draft' or p->>'humanDecisionOwner' is distinct from 'Alec Gardner' then raise exception 'Invalid draft boundary'; end if;
 if jsonb_typeof(p->'sources') is distinct from 'array' or jsonb_typeof(p->'claims') is distinct from 'array' or jsonb_typeof(p->'links') is distinct from 'array' then raise exception 'Invalid bundle arrays'; end if;
 if jsonb_array_length(p->'sources') not between 1 and 50 or jsonb_array_length(p->'claims') not between 1 and 50 or jsonb_array_length(p->'links') not between 1 and 200 then raise exception 'Bundle limits'; end if;
 for s in select value from jsonb_array_elements(p->'sources') loop
  if coalesce(s->>'id','') not like 'NEE-AI-RA-%' or coalesce(s->>'title','')='' or coalesce(s->>'authorIssuingBody','')='' or coalesce(s->>'url','') !~ '^https?://' or coalesce(s->>'contentHash','')='' or coalesce(s->>'retrievedAt','')='' then raise exception 'Source mapping incomplete'; end if;
  if exists(select 1 from evidence.sources where source_id=s->>'id') then raise exception 'Existing source identity: use new version or reuse workflow'; end if;
  insert into evidence.sources(source_id,title,author_issuing_body,source_type,provenance,locator,date_accessed,source_quality,notes)
   values(s->>'id',s->>'title',s->>'authorIssuingBody',s->>'sourceType',s->>'provenance',s->>'url',(s->>'retrievedAt')::timestamptz::date,s->>'sourceQuality','Research-agent provisional ingestion; content hash: '||(s->>'contentHash')||'; publication date not verified.');
  ids=ids||jsonb_build_array(s->>'id');
 end loop;
 for c in select value from jsonb_array_elements(p->'claims') loop
  if coalesce(c->>'id','') not like 'NEE-AI-RA-%' or coalesce(c->>'text','')='' or coalesce(c->>'jurisdiction','')='' or coalesce(c->>'type','') not in ('attributed claim','interpretation','hypothesis','unresolved') or coalesce(c->>'verificationStatus','') not in ('provisionally supported','unresolved') or c->>'humanApprovalRequired' is distinct from 'true' then raise exception 'Claim approval/mapping forbidden'; end if;
  if exists(select 1 from evidence.claims where claim_id=c->>'id') then raise exception 'Existing claim identity: use new version or reuse workflow'; end if;
  insert into evidence.claims(claim_id,claim,claim_type,domain,materiality,jurisdiction,population_context,intended_use,verification_status,limitations,human_gate_required,human_decision_owner,owner)
   values(c->>'id',c->>'text',case c->>'type' when 'attributed claim' then 'ATTRIBUTED_CLAIM' when 'interpretation' then 'INTERPRETATION' when 'hypothesis' then 'HYPOTHESIS' else 'UNRESOLVED' end,'WORK','M2',c->>'jurisdiction',c->>'populationContext',array['Workplace AI research draft'],case c->>'verificationStatus' when 'provisionally supported' then 'PROVISIONAL' else 'UNRESOLVED' end,coalesce(c->>'limitations','Semantic claim review and publication date verification pending.'),true,'Alec Gardner','Workplace AI Research Agent');
  ids=ids||jsonb_build_array(c->>'id');
 end loop;
 for l in select value from jsonb_array_elements(p->'links') loop
  if not exists(select 1 from jsonb_array_elements(p->'claims') x where x->>'id'=l->>'claimId') or not exists(select 1 from jsonb_array_elements(p->'sources') x where x->>'id'=l->>'sourceId') or coalesce(l->>'locator','')='' or coalesce(l->>'role','') not in ('supporting','contradicting','context') then raise exception 'Invalid claim-source mapping'; end if;
  insert into evidence.claim_sources(claim_id,source_id,relationship_type,evidence_locator,directness,verification_result,researcher_note,human_review_required)
   values(l->>'claimId',l->>'sourceId',case l->>'role' when 'supporting' then 'SUPPORTING' when 'contradicting' then 'CONTRARY' else 'CONTEXTUAL' end,l->>'locator','PARTIAL',case l->>'role' when 'contradicting' then 'CONTRADICTS' else 'QUALIFIES' end,'Provisional agent link; independent semantic review pending.',true);
 end loop;
 if exists(select 1 from jsonb_array_elements(p->'claims') x where not exists(select 1 from jsonb_array_elements(p->'links') y where y->>'claimId'=x->>'id')) then raise exception 'Unlinked claim'; end if;
 receipt=jsonb_build_object('idempotencyKey',p_key,'payloadHash',p_hash,'recordIds',ids,'schemaVersion','nexus-register-research-append-v1');
 insert into evidence.research_delivery_receipts(delivery_key,payload_hash,receipt) values(p_key,p_hash,receipt);
 return receipt;
end;
$$;
revoke execute on function evidence.append_research_bundle(text,text,text) from public,anon,authenticated;
comment on function evidence.append_research_bundle(text,text,text) is 'Host-only append of provisional M2 research; no approval/release rights; replay returns original receipt.';
