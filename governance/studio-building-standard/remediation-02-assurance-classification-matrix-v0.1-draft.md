# Remediation 02 — Studio Assurance Classification Matrix

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** Whole-Standard Forensic Integrity Review v0.1
- **Finding addressed:** 4, with partial support for Findings 11 and 12
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

The Studio Assurance Classification Matrix converts the principle of **proportionate control** into a repeatable design rule.

Every proposed Studio must receive a provisional assurance classification during construction and a confirmed classification before final approval.

The classification determines the minimum depth of governance, testing, independent review, human approval, monitoring and release control required.

The governing rule is:

> **Control depth must rise with consequence, reliance, uncertainty, autonomy and exposure.**

## 2. Assurance classification model

The Standard will use four assurance tiers.

### Tier 1 — Assistive / Low Consequence

Typical characteristics:

- primarily drafting, organisation, summarisation or low-risk internal assistance;
- outputs are not intended to determine formal rights, obligations or regulated outcomes;
- low external reliance;
- human review is normally immediate and obvious;
- no consequential autonomous external action;
- limited sensitive data or tightly controlled data use.

Typical examples may include low-risk internal drafting or structured idea-development Studios.

### Tier 2 — Controlled Decision Support / Moderate Consequence

Typical characteristics:

- supports internal professional, operational or management decisions;
- outputs may influence decisions but do not normally make the formal decision autonomously;
- moderate reliance or moderate sensitivity;
- may use connectors or internal data;
- errors could cause meaningful rework, poor decisions or limited operational harm;
- human decision authority remains clear.

### Tier 3 — High Assurance / Professional, Regulated or External Reliance

Typical characteristics:

- supports regulated, professional, assessment, compliance, employment, financial, governance, public-facing or client-facing outcomes;
- outputs may materially influence rights, formal findings, published claims or external decisions;
- high evidentiary or source-authority requirements;
- may use sensitive, confidential or personal information;
- errors could create significant legal, regulatory, reputational, financial or fairness consequences;
- independent or specialist review is normally required for material controls.

### Tier 4 — Critical Assurance / Rights, Safety or Autonomous Consequence

Typical characteristics:

- can materially affect safety, legal rights, significant financial outcomes, high-stakes regulated decisions or critical operations;
- may involve autonomous or semi-autonomous consequential actions;
- errors could cause severe, difficult-to-reverse or widespread harm;
- high dependency on system availability, security and integrity;
- strong dual-control, independent assurance and monitoring requirements apply.

Tier 4 should be exceptional. A Studio must not be placed in Tier 4 merely because the technology is sophisticated; the classification is driven by consequence and reliance.

## 3. Classification dimensions

Every Studio must be assessed against the following dimensions:

| Dimension | Assessment question |
|---|---|
| **Consequence** | What is the plausible harm if the Studio is materially wrong? |
| **Reliance** | How strongly will users rely on the output before independent verification? |
| **Decision authority** | Does the Studio Assist, Recommend, Decide or Act? |
| **External exposure** | Is the output internal, client-facing, public, regulatory or otherwise externally relied upon? |
| **Rights impact** | Can the Studio affect employment, assessment, qualification, access, legal position or other rights/interests? |
| **Safety impact** | Could error create physical, psychological, operational or other material safety harm? |
| **Regulatory/professional impact** | Does the Studio operate in a regulated or professional decision context? |
| **Data sensitivity** | Does it handle confidential, personal, sensitive, security or commercially restricted information? |
| **Financial impact** | Could error create material financial loss, commitment or liability? |
| **Autonomy** | Can it perform actions without immediate human review? |
| **Reversibility** | Can an incorrect outcome be easily corrected before harm occurs? |
| **Scale** | How many people, decisions, records or systems could be affected? |
| **Uncertainty** | How ambiguous, contested, novel or rapidly changing is the operating domain? |
| **Dependency** | How dependent is the Studio on external models, connectors, systems or vendors? |

## 4. Classification rule

The Studio must not use a simple arithmetic average to determine the tier.

A single high-consequence characteristic may justify a higher tier even if most other dimensions are low.

The builder must apply the following rule:

> **The assurance tier must be at least as high as the most material consequence that cannot be adequately reduced by an approved control.**

Controls may reduce residual risk, but they must not be used to conceal the inherent consequence of the Studio's intended use.

## 5. Escalation triggers

A Studio must normally be classified at **Tier 3 or higher** where any of the following applies materially:

- formal regulatory or compliance findings;
- formal assessment or qualification outcomes;
- employment or workplace-rights decisions;
- public or client-facing professional advice;
- legal interpretation or legal-position support;
- material financial decisions;
- handling of sensitive personal information with consequential use;
- high-reliance publication or governance outputs;
- autonomous write/action capability affecting consequential records.

A Studio must normally be considered for **Tier 4** where any of the following applies materially:

- safety-critical decisions or actions;
- autonomous consequential action with limited opportunity for human correction;
- severe rights or financial impact;
- critical infrastructure or essential operational dependency;
- high-scale irreversible action;
- a combination of high consequence, high autonomy and low reversibility.

## 6. Minimum controls by tier

| Control area | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| **Human decision owner** | Required | Required | Required | Required |
| **Source hierarchy** | Required | Required | Required | Required |
| **Evidence provenance** | Proportionate | Required for material claims | Formal traceability required | Formal traceability and strengthened assurance |
| **Independent review** | Optional unless triggered | Risk-based | Required for material controls/outputs | Required, with strong independence |
| **Adversarial review** | Targeted | Required for material outputs | Formal and documented | Formal, repeated and independently challenged |
| **Operational testing** | Representative | Structured | Comprehensive hostile/failure testing | Comprehensive, independent and high-consequence testing |
| **Regression testing** | Material changes | Material changes | Mandatory for material changes | Mandatory and strengthened |
| **Human approval before release** | As output requires | Required for consequential outputs | Required | Required; dual control may apply |
| **Dual control** | Normally not required | Exceptional | Risk-based for high-consequence decisions | Presumptive for defined critical actions |
| **Connector/write permissions** | Minimal | Explicit | Restricted and approved | Strong least-privilege, dual approval where appropriate |
| **Audit trail** | Basic | Material decisions | Formal and reconstructable | Formal, comprehensive and protected |
| **Monitoring cadence** | Periodic | Defined | Frequent/risk-based | Continuous or high-frequency where feasible and justified |
| **Lifecycle review** | Defined | Defined | Formal scheduled review | Formal scheduled and event-driven assurance |
| **Release authority** | Studio owner or authorised role | Authorised role | Senior/qualified authorised role | Explicit critical release authority |
| **External specialist review** | Normally not required | Trigger-based | Required where domain requires | Required where domain requires, with strong assurance |

## 7. Independent-review thresholds

To close ambiguity in the Standard, the following minimum rule applies:

- **Tier 1:** independent review is optional unless a specific brick or risk trigger requires it.
- **Tier 2:** independent review is required for material changes, significant incidents, or high-impact outputs where the builder is also the principal decision-maker.
- **Tier 3:** independent review is required for material architecture, testing and final approval evidence, unless an explicit governance exception is approved.
- **Tier 4:** independent review is mandatory and should be organisationally or functionally independent where practical.

## 8. Testing-depth thresholds

### Tier 1

Minimum:

- known-good;
- known-bad;
- incomplete;
- out-of-scope;
- basic bypass test.

### Tier 2

Tier 1 plus:

- ambiguous case;
- contradictory evidence;
- escalation case;
- regression pack;
- connector failure where relevant.

### Tier 3

Tier 2 plus:

- structured hostile test pack;
- independent or separate-context testing;
- false-positive/false-negative analysis where relevant;
- whole-workflow end-to-end tests;
- release-blocking scenarios;
- human override and disagreement scenarios.

### Tier 4

Tier 3 plus:

- high-consequence failure simulation;
- combined failure scenarios;
- recovery/rollback tests;
- continuity or resilience testing where relevant;
- strengthened security/privacy testing;
- independent final test review.

## 9. Monitoring and review thresholds

The lifecycle plan must reflect assurance tier.

A default starting point is:

- **Tier 1:** periodic review at least annually or on material change;
- **Tier 2:** review at least every 6–12 months or on material trigger;
- **Tier 3:** review at least every 3–6 months, plus event-triggered review;
- **Tier 4:** review cadence determined by risk, potentially continuous monitoring with formal assurance review at least quarterly.

These are default maxima between formal reviews, not substitutes for event-triggered review.

## 10. Classification record

Every Studio must maintain a **Studio Assurance Classification Record** containing at least:

- Studio name and identifier;
- provisional tier;
- confirmed tier;
- classification date;
- classification dimensions assessed;
- highest material consequence identified;
- mitigating controls;
- residual risk;
- rationale;
- specialist review requirements;
- independent-review requirement;
- testing-depth requirement;
- lifecycle-review cadence;
- approval authority; and
- reclassification triggers.

## 11. Reclassification triggers

The Studio must be reassessed where there is a material change in:

- purpose;
- user group;
- reliance level;
- decision authority;
- external exposure;
- data sensitivity;
- financial or rights impact;
- autonomy;
- connector capability;
- scale;
- jurisdiction;
- regulatory status;
- failure consequence; or
- dependency on external systems.

Reclassification is governed through Brick 14 change control.

## 12. No downward-classification-by-convenience rule

A Studio must not be placed in a lower tier merely to reduce testing, review or documentation burden.

A lower classification requires evidence that consequence, reliance or residual risk has genuinely been reduced through scope, authority or design changes.

## 13. Build-gate integration

The Assurance Classification is first proposed during **BG-02 — Purpose and Authority Gate** and must be confirmed no later than **BG-04 — Scope and Boundary Gate**.

The classification must then inform:

- BG-05 output standard;
- BG-06 gate architecture;
- BG-07 evidence requirements;
- BG-08 research depth;
- BG-09 workflow design;
- BG-10 human decision rights;
- BG-11 record depth;
- BG-12 prompt testing;
- BG-13 adversarial review;
- BG-14 change control;
- BG-15 release controls;
- BG-16 testing depth;
- BG-17 lifecycle cadence; and
- BG-18 final approval authority.

## 14. Not-a-risk-score rule

The Assurance Classification is not intended to replace a formal risk assessment where one is required.

It is a **control-depth classification** that determines the minimum assurance architecture for the Studio.

A separate risk assessment may identify risks within the Studio that require additional controls beyond the tier minimum.

## 15. Remediation acceptance criteria

Forensic Finding 4 may be marked remediated when:

- the four-tier model is incorporated into the master Standard;
- classification dimensions are controlled;
- escalation triggers are explicit;
- minimum controls by tier are defined;
- independent-review thresholds are deterministic;
- testing depth is tied to tier;
- lifecycle review cadence is tied to tier;
- every new Studio receives a controlled classification record; and
- reclassification triggers are integrated into Brick 14.

## Remediation status

**CONTROL DESIGN COMPLETE — IMPLEMENTATION INTO MASTER STANDARD PENDING FINAL ASSEMBLY**

## Core rule

> **Proportionality is not permission to weaken controls. It is the disciplined matching of assurance depth to consequence, reliance and autonomy.**
