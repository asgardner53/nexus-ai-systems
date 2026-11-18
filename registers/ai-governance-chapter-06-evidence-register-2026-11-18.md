# Chapter 6 Evidence Register — Governance Infrastructure

## Research run metadata

- **Run title:** Chapter 6 — Governance Infrastructure Evidence Review
- **Book:** *AI Governance in Practice*
- **Chapter:** 6 — Where Governance Actually Lives
- **Date:** 2026-11-18
- **Research question:** How do organisational decisions about AI authority, risk and accountability become operational through data, identity, access, configuration, workflow, documentation, logging, supply-chain arrangements and lifecycle controls?
- **Materiality:** M3 — publication evidence control
- **Jurisdiction/population:** Cross-sector organisational governance; Australian primary guidance; NIST and OECD international reference frameworks; EU regulatory example
- **Researcher/agent:** Nexus Evidence Engine
- **Human decision owner:** Alec Gardner
- **Status:** **EVIDENCE PASS — safe for detailed chapter briefing**

## Claim register

### C06-001 — AI governance is partly enacted through infrastructure

- **Claim type:** Supported interpretation / Gardner synthesis
- **Intended use:** Publication
- **Primary evidence:** NIST AI RMF Govern; Australian Government Guidance for AI Adoption; EU AI Act
- **Supporting evidence:** Raji et al. (2020); Cobbe, Lee & Singh (2021); Mäntymäki et al. (2022/2023)
- **Contrary/limiting evidence:** Governance also depends on people, institutions, authority, professional judgement, culture and assurance. Infrastructure is not the whole governance system.
- **Source quality:** A/B
- **Currency check:** 18 November 2026; NIST AI RMF revision under monitoring
- **Verification status:** Verified as evidence-informed synthesis
- **Safe wording:** Governance is partly enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.
- **Unsafe overstatement:** Governance is nothing more than technical infrastructure.
- **Human approval required:** No new construct; preserve Gardner-synthesis boundary.

### C06-002 — Identity and access design shape practical AI authority

- **Claim type:** Verified interpretation
- **Intended use:** Publication
- **Primary evidence:** NIST SP 800-207; NIST SP 800-53 Rev. 5; Australian Government Guidance for AI Adoption
- **Supporting evidence:** NIST AI RMF Govern
- **Contrary/limiting evidence:** Access control does not establish that the permitted purpose or decision is legitimate, fair or appropriate.
- **Source quality:** A
- **Currency check:** 18 November 2026
- **Verification status:** Verified
- **Safe wording:** The practical authority of an AI system is partly defined by the identities it uses and the resources those identities can access or change.
- **Unsafe overstatement:** Least privilege alone makes an AI system responsibly governed.
- **Human approval required:** No.

### C06-003 — Data quality, provenance and usage rights are governance infrastructure

- **Claim type:** Verified fact / supported interpretation
- **Intended use:** Publication
- **Primary evidence:** Australian Government Guidance for AI Adoption; EU AI Act; NIST AI RMF Govern
- **Supporting evidence:** Gebru et al. (2021); Sambasivan et al. (2021); Singh, Cobbe & Norval (2019)
- **Contrary/limiting evidence:** Complete provenance may be unavailable, expensive or disproportionate; good provenance does not guarantee fair or reliable outcomes.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified with qualification
- **Safe wording:** Data provenance, quality and usage rights condition the legitimacy, reliability and scope of AI-enabled work.
- **Unsafe overstatement:** Complete lineage guarantees trustworthy AI.
- **Human approval required:** No.

### C06-004 — Workflow and configuration can encode practical decision rights

- **Claim type:** Supported interpretation
- **Intended use:** Publication
- **Primary evidence:** NIST AI RMF Govern; Australian Government Guidance for AI Adoption
- **Supporting evidence:** Cobbe, Lee & Singh (2021); Raji et al. (2020); Chapter 5 evidence spine
- **Contrary/limiting evidence:** Not every rule should be hard-coded; professional judgement and exception handling may be necessary.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified as interpretation
- **Safe wording:** Defaults, thresholds, routing rules, tool connections and approval points can allocate authority in practice.
- **Unsafe overstatement:** Every governance requirement should be translated into software logic.
- **Human approval required:** No.

### C06-005 — Documentation supports governance but does not enforce it

- **Claim type:** Verified fact / interpretation
- **Intended use:** Publication
- **Primary evidence:** Mitchell et al. (2019); Gebru et al. (2021); Arnold et al. (2019)
- **Supporting evidence:** EU AI Act; Australian Government Guidance for AI Adoption; Adkins et al. (2022)
- **Contrary/limiting evidence:** Documentation may be incomplete, voluntary, outdated, inaccessible or disconnected from runtime operation.
- **Source quality:** A/B
- **Currency check:** Stable foundational evidence; checked 18 November 2026
- **Verification status:** Verified
- **Safe wording:** Documentation can make intended use, assumptions, performance, limitations, provenance and responsibilities visible enough to review and challenge.
- **Unsafe overstatement:** A completed model card or system card proves effective governance.
- **Human approval required:** No.

### C06-006 — Logs and provenance support reviewability but do not create accountability by themselves

- **Claim type:** Verified interpretation
- **Intended use:** Publication
- **Primary evidence:** Singh, Cobbe & Norval (2019); Cobbe, Lee & Singh (2021); EU AI Act
- **Supporting evidence:** NIST SP 800-53; NIST AI RMF Govern; Wieringa (2020)
- **Contrary/limiting evidence:** Logs may omit human reasoning, off-platform activity, provider-side changes or contextual facts; excessive logging can create privacy, security and retention risks.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified with qualification
- **Safe wording:** Logs and provenance help reconstruct what occurred, under which configuration and with which human or system interventions.
- **Unsafe overstatement:** Logging creates accountability.
- **Human approval required:** No.

### C06-007 — Vendor governance requires information, change and control rights across the supply chain

- **Claim type:** Verified fact / supported interpretation
- **Intended use:** Publication
- **Primary evidence:** Australian Government Guidance for AI Adoption; NIST AI RMF Govern; NIST SP 800-53 supply-chain controls; EU AI Act value-chain duties
- **Supporting evidence:** Arnold et al. (2019); Wallis & Dorey (2024)
- **Contrary/limiting evidence:** Contracts and documentation cannot guarantee access to proprietary models, complete lineage, or timely notice of platform changes.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified with qualification
- **Safe wording:** Material third-party AI use requires explicit information-sharing, change-notification, incident, monitoring and responsibility arrangements.
- **Unsafe overstatement:** A deployer can always inspect or control its provider's full model and supply chain.
- **Human approval required:** No.

### C06-008 — Controls must be monitored, tested and revised

- **Claim type:** Verified fact
- **Intended use:** Publication
- **Primary evidence:** NIST AI RMF Govern; Australian Government Guidance for AI Adoption; ISO/IEC 42001 as contextual management-system evidence
- **Supporting evidence:** Raji et al. (2020); NIST SP 800-53
- **Contrary/limiting evidence:** Constant change can itself create instability; some controls require stable operating periods and proportionate review cycles.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified
- **Safe wording:** Control effectiveness should be monitored and revisited when system capability, access, data, context, performance or consequence materially changes.
- **Unsafe overstatement:** Every control must be continuously reconfigured.
- **Human approval required:** No.

### C06-009 — Decommissioning and alternative pathways are part of governance design

- **Claim type:** Verified fact / interpretation
- **Intended use:** Publication
- **Primary evidence:** Australian Government Guidance for AI Adoption; OECD AI Principles; NIST AI RMF Govern
- **Supporting evidence:** EU AI Act post-market and incident requirements
- **Contrary/limiting evidence:** Abrupt shutdown can create harm where systems support critical or interdependent work.
- **Source quality:** A
- **Currency check:** 18 November 2026
- **Verification status:** Verified with qualification
- **Safe wording:** Governance should include proportionate means to restrict, replace, suspend or retire AI-enabled processes safely, including alternative pathways where continuity matters.
- **Unsafe overstatement:** Every system requires a simple emergency stop.
- **Human approval required:** No.

### C06-010 — Technical controls can create false assurance

- **Claim type:** Supported interpretation
- **Intended use:** Publication
- **Primary evidence:** Chapter 2 decoupling evidence; NIST control-effectiveness logic; Raji et al. (2020)
- **Supporting evidence:** Madaio et al. (2020); Wieringa (2020); Costanza-Chock, Raji & Buolamwini (2022)
- **Contrary/limiting evidence:** Well-designed and well-tested technical controls can materially reduce risk and improve consistency.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified as interpretation
- **Safe wording:** The existence of a configured control does not prove that the control is correctly designed, consistently implemented or effective in operation.
- **Unsafe overstatement:** Technical controls are merely governance theatre.
- **Human approval required:** No.

### C06-011 — Governance is socio-technical and cannot be reduced to infrastructure

- **Claim type:** Verified interpretation
- **Intended use:** Publication
- **Primary evidence:** Cobbe, Lee & Singh (2021); Wieringa (2020); Madaio et al. (2020)
- **Supporting evidence:** NIST AI RMF; Australian Government Guidance for AI Adoption; Mäntymäki et al. (2022/2023)
- **Contrary/limiting evidence:** Some governance requirements can and should be embedded in technical and workflow controls.
- **Source quality:** A/B
- **Currency check:** 18 November 2026
- **Verification status:** Verified with boundary
- **Safe wording:** Infrastructure gives governance operational force, but people, authority, judgement, challenge, culture and assurance remain necessary.
- **Unsafe overstatement:** Governance is either purely technical or purely organisational.
- **Human approval required:** No.

### C06-012 — A governance boundary becomes real only when the operating environment supports, observes and preserves it

- **Claim type:** Gardner chapter-level synthesis
- **Intended use:** Publication
- **Primary evidence:** C06-001 to C06-011
- **Supporting evidence:** Chapter 5 Delegated Authority Map; NIST; Australian guidance; decision-provenance and reviewability research
- **Contrary/limiting evidence:** Some low-risk boundaries may be maintained through broad organisational rules and professional practice rather than bespoke infrastructure.
- **Source quality:** A/B plus synthesis control
- **Currency check:** 18 November 2026
- **Verification status:** Approved for chapter development as Gardner synthesis
- **Safe wording:** A material governance boundary becomes operational when the surrounding identities, permissions, workflows, records, monitoring and recourse arrangements support it.
- **Unsafe overstatement:** Every policy must be technically enforced to count as governance.
- **Human approval required:** Final wording remains Alec Gardner's judgement; no new named construct proposed.

## Source register

### S06-01 — NIST AI RMF Govern Playbook

- **Source type:** Primary authoritative framework
- **Quality:** A
- **Claims supported:** C06-001, C06-003, C06-004, C06-007 to C06-012
- **Limitations:** Voluntary and context-sensitive; AI RMF 1.0 under revision in 2026.

### S06-02 — NIST SP 800-207, Zero Trust Architecture

- **Source type:** Primary cybersecurity standard/guidance
- **Quality:** A
- **Claims supported:** C06-002
- **Limitations:** Cybersecurity architecture rather than complete AI governance model.

### S06-03 — NIST SP 800-53 Rev. 5

- **Source type:** Primary security/privacy control catalogue
- **Quality:** A
- **Claims supported:** C06-002, C06-006 to C06-010
- **Limitations:** Controls require selection, tailoring, implementation and testing; catalogue possession is not evidence of effectiveness.

### S06-04 — Australian Government Guidance for AI Adoption (2026)

- **Source type:** Primary Australian Government guidance
- **Quality:** A
- **Claims supported:** C06-001 to C06-012
- **Limitations:** Guidance rather than universal law; publication-stage currency check required.

### S06-05 — EU AI Act consolidated text, 27 July 2026

- **Source type:** Primary legislation
- **Quality:** A
- **Claims supported:** C06-001, C06-003, C06-005 to C06-009
- **Limitations:** Scope-, jurisdiction- and commencement-specific; use as regulatory mirror.

### S06-06 — Raji et al. (2020)

- **Citation:** Raji, I.D., Smart, A., White, R.N. et al. (2020), 'Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing', *Proceedings of FAT* 2020, pp. 33–44. DOI: 10.1145/3351095.3372873.
- **Source type:** Peer-reviewed accountability/audit framework
- **Quality:** A
- **Claims supported:** C06-001, C06-004, C06-008, C06-010
- **Limitations:** Framework evidence; not proof that every internal audit implementation is effective.

### S06-07 — Cobbe, Lee & Singh (2021)

- **Citation:** Cobbe, J., Lee, M.S.A. & Singh, J. (2021), 'Reviewable automated decision-making', *Proceedings of AIES 2021*, pp. 598–609. DOI: 10.1145/3442188.3445921.
- **Source type:** Peer-reviewed socio-technical accountability framework
- **Quality:** A
- **Claims supported:** C06-001, C06-004, C06-006, C06-011
- **Limitations:** Draws on administrative-law ideas; manuscript must not universalise public-law standards.

### S06-08 — Singh, Cobbe & Norval (2019)

- **Citation:** Singh, J.P., Cobbe, J. & Norval, C. (2019), 'Decision provenance: harnessing data flow for accountable systems', *IEEE Access*, vol. 7, pp. 6562–6574. DOI: 10.1109/ACCESS.2018.2887201.
- **Source type:** Peer-reviewed decision-provenance research
- **Quality:** A
- **Claims supported:** C06-003, C06-006, C06-012
- **Limitations:** Provenance assists accountability; it does not create legitimacy or consequences by itself.

### S06-09 — Mitchell et al. (2019)

- **Citation:** Mitchell, M. et al. (2019), 'Model cards for model reporting', *Proceedings of FAT* 2019, pp. 220–229. DOI: 10.1145/3287560.3287596.
- **Source type:** Peer-reviewed documentation framework
- **Quality:** A
- **Claims supported:** C06-005
- **Limitations:** Model-level snapshot; does not enforce runtime behaviour.

### S06-10 — Gebru et al. (2021)

- **Citation:** Gebru, T. et al. (2021), 'Datasheets for datasets', *Communications of the ACM*, vol. 64, no. 12, pp. 86–92. DOI: 10.1145/3458723.
- **Source type:** Peer-reviewed dataset-documentation framework
- **Quality:** A
- **Claims supported:** C06-003, C06-005
- **Limitations:** Documentation quality depends on completion, maintenance and use.

### S06-11 — Arnold et al. (2019)

- **Citation:** Arnold, M. et al. (2019), 'FactSheets: increasing trust in AI services through supplier's declarations of conformity', *IBM Journal of Research and Development*, vol. 63, nos 4/5, pp. 6:1–6:13. DOI: 10.1147/JRD.2019.2942288.
- **Source type:** Peer-reviewed supplier documentation approach
- **Quality:** B
- **Claims supported:** C06-005, C06-007
- **Limitations:** Supplier declaration is interested evidence and does not replace independent verification.

### S06-12 — Sambasivan et al. (2021)

- **Citation:** Sambasivan, N. et al. (2021), 'Everyone wants to do the model work, not the data work: data cascades in high-stakes AI', *Proceedings of CHI 2021*. DOI: 10.1145/3411764.3445518.
- **Source type:** Peer-reviewed empirical organisational research
- **Quality:** A
- **Claims supported:** C06-003
- **Limitations:** High-stakes field settings; do not imply every data defect creates a cascade.

### S06-13 — Wieringa (2020)

- **Citation:** Wieringa, M. (2020), 'What to account for when accounting for algorithms: a systematic literature review on algorithmic accountability', *Proceedings of FAT* 2020, pp. 1–18. DOI: 10.1145/3351095.3372833.
- **Source type:** Peer-reviewed systematic review
- **Quality:** A
- **Claims supported:** C06-006, C06-010, C06-011
- **Limitations:** Literature cut-off predates current generative and agentic systems.

### S06-14 — Madaio et al. (2020)

- **Citation:** Madaio, M.A., Stark, L., Wortman Vaughan, J. & Wallach, H. (2020), 'Co-designing checklists to understand organizational challenges and opportunities around fairness in AI', *Proceedings of CHI 2020*. DOI: 10.1145/3313831.3376445.
- **Source type:** Peer-reviewed empirical organisational research
- **Quality:** A
- **Claims supported:** C06-010, C06-011
- **Limitations:** Fairness-checklist setting; broader governance application is evidence-informed interpretation.

## Contradiction and boundary log

### CON06-01 — Technical enforcement versus professional discretion

- **Evidence A:** Technical and workflow controls can make boundaries consistent and enforceable.
- **Evidence B:** Rigid rules may fail in novel cases and can remove legitimate discretion.
- **Resolution:** Advocate proportionate enforcement, exception handling and escalation rather than universal hard-coding.

### CON06-02 — Documentation as transparency versus documentation as stale artefact

- **Evidence A:** Model cards, datasheets and FactSheets improve structured disclosure.
- **Evidence B:** Documentation may lag runtime changes or remain disconnected from operating evidence.
- **Resolution:** Treat documentation as a governed, versioned interface linked to change triggers and monitoring.

### CON06-03 — Logging for reviewability versus privacy/security risk

- **Evidence A:** Logs and provenance improve reconstruction, audit and contestability.
- **Evidence B:** Extensive logs can expose sensitive information, create attack surfaces and overwhelm reviewers.
- **Resolution:** Require purpose-specific, proportionate logging, controlled access and retention.

### CON06-04 — Vendor assurance versus provider opacity

- **Evidence A:** Contracts, system cards and information-sharing arrangements can strengthen governance.
- **Evidence B:** Proprietary models, platform updates and bargaining power can limit practical visibility.
- **Resolution:** Record residual dependency, negotiate information/change rights and maintain alternatives for material uses.

### CON06-05 — Infrastructure as governance versus infrastructure reductionism

- **Evidence A:** Permissions, workflows, configuration and monitoring give governance operational force.
- **Evidence B:** Institutions, judgement, culture, challenge and consequences determine whether controls are used meaningfully.
- **Resolution:** Present infrastructure as the enactment layer of governance, not the whole governance system.

## Monitoring register

| Claim/source monitored | Why it may change | Trigger | Authoritative location | Last checked | Action if changed |
|---|---|---|---|---|---|
| NIST AI RMF | Revision underway | Revised AI RMF or Govern outcomes released | NIST AI Resource Center | 2026-11-18 | Recheck Chapter 6 claims and citations |
| NIST SP 800-207 / SP 800-53 | Security guidance evolves | Material revision affecting identity, access, audit or supply chain | NIST CSRC | 2026-11-18 | Reconcile control language |
| Australian AI guidance | Policy environment evolving | Revised or mandatory requirements | ai.gov.au | 2026-11-18 | Reconcile manuscript and references |
| EU AI Act implementation | Staged application and standards work | Material guidance, amendment or harmonised standard | EUR-Lex / EU Commission | 2026-11-18 | Update scope and regulatory mirror |
| Runtime governance / policy-as-code | Fast-moving implementation field | Peer-reviewed validation or formal standards emerge | Academic and standards search | 2026-11-18 | Reassess evidence and prior art |
| AI documentation and bills of materials | Standards developing | Widely adopted or standardised AIBOM/model documentation format | ISO/NIST/industry bodies | 2026-11-18 | Update documentation section |

## Release note

- **Evidence adequate for intended use:** Yes
- **Unresolved high-materiality gap:** None
- **New named construct requiring approval:** None
- **Human decision required before detailed brief:** No
- **Reuse status:** Approved for Chapter 6 detailed briefing
- **Monitoring required:** Yes — NIST revision, Australian policy, EU implementation and runtime-governance evidence

**AI assists. Alec decides. GitHub records.**
