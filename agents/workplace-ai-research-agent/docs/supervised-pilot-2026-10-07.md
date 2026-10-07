# First supervised report pilot

Live public search and two primary source openings were completed. GitLab's 6 October release supports a carefully attributed announcement claim. PwC's Australian release is dated 30 September and was excluded from the October window. Search coverage was intentionally bounded; this is not a complete weekly report.

The live Nexus Evidence Register returned an append receipt for NEE-AI-RA-SRC-20261007-pilot1 and NEE-AI-RA-CLM-20261007-pilot1. Both remain provisional, Draft and subject to Alec's decision. The source hash explicitly covers a research summary, not original HTML. The local durable outbox was reconciled to that receipt.

The draft failed validation as expected without a trusted final evidence attestation. The run remains partial, the reporting cutoff was not advanced, and no human approval or publication occurred. See pilot-output/report.md and result.json for exact draft and validation errors.

Server-side Supabase Auth verification now checks /auth/v1/user with a bearer token, rejects anonymous/unconfirmed/non-owner accounts, fails closed on network failure, and assigns the review scope only to an operator-configured owner subject. Connect its authenticate callback to ReportReview and authenticateRequest to createReviewServer. Configure NEXUS_REVIEW_PROJECT_URL, NEXUS_REVIEW_PUBLIC_KEY and NEXUS_REVIEW_OWNER_SUBJECT; never place tokens in committed files. No owner mapping or authenticated live session is currently available, so live sign-in remains unverified.

The evidence-control adapter accepts a trusted host review callback and binds report/evidence snapshot hashes. It refuses an incomplete review. It does not perform semantic review automatically. A reviewer must supply individual item, claim, source, Australian search and challenge checks before validation can pass.

Verification: 91 tests passed, including owner mismatch, anonymous identity, missing configuration, transport failure and incomplete evidence review. Identity tests use fixtures, not a live sign-in.
