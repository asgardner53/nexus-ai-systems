# Nexus Audio Media Storage & Access Standard v1.0

## Document control

| Field | Value |
| --- | --- |
| Document ID | NEX-GOV-AMS-001 |
| Version | 1.0 |
| Status | Approved controlled standard |
| Owner and approval authority | Alec Gardner |
| Effective date | 10 October 2026, Australia/Sydney |
| Repository | `asgardner53/nexus-ai-systems` |
| Path | `governance/nexus-audio-media-storage-access-standard-v1.0.md` |
| Governing standard | NEX-GOV-AUD-001 Nexus Audio Evidence Standard v1.0 |
| Related data model | NEX-DM-AUD-001 Nexus Audio Evidence Register v1.0 |
| Target platform | Supabase Storage + private `audio` schema |
| Review trigger | Material Storage/Auth/RLS change; privacy or records requirement change; incident; new workflow/provider |

## 1. Purpose

Establish the controlled storage, access, retention, deletion and workflow-permission rules for raw audio/video evidence used by Nexus BMG.

This standard is required before any real student, participant, client, stakeholder or research recording is introduced into the Nexus Audio Evidence Register.

Core principle:

**AI assists. Humans decide. Institutions remain accountable.**

## 2. Scope

This standard applies to raw media and controlled derivatives used in:

- VET / ASQA;
- PD Studio;
- Governance / Client Assurance;
- Research Interviews.

It governs:

- bucket configuration;
- object naming and pathing;
- upload;
- access;
- signed URLs;
- retention;
- deletion;
- replacement/versioning;
- workflow permissions;
- incident response.

It does not itself authorise a recording to be made or uploaded.

## 3. Approved storage model

### 3.1 Bucket

Use one dedicated Supabase Storage bucket:

`nexus-audio-evidence`

The bucket must remain **PRIVATE**.

No public bucket, public URL or anonymous object access is permitted for controlled audio/video evidence.

### 3.2 Database relationship

The source object is referenced from:

`audio.source_recordings.storage_locator`

The database stores:

- bucket/object locator;
- source metadata;
- evidence identifiers;
- authority status;
- integrity hash where used;
- retention/deletion status.

The database does **not** store the raw audio/video bytes.

### 3.3 Storage API boundary

All Storage mutations must occur through the Supabase Storage API or supported Storage client.

Do not delete, move or mutate Storage objects by manually changing rows in `storage.objects`.

Storage metadata tables are treated as service-managed.

## 4. Object path convention

Use:

```text
[domain]/[audio_evidence_id]/[source_recording_id]/[object-name]
```

Example:

```text
VET/NAE-VET-0042/NASR-000042/source.m4a
```

Allowed domains:

- `VET`
- `PD`
- `GOV`
- `RES`
- `OTHER`

### Naming rules

Object names must:

- avoid participant/student/client names where not operationally required;
- avoid email addresses, phone numbers or IDs in filenames;
- use stable Nexus evidence identifiers;
- avoid free-text sensitive descriptions;
- preserve the original file extension where practical.

Preferred source object name:

`source.[extension]`

For authorised derivative files:

- `transcript-v001.txt`
- `transcript-v002.txt`
- `verified-extract-v001.txt`

Raw source objects and derivatives must remain distinguishable.

## 5. Data classification mapping

| Workflow | Default classification | Typical materiality |
| --- | --- | --- |
| VET / ASQA | RESTRICTED | M2 / M3 |
| PD Studio | INTERNAL; CONFIDENTIAL where personal/sensitive | M1 / M2 |
| Governance / Client Assurance | CONFIDENTIAL; RESTRICTED where highly sensitive | M2 / M3 |
| Research Interviews | INTERNAL / CONFIDENTIAL | M2 |

The workflow owner may raise classification. Lowering classification requires explicit human review.

## 6. Access principles

Apply:

1. **least privilege;**
2. **need to know;**
3. **purpose limitation;**
4. **time-limited access;**
5. **human accountability;**
6. **no public sharing;**
7. **no implicit access from authentication alone.**

A signed-in user is not automatically authorised to access any recording.

## 7. Supabase Storage RLS model

Access is enforced through RLS on `storage.objects`.

The initial implementation must not use a blanket:

`TO authenticated USING (true)`

or equivalent permissive policy.

### Required policy dimensions

Access policies must evaluate, as applicable:

- bucket ID;
- object path/domain;
- authenticated user;
- approved organisation/workflow membership;
- authorised role;
- action type;
- evidence status;
- explicit access grant where required.

Authorization data used in JWT-based policies must come from controlled authorization data such as app metadata or database membership records, not user-editable user metadata.

## 8. Service-role boundary

The Supabase `service_role` bypasses Storage RLS.

Therefore:

- never expose the service-role key in browser/mobile/public clients;
- use it only within trusted server-side execution;
- do not use service role as a shortcut for ordinary user access;
- log or otherwise control consequential server-side media operations;
- prefer user-scoped RLS wherever practical.

## 9. Upload control

### 9.1 Permitted uploaders

Uploads may be performed only by:

- an authorised assessor/reviewer/researcher;
- an approved server-side ingestion workflow;
- another explicitly authorised role under the workflow-specific rules below.

### 9.2 Upload restrictions

The bucket implementation should restrict allowed media types and maximum object size to the operational need.

Initial allowed families should be limited to approved audio/video formats required by Nexus workflows.

Do not enable broad unrestricted file-type uploads.

### 9.3 Upsert rule

Routine source-media upload must use **new stable object paths**, not silent overwrite/upsert.

If replacement is necessary:

- retain the prior evidence provenance;
- record replacement/supersession;
- use a new object/version where practical;
- do not silently replace material evidence.

## 10. Signed access standard

A signed URL is a **temporary bearer credential**. Anyone possessing it may be able to retrieve the object until the signed URL or cached access ceases to work.

### 10.1 Default validity

| Classification / use | Default signed URL lifetime |
| --- | ---: |
| RESTRICTED / M3 | 5 minutes |
| CONFIDENTIAL / M2–M3 | 10 minutes |
| INTERNAL controlled review | 15 minutes |
| Exceptional extended review | Maximum 60 minutes with explicit reason |

Long-lived signed URLs are prohibited by default.

### 10.2 Signed URL rules

Signed URLs must:

- be generated just-in-time;
- be generated only after access authorisation;
- not be stored as permanent database locators;
- not be pasted into public documents;
- not be used as reusable bookmarks;
- not be emailed or messaged where an authenticated workflow is available;
- be regenerated rather than extended indefinitely.

### 10.3 Revocation limitation

Do not rely on Auth-key rotation to revoke a Storage signed URL.

If urgent access termination is required:

1. stop generating new links;
2. remove or relocate the object through the Storage API where authorised;
3. treat previously issued signed URLs as potentially usable until expiry/cache invalidation;
4. escalate as a security/privacy incident where appropriate.

## 11. Authenticated direct access

Where the Nexus application supports secure authenticated media access, prefer:

- private-bucket authenticated download/stream;
- RLS checked against the current user;
- no reusable bearer URL exposed beyond the authorised session.

Signed URLs remain appropriate for controlled temporary access where direct authenticated access is impractical.

## 12. Workflow-specific permissions

### 12.1 VET / ASQA

Default classification: **RESTRICTED**

#### Upload

Permitted:

- authorised assessor;
- approved assessment ingestion service;
- authorised RTO workflow role where explicitly configured.

Learner direct upload to this controlled bucket is **not enabled by default**. If later required, it needs a separate policy and negative security tests.

#### Read/access

Permitted only to:

- authorised assessor assigned to the evidence;
- approved QA/review authority with a documented purpose;
- controlled server-side assessment workflow.

#### Delete

Routine assessors must not delete source evidence simply because an assessment is complete.

Deletion follows the authorised RTO records/retention process and must preserve required evidence/decision records.

#### Decision boundary

Storage access does not create assessment authority.

### 12.2 PD Studio

Default classification: **INTERNAL**

Upgrade to CONFIDENTIAL where the recording contains personal, employment, health, client or other sensitive context.

#### Upload

Permitted:

- participant through an approved PD ingestion workflow;
- authorised reviewer;
- controlled service workflow.

#### Read/access

Permitted:

- participant;
- authorised reviewer;
- controlled PD service.

#### Delete

Deletion follows the relevant PD evidence/records rule and any user-facing commitment made for the activity.

Deleting the raw reflection does not automatically delete a separately approved PD Journal record.

### 12.3 Governance / Client Assurance

Default classification: **CONFIDENTIAL**

Use RESTRICTED for particularly sensitive board, employee, investigation, assurance or client material.

#### Upload

Permitted:

- authorised Nexus reviewer;
- designated client evidence contact through an approved ingestion path;
- controlled assurance service.

#### Read/access

Permitted:

- assigned Nexus assurance personnel;
- authorised client decision owner/reviewer where agreed;
- specifically authorised independent reviewer where required.

Do not grant organisation-wide access merely because a user belongs to the client organisation.

#### Delete

Deletion must respect:

- engagement terms;
- legal hold/investigation requirements;
- assurance evidence requirements;
- agreed return/destruction obligations.

### 12.4 Research Interviews

Default classification: **INTERNAL / CONFIDENTIAL**

#### Upload

Permitted:

- authorised researcher/editor;
- approved research ingestion workflow.

#### Read/access

Permitted:

- authorised researcher/editor;
- approved transcription/research workflow;
- designated reviewer where necessary.

#### Delete

Retention/deletion must account for:

- participant consent;
- publication permissions;
- research/source-verification needs;
- any agreed embargo, anonymity or withdrawal arrangements.

Published quotations or conclusions must not depend on media that was destroyed before required verification was complete.

## 13. Retention standard

Nexus does **not** impose one universal retention period across all four workflows.

Each media object must be assigned a retention basis from the governing workflow.

### Required retention metadata

The operational record should capture:

- retention class;
- retention authority/source;
- retention start date;
- minimum retention-until date where known;
- legal/records hold status;
- scheduled review date;
- deletion eligibility;
- deletion approval owner;
- deletion completion date.

### Retention classes

Use:

- `RTO_CONTROLLED`
- `PD_CONTROLLED`
- `CLIENT_CONTRACTUAL`
- `RESEARCH_CONSENT`
- `LEGAL_HOLD`
- `OTHER_CONTROLLED`

Do not invent a retention duration where the controlling requirement has not been established.

## 14. Deletion standard

### 14.1 Deletion is irreversible

Storage object deletion is treated as a consequential action.

Deletion must use the Supabase Storage API.

Do not delete only the `storage.objects` database metadata row.

### 14.2 Pre-delete gate

Before deleting raw media, confirm:

- object identity/path;
- Audio Evidence ID;
- retention requirement satisfied;
- no active legal/records hold;
- no pending assessment/assurance/editorial review;
- required transcript/material passages already verified where needed;
- deletion authority;
- downstream records that must remain;
- incident implications if deletion is early or accidental.

### 14.3 Post-delete record

After deletion, retain an appropriate metadata/audit record showing:

- object deleted;
- deletion date/time;
- deleting authority;
- deletion basis;
- affected evidence ID;
- retained derivatives/records;
- any exception or incident.

Do not erase the governance fact that evidence once existed when retention/audit rules require that fact to remain.

## 15. Urgent access removal

For suspected unauthorised disclosure or access:

1. suspend access workflow;
2. stop issuing signed URLs;
3. revoke user/application access where applicable;
4. delete or move the object through the Storage API if authorised and necessary;
5. record the incident;
6. assess previously issued signed URLs;
7. notify the appropriate human authority.

Because signed URLs can remain usable until expiry and CDN invalidation can lag, short default expiry is mandatory.

## 16. Cache control

For restricted media, do not deliberately configure long browser cache lifetimes.

Use conservative cache settings compatible with the approved access workflow.

Deletion or replacement may take a short period to propagate through CDN/cache layers; urgent-response planning must not assume instantaneous global disappearance.

## 17. Listing control

Ability to retrieve a known authorised object does not automatically justify the ability to browse/list all objects in a bucket or folder.

RLS design should minimise directory/list exposure, particularly for VET and client assurance evidence.

## 18. Transcription-provider boundary

Uploading media to Supabase Storage does not automatically authorise sending it to an external transcription or AI provider.

Before a new provider receives raw media, confirm:

- provider approval;
- contractual/privacy basis;
- data-handling terms;
- permitted jurisdiction/data residency where applicable;
- retention/deletion behaviour;
- workflow authority.

Where ChatGPT or another approved AI service processes audio, the Audio Evidence Standard still applies to the resulting transcript/analysis.

## 19. Access logging

For M3 and RESTRICTED workflows, the production implementation should create an access/audit record for consequential media operations, including where practical:

- user/service identity;
- Audio Evidence ID;
- object path/reference;
- action;
- timestamp;
- purpose/reason;
- signed-link generation where used;
- deletion/replacement actions.

A later implementation may use a dedicated append-only audit table or application event log.

## 20. Prohibited practices

Do not:

- use a public bucket for controlled evidence;
- create permanent public URLs;
- place service-role keys in client code;
- use user-editable metadata for authorisation;
- grant all authenticated users blanket read/write access;
- store signed URLs as permanent locators;
- create multi-day signed URLs for convenience;
- overwrite source evidence without provenance;
- delete Storage objects by SQL metadata deletion;
- infer recording authority from mere possession of the file;
- make source deletion automatic solely because a workflow status changed.

## 21. Initial Supabase implementation profile

When this standard is implemented, the initial technical baseline is:

### Bucket

`nexus-audio-evidence`

- private = true;
- public access = false;
- allowed MIME types restricted;
- file size limit explicitly configured;
- no anonymous access.

### RLS

Create narrowly scoped policies on `storage.objects` for:

- INSERT;
- SELECT/authenticated object retrieval;
- DELETE only for designated controlled workflow;
- UPDATE only where a documented requirement exists.

Do not enable routine upsert for source media.

### Database

Continue using:

`audio.source_recordings.storage_locator`

as the stable reference to the object path.

Signed URLs remain ephemeral and are never stored as the source locator.

## 22. Implementation test plan

Before real media is introduced, run synthetic/de-identified Storage tests.

### S01
Confirm bucket is private.

### S02
Confirm anonymous object download fails.

### S03
Confirm anonymous listing fails.

### S04
Confirm unrelated authenticated user cannot read object.

### S05
Confirm authorised user/service can upload to permitted path.

### S06
Confirm upload outside authorised domain/path fails.

### S07
Confirm authorised read works.

### S08
Confirm signed URL works only for the configured short interval.

### S09
Confirm signed URL is not stored in `audio.source_recordings.storage_locator`.

### S10
Confirm ordinary user cannot delete restricted source evidence.

### S11
Confirm authorised deletion through Storage API removes the object.

### S12
Confirm deletion does not rely on SQL deletion from `storage.objects`.

### S13
Confirm source locator and metadata/audit state reflect deletion.

### S14
Confirm VET user cannot access GOV/RES evidence without explicit authority.

### S15
Confirm PD user cannot browse/list unrelated participant recordings.

### S16
Confirm service-role key is not present in public client configuration.

### S17
Confirm any signed-link generation action for M3/RESTRICTED evidence is auditable in the controlled workflow.

### S18
Confirm no real evidence was used during testing.

## 23. Production release gate

Real audio/video evidence may be introduced only after:

- [x] Nexus Audio Evidence Standard v1.0 approved;
- [x] Audio Evidence Register deployed and T01–T14 passed;
- [x] this Storage & Access Standard approved;
- [ ] private bucket created;
- [ ] MIME/file-size restrictions configured;
- [ ] workflow-specific RLS policies implemented;
- [ ] signed-link defaults implemented;
- [ ] deletion workflow implemented;
- [ ] retention metadata extension implemented or approved;
- [ ] S01–S18 all passed;
- [ ] access/audit approach for M3/RESTRICTED evidence verified;
- [ ] human production release approval recorded.

Until all unchecked gates are complete:

**NO REAL AUDIO/VIDEO EVIDENCE IS AUTHORISED FOR THE NEW STORAGE WORKFLOW.**

## 24. Supabase platform controls relied upon

This standard relies on the following verified Supabase behaviours as at 10 October 2026:

- private buckets apply access control to object operations;
- private objects may be retrieved using authenticated requests subject to RLS or time-limited signed URLs;
- Storage RLS is implemented through policies on `storage.objects`;
- service-role credentials bypass Storage RLS and therefore require server-side protection;
- signed URLs remain valid until expiry independently of Auth signing-key rotation;
- Storage object deletion must be performed through the Storage API rather than manual SQL metadata deletion;
- object deletion is permanent;
- CDN/cache invalidation is not necessarily instantaneous.

These platform behaviours must be reverified after material Supabase Storage/Auth changes.

## 25. Approval statement

NEX-GOV-AMS-001 Nexus Audio Media Storage & Access Standard v1.0 is approved as the governing storage/access standard for the Nexus Audio Evidence architecture.

Approval of this standard does **not** yet authorise real media ingestion.

Production media ingestion remains gated by implementation and successful synthetic Storage tests S01–S18.

**AI assists. Humans decide. Institutions remain accountable.**
