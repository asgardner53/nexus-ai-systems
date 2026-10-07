# Workplace AI Research Agent build record

Version: 0.1.0. Status: Draft. Owner / approval authority: Alec Gardner.
Prepared: 7 October 2026. Effective date: not effective; development authorisation only.
Next review: before adapters or pilot activation.
Path: `agents/workplace-ai-research-agent/docs/build-record.md`.

## Authority

Alec instructed creation of the GitHub project skeleton and configuration schema.
This authorises preparation and versioned storage, not approval of operational release.
Location: `asgardner53/nexus-ai-systems/agents/workplace-ai-research-agent/`.
Use a branch and draft pull request. Retain main and existing approvals.

## Delivered

Draft 7 configuration schema, safe example, dependency-free Node validator,
in-process resource/permission guard, tool contracts, instructions, architecture,
pilot tests and CI checks. All 70 local tests pass after register-connection implementation.

## Open build gates

- Completed: eve 0.72.1 init, relevant installed-documentation verification and dependency lock.
- Open: map application contracts into live eve tools and durable controller.
- Completed: public-source transport and provider-neutral public-search adapter; see research-adapters.md.
- Open: deployment-accessible search provider connection and live network smoke test.
- Durable record store, shared Evidence Register mapping and idempotency/leases.
- Model selection, secrets, pricing and paid reservations.
- Human review authentication and report/citation validation.
- DST-aware disabled scheduler integration.
- Full integration tests and three supervised reports.

These are development gaps, not failed production checks. No live agent or schedule exists.

## Adapter stage

Alec authorised implementation of public search and source-verification adapters.
Delivered bounded retrieval, DNS pinning, redirect safety, provenance extraction,
exact-passage checks and 15 additional deterministic tests. Semantic claim/date
verification and live search connection remain open. No paid execution or schedule enabled.

## Hosted search connection stage

Alec authorised connecting live search and an end-to-end research test.
Completed: host connector adapter and real search/source/passage smoke test.
Diagnostics: native DNS unavailable; NBER source returned 403, correctly
classified after parser remediation. See host-search-connection.md and the
saved run result. This is supervised host execution, not independent deployment
or the full Friday-report acceptance gate.

## Durable controller stage

Alec authorised the durable run controller and shared Evidence Register connection.
Delivered SQLite transactional run store, leases/fencing, checkpoints, action
idempotency, cancellation/deadline checks, delivery outbox and atomic draft/cutoff
save. 19 additional tests include SIGKILL recovery.
Live Nexus register connection BLOCKED: SQL inspection and table listing timed
out despite ACTIVE_HEALTHY project status. No Supabase writes or schema changes.
Concrete shared-schema mapping and live delivery verification remain open.
See durable-controller.md for boundaries and recovery dependency.

## Register connection recovery and verification

8 October 2026: dashboard and connector SELECT 1 passed; actual shared evidence
schema inspected. Additive append/receipt migration applied. Concrete host mapper
and durable outbox delivery passed live append/replay tests; direct counts prove
one source, claim, link and receipt. Approval and payload-conflict rejection tests
passed. No restart performed by the agent; underlying recovery cause unknown.
The earlier BLOCKED status is superseded for host SQL connectivity and registration.
See register-connection-verified.md for access boundaries and remaining deployment gates.
