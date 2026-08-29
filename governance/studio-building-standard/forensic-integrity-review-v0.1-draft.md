# Nexus Studio Building Standard — Whole-Standard Forensic Integrity Review

## Document control

- **Standard under review:** NEX-GOV-003 — Nexus Studio Building Standard
- **Review version:** 0.1
- **Status:** Draft forensic review
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`
- **Review purpose:** Determine whether Bricks 1–18 form a coherent, self-applicable, auditable and approvable Studio-building system.

## Review conclusion

The eighteen-brick architecture is substantively strong and internally aligned around purpose, authority, evidence, gates, human accountability and controlled release. It is **not yet ready for v1.0 approval**.

The review identified several structural issues that should be corrected before final assembly and approval. None requires abandoning the architecture. The principal issues concern terminology, gate taxonomy, proportionality, cross-cutting risk controls, execution templates and master-document assembly.

---

# Finding 1 — Build Gates and Operational Gates are not sufficiently distinguished

**Severity:** Major

The Standard uses numbered gates within the Studio-building bricks while Brick 6 also defines the method for constructing gates inside an operational Studio. Without a formal distinction, a builder may confuse:

- a **Build Gate**, which determines whether a Studio-design brick has been satisfactorily completed; and
- an **Operational Gate**, which controls work moving through a completed Studio.

This ambiguity is especially important because Brick 18 refers to a complete gate-status table while Brick 6 requires the Studio to design its own gate architecture.

### Required correction

Create a formal two-layer taxonomy:

- **Build Gates — BG-01 to BG-18**: gates applied while constructing and approving a Studio under NEX-GOV-003.
- **Operational Gates — OG-[Studio]-[ID]**: Studio-specific gates designed under Brick 6 and applied during operational work.

All bricks should use the Build Gate prefix for their own construction gate. Brick 6 must explicitly state that it governs the design of Operational Gates.

---

# Finding 2 — Brick 1 lacks an explicit Build Gate

**Severity:** Major

Bricks 2–18 define explicit gates, while Brick 1 establishes the governing definition and recursive build rule but does not contain an equivalent Gate 1. Brick 18 anticipates an all-brick/all-gate approval record.

### Required correction

Add **BG-01 — Studio Eligibility and Definition Gate** requiring evidence that:

- the proposed construct genuinely requires a Studio rather than a simple prompt or ordinary workflow;
- the Studio concept falls within the Standard's definition;
- an accountable build owner has been identified; and
- the proposed work will be built through NEX-GOV-003.

This produces a complete BG-01 to BG-18 build-gate chain.

---

# Finding 3 — Earlier build gates are created before Brick 6 defines gate-design requirements

**Severity:** Major

Bricks 2–5 contain gate designs before Brick 6 formally defines what a properly designed gate must contain. This creates a bootstrap dependency.

### Required correction

State that BG-02 to BG-05 are **provisional build gates until Brick 6 is completed**. On completion of Brick 6, all earlier Build Gates must undergo a Gate Architecture Conformance Review against Brick 6 requirements.

Brick 18 should verify that all Build Gates conform to the final gate-design standard.

---

# Finding 4 — Proportionality is required but not operationally defined

**Severity:** Major

The Standard repeatedly states that control depth should be proportionate to consequence, risk and reliance. However, no controlled assurance classification determines what "proportionate" means.

Without a classification method, two builders could apply materially different control depth to equivalent Studios while both claiming proportionality.

### Required correction

Create a **Studio Assurance Classification Matrix** with defined tiers, for example:

- **Tier 1 — Low consequence / assistive**
- **Tier 2 — Moderate consequence / internal decision support**
- **Tier 3 — High consequence / professional, regulated or external reliance**
- **Tier 4 — Critical / safety, rights, major financial, legal, regulatory or autonomous-action consequence**

The classification should determine minimum requirements for:

- independent review;
- adversarial review depth;
- testing depth;
- human approval;
- dual control;
- audit records;
- monitoring cadence;
- change approval; and
- release authority.

The exact tier labels remain subject to approval.

---

# Finding 5 — Cross-cutting risk, privacy, security and safety controls are distributed but not consolidated

**Severity:** Major

The Standard contains strong references to privacy, security, sensitive information, prohibited use, connector authority and safety. However, these controls are distributed across multiple bricks and there is no explicit cross-cutting assurance view demonstrating that they have been considered as a coherent risk set.

### Required correction

Do **not** automatically add Brick 19. Instead create a mandatory **Cross-Cutting Assurance Review** within the master Standard and Build Record covering, as applicable:

- legal and regulatory risk;
- privacy and confidentiality;
- information security;
- safety;
- fairness and discrimination risk;
- intellectual property and licensing;
- records obligations;
- professional responsibility;
- third-party/vendor dependence; and
- business continuity.

The assurance classification should determine which domains require specialist approval.

---

# Finding 6 — Intellectual property and licensing controls are under-specified

**Severity:** Moderate

Source authority, citations and release are well controlled, but the Standard does not yet explicitly require consideration of copyright, licensing, reuse restrictions, confidential ownership or permitted use of third-party material.

### Required correction

Add IP/licensing checks to Brick 3 source controls, Brick 4 boundaries and Brick 15 release criteria where applicable.

---

# Finding 7 — Operator competence and user readiness are under-specified

**Severity:** Moderate

The Standard addresses decision authority and role restrictions, but it does not yet establish a systematic requirement to determine whether intended users are sufficiently trained or competent to use the Studio and interpret its outputs.

### Required correction

Add operator/user competence requirements to Brick 4 and Brick 10, and ongoing competence/retraining triggers to Brick 17.

Higher-assurance Studios should require defined onboarding or authorised-user criteria.

---

# Finding 8 — Status terminology requires a controlled namespace

**Severity:** Major

The bricks correctly define many status types, but terms such as Draft, Approved, Conditional, Blocked, Gate Passed, Released and Suspended apply to different objects.

Without a formal taxonomy, users may confuse:

- Studio build status;
- controlled document status;
- work-item state;
- output status;
- gate state;
- evidence state;
- source state; and
- release status.

### Required correction

Create a **Status and State Taxonomy** in the master Standard that defines separate namespaces and prohibits using one status type as a substitute for another.

For example:

- **Build Status:** Concept / In Build / Under Test / Under Final Review / Approved / Suspended / Retired
- **Gate State:** Not Assessed / Pass / Conditional Pass / Fail / Blocked / Escalate / Waived by Authority
- **Work-Item State:** New / In Research / Awaiting Human Approval / Returned for Correction / Closed, etc.
- **Output Status:** Generated / Complete for Review / Gate-Passed / Approved for Release / Released / Superseded / Withdrawn
- **Evidence State:** Verified / Unverified / Contradicted / Incomplete / Superseded / Disputed / Excluded

---

# Finding 9 — Required artefacts exist conceptually but no execution templates yet exist

**Severity:** Major

Each brick identifies a required artefact. This is strong design, but a builder currently has to invent the actual record structure each time.

That weakens repeatability and conflicts with the objective that Nexus BMG itself should be able to apply the Standard reliably to every new Studio.

### Required correction

Create a controlled **Studio Build Pack** containing templates for at least:

- Studio Purpose and Authority Record;
- Source Authority and Hierarchy Record;
- Scope, Boundary and Prohibited Use Record;
- Output Standard and Definition of Done Record;
- Gate Architecture and Control Record;
- Evidence Architecture and Provenance Record;
- Research Protocol and Research Control Record;
- Workflow Architecture and State Control Record;
- Human Decision Rights and Escalation Record;
- Register and Control Record Architecture;
- Prompting Architecture and Prompt Control Record;
- Adversarial and Contradictory Review Protocol;
- Version and Change Control Record;
- Release Criteria and Release Control Record;
- Test and Failure Case Record;
- Maintenance, Review and Retirement Plan; and
- Studio Build Record and Final Approval Record.

Where practical, use one consolidated build workbook/record with linked sections rather than creating unnecessary document proliferation.

---

# Finding 10 — Master Standard assembly is incomplete

**Severity:** Major

The current master file contains Bricks 1–3, while Bricks 4–18 exist as controlled component files. This is appropriate during construction but not sufficient for final v1.0 release unless the authoritative architecture is made explicit.

### Required correction

Before approval, create either:

1. one consolidated master Standard containing Bricks 1–18; or
2. a controlled master index that formally incorporates each brick file by reference and identifies the complete set as NEX-GOV-003.

Recommendation: maintain modular source files for development and generate/maintain one authoritative assembled master for approved release.

---

# Finding 11 — Applicability rules need greater precision

**Severity:** Moderate

Brick 18 permits Not Applicable with justification, but builders do not yet have an applicability matrix showing which controls are universally mandatory and which are conditional.

### Required correction

Use the proposed Assurance Classification Matrix to create a **Brick and Control Applicability Matrix**.

Some matters should remain universally mandatory, including purpose, authority, source hierarchy, boundaries, human accountability, change control and final approval. Other controls may scale in depth rather than disappear.

---

# Finding 12 — Independent review thresholds are not yet deterministic

**Severity:** Moderate

The Standard frequently uses phrases such as "where practical", "where consequence justifies it" or "may require independent review". These are reasonable drafting expressions but insufficient for consistent operation.

### Required correction

Tie independent-review requirements to assurance classification and defined trigger events.

---

# Finding 13 — Evidence retention and privacy obligations may conflict without a precedence rule

**Severity:** Moderate

Brick 7 and Brick 11 appropriately preserve provenance and records, while Brick 4 and related controls minimise sensitive data. The Standard needs an explicit principle for cases where auditability and data minimisation appear to conflict.

### Required correction

Add a controlled rule that provenance should be preserved through identifiers, metadata and secure references where retention of underlying content is unnecessary or impermissible. Legal or regulatory retention requirements override convenience, while data minimisation governs the content retained beyond those requirements.

---

# Finding 14 — Studio dependencies need a formal dependency record

**Severity:** Moderate

Several bricks recognise downstream Studios, connectors and successor systems, but no consolidated record identifies dependencies between Studios.

### Required correction

Add a conditional **Studio Dependency Record** or dependency fields in the Studio Register for:

- upstream Studios;
- downstream Studios;
- shared sources;
- shared prompts or components;
- shared connectors;
- shared data stores; and
- successor/predecessor relationships.

Material dependency change should trigger Brick 14 impact assessment.

---

# Finding 15 — Final approval should include a whole-system hostile scenario

**Severity:** Major

Brick 16 tests operational failure and Brick 13 conducts adversarial review, but Gate 18 should explicitly require at least one final whole-system hostile scenario after all components are assembled.

### Required correction

Before final approval, run at least one scenario that combines multiple failure pressures, for example:

- ambiguous request;
- misleading user-provided source;
- contradictory controlling source;
- attempted gate bypass;
- unauthorised external action request; and
- pressure for immediate release.

The Studio must preserve authority, evidence integrity, escalation and release refusal across the combined scenario.

---

# Duplication assessment

Some controls intentionally recur across bricks. This is generally appropriate because they are applied at different layers. However, final editing should distinguish deliberate reinforcement from accidental duplication.

Controls that recur appropriately include:

- human authority;
- source currency;
- contradictory evidence;
- change-triggered gate re-entry;
- release blocking;
- provenance;
- connector permissions; and
- escalation.

The final master should use cross-references to reduce repeated explanatory text while retaining mandatory rules at the point of application.

---

# Whole-standard strengths confirmed

The review confirms several architectural strengths:

1. The Standard is designed backwards from trust rather than forwards from prompts.
2. Human accountability is preserved throughout.
3. Source authority is distinguished from source availability.
4. Evidence is traceable through to decisions and outputs.
5. Work can move backwards when gates fail.
6. Failure, blocking and escalation are treated as legitimate controlled outcomes.
7. Release is separate from generation and approval.
8. Adversarial review has authority to change the outcome.
9. Change control can reopen earlier gates.
10. Lifecycle control includes suspension and retirement.
11. Final approval is a human governance decision.
12. The Standard is recursively self-applicable to future Studio construction.

---

# Remediation sequence before v1.0 approval

The recommended remediation sequence is:

1. Establish Build Gate versus Operational Gate taxonomy.
2. Add BG-01 and renumber/reference all build gates consistently.
3. Add provisional-gate conformance rule for BG-02 to BG-05 after Brick 6.
4. Create Studio Assurance Classification Matrix.
5. Create Status and State Taxonomy.
6. Add Cross-Cutting Assurance Review covering risk, privacy, security, safety, fairness and IP/licensing.
7. Add operator competence and dependency controls.
8. Create the Studio Build Pack templates.
9. Assemble the authoritative NEX-GOV-003 master Standard.
10. Run cross-brick contradiction review again.
11. Run whole-system hostile test.
12. Complete the Studio Build Record for NEX-GOV-003 itself.
13. Open a pull request for independent/human review.
14. Only then consider NEX-GOV-003 v1.0 approval and merge to the authoritative branch.

---

## Forensic review disposition

**Current disposition: RETURN FOR CONTROLLED REMEDIATION**

This is not a rejection of the architecture. It is the expected outcome of applying the Standard's own hostile-review principles to itself.

The Standard should remain **Draft v0.1** until the Major findings are closed or explicitly and validly resolved.

## Core forensic conclusion

> **The wall is structurally strong, but it should not be declared impregnable until its gate taxonomy, proportionality model, cross-cutting assurance controls, execution templates and final master assembly are completed and tested.**
