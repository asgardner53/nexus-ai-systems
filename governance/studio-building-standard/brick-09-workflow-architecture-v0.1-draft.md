# Brick 9 — Workflow Architecture

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 9
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 9.1 Governing principle

A Studio must define **how work moves through the system**.

A workflow is not merely a sequence of prompts. It is the controlled path by which an item enters the Studio, is classified, researched, analysed, tested, reviewed, approved, released, corrected, escalated or stopped.

The governing question is:

> **What must happen, in what order, under what conditions, before this work can move from intake to trusted release?**

A Studio without an explicit workflow risks allowing users, models or tools to skip controls, enter at the wrong stage, bypass gates, or continue after failure.

## 9.2 Mandatory build instruction

Every Studio must create a **Workflow Architecture and State Control Record** before operational use.

The record must define:

1. workflow entry points;
2. intake requirements;
3. item or case classification;
4. workflow stages;
5. state definitions;
6. entry and exit criteria for each stage;
7. gates attached to each stage;
8. human intervention points;
9. tool, connector and automation use at each stage;
10. allowed forward transitions;
11. allowed backward transitions;
12. blocked states;
13. escalation routes;
14. retry and re-entry rules;
15. failure routes;
16. cancellation or abandonment rules;
17. release path;
18. post-release correction path;
19. audit and event-recording requirements; and
20. exception-handling rules.

## 9.3 Workflow-stage rule

Every material workflow must be divided into explicit stages.

Typical stages may include:

**Intake → Scope Check → Source Check → Research → Evidence Review → Analysis → Drafting or Decision Support → Quality Review → Human Approval → Release → Post-Release Review**

The exact stages will vary by Studio. The purpose is not to impose one universal flow, but to ensure that each Studio has a deliberate progression.

## 9.4 State rule

A stage describes where work is occurring. A state describes the current condition of the work.

Possible states include:

- **New**;
- **In Intake**;
- **In Scope Review**;
- **In Research**;
- **Evidence Incomplete**;
- **Under Analysis**;
- **Drafting**;
- **Under Gate Review**;
- **Blocked**;
- **Escalated**;
- **Awaiting Human Approval**;
- **Approved for Release**;
- **Released**;
- **Returned for Correction**;
- **Withdrawn**;
- **Superseded**; and
- **Closed**.

Studios should use only the states they need, but every state must have a defined meaning and transition rule.

## 9.5 Entry-criteria rule

No stage should be entered without satisfying its prerequisites.

Entry criteria may include:

- required inputs present;
- prior gate passed;
- correct user role;
- source authority confirmed;
- required evidence available;
- approval obtained;
- connector access authorised; or
- classification completed.

The Studio must prevent downstream work from starting where critical prerequisites are absent.

## 9.6 Exit-criteria rule

A stage is complete only when its defined exit conditions are met.

Exit criteria may include:

- required artefact produced;
- gate passed;
- evidence register updated;
- defects closed;
- human review completed;
- decision recorded; or
- hand-off package complete.

The Studio must not treat elapsed time or apparent completion as sufficient exit evidence.

## 9.7 Forward-transition rule

Forward movement must occur only through approved transitions.

The Studio must define:

- which stage may follow which;
- what gate or condition authorises the transition;
- what evidence must travel with the work; and
- what state the item enters next.

A user or model must not be able to jump directly to release simply by asking for a final answer.

## 9.8 Backward-transition rule

Backward movement must be designed into the workflow.

Where a gate fails or new evidence changes the basis of the work, the workflow must identify the correct return point.

Examples include:

- return from drafting to research;
- return from output review to source verification;
- return from release readiness to scope review;
- return from human approval to analysis; or
- return from post-release review to evidence correction.

The workflow should return to the stage where the root cause can be corrected, not merely the nearest earlier stage.

## 9.9 Blocked-state rule

A Studio must have a legitimate blocked state.

Work should become **Blocked** where progress depends on something the Studio does not currently have, such as:

- missing evidence;
- unresolved authority;
- unavailable source;
- required human approval;
- connector failure;
- jurisdiction uncertainty;
- missing credential or role confirmation; or
- unresolved contradiction.

Blocked work must not silently continue under assumption.

## 9.10 Escalation-state rule

A Studio must distinguish **Blocked** from **Escalated**.

Blocked means progress cannot continue because a prerequisite is missing. Escalated means a judgement, authority or conflict must be referred to a designated person or authority.

The escalation record should define:

- trigger;
- destination;
- information required;
- decision expected;
- how the item re-enters the workflow; and
- what happens if escalation remains unresolved.

## 9.11 Human hand-off rule

Every hand-off from AI-supported work to human review must be purposeful.

The hand-off should provide the human reviewer with enough information to exercise meaningful judgement, including where relevant:

- issue or decision to be made;
- supporting evidence;
- source status;
- known limitations;
- contradictory evidence;
- gate status;
- AI recommendation if one exists; and
- consequences of approval or rejection.

A human should not be asked merely to click approve without sufficient context.

## 9.12 Human-to-AI return rule

Where human review returns work to the Studio, the workflow should capture:

- decision or feedback;
- requested correction;
- any new authority or constraint;
- stage to which work returns;
- gates to be re-run; and
- whether prior approvals remain valid.

The Studio must not lose the human decision in conversational context alone.

## 9.13 Tool and connector placement rule

Tools and connectors must be assigned to specific workflow stages and authorised purposes.

For each tool or connector, the workflow should define:

- stage of use;
- permitted action;
- data accessed;
- read/write authority;
- human approval requirements;
- failure behaviour; and
- logging requirements.

Tools must not become general-purpose shortcuts around the workflow.

## 9.14 Automation rule

Automation may accelerate a workflow but must not erase control points.

The Studio must identify:

- which transitions may be automated;
- which gates may be machine-evaluated;
- which decisions require human review;
- what happens if automation fails;
- how duplicate or repeated actions are prevented; and
- how automated actions are logged.

Automation must not transform a recommendation into a consequential action unless authority for that transition has been explicitly approved.

## 9.15 Idempotency and duplicate-action rule

Where the workflow can perform external actions, it should prevent unintended duplicate actions.

Examples include duplicate:

- emails;
- submissions;
- publications;
- database writes;
- approvals;
- payments;
- notifications; or
- file creations.

The Studio should define how it determines whether an action has already occurred before repeating it.

## 9.16 Retry rule

Retries must be controlled.

The workflow should distinguish between:

- retrying a failed technical operation;
- re-running a gate after correction;
- repeating research because evidence is insufficient;
- and re-attempting an external action.

Retries must not conceal repeated systemic failure.

Repeated failure should trigger escalation or design review rather than infinite retries.

## 9.17 Timeout and inactivity rule

Where work can remain open for extended periods, the Studio should define what happens when an item becomes stale or inactive.

Possible responses include:

- revalidate sources;
- reopen gates;
- request updated evidence;
- close as incomplete;
- archive; or
- escalate.

The workflow must not assume that old approvals or evidence remain valid indefinitely.

## 9.18 Parallel-work rule

Some workflow activities may occur in parallel.

Parallel work is permitted where:

- dependencies are known;
- shared evidence is controlled;
- conflicting edits or decisions are prevented;
- downstream stages wait for all required parallel branches; and
- unresolved differences are reconciled before release.

Parallelism should improve efficiency without making control status ambiguous.

## 9.19 Branching-workflow rule

A Studio may require different workflow paths for different cases.

Branching may depend on:

- risk level;
- user role;
- output type;
- jurisdiction;
- evidence sufficiency;
- data sensitivity;
- consequence;
- connector need; or
- complexity.

The branching rule must be explicit enough that similar cases are routed consistently.

## 9.20 Risk-based workflow rule

The workflow may scale controls proportionately.

Low-risk work may follow a lighter route, while high-risk work may require deeper research, additional gates, second review, restricted connectors or higher human authority.

The Studio must define the criteria that trigger the heavier route.

Risk-based simplification must not remove controls that are mandatory for law, privacy, safety, evidence integrity or decision authority.

## 9.21 Failure-containment rule

A workflow failure should be contained to prevent downstream contamination.

If a stage or gate fails, the Studio should determine:

- which downstream artefacts are affected;
- which approvals are invalidated;
- whether release must be blocked;
- whether previously produced outputs must be withdrawn; and
- what corrective path applies.

Failure must not be allowed to propagate silently.

## 9.22 Release-path rule

Release must be an explicit workflow transition.

The workflow must define:

- what gates must have passed;
- what status the output must hold;
- who may authorise release;
- what final checks occur;
- where the released artefact is stored or sent;
- what release metadata is captured; and
- what rollback or withdrawal path exists.

Generation is not release.

## 9.23 Post-release rule

A Studio must define what happens after release where later correction may matter.

The workflow should address:

- error discovery;
- new evidence;
- complaints;
- regulatory change;
- source supersession;
- correction;
- withdrawal;
- replacement; and
- notification to affected users where appropriate.

Released work must remain capable of being corrected or superseded under controlled conditions.

## 9.24 Cancellation and abandonment rule

Not all work reaches completion.

The Studio should define how work is cancelled, abandoned or closed incomplete.

The record should capture, where material:

- reason;
- current stage;
- unresolved issues;
- whether outputs may still be used;
- whether data or drafts must be retained or deleted; and
- whether re-entry is permitted later.

Abandoned work must not later be mistaken for approved work.

## 9.25 Audit-event rule

Material workflow events should be traceable.

Depending on consequence, the Studio should record:

- intake;
- stage changes;
- gate decisions;
- escalations;
- human approvals;
- connector actions;
- failures;
- retries;
- releases;
- withdrawals; and
- material corrections.

The objective is not to log every token or keystroke. It is to preserve the decision-relevant history.

## 9.26 Exception-handling rule

Unexpected cases must not force the workflow to improvise silently.

The Studio should have an exception path for cases that do not fit the normal workflow.

The exception path should:

- identify the mismatch;
- stop inappropriate automatic progression;
- route to a human or controlled review;
- record the resolution; and
- determine whether the workflow design itself needs updating.

Repeated exceptions may indicate a design defect rather than unusual users.

## 9.27 Workflow visualisation rule

Every material Studio should maintain a workflow representation that a competent reviewer can understand.

This may be a:

- flowchart;
- state diagram;
- decision table;
- process map;
- swimlane diagram; or
- structured workflow specification.

The representation must show gates, human interventions, backward loops, blocked states and release points where relevant.

## 9.28 Required artefact — Workflow Architecture and State Control Record

Before Brick 9 can pass, every Studio must produce a controlled record containing at least:

- workflow purpose;
- entry points;
- intake requirements;
- workflow stages;
- state definitions;
- entry and exit criteria;
- gate placement;
- forward transitions;
- backward transitions;
- blocked and escalation states;
- human hand-offs;
- tool and connector placement;
- automation rules;
- retry rules;
- parallel and branching rules;
- risk-based routing rules;
- release path;
- post-release path;
- cancellation and abandonment rules;
- failure-containment rules;
- audit-event requirements;
- exception path;
- workflow visualisation;
- accountable owner;
- version and status; and
- approval status.

## 9.29 Gate 9 — Workflow Integrity Gate

A Studio may progress beyond Brick 9 only when the following questions can be answered **Yes** with evidence:

- Are workflow stages explicit?
- Are states defined?
- Are entry and exit criteria clear?
- Are gates attached to the correct stages?
- Can forward progression occur only through approved transitions?
- Can work move backwards when root-cause correction is required?
- Is there a legitimate blocked state?
- Is escalation distinct from blocking?
- Are human hand-offs meaningful and documented?
- Are tools and connectors constrained to approved workflow stages?
- Can automation operate without erasing mandatory gates?
- Are retries controlled?
- Are duplicate external actions prevented where relevant?
- Are parallel and branching paths controlled?
- Is failure contained before downstream contamination?
- Is release an explicit controlled transition?
- Is there a post-release correction or withdrawal path?
- Are material workflow events traceable?
- Is there an exception path for cases that do not fit the normal flow?
- Can a reviewer understand the workflow from the controlled representation?

If any material answer is **No**, the workflow architecture is incomplete.

## 9.30 Evidence required to pass

Gate 9 requires:

- the completed Workflow Architecture and State Control Record;
- a workflow diagram or equivalent representation;
- at least one normal end-to-end case;
- at least one failed-gate return case;
- at least one blocked case;
- at least one escalation case;
- at least one human approval hand-off;
- at least one post-release correction or withdrawal scenario where relevant; and
- at least one exception-path scenario.

For action-capable Studios, testing must include prevention of duplicate or unauthorised external actions.

## 9.31 Failure response

If Gate 9 fails:

- the Studio must not be treated as operational;
- ambiguous transitions must be removed or defined;
- bypass paths must be closed;
- missing blocked or escalation states must be added;
- automation must remain constrained;
- human hand-offs must be clarified;
- release paths must remain disabled where prerequisites are uncertain; and
- the workflow must be retested end to end.

A Studio with good prompts but an uncontrolled workflow remains unreliable.

## 9.32 Human approval point

The accountable owner must approve the workflow architecture before operational release.

Additional approval may be required from process owners, regulators, privacy or security authorities, professional decision-makers or system owners where the workflow affects regulated, sensitive or consequential processes.

Any material change to workflow stages, gate placement, automation, connector actions, human approval points or release logic requires reassessment of Brick 9 and any affected earlier bricks.

## 9.33 GitHub control record

For Nexus BMG Studios, the Workflow Architecture and State Control Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record should preserve:

- workflow definition;
- state model;
- gate placement;
- human hand-offs;
- tool and connector placement;
- automation rules;
- release logic;
- exception paths;
- material workflow changes;
- approval records; and
- current workflow visualisation.

## 9.34 Brick 9 completion rule

Brick 9 is complete only when the Studio can answer five questions for any work item:

> **Where is this item now?**
>
> **Why is it allowed to be here?**
>
> **What must happen before it can move?**
>
> **Where does it go if something fails?**
>
> **Who or what is authorised to move it next?**

If those answers are unclear, the workflow is not controlled.

---

## Brick 9 core rule

**A controlled Studio does not merely know what to do. It knows what may happen next, what must not happen next, and why.**
