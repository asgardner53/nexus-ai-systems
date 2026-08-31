# Brick 6 — Gate System Design

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 6
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 6.1 Governing principle

A gate is a controlled decision point that determines whether work may progress, must be corrected, must return to an earlier stage, must be escalated, or must stop.

A gate is not a checklist item, a prompt instruction, a confidence statement or a ceremonial sign-off. It exists to prevent work from progressing unless specified conditions have been demonstrated with sufficient evidence.

The governing rule is:

> **A gate cannot be passed by assertion. It must be passed by evidence.**

The Studio must therefore distinguish between completing an activity and satisfying the gate that governs that activity.

## 6.2 Mandatory build instruction

Every Studio must create a **Gate Architecture and Control Record** before production workflows are treated as operational.

For each material gate, the record must define:

1. gate identifier and name;
2. purpose of the gate;
3. the risk or failure mode the gate is intended to control;
4. the point in the workflow at which the gate applies;
5. prerequisites for entering the gate;
6. the questions the gate tests;
7. evidence required to pass;
8. pass criteria;
9. fail criteria;
10. whether conditional passage is permitted;
11. whether human approval is required;
12. the person or role authorised to determine passage where applicable;
13. what happens when the gate fails;
14. which earlier stage the work returns to, if any;
15. re-entry conditions after correction;
16. escalation conditions;
17. waiver or exception rules, if any;
18. required record of the gate decision; and
19. dependencies on other gates.

No material gate should exist without a defined control purpose and decision consequence.

## 6.3 Gate design rule

Every gate must answer three questions:

> **What are we testing?**
>
> **What evidence proves the requirement is satisfied?**
>
> **What happens if it is not?**

If one of these is missing, the gate is incomplete.

## 6.4 Gate versus activity rule

An activity produces work. A gate evaluates whether that work meets the required standard.

Examples:

- conducting research is an activity; the **Evidence Sufficiency Gate** determines whether the research is adequate;
- drafting an article is an activity; the **Editorial Quality Gate** determines whether the draft is ready to progress;
- mapping assessment material is an activity; the **Coverage and Traceability Gate** determines whether the mapping is defensible;
- configuring a connector is an activity; the **Permission and Boundary Gate** determines whether operational use is authorised.

A Studio must not treat completion of the activity as evidence that the gate has passed.

## 6.5 Evidence-to-pass rule

Every material gate must define the evidence required to pass.

Evidence may include:

- a completed controlled record;
- verified source material;
- test results;
- traceability records;
- review findings;
- calculations;
- comparison against a standard;
- version and currency checks;
- approval records;
- contradictory-evidence review;
- defect closure evidence; or
- another objective record appropriate to the Studio.

The evidence requirement must be proportionate to consequence and reliance.

A statement such as "the gate is satisfied", "looks good", "appears compliant" or "the AI confirms the requirement is met" is not itself sufficient evidence.

## 6.6 Minimum gate states

Every Studio must define the states a gate may produce. At minimum, the following states should be available where appropriate:

| Gate state | Meaning |
|---|---|
| **Not Assessed** | Gate has not yet been evaluated |
| **Pass** | All mandatory criteria are satisfied with required evidence |
| **Conditional Pass** | Passage is permitted subject to explicit conditions that do not undermine the gate's core purpose |
| **Fail** | One or more mandatory criteria are not satisfied |
| **Escalate** | The gate cannot be defensibly resolved within existing authority |
| **Blocked** | The gate cannot currently be assessed because a prerequisite, source, approval or dependency is missing |
| **Waived by Authority** | An approved exception has been granted under a defined waiver process |

Studios may add states, but must not use vague status language that obscures whether progression is authorised.

## 6.7 Pass rule

A gate may be marked **Pass** only when:

- every mandatory criterion has been assessed;
- required evidence exists;
- evidence is sufficiently current, relevant and authoritative;
- known critical or major defects affecting the gate are resolved;
- required human review has occurred; and
- no unresolved issue remains that would invalidate the gate's purpose.

A gate must not pass because the overall work is impressive or because deficiencies are inconvenient to correct.

## 6.8 Conditional-pass rule

Conditional passage must be used sparingly.

A Conditional Pass is permitted only where:

- the unmet matter is explicitly identified;
- the matter does not defeat the fundamental purpose of the gate;
- the outstanding condition has a named owner or resolution mechanism;
- the deadline or trigger for resolution is defined where relevant;
- downstream work cannot conceal or erase the unresolved condition; and
- the conditional status is visible to subsequent gates.

Critical evidence, authority, safety, privacy or legal failures must not be disguised as Conditional Pass merely to maintain momentum.

## 6.9 Fail rule

A gate must fail where any mandatory condition is materially unsatisfied.

Failure is a controlled outcome, not a system malfunction.

When a gate fails, the Studio must identify:

- what failed;
- why it failed;
- what evidence supports the failure decision;
- what correction is required;
- where the work must return;
- what must be re-tested; and
- whether downstream work is invalidated.

The Studio must not continue as though the failed gate had passed.

## 6.10 Backward-movement rule

The workflow must permit work to move backwards.

If a gate identifies a defect in an earlier assumption, source, argument, control, requirement or design choice, the Studio must return to the earliest stage necessary to correct the root cause.

Examples include:

- weak evidence may require a return to research;
- contradictory evidence may require a return to the proposition;
- an authority conflict may require a return to source hierarchy;
- a scope problem may require a return to purpose and authority;
- a failed output gate may require revision rather than cosmetic editing; and
- failed testing may require redesign of the workflow or instructions.

The Studio must not force all failures into the immediately preceding step if the root cause sits further upstream.

## 6.11 Downstream invalidation rule

A later failure may invalidate an earlier pass where the assumptions supporting the earlier gate have materially changed.

For example:

- a new controlling source may invalidate a prior compliance gate;
- a material change in Studio authority may invalidate prior boundary approval;
- new contradictory evidence may invalidate a previously accepted argument;
- a connector change may invalidate earlier privacy or security approval.

Gate status must therefore be capable of being reopened when material conditions change.

## 6.12 Re-entry rule

A failed or blocked gate may be re-entered only when the identified deficiency has been addressed sufficiently to justify reassessment.

Re-entry must preserve the prior failure record rather than overwrite it.

The new assessment should record:

- what changed;
- what evidence was added or corrected;
- whether all prior failure reasons were addressed;
- the new gate decision; and
- the person or system responsible for the reassessment.

Repeated gate failures should trigger review of the underlying Studio design rather than endless local correction.

## 6.13 Gate dependency rule

Some gates depend on earlier gates.

A Studio must identify dependencies so that a downstream gate cannot pass on assumptions that have not themselves been validated.

Examples include:

- an Evidence Integrity Gate may depend on the Source Authority Gate;
- a Release Gate may depend on all mandatory quality gates;
- a Connector Action Gate may depend on privacy, security and authority gates;
- a Publication Gate may depend on evidence, originality and editorial gates.

Where a prerequisite gate is failed, blocked, expired or reopened, dependent gates must be treated accordingly.

## 6.14 Parallel-gate rule

Not all gates must be sequential.

Where appropriate, gates may operate in parallel, provided that:

- dependencies are explicit;
- no downstream release occurs until all mandatory parallel gates pass;
- conflicting gate findings are resolved; and
- gate ownership remains clear.

Parallelism may improve efficiency but must not dilute control.

## 6.15 Human gate-owner rule

Every gate that requires professional, regulatory, strategic, ethical or consequential judgement must identify the authorised human gate owner or approver.

AI may prepare evidence, test criteria and recommend a gate outcome. Where human judgement is required, AI must not silently convert that recommendation into formal approval.

The gate record should distinguish:

**AI assessment → Human review → Human gate decision**

where that separation is required.

## 6.16 No self-certification rule

A Studio must not certify itself as compliant, approved, safe, publication-ready, legally correct or otherwise formally authorised merely because its own internal checks returned positive results.

Where external, professional or human approval is required, the final authority remains with the appropriate external or human decision-maker.

Internal gate passage demonstrates satisfaction of the Studio's approved internal controls. It does not create external certification unless such authority actually exists.

## 6.17 Waiver and exception rule

A mandatory gate must not be bypassed informally.

Where waivers are permitted, the Studio must define:

- which gates may be waived;
- which gates may never be waived;
- who has waiver authority;
- the rationale required;
- the risk created by the waiver;
- compensating controls;
- duration or expiry;
- downstream consequences; and
- the required decision record.

Silence, urgency, seniority, commercial pressure or user insistence do not constitute a waiver.

Where no waiver process is defined, the gate is not waivable.

## 6.18 Non-waivable gate rule

Every Studio should identify gates whose failure cannot be overridden within normal operation.

Depending on the Studio, non-waivable gates may include controls relating to:

- lawful authority;
- safety;
- privacy and confidentiality;
- fabrication of evidence;
- controlling-source integrity;
- prohibited use;
- mandatory human decision rights; or
- external release authority.

The Studio builder must justify any ability to waive a gate that protects a critical right, obligation or safety boundary.

## 6.19 Gate expiry and staleness rule

Some gate decisions remain valid indefinitely; others depend on conditions that change.

The Studio must identify gates that can become stale because of:

- source updates;
- regulatory changes;
- new evidence;
- data changes;
- user-role changes;
- connector changes;
- model or system changes;
- elapsed time; or
- material change in the task.

Where staleness matters, the Studio must define a revalidation trigger.

## 6.20 Gate record rule

Material gate decisions must be traceable.

A Gate Decision Record should contain, as appropriate:

- Studio identifier;
- output, case or item identifier;
- gate identifier;
- date and version;
- evidence reviewed;
- criteria assessed;
- decision state;
- defects or conditions;
- escalation or waiver information;
- reviewer or approver;
- re-entry history; and
- links to supporting records.

The level of record keeping may be proportionate to the Studio, but consequential gates must not rely on invisible reasoning alone.

## 6.21 Gate architecture rule

The complete set of gates must form a coherent control architecture rather than an accidental collection of checks.

The Studio builder must review whether the gate system collectively covers:

- purpose and authority;
- source integrity;
- scope and boundaries;
- evidence sufficiency;
- output quality;
- human decision rights;
- privacy and security where relevant;
- technical or connector controls where relevant;
- adversarial or contradictory review;
- release readiness; and
- change or revalidation triggers.

Not every Studio needs the same gates, but every material risk to trust should have an identifiable control response.

## 6.22 Gate proportionality rule

More gates do not automatically create a better Studio.

A gate should exist where there is a meaningful decision, risk, dependency or trust condition to control. Excessive ceremonial gates create friction without increasing assurance and encourage users to bypass the system.

The objective is not maximum gate count. The objective is **sufficient control at the points where failure matters**.

## 6.23 Gate naming rule

Gate names should describe the condition being tested, not merely the stage number.

Examples include:

- Purpose and Authority Gate;
- Source Authority Gate;
- Scope and Boundary Gate;
- Evidence Sufficiency Gate;
- Contradictory Evidence Gate;
- Originality Gate;
- Privacy Gate;
- Human Decision Gate;
- Release Readiness Gate.

Numbering may support workflow control, but the name should make the purpose clear.

## 6.24 Gate testability rule

A gate must be testable using realistic cases.

Before operational approval, each important gate should be challenged with cases that should:

- clearly pass;
- clearly fail;
- produce a conditional pass where allowed;
- require escalation;
- expose missing evidence;
- expose conflicting evidence;
- test an attempted bypass; and
- test re-entry after correction.

If the Studio cannot distinguish these cases reliably, the gate design is not mature enough.

## 6.25 Required artefact — Gate Architecture and Control Record

Before Brick 6 can pass, every Studio must produce a controlled record containing at least:

- gate inventory;
- gate identifiers and names;
- purpose of each gate;
- risks controlled;
- workflow location;
- prerequisites;
- evidence-to-pass requirements;
- pass and fail criteria;
- permitted gate states;
- conditional-pass rules;
- failure and backward-movement rules;
- re-entry conditions;
- gate dependencies;
- human gate owners where required;
- waiver and non-waivable rules;
- expiry or revalidation triggers;
- gate decision-record requirements;
- testing scenarios;
- accountable owner;
- version and status; and
- approval status.

## 6.26 Gate 6 — Gate Architecture Gate

A Studio may progress beyond Brick 6 only when the following questions can be answered **Yes** with evidence:

- Does every material gate have a clear control purpose?
- Is evidence-to-pass explicitly defined?
- Are pass, fail, blocked, escalation and conditional states defined where needed?
- Can a gate fail without the workflow pretending progress has occurred?
- Can work move backwards to correct root causes?
- Can later findings reopen an earlier gate where assumptions changed?
- Are gate dependencies explicit?
- Are human gate owners identified where judgement is required?
- Are waiver rules explicit rather than informal?
- Are critical non-waivable gates identified?
- Can stale gate decisions be revalidated where conditions change?
- Are gate decisions traceable?
- Has each important gate been tested against pass, fail and bypass scenarios?
- Does the complete gate system cover the material trust risks of the Studio?

If any material answer is **No**, the gate architecture is incomplete.

## 6.27 Evidence required to pass

Gate 6 requires:

- the completed Gate Architecture and Control Record;
- representative Gate Decision Records or prototypes;
- test scenarios demonstrating expected pass, fail, escalation and re-entry behaviour; and
- evidence that mandatory gates cannot be bypassed through ordinary prompting or workflow convenience.

For consequential Studios, gate ownership and non-waivable controls must be explicitly approved.

## 6.28 Failure response

If Gate 6 fails:

- the production workflow must not be treated as controlled;
- release automation must remain disabled;
- ambiguous or decorative gates must be redesigned;
- missing evidence-to-pass rules must be added;
- bypass paths must be closed;
- human gate ownership must be clarified;
- waiver rules must be tightened where necessary; and
- gate dependencies must be corrected before operational use.

A Studio with gates that cannot actually stop bad work does not have a gate system. It has a checklist.

## 6.29 Human approval point

The accountable owner must approve the Gate Architecture and Control Record before the Studio is treated as operational.

Where gates govern regulated, professional, safety-critical, privacy-sensitive or consequential decisions, the relevant authorised human or subject-matter authority must approve those gate criteria and decision rights.

Any material change to a mandatory gate, evidence threshold, waiver authority, human decision right or release dependency requires reassessment of Brick 6 and any affected earlier brick.

## 6.30 GitHub control record

For Nexus BMG Studios, the Gate Architecture and Control Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record must preserve:

- gate inventory;
- gate criteria;
- evidence requirements;
- decision states;
- human gate ownership;
- waiver rules;
- dependency changes;
- material gate redesigns;
- approval records; and
- representative test and decision records where appropriate.

Git history should make material changes to gate logic traceable.

## 6.31 Brick 6 completion rule

Brick 6 is complete only when every material gate can answer five questions:

> **What are we testing?**
>
> **What evidence is required to pass?**
>
> **Who or what is authorised to decide the gate outcome?**
>
> **What happens when it fails?**
>
> **Can the gate actually stop the work from progressing?**

If the final answer is no, it is not a gate.

---

## Brick 6 core rule

**A gate is real only if failure has consequences.**
