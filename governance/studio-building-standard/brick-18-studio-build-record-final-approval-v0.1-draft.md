# Brick 18 — Studio Build Record and Final Approval

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 18
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 18.1 Governing principle

A Studio is not built merely because its components exist.

It becomes an approved Studio only when the complete architecture has been assembled, tested, reviewed, documented and formally accepted by the accountable authority.

The governing question is:

> **Can we prove that this Studio was deliberately built, independently challenged and consciously approved for its intended use?**

## 18.2 Mandatory build instruction

Every new Studio must complete a **Studio Build Record and Final Approval Record** before being represented as operationally approved.

This record is the authoritative summary of how the Studio was built through the Nexus Studio Building Standard.

## 18.3 Self-application rule

No Studio is considered built until it has itself been built through the Studio Building Standard.

The depth of application may be proportionate to consequence, but no brick may be silently ignored.

Each brick must be marked as:

- Applicable — Passed;
- Applicable — Conditional;
- Applicable — Failed;
- Not Applicable — Justified; or
- Not Yet Assessed.

"Not Applicable" requires rationale.

## 18.4 Build-record rule

The Studio Build Record must preserve, at minimum:

- Studio name and identifier;
- owner;
- purpose;
- intended users;
- intended outcome;
- reliance level;
- governance classification;
- authoritative repository or system;
- version;
- build commencement date;
- build completion date;
- each brick status;
- each gate status;
- required artefacts;
- unresolved limitations;
- approved exceptions;
- test summary;
- adversarial-review summary;
- final approval decision; and
- lifecycle review date.

## 18.5 Brick-evidence rule

A brick must not be marked Passed merely because its document exists.

The Build Record must point to evidence that the brick's required artefact and gate criteria have actually been satisfied.

## 18.6 Gate-summary rule

The final Build Record must provide a consolidated view of all Studio gates.

For each gate it should identify:

- gate ID and name;
- current status;
- decision date;
- evidence reference;
- decision owner;
- conditions or limitations; and
- whether revalidation is due.

## 18.7 Architecture-coherence rule

Final approval must test the Studio as a system, not merely as eighteen separate bricks.

The reviewer must determine whether:

- purpose matches outputs;
- source hierarchy supports evidence requirements;
- boundaries match authority;
- gates match material risks;
- evidence supports gate decisions;
- research supports conclusions;
- workflow enforces gates;
- human decision rights match consequence;
- registers preserve material history;
- prompts implement rather than override controls;
- adversarial review can change outcomes;
- change control protects the architecture;
- release criteria match reliance;
- tests prove failure behaviour; and
- lifecycle controls preserve trust after approval.

## 18.8 Cross-brick contradiction rule

The final review must search for contradictions between bricks.

Examples include:

- prompt grants authority Brick 10 reserves to humans;
- workflow bypasses a mandatory gate;
- release criteria allow a defect Brick 5 defines as release-blocking;
- connector permissions exceed Brick 4 boundaries;
- source hierarchy conflicts with research protocol;
- retention rules conflict with privacy restrictions; or
- test cases do not reflect actual release conditions.

A Studio with individually sound controls but contradictory architecture must not pass final approval.

## 18.9 Traceability rule

The final Build Record must permit an authorised reviewer to trace:

**Purpose → Authority → Sources → Boundaries → Output Standard → Gates → Evidence → Research → Workflow → Human Decisions → Records → Prompts → Adversarial Review → Change Control → Release → Testing → Lifecycle → Final Approval**

## 18.10 Open-issue rule

All open Critical and Major build issues must be resolved before final approval unless an explicitly authorised exception framework permits otherwise.

Moderate or Minor issues may remain only where their effect and treatment are documented and acceptable for the reliance level.

## 18.11 Exception rule

Final approval must list every active exception, waiver or conditional approval.

No exception may remain hidden in chat history, meeting notes or informal understanding.

## 18.12 Residual-risk rule

The final approver must be shown material residual risks and limitations.

Approval means conscious acceptance within authority, not absence of all risk.

## 18.13 Independent-review rule

Where consequence justifies it, final approval should include review by someone other than the principal Studio builder.

The independent reviewer should challenge architecture coherence, evidence, test sufficiency, authority boundaries and unresolved limitations.

## 18.14 Build-completion statuses

A Studio should use controlled build statuses such as:

- Concept;
- In Build;
- Under Test;
- Under Final Review;
- Conditionally Approved;
- Approved;
- Suspended;
- Retired.

Only a Studio that has passed the required final approval may use **Approved**.

## 18.15 Conditional-approval rule

Conditional approval may be used only where:

- the remaining condition is explicit;
- the condition does not invalidate a non-waivable control;
- permitted use is bounded;
- expiry is defined;
- owner is identified; and
- full approval requires evidence that the condition has been closed.

## 18.16 Approval-authority rule

The final approval authority must be identified before approval occurs.

The authority must be appropriate to the Studio's purpose, reliance and consequence.

A builder cannot self-create approval authority merely by completing the Standard.

## 18.17 Final-approval decision rule

The final approver must choose an explicit decision:

- **Approved**;
- **Conditionally Approved**;
- **Returned for Correction**;
- **Suspended Pending Evidence**; or
- **Not Approved**.

Silence, continued use or technical deployment does not constitute approval.

## 18.18 Operational-baseline rule

On approval, the Studio must establish an identifiable operational baseline containing the approved versions of material components.

The baseline should allow future reviewers to determine what exactly was approved.

## 18.19 Approval-effective-date rule

Final approval must have an effective date and, where relevant, a review or expiry date.

The Studio must not represent itself as approved before the effective date or after expiry without revalidation.

## 18.20 Deployment-versus-approval rule

Technical deployment and governance approval are separate events.

A deployed Studio may remain unapproved. An approved Studio may not yet be deployed.

Operational status must reflect both accurately.

## 18.21 Studio-register rule

Following final approval, the Studio Register must be updated with:

- Studio identifier;
- approved name;
- owner;
- classification;
- approved version;
- status;
- effective date;
- review date;
- authoritative location; and
- final approval reference.

## 18.22 Controlled-document rule

Material approved Studio documents must be entered into or reconciled with the Controlled Document Register where required.

Drafts must remain distinguishable from approved artefacts.

## 18.23 Change-register rule

The final approval decision itself is a material governance decision and must be recorded in the Decision and Change Register or equivalent controlled record.

## 18.24 Post-approval rule

After approval, all material changes are governed by Brick 14 and all continued operation by Brick 17.

Final approval does not freeze the Studio forever, but it establishes the baseline from which controlled change occurs.

## 18.25 Required artefact — Studio Build Record and Final Approval Record

The record must contain at least:

- Studio identity;
- owner and approval authority;
- purpose and intended outcome;
- users and reliance level;
- governance classification;
- authoritative location;
- complete Brick 1–18 status table;
- complete Gate 1–18 status table where applicable;
- artefact references;
- cross-brick coherence review;
- contradiction review;
- test summary;
- adversarial-review summary;
- open defects;
- exceptions and waivers;
- residual risks;
- independent-review result where required;
- operational baseline;
- final decision;
- effective date;
- next review date;
- approver name or authorised role;
- approval record reference; and
- version and status.

## 18.26 Gate 18 — Final Studio Approval Gate

A Studio may be marked **Approved** only when evidence shows that:

- all eighteen bricks have been assessed;
- all applicable mandatory gates have passed;
- any Not Applicable determination is justified;
- required artefacts exist and are controlled;
- the architecture is coherent across bricks;
- material cross-brick contradictions are resolved;
- testing demonstrates normal and failure behaviour;
- adversarial review has been completed where required;
- Critical defects are closed;
- Major defects are closed or handled under an explicitly authorised exception rule;
- human decision rights are clear;
- release criteria are operational;
- lifecycle controls exist;
- residual risks are visible;
- the exact operational baseline is identifiable; and
- the authorised approver has made an explicit final decision.

If any non-waivable condition is unmet, the Studio cannot be marked Approved.

## 18.27 Evidence required to pass

Gate 18 requires the completed Build Record, all applicable brick artefacts, consolidated gate evidence, test results, adversarial-review evidence, open-issue status, final architecture review, approval decision and operational baseline.

For consequential Studios, an independent reviewer should be able to reconstruct the approval basis without relying on the builder's memory or chat history.

## 18.28 Failure response

If Gate 18 fails:

- the Studio remains In Build, Under Test, Under Final Review or another accurate non-approved status;
- failed or incomplete bricks return to their required stage;
- cross-brick contradictions are resolved;
- missing evidence is obtained;
- tests are rerun where necessary;
- affected gates are re-assessed; and
- final approval is attempted again only after the failure basis is addressed.

The correct outcome may be **do not approve the Studio**.

## 18.29 Human approval point

Final Studio approval is a human governance decision.

AI may assemble the Build Record, test evidence, challenge architecture, identify defects and recommend a decision. It must not represent the Studio as finally approved unless the authorised human or governing body has made that decision.

## 18.30 GitHub control record

For Nexus BMG Studios, the Studio Build Record, final approval record, operational baseline reference and related register updates must be retained in the authoritative GitHub repository or another specifically approved controlled system.

Approval must be distinguishable from drafting and development history.

## 18.31 Brick 18 completion rule

Brick 18 is complete only when the final approver can answer:

> **Do I understand what this Studio is intended to do?**
>
> **Do I know what it is not allowed to do?**
>
> **Can I see the evidence that its controls actually work?**
>
> **Can I see its unresolved limitations and residual risks?**
>
> **Can I identify exactly which version I am approving?**
>
> **Am I prepared to put my authority behind its use?**

Only then may the Studio move to **Approved**.

---

## Brick 18 core rule

**A Studio is not approved because it exists. It is approved because an authorised human can see the evidence, understand the residual risk and deliberately accept responsibility for its use.**
