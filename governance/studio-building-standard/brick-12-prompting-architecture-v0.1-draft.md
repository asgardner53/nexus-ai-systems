# Brick 12 — Prompting Architecture

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 12
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 12.1 Governing principle

Prompts are implementation components inside a Studio. They are not the Studio itself.

A prompt should operationalise controls that have already been defined through the Studio's purpose, authority, source hierarchy, boundaries, output standard, gates, evidence architecture, research protocol, workflow and human decision rights.

The governing rule is:

> **Prompts implement governance. They do not invent governance.**

A prompt must therefore be traceable to the approved Studio architecture it is intended to execute.

## 12.2 Mandatory build instruction

Every Studio must create a **Prompting Architecture and Prompt Control Record** before operational prompts are treated as approved.

The record must define:

1. prompt inventory;
2. purpose of each prompt;
3. workflow stage in which each prompt operates;
4. authorised inputs;
5. required source use;
6. required evidence handling;
7. required output form;
8. gate or decision relationship;
9. human review relationship;
10. prohibited prompt behaviours;
11. escalation conditions;
12. tool or connector use;
13. context and memory assumptions;
14. version and change-control rules;
15. testing requirements;
16. fallback behaviour; and
17. approval status.

## 12.3 Prompt-role rule

Each material prompt must have a defined role.

Possible roles include:

- intake;
- classification;
- source retrieval;
- research;
- evidence extraction;
- evidence comparison;
- contradiction testing;
- analysis;
- drafting;
- critique;
- gate assessment;
- human-review preparation;
- release preparation;
- exception handling; and
- post-release review.

A prompt that attempts to perform too many materially different functions should be decomposed where doing so improves control, traceability or testability.

## 12.4 Prompt hierarchy rule

The Studio must define the authority hierarchy that applies to prompting.

Prompt instructions must remain subordinate to higher-order controls such as:

- law and regulation;
- approved Studio purpose;
- source hierarchy;
- scope and prohibited-use rules;
- human decision rights;
- approved workflow;
- gate criteria; and
- system-level safety or security constraints.

Lower-order prompts must not be able to override higher-order controls merely through wording.

## 12.5 Input-control rule

Every operational prompt should define what input it expects.

Where relevant, this includes:

- source material;
- case information;
- user instructions;
- evidence records;
- prior gate status;
- workflow state;
- jurisdiction;
- output type;
- decision context; and
- human direction.

The prompt must define what to do when required inputs are missing, contradictory, stale or outside scope.

## 12.6 Source-grounding rule

Prompts that make material claims must follow the Studio's approved source hierarchy.

Where source retrieval or verification is required, the prompt must not rely on model memory as a substitute.

The prompt should distinguish between:

- controlling authority;
- authoritative guidance;
- primary evidence;
- supporting evidence;
- user-supplied material;
- prior Studio output; and
- unverified model knowledge.

## 12.7 Evidence-handling rule

Prompts that evaluate, compare or generate claims from evidence must preserve the requirements of Brick 7.

They should, where relevant:

- link claims to evidence;
- preserve source identity;
- distinguish fact from interpretation;
- expose assumptions;
- retain contradictory evidence;
- identify evidence gaps;
- avoid overstating confidence; and
- support later reconstruction of the decision.

## 12.8 Prompt-to-gate rule

A prompt may assist with gate assessment, but the gate criteria must come from the approved Gate Architecture.

A gate-assessment prompt must define:

- the gate being assessed;
- criteria to test;
- evidence required;
- possible gate states;
- failure conditions;
- escalation conditions; and
- whether human approval is required.

The prompt must not invent new pass criteria simply to reach a favourable outcome.

## 12.9 Prompt-to-workflow rule

Every operational prompt must belong to an approved workflow stage.

The Studio should be able to answer:

- when the prompt may run;
- what must already be true;
- what state it receives;
- what state it may produce;
- which gate follows; and
- where the work goes if the prompt identifies failure or uncertainty.

Standalone prompts that bypass the workflow should not be treated as approved operational paths.

## 12.10 Prompt-output rule

Each material prompt should define its expected output contract.

The contract may specify:

- structure;
- required fields;
- status labels;
- evidence references;
- confidence or uncertainty markers;
- prohibited claims;
- escalation message;
- decision recommendation format; and
- machine-readable schema where relevant.

A prompt should not be considered reliable if its output varies so widely that downstream controls cannot interpret it consistently.

## 12.11 Prompt boundary rule

Prompts must restate or inherit the relevant operational boundaries they need to enforce.

This may include:

- prohibited actions;
- human-reserved decisions;
- data restrictions;
- connector limits;
- publication restrictions;
- jurisdiction limits;
- reliance limits; and
- escalation triggers.

The prompt must not rely on the user to remember the Studio's boundaries.

## 12.12 Prompt-injection resistance rule

Prompts that retrieve or process external content must treat embedded instructions in that content as untrusted unless the Studio architecture explicitly grants them authority.

The prompt should be designed to resist attempts to:

- ignore governing instructions;
- reveal restricted information;
- expand scope;
- alter source hierarchy;
- bypass gates;
- change decision rights;
- enable unauthorised tools; or
- convert content into operational instruction.

## 12.13 Tool-use rule

Where a prompt can invoke tools or connectors, its authority must match Brick 4, Brick 9 and Brick 10.

The prompt must define:

- which tool may be used;
- for what purpose;
- under what workflow state;
- with what data;
- whether the tool may read, write or act;
- what confirmation or human approval is required; and
- what to do if the tool fails.

Technical tool availability does not expand prompt authority.

## 12.14 Memory and context rule

Prompts must define how conversational memory, prior outputs and context may be used.

Where material facts, approvals or evidence status matter, the prompt should retrieve or verify the controlled record rather than relying solely on remembered context.

Prompt continuity must not silently convert conversational memory into governance authority.

## 12.15 Uncertainty rule

Prompts must preserve uncertainty rather than smoothing it away.

Where evidence is insufficient, contradictory or outside authority, the prompt should be capable of producing controlled outcomes such as:

- insufficient evidence;
- blocked;
- escalate;
- provisional finding;
- qualified recommendation; or
- unable to determine within approved authority.

Completeness must not be prioritised over epistemic honesty.

## 12.16 No fabricated completion rule

Prompts must not invent missing content merely to satisfy an output template.

Where required information is unavailable, the prompt must identify the gap rather than fabricate:

- sources;
- evidence;
- citations;
- approvals;
- dates;
- decisions;
- calculations;
- user details; or
- compliance status.

## 12.17 Prompt decomposition rule

Complex tasks should be decomposed where separate prompts improve control.

For example:

**Retrieve → Extract → Compare → Challenge → Draft → Gate Review**

may be preferable to one large prompt that attempts to perform every function at once.

Decomposition is not mandatory where a single prompt remains clear, testable and controlled.

## 12.18 Prompt chaining rule

Where prompts form a chain, the Studio must define the hand-off between them.

Each hand-off should specify:

- input received;
- output produced;
- state transferred;
- evidence transferred;
- unresolved issues;
- gate status; and
- conditions for the next prompt to run.

A prompt chain must not lose uncertainty, contradictory evidence or failure conditions between steps.

## 12.19 Prompt independence rule

Where a prompt performs adversarial, gate or quality review, the Studio should consider whether that prompt needs sufficient independence from the prompt that produced the work.

Independence may involve:

- a separate prompt role;
- a fresh context;
- independent evidence review;
- different evaluation criteria; or
- human review.

A producer prompt should not automatically be trusted to certify its own output.

## 12.20 Prompt version-control rule

Material prompts must be version controlled.

The control record should preserve:

- prompt ID;
- prompt name;
- version;
- status;
- workflow stage;
- change summary;
- approval status;
- effective date; and
- superseded versions.

Changes that alter authority, evidence use, gate logic, output requirements or tool permissions must be treated as material changes.

## 12.21 Prompt test rule

Operational prompts must be tested before approval.

Testing should include, where relevant:

- normal case;
- incomplete input;
- contradictory input;
- out-of-scope request;
- prohibited request;
- missing evidence;
- stale source;
- prompt injection attempt;
- unauthorised tool request;
- attempted gate bypass;
- uncertainty case;
- human escalation case; and
- malformed or unexpected input.

A prompt that performs well only on ideal examples is not ready for operational use.

## 12.22 Prompt regression rule

When a material prompt changes, representative prior tests should be re-run to ensure the change has not broken previously working controls.

Prompt improvement must not silently degrade:

- boundary enforcement;
- evidence integrity;
- gate behaviour;
- source use;
- human approval requirements; or
- output consistency.

## 12.23 Prompt fallback rule

The prompt architecture must define what happens when a prompt cannot complete its task safely or reliably.

Fallback may include:

- seek clarification;
- retrieve additional evidence;
- return a blocked state;
- escalate;
- use an approved alternative prompt;
- move to human review; or
- stop the workflow.

Fallback must not mean improvising outside authority.

## 12.24 Prompt observability rule

For material prompts, the Studio should be able to observe enough about prompt performance to detect deterioration or failure.

Useful indicators may include:

- repeated gate failures;
- human rejection rate;
- evidence-citation defects;
- escalation frequency;
- hallucination incidents;
- boundary violations;
- inconsistent outputs; or
- tool-use errors.

The Studio should use these patterns to improve prompt design rather than merely patch individual outputs.

## 12.25 Required artefact — Prompting Architecture and Prompt Control Record

Before Brick 12 can pass, every Studio must produce a controlled record containing at least:

- prompt inventory;
- prompt IDs and versions;
- prompt roles;
- workflow stage for each prompt;
- authorised inputs;
- output contracts;
- source and evidence rules;
- gate relationships;
- human review relationships;
- tool and connector permissions;
- memory and context rules;
- prohibited behaviours;
- escalation and fallback behaviour;
- prompt chaining rules;
- independence requirements where relevant;
- test cases;
- regression requirements;
- observability measures;
- accountable owner;
- version and status; and
- approval status.

## 12.26 Gate 12 — Prompt Architecture Gate

A Studio may progress beyond Brick 12 only when the following questions can be answered **Yes** with evidence:

- Does every material prompt have a defined role?
- Is each prompt tied to an approved workflow stage?
- Are prompt inputs controlled?
- Are source and evidence rules inherited from the approved architecture?
- Are output contracts explicit enough for downstream use?
- Do gate-assessment prompts use approved gate criteria rather than inventing their own?
- Are boundaries and prohibited behaviours enforced?
- Are human-reserved decisions preserved?
- Are tool and connector permissions constrained?
- Is model memory prevented from becoming sole governance authority?
- Can prompts preserve uncertainty and evidence gaps?
- Are missing facts prevented from being fabricated?
- Are complex prompt chains controlled at hand-off points?
- Is independent review used where self-certification would be weak?
- Are prompts version controlled?
- Have normal, edge, failure and bypass cases been tested?
- Are regression tests required after material changes?
- Is safe fallback behaviour defined?

If any material answer is **No**, the prompting architecture is incomplete.

## 12.27 Evidence required to pass

Gate 12 requires:

- the completed Prompting Architecture and Prompt Control Record;
- representative approved prompt specifications;
- test evidence covering normal and hostile cases;
- at least one failed or escalated prompt scenario;
- at least one prompt-injection test where external content is processed; and
- evidence that prompt behaviour remains subordinate to Studio governance.

## 12.28 Failure response

If Gate 12 fails:

- affected prompts must remain Draft, Prototype or Under Test;
- prompts must not be treated as approved operational components;
- prompt chains with broken hand-offs must be redesigned;
- boundary or authority failures must be corrected before use;
- unsupported tool access must remain disabled;
- unsafe fallback behaviour must be replaced; and
- regression testing must be completed after material corrections.

A Studio with powerful prompts but weak prompt governance is still an uncontrolled system.

## 12.29 Human approval point

The accountable owner must approve the Prompting Architecture and Prompt Control Record before operational release.

Where prompts affect regulated, professional, sensitive or consequential decisions, the relevant subject-matter or decision authority must approve the prompt behaviour that influences those decisions.

Any material prompt change affecting decision rights, source use, evidence thresholds, gate logic, tool permissions, boundary behaviour or release status requires reassessment of Brick 12 and any affected earlier brick.

## 12.30 GitHub control record

For Nexus BMG Studios, material prompts, prompt specifications, test cases and prompt-change history must be retained in the authoritative GitHub repository or another specifically approved controlled system.

Prompt files should be linked to:

- Studio identifier;
- workflow stage;
- applicable gates;
- approved version;
- change history; and
- test evidence.

Sensitive operational details or secrets must not be embedded directly in prompt files or committed to repositories not approved to hold them.

## 12.31 Brick 12 completion rule

Brick 12 is complete only when the Studio can answer five questions for every material prompt:

> **What approved function does this prompt perform?**
>
> **What authority and evidence rules govern it?**
>
> **What may it produce or cause to happen?**
>
> **What must it do when evidence, authority or control conditions fail?**
>
> **How do we know this prompt still behaves as intended after it changes?**

If those answers are unclear, the prompt is not controlled.

---

## Brick 12 core rule

**The strongest prompt in the Studio is still subordinate to the Studio.**
