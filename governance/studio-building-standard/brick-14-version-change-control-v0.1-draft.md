# Brick 14 — Version and Change Control

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 14
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 14.1 Governing principle

A Studio must remain controlled as it changes.

Change is inevitable. Sources are updated, regulations move, models change, prompts improve, connectors are added, workflows evolve, users discover new needs and defects are corrected. The risk is not change itself. The risk is **uncontrolled change that silently alters the Studio's behaviour, authority or reliability**.

The governing question is:

> **What changed, why did it change, who approved it, what else did it affect, and what must be revalidated before the new version is trusted?**

## 14.2 Mandatory build instruction

Every Studio must create a **Version and Change Control Record** before operational release.

The record must define:

1. controlled components;
2. versioning method;
3. change classifications;
4. change initiation process;
5. impact assessment requirements;
6. approval authority;
7. testing and regression requirements;
8. gate re-entry rules;
9. documentation-update requirements;
10. deployment or implementation rules;
11. rollback requirements;
12. supersession rules;
13. affected-output review;
14. stakeholder notification rules;
15. emergency-change rules;
16. post-change review; and
17. archival requirements.

## 14.3 Controlled-component rule

The Studio must identify which components are subject to formal change control.

These may include:

- purpose and authority records;
- source hierarchy;
- scope and prohibited-use rules;
- output standards;
- gate criteria;
- evidence architecture;
- research protocol;
- workflow architecture;
- human decision rights;
- registers and control records;
- prompts;
- templates;
- models or model configurations;
- connectors;
- permissions;
- automation logic;
- testing packs;
- release criteria; and
- governance classifications.

Not every minor edit requires the same level of control, but every component capable of altering Studio behaviour must be identifiable.

## 14.4 Versioning rule

Material controlled artefacts must use a clear versioning method.

The Studio should distinguish between:

- **major change** — materially changes purpose, authority, decision behaviour, control logic, user reliance or risk;
- **minor change** — changes functionality or control detail without fundamentally changing purpose or authority;
- **patch or editorial change** — corrects wording, formatting or low-impact defects without materially changing behaviour.

The exact numbering convention may vary, but the change category must be clear.

## 14.5 Change-classification rule

Every proposed change must be classified before implementation.

A useful minimum classification is:

| Change type | Typical example | Minimum response |
|---|---|---|
| **Editorial** | spelling, formatting, non-substantive clarification | lightweight review |
| **Minor functional** | improved prompt wording, added report field, workflow refinement | targeted testing and approval |
| **Material** | changed gate, source rule, authority boundary, workflow decision, connector permission | impact assessment, affected-gate re-entry, approval and regression testing |
| **Critical** | change required because current behaviour is unsafe, unlawful, materially misleading or broken | immediate containment, controlled emergency change, full post-change review |

The Studio must not deliberately label a material change as minor to avoid governance requirements.

## 14.6 Change-request rule

Material changes must begin with a defined change request or equivalent record.

The record should identify:

- change ID;
- component affected;
- proposed change;
- reason;
- originating issue, incident, request or requirement;
- expected benefit;
- known risks;
- proposed owner;
- urgency; and
- provisional classification.

## 14.7 Impact-assessment rule

Before a material change is approved, the Studio must assess what else may be affected.

The impact assessment should consider:

- purpose;
- AI authority;
- human decision rights;
- source hierarchy;
- scope and boundaries;
- evidence requirements;
- gates;
- workflow;
- prompts;
- tools and connectors;
- data handling;
- security or privacy;
- testing;
- output standards;
- prior approvals;
- released outputs; and
- dependent Studios or systems.

A local change must not be assumed to have only local consequences.

## 14.8 Upstream and downstream impact rule

Change assessment must consider both directions.

An upstream change may invalidate downstream controls. A downstream defect may reveal that an upstream design assumption is wrong.

For example:

- a new controlling source may require changes to research, evidence, gate criteria and outputs;
- a new connector may require scope, privacy, workflow and authority review;
- a changed prompt may alter gate results or release quality;
- a changed user role may affect delegation and access controls.

## 14.9 Gate-reentry rule

A material change must identify which earlier gates must be reopened.

Examples include:

- purpose or authority change → Gate 2;
- source hierarchy change → Gate 3;
- scope expansion → Gate 4;
- output-standard change → Gate 5;
- gate logic change → Gate 6;
- evidence-rule change → Gate 7;
- research-rule change → Gate 8;
- workflow change → Gate 9;
- human authority change → Gate 10;
- register architecture change → Gate 11;
- prompt change → Gate 12;
- adversarial-review change → Gate 13.

A change is not complete until all affected gates have been revalidated.

## 14.10 Testing and regression rule

Material changes must be tested against both the new requirement and previously working behaviour.

Testing should include:

- new functionality;
- affected controls;
- known edge cases;
- prior failure cases;
- security or privacy behaviour where relevant;
- gate behaviour;
- human decision paths;
- output quality; and
- regression against representative previously passing cases.

A change that fixes one defect but weakens another control has not passed change control.

## 14.11 Model-change rule

A change in AI model, model version, configuration or reasoning mode must be treated as potentially material where it can affect output behaviour.

The Studio should assess whether the change affects:

- instruction-following;
- source use;
- hallucination rate;
- formatting;
- tool use;
- classification behaviour;
- gate assessment;
- boundary enforcement;
- refusal behaviour;
- latency or cost where operationally material; and
- consistency with prior testing.

Model upgrades must not be assumed automatically compatible with previously approved prompts and gates.

## 14.12 Connector-change rule

Changes to connectors, APIs, permissions or external integrations require explicit review.

The Studio must assess:

- new data access;
- changed write permissions;
- changed authentication;
- changed external action capability;
- changed error behaviour;
- changed data retention;
- security implications;
- privacy implications; and
- workflow dependencies.

## 14.13 Source-change rule

When a controlling or authoritative source changes, the Studio must determine whether the change affects:

- existing requirements;
- current evidence;
- prior conclusions;
- gate criteria;
- templates;
- prompts;
- workflows;
- released outputs; and
- user guidance.

Source updates must not be treated as mere reference maintenance where they alter Studio behaviour.

## 14.14 Prompt-change rule

Prompt changes must be assessed for semantic effect, not only wording difference.

A seemingly small wording change may materially alter:

- confidence;
- evidence handling;
- tool selection;
- escalation;
- gate behaviour;
- output structure;
- safety boundaries; or
- human review requirements.

Material prompt changes must follow Brick 12 regression requirements.

## 14.15 Workflow-change rule

Changes to workflow order, branching, automation, gates or hand-offs must be assessed as system changes.

The Studio must verify that:

- mandatory controls still occur;
- new bypass paths were not introduced;
- backward movement still works;
- human approval remains meaningful;
- release logic remains valid; and
- audit events remain traceable.

## 14.16 Authority-change rule

Any expansion in AI authority, user authority, connector permission or release authority is a material change.

Such changes must not be introduced merely through prompt wording, user instruction, new credentials or tool availability.

They require explicit approval and re-entry to affected authority, boundary and human-decision gates.

## 14.17 Change-approval rule

Change approval must match the consequence of the change.

Editorial changes may be approved by the document or Studio owner. Material changes affecting professional, regulatory, privacy, security, financial, assessment or other consequential controls may require additional authorised approval.

The person proposing a material change should not automatically be the sole approver where independent review is warranted.

## 14.18 Branch-and-review rule

Where practical, material changes should be developed away from the approved production version.

For GitHub-controlled Studios, this may include:

- feature or change branch;
- commit history;
- pull request;
- review comments;
- test evidence;
- approval before merge; and
- tagged or otherwise identifiable approved version.

Development convenience must not overwrite the authoritative operational version prematurely.

## 14.19 Deployment rule

Approval of a change and deployment of a change are distinct events.

The Studio must define:

- when the change becomes effective;
- what version becomes authoritative;
- whether users require notice;
- whether migration is required;
- whether old work items remain on the old version or move to the new version; and
- how deployment is verified.

## 14.20 Effective-date rule

Material changes should have an effective date or activation event.

The Studio must be able to determine which version governed a work item at the time it was processed.

This is critical where regulations, evidence standards, prompts or decision rights change over time.

## 14.21 In-flight-work rule

The Studio must define how changes affect work already in progress.

Possible rules include:

- finish under the original approved version;
- migrate to the new version;
- reassess affected gates;
- restart the affected stage; or
- suspend pending human review.

The chosen rule should depend on consequence and materiality.

## 14.22 Prior-output impact rule

A change may affect outputs already released.

The Studio must assess whether prior outputs remain valid where the change corrects or alters:

- controlling authority;
- evidence interpretation;
- calculation logic;
- gate criteria;
- material prompt behaviour;
- regulatory requirements;
- safety controls; or
- release conditions.

Where prior outputs may be materially wrong, the Studio must consider correction, withdrawal, notification or revalidation.

## 14.23 Rollback rule

Material operational changes must have a rollback or containment strategy where rollback is technically and operationally possible.

Rollback planning should identify:

- prior approved version;
- trigger for rollback;
- authority to initiate rollback;
- data or state compatibility;
- user notification; and
- post-rollback review.

Where rollback is impossible, the change should have stronger pre-deployment assurance and containment controls.

## 14.24 Emergency-change rule

Urgent correction may sometimes be required before the normal change cycle can be completed.

Emergency change must still be controlled.

The record should include:

- reason for urgency;
- risk of not changing;
- minimum approval obtained;
- temporary controls;
- testing completed;
- effective period;
- follow-up review deadline; and
- requirement to complete full retrospective change control.

Emergency does not mean undocumented.

## 14.25 Hotfix rule

A hotfix intended to correct a specific defect must remain narrowly scoped unless broader change is separately approved.

The Studio must verify that the hotfix:

- corrects the identified issue;
- does not weaken unrelated controls;
- is regression tested proportionately; and
- is incorporated into the next controlled version.

## 14.26 Post-change review rule

Material changes should be reviewed after implementation.

The review should consider:

- whether the intended outcome was achieved;
- unexpected behaviour;
- human rejection or override patterns;
- gate failures;
- incidents;
- output quality;
- user confusion;
- connector or tool errors; and
- whether rollback or further change is required.

## 14.27 Change-drift rule

A Studio must not accumulate numerous minor changes that collectively create a major change without formal reassessment.

Periodic review should ask whether incremental edits have altered:

- purpose;
- authority;
- reliance level;
- control architecture;
- user behaviour;
- risk; or
- operating model.

Cumulative drift must be treated as a material change when the overall effect becomes material.

## 14.28 Change-freeze rule

Where appropriate, a Studio may enter a controlled change freeze during:

- formal audit;
- critical production period;
- regulated review;
- major release;
- incident investigation; or
- evidence preservation period.

Emergency changes may still be permitted under the emergency-change process.

## 14.29 Supersession and archival rule

Superseded Studio versions must remain identifiable.

The archive should preserve, as appropriate:

- prior version;
- effective dates;
- approval status;
- change summary;
- migration notes;
- known limitations; and
- relationship to later versions.

Historical versions must not be confused with currently approved versions.

## 14.30 Required artefact — Version and Change Control Record

Before Brick 14 can pass, every Studio must produce a controlled record containing at least:

- controlled-component inventory;
- versioning method;
- change categories;
- change-request fields;
- impact-assessment method;
- approval authority;
- gate-reentry rules;
- testing and regression rules;
- model-change rules;
- connector-change rules;
- source-change rules;
- prompt-change rules;
- workflow-change rules;
- authority-change rules;
- branch and review process where applicable;
- deployment and effective-date rules;
- in-flight-work rules;
- prior-output impact assessment;
- rollback rules;
- emergency-change process;
- post-change review;
- cumulative-drift review;
- supersession and archival rules;
- accountable owner;
- version and status; and
- approval status.

## 14.31 Gate 14 — Change Integrity Gate

A Studio may progress beyond Brick 14 only when the following questions can be answered **Yes** with evidence:

- Are controlled components identified?
- Are change types classified consistently?
- Do material changes have a formal change record?
- Is impact assessed beyond the component being edited?
- Are affected earlier gates reopened where required?
- Are regression tests defined?
- Are model changes treated as potentially behavioural changes?
- Are connector and permission changes explicitly controlled?
- Are source changes assessed for downstream impact?
- Are authority expansions treated as material changes?
- Is approval authority proportionate to consequence?
- Can development occur without prematurely replacing the approved version?
- Is deployment distinct from approval?
- Can the Studio determine which version governed a historical work item?
- Is in-flight work handled explicitly?
- Are prior released outputs assessed when a material defect is discovered?
- Is rollback or containment defined where relevant?
- Are emergency changes controlled and retrospectively reviewed?
- Is cumulative change drift detectable?
- Are superseded versions recoverable?

If any material answer is **No**, the change-control architecture is incomplete.

## 14.32 Evidence required to pass

Gate 14 requires:

- the completed Version and Change Control Record;
- one representative editorial change;
- one representative material change;
- a completed impact assessment;
- evidence of gate re-entry for a simulated material change;
- regression test evidence;
- an example of deployment or version activation;
- a rollback or containment scenario where relevant; and
- an example of prior-output impact assessment.

For consequential Studios, the reviewer must be able to reconstruct why a changed version was approved and what was revalidated.

## 14.33 Failure response

If Gate 14 fails:

- material changes must not be treated as approved operational changes;
- affected components must remain on the prior approved version where safe to do so;
- missing impact assessment must be completed;
- affected gates must be reopened;
- regression testing must be completed;
- ambiguous version status must be corrected;
- unauthorised authority or permission expansion must be reversed or suspended; and
- prior outputs must be reviewed where the change exposes a material historical defect.

A Studio that cannot explain how it changed cannot prove that it remains the Studio that was approved.

## 14.34 Human approval point

The accountable owner must approve the Version and Change Control Record before operational release.

Material changes affecting regulated, professional, privacy, security, assessment, financial, safety-critical or other consequential functions require approval from the relevant authorised role where applicable.

Any future material change to the change-control process itself must be governed through the process it replaces or through an explicitly authorised transitional decision.

## 14.35 GitHub control record

For Nexus BMG Studios, GitHub should preserve the technical and governance history of material changes through appropriate use of:

- branches;
- commits;
- pull requests;
- review history;
- controlled files;
- release or version markers;
- change records; and
- links to test evidence.

GitHub history must support, rather than replace, the formal change register and approval record.

## 14.36 Brick 14 completion rule

Brick 14 is complete only when the Studio can answer six questions about any material change:

> **What changed?**
>
> **Why did it change?**
>
> **Who approved it?**
>
> **What else could the change affect?**
>
> **What was re-tested or re-approved?**
>
> **Which version is authoritative now?**

If those answers cannot be reconstructed, the change is not controlled.

---

## Brick 14 core rule

**A controlled Studio must be able to change without losing the evidence that it is still trustworthy.**
