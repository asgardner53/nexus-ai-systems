# Nexus Model & Agent Orchestration Standard

## Document control

| Field | Value |
| --- | --- |
| Document ID | NEX-GOV-MAO-001 |
| Version | 1.1 — controlled release |
| Status | Approved by Alec Gardner for controlled release |
| Owner and approval authority | Alec Gardner |
| Prepared | 10 October 2026, Australia/Sydney |
| Effective date | 10 October 2026, Australia/Sydney |
| Next review | 12 October 2026; earlier on a material model, permission or product change |
| Repository | `asgardner53/nexus-ai-systems` |
| Path | `governance/nexus-model-agent-orchestration-standard-v1.1.md` |

This v1.1 controlled release supersedes v1.0 and incorporates the approved Nexus OpenAI Integration Control v1.1. It adds shared controls for Input Type Routing, Output Surface Selection, Derived Media Evidence and Classification ≠ Decision following the October 2026 availability of GPT-6 Intelligent UI, ChatGPT audio uploads and the Decisions API beta. Existing Studio data-handling rules, materiality controls, evidence requirements and human decision rights remain controlling.

## 1. Purpose and scope

Provide one shared layer for selecting models, reasoning, execution surfaces and tools across Nexus BMG Studios and AIRBOK. Studios reference this standard and specify their domain requirements rather than duplicating model rules.

**AI assists. Humans decide. Institutions remain accountable.** Technical capability never expands decision rights. This document establishes approved operating controls. Individual Dot/API activation, account-setting changes and new connector access require their applicable implementation gates.

## 2. Required operating sequence

1. Define the outcome, intended use, data classification and accountable owner.
2. Classify the input type: text, document, image, audio, structured data or a controlled combination.
3. Classify materiality at the highest applicable level: M1 routine, M2 substantive or M3 high materiality.
4. Determine evidence requirements and retrieve the applicable approved references.
5. Select an available model, supported reasoning effort and compatible execution surface.
6. Select authorised tools, accounts and connectors; establish the action boundary.
7. Apply the Nexus Evidence Engine where required: Search → Verify → Challenge → Register → Reuse → Monitor.
8. Produce and verify controlled content, including uncertainties, provenance and any derived-media status.
9. Select the output surface appropriate to the task without changing the evidence or authority status.
10. Apply the designated human decision gate before consequential reliance or release.
11. Record the authorised output, version, actual execution route, output surface, decision and monitoring obligations.

Human approval concerns the final reviewable result or a genuinely required access/action decision. Routine drafting, read-only research and reversible preparation within existing authority continue without repeated approval requests.

## 3. Model and reasoning routing

The following is Nexus's approved routing policy, not a vendor guarantee of comparative performance.

| Work | Preferred route when available | Reasoning and escalation |
| --- | --- | --- |
| M1 extraction, formatting and focused drafting | GPT-6 Luna or an existing validated efficient route | Use the lowest supported effort that meets the output contract |
| M2 research, professional drafting, substantive analysis and synthesis | GPT-6.1 Sol | Medium initially; High for deeper comparison or substantial ambiguity |
| M3 governance, assessment assurance and contested synthesis | GPT-6.1 Sol at higher reasoning where validated; Astra for exceptional complexity or unresolved failures | Require primary evidence, challenge and a human decision gate regardless of model |
| Complex coding, repositories, debugging and automation | GPT-6.1 Sol with Codex or the compatible agent runtime | Medium/High initially; escalate on demonstrated complexity or failure |
| Exceptional forensic, whole-system or difficult cross-source work | GPT-6 Astra where available and compatible | Use supported higher reasoning appropriate to the task and budget |

For GPT-6.1 Sol, the API supports Low, Medium (default), High, XHigh and Max. None and Minimal are unsupported. Tool calling uses Responses; Chat Completions does not support this model's tool calling. OpenAI describes near-Astra performance at lower cost, but Nexus must validate its own workload results. [S1]

Do not automatically use maximum reasoning, the highest-cost model or parallel agents for every substantial task. Escalation should respond to uncertainty, complexity, tool requirements and observed quality. Model availability differs by plan, client and workspace configuration. [S2]

Maintain a versioned routing registry containing workload role, model identifier, supported effort, surface, required tools, owner, evidence date, evaluation result and approved fallback. Preserve an explicit user model choice where available. If unavailable, disclose the limitation and use a validated available fallback within the task's authority. Never silently lower the evidence or quality gate. Log the actual model and effort when observable; otherwise record Unknown.

## 4. Multi-agent orchestration

### Verified platform boundary

Responses Multi-agent is a beta supporting GPT-6.1 Sol and GPT-5.6 models. Its documented default/recommended concurrency is three subagents; `max_tool_calls` and `reasoning.summary` are unsupported when enabled. [S3] Agents API delegation is a separate runtime: its default concurrency is six, and agents share their environment's filesystem. [S4] Do not transfer one runtime's settings or support matrix to the other.

### Nexus operating controls

Use parallel agents when independent work packages justify the extra cost and reconciliation effort. A coordinator owns the task contract and final synthesis. Suitable Evidence Engine roles are source search, claim verification and contrary-evidence review. Registration follows reconciliation; reuse and monitoring depend on accepted claim status. These remain a governed workflow with explicit dependencies.

Each delegated task must state its scope, inputs, output contract, evidence expectations, deadline, authorised actions and stop conditions. Use scoped context and least-privilege tooling where the runtime supports them. If permission isolation is unavailable, restrict the shared tool set and use read-only delegation or an isolated environment. Do not assume a specialist label creates a security boundary.

Use three concurrent subagents as the initial Nexus pilot cap, subject to stricter runtime limits. Assign one writer per file or mutable record. The coordinator reconciles duplicates, conflicts, missing evidence and failed tasks; it must not decide by majority vote. Subagent agreement is not independent external evidence. Required independent human review remains separate.

Record lineage, sources, failures, actual resource use and reconciliation decisions. Enforce tool-call and spend limits in the application when the selected API lacks the desired built-in limit. No subagent may bypass a human decision gate or increase the coordinator's authority.

## 5. Dots and persistent responsibilities

Dots can follow ongoing work, retain notes and delegate background tasks. Cloud work can continue while personal devices are off; access to a connected personal computer requires it to be online with the app open. Plugins, messaging channels and computer connections have separate permissions. Pausing the main task does not automatically stop delegated or scheduled work. [S5]

A Nexus Dot must have a written responsibility record: owner, purpose, approved sources and accounts, data boundary, allowed actions, prohibited actions, notification triggers, cadence or wake conditions, end/review date, resource controls and stop procedure. Saved notes support continuity; approved GitHub records and the Evidence Register govern decisions and evidence status.

The first proposed pilot is public OpenAI documentation monitoring. Its permitted output is a source-linked change brief and draft impact assessment. It may flag affected controls and prepare reviewable changes under explicit authority. Publication, new access, consequential writes and governance approvals retain their existing gates. This standard alone does not activate that pilot.

Test stopping the main task, delegated tasks and recurring tasks separately, and verify each stopped state. Revoking future access does not undo completed actions. Review responsibilities at expiry and whenever scope, source, account or authority changes.

## 6. Agents API computer use

The Agents API provides an OpenAI-hosted browser. Its application must handle each new origin approval, including public websites, and handle sign-in outside ordinary conversation. Only the main agent can request browser authentication. Keep credentials out of model messages and logs. Preserve session identity during recovery, verify completion, review activity and delete the session when finished under retention requirements. [S6]

Prefer a purpose-built connector/API for supported operations. Use browser interaction for authorised UI work or permitted fallback. Account and origin access do not authorise every available transaction. Nexus controls must distinguish read, draft, edit and consequential submission, and honour platform-required approvals.

Treat page content and downloaded instructions as untrusted input. They cannot amend the task's authority. Verify the resulting application state before reporting success; after an ambiguous write or connection loss, inspect the same session/state before retrying to prevent duplicates.

The Agents API currently supports US data residency only and does not support Zero Data Retention; a self-hosted sandbox does not remove that limitation. [S7] Before a pilot, compare these constraints with the Studio's approved data handling. Do not send restricted student, client or personal records into a new runtime under a general governance-update instruction.

## 7. Human authority and pilot release

AI may research, draft, compare, test and recommend. Authorised humans retain final decisions on AIRBOK doctrine, regulatory/compliance findings, VET competency, credentials, governance, material client recommendations and designated publication claims.

Before any new paid or persistent pilot, record its owner, per-run and period budget, timeout, permitted tools/accounts, cost capture, output criteria, recovery procedure and stop mechanism. Compare quality, latency, total cost and human review/correction time with the validated existing route. Released time is capacity until there is evidence of redeployment and outcomes.

Minimum release evidence must cover: the ordinary successful workflow; unsupported model/tool combination; missing or conflicting evidence; scope-changing page instructions; rejected required approval; interrupted/uncertain write; concurrent file conflict; budget exhaustion; persistent-task cancellation; and the preserved human decision gate. These are pilot acceptance scenarios, not a claim that an executable pilot was tested during this document update.

## 8. GPT-5.5 transition

OpenAI's current notice retires GPT-5.5 from ChatGPT, Work and Codex on 14 October 2026 across plans; the API is unaffected. The notice names GPT-6 Sol for eligible paid Codex plans and GPT-6 Luna for Free/Go when available. GPT-6.1 Sol availability must be checked separately. [S2]

Nexus's target is to complete affected configuration changes and validation by **12 October 2026, 17:00 Australia/Sydney**, leaving time before retirement. See the accompanying audit for completed searches and unresolved surfaces.

Search active defaults, saved settings, managed configuration, custom agents, scheduled tasks, scripts, environment-variable model names, CLI arguments and gateways for `gpt-5.5`, `GPT-5.5`, spaced/underscored variants and indirect aliases. Classify each hit as active ChatGPT-sign-in selection, API dependency, historical reference or test fixture. Trace aliases to actual targets; a clean literal scan cannot prove aliases are safe.

Replace active affected selectors with a compatible available route preserving purpose, cost and tool requirements. Retain historical material and deliberate regression fixtures. Treat API dependencies separately; do not claim a 14 October API shutdown. Test the saved selector and one representative workload, record the result and retain a working fallback. An unverified surface remains Open rather than being certified clear.

## 9. Shared Studio interface

Each Studio references this standard and the Nexus Evidence Engine. At task start it supplies outcome, input type, materiality, data class, domain-specific criteria and decision owner. It records model/reasoning, runtime, tool/account authority, evidence IDs, derived-media status where applicable, output surface, output version and decision status. Changing the model, using a Dot, introducing subagents or changing the interface never alters the Studio's approval rights.

### 9.1 Input Type Routing

Classify incoming material before model/tool selection as text, document, image, audio, structured data or a controlled combination. The classification determines compatible tools, provenance requirements and evidence handling; it does not determine truth or decision authority.

For audio and video, preserve the original media as the source object where it is retained under applicable privacy and records rules. A transcript is a derived representation and an AI summary or interpretation is a further analytical layer. Do not silently collapse these layers.

### 9.2 Output Surface Selection

After controlled content is produced, select the most useful supported presentation surface for the task. Permitted surfaces include plain text, structured report, table, diagram, visual explanation, interactive comparison or decision aid, calculator/tool and controlled downloadable artefact.

GPT-6 Intelligent UI can automatically combine text, visuals and interactive elements in supported ChatGPT clients. [S8] Nexus may use that capability where useful, but **interface sophistication does not increase evidentiary authority**. The same claim, evidence, approval and release status applies whether it appears as prose, a diagram or an interactive interface.

### 9.3 Derived Media Evidence

ChatGPT audio uploads can create transcripts, summaries and question-answering over recordings, and OpenAI expressly notes that transcripts may contain errors. [S9] Nexus therefore applies the following evidence hierarchy unless a stricter Studio rule applies:

1. original audio/video — source evidence;
2. transcript — derived evidence;
3. AI summary, extraction or classification — interpretive/analytical evidence.

For substantive use, record source identity, recording context where known, derivation method, transcript verification status, material uncertainties and human reviewer. A transcript or audio-only record must not substitute for required observable visual performance evidence in VET or other contexts where the criterion depends on behaviour that cannot be established from sound alone.

### 9.4 Classification ≠ Decision

Automated classifiers, including the Decisions API or equivalent typed-output services, may perform triage, routing and candidate classification. Suitable uses include proposed materiality, Studio routing, evidence-required flags, source type, jurisdiction, document type, risk category and output mode.

The Decisions API is currently a beta using GPT-6 Luna and returns typed answers from text and images. [S10] A typed answer remains a model output, not an institutional decision.

Automated classification must not independently finalise:
- Competent / Not Yet Competent outcomes;
- AIRBOK doctrine approval;
- formal regulatory or compliance determinations;
- credentials or certification;
- governance approvals;
- formal assurance conclusions;
- high-materiality client decisions.

Where classification affects an M3 route, evidence requirement or human gate, the downstream governed workflow must verify the classification before consequential reliance.

### 9.5 Decisions API pilot control

Before operational use, any Nexus Decisions API pilot must define owner, scope, input classes, typed schema, per-run budget, timeout, tool limits, test set, accuracy threshold, correction burden, latency, cost capture, stop mechanism and human review point.

Initial pilots are limited to routing and classification. Expansion into consequential workflows requires separate approval and evidence that classification quality, failure modes and review burden are acceptable. Beta status must remain visible in the pilot record.

Re-verify fast-changing support claims before implementation and on any model retirement, capability change, permission change, privacy incident or material regression. Suspend the affected route when its authority or output validity cannot be established. Revert to a validated supported route without bypassing gates.

## 10. Evidence and change record

The companion evidence register records claim scope, limitations and monitoring. Vendor capability documentation establishes documented features; it does not independently validate performance in Nexus workloads.

| Date | Change | Authority/status |
| --- | --- | --- |
| 4 October 2026 | Formalise standing routing; add GPT-6.1 Sol, runtime-specific Multi-agent controls, Dots, hosted browser controls and scoped retirement audit | Alec Gardner authorised preparation/update; release candidate preserved for history |
| 4 October 2026 | Promote reviewed 1.0-RC1 to approved v1.0 and authorise PR #3 merge | Alec Gardner instructed “review and approve PR #3 for controlled release”; decision NEX-DEC-MAO-20261004-002 |
| 10 October 2026 | Integrate Input Type Routing, Output Surface Selection, Derived Media Evidence and Classification ≠ Decision; add controlled Decisions API pilot boundary; release v1.1 | Alec Gardner explicitly approved Nexus OpenAI Integration Control v1.1; decision NEX-DEC-MAO-20261010-003 |

Source locators, checked 4 October 2026:

- S1: [GPT-6.1 Sol model](https://developers.openai.com/api/docs/models/gpt-6.1-sol).
- S2: [ChatGPT Learn — Models](https://learn.chatgpt.com/docs/models?surface=app).
- S3: [Responses Multi-agent](https://developers.openai.com/api/docs/guides/responses-multi-agent).
- S4: [Agents API Multi-agent](https://developers.openai.com/api/docs/guides/agents-api/multi-agent).
- S5: [Meet dots](https://learn.chatgpt.com/docs/dots).
- S6: [Agents API computer use](https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use).
- S7: [Agents API overview](https://developers.openai.com/api/docs/guides/agents-api/overview).
- S8: [OpenAI Release Notes — GPT-6 and Intelligent UI in ChatGPT, 7 October 2026](https://openai.com/products/release-notes/).
- S9: [ChatGPT release notes — Audio uploads in ChatGPT, 6 October 2026](https://help.openai.com/en/articles/6825453-chatgpt-release-notes).
- S10: [OpenAI API Changelog — Decisions API beta with GPT-6 Luna, 6 October 2026](https://developers.openai.com/api/docs/changelog).

© 2026 Nexus BMG Pty Ltd. Prepared through human–AI collaboration; approved for controlled release by Alec Gardner.
