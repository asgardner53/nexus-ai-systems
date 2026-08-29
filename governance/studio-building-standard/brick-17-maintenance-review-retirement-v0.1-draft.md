# Brick 17 — Maintenance, Review and Retirement

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 17
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 17.1 Governing principle

Approval is not permanent evidence of fitness.

A Studio operates in a changing environment of sources, regulations, models, tools, users, risks and organisational needs. It must therefore be maintained, periodically revalidated and retired when it can no longer be trusted or justified.

The governing question is:

> **What must remain true for this Studio to continue operating?**

## 17.2 Mandatory build instruction

Every Studio must create a **Maintenance, Review and Retirement Plan** defining:

1. accountable owner;
2. review cadence;
3. event-triggered reviews;
4. source monitoring;
5. model and tool monitoring;
6. connector and permission review;
7. prompt and workflow review;
8. gate-performance review;
9. incident and defect review;
10. user feedback review;
11. evidence and output-quality monitoring;
12. access review;
13. revalidation requirements;
14. suspension criteria;
15. retirement criteria;
16. archival requirements; and
17. successor or migration arrangements where relevant.

## 17.3 Ownership-continuity rule

Every operational Studio must have a current accountable owner.

If ownership becomes vacant and no authorised delegate exists, consequential operation should be suspended until ownership is restored.

## 17.4 Periodic-review rule

The Studio must define a review cadence proportionate to consequence and rate of environmental change.

Review must assess whether the Studio still matches its approved purpose, authority, sources, boundaries, workflow, decision rights, prompts, tests and release criteria.

## 17.5 Event-triggered review rule

Review must also occur when material events arise, including:

- regulatory or controlling-source change;
- material model change;
- connector or permission change;
- repeated defects;
- material incident;
- security or privacy issue;
- significant user complaint;
- unexpected decision pattern;
- changed organisational purpose;
- changed reliance level;
- changed professional standard; or
- evidence that prior assumptions no longer hold.

## 17.6 Source-currency rule

Controlling and authoritative sources must be reviewed for currency at an appropriate cadence.

Material source change must trigger Brick 14 change control and affected gate re-entry.

## 17.7 Model and tool review rule

The Studio must periodically confirm that approved models, tools and configurations remain available and behave sufficiently consistently with tested assumptions.

Silent provider or platform change must not be assumed immaterial.

## 17.8 Connector and permission review rule

Connector access must be periodically reviewed for continued necessity, correct permissions and appropriate users.

Unused or excessive permissions should be removed.

## 17.9 Prompt and workflow health rule

The Studio should monitor for prompt drift, workflow workarounds, repeated manual correction, frequent escalation, unexpected refusal, inconsistent output and informal bypass practices.

Repeated workarounds are evidence that the formal Studio may no longer match operational reality.

## 17.10 Gate-performance rule

Gate performance must be reviewed to identify gates that:

- never fail;
- fail excessively;
- are routinely waived;
- are bypassed;
- duplicate another control;
- lack evidence; or
- no longer address a material risk.

A gate that exists only ceremonially should be redesigned or removed through change control.

## 17.11 Incident-learning rule

Incidents and defects must feed maintenance.

Repeated incidents should trigger root-cause review rather than repeated local correction.

## 17.12 Human-decision-pattern rule

Where humans frequently reject, reverse or override Studio recommendations, the pattern should be reviewed.

The purpose is not to pressure humans toward AI agreement. Repeated disagreement may reveal weak evidence, poor prompt design, changed context, inadequate authority rules or an unsuitable Studio design.

## 17.13 User-feedback rule

Relevant user feedback should inform maintenance, but user preference must not override controlling authority, evidence standards or governance boundaries.

## 17.14 Performance and usefulness rule

The Studio must remain useful enough to justify its continued operation.

Maintenance should consider whether it still produces the intended outcome with acceptable quality, effort, timeliness and risk.

A Studio can be technically functional yet no longer worth maintaining.

## 17.15 Revalidation rule

Periodic or event-triggered review may require revalidation of selected or all gates.

Full revalidation should be considered after major purpose, authority, source, model, workflow, risk or regulatory change.

## 17.16 Suspension rule

The Studio must be capable of being suspended.

Suspension may be required where:

- a Critical defect exists;
- controlling authority becomes uncertain;
- required owner or approver is unavailable;
- security or privacy integrity is compromised;
- essential connector behaviour is unsafe;
- testing is no longer representative;
- evidence integrity is compromised; or
- continued operation would create unacceptable risk.

Suspension is a governance control, not an admission of failure.

## 17.17 Suspension-state rule

A suspended Studio must clearly identify:

- reason;
- effective date;
- affected functions;
- whether any limited operation remains permitted;
- owner;
- corrective actions;
- reactivation criteria; and
- affected users or stakeholders.

## 17.18 Reactivation rule

A suspended Studio may return to operation only after the cause of suspension has been addressed and affected gates revalidated.

## 17.19 Retirement rule

A Studio should be retired when it:

- no longer serves an approved need;
- has been replaced;
- cannot be maintained economically or safely;
- relies on obsolete or unavailable sources, models or systems;
- cannot meet current regulatory or professional requirements;
- has unacceptable residual risk; or
- no longer has accountable ownership.

## 17.20 No zombie-Studio rule

A Studio must not remain notionally active merely because nobody formally retired it.

Inactive, unsupported or unowned Studios must be reviewed and assigned an explicit status.

## 17.21 Retirement-impact rule

Before retirement, the Studio must assess:

- active work items;
- dependent Studios or systems;
- retained outputs;
- user access;
- connectors and credentials;
- data and evidence retention;
- regulatory obligations;
- open incidents;
- unresolved exceptions; and
- successor arrangements.

## 17.22 Access-removal rule

Retirement must include removal or restriction of unnecessary connectors, automation, write permissions, credentials and user access.

Retired does not mean still operational but unofficial.

## 17.23 Archive rule

Retirement must preserve enough controlled history to reconstruct material operation and decisions for the required retention period.

The archive should include, as appropriate:

- final approved version;
- effective dates;
- owner;
- governing sources;
- material change history;
- gate architecture;
- test evidence;
- release records;
- incidents;
- retirement decision; and
- successor reference.

## 17.24 Successor rule

Where a Studio is replaced, the relationship to the successor must be recorded.

A successor does not automatically inherit approvals, evidence states, authority or testing from the retired Studio.

## 17.25 Required artefact — Maintenance, Review and Retirement Plan

The controlled plan must include:

- owner;
- review cadence;
- event triggers;
- source review;
- model/tool review;
- connector review;
- prompt/workflow review;
- gate review;
- incident review;
- human-decision-pattern review;
- user feedback;
- performance/usefulness review;
- revalidation rules;
- suspension and reactivation rules;
- retirement criteria;
- retirement impact assessment;
- access removal;
- archive requirements;
- successor rules;
- version and status; and
- approval status.

## 17.26 Gate 17 — Lifecycle Integrity Gate

A Studio may progress beyond Brick 17 only when evidence shows that:

- accountable ownership will continue;
- periodic and event-triggered reviews are defined;
- source, model, tool and connector currency will be reviewed;
- prompts, workflow and gates will be monitored for drift;
- incidents and human overrides feed improvement;
- revalidation rules exist;
- suspension is possible;
- reactivation requires evidence;
- retirement criteria are explicit;
- retired Studios cannot remain operational by accident; and
- records and dependencies will be handled at retirement.

## 17.27 Failure response

If Gate 17 fails, operational approval must not assume indefinite safe operation. Missing ownership, review, suspension or retirement controls must be resolved before final Studio approval.

## 17.28 Human approval point

The accountable owner approves the lifecycle plan. Retirement of consequential Studios may require additional governance, records, privacy, security, regulatory or client authority.

## 17.29 GitHub control record

For Nexus BMG Studios, lifecycle reviews, material revalidations, suspension decisions, retirement decisions and archival references must be preserved in GitHub or another approved controlled system.

## 17.30 Brick 17 completion rule

Brick 17 is complete only when the Studio can answer:

> **Who keeps this Studio trustworthy?**
>
> **How will we know when it has drifted?**
>
> **What events force us to review it?**
>
> **When must we suspend it?**
>
> **How do we retire it without losing accountability?**

---

## Brick 17 core rule

**Approval is a point in time. Trustworthiness must be maintained through time.**
