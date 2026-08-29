# Remediation 04 — Cross-Cutting Assurance Review

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** Whole-Standard Forensic Integrity Review v0.1
- **Findings addressed:** 5, with partial support for Findings 6, 7 and 13
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

This remediation creates a mandatory **Cross-Cutting Assurance Review** that sits across the eighteen-brick architecture without creating a nineteenth brick.

Its purpose is to prove that material legal, regulatory, privacy, security, safety, fairness, intellectual-property, records, professional-responsibility, dependency and continuity risks have been considered coherently across the Studio rather than appearing only as scattered local controls.

The governing rule is:

> **A Studio may have strong individual controls and still be unsafe if cross-cutting obligations fall between them.**

## 2. Cross-cutting assurance domains

Every Studio must assess the applicability of the following assurance domains:

1. **Legal and regulatory**
2. **Privacy and confidentiality**
3. **Information security**
4. **Safety and harm prevention**
5. **Fairness, discrimination and accessibility**
6. **Intellectual property, copyright and licensing**
7. **Records, retention and evidentiary obligations**
8. **Professional and ethical responsibility**
9. **Third-party, model, vendor and connector dependency**
10. **Business continuity, resilience and recoverability**
11. **Operator competence and authorised-use readiness**
12. **Data residency and jurisdiction**, where material

A domain may be marked **Not Applicable** only with a recorded rationale.

## 3. Cross-cutting review principle

The review is not a substitute for the relevant bricks. It verifies that the controls created by those bricks work together.

For each applicable domain, the reviewer must identify:

- relevant obligations or risks;
- affected bricks;
- controls already present;
- gaps or contradictions;
- required specialist review;
- residual risk;
- responsible owner; and
- evidence supporting closure.

## 4. Legal and regulatory assurance

The Studio must identify whether its purpose, outputs, decisions, data handling or external actions are subject to legal, regulatory, contractual or formal governance requirements.

The review should test whether:

- controlling authority is correctly identified under Brick 3;
- scope and prohibited uses reflect legal limits under Brick 4;
- output claims do not overstate legal or regulatory status under Brick 5;
- human-reserved legal or regulatory decisions are protected under Brick 10;
- relevant records are preserved under Brick 11;
- release language does not imply external approval that does not exist under Brick 15; and
- change in controlling authority triggers Brick 14 revalidation.

## 5. Privacy and confidentiality assurance

The Studio must determine what personal, sensitive, confidential, privileged, client-restricted, employee, student or other protected information it may access or produce.

The review must consider:

- purpose limitation;
- data minimisation;
- user and role access;
- approved storage location;
- connector access;
- disclosure boundaries;
- retention and deletion;
- use in prompts or external services;
- release destination;
- incident response; and
- whether provenance can be preserved through metadata or secure reference rather than unnecessary copying.

### Privacy–provenance precedence rule

Where auditability and data minimisation appear to conflict, the Studio should preserve the minimum information required to demonstrate provenance and authority.

Underlying sensitive content should remain in an approved secure location where duplication is unnecessary or impermissible.

Legal, regulatory or contractual retention requirements take precedence over convenience. Beyond those requirements, data minimisation governs.

## 6. Information-security assurance

The review must consider, where applicable:

- authentication;
- authorisation;
- least privilege;
- read versus write permissions;
- credential and secret handling;
- prompt injection and hostile content;
- connector trust boundaries;
- logging;
- unauthorised disclosure;
- data alteration;
- availability;
- rollback or containment; and
- incident escalation.

Security assurance should be proportionate to the Studio Assurance Tier.

Tier 3 and Tier 4 Studios should normally require specialist security review where external integrations, sensitive data or consequential actions are involved.

## 7. Safety and harm-prevention assurance

Where Studio error could produce physical, psychological, operational, professional, financial or other material harm, the review must assess:

- plausible harm scenarios;
- affected persons or systems;
- reversibility;
- human decision points;
- fail-safe behaviour;
- prohibited actions;
- escalation triggers;
- monitoring; and
- suspension criteria.

A Studio must not rely on generic caution language where a concrete safety control is required.

## 8. Fairness, discrimination and accessibility assurance

Where the Studio affects people, opportunities, rights, assessment, employment, access, ranking, classification or service delivery, the review must consider whether the Studio could create or amplify unfair treatment.

The review should assess, where relevant:

- biased or unrepresentative evidence;
- inappropriate proxy variables;
- differential error rates;
- accessibility barriers;
- cultural or language limitations;
- discriminatory recommendations;
- historical bias in organisational data;
- whether human review can challenge unfair outcomes; and
- whether affected users have an appropriate correction or review path.

Fairness review does not require pretending all groups or cases are identical. It requires evidence that material differential treatment is justified rather than accidental, hidden or discriminatory.

## 9. Intellectual-property, copyright and licensing assurance

The Studio must identify whether its sources, inputs, outputs, templates, images, datasets, software, models or generated material are subject to ownership, licensing, copyright, attribution or permitted-use restrictions.

The review must consider:

- whether third-party content may be used for the intended purpose;
- whether content may be reproduced, transformed or published;
- attribution requirements;
- licence restrictions;
- confidential ownership;
- client ownership;
- open-source licence obligations where software is used;
- reuse of prior Studio outputs;
- training or model-input restrictions where contractually relevant; and
- whether release creates new IP or licensing obligations.

### Brick integration

IP/licensing controls must be reflected, where applicable, in:

- Brick 3 source status and permitted source use;
- Brick 4 scope and prohibited-use rules;
- Brick 7 provenance;
- Brick 11 records;
- Brick 12 prompt/tool use; and
- Brick 15 release checks.

## 10. Records and evidentiary assurance

The review must verify that retention, deletion, privacy and auditability rules do not contradict each other.

It should confirm:

- what must be retained;
- why;
- for how long;
- where;
- who may access it;
- what may be deleted;
- how superseded versions are preserved; and
- how a consequential decision can be reconstructed without retaining unnecessary sensitive content.

## 11. Professional and ethical responsibility assurance

Where professional judgement or ethical obligations apply, the review must identify:

- applicable professional standards;
- decisions reserved to qualified persons;
- competence requirements;
- conflicts of interest;
- duty to disclose limitations;
- duty to preserve evidence integrity;
- review or supervision requirements; and
- whether the Studio could cause a user to exceed their own professional authority.

The Studio must not create the appearance of professional authority where the authorised professional has not exercised judgement.

## 12. Third-party and dependency assurance

The Studio must identify critical dependence on:

- AI models;
- vendors;
- APIs;
- connectors;
- data providers;
- external repositories;
- authentication providers;
- hosting platforms;
- upstream Studios; and
- specialist human roles.

For each material dependency, the review should consider:

- failure impact;
- availability risk;
- changed behaviour;
- data handling;
- contract or licence constraints;
- vendor lock-in;
- version change;
- fallback or substitution; and
- monitoring requirements.

## 13. Business-continuity and resilience assurance

Where Studio unavailability or failure could materially disrupt operations, the review must consider:

- critical functions;
- acceptable downtime;
- manual fallback;
- data recovery;
- configuration recovery;
- rollback;
- alternate tools or models;
- access to authoritative records during outage;
- suspension criteria; and
- controlled restart.

Continuity requirements must rise with assurance tier and operational dependency.

## 14. Operator competence and authorised-use readiness

A Studio may be well designed and still unsafe in the hands of an unprepared operator.

The review must determine whether intended users require defined competence, onboarding or authorisation.

Where applicable, the Studio must define:

- prerequisite role or qualification;
- required training;
- Studio-specific onboarding;
- understanding of reliance limits;
- ability to interpret outputs;
- ability to recognise escalation conditions;
- approval or certification of authorised users;
- retraining triggers; and
- access removal when competence or authority lapses.

### Brick integration

Operator competence must inform:

- Brick 4 user-role boundaries;
- Brick 9 workflow routing;
- Brick 10 decision rights;
- Brick 11 authorised access records; and
- Brick 17 ongoing competence review.

## 15. Data residency and jurisdiction assurance

Where location of data processing, storage, users, clients or regulated activity matters, the Studio must identify jurisdictional and data-residency constraints.

The review should determine whether:

- sources apply to the correct jurisdiction;
- data may be stored or processed in the relevant systems;
- cross-border transfer restrictions apply;
- user or client contracts impose location requirements; and
- vendor or connector architecture changes jurisdictional exposure.

## 16. Specialist-review triggers

Specialist review must be required where the Studio Assurance Tier or domain consequence justifies it.

Minimum expectations:

- **Tier 1:** specialist review only where a material domain trigger exists.
- **Tier 2:** specialist review where material privacy, legal, security, professional or other domain risk is identified.
- **Tier 3:** specialist review required for material regulated, privacy, security, professional or legal domains.
- **Tier 4:** formal specialist assurance required for all material critical domains, with strong independence where practical.

## 17. Cross-cutting contradiction rule

The assurance review must deliberately search for conflicts between domains and bricks.

Examples include:

- evidence retention that breaches approved privacy limits;
- least-privilege rules contradicted by broad connector permissions;
- accessibility needs contradicted by output design;
- publication release that violates licensing terms;
- professional decision rights contradicted by automation;
- continuity requirements contradicted by a single unmonitored dependency;
- security logging that captures prohibited sensitive content.

A local control must not be considered sufficient if it creates a material failure elsewhere.

## 18. Required artefact — Cross-Cutting Assurance Record

Every Studio must produce a controlled Cross-Cutting Assurance Record containing at least:

- Studio name and ID;
- assurance tier;
- each assurance domain;
- applicability status;
- rationale for Not Applicable decisions;
- relevant obligations or risks;
- affected bricks;
- existing controls;
- identified gaps;
- specialist review required;
- specialist review completed;
- residual risk;
- owner;
- evidence reference;
- open actions;
- status; and
- approval.

## 19. Assurance Review Gate integration

The Cross-Cutting Assurance Review is an **overlay**, not BG-19.

Its completion is a mandatory input to **BG-18 — Final Studio Approval Gate**.

Material domain findings may reopen earlier Build Gates, including:

- BG-02 for authority;
- BG-03 for sources;
- BG-04 for boundaries;
- BG-05 for output standards;
- BG-07 for evidence handling;
- BG-09 for workflow;
- BG-10 for human authority;
- BG-11 for records;
- BG-12 for prompt/tool behaviour;
- BG-14 for change control;
- BG-15 for release; and
- BG-17 for lifecycle controls.

## 20. Pass criteria for final approval

BG-18 must not pass unless:

- all twelve assurance domains have been assessed for applicability;
- all applicable Critical findings are closed;
- applicable Major findings are closed or handled under an explicitly authorised exception process;
- required specialist reviews are complete;
- material cross-domain contradictions are resolved;
- residual risk is visible to the final approver; and
- operator competence requirements are defined where applicable.

## 21. Remediation acceptance criteria

Forensic Finding 5 may be marked remediated when:

- the Cross-Cutting Assurance Review is incorporated into the master Standard;
- all listed domains have applicability decisions;
- assurance depth is linked to assurance tier;
- specialist-review triggers are explicit;
- IP/licensing is incorporated into relevant bricks;
- operator competence is incorporated into relevant bricks;
- privacy and provenance precedence is explicit;
- cross-domain contradictions are tested; and
- BG-18 requires the completed Cross-Cutting Assurance Record.

## Remediation status

**CONTROL DESIGN COMPLETE — IMPLEMENTATION INTO MASTER STANDARD PENDING FINAL ASSEMBLY**

## Core rule

> **No control is truly effective if satisfying it creates an uncontrolled failure somewhere else in the Studio.**
