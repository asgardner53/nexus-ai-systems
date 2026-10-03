# Nexus GPT-5.5 Dependency Audit

## Control and conclusion

- Audit ID: NEX-AUD-MAO-20261004-001.
- Version: 1.0; completed scoped inspection, 4 October 2026, Australia/Sydney.
- Owner: Alec Gardner. Migration completion target: 12 October 2026 at 17:00 Australia/Sydney.
- Report approved for controlled release by Alec Gardner on 4 October 2026; approval does not close unverified settings.
- Status: **No literal GPT-5.5 reference found in inspected content; whole-workspace migration clearance remains Open.**
- Linked standard: NEX-GOV-MAO-001, approved v1.0.

This audit completed now, before 14 October, distinguishes accessible evidence from settings that cannot be observed. No model selector was changed because no inspected active dependency was identified. It does not certify all Nexus systems free of dependencies.

## Scope and method

Enumerated the default-branch trees of ten connected repositories; none returned a truncated tree. Fetch-and-scan inspection covered 214 text files: all 52 files in the primary governance repository; 107 selected PD Studio text files; 12 Masterclass text/skill files; and selected scripts, configuration and agent surfaces in four other repositories. Package lock data, binaries and most manuscripts were excluded. Three changed register files on the governance repository's `studio-building-standard` branch were also read and scanned. The other governance branch contains the historical Grants charter merge parent; it was inventoried, not independently content-scanned.

Each of the 214 requested files returned content without a fetch failure. Matching used a case-insensitive expression covering GPT/gpt plus optional spaces, underscores or hyphens, 5 plus a dot/space/underscore/hyphen plus 5, and the non-breaking-hyphen display variant. It was a literal/content audit; indirect routing aliases were not resolved through live deployments.

| Repository | Files read and scanned | Default-branch reference returned by tree request |
| --- | ---: | --- |
| `asgardner53/nexus-ai-systems` | 52 | da24ca21250e2f5450eda2014f82ce32b302efad |
| `asgardner53/pd-studio` | 107 | 9c554795dc80de8071e590ce1cb360aba9019cc5 |
| `asgardner53/Nexus-BMG-masterclass-studio` | 12 | 28cbdb16f60b7ad6d902080aebfcb4ceb0d4fa55 |
| `asgardner53/airbok-foundational-edition` | 29 | 06b27d65792fc6afe81e65f37e5496b0ec62eb35 |
| `asgardner53/AIR-Foundation-Udemy-course-material` | 11 | 441d36f1a981a2733e2fab5ca789e778feffb2e3 |
| `asgardner53/before-you-trust-the-output` | 2 | d94fa89de5ec61178b77ffbe691a14c3ba90f92e |
| `asgardner53/hr-roles-automation` | 1 | 4570da94558c354b80ac6e6b9566d17055ed4746 |

Additional inventories without content scanning: `Nexus`, `Polymathic-Ability` and `Nexus-BMG-Idea-Proposition-Register`. All repository refs were observed in this run; reads used default branches, so this is a timestamped inspection rather than a transactionally pinned checkout. No changes were made to the inspected files.

## Results

| Surface | Evidence | Result | Limit |
| --- | --- | --- | --- |
| Connected repository content | 214 files plus 3 governance branch register files | Zero literal references | Scoped text only; other branches, binaries, manuscripts and live deployment values excluded |
| Available Nexus remote-skill files | 51 local MD/YAML/JSON/TXT files; rg completed with no matches | Zero literal references | Current execution environment copies; does not prove every deployed skill copy is the same |
| Returned scheduled automation records | 25 returned records, cursor null; prompts and returned metadata scanned | Zero literal references | Model selection field is absent; other paused/completed records are not proved inspected |
| Standard retrieval | Governance main and changed branch registers inspected; filename/content Library and GitHub searches attempted | No standalone orchestration-standard predecessor resolved | Fuzzy search results are not evidence of absence or a whole-Library clearance |
| Workspace defaults / saved models / managed settings | No authorised settings inspection surface exposed | **Open** | Requires administrator verification |
| Custom agent and Dot saved configuration | Not exposed through current tools | **Open** | Requires owner inspection, including permissions and indirect aliases |
| Alec's local Codex/desktop/IDE configuration | Not accessible as his computer in this session | **Open** | Execution container is not evidence of his Mac settings |
| API gateways, deployment environment and production secrets | Not inspected | **Open** | Inspect model values without exporting credentials; API retirement scope differs |

Private automation prompts and private repository contents have not been reproduced in this public governance report.

## Retirement evidence and affected populations

OpenAI's [Models notice](https://learn.chatgpt.com/docs/models?surface=app), checked 4 October 2026, states that 14 October retirement affects ChatGPT, Work and Codex, including Business. The OpenAI API is not affected. Its paid-plan Codex replacement guidance points to GPT-6 Sol when available; the proposed Nexus GPT-6.1 Sol route needs a separate compatibility/availability check. The old September changelog suggestion of GPT-5.6 Sol is an earlier recommendation; the current Models page provides the migration baseline.

## Closure actions

| ID | Required action | Owner | Due, Australia/Sydney | Evidence required / status |
| --- | --- | --- | --- | --- |
| MAO-A01 | Inspect workspace defaults, saved settings and managed configurations for literal and indirect GPT-5.5 selection | Alec or workspace administrator | 8 October 2026 | Redacted settings record and actual saved model target; Open |
| MAO-A02 | Inspect custom agents, Dots and scheduled-task model settings | Alec or agent owner | 9 October 2026 | Actual selector/alias result; returned automation prompts alone cannot close this; Open |
| MAO-A03 | Inspect local Codex, desktop and IDE model selection, scripts and CLI defaults | Alec or authorised operator | 9 October 2026 | Redacted configuration and saved selection check; Open |
| MAO-A04 | Inspect live model environment values and API/gateway aliases; separate API-only dependencies | Authorised system owner | 10 October 2026 | Alias resolution and affected-surface classification; Open |
| MAO-A05 | Change identified affected selectors to an available compatible route; run a representative workflow per changed route | Authorised system owner | 12 October 2026, 17:00 | Saved selector, result, tool compatibility and fallback; conditional on findings |
| MAO-A06 | Record human migration closure against every applicable surface | Alec Gardner | 12 October 2026, 17:00 | Decision with evidence links; Open |

These are recorded deadlines, not newly created reminders or a promise of background execution. This request's accessible audit is complete; settings-level closure requires the evidence above.

## Reproducible checks and acceptance

Search literal selectors, human-readable names, CLI `--model` values, JSON/TOML/YAML entries and model aliases. Match variants such as `gpt-5.5`, `GPT 5.5` and `gpt_5_5`. Review each hit in context. Keep historical references and intentional fixtures; migrate active affected selections; classify API-only use separately.

For each changed route, verify availability on its actual plan/client, supported reasoning, endpoint and tools; persist the new selection and run one representative workload. Verify that a failed or unavailable preferred route has a working supported fallback. Record the task's evidence and human approval gates. Close only when every applicable Open surface has evidence; mark exclusions explicitly.

## Change and execution record

This run used authorised connector reads, official documentation browsing, local skill-file search and a single coordinating assistant. No delegated subagents, Deep Research run, API pilot, Dot activation, account-setting changes or deployment tests were executed. Actual model/effort metadata were not independently observable and are recorded as Unknown. No cross-system clearance or runtime migration success is asserted.

