# Nexus AI Knowledge Lifecycle v0.1

## Document control
- **Version:** 0.1
- **Document status:** Approved
- **Owner:** Alec Gardner
- **Approval authority:** Alec Gardner
- **Effective date:** 24 October 2026
- **Next review:** 24 April 2027, or earlier on material governance change
- **Repository:** `asgardner53/nexus-ai-systems`
- **Repository path:** `knowledge/governance/knowledge-lifecycle-v0.1.md`

## Purpose
Define how reusable Nexus AI knowledge moves from initial synthesis to controlled reuse while preserving the existing Nexus document-control model and separate AIRBOK doctrine authority.

## Two independent controls

### Document status
Use only the approved Nexus document-status labels:
- Draft
- Under Review
- Approved
- Superseded
- Suspended
- Retired

### Knowledge maturity
Use the following knowledge-maturity labels:
- **Candidate** — extracted or synthesised; not yet sufficient for controlled reuse.
- **Evidence-supported** — material claims have mapped sources, limitations and verification status; human approval for reuse is still pending.
- **Approved for reuse** — a human has approved the knowledge object for an explicitly stated reuse scope.
- **Withdrawn** — the knowledge object is no longer suitable for reuse, whether or not the document remains recoverable in Git history.

## Lifecycle

1. **Draft / Candidate**
   - source synthesis or knowledge object created;
   - provenance recorded;
   - no controlled reuse permitted.

2. **Under Review / Evidence-supported**
   - claim-to-source mapping complete;
   - material claims checked against appropriate source classes;
   - contradictions, limitations and boundary conditions recorded;
   - currency reviewed.

3. **Approved / Approved for reuse**
   - Alec Gardner or another formally authorised human approves the object;
   - approval record states the permitted reuse scope;
   - approval does not automatically extend to AIRBOK doctrine, regulatory conclusions, credentials or client decisions.

4. **Superseded, Suspended or Retired / Withdrawn**
   - use stops or moves to a replacement object;
   - history remains recoverable.

## Approval scope
Approval must specify one or more scopes, for example:
- internal Nexus system design;
- professional learning design;
- public thought leadership;
- masterclass development;
- client advisory input;
- AIRBOK research input.

AIRBOK doctrine requires a separate AIRBOK decision and must never be inferred from general Nexus reuse approval.

## Verification triggers
Re-verification is required when:
- a source materially changes or disappears;
- platform capability or pricing changes;
- a legal, regulatory or standards source changes;
- a stronger primary source becomes available;
- the proposed reuse context is materially different;
- contradictory evidence emerges;
- a review date or monitoring trigger is reached.

## Human gate
AI may draft, map, challenge and recommend status changes. A human must approve:
- movement to Approved document status;
- movement to Approved for reuse maturity;
- the reuse scope;
- AIRBOK doctrine transfer;
- external publication where separately governed.

## Change history
| Version | Date | Change | Status |
|---|---|---|---|
| 0.1 | 24 October 2026 | Initial lifecycle and approval model | Approved |
