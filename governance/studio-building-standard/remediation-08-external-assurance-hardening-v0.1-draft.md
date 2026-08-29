# Remediation 08 — External-Assurance Hardening

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** SA-08 Prior-Art and External Comparison Review v0.1
- **Findings addressed:** PA-01, PA-02, PA-03 and PA-04
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

This remediation incorporates four Major assurance lenses identified through external comparison:

1. Stakeholder Impact Assessment;
2. Risk Appetite, Tolerance and Residual-Risk Acceptance;
3. Explainability and Interpretability; and
4. Contestability and Affected-Person Review.

These controls strengthen the existing eighteen-brick architecture without creating additional bricks.

The governing rule is:

> **A Studio must not be considered trustworthy merely because its internal controls work; it must also account for the people affected, the risk the organisation is willing to accept, the ability to explain material outcomes, and the ability to challenge consequential decisions.**

---

# Part A — Stakeholder Impact Assessment

## A1. Trigger rule

A **Stakeholder Impact Assessment** is mandatory where a Studio may materially affect identifiable people, groups, communities or external parties.

Triggers include, where relevant:

- employment or workplace decisions;
- assessment, qualification or education outcomes;
- recruitment or candidate decisions;
- access, eligibility or ranking;
- client/customer decisions;
- regulated-party outcomes;
- decisions affecting vulnerable or protected groups;
- high-scale public-facing outputs;
- safety-related outcomes; or
- any other use where foreseeable benefit or harm extends beyond the direct Studio operator.

## A2. Required assessment fields

The assessment must identify, as applicable:

- stakeholder group;
- relationship to the Studio or its output;
- intended benefit;
- potential harm;
- severity of harm;
- likelihood or plausibility;
- reversibility;
- fairness/discrimination implications;
- accessibility implications;
- cultural/language implications;
- whether AI involvement should be disclosed;
- whether a contestability path is required;
- mitigating controls;
- residual impact;
- owner; and
- review trigger.

## A3. No generic-stakeholder rule

The assessment must not rely on vague labels such as "users" where materially different groups face different consequences.

## A4. Cross-cutting integration

Stakeholder Impact Assessment becomes a conditional mandatory component of the Cross-Cutting Assurance Review and informs:

- BG-02 — purpose and intended benefit;
- BG-04 — scope and affected-user boundaries;
- BG-05 — output design and explanation needs;
- BG-10 — human decision rights;
- BG-13 — adversarial review;
- BG-15 — release transparency; and
- BG-17 — monitoring and incident learning.

---

# Part B — Risk Appetite, Tolerance and Residual-Risk Acceptance

## B1. Risk acceptance context

For Tier 2–4 Studios, residual risk must be assessed against an authorised **Risk Acceptance Context**.

Where the organisation has a formal risk appetite or tolerance framework, the Studio must identify the relevant criteria.

Where no formal framework exists, the Studio must record the authorised governance basis used to determine acceptable residual risk.

## B2. Required fields

The Risk Acceptance Context must capture, where relevant:

- risk category;
- inherent consequence;
- key controls;
- residual risk;
- applicable risk appetite/tolerance;
- unacceptable-risk threshold;
- person or role authorised to accept residual risk;
- escalation threshold;
- review trigger; and
- evidence supporting acceptance.

## B3. No unauthorised risk acceptance rule

The builder, prompt designer or AI system must not accept material residual risk unless that authority has been explicitly granted.

## B4. No control-by-label rule

A risk is not rendered acceptable merely because the Studio is assigned a lower Assurance Tier or because a condition is labelled "residual".

## B5. Final approval integration

BG-18 must confirm that:

- material residual risk is visible;
- it is within the authorised acceptance context; and
- the person accepting it has authority to do so.

---

# Part C — Explainability and Interpretability

## C1. Governing principle

Evidence traceability and explainability are related but not identical.

A Studio may preserve provenance while still producing an outcome that users or decision-makers cannot meaningfully understand.

The Studio must therefore define the level of decision-relevant explanation required for the audience and consequence.

## C2. Explainability trigger

Explicit explainability requirements apply where:

- the Studio influences consequential human decisions;
- an affected person may reasonably need to understand the basis of an outcome;
- a professional or regulated decision-maker must exercise judgement;
- an output makes material factual, causal or evaluative claims;
- contestability is required; or
- the Assurance Tier or policy requires explanation.

## C3. Required explanation elements

Where applicable, the Studio should be able to explain at an appropriate level:

- the material information or evidence considered;
- the governing source or decision rule;
- the principal factors materially influencing the recommendation or outcome;
- important assumptions;
- significant contradictory evidence;
- uncertainty or limitations;
- the role played by AI;
- the role played by human judgement; and
- why the final authorised human accepted, rejected or modified an AI recommendation where this is material.

## C4. Hidden reasoning prohibition

Explainability does not require disclosure of hidden model chain-of-thought, private scratchpad reasoning or other internal model reasoning that is not an approved governance record.

The required explanation must instead rely on reconstructable evidence, decision criteria, recorded rationale and appropriate summaries.

## C5. Brick integration

Explainability requirements must be considered in:

- Brick 5 — Output Standard and Definition of Done;
- Brick 7 — Evidence Architecture and Provenance;
- Brick 10 — Human Decision Rights and Escalation;
- Brick 12 — Prompting Architecture;
- Brick 15 — Release Criteria; and
- Cross-Cutting Assurance.

## C6. Explainability failure rule

Where adequate explanation is required but cannot be produced, the Studio must determine whether to:

- reduce reliance;
- narrow the use case;
- require stronger human review;
- block the decision;
- escalate; or
- prohibit the use.

---

# Part D — Contestability and Affected-Person Review

## D1. Contestability trigger

A formal contestability or human-review path is required where an AI-supported outcome may materially affect a person's:

- employment;
- assessment or qualification;
- recruitment or candidacy;
- access to a service or opportunity;
- ranking or eligibility;
- legal or contractual position;
- regulated status;
- significant financial interest; or
- other comparable rights or interests.

## D2. Required contestability controls

Where applicable, the Studio must define:

- whether and how the affected person is informed of the material AI-supported role, subject to law, policy and proportionality;
- how the person may request correction, review or reconsideration;
- who owns the human review;
- what evidence and records must be retained;
- what timeframes apply where relevant;
- whether the disputed outcome is paused, qualified or remains effective during review;
- how the reviewer obtains sufficient context;
- how the final decision is recorded;
- how systemic challenge patterns feed lifecycle review.

## D3. Meaningful review rule

Contestability must result in a genuine human review rather than a second automated pass that merely reproduces the original outcome.

## D4. No retaliation or penalty-by-design rule

Where applicable to the domain, the Studio should not create a process in which requesting review itself unfairly disadvantages the affected person.

## D5. Contestability versus ordinary correction

Routine typo correction or customer-service feedback is not necessarily contestability.

Contestability concerns the ability to challenge the **substance or basis of a material outcome**.

---

# Part E — Build Pack additions

The Studio Build Pack must include the following additional records where triggered.

## E1. Stakeholder Impact Record

| Stakeholder group | Benefit | Potential harm | Severity | Fairness/accessibility issue | Contestability needed? | Controls | Residual impact |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## E2. Risk Acceptance Context

| Risk/category | Inherent consequence | Controls | Residual risk | Appetite/tolerance | Acceptance authority | Escalation threshold |
|---|---|---|---|---|---|---|
| | | | | | | |

## E3. Explainability Profile

- Intended audience:
- Consequence/reliance level:
- Explanation required? Yes / No / Conditional
- Material information/evidence to expose:
- Governing decision criteria:
- Assumptions/limitations to expose:
- Human decision rationale required:
- User-facing explanation format:
- Restricted/internal information that must not be disclosed:

## E4. Contestability Profile

- Material person-affecting outcome? Yes / No
- AI contribution material? Yes / No
- Disclosure requirement:
- Human review owner:
- Review request mechanism:
- Evidence retained:
- Decision status during challenge:
- Final decision record:
- Trend-monitoring requirement:

---

# Part F — Gate integration

These additions do not create new Build Gates.

They become evidence requirements within existing gates.

### BG-02

Must identify intended benefits, materially affected stakeholders and preliminary risk context.

### BG-04

Must define stakeholder, rights-impact and contestability boundaries where relevant.

### BG-05

Must define explanation, transparency and contestability-related output requirements where applicable.

### BG-07

Must preserve evidence sufficient to support decision-relevant explanation and later contestability.

### BG-10

Must identify the human decision-maker responsible for review of challenged person-affecting outcomes.

### BG-13

Adversarial review must include stakeholder harm, unfair-impact and explainability failure scenarios where relevant.

### BG-15

Release criteria must confirm required explanation/disclosure and contestability information are present where applicable.

### BG-17

Lifecycle monitoring must consider complaints, challenges, stakeholder harm patterns and repeated contestability outcomes.

### BG-18

Final approval must verify that stakeholder impact, risk acceptance, explainability and contestability requirements have been assessed and implemented where triggered.

---

# Part G — Assurance Tier integration

## Tier 1

These controls may be light or Not Applicable where the Studio does not materially affect others and carries low reliance.

## Tier 2

Stakeholder and explanation requirements apply where material. Residual-risk acceptance context is required for meaningful decision-support risks.

## Tier 3

Formal stakeholder-impact assessment, risk acceptance, explainability and contestability are required wherever the Studio materially affects people, professional decisions or external reliance.

## Tier 4

These controls require strengthened independent review, explicit risk acceptance authority, strong human review rights and high-quality explanation appropriate to the consequence.

---

# Part H — SA-08 closure decision

The four Major findings are now closed at control-design level:

- PA-01 — Stakeholder Impact Assessment: **Closed by Part A**
- PA-02 — Risk Appetite/Tolerance: **Closed by Part B**
- PA-03 — Explainability/Interpretability: **Closed by Part C**
- PA-04 — Contestability: **Closed by Part D**

The Moderate and Minor PA findings remain for incorporation or formal disposition during normative v1.0 consolidation.

## SA-08 current disposition

**PASS AT CONTROL-DESIGN LEVEL — NORMATIVE CONSOLIDATION PENDING**

SA-08 becomes final Pass when these controls are incorporated into the normative v1.0 candidate and the remaining PA findings are dispositioned.

---

## Core rule

> **Trust requires more than correct internal process: it requires awareness of who may be affected, explicit authority to accept residual risk, an understandable basis for consequential outcomes, and a real path to challenge them.**
