# Public research adapters — implementation stage

Status: Draft implementation, 7 October 2026. Not operational release.

## Connection

Import `createSearchAdapter` and `createSourceAdapter` from `src/adapters/`.
Both require the current run's `RunGuard`. Source retrieval uses Node's HTTP(S)
transport by default. Search requires a trusted host-supplied connector:

```js
const search = createSearchAdapter({guard, provider: {
  costAudCents: 0,
  search: async ({query, windowStart, windowEnd, signal}) => {
    // Call an approved connector; return [{url, title, snippet, date}].
  }
}});
const retrieve = createSourceAdapter({guard});
```

The example is a wiring contract, not a functioning search provider. This workspace's
search tool is not an HTTP endpoint the deployed agent can automatically reuse.
Selecting and connecting a deployment-accessible search provider remains open.
Unknown or positive provider prices are rejected while paid execution is disabled.
Provider implementations must honour abort signals and be reviewed host code.

## Implemented boundaries

- Public HTTP(S) only, no credentials, standard ports only.
- Reject private/special IPv4, non-global IPv6, mapped and transition addresses.
- Check every DNS answer; pin one checked address to each actual connection.
- Recheck every redirect; reject HTTPS downgrade; maximum four redirects.
- Fifteen-second overall operation timeout, two MB body cap, identity encoding.
- HTML/plain text/JSON only; PDFs require a separate extraction adapter.
- Deduplicate canonicalised search URLs and bound candidate fields/results.
- Search dates/snippets are unverified; page dates preserve metadata locators.
- Preserve source hash, retrieval time, redirect path and unavailable/failed status.
- `locateEvidence` finds an exact passage in extracted text; semantic claim support
  and date verification remain pending, never silently certified.
- Stripping scripts is text extraction, not proof of prompt-injection immunity.
  All content remains untrusted and cannot change permissions.

No automatic retries in adapters. Controller retries must reserve another call.
HTTP redirects reserve additional source calls. DNS and HTTP errors return a
sanitised failure; permission/resource errors propagate to stop orchestration.
Cancellation signals should be wired by the controller for in-flight cancellation.
The in-process guard alone cannot cancel a request already in progress.

## Verification and remaining gates

36 deterministic tests pass, including private redirects, mixed DNS answers,
duplicates, missing originals, unsupported PDFs, size caps, cancelled runs and
passage mismatch. No live provider or deployed network smoke test was performed.
HTML metadata extraction is deliberately limited; missing or conflicting dates
need review. Durable controller, Evidence Register integration, eve tool wiring,
semantic claim review and supervised reports remain pending.
