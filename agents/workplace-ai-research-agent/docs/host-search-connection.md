# Host search connection and supervised research test

Status: Draft implementation. Owner: Alec Gardner. Tested: 7 October 2026.

The `hosted-web.mjs` adapter connects to the host's available
`mcp__codex_apps__search_service_web_run` capability through an injected `invoke`
callback. Search is normalised through the existing search adapter and guard.
Source retrieval uses host-returned line excerpts, with reference, line range,
retrieval time and excerpt hash. It does not reuse or claim the DNS-pinning
assurance of the native HTTP transport. All source content remains untrusted.

This is a supervised host connection, not a new independently accessible API.
The callback requires an active host exposing that tool. No credentials were
created and no deployment provider was connected. Host usage is unmetered by
this prototype; zero additional provider charges are reserved, not a claim that
subscription usage costs nothing. Paid external calls remain disabled.

## Executed test

`scripts/host-research-smoke.mjs` emits JSON host requests and consumes the host's
actual tool responses over stdin. A response may be passed as `resultFile` to
avoid terminal line-size limits. Paths are operator inputs, never agent tools.

1. Searched for the authors' Generative AI at Work paper, using a historical
   window for a repeatable connectivity test, not this week's news.
2. Received 23 candidates and selected the arXiv abstract page.
3. Opened that page through the host connector.
4. Located an exact abstract passage and recorded a matching excerpt hash.
5. Saved a structured run result in `live-connectivity-test-2026-10-07.json`.

Result: supervised host search-to-source-to-passage smoke test PASS. Two live
host calls in the final successful run. The earlier diagnostic native HTTP
attempt failed DNS resolution (`EAI_AGAIN`); NBER page retrieval returned 403.
Those were not retried to circumvent the environment's network restrictions.
The 403 diagnostic exposed an unavailable-source parsing defect, now fixed
and covered by a regression test.

Source references are host-session identifiers, not durable citation URLs.
The saved URL remains the reusable source identifier. No raw source text is
committed. No Friday report, shared Evidence Register write, semantic claim
approval or model-run gate was exercised. Publication dates remain unverified.
A search date hint alone does not prove that a candidate is within its window.

## Remaining operational gate

An independently deployed agent needs a deployment-accessible search provider
and reviewed secret/pricing configuration, or a runtime with this host capability.
The eve runtime remains disabled. Controller, persistent register mapping, report
validation, human review and three supervised weekly reports remain open.
