import {createHash} from 'node:crypto';
import {publicUrl} from '../adapters/public-source.mjs';
export const digest=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
const text=value=>typeof value==='string'&&value.trim().length>0;
const words=s=>s.match(/\S+/g)?.length||0;
const esc=s=>String(s).replace(/[\[\]<>`]/g,'');
export function draftReport({run,selectedItems,events=[],practicalAction,evidenceGaps=[],quietWeekReason=null}){
 // Selection and interpretation remain research work; deterministic drafting never invents content.
 return {schemaVersion:'1',status:'Draft for Alec Gardner’s review',runId:run.id,windowStart:run.start,windowEnd:run.end,items:structuredClone(selectedItems),events:structuredClone(events),practicalAction,evidenceGaps:structuredClone(evidenceGaps),quietWeekReason};
}
export function renderReport(report,evidence){
 const sources=new Map(evidence.sources.map(s=>[s.id,s])),claims=new Map(evidence.claims.map(c=>[c.id,c]));
 const lines=['# Workplace AI research report','',report.status,`Reporting window: ${report.windowStart} to ${report.windowEnd}`,''];
 report.items.forEach((item,i)=>{
  lines.push(`## ${i+1}. ${esc(item.title)}`,`Organisation: ${esc(item.organisation)} · Category: ${esc(item.category)}`,`Publication date: ${item.publicationDate} · Announcement date: ${item.announcementDate||'not established'}`,`Ranking rationale: ${esc(item.rankingRationale)}`);
  if(item.windowException)lines.push(`Window exception: ${esc(item.windowException)}`);
  for(const id of item.claimIds){const c=claims.get(id);if(!c)throw new Error('unregistered_claim');lines.push('',`${c.type==='attributed claim'?'Attributed claim':c.type==='interpretation'?'Supported interpretation':c.type==='fact'?'Verified fact':'Unresolved evidence'}: ${esc(c.safeWording||c.text)}`,`Evidence status: ${esc(c.verificationStatus)}`);}
  lines.push('',`Workplace relevance: ${esc(item.workplaceRelevance)}`,`Evidence strength and limitations: ${esc(item.limitations)}`);
  for(const id of item.sourceIds){const s=sources.get(id);if(!s)throw new Error('unregistered_source');publicUrl(s.url);lines.push(`Source: ${esc(s.title)} — ${esc(s.authorIssuingBody)} (${s.publicationDate||'date not verified'}). ${s.url}`)}
 });
 if(report.events.length){lines.push('','## Upcoming events');for(const e of report.events)lines.push(`- ${esc(e.title)} — ${e.startsAt} (${e.timezone}); ${esc(e.formatLocation)}. ${e.registrationUrl}`)}
 lines.push('','## Practical action',esc(report.practicalAction),'','## Evidence gaps',...(report.evidenceGaps.length?report.evidenceGaps.map(x=>`- ${esc(x)}`):['No additional gaps recorded.']));
 if(report.quietWeekReason)lines.push(`Shortlist exception: ${esc(report.quietWeekReason)}`);
 return lines.join('\n')+'\n';
}
export function validateReport(report,{run,evidence,attestation,now=Date.now()}){
 const errors=[],warnings=[];const check=(ok,code)=>{if(!ok)errors.push(code)};
 check(report.runId===run.id&&report.windowStart===run.start&&report.windowEnd===run.end,'run_window_mismatch');
 check(report.status==='Draft for Alec Gardner’s review','draft_label_required');
 const cfg=run.config.report,start=Date.parse(run.start),end=Date.parse(run.end);
 check(Array.isArray(report.items)&&report.items.length>0&&report.items.length<=cfg.max_items,'item_count');
 if(report.items.length<cfg.target_min_items){
  check(cfg.allow_fewer_when_evidence_insufficient&&text(report.quietWeekReason),'quiet_week_reason_required');
  check(attestation?.coverage?.completed===true&&Array.isArray(attestation.coverage.searchPasses)&&['primary','academic','practitioner','challenge','currency'].every(p=>attestation.coverage.searchPasses.includes(p)),'shortlist_search_coverage_required');
 }
 check(Array.isArray(report.events)&&report.events.length<=cfg.max_events,'event_count');
 check(text(report.practicalAction),'practical_action_required');
 const claims=new Map(evidence.claims.map(c=>[c.id,c])),sources=new Map(evidence.sources.map(s=>[s.id,s]));
 const seen=new Set(),urls=new Set();
 for(const item of report.items){
  check(text(item.id)&&!seen.has(item.id),'duplicate_item');seen.add(item.id);
  for(const field of ['title','organisation','category','rankingRationale','workplaceRelevance','limitations'])check(text(item[field]),`item_${field}_required`);
  check(run.config.scope.categories.includes(item.category),'invalid_category');
  check(attestation?.itemChecks?.[item.id]?.itemHash===digest(item)&&attestation.itemChecks[item.id].datesChecked===true&&attestation.itemChecks[item.id].editorialWordingReviewed===true,'item_editorial_review_required');
  const published=Date.parse(item.publicationDate);check(Number.isFinite(published),'publication_date_required');
  if(published<start||published>=end)check(text(item.windowException),'out_of_window');
  if(item.announcementDate){check(Number.isFinite(Date.parse(item.announcementDate)),'announcement_date_invalid');if(Date.parse(item.announcementDate)<start)check(text(item.windowException),'old_announcement_republished');}
  check(Array.isArray(item.claimIds)&&item.claimIds.length>0,'claim_references_required');
  check(Array.isArray(item.sourceIds)&&item.sourceIds.length>0,'source_references_required');
  for(const id of item.claimIds||[]){
   const c=claims.get(id);check(!!c,'unregistered_claim');if(!c)continue;
   check(['provisionally supported','verified','verified qualified'].includes(c.verificationStatus),'unresolved_claim_in_shortlist');
   check(['attributed claim','interpretation','fact'].includes(c.type),'unsupported_claim_type');
   if(c.type==='fact')check(['verified','verified qualified'].includes(c.verificationStatus),'fact_requires_verified_status');
   check(evidence.links.some(l=>l.claimId===id&&item.sourceIds.includes(l.sourceId)&&l.role==='supporting'),'claim_not_supported_by_item_sources');
   check(attestation?.claimChecks?.[id]?.claimHash===digest(c)&&attestation.claimChecks[id].supportsWording===true,'claim_semantic_review_required');
  }
  for(const id of item.sourceIds||[]){
   const s=sources.get(id);check(!!s,'unregistered_source');if(!s)continue;
   try{const u=publicUrl(s.url).href;check(!urls.has(u),'duplicate_source_development');urls.add(u)}catch{errors.push('unsafe_source_url')}
   const reviewed=attestation?.sourceChecks?.[id];
   check(s.retrievalStatus==='retrieved'&&reviewed?.contentHash===s.contentHash&&reviewed.linkResolved===true&&Number.isFinite(Date.parse(reviewed.checkedAt))&&now-Date.parse(reviewed.checkedAt)>=0&&now-Date.parse(reviewed.checkedAt)<=86400000,'source_validation_required');
  }
 }
 for(const event of report.events){
  check(text(event.title)&&text(event.formatLocation),'event_fields_required');
  check(Number.isFinite(Date.parse(event.startsAt))&&Date.parse(event.startsAt)>Math.max(end,now)&&/Z$|[+-]\d\d:\d\d$/.test(event.startsAt),'event_date_required');
  try{new Intl.DateTimeFormat('en-AU',{timeZone:event.timezone}).format();publicUrl(event.registrationUrl)}catch{errors.push('event_timezone_or_url_invalid')}
  check(attestation?.eventChecks?.[event.id]?.eventHash===digest(event)&&attestation.eventChecks[event.id].verified===true,'event_verification_required');
 }
 check(attestation?.evidenceHash===digest(evidence),'evidence_snapshot_changed');
 check(attestation?.reportHash===digest(report),'report_snapshot_changed');
 check(attestation?.australianSearchCompleted===true,'australian_search_required');
 check(attestation?.challengeCompleted===true,'challenge_review_required');
 let content='';try{content=renderReport(report,evidence)}catch{errors.push('render_failed')}
 const wordCount=words(content);check(wordCount<=cfg.target_max_words,'report_too_long');
 if(wordCount<cfg.target_min_words){if(report.items.length<cfg.target_min_items&&text(report.quietWeekReason))warnings.push('short_report_justified_by_quiet_week');else errors.push('report_too_short')}
 return {validatedAt:now,passed:errors.length===0,evidenceReviewed:errors.length===0,errors:[...new Set(errors)],warnings,wordCount,reportHash:digest(report),evidenceHash:digest(evidence),contentHash:digest(content),content};
}
