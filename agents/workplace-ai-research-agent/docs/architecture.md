# Implementation architecture

Version: 0.1.0. Status: Draft. Owner / approval authority: Alec Gardner.
Prepared: 7 October 2026. Effective date: not effective.
Review: before integration. Path: `agents/workplace-ai-research-agent/docs/architecture.md`.

## Workflow

queued → researching → verifying → challenging → drafting → validating → ready_for_review.
Terminal alternatives: partial, failed, cancelled. Approval is a separate human record.
The first window covers seven days; subsequent windows begin at the previous successful
cutoff. Partial runs never advance it. Approval does not determine the research cutoff.

The controller acquires a unique reporting-window lock and pins configuration.
Before every tool call it checks cancellation, deadline, permission and resource limits.
The model chooses useful searches and verification steps only within these boundaries.
Checkpoint after each stage. Writes use idempotency keys; checkpoint updates use an
expected version. Restart must reacquire a lease and recover pending actions.

## Record contracts to implement

| Record | Required fields |
| --- | --- |
| Configuration | version, owner, schedule, limits, tool allowlist, model reference |
| Run | id, window_start, window_end, configuration_version, status, checkpoint, deadline, usage, stop_reason |
| Candidate | id, run_id, title, organisation, category, announcement_date, publication_date, geography, inclusion_decision, ranking_rationale |
| Source | id, canonical_url, publisher, author, publication_date, retrieved_at, content_hash, relevant_excerpt |
| Claim | id, text, claim_type, materiality, jurisdiction, population, verification_status, limitations |
| Claim-source link | claim_id, source_id, role, passage_locator, verification_note |
| Event | id, name, organiser, starts_at, timezone, format, location, registration_url, checked_at |
| Report | id, run_id, version, hash, claim_ids, candidate_ids, content, validation, status |
| Review | report_id, version, hash, reviewer_identity, decision, comments, timestamp |
| Action | id, run_id, idempotency_key, tool, sanitised_parameters, result, duration, usage, error |
| Monitoring | id, claim_id, trigger, next_check, status |

Use UTC internally and Australia/Sydney for schedule/display. Preserve source and claim
revision history. Bind approval to report hash; any edit requires fresh approval.
Map claim/source/link records to the shared Nexus Evidence Register; do not create an
independent authoritative evidence register. Storage adapters and migrations are pending.

## Integration boundaries

The original guard is an in-process prototype. A single-host SQLite durable controller now persists counters, leases, cancellation, checkpoints and delivery state; see durable-controller.md. It is not a multi-host controller. Persist counters,
leases, reservations and cancellation before production. It currently blocks all paid calls.
Production payment requires versioned pricing, token/output limits, FX policy, conservative
pre-call reservations and reconciliation. Unknown costs must prevent paid execution.

Public retrieval must enforce HTTP(S), DNS/IP checks including redirects, private-network
blocking, response-size/time limits and content sanitisation. Transport controls are implemented in src/adapters/public-source.mjs; see
research-adapters.md for tested boundaries and remaining integration gaps. Retrieved text cannot update permissions.
Human approval authentication must exist outside the agent tool namespace.

The scheduler stays disabled. An eve 0.72.1 generated scaffold is retained in `runtime/`, gated before model calls.
Research adapter code exists; live search provider, database, review UI and operational eve integration remain pending. Verify installed eve documentation before mapping tools and durable sessions.
