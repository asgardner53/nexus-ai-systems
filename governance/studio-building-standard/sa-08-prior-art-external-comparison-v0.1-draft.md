# NEX-GOV-003 — SA-08 Prior-Art and External Comparison Review

## Document control

- **Standard under assurance:** NEX-GOV-003 — Nexus Studio Building Standard
- **Self-assurance stage:** SA-08 — Research and Prior-Art Discipline
- **Version:** 0.1
- **Status:** Draft review complete — remediation actions identified
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`
- **Purpose:** Compare NEX-GOV-003 with established AI governance, risk and management-system approaches to identify missing controls, terminology risks and opportunities for hardening.

## 1. Governing principle

This review does **not** claim that NEX-GOV-003 is certified against, compliant with or equivalent to ISO/IEC 42001, ISO 31000, the NIST AI RMF or Australian Government AI guidance.

These external frameworks are used as hostile mirrors.

> **The purpose is not to borrow authority. The purpose is to discover what mature governance approaches may have considered that NEX-GOV-003 has not.**

## 2. External sources reviewed

### 2.1 ISO/IEC 42001:2023 — Artificial intelligence management system

Official ISO overview reviewed for management-system themes including:

- establishing, implementing, maintaining and continually improving an AI management system;
- management of AI-related risks and opportunities;
- traceability, transparency and reliability;
- responsible development, provision and use of AI systems;
- organisational context and structured governance.

Source: https://www.iso.org/standard/42001

### 2.2 ISO 31000:2018 — Risk management — Guidelines

Official ISO overview reviewed for:

- integrating risk management into governance, strategy, planning and culture;
- identifying, analysing, evaluating, treating, monitoring and communicating risk;
- continual improvement;
- stakeholder inclusion;
- human and cultural factors;
- creating and protecting value.

Source: https://www.iso.org/standard/65694.html

Note: ISO indicates that a future revision is under development. This review uses the current published ISO 31000:2018 as the stable reference point and records the revision as a future monitoring trigger.

### 2.3 NIST AI Risk Management Framework 1.0 and Playbook

Reviewed for:

- the Govern, Map, Measure and Manage functions;
- continuous lifecycle risk management;
- trustworthy AI characteristics;
- valid and reliable systems;
- safety;
- security and resilience;
- accountability and transparency;
- explainability and interpretability;
- privacy enhancement;
- fairness and harmful-bias management;
- stakeholder engagement and feedback;
- ongoing measurement and monitoring.

Sources:

- https://www.nist.gov/itl/ai-risk-management-framework
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook

NIST states that AI RMF 1.0 is under revision. The current review therefore treats AI RMF 1.0 as the present comparison baseline and the revised framework as a lifecycle monitoring item.

### 2.4 Australian Government — Guidance for AI Adoption and related guidance

Reviewed current Australian Government material including the National AI Centre's Guidance for AI Adoption and the evolved Voluntary AI Safety Standard materials.

Key themes reviewed include:

- accountable organisational ownership;
- organisational AI governance capability;
- risk and impact assessment;
- risk appetite and tolerance;
- data quality and provenance;
- privacy and cybersecurity;
- pre-deployment testing;
- post-deployment monitoring;
- meaningful human oversight;
- stakeholder impact assessment;
- fairness and inclusion;
- documentation;
- use-case-specific governance;
- third-party supplier considerations;
- transparency and disclosure;
- legal and regulatory context.

Sources:

- https://www.industry.gov.au/publications/voluntary-ai-safety-standard
- https://www.industry.gov.au/publications/voluntary-ai-safety-standard/10-guardrails
- https://www.industry.gov.au/publications/voluntary-ai-safety-standard/legal-landscape-ai-australia
- https://www.digital.gov.au/ai/ai-in-government-policy

## 3. Overall comparison conclusion

NEX-GOV-003 is already particularly strong in the following areas:

- explicit separation of Build Gates and Operational Gates;
- evidence-to-pass gate design;
- backward movement to root cause;
- provenance from claim through evidence to output;
- contradictory-evidence review;
- explicit human decision rights;
- release as a separate act of authority;
- release refusal as a successful control outcome;
- hostile review with authority to change outcomes;
- change-triggered gate re-entry;
- lifecycle suspension and retirement;
- controlled status namespaces;
- dependency-aware change control;
- recursive assurance of the governing Standard itself.

The external comparison did not identify a need to change the eighteen-brick architecture.

It did identify several areas where mature external approaches are more explicit than the current NEX-GOV-003 master.

---

# 4. Finding PA-01 — Stakeholder impact assessment is not explicit enough

**Severity:** Major

Australian Government guidance explicitly requires identification of stakeholder groups and evaluation of potential harms to individuals, groups and society. NIST similarly emphasises mapping context and engagement with relevant AI actors and affected stakeholders.

NEX-GOV-003 considers users, fairness, safety, consequence and affected parties indirectly, but does not yet require a formal **Stakeholder Impact Assessment** for Studios that may materially affect people.

## Required remediation

Add a conditional Stakeholder Impact Assessment requirement to the Cross-Cutting Assurance Review.

Trigger where a Studio may materially affect:

- individuals;
- employees;
- students;
- candidates;
- customers;
- vulnerable groups;
- regulated parties;
- communities; or
- other identifiable stakeholder groups.

The assessment should identify:

- stakeholder group;
- interaction with the Studio or its output;
- potential benefit;
- potential harm;
- severity and likelihood;
- fairness/accessibility concerns;
- whether the person knows AI is involved where relevant;
- review, correction or contestability path;
- mitigating controls;
- residual impact.

---

# 5. Finding PA-02 — Risk appetite and tolerance are insufficiently explicit

**Severity:** Major

ISO 31000 embeds risk management within organisational governance and decision-making. Australian guidance explicitly links AI risk assessment to organisational risk appetite and tolerance levels.

NEX-GOV-003 classifies assurance depth by consequence and reliance but does not explicitly require the Studio's residual risk to be evaluated against an approved organisational risk appetite or acceptance threshold.

## Required remediation

Add a **Risk Acceptance Context** to the Assurance Classification and final approval records.

For Tier 2–4 Studios, record where applicable:

- relevant organisational risk appetite/tolerance;
- unacceptable-risk conditions;
- residual risk after controls;
- authority permitted to accept residual risk;
- conditions requiring escalation rather than acceptance.

For organisations without a formal risk appetite statement, the Studio must identify the authorised governance basis used to determine acceptable residual risk.

---

# 6. Finding PA-03 — Explainability and interpretability need explicit treatment

**Severity:** Major

NIST identifies explainability and interpretability as characteristics of trustworthy AI. NEX-GOV-003 strongly requires evidence traceability and meaningful human review, but those controls do not automatically guarantee that a user or affected person can understand the basis or limitations of an AI-supported conclusion.

## Required remediation

Add an **Explainability and Interpretability Requirement** to Brick 5, Brick 7, Brick 10 and Cross-Cutting Assurance where applicable.

The required level should depend on:

- assurance tier;
- audience;
- consequence;
- rights impact;
- human decision need;
- contestability need.

The Studio should be able to explain, at an appropriate level:

- what information materially influenced the outcome;
- what rules, evidence or reasoning structure were applied;
- important limitations;
- why a human reviewer accepted or rejected the recommendation where relevant.

This does not require disclosure of hidden model chain-of-thought. It requires decision-relevant explanation and reconstructable evidence.

---

# 7. Finding PA-04 — Contestability and affected-person review path should be explicit

**Severity:** Major

External governance approaches place strong emphasis on human-centred impacts, transparency and mechanisms for oversight. NEX-GOV-003 contains correction, complaint, escalation and human review concepts but does not systematically require a **contestability path** where an AI-supported outcome materially affects a person.

## Required remediation

Where a Studio influences rights, employment, assessment, qualification, access, ranking, eligibility or other material individual outcomes, define:

- whether the affected person is informed that AI materially supported the process, where appropriate and lawful;
- how they may request human review or correction;
- who owns the review;
- what evidence is preserved;
- how disputes affect release or decision status;
- how systemic patterns of challenge feed lifecycle review.

---

# 8. Finding PA-05 — Organisational AI inventory and portfolio governance sit above the Studio level

**Severity:** Moderate

Australian Government guidance distinguishes organisation-level AI governance from use-case-level governance and requires use-case registers in Commonwealth government. ISO/IEC 42001 similarly operates as an organisational management-system standard.

NEX-GOV-003 governs individual Studio construction and includes a Studio Register, but the master does not explicitly state that an organisation using multiple Studios should maintain a portfolio-level view of AI-enabled use cases and shared risk.

## Required remediation

Clarify that NEX-GOV-003 is a Studio-building standard, not a complete enterprise AIMS.

For organisations operating multiple Studios, recommend or require an **AI/Studio Portfolio Register** appropriate to context, capturing:

- Studio/use-case ID;
- owner;
- purpose;
- assurance tier;
- lifecycle status;
- material dependencies;
- key risk domains;
- review date;
- shared components;
- incidents or systemic themes.

This portfolio view should support detection of concentration risk, duplicated capability, shared dependencies and cross-Studio incidents.

---

# 9. Finding PA-06 — Formal management review and internal audit concepts should be strengthened

**Severity:** Moderate

Management-system approaches such as ISO/IEC 42001 emphasise ongoing management review and continual improvement. NEX-GOV-003 includes lifecycle review, incident learning, independent review and final approval, but does not explicitly distinguish:

- operational maintenance review;
- internal governance audit; and
- senior management review of the Studio portfolio or governance system.

## Required remediation

For Tier 3 and Tier 4 Studios, lifecycle planning should consider:

- scheduled internal assurance review/audit;
- management review of material incidents, overrides and performance;
- adequacy of resources and competence;
- suitability of risk controls;
- systemic findings across Studios;
- improvement decisions.

For Tier 1–2 Studios, this may be proportionate and portfolio-based.

---

# 10. Finding PA-07 — Benefits and opportunities are underrepresented relative to risk

**Severity:** Moderate

ISO 31000 and ISO/IEC 42001 both frame governance around managing risks and opportunities and creating/protecting value. NEX-GOV-003 is intentionally rigorous about failure prevention, but its architecture can appear predominantly defensive.

A Studio exists to create useful outcomes, not merely avoid harm.

## Required remediation

Strengthen Brick 2 and lifecycle review to record:

- intended benefits;
- opportunity/value hypothesis;
- measures of usefulness and value;
- whether controls remain proportionate to the value created;
- whether the Studio should be simplified or retired if governance cost exceeds justified value.

This must not weaken risk controls.

---

# 11. Finding PA-08 — Transparency to external users and affected stakeholders should be more explicit

**Severity:** Moderate

Australian Government guidance increasingly emphasises transparency around AI use. NEX-GOV-003 controls status, citations, audience and authority but does not define when users or affected people should be informed that AI materially contributed to an output or process.

## Required remediation

Add a conditional **AI Use Transparency Rule** to Cross-Cutting Assurance and Brick 15.

The Studio should determine whether disclosure is required or appropriate based on:

- law or policy;
- professional obligations;
- contractual commitments;
- materiality of AI contribution;
- rights impact;
- likelihood that non-disclosure would mislead;
- public/client expectations.

The rule must not require disclosure where prohibited or where AI contribution is immaterial and disclosure would add no meaningful information.

---

# 12. Finding PA-09 — Supply-chain and third-party supplier assurance can be more explicit

**Severity:** Moderate

Australian guidance explicitly includes third-party AI systems and suppliers in risk assessment. NEX-GOV-003 has strong Dependency Control, but supplier due diligence is not separately expressed.

## Required remediation

For material third-party AI dependencies, the Studio should consider:

- supplier terms and permitted use;
- data processing and privacy conditions;
- security assurances;
- model/version change notification;
- service availability;
- subcontractor/subprocessor dependence;
- evidence or testing supplied by vendor;
- right/ability to independently test;
- exit or substitution path.

The Studio must not assume vendor marketing claims establish assurance.

---

# 13. Finding PA-10 — Metrics and acceptance criteria can be more explicit at system level

**Severity:** Moderate

NIST's Measure function and Australian guidance emphasise defined testing and monitoring criteria. NEX-GOV-003 requires test acceptance criteria and output Definition of Done but could be stronger in requiring **operational performance measures** after deployment.

## Required remediation

Where meaningful, Brick 17 should define indicators such as:

- gate failure rate;
- human override/rejection rate;
- citation/evidence defect rate;
- escalation frequency;
- output correction rate;
- incident rate;
- latency/timeliness where material;
- user usefulness;
- false-positive/false-negative rate where applicable;
- dependency failures;
- drift indicators.

Metrics must support decisions, not become vanity reporting.

---

# 14. Finding PA-11 — Environmental impact should be explicitly assessed where material

**Severity:** Minor to Moderate, context dependent

External responsible-AI approaches increasingly consider broader social and environmental impacts. NEX-GOV-003 includes safety, fairness and societal harm concepts but does not explicitly call out environmental impact.

## Required remediation

Add environmental impact as a conditional Cross-Cutting Assurance consideration where material, especially for compute-intensive, large-scale or infrastructure-heavy Studios.

No separate control is required for ordinary low-impact use where the effect is immaterial.

---

# 15. Finding PA-12 — Vocabulary alignment should be monitored, not copied blindly

**Severity:** Minor

The external frameworks use terms such as AI system, AI actor, risk treatment, impact assessment, AIMS, trustworthy AI, deployer and developer. NEX-GOV-003 uses a Studio-specific vocabulary.

The current vocabulary is coherent, but interoperability may improve if a glossary maps Nexus terms to relevant external terminology without surrendering architectural clarity.

## Required remediation

Create a **Terminology and External Mapping Appendix** for v1.0 or a later controlled companion document.

The appendix should distinguish:

- Nexus-defined term;
- nearest external analogue;
- important difference;
- no-equivalence warning where needed.

---

# 16. Comparison matrix

| External theme | NEX-GOV-003 position | Gap level | Action |
|---|---|---|---|
| Accountability/ownership | Strong | Low | Retain |
| Risk identification and treatment | Strong but acceptance context weaker | Moderate | Add risk appetite/tolerance context |
| Human oversight | Very strong | Low | Retain |
| Evidence/data provenance | Very strong | Low | Retain |
| Testing before deployment | Very strong | Low | Retain |
| Monitoring after deployment | Strong | Low/Moderate | Add explicit operational metrics |
| Stakeholder impact assessment | Partial | Major | Add formal conditional assessment |
| Fairness/bias | Present | Moderate | Tie to stakeholder impact and metrics |
| Explainability/interpretability | Indirect | Major | Add explicit rule |
| Contestability | Partial | Major | Add affected-person review path |
| Transparency of AI use | Partial | Moderate | Add conditional disclosure rule |
| Organisational AI inventory | Studio Register exists | Moderate | Add portfolio-governance clarification |
| Internal audit/management review | Partial | Moderate | Strengthen lifecycle assurance |
| Third-party supplier assurance | Dependency controls strong | Moderate | Add due-diligence fields |
| Opportunities/value | Present but secondary | Moderate | Strengthen benefit/value controls |
| Environmental impact | Weakly implicit | Minor/Moderate | Add conditional consideration |
| Continual improvement | Strong | Low | Retain |
| Change control | Very strong | Low | Retain |
| Retirement/suspension | Very strong | Low | Retain |
| Status/decision traceability | Very strong | Low | Retain |
| Release refusal | Stronger than many comparison frameworks | Strength | Retain |

---

# 17. What NEX-GOV-003 should not import blindly

The comparison also confirms several areas where NEX-GOV-003 should retain its own architecture rather than imitate external frameworks mechanically.

## 17.1 Do not turn every Studio into an enterprise management system

ISO/IEC 42001 operates at organisational management-system level. A Tier 1 Studio should not be burdened with enterprise-scale governance machinery merely to resemble an AIMS.

## 17.2 Do not convert flexible guidance into fake compliance claims

NIST AI RMF and Australian guidance are voluntary guidance frameworks. NEX-GOV-003 should not claim compliance simply because concepts align.

## 17.3 Do not replace Build Gates with generic risk checklists

The gate architecture is a distinctive strength because it links evidence to progression and gives failure real consequences.

## 17.4 Do not weaken human accountability through generic 'human in the loop' language

NEX-GOV-003's explicit Assist/Recommend/Decide/Act and decision-owner controls are more operationally precise than broad human-oversight statements.

## 17.5 Do not abandon proportionality

The external frameworks support contextual application. NEX-GOV-003 should preserve tiered assurance rather than imposing identical bureaucracy on every use case.

---

# 18. SA-08 disposition

## Current finding

**SA-08 — CONDITIONAL PASS**

The external comparison confirms that NEX-GOV-003 has a mature and differentiated control architecture, but identifies four Major hardening actions that should be incorporated before final approval:

1. Stakeholder Impact Assessment;
2. Risk Appetite/Tolerance and residual-risk acceptance context;
3. Explainability and Interpretability requirements; and
4. Contestability / affected-person review path.

The remaining Moderate/Minor findings should be incorporated into the v1.0 consolidation where proportionate.

## Conditions for SA-08 final Pass

SA-08 may be marked Pass when:

- PA-01 to PA-04 are incorporated into the normative candidate;
- PA-05 to PA-10 are either incorporated or dispositioned with rationale;
- PA-11 and PA-12 are incorporated proportionately or logged as controlled future improvements;
- no claim of ISO/NIST/Australian Government compliance or certification is made without a separate formal conformity assessment.

---

# 19. Monitoring triggers

This comparison must be revisited when materially relevant external guidance changes, including:

- publication of a revised NIST AI RMF;
- publication of a revised ISO 31000;
- material revision of ISO/IEC 42001 or related ISO AI standards;
- material update to Australian Government AI governance guidance;
- introduction of new mandatory Australian AI-specific regulation affecting Studio use cases.

---

## Core conclusion

> **External comparison does not undermine the eighteen-brick architecture. It shows where the wall is already unusually strong and where four additional assurance lenses—stakeholder impact, risk acceptance, explainability and contestability—should be built into the mortar before v1.0.**
