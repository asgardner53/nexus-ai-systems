# Remediation 07 — Final Closure Controls

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** Second Forensic Integrity Review v0.2 and Standard Self-Assurance Profile v0.1
- **Findings addressed:** A2, A3, A4, A5, A6, A7, A8, A9 and related closure conditions
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

This remediation closes the remaining governance paths by which waiver, conditional approval, over-gating, weak Not Applicable decisions, stale dependencies or blurred review authority could weaken the Standard.

The governing rule is:

> **Final approval must not depend on discretion at the exact points where the architecture is designed to constrain discretion.**

---

# Part A — Build Gate Waiver Policy

## A1. Default rule

Build Gates are not waivable unless NEX-GOV-003 explicitly permits waiver.

Silence means **not waivable**.

## A2. Non-waivable Build Gates

The following Build Gates are non-waivable:

- **BG-01 — Studio Eligibility and Definition Gate**
- **BG-02 — Purpose and Authority Gate**
- **BG-03 — Source Authority Gate**
- **BG-04 — Scope and Boundary Gate**
- **BG-06 — Gate Architecture Gate**
- **BG-10 — Human Authority and Escalation Gate**
- **BG-14 — Change Integrity Gate**
- **BG-16 — Operational Resilience Gate**
- **BG-18 — Final Studio Approval Gate**

These gates establish the basis on which the Studio is permitted to exist, operate, change and be approved.

## A3. Restricted exception rule for other Build Gates

A Build Gate not listed above may support a narrowly controlled exception only where:

- the gate's core assurance purpose remains satisfied;
- no legal, regulatory, privacy, security, safety, professional or authority control is weakened;
- the exception is time-bounded or scope-bounded where appropriate;
- compensating controls exist;
- the responsible owner is identified;
- the exception is visible to BG-18; and
- the final approver has explicit authority to accept the residual risk.

## A4. Prohibited waiver reasons

The following are never sufficient reasons for waiver:

- schedule pressure;
- commercial pressure;
- stakeholder seniority;
- sunk effort;
- technical inconvenience;
- user insistence;
- lack of time caused by poor planning; or
- confidence in the AI output alone.

---

# Part B — Conditional Approval Closure Classes

## B1. Governing principle

Conditional Approval is a bounded governance state, not a parking place for unresolved serious defects.

## B2. Condition classes

### Class C1 — Approval-blocking condition

A condition that prevents both **Approved** and **Conditionally Approved** status.

Examples include:

- unresolved Critical defect;
- failed non-waivable Build Gate;
- unresolved authority question;
- material legal or regulatory blocker;
- material privacy/security/safety blocker;
- missing mandatory human approval;
- inability to identify the exact approved baseline.

### Class C2 — Bounded operational condition

A condition that may support **Conditionally Approved** status only where:

- use is explicitly restricted;
- the condition does not affect a non-waivable control;
- an owner is named;
- an expiry or resolution trigger exists;
- users are informed of the limitation where relevant;
- monitoring is proportionate; and
- full approval requires evidence of closure.

### Class C3 — Post-approval improvement item

A non-material improvement that does not alter authority, safety, legality, privacy, evidence integrity or defined reliability.

C3 items may remain open after approval if recorded and prioritised appropriately.

## B3. Conditional Approval prohibition

Conditionally Approved status must never be used to carry:

- a Critical defect;
- a failed non-waivable Build Gate;
- unresolved safety/privacy/legal authority blocker;
- unresolved release-authority defect; or
- unknown operational baseline.

---

# Part C — Operational Gate Proportionality

## C1. Universal BG-06, non-universal OG count

Every Studio must assess Brick 6 and pass BG-06.

However, BG-06 may legitimately conclude:

> **No separate Operational Gate is required beyond the approved workflow, release controls and human decision points — justified.**

This outcome is permitted only where the builder demonstrates that:

- no meaningful intermediate trust decision requires a gate;
- no material failure point would benefit from a stopping mechanism;
- the Studio remains within its assurance-tier minimum controls;
- release remains controlled; and
- human decision rights remain effective.

## C2. No ceremonial gate rule

Operational Gates must not be created merely to make the Studio appear more governed.

A gate must control a meaningful risk, decision, dependency or trust condition.

---

# Part D — Standard Assurance Level Confirmation

## D1. SAL-3 confirmation rule

The provisional **SAL-3 — High Governance Assurance** classification for NEX-GOV-003 remains valid pending independent review.

The independent reviewer must explicitly confirm or challenge SAL-3 based on:

- propagation consequence;
- breadth of future use;
- governance reliance;
- impact on regulated/high-consequence Studios;
- difficulty of detecting systemic design defects; and
- reversibility after widespread adoption.

Any proposed change to SAL must include rationale and corresponding change in assurance depth.

---

# Part E — Separation of Independent Assurance and Final Approval

## E1. Distinct roles

The following roles must remain distinct in the final approval record:

### Independent assurance reviewer

Responsible for:

- challenging architecture;
- reviewing evidence;
- reviewing hostile-test results;
- challenging N/A decisions;
- identifying defects;
- recommending disposition.

### Final approval authority

Responsible for:

- reviewing the assurance evidence;
- understanding residual risk;
- confirming authority to approve;
- deciding whether the Standard or Studio may become approved.

## E2. No automatic role conversion

An independent reviewer does not automatically become the final approver.

A final approver does not create independent assurance by reviewing their own build.

## E3. Divergence rule

Where the final approver disagrees with a material independent-review finding, the final record must capture:

- finding;
- reviewer position;
- approver position;
- rationale;
- evidence relied upon;
- residual risk accepted; and
- whether the matter affects a non-waivable control.

The approver may not override a non-waivable blocker.

---

# Part F — Challenge of Not Applicable Decisions

## F1. Governing principle

A Not Applicable decision is an assertion that a control does not meaningfully apply and therefore requires challenge where material.

## F2. Review rule

At BG-18, all material Not Applicable determinations must be reviewed.

For Tier 3 and Tier 4 Studios, material N/A determinations require **IR-2 or stronger** confirmation.

## F3. N/A challenge questions

The reviewer must ask:

- Does the control genuinely lack relevance?
- Is the control merely inconvenient?
- Does another control depend on it?
- Could removing it weaken a cross-cutting assurance domain?
- Has assurance tier been used correctly?
- Would a reasonable independent reviewer reach the same conclusion?

## F4. N/A failure response

An unsupported N/A decision becomes **Applicable — Pending Control Design** and reopens the affected Build Gate.

---

# Part G — Dependency Failure and Approval Validity

## G1. Approval-assumption rule

Studio approval remains valid only while the material assumptions supporting approval remain sufficiently true.

Critical dependencies form part of those assumptions.

## G2. Dependency degradation triggers

Loss, degradation or material change of a critical dependency may trigger:

- Restricted Operation;
- Blocked work-item states;
- affected Operational Gate blocking;
- Build Gate reopening;
- Assurance Tier reassessment;
- suspension;
- release withdrawal or correction; or
- full revalidation.

## G3. Examples

Triggers may include:

- model/provider no longer behaves within tested assumptions;
- critical connector permission changes;
- authoritative source repository becomes unavailable;
- human role required for decision authority becomes vacant;
- shared upstream Studio is suspended or retired;
- hosting/security control materially degrades.

## G4. No local-change loophole

A Studio must not remain fully Active merely because no local file or configuration changed. External dependency failure may invalidate the approved operating basis.

---

# Part H — Release-Time Validation of Build Assumptions

## H1. Release prerequisite

Operational release requires more than successful Operational Gate passage.

Before release, the Studio must confirm that the following remain valid:

- Lifecycle Status permits operation;
- no relevant Build Gate is Failed, Reopened, Blocked or materially invalidated;
- Assurance Tier remains current;
- critical dependencies remain within approved conditions;
- required human authority remains valid;
- source and regulatory assumptions remain sufficiently current; and
- no active incident or suspension condition blocks release.

## H2. Release refusal

If any material Build assumption has become stale or invalid, release is blocked pending reassessment.

---

# Part I — Final Standard Approval Closure Controls

## I1. Normative baseline rule

NEX-GOV-003 v1.0 must not be approved while its normative architecture depends on unresolved draft precedence between multiple files.

Before approval, the Standard must be issued as either:

1. a fully consolidated normative master; or
2. an approved modular standard with version-locked incorporated components.

The preferred approach remains a fully consolidated normative master with modular source files retained for maintenance history.

## I2. Final review record fields

The final Standard Approval Record must separately capture:

- Standard Assurance Level;
- independent assurance reviewer;
- independence level;
- independent-review disposition;
- material N/A determinations and challenge outcome;
- hostile-test result;
- unresolved conditions by class C1/C2/C3;
- non-waivable control status;
- final approval authority;
- approval decision;
- residual risks;
- exact normative baseline;
- effective date; and
- next formal review date.

## I3. Approval blocker rule

The Standard cannot become **Approved Standard** while any of the following exists:

- open C1 condition;
- failed non-waivable assurance control;
- incomplete required IR-2 review;
- unresolved Critical defect;
- incomplete whole-system hostile test;
- unidentified normative baseline; or
- absent explicit human approval.

---

# Part J — Closure status of Second Forensic Findings

| Finding | Closure design status |
|---|---|
| A1 — Self-application category ambiguity | Closed by Standard Self-Assurance Profile |
| A2 — Build Gate waiver boundaries | Closed by Part A |
| A3 — Conditional Approval closure | Closed by Part B |
| A4 — Simple-Studio over-gating | Closed by Part C |
| A5 — Standard assurance depth | Controlled by Part D; independent confirmation pending |
| A6 — Independent review vs approval | Closed by Part E |
| A7 — N/A challenge ownership | Closed by Part F |
| A8 — Dependency failure impact | Closed by Part G |
| A9 — Stale Build assumptions at release | Closed by Part H |
| A10 — Draft normative fragmentation | Closure method defined in Part I; implementation pending consolidation |

## J1. Remaining implementation tasks

The following are no longer architecture questions; they are execution tasks:

- conduct targeted prior-art/external comparison review;
- execute the hostile-test pack;
- consolidate the normative v1.0 candidate master;
- complete IR-2 independent human review;
- prepare final Standard Approval Record.

---

## Remediation disposition

**CONTROL DESIGN CLOSED — EXECUTION ASSURANCE PENDING**

No known remaining structural closure loophole requires another remediation architecture layer at this stage.

## Core rule

> **A Standard is ready for assurance only when the rules that can stop approval are stronger than the pressures that may try to bypass them.**
