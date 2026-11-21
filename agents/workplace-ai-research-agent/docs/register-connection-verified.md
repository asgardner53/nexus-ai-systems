# Nexus Evidence Register connection — verified host integration

Status: Draft implementation verified, 8 October 2026. Human owner: Alec Gardner.

SQL access recovered: Alec's dashboard SELECT 1 succeeded and the connector's
independent SELECT 1 also returned 1. No agent restart/reset operation was
performed; the recovery's underlying cause is unknown.

## Actual shared-schema mapping

Inspected the existing `evidence.sources`, `evidence.claims` and
`evidence.claim_sources` columns and constraints. The concrete mapper writes
those tables; it does not create a second evidence register. It maps source
provenance/quality, URL, accessed date and content hash, claim context/materiality,
provisional status, human decision owner and claim-source locators.

Applied the additive `nexus_register_research_append_v1` migration, retained in
`db/nexus-register-research-append-v1.sql`. It adds an idempotency-receipt table
and a transactional `SECURITY INVOKER` append function in the existing private
evidence schema. PUBLIC, anon and authenticated cannot execute the function.
The receipt table has RLS and no client grants or policies: default deny is
intentional. No existing rows or permissions were broadened.

The function accepts only new NEE-AI-RA-* records, M2 Draft bundles and provisional
or unresolved claims requiring Alec's decision. Existing identities cannot be
overwritten; reuse or corrections must use the separate controlled workflow.
A complete bundle and receipt commit in one transaction. A repeated delivery
key/hash returns the original receipt; changed payload raises an error.

## Live verification

A real provisional connection-test bundle from the previous retrieved arXiv
abstract was inserted through the SQL connector. One source, one UNRESOLVED
claim, one claim-source link and one receipt remain. The claim requires human
review and is explicitly unsuitable for publication until review.

IDs:
- NEE-AI-RA-SRC-20261008-connection-v1
- NEE-AI-RA-CLM-20261008-connection-v1

The durable controller's evidence queue called the concrete mapper and accepted
the live receipt. A repeated delivery returned the same IDs and hash. Direct
counts confirmed no duplicates. A response-boundary parser error initially left
the outbox pending despite the successful database commit; after correction,
the retry recovered the original receipt and completed delivery. A regression
test covers the exact connector wrapper format. No report cutoff advanced.

Live rollback tests confirmed approval-state rejection and changed-payload
idempotency rejection. Privilege checks confirmed anon/authenticated execution
is denied. Security advisors report an INFO-only RLS-without-policy notice for
the receipt table, consistent with deliberate client denial. Existing unrelated
RPL/auth warnings remain outside this change; this is not a whole-project
security clearance. Official explanation:
https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy

## Runtime boundary

`createNexusRegister` is connected through an injected trusted SQL-host callback.
This session's Supabase connector works. An independently deployed eve runtime
still needs its own reviewed server-side connection and identity; no credential
was created or granted to a new agent. Local tests plus supervised host delivery
are not a production release. Node 24 and durable local controller storage are
still required for the current controller implementation.

70 local tests pass. Scheduling, autonomous model runtime, paid execution and
publication remain disabled. Next build stage: complete report drafting,
validation and human review, then run the three supervised report pilot gates.
