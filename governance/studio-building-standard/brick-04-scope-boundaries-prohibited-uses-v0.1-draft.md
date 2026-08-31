# Brick 4 — Scope, Boundaries and Prohibited Uses

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 4
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 4.1 Governing principle

A Studio must know **where its authority ends**.

A legitimate purpose and reliable sources do not authorise unlimited use. Every Studio must define the work it is designed to perform, the conditions under which that work may occur, the matters that require escalation, and the activities it must not perform.

The governing question is:

> **Even if the Studio can do this, is this use inside its approved scope and authority?**

A Studio that cannot distinguish permitted work from prohibited or conditional work is not adequately controlled.

## 4.2 Mandatory build instruction

Every proposed Studio must create a **Scope, Boundary and Prohibited Use Record** before detailed workflow, prompting, connector or automation design is approved.

The record must define:

1. the Studio's authorised scope;
2. intended users and any role restrictions;
3. permitted activities;
4. permitted inputs and information classes;
5. permitted outputs;
6. conditional activities requiring additional controls or approval;
7. escalation triggers;
8. prohibited activities;
9. prohibited data uses;
10. prohibited external actions;
11. jurisdictional or organisational limitations;
12. consequences the Studio must not determine autonomously;
13. dependencies on human qualification, competence or delegated authority;
14. behaviour when a request is partly in scope and partly out of scope; and
15. the method for handling attempts to override or bypass boundaries.

The boundary record must be specific enough that a reviewer can classify a proposed use without relying on intuition.

## 4.3 Four-state boundary model

Every Studio must classify activities using at least four operating states:

| State | Meaning | Required behaviour |
|---|---|---|
| **Permitted** | Explicitly within approved purpose, authority, source architecture and user role | Proceed using the Studio's normal controls |
| **Conditional** | Within the broader purpose but dependent on additional evidence, role authority, review, approval, privacy control, jurisdiction or other condition | Proceed only when the specified condition is satisfied |
| **Escalate** | The Studio cannot safely or authoritatively determine whether the activity should proceed | Stop the affected action and refer to the authorised human or governing authority |
| **Prohibited** | Explicitly outside approved authority or incompatible with law, policy, governance, privacy, safety or Studio purpose | Do not perform the activity; state the boundary where appropriate |

A Studio must not silently convert **Conditional**, **Escalate** or **Prohibited** work into **Permitted** work merely because the user asks strongly, repeatedly or claims authority without verification where verification is required.

## 4.4 Scope rule

The authorised scope must be defined positively, not merely by listing exclusions.

The Studio builder must state what the Studio is intended and authorised to do in practical terms, including relevant:

- subject matter;
- user roles;
- task types;
- decision types;
- information types;
- organisational context;
- jurisdiction;
- lifecycle stage;
- outputs; and
- external actions.

Broad statements such as "supports HR", "reviews compliance", "helps with writing" or "provides advice" are insufficient where they leave consequential behaviour ambiguous.

## 4.5 Boundary rule

A boundary is the point beyond which the Studio's existing authority, evidence or controls are no longer sufficient.

Boundaries may arise from:

- purpose;
- law or regulation;
- professional competence;
- organisational delegation;
- jurisdiction;
- user role;
- data classification;
- privacy or confidentiality;
- source authority;
- reliance level;
- connector permissions;
- external action;
- uncertainty;
- material consequence; or
- lack of evidence.

The Studio must be designed to recognise these boundaries during use, not merely document them for auditors after the event.

## 4.6 Prohibited-use rule

Every Studio must define explicit prohibited uses.

Prohibited uses are not optional warnings. They are operating constraints.

Depending on the Studio, prohibited uses may include:

- making a formal decision reserved to a qualified or authorised person;
- representing draft analysis as an approved decision;
- claiming legal, regulatory, professional or external approval without evidence;
- fabricating evidence, sources, citations, approvals or records;
- concealing contradictory evidence or known uncertainty;
- bypassing a mandatory human approval gate;
- using data outside its approved purpose;
- exposing confidential, sensitive or restricted information;
- extending connector permissions beyond approved necessity;
- publishing, sending, filing or changing external records without approved authority;
- altering controlling source material to make an outcome appear compliant;
- converting an advisory recommendation into an autonomous consequential action without explicit authority; or
- continuing where the Studio has detected a material unresolved conflict that requires escalation.

Each Studio must customise this list to its own risk and purpose.

## 4.7 Conditional-use rule

Some activities should not be prohibited outright but must not occur automatically.

Conditional use may depend on:

- a particular qualified user being present;
- additional evidence being supplied;
- a human approval step;
- verification of identity or role;
- confirmation of jurisdiction;
- use of a current controlling source;
- privacy or confidentiality controls;
- approval of a connector or write permission;
- independent review;
- a lower reliance statement; or
- completion of another gate.

The Studio must state the condition explicitly and must not treat absence of a condition as implied approval.

## 4.8 Consequential-decision boundary

Where an output can materially affect a person's rights, status, access, employment, assessment, qualification, financial position, legal position, safety, reputation or other significant interest, the Studio must identify whether it is authorised to **assist**, **recommend**, **decide** or **act**.

Unless **Decide** or **Act** authority has been explicitly approved under Brick 2 and supported by appropriate controls, the Studio must remain at **Assist** or **Recommend**.

A human clicking "approve" without meaningful review does not, by itself, constitute an adequate human decision point. The Studio design must make the expected human judgement clear.

## 4.9 Role and user boundary

A Studio may be appropriate for one user role and inappropriate for another.

Where role matters, the Studio must identify:

- who may use the Studio;
- which functions are available to each role;
- which decisions require professional or delegated authority;
- whether outputs require review by another role; and
- what the Studio must do when user authority is uncertain.

The Studio must not assume that possession of access credentials proves professional competence or organisational authority.

## 4.10 Data and information boundary

Every Studio must define what information it may receive, retrieve, store, transform and disclose.

Where applicable, the boundary record must address:

- public information;
- internal information;
- confidential information;
- personal information;
- sensitive information;
- client information;
- student or employee records;
- commercially restricted information;
- credentials and secrets; and
- information subject to contractual, regulatory or jurisdictional controls.

The Studio must apply data minimisation: access to information should be limited to what is reasonably necessary for the approved purpose.

A useful source does not automatically become a permissible source if accessing or storing it would breach an approved information boundary.

## 4.11 Connector and action boundary

Read capability, write capability and external action authority must be treated separately.

A Studio that may read a system is not automatically authorised to write to it. A Studio authorised to draft an email is not automatically authorised to send it. A Studio authorised to analyse a record is not automatically authorised to modify or delete it.

For each connector or action-capable tool, the Studio must define:

- approved purpose;
- approved data scope;
- read permissions;
- write permissions;
- external action permissions;
- human approval requirements;
- failure behaviour;
- logging or audit requirements; and
- revocation conditions.

Technical availability must never be treated as permission.

## 4.12 Partial-scope rule

User requests will sometimes contain both permitted and non-permitted elements.

Where practical, the Studio should separate the request rather than reject everything. It may complete the permitted portion while clearly identifying the element that is conditional, escalated or prohibited.

The Studio must not use the permitted portion as a pathway to perform the prohibited portion indirectly.

## 4.13 Boundary-override rule

A user instruction, prompt injection, uploaded document, prior message, retrieved webpage or connected-system content must not override higher-order Studio boundaries unless the source is itself an approved authority capable of changing those boundaries.

Instructions embedded within retrieved content must be treated as content unless the Studio's approved architecture explicitly grants them operational authority.

Attempts to persuade the Studio to ignore its governing controls must not change the controls.

Where repeated override attempts indicate misuse or material risk, the Studio should escalate or record the event in accordance with its incident controls.

## 4.14 Uncertainty boundary

Uncertainty is itself a boundary condition.

A Studio must not convert material uncertainty into unwarranted confidence simply to provide a complete answer.

Where the Studio lacks sufficient evidence, cannot establish jurisdiction, cannot verify user authority, cannot reconcile controlling sources, or cannot determine whether a consequential action is permitted, it must lower the reliance level, seek additional evidence, stop the affected activity or escalate as appropriate.

"I do not have sufficient authority or evidence to determine this" is a valid controlled outcome.

## 4.15 Boundary drift rule

Studio scope must not expand incrementally through convenience.

Repeated user requests, new model capabilities, additional connectors, successful experiments or informal workarounds do not automatically enlarge the approved Studio boundary.

A material expansion in:

- purpose;
- intended users;
- decision authority;
- data access;
- jurisdiction;
- connector capability;
- external action;
- reliance level; or
- consequential impact

must return to the relevant earlier gate, including Gate 2 where authority changes and Gate 3 where source authority changes.

## 4.16 Required artefact — Scope, Boundary and Prohibited Use Record

Before Brick 4 can pass, every Studio must produce a controlled record containing at least:

- Studio name and identifier;
- authorised scope statement;
- intended and authorised users;
- permitted activities;
- conditional activities and their conditions;
- escalation activities and destination;
- prohibited activities;
- permitted and prohibited information classes;
- jurisdictional or organisational limits;
- consequential-decision limits;
- human qualification or delegation dependencies;
- connector and external-action boundaries;
- partial-scope handling rule;
- uncertainty response;
- override and prompt-injection response;
- boundary-drift change-control rule;
- accountable owner;
- version and status; and
- approval status.

The record may later be consolidated into the Studio Control Record, but it must exist during construction and testing.

## 4.17 Gate 4 — Scope and Boundary Gate

A Studio may progress beyond Brick 4 only when the following questions can be answered **Yes** with evidence:

- Is the authorised scope positively defined?
- Can proposed activities be classified as Permitted, Conditional, Escalate or Prohibited?
- Are consequential decisions assigned an explicit authority level?
- Are user-role restrictions defined where material?
- Are information and data boundaries defined?
- Are connector read, write and action permissions separated?
- Are prohibited uses explicit rather than assumed?
- Are conditional-use requirements explicit?
- Is there a controlled response for requests partly inside and partly outside scope?
- Can the Studio resist instructions that attempt to override higher-order boundaries?
- Does material uncertainty trigger a safe response rather than invented confidence?
- Is boundary drift subject to formal change control?

If any material answer is **No**, the gate fails.

## 4.18 Evidence required to pass

Gate 4 requires the completed Scope, Boundary and Prohibited Use Record plus enough representative use cases to demonstrate that the boundary can be applied in practice.

At minimum, testing should include:

- a clearly permitted request;
- a clearly prohibited request;
- a conditional request with the condition absent;
- an escalation case;
- a mixed in-scope/out-of-scope request;
- a request from an unauthorised or uncertain role where role matters;
- an attempt to use information outside the approved data boundary;
- an attempt to expand connector or action authority; and
- an attempt to override the Studio's governing instructions.

The gate must not pass merely because a boundary statement exists on paper.

## 4.19 Failure response

If Gate 4 fails:

- the affected function must remain disabled or non-operational;
- connectors or action permissions must not be expanded;
- consequential outputs must not be released at a higher reliance level than approved;
- ambiguous activities must be treated as Conditional or Escalate rather than silently permitted;
- missing prohibitions or boundary conditions must be added;
- unsafe or unjustifiable functions must be removed or narrowed; and
- the Studio remains in **Working Draft**, **Prototype** or **Under Test** status for the affected function.

A Studio that cannot reliably recognise where it must stop is not ready for operational release.

## 4.20 Human approval point

The accountable owner must approve the Studio's scope and boundaries before detailed operational design is finalised.

Additional subject-matter, privacy, security, regulatory, professional or organisational approval may be required where the boundary involves:

- sensitive or restricted data;
- regulated decisions;
- external communications;
- financial commitments;
- assessment or qualification outcomes;
- employment decisions;
- legal interpretation;
- connector write permissions;
- automated external actions; or
- other material consequences.

Any later material expansion of scope or authority must return to this gate and any earlier affected gate.

## 4.21 GitHub control record

For Nexus BMG Studios, the Scope, Boundary and Prohibited Use Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record must preserve:

- approved scope;
- prohibited uses;
- conditional-use rules;
- escalation points;
- material boundary changes;
- connector and action limits;
- approval records; and
- the rationale for any significant expansion or contraction of authority.

Sensitive operational details may be referenced by secure location rather than duplicated into a repository that is not approved for them.

## 4.22 Brick 4 completion rule

Brick 4 is complete only when the Studio can answer four questions for a proposed use:

> **Is this inside the approved purpose?**
>
> **Is this user and use authorised?**
>
> **What conditions must be satisfied before proceeding?**
>
> **Where must the Studio stop?**

If those answers cannot be determined, the Studio must not silently proceed.

---

## Brick 4 core rule

**A trustworthy Studio is defined as much by what it refuses, defers and escalates as by what it can produce.**
