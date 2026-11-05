# Expanded supervised report pilot

Owner: Alec Gardner. Status: Draft ready for human review. No approval or publication.

## Verified result

Five dated primary-source items were selected after primary authority, academic, practitioner, challenge and currency searches, including Australian searches. The report contains 1,129 words and passed validation with no errors or warnings. It preserves attribution and commercial/methodological limitations. Missing academic retrieval and unconfirmed event registration are visible gaps. The pilot window ends at the actual capture time, not a future Friday cutoff; it is a supervised acceptance exercise rather than a scheduled Friday edition.

Live Nexus delivery returned five source IDs and five claim IDs. A repeat append returned an identical receipt; independent SQL counts confirmed five sources, five claims, five links and one delivery receipt. All claims remain provisional, Draft/M2 and subject to Alec's decision. Short quoted source excerpts and their SHA-256 hashes are retained with explicit locators; they are not full-page archives.

The durable outbox was acknowledged, the run became ready_for_review, and its local pilot cutoff advanced transactionally. The earlier incomplete one-item pilot remains an historical blocked result. The local SQLite volume is an execution checkpoint, not a deployed persistent service. Versioned JSON/Markdown artifacts preserve the reviewable result in GitHub.

The first SQL write succeeded before its local input transport closed. The run was marked partial and its previous lease fenced. Resumption reconciled the actual receipt, then tested a live replay before completing. The recovery did not alter evidence payloads or duplicate registered records.

## Connected controls

`createConnectedReview` connects Supabase server-side user validation, short-lived browser sessions, the report review server, and host evidence attestations. `saveReviewedDraft` builds the exact snapshot, requests its attestation, and persists validation. The host callback is operator-owned and is not an agent approval tool.

The sign-in page posts email/password directly to this server and Supabase Auth. It creates no accounts and sends no email. The browser receives a random HttpOnly, Secure, SameSite=Strict cookie; access tokens stay in server memory, refresh tokens and passwords are not persisted. Requests revalidate the token against the configured owner. Login attempts are bounded; sign-out removes the local session. Sessions expire within 15 minutes and are lost on restart, requiring another sign-in. This is a single-host service and requires HTTPS.

`start-review.mjs` connects an operator-configured store and optional evidence review file. Missing configuration fails closed. Configure the variables in .env.example and run `npm run review` behind the exact configured HTTPS origin. Credentials belong only in ignored .env or the deployment secret store. A Supabase dashboard account is separate from an app user in NEXUS BMG's Auth database.

The final evidence record is an AI-assisted, host-supervised assessment of opened sources and editorial wording. It is not an independent external review or Alec's human approval. The report, evidence, source, claim and item hashes bind that assessment to this version. Completed coverage is now required before the short/quiet-week exception can pass. Callback mutation cannot change the hashes of the original snapshot.

## Remaining gate

No owner account has been selected and no live sign-in or real human decision was performed. The HTTPS review service is not deployed. Confirm Alec's intended app sign-in email before resolving the matching existing Auth user; never infer the owner from user-editable profile metadata or grant every authenticated user review authority.

## Validation

`npm run check` passed configuration validation and all 95 tests. HTTP tests exercise actual local sign-in, cookie transport, owner revalidation, expiry, logout, denied cross-origin login, rate limits and exact-hash approval via the connected factory. These identity tests use fixtures. Live SQL evidence delivery and replay use the actual NEXUS BMG project.

Artifacts: pilot-output/pilot2-report.md; pilot2-result.json; pilot2-input.json; pilot2-evidence-review.json. The result captures the exact run/report IDs, version, hashes, validation and delivery receipt. Autonomous scheduled research, paid model execution and distribution remain disabled.
