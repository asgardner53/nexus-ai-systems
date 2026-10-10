# Nexus Audio Evidence Standard

## Document control

| Field | Value |
| --- | --- |
| Document ID | NEX-GOV-AUD-001 |
| Version | 1.0 |
| Status | Approved for controlled use |
| Owner and approval authority | Alec Gardner |
| Effective date | 10 October 2026, Australia/Sydney |
| Repository | `asgardner53/nexus-ai-systems` |
| Path | `governance/nexus-audio-evidence-standard-v1.0.md` |
| Governing standards | Nexus Model & Agent Orchestration Standard v1.1; Nexus Studio Evidence Integration Standard v1.0 |
| Review trigger | Material platform, privacy, assessment, records-management or transcription-capability change |

## 1. Purpose

Establish one shared control standard for audio-derived evidence across Nexus BMG, including VET/ASQA assessment workflows, PD Studio, Governance/Client Assurance and Research Interview workflows.

This standard governs the relationship between the original recording, machine-generated transcript, AI-generated summary or extraction, and any human decision or controlled output.

Core principle: **AI assists. Humans decide. Institutions remain accountable.**

## 2. Evidence hierarchy

For controlled Nexus use, treat audio-derived material as separate evidence layers:

1. **Original audio/video recording — source evidence**
2. **Transcript — derived evidence**
3. **AI summary, extraction, classification or interpretation — analytical evidence**
4. **Human-reviewed finding or decision — controlled human output**

Do not silently substitute a derived layer for the layer above it.

A transcript is not automatically a verbatim record. An AI summary is not the source evidence.

## 3. Minimum provenance record

For substantive audio use, record where available and appropriate:

- evidence record ID;
- original filename or source reference;
- recording date and time;
- duration;
- participants or participant roles;
- recording context/purpose;
- consent or lawful authority status where required by the governing workflow;
- storage location of the original;
- transcription method/tool;
- transcript creation date;
- transcript verification status;
- material uncertainties, inaudible sections or speaker-attribution issues;
- AI analysis method if used;
- human reviewer;
- downstream use;
- retention/disposal status under the governing records rule.

Do not collect fields that are unnecessary for the authorised purpose.

## 4. Transcript verification states

Use one of the following:

- **UNVERIFIED TRANSCRIPT** — generated but not checked for material accuracy.
- **PARTIALLY VERIFIED** — material sections checked, but the transcript is not fully relied upon as verbatim.
- **VERIFIED FOR MATERIAL CONTENT** — human reviewer checked the parts relied upon for the controlled use.
- **VERBATIM VERIFIED** — line-by-line verification completed where a truly verbatim record is required.

Do not use VERBATIM VERIFIED unless that level of review actually occurred.

## 5. Material accuracy rule

Verification effort follows materiality.

### M1

A transcript may support low-consequence drafting or note-taking if obvious uncertainty is labelled.

### M2

Verify all material quotations, decisions, commitments, factual propositions and passages relied upon in the output.

### M3

Verify all consequential passages directly against the source recording, preserve unresolved ambiguity, and apply the designated human decision gate before reliance or release.

If the original recording is unavailable, do not imply that transcript accuracy has been verified against source audio.

## 6. Speaker attribution

Speaker identity must not be inferred solely from voice characteristics unless the workflow already provides reliable participant attribution.

Where diarisation or automated speaker labels are used, treat them as provisional until checked where speaker identity matters.

If attribution cannot be established, use neutral labels such as Speaker 1 / Speaker 2 and record the uncertainty.

## 7. Quotation control

Before publishing, reporting or relying upon a direct quotation derived from audio:

1. locate the relevant passage in the original recording where available;
2. verify the wording;
3. confirm the correct speaker;
4. preserve context;
5. avoid altering meaning through punctuation or cleanup;
6. record any uncertainty that materially affects interpretation.

A polished transcript must not be treated as stronger evidence than the recording from which it was derived.

## 8. Privacy, confidentiality and access

Audio may contain personal, sensitive, confidential, student, employee or client information.

Apply the governing Studio's data classification and least-privilege rules before upload, transcription, sharing or retention.

Do not place student assessment recordings, confidential client recordings or other restricted operational media in public GitHub repositories.

Use de-identified governance examples wherever practical.

New external transcription services, connectors or storage locations require their applicable privacy/security approval before controlled use.

## 9. Consent and authority boundary

This standard does not itself grant authority to record, upload, disclose or reuse a conversation.

The responsible workflow owner must confirm the applicable consent, contractual, organisational, legal and policy basis before recording or processing audio where such authority is required.

Where authority is uncertain, stop before creating or uploading the recording.

## 10. Derived-analysis control

AI may:

- transcribe;
- summarise;
- extract themes;
- identify candidate evidence;
- classify passages;
- locate contradictions;
- draft notes;
- compare statements against controlled criteria.

AI must not silently convert audio analysis into:

- a competency outcome;
- a disciplinary or misconduct finding;
- a formal compliance conclusion;
- a governance approval;
- a credential/certification decision;
- a high-materiality client decision.

**Classification ≠ decision. Transcript ≠ source. Summary ≠ finding.**

## 11. VET / ASQA integration profile

### Permitted uses

Audio may support:

- competency conversations;
- oral questioning;
- assessor interviews;
- third-party conversations;
- learner reflections;
- role-play evidence where the assessment requirement can legitimately be demonstrated through audio;
- clarification of submitted evidence.

### Mandatory controls

- Apply the assessment instrument and current controlled assessment requirements first.
- Preserve the original recording where required by the RTO's authorised records process.
- Treat the transcript as derived evidence.
- Verify material responses relied upon for assessment.
- Do not use audio alone where the performance requirement depends on visible behaviour, physical demonstration, body language, visual interaction or another criterion that cannot validly be established from sound.
- AI may identify candidate evidence and draft feedback; the authorised assessor determines sufficiency, authenticity, validity and the final Competent / Not Yet Competent outcome.
- Missing, inaccessible or materially unclear source evidence must remain visible as an evidence gap.

### VET workflow

```text
ASSESSMENT REQUIREMENT
        ↓
ORIGINAL AUDIO / VIDEO
        ↓
TRANSCRIPT
        ↓
AI-ASSISTED EVIDENCE EXTRACTION
        ↓
ASSESSOR VERIFICATION
        ↓
ASSESSOR JUDGEMENT
        ↓
CONTROLLED FEEDBACK / OUTCOME
```

## 12. PD Studio integration profile

### Permitted uses

Audio may support:

- spoken PD reflections;
- post-course reflections;
- professional currency notes;
- learning-journal capture;
- voice-to-structured-entry workflows.

### Mandatory controls

- Preserve the participant's meaning rather than converting spoken reflection into inflated professional claims.
- Distinguish what the participant said from AI-generated interpretation.
- Before a reflection becomes a controlled PD Journal entry, the participant or authorised reviewer must confirm that the structured entry accurately represents the reflection.
- Claims about professional currency, standards, regulation or external evidence still invoke the Nexus Evidence Engine where required.

### PD workflow

```text
SPOKEN REFLECTION
      ↓
TRANSCRIPT
      ↓
STRUCTURED PD ENTRY
      ↓
PARTICIPANT / REVIEWER CONFIRMATION
      ↓
PD JOURNAL
```

## 13. Governance / Client Assurance integration profile

### Permitted uses

Audio may support:

- board or committee interviews;
- stakeholder workshops;
- client interviews;
- discovery sessions;
- assurance interviews;
- decision-history capture;
- meeting evidence where authorised.

### Mandatory controls

- Record whether the transcript is a formal record or only working evidence.
- Verify material commitments, representations and quotations before consequential reliance.
- Do not treat silence, tone or conversational ambiguity as a formal approval unless the governing decision process establishes that approval.
- Separate stakeholder statements from Nexus interpretation.
- Formal governance or assurance conclusions remain subject to the accountable human authority.

### Governance workflow

```text
AUTHORISED INTERVIEW / MEETING
        ↓
SOURCE RECORDING
        ↓
TRANSCRIPT
        ↓
ATTRIBUTED STATEMENTS
        ↓
EVIDENCE / CONTRADICTION ANALYSIS
        ↓
HUMAN GOVERNANCE OR ASSURANCE REVIEW
        ↓
CONTROLLED DECISION / REPORT
```

## 14. Research Interview integration profile

### Permitted uses

Audio may support:

- practitioner interviews;
- expert interviews;
- stakeholder interviews;
- qualitative research conversations;
- source-development interviews for publications.

### Mandatory controls

Separate:

- what the participant actually said;
- what Nexus inferred;
- what external evidence independently supports.

Use the Nexus Evidence Engine claim discipline:

- attributed claim;
- verified fact;
- supported interpretation;
- working hypothesis;
- unresolved.

Participant statements do not become verified facts merely because they were recorded clearly.

Where quotations are intended for publication, verify them against the source recording and apply the relevant consent/attribution arrangements.

### Research workflow

```text
INTERVIEW
   ↓
SOURCE RECORDING
   ↓
TRANSCRIPT
   ↓
ATTRIBUTED CLAIMS
   ↓
EXTERNAL VERIFICATION / CHALLENGE
   ↓
SUPPORTED INTERPRETATION
   ↓
EDITORIAL / HUMAN RELEASE
```

## 15. Audio Evidence Record

For reusable or controlled M2/M3 audio evidence, create an Audio Evidence Record containing:

- Audio Evidence ID;
- workflow/domain;
- source locator;
- source classification;
- participant roles;
- recording context;
- transcript status;
- verification status;
- material passages relied upon;
- material uncertainties;
- linked Evidence Engine claim IDs where applicable;
- authorised reviewer;
- decision/output linked;
- retention status.

Suggested identifier:

`NAE-[DOMAIN]-[NUMBER]`

Examples:

- `NAE-VET-0001`
- `NAE-PD-0001`
- `NAE-GOV-0001`
- `NAE-RES-0001`

## 16. Release gate

Before controlled release or consequential reliance, confirm:

- the source recording exists or its absence is explicitly recorded;
- transcript status is visible;
- material passages were verified at the level required;
- speaker attribution is adequate for the use;
- material ambiguities are visible;
- privacy/confidentiality requirements are satisfied;
- AI interpretation is distinguished from participant statements;
- the relevant evidence and human decision gates were applied;
- the original media was not replaced by an unverified derivative.

## 17. Incident triggers

Stop and escalate where there is:

- recording without required authority;
- loss or corruption of source audio;
- material transcript error affecting a decision;
- misattributed speaker;
- unauthorised disclosure;
- unsupported reliance on transcript-only evidence;
- AI summary presented as source evidence;
- audio used to make an autonomous competency, governance, compliance or disciplinary decision.

## 18. Monitoring and review

Review this standard when:

- supported audio/transcription capabilities materially change;
- retention or privacy requirements change;
- an incident exposes a control weakness;
- VET/ASQA evidence requirements materially change;
- a new transcription provider, connector or storage location is introduced;
- repeated transcript failures show the verification approach is inadequate.

## 19. Approval statement

Nexus Audio Evidence Standard v1.0 is approved for controlled use across the four initial integration workflows defined above.

The original recording remains the strongest available source object. Derived transcripts and AI analysis support, but do not replace, human judgement or institutional authority.

**AI assists. Humans decide. Institutions remain accountable.**
