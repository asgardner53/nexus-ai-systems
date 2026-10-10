# Durable run controller and Nexus Evidence Register interface

Status: Draft implementation, 8 October 2026. Update: live host register connection now verified; see register-connection-verified.md. Owner: Alec Gardner.

## Controller delivered

Node SQLite-backed transactions persist windows, pinned configuration, absolute
deadlines, counters, stage checkpoints, action results, evidence-delivery queue,
report drafts and successful cutoffs. WAL with FULL synchronous writes supports
process restart on a persistent local volume. Run leases use monotonically
increasing fencing tokens so a superseded worker cannot commit results.

This is a single-host implementation. Store the database on an explicitly
provisioned durable volume; scratch is not an operational durability guarantee.
Do not use ephemeral serverless storage or share SQLite across network volumes.
Multi-host deployment requires a transactional server database implementation.
Node's built-in SQLite API is experimental in the tested Node 24 runtime.

Use `DurableStore(path)` and `RunController({store, token, tools, register})`.
Acquire the run lease before dispatch. Tool wrappers receive `{signal, guard}`;
construct research adapters with that guard. The initial tool call is reserved
by the controller; subsequent transport calls reserve additional allowance.
In-flight calls renew/check the lease every 250 ms and abort on cancellation,
expired deadline or lost lease. Adapters must honour AbortSignal to stop their
underlying requests. Stop and release workers explicitly after exceptions.

Completed action keys return cached results. Reusing a key with different inputs
fails. An uncertain read can retry within the cumulative limit; an uncertain
external write must be reconciled rather than silently repeated. Controllers
must derive subsequent windows from `store.cutoff(agent)`; partial, cancelled
and undelivered runs do not advance it. Report save and cutoff advancement occur
in one transaction, after the host validator confirms evidence review and
pending evidence is delivered. Saved text remains Draft, not approved.

Controller methods are host application APIs, not model-exposed tools. No
approval or publication operation is supplied. Authentication and human review
are separate unfinished work. Validation booleans must come from the trusted
review/validation layer, never directly from model output.

## Shared-register interface

The delivery queue is operational transport state, not an authoritative or
competing Evidence Register. Queue bundles contain provisional claim records,
source provenance, claim-source locators, M2 routing and Alec's human decision
gate. Agent-originated verified/approved claims are rejected.

The host must supply a schema-verified register adapter:

```js
const register = {
  schemaVerified: true,       // only after inspecting the actual shared schema
  supportsIdempotency: true, // only after testing server-side replay behaviour
  appendEvidence: async ({idempotencyKey, payloadHash, payload, signal}) => {
    // Map to the existing Nexus register, transactionally append all records.
    // Replays of the same key return the original receipt; changed payload fails.
    return {idempotencyKey, payloadHash, recordIds};
  }
};
```

The real receiver must atomically insert the source/claim/link records and the
idempotency receipt. No acknowledgement means the queue stays pending. Retry
uses the same key/hash, requiring the receiver's idempotency guarantee. Durable
queue delivery preserves existing evidence history and never deletes records.
The adapter cannot truthfully mark schemaVerified until the actual schema is
inspected. Merely setting that flag in application code is not connection proof.

## Live connection result

Supabase discovered the existing NEXUS BMG project as ACTIVE_HEALTHY. A read-only
SQL query for evidence tables and a table-list request both returned:
`Connection terminated due to connection timeout`.

No tables, migrations, records, policies or credentials were changed. The shared
register schema remains unknown; no table names or SQL mapping were fabricated.
The live connection is BLOCKED. No claim of successful Supabase registration
or database verification is made. Changelog retrieval was unsupported by the
web tool's content-type handling; current official function/RLS guidance was
retrieved through Supabase's documentation connector. No Supabase code or schema
changes were implemented without a verified target.

## Validation

63 checks pass, including two database connections competing for a run lease,
reopen recovery, forced SIGKILL recovery, fenced stale workers, checkpoint
conflicts, cumulative budgets, uncertain writes, cancellation, lost delivery
acknowledgement, and atomic report/cutoff save. The lost-ack receiver is a test
double, not Supabase. No live register write or full report acceptance test passed.

Next dependency: restore SQL access, inspect the existing register schema, then
implement its concrete transactional mapping and test a provisional append/replay.
Scheduling, paid external execution and the eve model runtime remain disabled.
