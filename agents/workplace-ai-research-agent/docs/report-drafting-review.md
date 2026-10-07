# Report drafting, validation and human review

Status: Draft implementation. Owner: Alec Gardner. 8 October 2026.

## Delivered

`src/reporting/report.mjs` drafts structured reports from selected registered
claims and source snapshots, and renders Markdown with attribution, evidence
status, dates, ranking rationale, practical relevance, limitations and sources.
It does not invent research, complete a missing search or invoke a paid model.
A host orchestrator supplies the researched selection and editorial assessments.

Validation checks run/window identity, draft label, category/item/event limits,
quiet-week justification, dates/exceptions, source/claim relationships, semantic
wording review, source retrieval/hash/link checks, Australia and challenge passes,
event details, word count and snapshot consistency. A quiet week can justify a
shorter report rather than filling it with unsupported material.

Unresolved claims cannot enter the ranked shortlist; retain them in evidence
gaps. Attributed or interpretive claims remain labelled. Facts require verified
status. Older context must have a visible exception. A live link alone never
certifies a claim. Each claim wording and item's editorial/date treatment needs
a matching trusted host review check. Snapshot hashes make changes invalidate
old attestations. Source checks must be within 24 hours; approvals require
validation no older than 24 hours.

## Human review

`ReportReview` stores immutable report versions, evidence snapshots, rendered
content, hashes, validation results and durable human decisions in the controller
SQLite database. Approve, request changes and reject are distinct decisions.
Approval applies only to the latest exact version/hash; earlier decisions remain
history. Revisions always get fresh validation and review. Request changes/reject
requires comments. The research agent has no review/approval tool.

`createReviewServer` provides a plain browser review page and POST decision route.
It escapes report text, disables approval for failed validation, sets no-store
and restrictive content-security headers, bounds request size and requires a
matching Origin for decisions. Approval does not publish, message or distribute.

Authentication is dependency-injected and fails closed: a trusted host verifier
must identify an authenticated human with Alec's owner identity and review scope.
No production identity provider is connected in this build. The test-only identity
header exists only in the endpoint test; never use it in a deployed verifier.

## Wiring contract

1. Load real claims/sources/links from the shared register into an evidence snapshot.
2. Complete source/claim, item/editorial, Australian and challenge checks in the
   trusted host evidence-review layer. The model cannot directly supply approval
   authority or validation attestations.
3. Create `draftReport` and compute its snapshot digest before producing the
   matching host attestation. Claim checks bind to `digest(claim)`; item checks
   bind to `digest(item)`; source checks bind to its retrieved content hash.
4. `saveDraft` preserves the version and its validation. Failed validation stays Draft.
5. At the validating run stage, `markRunReady` uses the validator's actual result;
   the controller refuses pending evidence delivery. Research completion/cutoff
   advancement is separate from editorial approval.
6. Wire reviewed host authentication into both ReportReview and createReviewServer.
   Configure the exact HTTPS origin; use a persistent single-host database volume.
7. Alec reads the report and decides on its version. A revised report needs a new
   review; no publication adapter exists.

Attestation fields: reportHash, evidenceHash, australianSearchCompleted,
challengeCompleted, claimChecks keyed by claim ID (claimHash, supportsWording),
itemChecks keyed by item ID (itemHash, datesChecked, editorialWordingReviewed),
sourceChecks keyed by source ID (contentHash, linkResolved, checkedAt), and
optional eventChecks keyed by event ID (eventHash, verified).

These attestations are trusted host inputs, not independent automated proof.
Real source-check and identity adapters, autonomous model wiring and deployment
remain pilot dependencies. Deterministic drafting and tested interfaces are
implemented; this is not a claim that an autonomous weekly report was generated
or that Alec approved a real report.

## Verification

All 88 tests pass. New coverage includes quiet-week output, unsupported and
unresolved claims, changed wording, stale link checks, date exceptions, events,
missing Australian/challenge passes, agent denial, hash-bound human decisions,
revisions, expired validation, request-changes comments, HTML escaping and actual
HTTP endpoint denial. Controller integration tests save a validated Draft and
advance the successful research cutoff without treating it as publication approval.
Report fixtures and authentication in these tests are synthetic, not live research
or real human decisions. Three supervised report pilot gates remain outstanding.
