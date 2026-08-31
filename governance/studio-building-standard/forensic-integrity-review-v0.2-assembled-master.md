# NEX-GOV-003 — Second Forensic Integrity Review

## Review target

- **Target:** `governance/nexus-studio-building-standard-v0.2-draft-master.md`
- **Review type:** Assembled-master contradiction and bypass review
- **Status:** Draft forensic finding record
- **Purpose:** Determine whether the assembled Standard is internally coherent and ready to proceed to self-assurance, hostile testing and independent review.

## Overall disposition

**RETURN FOR LIMITED CONTROLLED REMEDIATION**

The assembled v0.2 architecture is materially stronger than the original component set. Most first-pass structural findings have been resolved at control-design level. The second review identified a smaller set of issues, principally concerning self-application, waiver boundaries, final-approval semantics and a small number of edge conditions.

No finding requires redesign of the eighteen-brick architecture.

---

# Finding A1 — Self-application creates a category ambiguity

**Severity:** Major

The master states that NEX-GOV-003 itself must be put through the Studio Build Pack and currently assigns NEX-GOV-003 a "Studio Build Status: Under Final Review".

NEX-GOV-003 is a **governing standard**, not an operational Studio. Treating the Standard itself as though it were a Studio creates a category error and may weaken the distinction between:

- the Standard that governs Studio construction; and
- the Studios constructed under that Standard.

The objective of recursive assurance remains valid, but the terminology must be corrected.

## Required remediation

Create a **Standard Self-Assurance Profile** for NEX-GOV-003.

The Standard should be subjected to the equivalent assurance disciplines of the Build Pack, but its status should be expressed as:

- Draft;
- Under Forensic Review;
- Under Independent Review;
- Approved Standard; or
- Superseded Standard,

rather than Studio Build Status.

The self-assurance process should map the eighteen bricks to the Standard where conceptually applicable, record justified adaptation where an operational-Studio field does not apply, and preserve the same evidence discipline.

Core distinction:

> **NEX-GOV-003 must survive its own assurance method without pretending to be one of the Studios it governs.**

---

# Finding A2 — Build Gate waiver boundaries remain under-specified

**Severity:** Major

The gate state taxonomy permits **Waived by Authority**, and Brick 6 requires Studios to identify non-waivable gates. The assembled master does not yet identify which Build Gates may never be waived.

This creates a theoretical bypass path in which the very controls required for final approval could be waived without a higher-order rule preventing it.

## Required remediation

Define a Build Gate waiver policy.

At minimum, the following Build Gates should be presumptively non-waivable because they establish the basis of lawful and controlled Studio existence:

- BG-01 — Studio Eligibility and Definition;
- BG-02 — Purpose and Authority;
- BG-03 — Source Authority;
- BG-04 — Scope and Boundary;
- BG-06 — Gate Architecture;
- BG-10 — Human Authority and Escalation;
- BG-14 — Change Integrity;
- BG-16 — Operational Resilience; and
- BG-18 — Final Studio Approval.

The final list should be approved explicitly. Other Build Gates may permit a narrowly controlled exception only where the exception does not defeat the gate's fundamental purpose and is visible to BG-18.

A Build Gate must never be waived merely to maintain schedule or commercial momentum.

---

# Finding A3 — Conditional Pass at final approval needs an explicit closure rule

**Severity:** Major

The architecture allows Conditional Pass states and Brick 18 allows Conditionally Approved Studio status. However, the master does not yet state clearly which unresolved conditions are permitted at BG-18 and which conditions necessarily block approval.

## Required remediation

Define final-approval condition classes:

- **Release-blocking / approval-blocking condition** — cannot coexist with Approved or Conditionally Approved status.
- **Bounded operational condition** — may support Conditionally Approved status only where use is restricted, owner and expiry are defined, and no non-waivable control is affected.
- **Post-approval improvement item** — may remain open where it does not materially affect authority, evidence, safety, legality or defined reliability.

Conditionally Approved must never be used to carry unresolved Critical defects, unresolved non-waivable Build Gates or unresolved authority/safety/privacy/legal blockers.

---

# Finding A4 — Operational Gate requirement may be over-applied to genuinely simple Studios

**Severity:** Moderate

Brick 6 is universally assessed, which is correct. However, the master can be read as requiring every Studio to create one or more Operational Gates even where a Tier 1 Studio has no meaningful intermediate trust decision beyond final human review.

Unnecessary gates would conflict with Brick 6's own proportionality rule that more gates do not automatically create better assurance.

## Required remediation

Clarify that BG-06 is universal, while the result of gate-architecture assessment may legitimately be:

> **No separate Operational Gate required beyond defined workflow/release controls — justified.**

Where no OG is created, the builder must show that no meaningful decision or risk point requires one and that release, scope and human-review controls remain effective.

---

# Finding A5 — Assurance classification for the governing Standard itself is undefined

**Severity:** Moderate

The Standard requires every Studio to receive an Assurance Tier, but the self-assurance process for NEX-GOV-003 has no equivalent assurance-depth classification.

Because NEX-GOV-003 governs future Studios, weakness in the Standard can propagate widely even though the Standard itself does not directly make operational decisions.

## Required remediation

For self-assurance, assign NEX-GOV-003 a **Standard Assurance Level** or equivalent review depth based on propagation consequence, governance reliance and scope of use.

This classification should determine the independent-review and hostile-test depth applied to the Standard itself.

Do not simply label the Standard Tier 3 or Tier 4 without a recorded rationale; the Standard Assurance Level should be formally assessed.

---

# Finding A6 — Final approval authority and independent assurance need separation

**Severity:** Moderate

The master correctly states that final approval is a human governance decision and that Tier 3/4 work may require independent assurance. It should more explicitly distinguish:

- **independent assurance reviewer**, who challenges and reports; and
- **final approval authority**, who accepts responsibility for approving the Studio.

An independent reviewer should not automatically become the approval authority, and the final approver should not be able to claim independent assurance merely by reviewing their own build.

## Required remediation

BG-18 must contain separate fields for:

- independent assurance reviewer and review level;
- independent-review disposition;
- final approval authority;
- approval decision; and
- treatment of any disagreement between reviewer and approver.

Where the final approver departs from a material independent-review finding, the rationale and accepted risk must be recorded and must not override a non-waivable control.

---

# Finding A7 — Not Applicable decisions need a challenge owner at final review

**Severity:** Moderate

The Standard requires Not Applicable decisions to be justified, but the final architecture does not explicitly assign responsibility for challenging N/A determinations.

A builder could theoretically reduce control burden by making several weak N/A determinations that are never independently tested.

## Required remediation

BG-18 must require the final or independent reviewer to challenge all material Not Applicable decisions.

Tier 3 and Tier 4 Studios should require IR-2 or stronger confirmation of material N/A determinations.

N/A should never be accepted solely because the original builder marked it so.

---

# Finding A8 — Dependency failure must explicitly invalidate affected approval assumptions

**Severity:** Moderate

Dependency Control correctly requires Brick 14 impact assessment after a dependency change. The assembled master should go one step further and state that loss or material degradation of a dependency may invalidate the assumptions on which existing operational approval rests.

## Required remediation

Brick 17 lifecycle logic should explicitly provide that a critical dependency failure or loss may trigger:

- restricted operation;
- suspension;
- affected Operational Gate blocking;
- Build Gate revalidation; or
- withdrawal of affected released outputs,

depending on consequence.

The Studio should not remain fully Active merely because its configuration has not changed locally.

---

# Finding A9 — Release controls need an explicit prohibition on stale Build assumptions

**Severity:** Moderate

Brick 15 checks Operational Gate state, evidence readiness and source currency. It should explicitly require that the Build assumptions supporting operation remain valid at the point of release.

For example, an Operational Gate may pass correctly while the Studio's approval has become stale because a critical dependency, authority delegation or lifecycle condition has changed.

## Required remediation

Operational release must require confirmation that:

- Studio lifecycle status permits operation;
- no relevant Build Gate has been reopened or invalidated;
- Assurance Tier remains current;
- critical dependencies are within approved operating condition; and
- required human authority remains valid.

---

# Finding A10 — The incorporated-component precedence model is acceptable for Draft, but not ideal for v1.0

**Severity:** Moderate

The v0.2 master uses a sensible draft precedence hierarchy in which detailed brick files and remediation files remain normative. This is acceptable during development but creates interpretation burden if carried into the approved v1.0 baseline.

## Required remediation

Before v1.0 approval, choose one of two controlled architectures:

1. **Fully consolidated normative master**, with component files retained as historical/development records; or
2. **Modular normative standard**, with an approved master index explicitly incorporating version-locked components.

Recommendation: use a fully consolidated approved master for human readability while retaining modular source files for maintenance and traceability.

---

# Contradiction tests completed

The assembled master was specifically reviewed for the following classes of contradiction:

- Build Gate versus Operational Gate confusion;
- assurance-tier loopholes;
- status leakage;
- Not Applicable abuse;
- waiver abuse;
- conditional-pass abuse;
- dependency trust inheritance;
- privacy/provenance conflict;
- independent-review ambiguity;
- release bypass;
- stale approval assumptions;
- circular gate dependencies;
- prompt authority overriding human authority;
- operational release overriding Build status; and
- self-application paradox.

No unresolved contradiction was identified that requires a nineteenth brick or abandonment of the eighteen-brick model.

---

# Strengths confirmed in assembled master

The second forensic review confirms that the following earlier issues are materially resolved at architecture level:

- Build Gate versus Operational Gate taxonomy;
- missing BG-01;
- BG-01 to BG-05 bootstrap conformance;
- assurance classification;
- status namespace separation;
- cross-cutting assurance;
- IP/licensing consideration;
- operator competence;
- execution Build Pack;
- applicability discipline;
- independent-review levels;
- retention/privacy reconciliation;
- dependency recording; and
- whole-system hostile-test requirement.

---

# Required remediation sequence

Before self-assurance and independent review:

1. Correct the self-application category and create the Standard Self-Assurance Profile.
2. Define non-waivable Build Gates and waiver limits.
3. Define Conditional Approval closure classes.
4. Clarify that BG-06 may validly determine no separate OG is required in a simple Studio.
5. Define assurance depth for NEX-GOV-003 itself.
6. Separate independent-review and final-approval roles in BG-18.
7. Require challenge of material Not Applicable determinations.
8. Strengthen lifecycle response to dependency failure.
9. Require release-time confirmation that Build assumptions remain valid.
10. Consolidate the normative text before v1.0.

## Review disposition

**LIMITED REMEDIATION REQUIRED BEFORE STANDARD SELF-ASSURANCE**

The wall is now coherent enough that the remaining issues are mostly closure rules and meta-governance rather than structural cracks.

## Core forensic conclusion

> **The assembled Standard is structurally coherent, but final assurance must close the few remaining paths by which waiver, conditional approval, stale assumptions or self-application ambiguity could weaken the control model.**
