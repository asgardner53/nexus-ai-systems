# Brick 15 — Release Criteria

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 15
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 15.1 Governing principle

Release is the point at which the Studio's work leaves controlled development and becomes available for reliance, use, publication, submission, filing, communication or action.

Release must therefore be an explicit decision, not an accidental consequence of generation or workflow completion.

The governing question is:

> **Has this output earned the right to leave the Studio?**

An output that is complete, polished or gate-reviewed is not necessarily releasable. Release requires confirmation that all applicable control, authority, evidence and approval conditions are satisfied.

## 15.2 Mandatory build instruction

Every Studio must create a **Release Criteria and Release Control Record** before operational release.

The record must define:

1. which outputs require controlled release;
2. release classes or levels where relevant;
3. mandatory upstream gates;
4. required evidence state;
5. defect thresholds;
6. required human approvals;
7. version and status requirements;
8. source-currency requirements;
9. unresolved-limitation treatment;
10. release destination or channel rules;
11. external-action authority;
12. release metadata;
13. release record requirements;
14. rollback, withdrawal or correction rules;
15. post-release monitoring where required;
16. emergency release rules, if any; and
17. release refusal conditions.

## 15.3 Release-versus-completion rule

The Studio must distinguish between:

- **Generated** — content or analysis exists;
- **Complete for Review** — required work appears present;
- **Gate-Passed** — required internal controls have passed;
- **Approved for Release** — authorised human approval has been obtained where required;
- **Released** — the output has actually been issued, published, submitted, filed, communicated or otherwise placed into operational use.

These states are not interchangeable.

## 15.4 Release-readiness rule

An output is release-ready only when all mandatory release conditions are satisfied.

These conditions may include:

- all required gates passed;
- no unresolved Critical defects;
- no unresolved Major defects unless an approved release rule explicitly permits them;
- evidence sufficient for the intended reliance level;
- controlling sources current where required;
- contradictory evidence appropriately handled;
- limitations visible;
- correct output version identified;
- human approvals complete;
- release destination authorised;
- sensitive information checked;
- metadata complete; and
- withdrawal or correction path defined where relevant.

## 15.5 Mandatory-gate rule

The Release Gate must identify which upstream gates are mandatory for each output type.

A release must not proceed where a mandatory upstream gate is:

- Failed;
- Blocked;
- Escalated and unresolved;
- expired;
- reopened; or
- conditionally passed with an unmet release-blocking condition.

The Studio must not treat overall workflow progress as a substitute for checking the actual gate states.

## 15.6 Evidence-readiness rule

Evidence supporting release must be appropriate to the output's reliance level.

The Studio must verify, where relevant:

- provenance intact;
- evidence identity known;
- material claims traceable;
- source authority appropriate;
- current-source checks complete;
- major evidence gaps resolved or disclosed;
- contradictions addressed; and
- material assumptions visible.

An output may be internally coherent yet still fail release because its evidentiary basis is too weak.

## 15.7 Defect-threshold rule

Every Studio should define which defect severities block release.

A useful default is:

- **Critical** — always blocks release;
- **Major** — blocks release unless a specifically approved exception process permits otherwise;
- **Moderate** — must be corrected, disclosed or expressly accepted depending on the output standard;
- **Minor** — may not block release where substantive quality remains intact.

Release pressure must not silently downgrade defect severity.

## 15.8 Residual-limitation rule

Some outputs may be releasable despite known limitations.

Where this occurs, the Studio must record:

- the limitation;
- why release remains acceptable;
- effect on reliance;
- who accepted the residual risk or limitation;
- any user-facing disclosure required; and
- any review or expiry condition.

A known limitation must not disappear merely because release is approved.

## 15.9 Release-authority rule

Every controlled output must identify who is authorised to approve release.

Release authority may differ from subject-matter review authority.

The Studio should distinguish where relevant between:

- technical reviewer;
- professional decision-maker;
- governance approver;
- publication approver;
- client authority;
- system owner;
- final release authority.

No person or AI component should acquire release authority merely because they produced or reviewed the output.

## 15.10 Human-approval rule

Where human approval is required, the approver must receive enough information to make a meaningful release decision.

The release package should include, where relevant:

- output version;
- release purpose;
- intended audience;
- gate status;
- evidence status;
- unresolved limitations;
- adversarial-review findings;
- accepted exceptions;
- release destination;
- consequence of release; and
- withdrawal path.

## 15.11 Version-lock rule

The version approved for release must be identifiable and locked sufficiently to prevent silent substitution before release.

The Studio must be able to determine:

- which exact version was approved;
- whether any change occurred after approval;
- whether that change required re-approval; and
- which version was actually released.

Approval of version A does not authorise release of version B unless the change is within an explicitly permitted non-material threshold.

## 15.12 Source-currency check rule

Where source currency materially affects correctness, the Release Gate must verify that required source checks remain valid at release time.

If a relevant controlling source changes between drafting and release, the Studio must determine whether affected gates need to be reopened.

## 15.13 Release-destination rule

A valid output may still be released incorrectly if it goes to an unauthorised destination.

The Studio must define where an output may be released, including where relevant:

- internal workspace;
- client;
- regulator;
- publication platform;
- learning management system;
- repository;
- external email;
- public website;
- database;
- third-party system; or
- other controlled destination.

Release to a new audience or destination may change privacy, confidentiality, legal or reputational risk and must be assessed accordingly.

## 15.14 Audience-appropriateness rule

The release form must match the approved audience and reliance level.

The Studio must prevent:

- internal drafts being presented as final external advice;
- provisional findings being presented as formal decisions;
- research hypotheses being presented as established facts;
- assessment-support outputs being presented as formal assessment decisions without authority;
- draft policy text being represented as approved policy; and
- low-reliance outputs being distributed in a way that implies high reliance.

## 15.15 Sensitive-information release rule

Before release, the Studio must check whether the output contains information that should not leave the approved environment or reach the intended audience.

Where relevant, release checks should include:

- personal information;
- sensitive information;
- confidential material;
- client-restricted content;
- student or employee records;
- security information;
- credentials or secrets;
- privileged or legally restricted material; and
- commercially sensitive information.

## 15.16 Citation and attribution release rule

Where citation, attribution or evidence disclosure is required, final release must confirm that citations are:

- present where required;
- accurate;
- attached to the correct claims;
- current where material;
- not fabricated;
- not misleading; and
- compliant with the output standard.

## 15.17 Release-metadata rule

Controlled releases should record sufficient metadata to identify what was released.

This may include:

- output ID;
- Studio ID;
- version;
- release status;
- release date;
- approver;
- release channel;
- intended audience;
- gate summary;
- limitation note;
- expiry or review date; and
- supersession or withdrawal status.

## 15.18 Release-record rule

Material releases must be entered into the Release Register or equivalent controlled record.

The record should allow a reviewer to determine:

- what was released;
- which version;
- under which approval;
- when;
- where;
- with what limitations; and
- whether it remains current.

## 15.19 No auto-release-by-default rule

Generation, completion of a prompt chain or successful internal testing must not automatically trigger external release unless that release path has been explicitly approved.

Where automated release is permitted, the Studio must define:

- exact conditions;
- non-waivable gates;
- failure containment;
- duplicate-action protection;
- release logging;
- monitoring; and
- human override or suspension authority.

## 15.20 Release-refusal rule

The Studio must be capable of refusing release.

Release must be refused where, as applicable:

- mandatory gates have not passed;
- authority is unresolved;
- evidence is materially insufficient;
- critical contradictions remain unresolved;
- required human approval is absent;
- the output version is uncertain;
- sensitive information would be inappropriately disclosed;
- the destination is unauthorised;
- a Critical defect remains open;
- required testing is incomplete; or
- the output is outside approved scope.

Release refusal is a successful control outcome.

## 15.21 Conditional-release rule

Conditional release should be used only where the Studio's approved rules explicitly permit it.

A conditional release must record:

- condition;
- reason release remains acceptable;
- limitation on use;
- owner;
- expiry or resolution date;
- downstream restrictions; and
- whether wider distribution is prohibited.

Conditional release must not be used to bypass mandatory controls.

## 15.22 Emergency-release rule

If a Studio permits emergency release, the conditions must be narrowly defined.

The emergency record should identify:

- reason for urgency;
- consequence of delay;
- minimum gates completed;
- approvals obtained;
- known limitations;
- temporary controls;
- audience restrictions;
- expiry or replacement requirement; and
- mandatory retrospective review.

Urgency does not create authority.

## 15.23 Withdrawal rule

Every material release should have a withdrawal path where withdrawal is possible and relevant.

Withdrawal may be required because of:

- material error;
- new controlling authority;
- privacy breach;
- evidence integrity failure;
- supersession;
- safety issue;
- unauthorised release;
- legal or regulatory change; or
- post-release incident.

The withdrawal process should identify who may initiate withdrawal, who must be notified, and how the released status is changed.

## 15.24 Correction rule

The Studio must distinguish correction from silent replacement.

Where a released output is corrected, the Studio should record:

- original release;
- identified defect;
- corrected version;
- reason for correction;
- approval of correction;
- affected audience;
- notification requirement; and
- whether the original remains accessible for audit.

## 15.25 Supersession rule

Where a release is replaced by a newer approved version, the old release must be marked superseded where feasible.

The Studio must be able to tell users which version is current.

## 15.26 Post-release monitoring rule

Some outputs require monitoring after release.

Monitoring may be appropriate where:

- the environment changes rapidly;
- the output remains relied upon over time;
- source changes could invalidate it;
- user feedback may reveal defects;
- model or workflow behaviour needs observation; or
- consequences of error are material.

Monitoring should define triggers for correction, withdrawal, review or revalidation.

## 15.27 Release-expiry rule

Where an output should not remain current indefinitely, the Studio must define an expiry or review date.

Expiry may depend on:

- regulation;
- source version;
- policy cycle;
- market conditions;
- licence or qualification validity;
- system configuration;
- evidence freshness; or
- organisational review cadence.

An expired release must not continue to present itself as current without revalidation.

## 15.28 Required artefact — Release Criteria and Release Control Record

Before Brick 15 can pass, every Studio must produce a controlled record containing at least:

- controlled output types;
- release classes where relevant;
- mandatory upstream gates;
- evidence-readiness criteria;
- defect thresholds;
- limitation and residual-risk rules;
- release authority;
- human approval requirements;
- version-lock rules;
- source-currency checks;
- destination rules;
- audience rules;
- sensitive-information checks;
- citation and attribution checks;
- release metadata;
- release-register requirements;
- automated-release rules where applicable;
- release-refusal rules;
- conditional-release rules;
- emergency-release rules;
- withdrawal and correction procedures;
- supersession rules;
- post-release monitoring;
- expiry or review rules;
- accountable owner;
- version and status; and
- approval status.

## 15.29 Gate 15 — Release Readiness Gate

A Studio output may be released only when the following questions can be answered **Yes** with evidence:

- Have all mandatory upstream gates passed?
- Is the evidence sufficient for the intended reliance level?
- Are controlling sources sufficiently current?
- Are Critical defects closed?
- Are Major defects resolved or handled under an explicitly approved exception rule?
- Are material contradictions resolved, disclosed or escalated appropriately?
- Are limitations visible?
- Is the exact approved version identified?
- Has required human approval occurred?
- Is the release destination authorised?
- Is the intended audience appropriate?
- Has sensitive information been checked?
- Are required citations or attributions valid?
- Is release metadata complete?
- Is the Release Register ready to capture the event?
- Is a withdrawal or correction path available where relevant?
- Are expiry or monitoring rules defined where needed?

If any mandatory answer is **No**, release is blocked.

## 15.30 Evidence required to pass

Gate 15 requires:

- completed Release Criteria and Release Control Record;
- release-readiness checklist or equivalent gate record;
- upstream gate-status evidence;
- approved output version;
- required human approval;
- destination and audience confirmation;
- evidence and source-currency confirmation where relevant;
- defect and limitation status; and
- release-register entry or prepared release record.

For consequential outputs, the release decision must be independently reconstructable from the retained records.

## 15.31 Failure response

If Gate 15 fails:

- the output must remain unreleased;
- the current status must accurately reflect the reason;
- missing evidence, approvals or checks must be completed;
- upstream gates must be reopened where the failure reveals an upstream defect;
- unauthorised destinations must be removed;
- sensitive-information issues must be corrected;
- ambiguous versions must be resolved; and
- the release decision must be reassessed after correction.

The Studio must never use urgency, inconvenience, sunk effort or stakeholder pressure as evidence that release criteria have been met.

## 15.32 Human approval point

The accountable release authority must approve release where required by the Studio's decision-rights model.

Where the output is regulated, professional, public-facing, legally sensitive, privacy-sensitive, safety-critical, assessment-related, financially consequential or otherwise high reliance, the relevant authorised role must approve the release threshold and release decision.

Any material change to release criteria, defect thresholds, release authority, destination rules or automated-release logic requires reassessment of Brick 15 and affected earlier bricks.

## 15.33 GitHub control record

For Nexus BMG Studios, release criteria, release gate records, approved output references, release decisions and material corrections or withdrawals must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record should preserve:

- output ID and version;
- gate status;
- approval;
- release date;
- destination;
- limitation status;
- supersession or withdrawal status; and
- links to corrective history where applicable.

Sensitive outputs may be stored elsewhere, with GitHub retaining the controlled release reference rather than the protected content.

## 15.34 Brick 15 completion rule

Brick 15 is complete only when the Studio can answer six questions before any material release:

> **Has the work passed every gate that matters?**
>
> **Is the evidence strong enough for the way people will rely on it?**
>
> **Is this the exact version that was approved?**
>
> **Does the authorised person agree it may leave the Studio?**
>
> **Is it going to the right audience and destination?**
>
> **Can we correct, withdraw or supersede it if something later proves wrong?**

If any required answer is no, the output has not earned release.

---

## Brick 15 core rule

**Release is not the end of production. It is a separate act of trust and authority.**
