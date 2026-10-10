# Nexus Audio Evidence Register — Supabase Data Model v1.0

## Document control

| Field | Value |
| --- | --- |
| Document ID | NEX-DM-AUD-001 |
| Version | 1.0 |
| Status | Approved and deployed baseline |
| Owner | Alec Gardner |
| Effective date | 10 October 2026 |
| Target platform | Supabase / PostgreSQL |
| Target project | NEXUS BMG |
| Target schema | `audio` (private) |
| Related standard | NEX-GOV-AUD-001 Nexus Audio Evidence Standard v1.0 |
| Related implementation pack | NEX-IMP-AUD-001 v1.0 |
| Related evidence layer | `evidence.claims` and Nexus Evidence Engine |

## 1. Purpose

Define the operational data model for controlled audio-derived evidence across Nexus BMG.

The model supports:

- NAE record registration;
- source recording metadata;
- transcript versions and verification states;
- material transcript passages;
- AI-assisted analysis records;
- human review and decision gates;
- links to Nexus Evidence Engine claims;
- retention, reuse and release status.

This document is the approved design baseline. The seven-table private `audio` schema was deployed to the NEXUS BMG Supabase project on 10 October 2026 and passed synthetic validation tests T01–T14 before any real audio evidence was introduced.

## 2. Architecture decision

Create a private PostgreSQL schema:

`audio`

The existing `evidence` schema remains the authoritative Evidence Engine layer.

The relationship is:

```text
AUDIO SOURCE
   ↓
audio.records
   ↓
audio.source_recordings
   ↓
audio.transcripts
   ↓
audio.transcript_passages
   ↓
audio.ai_analyses
   ↓
audio.human_reviews
   ↓
audio.record_claims ───────────→ evidence.claims
```

Audio evidence remains operationally distinct from external research sources while verified or attributed propositions may be promoted into the Evidence Engine as claims.

## 3. Design principles

1. **Source media is not stored directly in the relational tables.**
   Store authorised storage locators, integrity hashes and metadata.

2. **One NAE record can have multiple source recordings.**
   This supports split files, replacement recordings, multi-part interviews and combined evidence sets.

3. **One source recording can have multiple transcript versions.**
   This preserves provenance and correction history.

4. **Material passages are first-class records.**
   Consequential reliance must point to a specific passage/timestamp.

5. **Verification state belongs to the transcript version.**
   It must not be inferred from the parent NAE record.

6. **Human review is a separate event.**
   AI analysis must never silently become the decision.

7. **Evidence Engine claims are linked, not duplicated.**
   `evidence.claims` remains the source of truth for registered claims.

8. **Private-by-default.**
   The `audio` schema is not intended for direct anonymous or authenticated Data API exposure.

## 4. Stable identifiers

Use human-readable permanent identifiers in addition to UUID primary keys.

### Audio Evidence Record

`NAE-[DOMAIN]-[NUMBER]`

Domains initially:

- `VET`
- `PD`
- `GOV`
- `RES`

Example:

`NAE-VET-0001`

### Source Recording

`NASR-[NUMBER]`

Example:

`NASR-000001`

### Transcript

`NAT-[NUMBER]`

Example:

`NAT-000001`

### Transcript Passage

`NAP-[NUMBER]`

Example:

`NAP-000001`

### AI Analysis

`NAA-[NUMBER]`

Example:

`NAA-000001`

### Human Review

`NAHR-[NUMBER]`

Example:

`NAHR-000001`

## 5. Table 1 — audio.records

Master record for each NAE evidence item.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK, default gen_random_uuid() |
| audio_evidence_id | text | Yes | UNIQUE, e.g. NAE-VET-0001 |
| domain | text | Yes | CHECK VET/PD/GOV/RES/OTHER |
| workflow_name | text | Yes | Human-readable workflow |
| related_studio | text | No | Studio/control context |
| materiality | text | Yes | CHECK M1/M2/M3 |
| record_status | text | Yes | CHECK OPEN/UNDER_REVIEW/RELEASED/HOLD/CLOSED/SUPERSEDED |
| source_classification | text | Yes | CHECK PUBLIC/INTERNAL/CONFIDENTIAL/RESTRICTED |
| record_owner | text | Yes | Operational owner |
| human_decision_owner | text | Yes | Named authority |
| authority_status | text | Yes | CHECK CONFIRMED/PENDING/NOT_REQUIRED/UNRESOLVED |
| authority_basis | text | No | Consent/policy/contract/process basis |
| intended_use | text[] | Yes | Default empty array |
| retention_status | text | Yes | CHECK ACTIVE/ARCHIVE_PENDING/ARCHIVED/DISPOSAL_PENDING/DISPOSED |
| reuse_status | text | Yes | CHECK NOT_ASSESSED/AUTHORISED/QUALIFIED/NOT_AUTHORISED |
| limitations | text | No | Known limitations |
| superseded_by_audio_evidence_id | text | No | Self-reference |
| created_at | timestamptz | Yes | default now() |
| updated_at | timestamptz | Yes | default now() |
| closed_at | timestamptz | No | Closure timestamp |

### Key constraints

- `audio_evidence_id` is permanent and never recycled.
- M3 records must have a non-empty `human_decision_owner`.
- `authority_status='UNRESOLVED'` prevents RELEASED status.
- `SUPERSEDED` requires `superseded_by_audio_evidence_id`.

## 6. Table 2 — audio.source_recordings

Stores metadata about original recording objects.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK |
| source_recording_id | text | Yes | UNIQUE |
| audio_record_id | uuid | Yes | FK → audio.records.id |
| source_reference | text | Yes | Filename/object reference |
| storage_locator | text | Yes | Authorised locator only |
| storage_provider | text | No | Supabase Storage/Drive/RTO system/etc |
| media_type | text | Yes | CHECK AUDIO/VIDEO |
| mime_type | text | No | e.g. audio/m4a |
| recording_started_at | timestamptz | No | Recording time |
| duration_seconds | integer | No | CHECK >= 0 |
| participant_roles | text[] | Yes | Roles, not unnecessary sensitive detail |
| recording_context | text | Yes | Purpose/context |
| source_hash_sha256 | text | No | Integrity check |
| source_available | boolean | Yes | default true |
| authority_confirmed | boolean | Yes | default false |
| authority_note | text | No | Basis/limitations |
| source_status | text | Yes | CHECK ACTIVE/MISSING/CORRUPT/SUPERSEDED/DELETED |
| created_at | timestamptz | Yes | default now() |
| updated_at | timestamptz | Yes | default now() |

### Design rule

The relational table stores the **locator and metadata**, not the audio bytes.

If Supabase Storage is later approved, use a private bucket and store the object path here.

## 7. Table 3 — audio.transcripts

Stores each transcript version derived from a source recording.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK |
| transcript_id | text | Yes | UNIQUE |
| source_recording_id | uuid | Yes | FK → audio.source_recordings.id |
| transcript_version | integer | Yes | CHECK > 0 |
| transcript_locator | text | No | File/object locator |
| transcript_text | text | No | Optional if text is retained in DB |
| transcription_method | text | Yes | AI/MANUAL/HYBRID |
| transcription_tool | text | No | Tool/model if known |
| created_at | timestamptz | Yes | default now() |
| verification_state | text | Yes | See controlled values |
| speaker_attribution_status | text | Yes | VERIFIED/PARTIAL/UNRESOLVED/NOT_APPLICABLE |
| verified_by | text | No | Human reviewer |
| verified_at | timestamptz | No | Verification date |
| known_issues | text | No | Misheard terms, formatting etc |
| uncertain_sections | text | No | Inaudible/uncertain passages |
| is_current | boolean | Yes | default true |
| supersedes_transcript_id | text | No | Prior transcript stable ID |
| updated_at | timestamptz | Yes | default now() |

### Controlled verification states

- `UNVERIFIED_TRANSCRIPT`
- `PARTIALLY_VERIFIED`
- `VERIFIED_FOR_MATERIAL_CONTENT`
- `VERBATIM_VERIFIED`

### Constraints

- UNIQUE (`source_recording_id`, `transcript_version`)
- only one current transcript per source recording
- VERIFIED states require `verified_by` and `verified_at`

## 8. Table 4 — audio.transcript_passages

Stores only passages materially relied upon.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK |
| passage_id | text | Yes | UNIQUE |
| transcript_id | uuid | Yes | FK → audio.transcripts.id |
| start_ms | bigint | No | Start timestamp in milliseconds |
| end_ms | bigint | No | End timestamp in milliseconds |
| speaker_label | text | No | Verified/provisional label |
| passage_text | text | No | Material extract where authorised |
| evidence_proposition | text | Yes | What the passage supports |
| passage_verification_status | text | Yes | UNVERIFIED/VERIFIED/QUALIFIED/UNRESOLVED |
| verified_against_source | boolean | Yes | default false |
| verified_by | text | No | Human reviewer |
| verified_at | timestamptz | No | Timestamp |
| uncertainty_note | text | No | Boundary/ambiguity |
| created_at | timestamptz | Yes | default now() |

### Constraints

- `end_ms >= start_ms` when both are present.
- `VERIFIED` requires `verified_against_source=true`.
- consequential M2/M3 use should link to a verified or explicitly qualified passage.

## 9. Table 5 — audio.ai_analyses

Separates machine interpretation from transcript evidence.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK |
| analysis_id | text | Yes | UNIQUE |
| audio_record_id | uuid | Yes | FK → audio.records.id |
| transcript_id | uuid | No | FK → audio.transcripts.id |
| analysis_type | text | Yes | EXTRACTION/SUMMARY/CLASSIFICATION/COMPARISON/CONTRADICTION/OTHER |
| model_tool | text | No | Actual model/tool when observable |
| analysis_prompt_version | text | No | Optional controlled workflow version |
| analysis_output | text | No | Structured output or locator |
| finding_type | text | Yes | CANDIDATE_EVIDENCE/ATTRIBUTED_CLAIM/SUPPORTED_INTERPRETATION/HYPOTHESIS/UNRESOLVED |
| limitations | text | No | Required for material uncertainty |
| requires_human_verification | boolean | Yes | default true |
| created_at | timestamptz | Yes | default now() |

### Design rule

No AI analysis row changes the verification state of a transcript or passage.

## 10. Table 6 — audio.human_reviews

Records human verification and decision-gate events.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK |
| human_review_id | text | Yes | UNIQUE |
| audio_record_id | uuid | Yes | FK → audio.records.id |
| transcript_id | uuid | No | FK → audio.transcripts.id |
| review_type | text | Yes | TRANSCRIPT_VERIFICATION/PASSAGE_VERIFICATION/VET_ASSESSOR/PD_CONFIRMATION/GOV_ASSURANCE/EDITORIAL_RELEASE/PRIVACY/OTHER |
| reviewer | text | Yes | Human reviewer |
| reviewer_role | text | No | Assessor/editor/etc |
| review_status | text | Yes | PENDING/APPROVED/QUALIFIED/DECLINED/REVIEW_REQUIRED |
| material_passages_checked | boolean | Yes | default false |
| speaker_attribution_adequate | boolean | No | nullable when irrelevant |
| privacy_requirements_satisfied | boolean | No | nullable |
| decision_gate_required | boolean | Yes | default false |
| decision_gate_completed | boolean | Yes | default false |
| human_decision | text | No | Decision/disposition |
| conditions_qualifications | text | No | Qualification |
| reviewed_at | timestamptz | Yes | default now() |
| created_at | timestamptz | Yes | default now() |

### Constraints

- `decision_gate_completed=true` requires `human_decision` not null.
- APPROVED M3 release requires an appropriate completed human review.
- VET assessor review must not automatically populate a Competent/NYC outcome from AI analysis.

## 11. Table 7 — audio.record_claims

Join table between Audio Evidence Register and Nexus Evidence Engine claims.

| Column | Type | Required | Control |
| --- | --- | --- | --- |
| id | uuid | Yes | PK |
| audio_record_id | uuid | Yes | FK → audio.records.id |
| claim_id | text | Yes | FK → evidence.claims.claim_id |
| passage_id | uuid | No | FK → audio.transcript_passages.id |
| relationship_type | text | Yes | ORIGINATES/SUPPORTS/QUALIFIES/CONTRADICTS/CONTEXTUAL |
| linkage_status | text | Yes | PROPOSED/VERIFIED/REJECTED/SUPERSEDED |
| linked_by | text | Yes | Researcher/controller |
| linked_at | timestamptz | Yes | default now() |
| human_review_required | boolean | Yes | default false |
| human_review_completed_at | timestamptz | No | Review timestamp |
| note | text | No | Scope/qualification |

### Design rule

`evidence.claims` remains authoritative for claim wording, materiality and verification status.

The audio register stores only the relationship between the NAE record/passage and the claim.

## 12. Optional table — audio.participants

Do **not** create this table in v1.0 unless operational need justifies person-level participant records.

Default v1.0 design stores participant roles in `source_recordings.participant_roles` to minimise personal information.

If identity-level participant management later becomes necessary, it should be a separately approved privacy/security extension.

## 13. Foreign-key map

```text
audio.records.id
  ├──< audio.source_recordings.audio_record_id
  ├──< audio.ai_analyses.audio_record_id
  ├──< audio.human_reviews.audio_record_id
  └──< audio.record_claims.audio_record_id

audio.source_recordings.id
  └──< audio.transcripts.source_recording_id

audio.transcripts.id
  ├──< audio.transcript_passages.transcript_id
  ├──< audio.ai_analyses.transcript_id
  └──< audio.human_reviews.transcript_id

audio.transcript_passages.id
  └──< audio.record_claims.passage_id

evidence.claims.claim_id
  └──< audio.record_claims.claim_id
```

## 14. Workflow mapping

### VET / ASQA

```text
audio.records
→ source_recordings
→ transcripts
→ transcript_passages
→ ai_analyses
→ human_reviews (VET_ASSESSOR)
→ controlled assessment workflow
```

A competency outcome remains outside AI authority.

### PD Studio

```text
audio.records
→ source_recordings
→ transcripts
→ ai_analyses
→ human_reviews (PD_CONFIRMATION)
→ PD Journal
```

### Governance / Client Assurance

```text
audio.records
→ source_recordings
→ transcripts
→ transcript_passages
→ ai_analyses (CONTRADICTION)
→ record_claims
→ evidence.claims
→ human_reviews (GOV_ASSURANCE)
```

### Research Interview

```text
audio.records
→ source_recordings
→ transcripts
→ transcript_passages
→ record_claims
→ evidence.claims
→ Evidence Engine verification/challenge
→ human_reviews (EDITORIAL_RELEASE)
```

## 15. Release-state logic

Recommended record lifecycle:

`OPEN → UNDER_REVIEW → RELEASED / HOLD → CLOSED`

Alternative terminal states:

- `SUPERSEDED`

### M3 release condition

An M3 `audio.records` row must not become RELEASED unless:

1. authority status is CONFIRMED or NOT_REQUIRED;
2. at least one relevant human review has `decision_gate_completed=true`;
3. required transcript/passages have appropriate verification state;
4. unresolved critical source-status issues are absent.

Implement this in database constraints or controlled transaction logic during deployment, not through client convention alone.

## 16. Security model

### Schema

Use private schema:

`audio`

Do not add `audio` to the Data API exposed schemas for the initial implementation.

### Roles

Initial recommendation:

- `anon`: no schema usage, no table access.
- `authenticated`: no direct access in Stage 1.
- `service_role`: controlled application/service access only.
- human users: access through approved application workflow rather than direct table grants until organisation/role authorization is designed.

### RLS

Enable RLS on all `audio` tables as defence in depth, even though the schema is private.

Do not create permissive authenticated policies merely to make application access easier.

### Functions

Avoid `SECURITY DEFINER` unless a documented requirement cannot be satisfied safely otherwise.

If privileged functions are later necessary:

- keep them out of exposed schemas;
- revoke default PUBLIC execute;
- enforce explicit caller/role checks;
- set safe search_path;
- run security advisors after deployment.

## 17. Storage boundary

The register should not store raw audio/video bytes in PostgreSQL.

Preferred pattern if Supabase Storage is later approved:

- private bucket;
- per-organisation or per-workflow pathing;
- object path stored in `source_recordings.storage_locator`;
- storage policies designed separately;
- no public URLs for restricted evidence;
- signed URLs only when an authorised workflow requires temporary access.

Storage implementation is out of scope for the initial schema deployment.

## 18. Indexes

Recommended indexes:

- `audio.records(audio_evidence_id)` UNIQUE
- `audio.records(domain, record_status)`
- `audio.records(materiality, record_status)`
- `audio.source_recordings(audio_record_id)`
- `audio.transcripts(source_recording_id, is_current)`
- `audio.transcript_passages(transcript_id)`
- `audio.ai_analyses(audio_record_id)`
- `audio.human_reviews(audio_record_id, review_type)`
- `audio.record_claims(audio_record_id)`
- `audio.record_claims(claim_id)`
- UNIQUE `audio.record_claims(audio_record_id, claim_id, passage_id, relationship_type)` where practical

## 19. Audit fields

All mutable tables should include:

- `created_at`
- `updated_at`

For deployment, prefer explicit application-controlled or trigger-controlled `updated_at` handling.

Where audit-grade change history becomes necessary, add a separate append-only audit mechanism rather than overloading the main tables.

## 20. Controlled values summary

### domain
`VET, PD, GOV, RES, OTHER`

### materiality
`M1, M2, M3`

### source_classification
`PUBLIC, INTERNAL, CONFIDENTIAL, RESTRICTED`

### authority_status
`CONFIRMED, PENDING, NOT_REQUIRED, UNRESOLVED`

### record_status
`OPEN, UNDER_REVIEW, RELEASED, HOLD, CLOSED, SUPERSEDED`

### transcript verification
`UNVERIFIED_TRANSCRIPT, PARTIALLY_VERIFIED, VERIFIED_FOR_MATERIAL_CONTENT, VERBATIM_VERIFIED`

### speaker attribution
`VERIFIED, PARTIAL, UNRESOLVED, NOT_APPLICABLE`

### passage verification
`UNVERIFIED, VERIFIED, QUALIFIED, UNRESOLVED`

### AI finding type
`CANDIDATE_EVIDENCE, ATTRIBUTED_CLAIM, SUPPORTED_INTERPRETATION, HYPOTHESIS, UNRESOLVED`

### review status
`PENDING, APPROVED, QUALIFIED, DECLINED, REVIEW_REQUIRED`

### claim relationship
`ORIGINATES, SUPPORTS, QUALIFIES, CONTRADICTS, CONTEXTUAL`

## 21. Minimal deployment scope

Stage A should create only:

1. `audio.records`
2. `audio.source_recordings`
3. `audio.transcripts`
4. `audio.transcript_passages`
5. `audio.ai_analyses`
6. `audio.human_reviews`
7. `audio.record_claims`

Plus:

- checks;
- foreign keys;
- indexes;
- RLS enabled;
- service-role-only grants;
- no Data API exposure;
- no storage bucket;
- no triggers/functions unless required for integrity.

## 22. Validation test plan

After deployment, validate at minimum:

### T01
Create NAE-PD synthetic record with one source recording.

### T02
Create transcript version 1 as UNVERIFIED_TRANSCRIPT.

### T03
Attempt VERIFIED transcript without verifier/date — must fail.

### T04
Create corrected transcript version 2 and mark v1 non-current.

### T05
Create verified material passage.

### T06
Attempt VERIFIED passage with `verified_against_source=false` — must fail.

### T07
Create AI analysis and confirm it does not modify transcript verification.

### T08
Create pending human review.

### T09
Attempt completed decision gate with null decision — must fail.

### T10
Link passage to an existing `evidence.claims.claim_id`.

### T11
Attempt claim link to nonexistent claim — must fail.

### T12
Confirm anon/authenticated have no direct access.

### T13
For M3 synthetic record, attempt release with unresolved authority — must fail.

### T14
Complete valid human review and verify controlled release path.

## 23. Data minimisation decisions

The v1.0 model deliberately does **not** include:

- participant identity master table;
- biometric/voice identity;
- raw audio blobs in Postgres;
- automated speaker identity inference;
- autonomous competency outcome fields;
- autonomous compliance determination fields;
- unrestricted user access policies.

These are excluded unless a later approved use case requires them.

## 24. Current Evidence Engine compatibility

The live `evidence` schema already provides:

- `claims`
- `sources`
- `claim_sources`
- `contradictions`
- `reuse_records`
- `monitoring_records`
- `release_reviews`

The proposed Audio Register integrates through:

`audio.record_claims.claim_id → evidence.claims.claim_id`

No change to the existing Evidence Engine tables is required for the initial implementation.

## 25. Implementation decision

Recommended approach:

**Deployment completed 10 October 2026.**

1. **Schema deployment:** complete — seven tables, constraints, foreign keys, indexes, RLS, least-privilege grants and M3 release gate are live.
2. **Synthetic validation:** complete — T01–T14 all passed.
3. **Synthetic cleanup:** complete — all seven `audio` tables returned zero rows after validation.
4. **Advisor review:** complete — deployment-specific missing foreign-key indexes were corrected. Remaining advisor findings are pre-existing project-wide items outside this deployment.

Real audio evidence must still not be introduced until the storage/access model for raw media is separately approved.

**AI assists. Humans decide. Institutions remain accountable.**
