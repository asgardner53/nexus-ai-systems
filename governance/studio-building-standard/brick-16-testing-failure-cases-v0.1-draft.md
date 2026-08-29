# Brick 16 — Testing and Failure Cases

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 16
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 16.1 Governing principle

A Studio must prove that it behaves correctly not only when everything is clear and complete, but when inputs are weak, evidence conflicts, users push boundaries, tools fail and controls are challenged.

The governing question is:

> **What happens when the Studio is wrong, uncertain, incomplete, attacked or technically impaired?**

## 16.2 Mandatory build instruction

Every Studio must create a **Test and Failure Case Record** defining:

1. normal operating tests;
2. boundary tests;
3. missing-input tests;
4. contradictory-evidence tests;
5. stale-source tests;
6. false-positive and false-negative tests where relevant;
7. unauthorised-user or authority tests;
8. prompt-injection or instruction-override tests where relevant;
9. connector failure and permission tests;
10. duplicate-action tests where relevant;
11. gate-bypass tests;
12. human-escalation tests;
13. release-blocking tests;
14. rollback, withdrawal or correction tests where relevant;
15. regression tests; and
16. acceptance criteria.

## 16.3 Test-pack rule

Every material Studio must maintain a representative test pack containing at least:

- one known-good case;
- one clearly failing case;
- one ambiguous case;
- one incomplete case;
- one contradictory case;
- one out-of-scope case;
- one attempted bypass case; and
- one case requiring human escalation.

Higher-risk Studios must add domain-specific hostile and failure cases.

## 16.4 Expected-outcome rule

Every test case must define the expected behaviour before execution.

A test is weak if the evaluator decides what success means after seeing the output.

Expected outcomes may include:

- Pass;
- Fail;
- Blocked;
- Escalate;
- Refuse;
- Return for correction;
- Conditional Pass; or
- Approved progression.

## 16.5 Known-good rule

The Studio must demonstrate that legitimate work can proceed successfully through the workflow.

Controls must not be so restrictive that correct work is routinely blocked.

## 16.6 Known-bad rule

The Studio must demonstrate that clearly defective or unauthorised work does not pass merely because it is well written, plausible or confidently presented.

## 16.7 Ambiguity rule

Ambiguous inputs must trigger clarification, qualification, blocking or escalation where required rather than forced certainty.

## 16.8 Missing-evidence rule

The Studio must be tested with missing mandatory evidence and must demonstrate that it does not fabricate completion or silently infer compliance.

## 16.9 Contradiction rule

The Studio must be tested with credible conflicting evidence and demonstrate that contradiction is surfaced, preserved and handled through the approved hierarchy and escalation path.

## 16.10 Boundary and prohibited-use rule

Testing must include attempts to move outside approved scope, expand authority, override boundaries or induce prohibited actions.

The Studio must fail safely.

## 16.11 Gate-bypass rule

Testing must attempt to skip mandatory gates, request a final output prematurely, mislabel a failed gate as passed, or move directly to release.

A mandatory gate that can be bypassed in normal operation is not functioning as designed.

## 16.12 Human-escalation rule

Testing must demonstrate that human escalation actually occurs when defined triggers are met and that the item returns to the correct workflow stage after decision.

## 16.13 Tool and connector failure rule

Where tools or connectors are used, tests should include:

- unavailable service;
- permission denied;
- stale or malformed response;
- partial write;
- duplicate request;
- wrong destination; and
- unexpected external-state change.

The Studio must not convert technical failure into fabricated success.

## 16.14 Adversarial-input rule

Where relevant, the test pack must include inputs designed to manipulate the Studio, such as instructions embedded in retrieved documents, attempts to alter source priority, or requests to suppress evidence or approvals.

## 16.15 False-positive and false-negative rule

Where the Studio classifies or detects conditions, testing must include both false-positive and false-negative scenarios and assess which error direction creates greater consequence.

## 16.16 End-to-end rule

At least one representative case must pass through the full workflow from intake to release or controlled refusal.

Unit-level prompt tests alone are insufficient.

## 16.17 Regression rule

Material changes must trigger re-execution of representative prior tests to confirm that previously working controls remain effective.

## 16.18 Reproducibility rule

Material test cases should be reproducible enough that another authorised reviewer can re-run or challenge the result.

The record should preserve:

- test ID;
- version tested;
- inputs;
- expected outcome;
- actual outcome;
- pass/fail status;
- defects identified;
- correction applied; and
- re-test result.

## 16.19 Defect rule

Failed tests must create defects proportionate to consequence.

Critical or Major defects must block release until corrected or handled through an explicitly authorised exception process.

## 16.20 No test-to-pass tuning rule

The Studio must not be tuned narrowly to pass a fixed set of known tests while remaining fragile to equivalent unseen cases.

Where practical, testing should include variant, unseen or independently created cases.

## 16.21 Required artefact — Test and Failure Case Record

The controlled record must include:

- test inventory;
- test categories;
- expected outcomes;
- acceptance thresholds;
- test data or case references;
- version tested;
- actual results;
- defects;
- severity;
- corrective action;
- re-test status;
- regression suite;
- accountable owner; and
- approval status.

## 16.22 Gate 16 — Operational Resilience Gate

A Studio may progress beyond Brick 16 only when evidence shows that:

- known-good cases succeed;
- known-bad cases fail safely;
- incomplete cases do not fabricate completion;
- ambiguity is handled safely;
- contradictory evidence is surfaced;
- prohibited and out-of-scope work is blocked;
- mandatory gates cannot be casually bypassed;
- human escalation works;
- connector/tool failures fail safely where relevant;
- duplicate actions are controlled where relevant;
- adversarial inputs do not override governance;
- critical defects are closed; and
- the end-to-end workflow performs as designed.

If any material condition fails, operational approval is blocked.

## 16.23 Failure response

If Gate 16 fails, the Studio returns to the earliest brick responsible for the defect. Testing must not be patched only at the surface if the root cause lies in authority, sources, evidence, workflow, prompts, gates or release logic.

## 16.24 Human approval point

The accountable owner must approve the test results. Higher-consequence Studios may require independent or specialist review of the test pack and results.

## 16.25 GitHub control record

For Nexus BMG Studios, test cases, expected outcomes, material results, defects and re-test evidence must be version controlled in GitHub or another approved controlled system.

## 16.26 Brick 16 completion rule

Brick 16 is complete only when the Studio can answer:

> **What happens when things go right?**
>
> **What happens when things go wrong?**
>
> **What happens when someone tries to bypass the rules?**
>
> **What happens when the Studio itself fails?**
>
> **Have we proved those behaviours rather than merely described them?**

---

## Brick 16 core rule

**A Studio is not tested until we have tried to make it fail.**
