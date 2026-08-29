# Brick 13 — Adversarial and Contradictory Review

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 13
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 13.1 Governing principle

A Studio must actively try to discover why its own conclusion, output or control may be wrong.

Ordinary review asks whether the work contains errors. Adversarial review goes further. It deliberately attacks assumptions, evidence, logic, scope, authority, boundaries, workflow, conclusions and release readiness in order to expose weaknesses that supportive review may miss.

The governing question is:

> **What would have to be true for this conclusion, recommendation, control or output to fail?**

A Studio that only confirms itself is not independently testing trust.

## 13.2 Mandatory build instruction

Every Studio must create an **Adversarial and Contradictory Review Protocol** before operational release where the Studio produces material recommendations, decisions, compliance findings, publication claims, strategic analysis, assessment judgements or other consequential outputs.

The protocol must define:

1. what outputs require adversarial review;
2. what risks the review is intended to expose;
3. whether the review is performed by AI, a human or both;
4. reviewer independence requirements;
5. contradiction-search requirements;
6. assumption-testing requirements;
7. source-challenge requirements;
8. alternative-explanation testing;
9. boundary-condition testing;
10. failure-mode testing;
11. false-positive and false-negative testing where relevant;
12. consequence-of-error testing;
13. response to material challenges;
14. escalation requirements;
15. re-entry and re-review rules; and
16. the record that must be retained.

## 13.3 Review-versus-falsification rule

The Studio must distinguish ordinary review from falsification-oriented review.

Ordinary review may ask:

- Is the writing clear?
- Are calculations correct?
- Are required sections present?
- Are citations formatted correctly?

Adversarial review asks:

- What evidence would disprove the conclusion?
- Which assumption is carrying the most weight?
- What credible alternative explanation exists?
- What source has been ignored because it is inconvenient?
- What boundary condition makes this recommendation unsafe or inapplicable?
- What would a hostile regulator, reviewer, editor, assessor, client or critic attack first?

Both forms of review may be required, but they serve different purposes.

## 13.4 Contradictory-evidence rule

The reviewer must actively seek evidence that conflicts with the emerging conclusion where consequence and reliance justify it.

The review should test whether contradictory evidence was:

- searched for;
- identified;
- preserved;
- fairly represented;
- evaluated against source authority;
- incorporated into the conclusion where material; and
- escalated where unresolved.

The presence of contradictory evidence does not automatically invalidate a conclusion. Concealing or ignoring material contradictory evidence does.

## 13.5 Assumption-attack rule

Material assumptions must be challenged as though they were claims.

The adversarial reviewer should identify:

- explicit assumptions;
- hidden assumptions;
- unstated causal links;
- assumptions about user behaviour;
- assumptions about jurisdiction or applicability;
- assumptions about source reliability;
- assumptions about implementation quality; and
- assumptions embedded in models, categories or frameworks.

For each material assumption, the reviewer should ask whether it is evidenced, merely plausible or unsafe to rely upon.

## 13.6 Source-challenge rule

Adversarial review must test whether the Studio relied on the right sources rather than merely credible sources.

The reviewer should challenge:

- source authority;
- currency;
- jurisdiction;
- completeness;
- methodological quality;
- independence;
- conflicts of interest;
- selective citation;
- over-reliance on secondary material;
- misuse of user-provided material; and
- dependence on AI-generated summaries instead of source evidence.

## 13.7 Claim-strength rule

The reviewer must test whether the strength of the language exceeds the strength of the evidence.

The review should challenge words or conclusions implying:

- certainty;
- causality;
- universality;
- compliance;
- completeness;
- originality;
- effectiveness;
- safety;
- inevitability; or
- legal or professional correctness

where the evidence does not support that level of confidence.

## 13.8 Alternative-explanation rule

Where the Studio makes a causal, strategic, diagnostic or interpretive conclusion, the adversarial review should identify credible alternative explanations.

The reviewer should ask:

- What else could explain the observed result?
- Could the causality run in the opposite direction?
- Could selection bias, context or timing explain the pattern?
- Is the apparent effect actually produced by a different variable?
- Would another reasonable professional interpret the same evidence differently?

The final conclusion should reflect material unresolved alternatives.

## 13.9 Boundary-condition attack rule

The adversarial reviewer must look for conditions under which the conclusion stops working.

The review should test differences in:

- jurisdiction;
- industry;
- organisation size;
- population;
- culture;
- maturity;
- technology;
- timing;
- scale;
- implementation quality;
- resource availability;
- user competence; and
- external conditions.

A conclusion that survives only under narrow conditions must not be presented as broadly applicable.

## 13.10 Counterexample rule

Where the Studio makes a general proposition, the reviewer should seek credible counterexamples.

A counterexample may:

- disprove the proposition;
- reveal a missing boundary condition;
- identify an exception;
- demonstrate implementation dependence; or
- show that the mechanism proposed is incomplete.

Counterexamples should be analysed, not discarded because they are inconvenient.

## 13.11 Failure-mode rule

The adversarial review must ask how the output or recommendation could fail in practice.

Failure modes may include:

- wrong source;
- stale source;
- missing evidence;
- misunderstood user intent;
- overgeneralisation;
- model hallucination;
- prompt injection;
- connector failure;
- unauthorised action;
- human rubber-stamping;
- workflow bypass;
- data leakage;
- false classification;
- implementation failure; or
- unexpected interaction between otherwise valid controls.

## 13.12 False-positive and false-negative rule

Where the Studio classifies, detects, approves, rejects or flags items, adversarial review should test both error directions.

A **false positive** occurs where the Studio concludes a condition exists when it does not.

A **false negative** occurs where the Studio fails to identify a condition that does exist.

The Studio should determine which error type is more consequential and calibrate controls accordingly.

## 13.13 Consequence-of-error rule

Adversarial review must consider not only whether an error is possible, but what happens if it occurs.

The reviewer should ask:

- Who is affected?
- What right, obligation or decision could be altered?
- Is the error reversible?
- Can it propagate downstream?
- Could it create regulatory, financial, reputational, safety or fairness consequences?
- Does consequence justify additional review or a higher decision threshold?

## 13.14 Hostile-review perspective rule

Where useful, the Studio should review the work from the perspective of a sceptical external party.

Possible perspectives include:

- regulator;
- auditor;
- journal editor;
- peer reviewer;
- opposing counsel;
- assessor;
- client;
- board member;
- security tester;
- privacy officer;
- dissatisfied user; or
- informed critic.

The purpose is not theatrical role-play. It is to expose the standards and objections an external challenger could reasonably apply.

## 13.15 Independence rule

Adversarial review should have sufficient independence from production.

Where practical, the reviewer should not merely reuse the producer's framing without challenge.

Independence may be strengthened through:

- separate prompt context;
- separate reviewer prompt;
- independent human reviewer;
- blind review of selected evidence;
- separate source search;
- review before seeing the preferred conclusion; or
- a second model or tool where appropriate.

A system certifying its own work from the same assumptions and context provides weaker assurance.

## 13.16 No performative red-team rule

Adversarial review must be capable of changing the outcome.

It is not sufficient to generate a list of hypothetical criticisms and then proceed unchanged.

Material findings must trigger one or more of:

- additional research;
- source re-verification;
- revision of assumptions;
- narrower claims;
- new boundary conditions;
- workflow redesign;
- gate failure;
- human escalation;
- delayed release; or
- abandonment of the conclusion.

If hostile review cannot affect progression, it is decorative.

## 13.17 Severity rule

Adversarial findings should be classified by severity.

A useful minimum model is:

| Severity | Meaning | Typical consequence |
|---|---|---|
| **Critical** | Invalidates authority, safety, legality, evidence integrity or release basis | Stop; escalate; reopen upstream gates |
| **Major** | Materially weakens the conclusion or could change the decision | Fail gate; correct; re-review |
| **Moderate** | Meaningful limitation or quality issue that should be addressed or disclosed | Revise or qualify |
| **Minor** | Low-impact issue that does not alter the core conclusion | Correct proportionately |

Severity must be determined by consequence, not inconvenience.

## 13.18 Adversarial-findings record rule

Material findings must be recorded.

The record should include, where relevant:

- finding ID;
- claim, control or output challenged;
- challenge type;
- evidence or rationale;
- severity;
- response;
- owner;
- status;
- affected gates;
- re-review requirement; and
- final disposition.

## 13.19 Resolution rule

A challenge is not resolved merely because the producer disagrees with it.

Resolution should identify whether the finding was:

- accepted;
- partially accepted;
- rejected with evidence;
- escalated;
- deferred with condition;
- superseded by new evidence; or
- left as a residual limitation.

The rationale must be proportionate to severity.

## 13.20 Re-review rule

Material corrections arising from adversarial review must themselves be re-reviewed where the correction could create new weaknesses.

A revised proposition, workflow or output must not automatically inherit the prior review result.

## 13.21 Required artefact — Adversarial and Contradictory Review Protocol

Before Brick 13 can pass, every applicable Studio must produce a controlled record containing at least:

- outputs requiring adversarial review;
- review objectives;
- reviewer roles;
- independence requirements;
- contradictory-evidence protocol;
- assumption-attack protocol;
- source-challenge protocol;
- claim-strength test;
- alternative-explanation test;
- boundary-condition test;
- counterexample search;
- failure-mode analysis;
- false-positive/false-negative testing where relevant;
- consequence-of-error assessment;
- hostile-review perspectives;
- finding severity model;
- resolution rules;
- re-review rules;
- escalation triggers;
- accountable owner;
- version and status; and
- approval status.

## 13.22 Gate 13 — Adversarial Resilience Gate

A Studio may progress beyond Brick 13 only when the following questions can be answered **Yes** with evidence:

- Has the Studio actively tried to falsify material conclusions rather than merely proofread them?
- Has contradictory evidence been sought and preserved?
- Have material assumptions been exposed and challenged?
- Have source authority and source selection been challenged?
- Has claim strength been tested against evidence strength?
- Have credible alternative explanations been considered?
- Have boundary conditions and counterexamples been tested?
- Have practical failure modes been considered?
- Have false positives and false negatives been tested where relevant?
- Has consequence of error been assessed?
- Is the hostile review sufficiently independent from production?
- Can material adversarial findings change the workflow or gate outcome?
- Are findings recorded and resolved transparently?
- Are corrected outputs re-reviewed where needed?

If any material answer is **No**, the adversarial review architecture is incomplete.

## 13.23 Evidence required to pass

Gate 13 requires:

- the completed Adversarial and Contradictory Review Protocol;
- at least one representative hostile-review test;
- at least one contradictory-evidence challenge;
- at least one assumption challenge;
- at least one counterexample or boundary-condition challenge;
- at least one failure-mode scenario;
- an example where adversarial review changed, narrowed, delayed or escalated the outcome; and
- a completed adversarial-findings record.

For high-consequence or publication-grade Studios, independent human or separate-context review should be used where practical.

## 13.24 Failure response

If Gate 13 fails:

- the output must not be treated as adversarially tested;
- release must remain blocked where hostile review is mandatory;
- missing contradiction searches must be completed;
- material assumptions must be surfaced;
- weak claims must be narrowed or qualified;
- unresolved major or critical findings must be escalated or corrected;
- upstream gates must be reopened where the challenge attacks their assumptions; and
- the corrected work must be re-reviewed.

A Studio that cannot survive challenge has not earned confidence merely because it can produce polished work.

## 13.25 Human approval point

The accountable owner must approve the adversarial review protocol before operational use.

Where outputs are high-consequence, publication-facing, regulated, legally sensitive, safety-critical or strategically material, the relevant human authority should approve the severity model, review depth and release consequences.

Any material reduction in review depth, independence or challenge criteria requires reassessment of Brick 13 and affected downstream controls.

## 13.26 GitHub control record

For Nexus BMG Studios, the adversarial review protocol, material findings, resolution decisions and representative test cases must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record should preserve:

- review protocol;
- reviewer role;
- challenge criteria;
- material findings;
- severity;
- response and resolution;
- reopened gates;
- residual limitations;
- approval records; and
- material changes to review depth.

## 13.27 Brick 13 completion rule

Brick 13 is complete only when the Studio can answer five questions for every material conclusion or control:

> **What is the strongest credible challenge to this?**
>
> **What evidence could prove us wrong?**
>
> **What assumption or boundary condition is most vulnerable?**
>
> **What happens if the conclusion fails in practice?**
>
> **Did the hostile review have real authority to change the outcome?**

If the final answer is no, the review was not truly adversarial.

---

## Brick 13 core rule

**Confidence is earned when a conclusion survives serious challenge, not when nobody has challenged it.**
