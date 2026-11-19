# AI Governance in Practice

## Building the Operating System for Responsible, Accountable and Effective AI

**Alec Gardner**

---

# Preface

I did not come to AI governance through computer science alone.

My working life began in an electrical apprenticeship, where systems had to work in the real world. A drawing, instruction or specification mattered, but so did the wiring, the load, the protection, the maintenance and the person expected to respond when conditions changed. Later study in engineering, adult education, human resource management, business and higher education gave me different ways to examine the same organisational truth: intent is important, but the operating arrangement determines what actually happens.

Over three decades in multinational organisations, including Asia–Pacific responsibilities and service on a global human resources board, I watched policies meet incentives, structures meet personalities and formal authority meet the practical realities of work. I learned that organisations are rarely governed by one document, one committee or one senior decision. They are governed through the relationships among purpose, authority, capability, systems, evidence and the choices people make under pressure.

AI has made that lesson newly urgent.

Much of the public discussion begins with the technology: what the model can do, how rapidly capability is advancing, or which rules should surround it. Those questions matter. But organisations do not experience AI as an abstract technology. They experience it through recruitment, customer service, operations, finance, learning, professional judgement, workflow, data and managerial decisions. AI becomes consequential when it enters that work and begins to shape what people see, decide and do.

That is why this book treats governance as an organisational operating system rather than a policy exercise. The central concern is not simply whether an organisation has responsible-AI principles. It is whether accountability remains meaningful as information, judgement and action are progressively distributed between people and systems.

My perspective is deliberately practical. I have spent much of my career helping people learn, make decisions and work inside organisations that are never as tidy as their charts suggest. I have also learned, sometimes the hard way, that strong judgement requires both discipline and the willingness to question what appears settled. Good governance should make that possible. It should not smother responsible action beneath process, nor create the illusion of control through policy language and green dashboards.

The argument that follows is therefore neither anti-technology nor a case for unrestricted adoption. It is an argument for organisational clarity. We need to know what AI is participating in, what authority has been delegated, what human judgement must remain available, how boundaries are enacted, what evidence survives and who remains accountable when the system acts.

AI can assist. It cannot absorb the responsibility of the institution that chose how it would be used.

That is the question beneath every chapter: can the organisation still govern what it permits AI to do?

---

# Note on Cases and Examples

This book uses two kinds of organisational examples.

Named organisations, published incidents, regulations, standards and research findings are drawn from the cited sources. They are included for the specific point supported by those sources and should not be read as a broader judgement about the organisation, technology or people involved.

The unnamed organisational cases are composites. They bring together recurring patterns found across research, governance practice and organisational experience so that the practical problem can be examined without attributing it to one identifiable organisation or event. Details have been combined and shaped for clarity. A composite case should therefore be read as an illustration of a credible governance condition, not as a report of one undisclosed incident.

The distinction matters because AI governance is often most visible in ordinary work: an approval that arrives too late, a permission that quietly expands, a dashboard that proves less than it appears to prove, or a human reviewer who remains accountable without retaining the practical conditions needed to exercise judgement. Composite cases allow those patterns to be examined directly while preserving the book’s commitment to evidence, fairness and organisational confidentiality.

---

# Part I — The Accountability Problem

AI governance often appears to begin with a policy, a procurement decision or a formal deployment. In practice, it usually begins earlier, after AI has already entered work and begun shaping what people see, decide and do.

The first part of this book follows that movement from hidden participation to formal accountability. It asks where AI is already present, whether policy changes what actually happens and what remains of human ownership when the practical basis for judgement has started to move elsewhere.

---

# Chapter 1 — The AI You Are Already Governing

For many organisations, the story of AI adoption still begins with a meeting. Someone proposes a pilot, a vendor demonstrates a product, a transformation team prepares a business case, and risk, legal, technology and HR are invited into the discussion. Eventually a decision is made about whether the organisation should proceed. It is a reassuring sequence because it suggests there is a recognisable moment when AI enters the organisation and governance can begin.

Increasingly, that moment does not exist.

AI often arrives quietly, folded into work that already has a name, a budget and an owner. A new feature appears inside software the organisation has used for years. A vendor adds generative capability to search, analytics or workflow tools. An employee opens a public AI service to summarise a document, draft a message or make sense of a set of notes. A manager experiments with it before a difficult conversation. A recruiter uses it to improve a job advertisement. A project officer asks it to turn a dense meeting transcript into actions. None of these activities necessarily feels like the deployment of an AI system. They feel like work becoming easier.

That is where the governance problem begins. The technology does not always arrive wearing a badge that says *govern me*.

Samsung discovered the point early in the generative-AI cycle. In May 2023, the company restricted employee use of external generative AI services after sensitive information, including source code, had been uploaded to ChatGPT (Gurman, 2023). The significance of the incident was not that Samsung had deliberately launched a new enterprise AI platform and governed it badly. The risk emerged because a powerful capability was already available to employees before the organisation's normal controls had caught up with the way people were beginning to use it.

The episode became an early example of what is now often called *shadow AI*: AI use that sits outside the formal approval or oversight an organisation expects. The term is useful because it points to unsanctioned use, but it can also make the problem sound narrower than it is. If shadow AI is understood only as employees using unauthorised websites, governance becomes a policing exercise. The more important issue is visibility. Procurement records, approved-technology registers and vendor contracts may tell an organisation what it has formally acquired, but they do not necessarily show every place where AI is already shaping work.

Some AI is difficult to see because employees introduce it informally. Other AI is difficult to see because it is embedded inside systems the organisation already regards as ordinary infrastructure.

Consider the experience of an employee asking a question in Microsoft Teams. The interaction may look like a familiar conversation, yet the system behind it can be considerably more complex. Cemex, for example, has developed an HR agent using Microsoft Copilot Studio that operates through Teams and connects with SharePoint, ServiceNow and SAP SuccessFactors. It began as a controlled pilot and moved into production support for around 800 employees in Central Mexico in January 2026 (Microsoft, 2026a). From the employee's perspective, the experience may be little more than asking for help. From the organisation's perspective, the interaction can involve several systems, data sources, permissions and potential actions.

Wipro provides another illustration. Its employee-recognition agent is embedded within Microsoft 365 Copilot and draws on enterprise information from sources that include email, Teams, meetings, OneDrive and SharePoint, while connecting with organisational workflows and Dynamics 365 (Microsoft, 2026b). The point is not whether these implementations achieve every benefit described in vendor material; those claims require independent scrutiny. The cases are useful because they show how AI can become part of the environment in which work already happens. The user does not necessarily leave a familiar platform to enter a clearly separate “AI system”. The AI is threaded through existing infrastructure.

Once that happens, the boundary between an AI system and the rest of the organisation's digital environment becomes less obvious. A capability may sit inside a larger platform, draw on data from several systems, influence what a person sees, and trigger activity somewhere else. The organisation may know the product name and still know surprisingly little about the work the AI is participating in.

A technology inventory therefore matters, but it cannot carry the whole governance burden. The Australian Government's AI systems register template recommends recording the AI systems an organisation uses, their use cases, accountable people and appropriate governance level. It also makes the often-overlooked point that registers should include AI features embedded in common software packages (Australian Government, 2025a). That is a useful discipline because it prevents governance from being limited to systems procured under an explicit AI label.

The difficulty appears when the inventory becomes the destination rather than the starting point. An entry that reads *Microsoft Copilot — approved* may be accurate, but it says very little about what has actually been approved. The same capability could be used to improve the wording of an internal email, summarise a confidential investigation, analyse a spreadsheet, help a manager interpret employee information or participate in a workflow that initiates transactions. The product has not changed, yet the organisational consequence has.

Australian guidance makes that distinction explicit. It notes that the same AI system can present very different levels of risk depending on how it is used. A general-purpose generative AI system used to draft marketing emails is not the same governance proposition as the same system used to assess job applications (Australian Government, 2025b). The technology may be identical, but the people affected, the information involved, the potential harm and the evidence required to justify the use are very different.

NIST's AI Risk Management Framework reaches the same issue from another direction. Its Map function asks organisations to understand intended purpose, users, deployment settings, impacts, limitations, foreseeable uses and potential misuse. It also recognises that AI systems sit within networks of interdependent actors and activities, none of whom necessarily has complete visibility or control (NIST, 2023). In other words, knowing what the tool is does not tell an organisation enough about what the organisation is doing with it.

That becomes more important as AI participates more deeply in decisions and actions. There is a considerable difference between a system producing text that a person may choose to ignore and a system ranking applicants, identifying suspicious transactions, prioritising customer complaints, recommending a clinical intervention or initiating an organisational action. In each case, “AI is being used” is technically true, but it is too blunt a description to support serious governance.

A more useful approach is to examine the *use case*: the relationship between the AI, the work being performed and the consequence that may follow. The questions then become more practical. What work is the system participating in? What information does it use? Who may be affected? Is it generating, recommending, prioritising, deciding or acting? What happens if it is wrong? Can the outcome be reversed? Who can intervene?

These questions reveal the degree of **decision participation** involved. An AI system does not need to make the final decision in order to shape one. It may determine which information is surfaced, narrow the options a person considers, rank cases before a human sees them, or produce the first draft that becomes the starting point for later judgement. It may also create a workflow step that gradually becomes part of how the organisation expects work to be performed. The governance relevance lies not only in whether AI is present, but in what role it has acquired inside the work.

This is why the more useful starting point is to **govern the work AI participates in, not merely the tools labelled AI**. That is not an argument against registers or inventories. A register tells the organisation where to look. Governance begins when the organisation can see enough of the surrounding work to understand what it is looking at.

There is an equally important risk in taking visibility too far. If every spell-checker, recommendation, autocomplete feature and low-consequence prompt is subjected to the same process as an AI system affecting employment, safety, finance or access to essential services, governance itself becomes difficult to sustain. The organisation can accumulate forms, approvals and queues without becoming meaningfully more controlled.

The Australian Government's AI screening tool is designed to avoid that problem. It recommends screening AI systems and individual use cases so that higher-risk applications receive greater scrutiny while less consequential uses do not overwhelm governance processes. Its example is deliberately ordinary: an AI system that automatically decides customer complaints and handles refunds warrants different attention from a chatbot that processes restaurant bookings (Australian Government, 2025c).

The important idea is proportionality. Visibility should help an organisation decide where governance effort belongs, not force every use into the same machinery. Some uses may operate under general policies and controls. Others may require a documented assessment, specialist approval, monitoring, explicit human intervention points or restrictions on what the system is permitted to do. Some uses should not proceed at all. The difference should follow the consequence of the use, not simply the sophistication of the technology.

This is where the idea of *consequential use* becomes useful. A technically simple model can deserve more attention than a highly capable generative system if the simpler model affects employment, money, safety, access, privacy, rights or another significant organisational interest. Conversely, a sophisticated system used for low-consequence drafting may require far less scrutiny. Technical capability matters, but it is not a substitute for understanding consequence.

The same principle changes how organisations should respond to shadow AI. A ban on unapproved tools may be appropriate where confidential information, legal obligations or security controls are at risk, but prohibition alone does not create visibility. In some organisations, unauthorised use may also signal a gap between what employees are trying to achieve and what approved systems make easy or practical. That does not excuse bypassing controls; it does mean that governance should be interested in the work as well as the breach.

Samsung's experience remains useful precisely because it shows how quickly experimentation can become an information-governance problem. Yet the lesson is not simply “stop employees using public AI”. It is that organisations need enough visibility to understand where AI is entering work, what people are asking it to do and what existing controls no longer fit the way that work is being performed.

Embedded enterprise AI creates the same challenge from the opposite direction. Cemex's HR agent is not significant merely because it can answer questions. As it connects with organisational systems, it participates in the path from an employee request to an organisational response. Wipro's recognition agent likewise draws on enterprise information and sits inside ordinary productivity tools. Once AI becomes part of the route through which work is interpreted, prioritised or executed, the organisation needs to understand that participation whether or not the user experiences the technology as a separate AI system.

A useful opening discipline for governance therefore begins with the work itself. Look at the places where information is interpreted, options are narrowed, people are ranked, priorities are set, recommendations are produced, content is generated and transactions are initiated. Then ask where AI is participating in those moments, what role it is playing, and what consequence follows if it performs badly.

That exercise will reveal many uses that are mundane and a smaller number that deserve much closer attention. It may also reveal that an organisation has already delegated influence to AI without ever making an explicit decision to do so. That is the value of visibility: it turns accidental adoption into something that can be examined, discussed and governed.

The register still matters. The inventory still matters. Procurement records still matter. They are useful maps, but they are not the territory. The organisation exists in the work people actually perform, and AI governance begins to become real only when the organisation can see where AI has entered that work and what role it is playing there.

Once that becomes visible, a more uncomfortable question follows. It is no longer enough to ask where the AI is. The question becomes: **what, exactly, is governing what it is allowed to do?**

---

# Chapter 2 — When Policy Exists but Control Does Not

By the time many organisations begin to take AI governance seriously, they already have the beginnings of a respectable governance architecture. There is a policy. There are principles. Someone has created an approval form. A committee has been given oversight. A register may list approved systems and use cases. Training has been rolled out, perhaps unevenly, and senior leaders can point to a document stating that the organisation is committed to responsible AI.

From a distance, the picture can look reassuring because the visible elements of governance are present. The difficulty appears when the organisation has to move from declared purpose to a live decision. Who can approve this particular use? What evidence must they see before doing so? If the system changes after approval, who notices? If the risk increases, who has authority to stop it? What happens when the business owner wants to proceed but the risk function is uncomfortable? Who monitors whether a control designed six months earlier still works?

These questions expose a difference that is easy to miss when governance is discussed mainly through policies and frameworks. It is one thing to state what the organisation believes should happen. It is another to create the organisational conditions that make those intentions real.

Policy matters because organisations need to make their intentions explicit. They need to state what they value, what they will not accept, what responsibilities people carry and what standards should guide judgement. The problem begins when the existence of those statements is mistaken for evidence that governance has been enacted. Organisational researchers have long examined this gap between formal arrangements and operational practice. In the management literature, the phenomenon is commonly described as **decoupling**: formal policies or structures are adopted while day-to-day practice remains only loosely connected to them (Westphal & Zajac, 2001).

The gap does not necessarily imply bad faith. Formal and operational arrangements can drift apart because incentives point in different directions, responsibilities are unclear, processes are too cumbersome, people lack the capability to apply them, systems were never changed to support the new requirement, or approval mechanisms were designed too far from the work they are meant to govern. More recent regulatory scholarship makes a similar distinction between “work as imagined” in policy and “work as done” in practice (de Bree & Stoopendaal, 2020).

Most organisations do not operate as neat diagrams. They operate through habits, workarounds, inherited systems, competing accountabilities and decisions made under time pressure. A policy may assume that a manager will escalate a use case when a threshold is reached, while the manager may not know that the threshold exists. A committee may believe it has oversight, while operational teams see it as advisory. A risk process may require evidence that nobody has been tasked to collect. A control may technically exist but be bypassed because the workflow makes compliance impractical.

AI does not invent this organisational problem, but it can make the consequences harder to ignore. A policy may state that human oversight is required, while the workflow gives no clear indication of when intervention is necessary. A principle may require fairness, yet the approval process may never specify what evidence of fairness is sufficient. A committee may formally own governance at the organisational level while managers, system owners and frontline teams remain uncertain about who can make the operational decision in front of them. Policy can therefore begin to look stronger than the control it actually creates.

The same distinction is already embedded in the major governance frameworks. ISO/IEC 42001 does not describe an AI management system as a policy document. It describes a system that establishes policies and objectives **and the processes required to achieve them**, supported by implementation, performance evaluation and continual improvement. NIST takes the same view from a risk-management perspective. Its AI Risk Management Framework expects policies, processes, procedures and practices to be implemented effectively, supported by accountability structures, defined responsibilities, training, monitoring and periodic review (ISO/IEC, 2023; NIST, 2023).

The shift is subtle but important: governance is no longer something the organisation possesses. It is something the organisation must be able to do.

The difference becomes clearer when governance is tested against an actual use. Imagine a business team proposes using a generative AI system to screen customer complaints and recommend which cases should be escalated. The organisation's policy may say that AI must be fair, transparent and subject to appropriate human oversight. Those principles are sensible, but they do not yet determine what happens next. Someone still has to decide what evidence would demonstrate that the screening process is sufficiently fair, what information a reviewer needs to understand why a case was prioritised, when specialist approval is required, who monitors performance after deployment, and whether a change from recommendation to automatic action invalidates the original approval.

In that moment, the organisation discovers whether its policy is connected to an operating system of governance or merely sitting beside one.

The mechanisms that create that connection are often ordinary. An approval threshold determines when a use needs specialist review. A system permission prevents an AI agent from taking an action outside its authorised scope. A deployment process requires specific evidence before release. A named role has authority to pause a system when operating conditions change. Monitoring reveals that a control once considered adequate is no longer sufficient. None of these mechanisms is particularly glamorous, but they are the points at which principles begin to alter organisational behaviour.

The difference becomes sharper when we separate **instruction** from **enforceable control**. An instruction tells someone what they should do. A control changes what they can do, what they must do, or what evidence they must provide before an action can proceed. An instruction may say, “Do not use AI with confidential information.” An enforceable control may restrict access, prevent data transfer, require an approved environment, create an audit trail or block a transaction until specific conditions are met.

The distinction is not absolute. Organisations cannot technically enforce every requirement, nor should they try. Some controls depend on professional judgement, trust and escalation; others are embedded in systems and workflows. The practical question is whether the organisation has consciously decided which behaviours rely on judgement and which require stronger boundaries.

That is one reason governance artefacts and governance capability should not be treated as the same thing. A policy, register, committee, standard, risk assessment and training module are artefacts. They are visible, reviewable and often necessary. Governance capability is the organisation's ability to use those artefacts to make, constrain, explain and revisit real decisions.

At executive and board level, the difference matters because artefacts are easy to count. A board can be told that the organisation has adopted an AI policy, created a governance committee, completed training and established a register. All of those statements may be accurate. Yet they do not reveal whether the organisation can answer the harder operational questions when a decision becomes consequential.

That gap creates a particular form of risk: **false assurance**. Leaders may believe control exists because the governance architecture is visible, while the actual links between policy, authority, execution and evidence remain weak. The problem is not necessarily deception. It is the tendency to treat documented structure as evidence of operational effectiveness.

The gap can be uncomfortable to examine. A policy may say that certain uses require human approval, but the system may not record whether approval occurred. A committee may review high-risk applications, while the organisation has no reliable way of knowing whether all high-risk uses have been identified. A procedure may require monitoring, but nobody owns the monitoring data. A manager may formally remain accountable while the decision process has become so technically complex that meaningful challenge is difficult. At that point, the governance system is not absent; it is incomplete.

Here the operating-system idea becomes useful. Policy sits close to **purpose**: it tells the organisation what it seeks to achieve and what it considers acceptable. To become operational, that purpose has to connect to **authority**: who may decide, approve, escalate or stop. Authority then needs **boundaries**: what is permitted, under what conditions, and where limits apply. Those boundaries have to shape **execution**: what people and systems actually do. Execution then has to leave **evidence** that the organisation can inspect.

This is an early governance movement, not a rigid lifecycle or the complete model. It helps expose where control can disappear. If purpose is clear but authority is vague, policy remains aspirational. If authority is assigned but boundaries are weak, decisions become inconsistent. If boundaries exist but are not reflected in execution, the organisation relies on memory and goodwill. If execution occurs without evidence, assurance becomes guesswork. These are organisational design problems, not simply compliance problems.

The movement also explains why forms and committees can be either useful or hollow depending on how they are connected to work. A committee can bring together legal, risk, technology, data, security, HR and business perspectives that no single function holds alone. An approval form can force a team to articulate purpose, risk and evidence. A register can improve visibility. But each of these tools depends on the quality of the decisions around it. A committee without clear decision rights may add discussion without adding control. A form that asks whether a system is “high risk” without defining the basis for that judgement may simply move uncertainty into a checkbox. A register that is not linked to approval, monitoring or review may become a catalogue rather than a control.

Current responsible AI research shows that this translation problem is not merely theoretical. Studies of developers and governance practitioners continue to report difficulties in converting high-level commitments into usable processes, assigning responsibility across functions and adapting governance as systems and contexts change (Papagiannidis et al., 2025; Sayan & Bueechl, 2025). The 2026 Stanford AI Index likewise reports that formal responsible AI policies are becoming more common while organisations continue to face implementation barriers involving knowledge, budget and regulatory uncertainty (Stanford HAI, 2026).

Those findings need to be read carefully. They do not show that formal governance is ineffective. In fact, evidence from public organisations points the other way when policy, standards, training and clearly assigned responsibilities are integrated into day-to-day practice (Almeida & Santos Júnior, 2025). The issue is not whether organisations formalise governance. It is whether those formal elements are internalised strongly enough to influence what people and systems actually do.

The temptation to use the phrase *governance theatre* therefore needs restraint. Some organisations certainly display policies, principles or committees in ways that create an appearance of control without materially changing practice. But weak implementation is not always theatre. Sometimes the organisation is genuinely trying to govern responsibly and has simply not solved the harder problems of authority, coordination, capability, evidence and feedback.

Those problems are difficult because they require changes to the organisation itself. It is relatively easy to approve a policy. It is much harder to redesign a workflow so that the right person sees the right evidence before a decision is made. It is harder to decide which risks can be accepted locally and which require escalation. Harder again is building monitoring that can detect when the assumptions behind an approval have changed. Governance becomes demanding at precisely the point where it stops being a document and becomes a relationship between decisions, people, systems and controls.

Monitoring is part of that relationship because approval is never the end of the story. A model may change. A vendor may update a feature. The data may shift. The organisation may start using the system for a different purpose. What began as a low-consequence use may become more consequential as employees rely on it more heavily or as the system gains the ability to initiate actions. The original policy may remain unchanged while the risk around the use changes substantially.

The board-level consequence is important. A governance system that cannot detect change may continue reporting that a use is “approved” long after the conditions supporting that approval have shifted. The status remains green because the record has not changed, not because the risk has remained stable. In that situation, governance can produce reassurance while the underlying control environment deteriorates.

That is why continual review appears so consistently in serious governance frameworks. Governance has to remember not only what was approved, but why, under what conditions, with what evidence and with what limits. It also has to know what has changed since the approval was granted. Otherwise, the organisation can become increasingly confident in its own paperwork while gradually losing sight of the system it thought it had governed.

The policy–practice gap is therefore better understood as a problem of **coupling**. Policy is one component of the governance system. Roles are another. So are permissions, controls, evidence requirements, escalation, monitoring and review. Governance becomes credible when those components reinforce one another closely enough that the organisation's stated principles survive contact with real work.

The useful distinction is this: **policy tells the organisation what it intends; governance determines what actually happens.** The statement is not a dismissal of policy. It is a reminder that principles acquire organisational force only when they alter decisions, permissions, controls, evidence and behaviour.

For leaders, that changes the diagnostic question. Instead of asking only, “Do we have an AI policy?”, the more useful question becomes, “What changes in a real decision because this policy exists?” If the answer is unclear, the organisation may have declared governance without yet building the operating capability to sustain it.

The distinction becomes especially important when responsibility is assigned to a human being. A policy may state that a manager remains accountable for the final decision, and the organisation may point to that sentence as evidence that human oversight has been preserved. Yet the formal assignment of accountability does not tell us whether the person still has the practical ability to understand, challenge or control the decision.

That is the question waiting underneath the policy.

What if the human remains accountable while the practical control has already begun to move somewhere else?

---

# Chapter 3 — The Human Who Still Owns the Decision

The decision arrives on a manager's screen looking almost complete.

The relevant cases have been filtered. The options have been ranked. A recommendation has been generated. The supporting information has been summarised. A few exceptions are flagged for attention. The system has done what it was designed to do: reduce complexity, accelerate the work and present the human decision-maker with something manageable.

At the bottom of the page is the part that matters most to the organisation.

**Approve.**

The manager is still in the loop. The final action is still human. The governance process can still point to a person whose name is attached to the decision. On paper, accountability appears intact.

But the signature tells us much less than we think.

By the time the manager arrives, the decision may already have been shaped in important ways. The system may have determined which evidence was surfaced and which was left in the background. It may have ranked alternatives, highlighted risks, narrowed the field of attention or framed one option as more plausible than another. The human may retain the final click while exercising far less influence over how the decision was formed.

That does not mean the decision is wrong. It does mean that a human sign-off is not, by itself, evidence of meaningful human control.

This is where AI governance becomes more difficult than the language of “human oversight” often suggests. Organisations can preserve a named decision-maker while gradually changing the work that made that person's judgement meaningful. The role remains. The accountability remains. Yet the practical ability to understand, challenge or redirect the process may begin to thin out.

The distinction matters because accountability is not simply a label attached at the end of a workflow. It depends on what the accountable person could realistically know, question and change before the outcome became final.

The problem is not new to AI. Human-factors researchers have long examined what happens when automation takes over routine activity while a human remains available to intervene. In their classic study of out-of-the-loop performance, Endsley and Kiris found that higher levels of automation could reduce situation awareness and make it harder for operators to resume control effectively when automation failed (Endsley & Kiris, 1995). The finding does not mean that automation always weakens judgement or that humans should perform every task manually. It points to a more specific difficulty: the less involved a person is in the normal operation of a process, the harder it may be to recover the context required when abnormal intervention suddenly becomes necessary.

That distinction matters in organisations because intervention is rarely required under normal conditions. People are usually asked to step in when the ordinary process has already failed, become ambiguous or produced something unexpected. Yet the more effectively the automated system handles routine work, the less often the human may need to exercise the judgement that the organisation is relying on them to provide when something unusual happens. The paradox is uncomfortable: the system can make human intervention less frequent while simultaneously making the organisation more dependent on that intervention when conditions fall outside the norm.

The human may therefore retain responsibility for the exceptional case while becoming progressively less familiar with the ordinary work from which that exception emerged.

In AI-supported work, the problem can be more subtle still. The human may not simply be waiting for a machine to fail. They may be evaluating an output produced through reasoning, ranking or information selection they did not observe. The system may have performed hundreds of small steps that are invisible by the time the result reaches the reviewer. The final recommendation may be concise precisely because the complexity has already been processed elsewhere.

A manager who receives a short recommendation after the system has processed a large body of information is not in the same position as a manager who worked through the information themselves. A recruiter reviewing an AI-generated shortlist is not necessarily exercising the same judgement as one who examined the full applicant pool. A risk officer presented with an alert score is not making the same decision as someone who saw how the score was constructed. In each case, the human may have authority to accept or reject the result, but authority alone does not tell us whether they possess enough context to challenge it well.

That is why the phrase *human in the loop* can be deceptively comforting. It describes a position in a process. It does not tell us whether the person has enough knowledge, time, information or authority to exercise meaningful judgement from that position. Nor does it tell us how much of the decision has already been shaped before the human appears.

Current regulation has begun to reflect this distinction. Under the European Union's AI Act, human oversight requirements for defined high-risk systems go well beyond the presence of a person. Oversight must be designed so that people can understand relevant system capabilities and limitations, remain aware of automation bias, correctly interpret outputs, disregard or override them where appropriate, intervene in operation and stop the system when necessary. Deployers are also expected to assign oversight to people with the necessary competence, training, authority and support (European Union, 2024).

Those requirements are jurisdiction-specific and should not be treated as a universal blueprint. Their value here is more revealing than prescriptive. They expose the assumptions hidden inside the phrase *human oversight*. Effective oversight presumes that the person can see enough, understand enough and act with enough authority for the intervention to matter. Current human-oversight research reaches a similar conclusion, distinguishing AI's operative agency from human evaluative agency and warning that the human role can become a rubber stamp when people cannot understand, verify, steer or substitute the result (Sterz et al., 2024).

Without those conditions, a human can remain formally present while becoming practically peripheral.

That possibility also changes how responsibility should be understood. AI decisions are rarely produced by a single actor. Providers make design choices. Organisations decide where systems will be used and for what purpose. Data owners determine what information enters the process. System owners configure access, limits and workflows. Managers set risk tolerances and approval thresholds. Reviewers interpret outputs. Executives determine where authority sits and what resources are available for monitoring, challenge and intervention.

The point is not that every actor should be held equally responsible. They should not. The point is that accountability has to remain legible across the chain of contribution. If several actors materially shape an outcome, the organisation needs to know what each is responsible for, what each can control, and where accountability ultimately rests when the parts are brought together.

The OECD AI Principles reflect this reality by treating accountability as connected to an actor's role, context and ability to act, alongside traceability and ongoing risk management across the AI lifecycle (OECD, 2024). This helps prevent the debate from collapsing into a search for one person to blame. It also prevents the opposite error: allowing shared involvement to become an excuse for no one being clearly accountable.

Distributed responsibility does not mean diluted responsibility. It means the organisation must be clear about who is accountable for what, at which point, and with what capacity to act.

This is where the idea of the **moral crumple zone** becomes useful. Madeleine Elish used the term to describe situations in which responsibility is disproportionately attributed to a human actor at the point where a complex automated system fails, even when that person had limited practical control over the system's behaviour (Elish, 2019). The metaphor is deliberately uncomfortable. In a vehicle, a crumple zone absorbs the force of an impact. In an automated system, the nearby human can become the place where organisational blame is absorbed.

The concept should not be stretched too far. Not every human reviewer is a moral crumple zone, and organisations should not use complexity as an excuse to dissolve personal responsibility. But the idea exposes a familiar governance temptation: to preserve accountability on paper by attaching it to the nearest human role, even when the real control over the outcome is distributed much more widely.

This matters at executive and board level because formal human approval is easy to report. A governance dashboard can show that every consequential use has a named owner. A policy can require human review. A committee can confirm that escalation routes exist. Yet none of those artefacts tells the board whether the person carrying the accountability actually receives the information needed to challenge the system, understands enough to recognise when intervention is required, or can act quickly enough for the intervention to matter. That creates a different assurance question: the organisation may be able to prove that a human was present while remaining unable to prove that meaningful human judgement was available.

A manager can therefore be accountable without being in full control. That is not necessarily wrong. No executive controls every factor behind a decision, and organisations have always relied on delegation, expertise and systems. The governance problem arises when the gap between accountability and practical control becomes too large to ignore.

The gap often develops gradually. Authority may remain formally unchanged while more of the preparatory work migrates to the system. The human may continue to approve the decision while seeing less of the underlying evidence. The organisation may continue to describe the workflow as human-led even as the system increasingly determines the order, framing and content of what the human reviews. Over time, review can become ritual rather than judgement: the person still has the right to say no, but the practical basis for saying no may have weakened. The process still contains a human checkpoint, but the checkpoint may occur after the important framing decisions have already been made. The organisation still has an accountable owner, but the owner's control may be more symbolic than operational.

At that point, the problem becomes more than an individual capability issue; it becomes a governance-design issue. A person may have nominal approval authority but lack access to the information needed to challenge the recommendation. A manager may be authorised to override a system but have little realistic ability to understand how the system reached its conclusion. A reviewer may technically be able to intervene, but only after the system has already acted or within a timeframe too short for meaningful scrutiny. A senior leader may be accountable for outcomes produced through a chain of systems and specialist teams whose interactions they cannot directly observe.

In each case, accountability remains visible while practical control becomes thinner. I use the term **Accountability–Control Gap** to describe this mismatch between the accountability assigned to a person, role or organisation and the practical control they can realistically exercise over the decision or outcome.

The underlying problem is not new. It sits beside established work on responsibility gaps, control gaps, meaningful human control, moral crumple zones and out-of-the-loop performance. The contribution here is organisational rather than philosophical. It gives leaders a way to ask whether the accountability built into an AI-enabled workflow is supported by enough practical control to remain meaningful.

That distinction becomes increasingly important as AI takes on more of the work before a decision reaches a human. Consider **nominal approval**: the manager signs, but the evidence they see has already been heavily filtered, so the approval is real while the informational basis for judgement is narrow. Under **technical dependence**, the manager has formal authority to challenge the system but lacks the expertise or interpretive access to do so effectively; they can say no in theory while remaining highly dependent on the system they are supposed to scrutinise. With **operational delay**, the manager may understand the risk and possess authority to intervene, but the mechanism is too slow, too cumbersome or available only after the critical action has occurred.

These are different manifestations of the same problem. The accountable person is still present. The governance process still contains a human role. Yet the conditions that give that role substance have weakened.

The risk is not simply unfair blame after something goes wrong. The deeper governance problem appears earlier. If the organisation does not recognise the gap, it may overestimate the quality of its own control environment. A dashboard may show that every high-risk decision has a human approver. A policy may state that AI outputs are reviewed. A procedure may require escalation. All of those statements may be accurate while saying very little about whether the human involved could exercise independent judgement when it mattered.

This is why *delegation does not transfer accountability* is a useful organisational principle, but only if it is understood carefully. It does not mean that the same individual must personally own every decision, that accountability cannot be distributed across roles, or that legal liability is identical in every jurisdiction. It means that handing work to AI does not make the organisational responsibility for that work disappear.

NIST's AI Risk Management Framework reflects this logic by requiring clear roles, responsibilities and delegated authorities while retaining executive responsibility for decisions about AI risks. Authority can move through an organisation. Tasks can be delegated. Decisions can be distributed. Accountability still has to remain visible and appropriately aligned with the capacity to act (NIST, 2023).

Recent work on AI decision rights points in the same direction. MIT CISR has argued that organisations need to make explicit choices about which parts of a decision humans frame, where AI acts and how humans remain involved in learning and adjustment as risk and ambiguity change (Sebastian et al., 2026). The importance of that work is not the particular matrix. It is the recognition that AI participation in a decision is an organisational design choice, whether the organisation acknowledges it or not.

The organisational question is therefore no longer simply, *Who owns the decision?* It is whether the person or role carrying the accountability still possesses enough practical control for that accountability to be meaningful.

That question should make leaders uncomfortable in exactly the right way. It shifts attention away from job titles and approval boxes and towards the actual conditions under which judgement is exercised.

A human signature is still important. So is a named accountable owner. So are escalation rights, approvals and oversight roles. But none of them can carry the full burden of governance if the person behind them no longer has a realistic ability to understand what is happening, challenge the system's influence or intervene when necessary.

The organisation may have preserved the name of the human decision-maker while changing almost everything that once made human judgement meaningful.

If that is possible, then the next question is unavoidable.

What must that human still be able to know, understand and do for accountability to remain real?

---

# Part II — Making Accountability Meaningful

Naming a human owner does not make accountability real. It becomes meaningful only when the organisation preserves the capability, visibility, authority and intervention capacity required for judgement to alter the outcome.

The second part turns that principle into organisational design. It examines what may be delegated to AI, where those decisions become real in the infrastructure of work, whether people can still exercise judgement and how governance can create legitimate room to act without surrendering control.

---

# Chapter 4 — The Conditions for Meaningful Accountability

The board paper used one sentence to settle the question.

**All consequential AI-supported decisions remain subject to human review.**

The statement appeared under a green status indicator. Every high-impact use had a named owner. Relevant employees had completed the required training. Approval records showed that a human had reviewed each decision before it became final. Against the usual measures of governance activity, the control looked complete.

A director asked what *human review* meant in practice.

Could the reviewers see the evidence on which the recommendation was based? Did they know when the system was operating outside its intended conditions? Could they disagree without sending the decision back to the same executive sponsor pressing for faster throughput? If a reviewer identified a pattern affecting more than one case, could they pause the wider process, or only reject the decision in front of them? Who carried responsibility for a vendor update, a missing data field or an interface that concealed uncertainty?

The paper did not answer those questions. It could prove that people were present, trained and named. It could not yet prove that their judgement was usable.

That distinction is the work of this chapter. Chapter 3 established the **Accountability–Control Gap**: accountability can remain formally assigned while the practical control needed to exercise it becomes progressively weaker. The next step is not to search for a better label to attach to a person. It is to examine the conditions the organisation must preserve if that person's accountability is to mean more than administrative ownership.

Human–automation research has been circling this problem for decades. Ability, authority, responsibility and control are related, but they are not interchangeable. Flemisch and colleagues argued that cooperative human–machine arrangements require a workable balance among them. Later research on meaningful human control applied the same logic to AI systems, warning that final authority means little when the person given that authority lacks the practical ability to use it. A manager who merely signs an AI-generated hiring recommendation may remain the formal decision-maker while contributing very little independent judgement to the decision itself (Flemisch et al., 2012; Cavalcante Siebert et al., 2023).

Organisations nevertheless tend to treat role assignment as proof of control. A policy names the approver. A procedure establishes an escalation route. A workflow records the final click. These arrangements are necessary because accountability cannot remain vague, but they tell us only where responsibility has been placed. They do not tell us whether the role can understand what is happening, receive the information that matters, exercise legitimate authority or change the outcome before the opportunity has passed.

Meaningful accountability has to be designed as an organisational capability, not attached retrospectively to the nearest human name.

The first condition is **capability**: the accountable arrangement must contain enough understanding of the work, the consequence and the system's role to support an independent judgement. This does not require every executive, manager or professional to understand model architecture or every technical component. It requires them to understand the decision they are being asked to own, how AI has participated in forming or executing it, where the important limitations sit and what an alternative judgement would require.

This is practical evaluative competence. A manager reviewing an AI-supported employment decision needs enough knowledge of the role, evidence and assessment process to recognise when a recommendation is weak or inappropriate. A clinician using decision support needs domain expertise and a working understanding of the tool's intended use, uncertainty and failure conditions. A governance committee considering an agentic workflow needs timely access to expertise on permissions, data, escalation and downstream actions. The capability may be distributed across a team, but it must be available to the accountable decision process when it is needed, not several days after the decision has become irreversible.

Capability can also erode quietly. As systems carry more of the ordinary work, people may have fewer opportunities to practise the judgement the organisation expects them to supply when something unusual occurs. The effect is not inevitable. Automation can improve consistency, reduce workload and support stronger decisions in many settings. Human-factors research shows, however, that the outcome depends on task design, system reliability, workload, engagement and the conditions under which intervention is required. The governance question is not whether organisations should preserve manual work for its own sake. It is whether they are preserving the human capability on which their accountability model relies (Parasuraman & Riley, 1997; Onnasch et al., 2014).

Training contributes to that capability, but a training record is evidence of an activity, not proof that judgement remains usable. A person may complete a module without being able to recognise an out-of-domain case, challenge a plausible but weak recommendation or formulate an alternative course of action. Current regulation and guidance increasingly distinguish between training as an event and competence as a working condition. The EU AI Act requires people assigned to oversight of defined high-risk systems to have the necessary competence, training, authority and support. Australian guidance similarly expects accountable people to understand system capabilities, risks and behaviours and to know when and how to intervene (European Union, 2024; Australian Government, 2026b).

Capability alone cannot support a decision if the person cannot see what matters. The second condition, **visibility**, concerns decision-relevant access to evidence, uncertainty, limitations and change signals. A highly experienced manager cannot judge information that has been filtered out. A domain expert cannot recognise performance drift that the organisation does not monitor. A reviewer cannot challenge the formation of a recommendation if the interface presents only a conclusion and an authoritative-looking score.

Research on effective human oversight describes this as epistemic access: the person must know enough about the situation, the risk and the available response to act effectively (Sterz et al., 2024). In organisational terms, that may include access to the evidence used, important exclusions, material uncertainty, known system limits, signs that operating conditions have changed and the options available if concern arises.

Visibility is not the same as disclosure. A hundred-page technical report may satisfy a documentation requirement while doing little for a live decision. Explanations, model cards and confidence scores can support judgement, but they do not consistently improve human–AI performance. Information may arrive too late, overwhelm the reviewer or create misplaced confidence in the system. Research on trust and explanation shows that transparency must be matched to the task and to the user's capacity to interpret it; information that cannot guide action is not meaningful visibility (Lee & See, 2004; Zhang, Liao & Bellamy, 2020).

The board's green status indicator therefore concealed an important question. It could show that reviewers had access to a system. It could not show whether they received the information needed to identify an exceptional case, recognise when challenge was required or understand what could be done next. Capability and visibility are related but distinct: expertise without evidence is blind, while evidence without the capacity to interpret it is little more than display.

The third condition is **authority**. A person may understand the problem and see the relevant evidence yet lack legitimate standing to change the decision. This occurs whenever technical, professional or risk experts are invited to advise while decision rights remain somewhere else. The expert can explain the weakness, recommend a pause and anticipate the consequence, but the contract, workflow or hierarchy does not permit them to act.

**Capability does not confer authority.**

Authority must be assigned deliberately. It includes recognised standing to question, defer, seek another view, override, escalate or stop. It must also be protected. A policy can give a manager the right to reject an AI recommendation while performance targets punish delay, executive expectations favour acceptance or the organisation treats disagreement as evidence of resistance to innovation. The written authority remains intact, but its practical use becomes costly or unsafe.

The distinction is reflected across current governance frameworks. NIST separates responsibility, delegated authority, empowerment, training and resources rather than assuming that they arrive together. The EU AI Act distinguishes competence from authority and support. The OECD connects accountability to role, context and ability to act. The common thread is not that every organisation should use the same decision structure. It is that naming a person cannot substitute for defining what they are permitted to do and protecting their ability to do it (NIST, 2023; OECD, 2024).

Even legitimate authority is insufficient when action cannot change the outcome. **Intervention capacity**, the fourth condition, is the practical ability to act in time, through usable mechanisms and with enough support to make the intervention effective. A manager may have a recognised right to stop a process, but exercising it may require several additional approvals. The system may already have initiated downstream actions. The interface may permit rejection of one output without pausing the workflow that continues to produce others. By the time the concern reaches someone with technical control, the decision may be difficult or impossible to reverse.

Sterz and colleagues describe the necessary relationship as causal power: effective oversight requires the human to be capable of making a relevant change, not merely observing what is happening (Sterz et al., 2024). Recent work on meaningful human authority and applied oversight develops the same point through temporal capacity, intervention power and intervention effectiveness. The person needs enough time, an accessible mechanism and organisational support to alter the trajectory before avoidable harm becomes irreversible (Sterz et al., 2024; Calvert, 2025).

A stop button may form part of the answer, but its existence proves little without context. The organisation still needs to know what it stops, who may use it, whether action can be reversed, what happens to work already in motion and whether an alternative pathway exists. An intervention mechanism that is technically available but operationally unusable creates another form of ceremonial control.

Intervention capacity belongs to the whole environment around the accountable role. It may depend on protected time, specialist access, escalation response, system permissions, rollback mechanisms, staffing and the organisation's willingness to tolerate interruption. In one workflow, intervention may mean rejecting a recommendation. In another, it may mean suspending automated action, restricting a model's permissions or removing a system from use. What matters is whether the intervention available matches the role AI is playing and the consequence that may follow.

The final condition, **accountability alignment**, tests whether the responsibility assigned is proportionate to the practical control that can be exercised. Return to the board's assurance paper. A manager may reasonably be accountable for reviewing a case and deciding whether to accept a recommendation. It is much harder to justify making that manager responsible for evidence the interface did not display, a vendor update they were never told about, a decision window imposed by senior leadership or the absence of a mechanism to suspend similar cases. Those conditions were controlled elsewhere.

AI-enabled decisions are organisational products. Providers, system owners, data owners, executives, business leaders, risk functions, technical teams and reviewers may each control different parts of the arrangement. Distributed responsibility is unavoidable; diluted responsibility is not. The governance task is to make the chain legible enough that each actor's responsibility can be understood in relation to what they could decide, influence or control.

Meaningful-human-control scholarship argues that responsibility attributed to a person should be commensurate with their ability and authority. The OECD's accountability principle likewise looks to role, context and ability to act. This does not mean that executives are responsible only for actions they perform directly. Their accountability may arise precisely because they approved the system, allocated resources, established incentives or accepted the risk. Accountability alignment prevents operational blame from being loaded onto the nearest human while preserving institutional responsibility for the conditions created around that human (Cavalcante Siebert et al., 2023; OECD, 2024).

These five conditions come together in what I call the **Meaningful Accountability Test**. It is a practical organisational diagnostic for examining whether a person, role or organisation assigned accountability for an AI-mediated decision has the capability, visibility, authority and intervention capacity needed to exercise that accountability in practice, and whether the responsibility assigned is proportionate to the control that can realistically be exercised.

The component ideas are established rather than newly discovered. They draw from human factors, meaningful human control, effective oversight, organisational accountability and regulatory design. Closely related contemporary models set out conditions for effective oversight and meaningful human authority. The contribution here is to gather that evidence into a concise organisational diagnostic, connect it to the Accountability–Control Gap and place it within the operating system through which an organisation governs itself (Sterz et al., 2024; Sterz et al., 2024; Calvert, 2025).

Applied to a defined decision or action, the test asks:

1. **Capability:** Can the accountable arrangement understand the task, the system's role, the relevant risks and known limitations well enough to exercise independent judgement?
2. **Visibility:** Does it receive the timely and usable evidence needed to recognise when scrutiny, challenge or escalation is required?
3. **Authority:** Does it possess recognised and protected standing to question, defer, override, escalate or stop?
4. **Intervention capacity:** Can it act in time, through usable mechanisms and with sufficient support to alter the trajectory before avoidable harm becomes irreversible?
5. **Accountability alignment:** Is the responsibility assigned proportionate to the control that can realistically be exercised, while the wider chain of organisational responsibility remains visible?

These are not five scores to average. A serious weakness in one condition may make the arrangement fragile even where the other conditions appear strong. A capable and well-informed manager without authority remains an adviser. A person with authority but no timely intervention mechanism becomes a ceremonial approver. An effective override offered to someone who cannot recognise when it is needed offers little protection. An organisation that satisfies the first four conditions but assigns responsibility for system-wide choices to a front-line reviewer still has an accountability problem.

The significance of any weakness depends on the decision. A low-consequence drafting tool does not require the same arrangement as a system affecting employment, safety, finance or access to essential services. Sufficiency will vary with uncertainty, autonomy, speed, reversibility and consequence. Nor must every capability reside in one individual. A team or governance chain may collectively satisfy the test if expertise, evidence, decision rights and intervention mechanisms are brought together reliably and in time.

The board could now revisit its assurance statement. “All consequential AI-supported decisions remain subject to human review” was not necessarily false. It was incomplete. A more defensible assurance would require evidence that the reviewers could understand the work, see what mattered, exercise protected authority, intervene effectively and carry responsibility aligned with the control available to them. The green indicator would then represent an operating condition rather than the completion of a procedural step.

Even that would not amount to a certificate of safety. A system may preserve meaningful human accountability and still be unfair, insecure, ineffective, unnecessary or inappropriate. Human oversight can create false comfort when it is used to legitimise a system that should not have been deployed or to shift blame onto staff expected to catch problems they were never equipped to detect. Green's examination of government oversight policies makes that danger explicit, while Laux's work on institutionalised distrust reminds us that human overseers are fallible and need institutional checks rather than idealisation as a final safety barrier (Green, 2022; Laux, 2023).

The test should therefore be used diagnostically. Apply it to a defined AI-mediated decision, identify the person, role, team or organisational arrangement carrying accountability, examine the AI's participation and test the five conditions under ordinary, difficult and abnormal circumstances. Then identify which actor controls any limiting condition. The response may be to strengthen the condition, redistribute authority or responsibility, reduce the AI's role, slow the process, create an independent challenge path or decide that the use should not proceed.

The diagnostic does not produce its value by generating a score. It produces value by making an organisation confront the conditions hidden beneath the word *accountable*.

Once those conditions become visible, the test also exposes the other side of the arrangement. Every capability, information right, decision right and intervention power that must remain available to the human marks a boundary around what the system may do without them.

The next question is therefore no longer simply who remains accountable. It is:

**What authority has the organisation actually delegated to the AI?**

---

# Chapter 5 — What Have We Actually Allowed the AI to Do?

The system was approved as an assistant.

Its original purpose was straightforward. It would retrieve information from the customer-service knowledge base, summarise incoming enquiries and draft replies for an employee to review. The approval paper described productivity benefits, data safeguards and a human review step. Nobody believed the system was being authorised to make decisions on behalf of the organisation.

Six months later, the description had not changed, but the work had. The assistant had been connected to the ticketing platform so that it could classify and route enquiries. It had been given access to selected customer records because agents lost time moving between screens. It began prioritising queues, identifying apparently vulnerable customers and updating routine case notes. After a successful pilot, it was allowed to process a narrow category of low-value refunds when the customer’s account history and transaction type met predefined conditions.

None of these changes felt like a transfer of authority. Each was presented as a sensible improvement to an already approved system: connect another source, add a tool, remove a repetitive hand-off, automate the obvious cases, widen the refund threshold after the error rate remains low. The changes were reviewed by different people at different times, usually as technical enhancements or process improvements rather than as a new governance decision.

At a quarterly review, an executive asked a question that should have been easy to answer: what, exactly, was the assistant now authorised to do?

The room produced several answers. It could draft but not decide. It could route cases but not close them. It could issue some refunds, although only below a threshold. It could update records, but not all records. It could identify vulnerability, although nobody was sure whether that flag changed the queue automatically or merely informed the employee. It had access to tools that were not listed in the original approval, but the access had been granted through legitimate implementation requests.

The system was still called an assistant. The name had remained stable while its position in the work, its access to organisational resources and its capacity to affect customers had changed considerably.

At what point did assistance become delegated authority?

Organisations often govern AI through labels that say remarkably little about what the system is permitted to do. *Assistant*, *copilot*, *recommender*, *automation* and *agent* can be useful product descriptions, but they are poor governance controls. An assistant may only prepare information for a person, or it may initiate transactions across several systems. An agent may execute a complex workflow, or it may remain tightly constrained to proposing a next step. A recommendation-only system may materially frame a high-consequence decision, while an automated process may perform a narrow, reversible and low-consequence action with little discretion.

The label does not reveal the allocation of authority. That allocation is created through permissions, workflow position, default settings, approval thresholds, data access, tool connections and the point at which fresh human judgement is no longer required. In practice, authority often enters the system sideways. It appears as an integration, a configuration change, a new threshold or the removal of a hand-off rather than as an explicit declaration that the machine may now act on the organisation’s behalf.

The distinction between capability and permission is therefore fundamental.

**Capability does not confer authority.**

A system may be technically capable of accessing a database, issuing a refund, changing a schedule, selecting a candidate or invoking another application. That capability establishes what the organisation may need to govern. It does not establish that the system is permitted to use it. An industrial machine may be physically capable of operating beyond a safe limit, but its capability does not define the operating envelope within which it is authorised to run. The same discipline is required here: what a system *can* do and what the organisation has decided it *may* do are different organisational facts.

The distinction does not imply that AI possesses legal personhood, moral responsibility or an independent claim to authority. The authority under discussion is delegated organisational permission: the right, created by the organisation, for a system to perform a defined decision or action within a controlled arrangement. The organisation configures that permission and remains responsible for deciding whether it should exist, how far it extends and when it must be withdrawn.

It becomes more important once we recognise that a decision is not one indivisible act. Long before contemporary AI, human-factors researchers showed that automation could operate at different stages of information processing. Parasuraman, Sheridan and Wickens distinguished among information acquisition, information analysis, decision and action selection, and action implementation. A system could therefore be highly automated in one function and tightly constrained in another (Parasuraman, Sheridan & Wickens, 2000).

Current organisational research makes a related distinction. MIT CISR separates decision-making into framing, acting and learning: defining the problem and constraints, gathering information and taking action, and monitoring outcomes so the decision system can improve. Its 2026 research argues that human and AI participation should vary according to the ambiguity and risk of the decision rather than follow one universal allocation. The framework draws on thirty interviews with twenty-seven executives across nine organisations, making it current and useful organisational evidence rather than a universal taxonomy (Sebastian et al., 2026).

The two bodies of work use different language but expose the same governance problem. The customer-service assistant does not possess one uniform level of authority. It may select information and classify requests independently, recommend an outcome for disputed complaints, execute a refund within a narrow threshold and escalate any case involving vulnerability or uncertainty. It may be allowed to act in one part of the decision while remaining prohibited from acting in another, a mixed arrangement that one overall autonomy label would compress until the differences disappeared.

Autonomy scales can still be useful. They help designers compare systems, discuss levels of human involvement and anticipate changes in oversight. The problem begins when a scale is treated as a complete description of organisational authority. A ladder implies one direction and one overall position, while real work often contains mixed configurations. The system may act independently in an early stage, defer in the middle and execute again after a human has set the relevant boundary. It may adapt how it performs a task while remaining unable to change the task itself. It may be authorised to spend ten dollars repeatedly but prohibited from making one hundred-dollar decisions, even though the cumulative exposure could eventually be larger.

The familiar intuition that more autonomy always means more risk can also mislead. A recommendation-only system may exert substantial influence over a high-consequence employment, credit or safety decision even though it cannot execute the final action. Conversely, an automated system may carry out thousands of tightly bounded, reversible and low-consequence transactions without creating the same level of risk. Autonomy matters, but it does not determine risk by itself.

Human involvement does not settle the question either. Requiring a person to approve every action may be appropriate where consequences are high, ambiguity is substantial or the organisation needs independent judgement. In other settings, mandatory approval can add delay, overload reviewers and encourage ritual sign-off without creating meaningful control. The aim is not to maximise human touch. It is to allocate authority in a way that matches the decision, its consequences and the conditions under which accountability can remain real.

Human-factors research has repeatedly shown that the effects of automation depend on task and context. Higher levels of automation can improve routine performance and reduce workload, while in some environments they can also reduce situation awareness or make recovery harder when the system behaves unexpectedly (Endsley & Kaber, 1999). Flexible-delegation and variable-autonomy research similarly treats the allocation between people and machines as something that may need to change when conditions change, rather than as a one-time design choice (Miller & Parasuraman, 2007; Methnani et al., 2021). The governance consequence is not that organisations should resist automation, but that they should delegate more precisely.

Risk, ambiguity, consequence, uncertainty, speed, scale and reversibility all affect what may reasonably be delegated. A low-ambiguity action with limited consequence and a credible reversal path may be suitable for automated execution within a defined boundary. A high-consequence decision with several plausible interpretations may require human framing, challenge and exception handling even where AI performs most of the analysis. Speed may make human pre-approval impractical, while scale can turn individually minor actions into a material organisational exposure. Reversibility can reduce the cost of error, but it does not eliminate cumulative, distributive or reputational harm.

The current evidence does not provide a single, universally valid formula for converting those factors into one correct autonomy level. Their value lies in forcing the organisation to make the allocation deliberately. NIST requires roles, responsibilities and delegated authorities to be defined, connected to risk tolerance and revisited through monitoring, change management and course correction. The OECD links accountability to role, context and the ability to act, while also calling for mechanisms that allow systems to be overridden, repaired or safely decommissioned. Current Australian guidance similarly expects organisations to define intended use, foreseeable misuse, system scope, human control, intervention points, guardrails, access restrictions and decommissioning criteria (NIST, 2023; OECD, 2024; Australian Government, 2026b).

Those principles applied to the customer-service assistant even though the organisation’s description had not kept pace with its use. The original approval covered information retrieval and drafting. The later system could classify, route, prioritise, update and execute. New data connections expanded what it could see. Tool access expanded what it could change. Threshold adjustments expanded the value of transactions it could complete. A vendor update improved its ability to interpret loosely worded customer requests. Employees increasingly accepted its classification without checking because the classifications were usually correct. One approval step was removed because the queue had become too slow. Each change could be defended on its own; together, they altered the authority exercised in practice.

I use the term **authority drift** for the gradual movement between the authority originally approved and the authority a system comes to exercise through changes in capability, access, workflow, purpose or reliance. The term does not suggest that the system has seized control. More often, the organisation has extended permission through a series of ordinary decisions without examining their combined effect. The underlying governance requirement is familiar: material changes in access, purpose, capability, operating context or consequence require monitoring, reassessment and change control (NIST, 2023; Australian Government, 2026b).

A static approval cannot govern a moving arrangement. Delegated authority has to remain reviewable and revocable. Material changes in access, tools, thresholds, purpose, affected population, system behaviour or downstream action should trigger a fresh examination of what the system is now permitted to do. Review does not mean repeating the entire approval process for every minor configuration change. It means recognising which changes alter the authority surface and treating them as governance decisions rather than merely technical maintenance.

The challenge is to make that authority visible without collapsing it into another broad label. That is the purpose of the **Delegated Authority Map**.

The component ideas are established across automation research, decision-rights theory, meaningful-human-control scholarship and current governance guidance. Contemporary models also distinguish decision authority, process autonomy and accountability configuration. The contribution here is not the discovery of those ideas. It is their integration into a practical organisational diagnostic connected to the Accountability–Control Gap and the Meaningful Accountability Test (Flemisch et al., 2012; Cavalcante Siebert et al., 2023; Sebastian et al., 2026).

The Delegated Authority Map identifies the functions an AI system may perform, the actions it may take without fresh human approval, the boundaries within which that permission applies, the controls that govern it, the recourse available when conditions change, and the human or institutional accountability that remains.

It asks six connected questions:

1. **Function:** What part of the work or decision may the AI perform?
2. **Permission:** What may it decide or do without obtaining fresh human approval?
3. **Boundary:** Where does that permission begin and end?
4. **Control:** How is the authority governed while it remains active?
5. **Recourse:** What happens when the conditions change or the boundary is crossed?
6. **Accountability:** Who authorised, owns, monitors, modifies and may revoke the arrangement?

Applied to the customer-service system, the function description would distinguish classification, routing, information retrieval, drafting, recommendation and transaction execution. Permission would identify which of those functions may proceed without a person making a fresh judgement. The system might classify and route all routine enquiries, retrieve only approved account information, recommend an outcome for complex complaints and execute refunds only for specified transaction types below an agreed value. Cases involving vulnerability, dispute, uncertainty or a policy exception would remain outside its permission and be referred to a human. That description is already more useful than calling the system an assistant because it reveals where the organisation has allowed the system to act and where it has deliberately retained judgement.

The boundary then gives the permission its shape. The system may be authorised for a particular purpose, customer population, jurisdiction, data set, transaction type and time period. It may use named tools but not others. It may issue a refund below a threshold but may not change an account plan, waive a debt or communicate a final decision about a contested complaint. It may act only when confidence and data-completeness conditions are met, and it may be prohibited from acting where the customer is flagged as vulnerable or where the case falls outside the policy on which the workflow was built. Permission without a boundary becomes discretion by accident.

The boundary should be proportionate to the use. A trivial drafting aid does not require an elaborate authority charter. Material authority does require enough precision for the organisation to know what has been permitted and to recognise when the use has moved. Broad organisational controls may be sufficient for low-risk uses. As consequence, speed, scale or independence increases, the authority boundary needs to become correspondingly clearer.

Control describes how the delegation is governed while it remains active. The customer-service system may be subject to performance monitoring, sample review, exception thresholds, testing after material changes and a named operational owner. A risk owner may review trends in refunds, complaints and vulnerable-customer referrals. Changes to the refund threshold or the tools the system may invoke may require specific approval. These arrangements do not necessarily require a person to approve each transaction. They govern the authority as a continuing organisational condition.

Recourse answers a different question: what happens when the system should no longer continue under the existing permission? It may have to defer a case, escalate uncertainty, pause a workflow, accept correction, roll back an action, lose access to a tool or have its authority restricted. In some settings, safe withdrawal will require a transition plan rather than an immediate shutdown, particularly where the system supports an essential or interdependent process. The OECD, NIST and Australian guidance all treat override, intervention, restriction and decommissioning as lifecycle governance questions rather than emergency improvisations after a failure (NIST, 2023; OECD, 2024; Australian Government, 2026b). Recourse is therefore part of the original delegation design: an organisation has not fully defined authority if it has not decided how that authority can be narrowed or withdrawn.

Accountability sits across the entire map. Someone authorised the delegation. Someone owns the business outcome and the learning that follows. Someone monitors whether the authority remains within its boundary. Someone can approve a wider threshold, restrict a permission or revoke it. Other actors may control the data, vendor relationship, interface or system configuration that shape what the operational owner can realistically manage.

The map does not force all of that responsibility onto one person. It makes the chain legible. Delegation may distribute tasks and decision rights, but it does not make organisational accountability vanish. Responsibility should remain aligned with the control available to each actor, while the organisation remains accountable for the complete arrangement it has created.

For an executive committee, this changes the approval conversation. The committee is no longer being asked to approve an “AI assistant” in the abstract. It is being asked to approve a defined allocation of organisational authority: what the system may frame, analyse, recommend, decide or execute; what requires fresh human judgement; where the permission applies; how its exercise will be monitored; who may change it; and how it will be paused, restricted or withdrawn.

That is a more demanding conversation, but it is also a more useful one. It allows legitimate automation to proceed without pretending that every action requires human pre-approval. It exposes authority that has been hidden inside workflow design or technical configuration. It gives risk, operations and technology teams a shared object to govern. Most importantly, it makes the boundary between human judgement and machine action explicit enough to be tested over time.

A complete Delegated Authority Map does not prove that an AI use is safe, fair, secure, effective, lawful, necessary or appropriate. A system may have a clearly bounded authority arrangement and still be unsuitable for deployment. Nor does the map establish that maximum human involvement is desirable. A tightly bounded automated process may be entirely defensible, while a recommendation-only system may require intense scrutiny because of the decision it shapes. Current risk-management guidance preserves the possibility of avoiding or rejecting a use even where controls are available; authority design is one governance condition rather than a deployment certificate (NIST, 2023; Australian Government, 2026b).

The map describes the authority the organisation has chosen to delegate and the conditions attached to that choice. It does not replace impact assessment, risk management, assurance or human judgement. It simply prevents the organisation from hiding a consequential decision behind a product label or an old approval record.

The customer-service system could now be described honestly. It was no longer merely an assistant, but neither was it an unrestricted autonomous agent. It held different permissions across different functions, within a defined customer and transaction boundary, subject to monitoring, escalation and revocation. The organisation could see where fresh human judgement remained necessary and where automated execution had been deliberately authorised.

That visibility creates the next problem. A boundary written in an approval paper is not yet a boundary in operation. If the policy prohibits an action but the system permissions allow it, the prohibition may be little more than a hope. If the approved scope is narrow but the data connection, identity, workflow and vendor configuration are broad, the authority map describes an intention rather than a control.

The organisation now has to make its decision real in the infrastructure of work.

**Where does governance actually live?**

---

# Chapter 6 — Where Governance Actually Lives

The supplier-onboarding system had been approved as a recommendation tool.

Its purpose seemed clear enough. It would read the documents submitted by prospective suppliers, compare them with the organisation's requirements, identify missing information and recommend whether an application should proceed. A procurement officer would review the recommendation and decide whether to change the supplier's status. Higher-risk applications would be referred to specialists. The approval paper said, more than once, that consequential action remained subject to human judgement.

Several months later, a routine control review brought procurement, technology and risk into the same room. Nothing had gone publicly wrong. There had been no dramatic incident, no unexplained payment and no supplier admitted through an obvious system failure. The review began as a sensible check that the implementation still matched the approved design.

The first surprise was the service identity. The AI component did not merely read supplier records. It used an account with permission to update them. The second was the workflow. Applications assessed as low risk moved automatically from *pending* to *approved*. The procurement officer received a notification, but the notification arrived after the status had changed. What had been described as human approval was, in operation, human visibility after the action.

The differences continued. One data connection included historical information collected for a purpose that had not appeared in the original proposal. The activity log showed that a supplier's status had changed, but not which data fields, model version, rule set or configuration had produced the result. A component supplied by the vendor could be updated without the organisation receiving enough detail to determine whether the decision boundary had moved. Every individual choice had an explanation. The service account simplified integration. Automatic progression reduced delay. The extra data improved screening. The leaner log reduced storage and privacy exposure. The vendor update process was standard for a cloud service.

Nobody in the room had deliberately overturned the governance decision. Procurement had approved one description of the work. Technology had configured a workable process. The provider controlled part of the system that neither function could fully see. Between them, they had produced an operating arrangement that did something different from what the approval paper said.

Which arrangement governed the system: the decision on paper, or the infrastructure through which the work actually occurred?

It is tempting to answer that the paper governs because it records the organisation's authorised position. In a legal or disciplinary sense, that may matter greatly. Yet the supplier platform did not consult the paper before changing a status. The service identity, workflow rule and configuration determined what happened. The paper expressed purpose and intent; the operating environment gave them practical force, or failed to.

Here lies the less visible side of AI governance. Policies, committees and approvals matter because organisations need to decide what they are trying to achieve, which risks they will accept and where authority should sit. Those decisions become real through arrangements often treated as implementation detail: identities, permissions, data connections, thresholds, defaults, workflow steps, logs, version controls and supplier agreements. These arrangements do not merely support governance after the important decisions have been made. They can preserve, enlarge, weaken or quietly replace those decisions.

The organisational conclusion I draw from this mismatch is that **a governance boundary becomes real only when the operating environment supports, observes and preserves it.**

The service identity in the supplier system makes the point with unusual clarity. A recommendation-only tool that can read documents but cannot alter a record has one practical authority. A system using an identity that can change supplier status has another, even if both are described by the same product label. NIST's zero-trust architecture was developed for cybersecurity rather than AI governance, but its insistence on explicit authentication and authorisation is useful here: access should not be assumed because a user, device or service happens to sit inside a trusted environment. It should be granted deliberately in relation to particular resources and actions (NIST, 2020b).

For AI-enabled work, that turns an abstract governance question into a series of operational ones. Which identity does the system use? Which records, applications and tools can that identity reach? Can it read, write, approve, transmit, spend or invoke another service? Are permissions inherited from a broader integration account? Can a vendor-managed component exercise them? Who can grant, alter and revoke the access, and will anyone notice when it changes? NIST's wider control catalogue places access, identity, authentication, configuration, audit and supply-chain risk in different control families, but their practical effects meet in the same workflow (NIST, 2020a). Together they shape what the system can actually do.

Access control is not a complete answer. A tightly restricted system may still be used for an illegitimate purpose or produce a poor decision. Least privilege can limit practical authority; it cannot tell the organisation whether the authority should have been delegated in the first place. That judgement belongs to governance. The infrastructure should make the decision true in operation, not make the decision on the organisation's behalf.

The same distinction applies to data. The supplier system drew on application forms, company records, sanctions information, financial indicators, previous incidents and externally sourced risk data. Each connection expanded not only the information available to the system but the kind of judgement it could make. One field had originally been collected for a different administrative purpose. Another record was current when the supplier first entered the database but had not been reviewed for three years. A third source arrived through a transformation that converted several indicators into a single risk category, while the assumptions behind that conversion were no longer visible to procurement staff.

It is easy to describe these as data-quality issues and hand them to a technical team. That misses their organisational significance. The data environment shapes both what the system can know and what the organisation is entitled to let it use. Origin, recency, representativeness, confidentiality, intellectual-property rights, permitted purpose and transformation history all affect whether an AI-enabled decision is defensible. Current Australian guidance treats data quality, provenance, usage rights, privacy and cybersecurity as part of responsible AI implementation, while the EU AI Act places data governance, documentation and lifecycle controls among the requirements for defined high-risk systems (Australian Government, 2026b; European Union, 2024).

The research on data cascades gives this problem a human face. Sambasivan and colleagues, drawing on interviews with 53 AI practitioners across India, East and West African countries and the United States, documented what they call data cascades: compounding downstream effects from data problems associated with practices that undervalue data quality (Sambasivan et al., 2021). The lesson is not that every imperfect field creates a catastrophe. It is that decisions made early and quietly in the data pipeline can travel much further than the people making them can see.

Documentation practices such as Datasheets for Datasets were developed partly to make those conditions visible by recording why a dataset was created, how it was assembled, what it contains, how it has been maintained and where its limitations lie (Gebru et al., 2021). That is valuable, but provenance is not a blessing conferred by a form. A well-documented dataset can still be inappropriate for the intended decision, and a complete lineage cannot guarantee fairness or correctness. The organisational task is to connect the record to an actual decision about use, not simply to accumulate metadata.

In the supplier system, the most consequential control failure did not sit inside the model at all. It sat in the order of events. The workflow changed the supplier's status, then sent a notification to a procurement officer. The approval paper and the system design both used the word *approval*, but they referred to different acts. One meant a human decision before the organisation acted. The other meant awareness after the action had already taken effect.

Workflow and configuration can allocate decision rights without announcing that they are doing so. Defaults decide what happens when nobody intervenes. Thresholds determine when a recommendation becomes an action. Routing rules decide which cases reach specialists and which disappear into the ordinary queue. Prompts and instructions shape what the system attends to. Tool connections determine whether an output remains information or becomes execution. The placement of human review determines whether a person can still alter the outcome or merely explain it later. Current NIST and Australian implementation guidance likewise treats system scope, human–AI roles, access, intervention points and monitoring as governance matters rather than mere configuration (NIST, 2023; Australian Government, 2026b).

Cobbe, Lee and Singh argue that reviewability must extend beyond the model to the complete socio-technical process through which a decision is commissioned, produced, acted upon and challenged (Cobbe, Lee & Singh, 2021). That wider view matters because a technically explainable recommendation may sit inside an unreviewable workflow. The model might disclose why it rated a supplier as low risk while the organisation remains unable to explain why that rating automatically changed the supplier's status, which system applied the rule or who authorised the threshold. A decision is not made reviewable merely by making one component more interpretable.

Workflow design is therefore a governance decision even when the project plan calls it process optimisation. Yet it would be equally mistaken to conclude that every governance requirement should be translated into rigid software logic. Novel cases, conflicting evidence and professional obligations often require judgement. A system that blocks every exception may produce consistency at the cost of reason. The objective is not to hard-code the organisation until discretion disappears. It is to place discretion deliberately, preserve meaningful escalation and make clear when an automated path must defer to a person.

Documentation sits between those two worlds. Model cards, datasheets and supplier FactSheets can record intended use, tested conditions, performance, limitations, data origins, safety considerations, security claims and known risks (Mitchell et al., 2019; Gebru et al., 2021; Arnold et al., 2019). They give technical teams, purchasers, operators and reviewers something concrete to examine. In a field filled with confident demonstrations and incomplete knowledge, that is no small contribution.

But a document is an artefact of a moment. The original description of the supplier system may have been entirely accurate when written. At that time, the service identity may have been read-only, the workflow may have stopped before status change and the vendor component may have used a different version. The document did not become dishonest when the system changed. It became stale.

A document can describe a boundary. It does not make the system obey it. For documentation to operate as governance infrastructure, somebody must own it, update it when material conditions change and connect it to approval, testing and monitoring. Version history matters. Change triggers matter. The relationship between what was assessed and what is running matters. Otherwise documentation can become an elegant description of a system that no longer exists.

The control review exposed a related weakness in the logs. The organisation could see that an application had moved from *pending* to *approved* at 10.43 on a Tuesday morning. It could identify the service account responsible. It could not reconstruct the evidence used, the version of the model, the active configuration, the threshold applied, the data transformation involved or whether a procurement officer had challenged the result elsewhere. The event had been recorded, but the decision pathway had not.

Decision provenance addresses this broader problem by tracing the data flows, dependencies, contexts and processing steps that lead to a decision or action and its downstream effects (Singh, Cobbe & Norval, 2019). For the supplier system, useful provenance might connect the application, relevant data sources, system and model versions, configuration, workflow rule, automated action, human intervention and any later correction. That does not require preserving every internal computation or every keystroke. It requires enough proportionate evidence to reconstruct what mattered.

Logs do not create accountability. They create part of the evidentiary basis through which accountability can be exercised. Accountability also requires identifiable actors, standards against which conduct can be assessed, a forum able to ask questions, and consequences or corrective action when something has gone wrong (Wieringa, 2020). A warehouse full of events is not the same as an answerable organisation.

More logging is not automatically better. Records can omit off-platform conversations, professional judgement and provider-side changes. Fragmented logs can give the appearance of traceability while leaving important steps invisible. Excessive retention can create privacy and security risks of its own. The question is not how to record everything. It is what evidence the organisation will need to monitor the arrangement, investigate a concern, support contestability and determine whether its governance decision is still true in practice.

The vendor relationship complicates that question. The organisation controlled the supplier process, local data, integration, access permissions and operational purpose. The provider controlled the underlying service, some model components, update mechanisms and much of the information about testing and limitations. Governance crossed an organisational boundary, but information and control did not cross it evenly.

Current guidance increasingly treats third-party systems as part of the governance environment rather than a procurement exception. NIST calls for governance of third-party AI systems and data, while Australian guidance expects accountability, monitoring, incident coordination and information sharing across the AI supply chain. The EU AI Act, within its defined scope, allocates documentation and cooperation obligations across providers, deployers and other actors in the value chain (NIST, 2023; Australian Government, 2026b; European Union, 2024). Supplier declarations such as FactSheets can help communicate capabilities, limitations, safety, security and provenance, but they remain declarations rather than independent proof (Arnold et al., 2019).

Contracts can improve the position. They can specify notice of material changes, access to test results, incident reporting, data handling, audit rights, service continuity and assistance with investigation or withdrawal. They cannot manufacture knowledge the provider does not possess, remove every proprietary limit or overcome unequal bargaining power by force of wording. An organisation may outsource technology and operation without outsourcing responsibility for how the system is selected, integrated, configured and used. It should therefore know which dependencies it can govern, which it can only influence and which residual risks it is choosing to carry.

That knowledge must remain current. The supplier system's effective boundary could change through a new permission, a different data source, a provider update, a shifted threshold or the removal of an approval step. Any one change might appear minor. Together they could alter the work, the authority and the evidence available for review. Governance infrastructure therefore needs change detection, reassessment triggers, version and configuration control, incident response, restriction and rollback. It also needs a credible way to revoke access, suspend a workflow or retire the system when the arrangement can no longer be defended. Current NIST and Australian guidance treat these as lifecycle governance matters rather than technical maintenance afterthoughts (NIST, 2023; Australian Government, 2026b).

Safe withdrawal is not the same as a theatrical stop button. If supplier onboarding has become deeply integrated into payments, compliance checks and operational scheduling, an abrupt shutdown may create its own risks. Current NIST and Australian guidance both treat decommissioning as a planned lifecycle activity that must consider dependencies, continuity, retained records and alternative pathways (NIST, 2023; Australian Government, 2026b). A system that cannot be narrowed, paused or replaced safely is not fully under control merely because somebody has authority to order it stopped.

Even a well-designed control environment can create false assurance. A permission may be narrow in the supplier platform but broad in the integration account. A log may prove that an action occurred without showing whether it was justified. A current model card may describe the vendor component accurately while saying nothing about the local workflow that turns its output into action. A dashboard may remain green because it measures classification accuracy, while the real governance failure is that human approval happens after the status change.

Control design, control implementation and evidenced operating effectiveness must therefore be treated as different states. Raji and colleagues' end-to-end audit framework connects organisational principles to documentation, risk identification, testing and accountable decisions across the lifecycle rather than assuming that the presence of a control proves its value (Raji et al., 2020). Madaio and colleagues similarly show that operational tools such as fairness checklists are shaped by roles, incentives, workflows and authority within the organisation (Madaio et al., 2020). A control works inside an institution. It does not float above one.

By the end of the review, the supplier system no longer looked like a model surrounded by a few administrative safeguards. It looked like a complete operating arrangement. Its governance lived in the approved purpose, the identity used to enter the platform, the records it could see, the transformation of those records, the threshold that triggered action, the placement of review, the evidence retained, the provider's obligations, the change process and the people expected to interpret all of it. No single artefact governed the system. The arrangement did.

**Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.**

That formulation should not be mistaken for a claim that governance is simply an engineering problem. Infrastructure gives governance operational force, but it does not decide whether the purpose is worthy, whether the trade-offs are acceptable or whether the organisation should proceed. It cannot supply courage to challenge a profitable system, professional judgement in an unfamiliar case or institutional willingness to act on uncomfortable evidence. It can make a boundary enforceable and visible. It cannot make the boundary wise.

The control review could repair the service identity, move approval before action, narrow the data connection, strengthen the logs and renegotiate the provider's change notice. Those repairs would matter. Yet each would still depend on somebody understanding why the control existed, recognising when its assumptions no longer held and using the authority to question, escalate or stop.

Can the people carrying accountability recognise when the control environment is no longer enough?

---

# Chapter 7 — Capability Before Compliance

The dashboard was green.

The organisation operated a large network of physical assets. It had introduced an AI-supported maintenance system to help engineers and operations teams decide which fault reports required immediate attention and which could be scheduled into routine work. The system combined sensor data, inspection history, weather, equipment age and previous maintenance outcomes. It did not close a work order or dispatch a crew by itself. A manager remained responsible for approving the priority assigned to each case.

The governance records looked reassuring. Mandatory AI training had been completed by almost everyone who used or supervised the system. Managers had acknowledged the oversight procedure. The system’s known limitations were documented. An uncertainty indicator appeared beside each recommendation. A formal escalation route existed for cases involving unusual conditions, incomplete data or possible safety consequences. Managers had authority to pause the workflow and seek specialist review.

The organisation’s quarterly dashboard showed 99 per cent training completion, no overdue policy acknowledgements and no material AI incident.

During a tabletop exercise, the maintenance team received a plausible recommendation. A fault report had been lodged for equipment that was still operating within its standard range. The system recommended routine attention rather than urgent intervention. Its explanation was coherent. Recent cases with similar surface features had not produced a significant failure, and the backlog of maintenance work was already under pressure.

The case contained a weakness, but not an obvious one. A sensor reading had not been refreshed at the expected interval. The uncertainty indicator was higher than usual without crossing the organisation’s escalation threshold. An experienced technician noticed that the combination of vibration history, weather exposure and the missing reading did not fit the ordinary pattern. She hesitated, but the recommendation had passed through an approved system and the queue was growing. She did not want to slow the work on what might be little more than professional intuition.

The manager had completed the required training. He knew that the system could be wrong and that human oversight remained important. He could not explain what the uncertainty indicator meant in this case, whether the missing data changed the operating assumptions or when a moderate signal should override the formal threshold. Another participant read the system’s fluent explanation as additional evidence for the recommendation, even though the explanation had been generated by the same system whose output was under review.

The team accepted the routine priority.

The facilitator then disclosed the purpose of the exercise. The combination of incomplete data and unusual operating conditions should have triggered specialist review. The intervention route had been available. The manager had authority to use it. The experienced technician had detected the mismatch. Nothing in the technical infrastructure had failed.

The organisation was compliant with its training requirement. The exercise had exposed a capability problem.

What exactly did the organisation believe the training record proved?

Training records are useful evidence. They show that the organisation assigned a learning requirement, communicated it and recorded participation. A knowledge check may show that a person could recall the relevant concepts under assessment conditions. In a regulated or high-consequence setting, those records may be necessary and entirely appropriate.

They answer a narrower question than the one the organisation actually needed to ask.

The maintenance team did not fail because nobody had heard of AI risk. The participants knew the system had limitations. They knew uncertainty mattered. They knew escalation was available. What they could not do reliably was convert that knowledge into judgement under the conditions of the work: incomplete evidence, a plausible recommendation, recent system reliability, operational pressure and the social cost of interrupting a process that appeared to be working.

Training-transfer research has long distinguished what people learn during a programme from whether that learning generalises to the workplace and remains available over time. Baldwin and Ford separated training inputs and learning outcomes from the generalisation and maintenance of knowledge and skill in work. Grossman and Salas later synthesised evidence showing that transfer depends not only on the learner and the training design, but also on opportunity, support, feedback and the conditions into which the person returns (Baldwin & Ford, 1988; Grossman & Salas, 2011).

For AI governance, the distinction is consequential. The organisation did not need its managers merely to remember that humans remained accountable. It needed them to recognise when scrutiny was required, interpret the available signals, bring relevant domain knowledge to the case, challenge a persuasive output and use the intervention process before the decision became difficult to reverse.

**Compliance can show that training occurred. Capability asks whether judgement can still occur when it matters.**

This is not an argument against formal training. Poorly prepared people cannot exercise meaningful oversight simply because an organisation gives them authority. The EU AI Act, within its scope, requires measures to ensure sufficient AI literacy among people dealing with AI systems and requires people assigned to oversee defined high-risk systems to possess the necessary competence, training, authority and support. NIST similarly links AI risk management to trained and empowered personnel, clear roles, diverse expertise and a culture that supports critical thinking. Current Australian guidance expects organisations to evaluate broad and role-specific training needs, keep skills current and ensure that people responsible for AI use and oversight understand system capabilities, limitations, failure modes and intervention requirements (European Union, 2024; NIST, 2023; Australian Government, 2026ba).

Literacy, training and capability are related, but they are not interchangeable.

AI-literacy research has moved well beyond the idea that people simply need to know how to operate a tool. Long and Magerko describe AI literacy as a set of competencies enabling people to critically evaluate AI, communicate and collaborate with it and use it effectively. Ng and colleagues distinguish knowing and understanding AI, using and applying it, evaluating and creating with it, and engaging with ethical issues (Long & Magerko, 2020; Ng et al., 2021).

That breadth is important. A workforce taught only to produce better prompts may become more proficient at using AI without becoming more capable of governing its participation in work. People need enough understanding to recognise where AI is operating, what kinds of limitations may matter and why fluent output is not equivalent to reliable evidence.

Yet literacy remains incomplete. A manager can understand, in principle, that AI systems may be uncertain, biased or wrong and still be unable to recognise the specific weakness in a maintenance recommendation. The experienced technician in the exercise had something the general training did not provide: a working sense of how the equipment behaved in unusual conditions. The technical specialist understood the data pipeline. The manager understood priorities, resources and authority. The governance arrangement required those forms of knowledge to meet in time.

Meaningful capability is therefore partly domain capability. The person or team must understand the work well enough to judge where the system fits, which evidence matters, what an exception looks like and what consequence may follow if the recommendation is wrong. This does not mean every user must understand the internal design of the model, nor that every decision must be reserved for the most senior expert. It means that the human contribution cannot be described vaguely as “oversight”. The organisation must know what judgement it expects the human to add.

That expectation should include reliance itself. Much organisational discussion aims to build trust in AI. Human-factors research suggests a better objective: appropriate or calibrated reliance. Parasuraman and Riley distinguished use, misuse, disuse and abuse of automation. Lee and See argued that trust supports good performance only where it is calibrated to the automation’s capabilities. Too much reliance can lead people to accept poor advice; too little can cause them to reject useful support (Parasuraman & Riley, 1997; Lee & See, 2004).

The maintenance team’s response did not result from one simple attitude towards AI. The system had performed reliably in recent cases. Its explanation was coherent. The uncertainty signal was elevated but not extreme. The backlog rewarded speed. The escalation threshold appeared to offer a formal dividing line between ordinary and exceptional work. These conditions combined to make acceptance feel reasonable.

Automation-bias research shows that such effects are real but not inevitable. They vary with the task, system reliability, interface, user experience, workload and the design of the decision process. Explanations and confidence information may help, but they do not consistently produce accurate reliance. In some studies, people become more confident without becoming more correct. Cognitive-forcing interventions can reduce over-reliance by making people pause or commit to an initial judgement, but they also add effort and can create performance trade-offs (Parasuraman & Manzey, 2010; Goddard, Roudsari & Wyatt, 2012; Zhang, Liao & Bellamy, 2020; Buçinca, Malaya & Gajos, 2021).

Capability is not simply the willingness to distrust the system. It is the ability to choose among accepting, verifying, seeking more evidence, challenging, deferring, overriding, escalating or stopping. The appropriate response depends on the work, the consequence, the quality of evidence and what the system is actually doing.

Nor should organisations assume that combining a human and an AI will automatically produce the best result. Vaccaro, Almaatouq and Malone’s preregistered systematic review and meta-analysis examined 106 experiments reporting 370 effect sizes. Across the performance dimensions and experiments included in the review, human–AI combinations performed better than humans alone on average, but did not, on average, outperform the better of the human or AI operating alone. Results differed by task type and by the relative capabilities of the human and the system; decision tasks produced a different pattern from creation tasks (Vaccaro, Almaatouq & Malone, 2024).

The practical lesson is not that organisations should remove humans from decisions or reject AI assistance. It is that the division of labour has to be designed. A human placed after an AI recommendation does not create synergy by position alone. The organisation needs to know what each contributes, where their errors differ and whether the workflow allows the human contribution to remain real.

AI can strengthen that contribution. Brynjolfsson, Li and Raymond studied the introduction of a generative-AI assistant across 5,172 customer-support agents. Access to the system increased productivity, measured as issues resolved per hour, by 15 per cent on average, with larger gains among less experienced and lower-skilled workers (Brynjolfsson, Li & Raymond, 2025). The result matters because it demonstrates that AI can make aspects of expert practice more widely available rather than merely replacing or weakening human skill.

The opposite risk cannot be dismissed. Lee and colleagues surveyed 319 knowledge workers and analysed 936 examples of generative-AI use. Higher confidence in generative AI was associated with lower self-reported critical-thinking effort. Participants described changes in the work of thinking: from gathering information to verifying it, from solving a problem to integrating an AI response, and from executing a task to stewarding the overall result (Lee et al., 2025).

That study does not prove that generative AI causes cognitive decline. It is cross-sectional, self-reported and drawn from a relatively technology-comfortable sample. It does, however, illuminate a governance question. When AI changes where cognitive effort occurs, organisations must decide which human capabilities still need to be developed and practised.

A less experienced worker may perform better with AI assistance while receiving fewer opportunities to learn how an expert recognises an unusual case. An experienced worker may become more productive while gradually doing less of the diagnostic work that made their expertise valuable. Or the reverse may occur: AI may expose patterns, alternatives and feedback that accelerate development. The outcome depends on how work, review and learning are designed.

The relevant question is not whether AI deskills people. It is which forms of judgement the organisation’s accountability model depends on, and whether the work still develops and preserves them.

Managers therefore carry a responsibility that ordinary user training does not address. A manager governing AI-enabled work must understand where AI participates, what authority has been delegated, which judgement remains human and which signals should trigger greater scrutiny. They must also recognise when employees are being asked to provide impossible oversight: to catch errors without sufficient evidence, to intervene without time, or to remain accountable for system conditions controlled elsewhere (NIST, 2023; Australian Government, 2026b).

The manager in the exercise did not need to become a data scientist. He needed to understand why the uncertainty signal existed, what the missing data meant for the process, when the formal threshold was insufficient and how to protect an escalation decision from the pressure of the queue. Capability at management level includes creating the conditions in which other people can exercise judgement, not merely operating the tool personally.

Even knowledgeable people may not act. The experienced technician recognised the mismatch but remained silent. Her hesitation was rational in organisational terms. She had incomplete evidence, the system had been approved, recent recommendations had been reliable and delaying the queue carried a visible cost. Raising the concern risked appearing resistant, intuitive or unable to work with the new system.

Research on psychological safety and employee voice helps explain why this matters. Edmondson linked psychological safety with team learning and interpersonal risk-taking. Detert and Burris found that leader openness influenced employee voice. Morrison’s review shows that voice and silence are shaped by individual, relational and organisational conditions, while O’Donovan and McAuliffe’s systematic review shows that interventions to improve psychological safety and speaking up produce varied outcomes across contexts (Edmondson, 1999; Detert & Burris, 2007; Morrison, 2014; O’Donovan & McAuliffe, 2020).

Psychological safety is necessary in many settings, but it is not sufficient. A person may feel safe and still fail to notice an ambiguous threat. They may notice but lack the expertise to explain it. They may understand the issue but see no effective path for escalation. They may raise the concern and learn that nothing happens.

Capability therefore includes more than knowledge. It includes practical confidence and organisational permission to ask questions, surface uncertainty and interrupt AI-shaped work. Current Australian guidance makes this connection explicit by linking AI capability with accessible feedback, challenge, escalation and redress processes (Australian Government, 2026b).

The word *permission* matters. Organisations sometimes train people to exercise judgement while designing work that penalises its use. A manager is told to pause when uncertain, but delay counts against performance. An employee is invited to challenge the system, but every challenge requires a lengthy approval process. A team is encouraged to report issues, but leaders defend the system or treat exceptions as user resistance. Formal authority survives while practical permission disappears.

Capability also belongs to the arrangement, not solely to the individual. One person need not possess technical, legal, professional and operational expertise simultaneously. The organisation may rely on a team, specialist network or escalation chain. But distributed capability works only when the required knowledge can be assembled reliably and in time. A list of experts who cannot be reached during a live decision is not operational capability (NIST, 2023).

Evidence of capability should therefore be proportionate to the role and consequence. For a low-consequence drafting aid, practical orientation and clear boundaries may be enough. For a person overseeing AI-supported safety, employment, financial or service decisions, the organisation may need realistic scenarios, observed judgement, exception handling, interpretation of system signals and practice using intervention routes.

This is not a call for another universal competency score. No widely established, context-neutral measure can demonstrate AI-governance capability across every role and system. Nor should capability requirements become a way to transfer responsibility onto workers or create unnecessary credential barriers. The aim is to collect evidence that answers the real governance question: can this accountable arrangement do what the control design assumes it can do?

The tabletop exercise gave the organisation better evidence than its green dashboard. It showed that the training content, uncertainty display, escalation threshold, queue targets, manager preparation and leader expectations did not yet form a reliable capability system. The answer was not automatically to assign another module. It might require better scenario practice, clearer signals, protected escalation, access to specialist advice, revised workload expectations and feedback from difficult cases.

**Capability is not merely preparation for AI governance. It is one of the mechanisms through which governance operates.**

That still leaves a further question. Capable people cannot exercise judgement where governance makes responsible action excessively slow, risky or procedurally impossible. An organisation can develop critical thinkers and then suffocate their judgement with approvals, rigid process and fear of exception.

Does the governance system give capable people legitimate room to act?

---

# Chapter 8 — Governance as Permission

The proposal was modest by almost any measure. A cross-functional operations team wanted to test an internal knowledge assistant that would search an approved repository of current procedures and completed lessons-learned reports, then prepare a first-pass summary with links back to the source documents. It would have no access to customer records, financial systems or employee performance data. It could not send messages, approve work, alter records or act outside the repository. A named manager would remain responsible for how any summary was used, and the pilot could be switched off without interrupting the underlying process.

Some months earlier, leaders had responded to a poorly controlled AI use by establishing one central approval route for every new proposal. The decision had been understandable. No business unit would again introduce AI without privacy, cybersecurity, legal, enterprise-risk, architecture, procurement and records-management scrutiny. An executive committee would provide final approval. On paper, the arrangement closed a gap that had previously allowed local enthusiasm to run ahead of organisational judgement.

The knowledge-assistant proposal entered that route. Privacy asked whether personal information might appear in the repository. Cybersecurity asked how identities and credentials would be managed. Legal asked about confidentiality and intellectual-property rights. Architecture wanted to understand the connection to approved systems. Procurement requested the provider’s terms, continuity arrangements and change-notification process. Records management asked what prompts and outputs would be retained. Enterprise risk asked how the use had been classified and which residual risks the business owner intended to accept.

None of those questions was unreasonable. The difficulty was that no function had authority to decide when the combined answers were sufficient. One reviewer asked for test results that could only be produced after a pilot. Another requested a full operating model even though the team was seeking permission to learn whether the use was worth developing. The executive committee met monthly and considered the proposal too minor for urgent attention. After six weeks, the use had neither been approved nor rejected. It had simply remained in motion through the process.

The work, meanwhile, had not disappeared. Staff still had to search long project records and prepare operational summaries. Some continued manually, producing variable results and repeating work already done elsewhere. Others began copying selected passages into an unapproved general-purpose chatbot because it was available and the formal proposal appeared unlikely to move. Nobody had consciously decided that this was the preferred arrangement. The visible use remained inside governance while the less visible use developed outside it.

What is governance for if it can identify risk but cannot create a legitimate path to act?

The question is not an invitation to weaken control. The organisation had good reasons to understand data use, access, supplier dependency, retention and accountability before approving a new system. The problem was that its governance could ask questions but not convert answers into permission. It had created a process for caution without creating a decision architecture. Delay therefore became an unrecorded decision: the approved pathway did not proceed, but the operational need continued and people found other ways to meet it.

A governance system can fail by allowing consequential technology to spread without oversight. It can also fail by treating every use as though it carries the same uncertainty, authority and consequence. The first failure produces uncontrolled activity. The second can produce repeated referral, workarounds and shadow use. Both reduce the organisation’s ability to see what is actually happening.

Formal governance is not the enemy in this story. The more useful distinction is between forms of governance that help people perform responsible work and forms that mainly compel compliance without helping them understand or resolve the work. Adler and Borys described this as the difference between enabling and coercive formalisation. Enabling systems give people visibility into how a process works, how their local activity connects to the wider system, how problems may be repaired and where adaptation is legitimate. Coercive systems are oriented more heavily towards forcing adherence, concentrating knowledge and treating deviation as evidence of failure (Adler & Borys, 1996).

The distinction is not a moral label that can be attached permanently to a policy. A control may be designed transparently and still become coercive when used for blame or surveillance. A procedure may look restrictive but prove enabling because it gives people reliable information, a repair path and the authority to respond to conditions that the original designers could not foresee. Field research on management-control systems has shown that formal controls can support both efficiency and flexibility when they help people diagnose, coordinate and adapt work rather than merely report upward (Ahrens & Chapman, 2004; Wouters & Wilderom, 2008; Chapman & Kihn, 2009). Later research also shows how hierarchical accountability can erode those enabling qualities when local information becomes primarily an instrument of vertical control (Cäker, Siverbo & Åkesson, 2022).

The knowledge-assistant process was formal, but it did not help the team understand what legitimate action looked like. It showed where the proposal had to travel, not who could decide. It exposed questions, but not which answers would close them. It demanded evidence, but sometimes before that evidence could exist. The issue was not whether the organisation had enough formal governance. It was what that governance enabled people to understand and do.

Governance theory has long connected decision rights with accountability: organisations need to know who may decide and who remains answerable for the consequences (Weill & Ross, 2004). In AI governance, that relationship becomes practical only when broad intentions are translated into operating boundaries. The board may say that it has a moderate appetite for controlled experimentation and a low appetite for privacy, safety or legal harm. Those statements matter, but they do not tell a manager whether a bounded internal pilot may proceed, which specialist reviews are required or what evidence would justify stopping it.

NIST’s AI Risk Management Framework and Playbook connect risk tolerance with the level of risk-management activity, allocation of oversight resources, approval pathways, conditional approval, disapproval, go/no-go decisions and eventual decommissioning. Current Australian guidance similarly recommends that organisations adapt governance to their size, use cases and risk profile, screen for unacceptable or heightened risk, and match controls and human oversight to autonomy and stakes. OECD guidance treats risk management as iterative and context-specific, with treatment commensurate to potential adverse impact rather than identical across all uses (NIST, 2023; OECD, 2023, 2024; Australian Government, 2026b).

The organisational interpretation is straightforward. A risk appetite that cannot be translated into decision rights, thresholds, evidence and escalation remains a statement of preference, not yet a permission system. It may tell leaders how they hope the organisation will behave while leaving everyone else to seek approval case by case. That does not make appetite meaningless. It means the governance work is incomplete.

Proportionality is the discipline that connects those statements to actual uses. The internal knowledge assistant was not risk-free, but neither was it equivalent to a system ranking job applicants, altering customer records, initiating financial transactions or influencing physical safety. Treating materially different uses through one route may appear consistent, yet it can consume the same scarce attention on exposures that require very different evidence, independence and authority.

Proportionate governance does not mean reducing controls until a project can proceed. It means varying the depth, independence, evidence and approval required according to the work, uncertainty, autonomy and possible consequence. Some uses may be approved by a trained business owner under pre-defined conditions. Others require privacy, legal, security, professional or independent risk review. Some warrant a limited pilot. Some should not proceed. A proportionate system preserves the possibility of no-go; it simply refuses to treat prohibition and executive escalation as the default expression of seriousness.

That idea also needs challenge. Teams may understate consequence or describe a use narrowly to enter a lighter pathway. Commercial enthusiasm can turn “low risk” into a conclusion reached before the assessment begins. Material classifications therefore need evidence and, where stakes warrant it, independent scrutiny. Proportionality is not convenience dressed in risk language. It is a reasoned match between the governance effort and the exposure being governed.

For the knowledge assistant, that reasoning produced a different decision. The organisation permitted a sixty-day internal pilot within one operations team. The assistant could search only the approved repository. It could not use personal or customer information, connect to another system, act outside the source set or generate an external communication. Every summary had to preserve links to the underlying documents. A named manager owned the use. Queries, material corrections and exceptions would be recorded. The pilot would end after a defined period or usage volume unless a review explicitly renewed it, and any material change to access, data scope or functionality would suspend the permission pending reassessment.

Conditional approval was not a diluted form of approval. It was the decision. It converted uncertainty into a bounded learning arrangement, made the limits visible and preserved the organisation’s right to stop. In that setting, it was a stronger control than either open-ended permission or indefinite delay because it established what could happen while the organisation learned what it did not yet know. NIST explicitly recognises approval, conditional approval and disapproval as legitimate governance outcomes alongside course correction and decommissioning (NIST, 2023).

Not every use deserves that path. A pilot does not make a proposal responsible merely by limiting its duration or calling it experimental. Some purposes are unacceptable. Some uncertainties are too consequential. Some organisations lack the capability, information or authority to govern the exposure they would create. Governance as Permission includes the authority to refuse, restrict or withdraw permission. Permission to act is not permission to ignore risk.

The pilot soon encountered a condition the normal rule had not resolved. A user asked for a summary across several lessons-learned reports, one of which referred to an older procedure no longer included in the approved repository. The assistant produced a coherent answer from the current documents, but the user knew that the historical material might change the interpretation. Under a rigid system, the options would have been to accept the incomplete answer or abandon the task. Under an enabling system, the output was paused and referred through an exception path to the records owner and the relevant operational specialist.

The exception did not authorise broader access on the spot. It recorded why the normal boundary was insufficient, who could decide, what additional material could be consulted and whether the case remained singular or revealed a wider problem in the repository. An exception is not an escape hatch from governance. It is a governed response to a condition the ordinary rule cannot resolve, with a defined reason, authority, scope, duration, evidence and review (Adler & Borys, 1996; NIST, 2023; Stilgoe, Owen & Macnaghten, 2013).

Repeated exceptions need particular attention. If users continually require material outside the approved source set, the organisation may have defined the boundary badly. It may also be witnessing the slow erosion of a sound control. Looking only at each exception in isolation can conceal the pattern. The governance task is to decide whether the rule should change, whether the use should narrow or whether the permission should end.

Escalation should follow the same logic. Organisations often imagine escalation as movement upwards: from employee to manager, manager to committee, committee to executive. High-reliability research offers a more useful idea. Reliable organisations combine disciplined baselines with sensitivity to operations, attention to weak signals, resilience and deference to relevant expertise when the unexpected occurs (Hales & Chakravorty, 2016; Etchegaray, Thomas & Profit, 2019). For an ordinary office tool, that does not require aviation-style control. It does suggest that the useful question is not simply who is more senior, but who has the knowledge and authority required by this condition.

A privacy question may need a privacy specialist. A conflict between source documents may need the records owner and domain expert. A change in provider terms may need procurement and legal review. A decision to expand the assistant into customer-facing action may need a different authority altogether. Escalation is enabling when it connects uncertainty to someone able to understand and decide without making ordinary work impossible. Sending every ambiguity to a central committee is not deference to expertise. It is often an admission that the organisation has not designed the decision route.

The original route had another weakness: each requirement could be defended separately while the combined burden remained largely unowned. The team repeatedly explained the same use to different functions. Reviewers requested overlapping evidence in different formats. Several questions could not change the decision because the requesting function lacked decision authority. Others asked for certainty at a stage intended to produce learning. The organisation counted review steps but did not examine their cumulative effect.

Public-administration research distinguishes necessary bureaucracy from red tape by considering both compliance burden and whether the rule advances its legitimate purpose. Evidence across that literature associates red tape with poorer organisational and employee outcomes, while studies of cumulative administrative requirements show how many individually small tasks can encourage workarounds and non-compliance (van Loon, Leisink & Knies, 2016; George, Pandey & Steijn, 2021; Bozeman, Youtie & Jung, 2021). These findings do not mean that a slow process is automatically a bad one. High-consequence decisions may require time, independence and demanding evidence. The sharper question is whether each requirement addresses a material risk, changes the decision and remains necessary in the current context.

Governance burden becomes especially damaging when old reactions accumulate without replacement or rationalisation. An organisation adds one approval after an incident, another after a supplier dispute and another because a new function wants visibility. Over time, the process carries a kind of governance debt: overlapping requirements remain after their original conditions have changed, and no one owns the decision to remove or redesign them. The result can be more paperwork alongside less visibility, because people increasingly work around the formal route.

The remedy is not a campaign for speed. It is a review of purpose. Does the evidence exist at the stage when it is requested? Is the same issue assessed elsewhere? Does satisfying the requirement lead to a decision? Is the reviewer empowered to resolve the question? Does the control still reflect the actual use? A differentiated pathway is defensible only when it remains a governed learning process; otherwise, proportionality becomes little more than a shorter route around scrutiny.

The pilot therefore needed to be more than a convenient exception to the normal process. Responsible-innovation scholarship emphasises anticipation, reflexivity, inclusion and responsiveness: considering plausible effects, examining assumptions and values, involving relevant people and changing course when evidence warrants it (Stilgoe, Owen & Macnaghten, 2013). The literature also warns that such processes have limits. Participation may be narrow, power unequal, resources inadequate and commercial pressure stronger than the formal commitment to respond (de Hoop, Pols & Romijn, 2016).

A responsible pilot requires an actual learning design. The organisation needed a legitimate purpose, bounded exposure, named ownership, appropriate users, evidence collection, feedback, stop conditions and a decision at the end. It needed to ask not only whether the summaries saved time, but whether source links were retained, material information was omitted, users understood the boundary and exceptions were handled as intended. A sandbox is not responsible because it has walls. It is responsible only if the organisation knows what the walls contain, what it is trying to learn and who can act on the result.

Permission remained institutional throughout. The operations team did not acquire a permanent entitlement to use the assistant because the pilot had been approved. The organisation remained responsible for the purpose and boundary, the adequacy of the controls, the information and resources supplied, the handling of exceptions, the monitoring process and the decision to renew, narrow or withdraw permission. Delegation did not transfer accountability; it made the allocation of authority more explicit.

The lasting improvement was not that the executive committee eventually said yes. It was that the organisation created a differentiated pathway. Uses were classified according to the work, authority and consequence involved rather than the word *AI* alone. Specialist thresholds determined when privacy, security, legal or records review was required. A named business owner could approve a bounded, low-consequence pilot within delegated authority, with explicit conditions, prohibited actions, evidence requirements, exception owners, expiry and material-change triggers. Consequential uses still travelled through independent and senior review, and some remained prohibited.

The team could now proceed legitimately. The unapproved workaround was no longer the easiest available route, and visible use returned to the organisation’s governed environment. That clarity did not prove the process would be faster, nor that trust or innovation would increase. It created the conditions for more confident action because the people involved could see the boundary, the decision owner and the point at which ordinary work became an exception.

The component ideas behind this arrangement are established: enabling formalisation, decision rights, proportional risk management, conditional approval, exception handling and course correction all have substantial prior foundations. I use **Governance as Permission** as an organisational lens for bringing them together within the book’s wider accountability-and-control architecture. It describes governance designed so that people and systems can act within explicit, proportionate and reviewable boundaries, with defined authority, evidence requirements, exception paths, escalation and the ability to restrict or withdraw permission when conditions change. Its practical claim is modest but important: the opposite of weak governance is not necessarily more governance, but governance better designed to say what may proceed, what may not, and who remains accountable for that judgement.

Yet the approval record could establish only what the organisation intended. It could not show whether users stayed within the source set, whether every summary retained its links, whether material omissions occurred, whether exceptions were escalated or whether the provider, repository or workflow changed during the pilot. It could not demonstrate that the control environment operated throughout the sixty days or that the expected benefit arrived without unacceptable effects.

Permission without evidence becomes optimism.

---

# Part III — Proving and Adapting Control

Permission is not the end of governance. The organisation still has to know whether the authorised arrangement operated as intended, what evidence survived and whether the controls remain adequate as systems, uses and consequences change.

The final part moves from retrospective assurance to action as it occurs. It asks what can be reconstructed and tested, then what must change when AI begins to use tools, hand work to other systems and act faster than conventional review can follow.

---

# Chapter 9 — Evidence Before Assurance

The sixty-day pilot had ended, and the board paper was encouraging.

The internal knowledge assistant had produced the operational summaries it was approved to prepare. Users had completed the pilot period without a reported data incident. The dashboard showed that most responses retained links to the approved source documents, access controls remained green and the number of material corrections was low. A vendor report described satisfactory technical performance. Management estimated that the pilot had released time previously spent searching project records and recommended extending the assistant to several more teams.

Nothing in the paper was obviously false. A bounded use had been approved, a defined period had passed and the expected work had been completed. The business owner had signed the closure paper. The governance committee had received no material complaint. For an organisation that had once struggled to create a legitimate path for modest AI use, this looked like progress.

A director asked what evidence showed that users had stayed within the approved repository throughout the pilot.

The dashboard showed the number of queries. It did not show whether selected passages had occasionally been copied from outside the repository before a query was submitted. The access log showed which service account reached the approved documents. It did not connect every summary to the exact sources available at the time. The system recorded that source links were generated, but not whether they were reviewed before the summary was used. The vendor report covered the provider’s component; it said little about local workflow, informal correction or the manager’s review. No material incident had been recorded, but nobody could yet say whether that meant no incident had occurred, no one had recognised one, or users had quietly repaired minor problems without reporting them.

The director tried a simpler question. What, exactly, was the board being assured of?

The paper appeared to offer one conclusion — the pilot had succeeded — while combining several different claims. The assistant had produced useful outputs. The use had remained within its approved boundary. Required human review had occurred. The controls had operated for the full sixty days. The evidence was complete enough to support expansion. The benefits had been achieved without unacceptable effects. Those claims were related, but they were not interchangeable, and the evidence needed to support one could not automatically carry the others.

Assurance begins not with the evidence pack, the audit trail or the dashboard, but with the claim. Established assurance practice starts by identifying the subject matter or proposition to be evaluated, the criteria against which it will be assessed, the evidence required and the conclusion that can responsibly be communicated. Reasonable and limited assurance express different degrees of confidence; neither amounts to certainty. Current AI assurance guidance applies the same logic to AI systems and their governance, while recognising that no single method can establish every aspect of safety, legality, fairness, performance and organisational control (IAASB, 2013; UK Government, 2024).

“The pilot was successful” was too broad to carry that discipline. A more useful claim might be that the assistant operated within the approved source, access and human-review boundary during a defined period. Another might be that material exceptions were identified and escalated. A third might concern productivity. A fourth might ask whether the governance arrangement was suitable for controlled expansion. Each claim required criteria: what counted as remaining within the boundary, what constituted human review, which exception threshold applied, how time released was measured and what would make expansion inappropriate. Until those questions were stated, the organisation could not know whether its evidence was sufficient. It could only know that it had accumulated records.

Assurance standards distinguish the amount of evidence from its quality. In audit language, sufficiency concerns quantity, while appropriateness concerns relevance and reliability. Evidence may support management’s assertion, contradict it or reveal that the assertion has been framed too broadly. Information produced by the organisation or its systems may itself require testing for completeness, accuracy and the effectiveness of the controls that generated it (PCAOB, 2010; IAASB, 2013). Those standards arise from professional assurance contexts, including financial audit, and should not be converted into universal legal requirements for every AI pilot. Their evidence logic nevertheless matters.

The pilot’s records illustrated why. The original approval was strong evidence of what the organisation intended to permit. It was not evidence that the boundary held in operation. Access configuration showed what the service account was able to reach at a particular point; it did not establish that the configuration remained unchanged. Usage logs were closer to execution but depended on what the system had been designed to record. Manager confirmation provided useful testimony but came from the person responsible for the pilot’s success. The vendor report offered technical information but covered only the provider’s scope and assumptions. Output samples could reveal quality and source-link problems, although a favourable sample did not establish performance across the whole period.

A small amount of contrary evidence might matter more than a large volume of ordinary transactions. Three summaries without source links could challenge the claim that the control operated consistently. One unexplained change to the repository could alter what the assistant was capable of retrieving. A handful of user corrections made outside the recorded workflow might show that the apparent output quality depended on human repair that the dashboard did not see. Evidence is therefore not the volume of records retained. It is information capable of supporting or challenging a defined governance claim.

Even a complete-looking record must be questioned at its source. A system log can be accurate about the events it was configured to capture while omitting the event that matters. A dashboard can be green because it measures exactly what it was configured to measure. If the source-link field records that a link was generated but not that a user opened it, the dashboard cannot establish substantive review. If users correct summaries in another application, the low correction rate may reveal little about actual error. System-generated evidence is not worthless; it is often essential. Its reliability depends partly on the controls, definitions and transformations through which it was produced (PCAOB, 2010; NIST, 2023).

The same discipline separates control design from control operation. The knowledge-assistant pilot had a clear design. It would use one repository, preserve source links, remain internal, require human review and escalate material exceptions. The technology team implemented access restrictions and logging. Those facts did not establish that the controls operated consistently, nor that their operation achieved the intended purpose.

A source-link control might exist technically while users ignored it. Human review might occur in practice but leave no reliable trace. The repository boundary might hold at system level while users pasted external text into queries. A provider could change a component without altering the local configuration record. The assistant could produce accurate summaries even when one control was bypassed because an experienced employee corrected the output informally. Conversely, an inaccurate summary could occur despite a properly designed and consistently operating process; no governance arrangement eliminates every error or uncertainty.

NIST, COSO and current Australian guidance all treat control effectiveness as something to be monitored, tested and reassessed rather than inferred from documentation alone. NIST requires measurement and evaluation of controls and deployed performance. COSO places monitoring within effective internal control. Australian guidance calls for risks to be reassessed after controls are implemented and for testing, incidents and operational evidence to inform continual improvement (NIST, 2023; COSO, 2013; Australian Government, 2026b).

The organisational conclusion is uncomfortable but necessary: **successful execution does not eliminate the need for assurance.** A correct result can emerge through the approved process, through an unapproved workaround, through unrecorded human repair or through luck. The result may be welcome, but it cannot by itself establish which pathway produced it or whether that pathway can be relied upon again.

When the organisation tried to answer the director’s questions, it discovered that the evidence did not form one coherent record. The approval paper described purpose and conditions. Identity and access logs showed which accounts reached the repository. Usage logs captured queries and generated responses. The provider retained technical performance data. Managers signed weekly summaries. Exceptions appeared in emails, meeting notes and occasional service tickets. User corrections were dispersed across working documents. The information existed, but its relationships were weak.

No single record connected the purpose approved at the start of the pilot with the authority exercised, the boundary in force, the configuration operating on the day, the human review applied, the exception decision made and the final organisational use of the output. The organisation could retrieve artefacts. It struggled to reconstruct the governance process they were meant to evidence.

Decision-provenance and reviewability research has developed precisely because automated decisions are socio-technical processes rather than isolated model outputs. Relevant evidence may cross data sources, software components, human decisions, suppliers, workflows and downstream actions. Singh, Cobbe and Norval describe decision provenance as a means of exposing those flows and dependencies. Cobbe and colleagues extend reviewability across the process through which an automated decision is commissioned, developed, operated and challenged. Raji and colleagues similarly propose an end-to-end internal auditing approach in which documentation is generated throughout the lifecycle rather than assembled only after deployment (Singh, Cobbe & Norval, 2019; Cobbe & Singh, 2020; Raji et al., 2020; Cobbe, Lee & Singh, 2021).

These approaches do not make every process fully visible. Human judgement may be partly tacit. Work can move outside recorded systems. Vendor-side changes may remain opaque. Retaining every interaction can create privacy, security and proportionality problems. The relevant requirement is not perfect memory. It is enough evidence to test the material claim. An organisation cannot make a defensible assurance claim about a governance process it cannot reconstruct well enough to test.

The fragmented pilot record reveals the purpose of what I call the **Evolved Governance Chain**. The component ideas are established across assurance, internal control, management systems, algorithmic auditing, decision provenance and reviewability. The contribution here is to bring them into the book’s Meaningful Accountability architecture as a diagnostic traceability spine:

**Purpose → Authority → Boundary → Execution → Evidence → Evaluation → Learning**

The spine is *evolved* because it develops the early movement introduced in Chapter 2 — purpose, authority, boundary, execution and evidence — by adding evaluation and learning. It also separates conditions that operate throughout the arrangement: accountability, risk and exposure, human judgement, controls, monitoring and change. Those conditions do not belong in one downstream box.

The spine does not describe a universal lifecycle or prescribe the order in which every governance activity must occur. It asks whether a governance claim can be followed across the points where its meaning may change or disappear.

For the pilot, **purpose** identified why the assistant existed, which organisational outcome it was meant to support and what claim management now wished to make. **Authority** showed who approved the pilot, what the assistant was permitted to do and which decisions remained human. **Boundary** captured the repository, users, period, prohibited actions, required review and material-change triggers. These first three links brought the approved intention into view.

**Execution** asked what actually happened: which sources were used, how summaries entered work, where users corrected them, whether exceptions arose and whether the provider or local configuration changed. **Evidence** asked what reliable supportive and contradictory information survived. **Evaluation** asked which criteria were applied, who tested the evidence, what methods they used and how independent their judgement was. **Learning** asked what the organisation changed, corrected, restricted, retained or withdrew once the evidence had been examined.

The word *chain* can mislead if it suggests a straight line. In operation, the spine is iterative. Evidence discovered during evaluation may send the organisation back to execution or boundary. A change in risk may alter authority. Learning may revise purpose. Monitoring may identify a material exception while work is still under way. A complete trace is not produced by marching neatly from left to right; it is produced by preserving the relationships among these conditions as the work changes.

The organisation would have been better placed had it designed that evidence before the pilot began. It could have decided which claims would later matter, what events and decisions required recording, who owned the evidence, how system-generated information would be tested and which qualitative evidence users and affected functions should provide. It could have established retention periods, change triggers and escalation records proportionate to the use. Current NIST and Australian guidance, the EU AI Act’s requirements for defined high-risk systems, and end-to-end auditing scholarship all point towards evidence being generated throughout design, operation, monitoring, incidents and review rather than reconstructed from whatever happens to remain (NIST, 2023; European Union, 2024; Australian Government, 2026b; Raji et al., 2020).

That does not justify retaining every prompt, token, intermediate output and human comment indefinitely. The pilot was low-consequence and internal. A proportionate record might connect each final summary to the source documents used, the active system and repository version, confirmation of review, material corrections and any exception decision. A high-consequence system may require a much richer record. The test is not whether the organisation captured everything. It is whether the evidence can support and challenge the claim on which others are expected to rely.

The green dashboard now assumed a more appropriate role. It was management monitoring: timely information about activity, thresholds and reported exceptions. It could help the business owner notice problems and manage the pilot. It did not become independent assurance merely because the data arrived continuously or appeared in a board pack.

The Institute of Internal Auditors’ Three Lines Model distinguishes management ownership and action, specialist support and challenge, and the independent and objective assurance provided by internal audit. The model is adaptable; first- and second-line roles may be blended or arranged differently. NIST and Australian guidance likewise allow proportionate use of internal specialists and independent testing (IIA, 2024, 2026; NIST, 2023; Australian Government, 2026b). The important distinction is not an organisational chart. It is whether the person or function reaching the conclusion owns the activity, challenges it from another management role, or provides assurance with sufficient independence from the subject being evaluated.

For a modest pilot, management review supported by specialist challenge may provide enough confidence for a limited next decision. For a consequential use affecting safety, employment, access to services or external stakeholders, self-assessment may be inadequate. Internal audit or external assurance may be warranted. The required independence should increase with consequence, uncertainty, conflict of interest and stakeholder reliance.

Independence is not magic. An external reviewer may be free of internal incentives yet lack access or operational understanding. A technically independent function may rely on evidence selected by management. A knowledgeable operational team may understand the process best but be invested in expansion. Good assurance design recognises these trade-offs. It does not assume that distance alone creates quality or that expertise alone removes conflict.

Any conclusion would also be bounded in time and scope. Assurance about the sixty-day pilot could cover the defined repository, user group, configuration, criteria and evidence period. It could not automatically apply after new data sources, wider users, changed provider components or external actions were introduced. Professional assurance standards and management-system audit practice are explicit that conclusions relate to defined subject matter, criteria and evidence. NIST and the EU AI Act likewise treat monitoring and post-market evidence as continuing lifecycle responsibilities (IAASB, 2013; ISO/IEC, 2023, 2025; NIST, 2023; European Union, 2024).

Certification is particularly vulnerable to overreach in language. An organisation may certify an AI management system against ISO/IEC 42001 through a competent conformity-assessment process. That can provide useful evidence about the management system within the certificate’s scope. It does not certify that every AI use, decision or outcome is safe, fair, lawful or effective (ISO/IEC, 2023, 2025). The scope, criteria, period and limitations of a certificate or assurance conclusion should travel with the claim, not disappear beneath the word *assured*.

The pilot report treated the absence of a material incident as positive evidence. It was evidence, but ambiguous evidence. No incident may have occurred. A minor event may have been corrected informally. Users may not have recognised that a source conflict met the reporting threshold. The logging design may not have captured the relevant signal. People may have assumed that reporting a problem would delay expansion without changing the decision.

Exceptions, complaints, overrides, near misses and corrective actions are therefore not editorial embarrassments to be removed from an assurance pack. They show how the governance arrangement behaved when the planned path was insufficient. NIST and current Australian guidance emphasise incident, complaint, override, exception and corrective-action records as part of monitoring and improvement. Management-system practice similarly treats non-conformity and correction as evidence for learning rather than proof that the entire system has failed (NIST, 2023; Australian Government, 2026b; ISO/IEC, 2023).

Continuous monitoring can bring this evidence closer to the event. Automated testing can identify configuration change, unusual access, missing source links or threshold breaches before a retrospective sample review would find them. Research on continuous auditing and continuous control monitoring shows the attraction of more timely evidence, but also its limits. Audit judgement cannot be fully formalised, alarms can overwhelm attention and the monitoring layer can inherit defects from the systems it observes (Alles et al., 2006; Chiu, Liu & Vasarhelyi, 2014).

The organisation must therefore resist a familiar temptation: turning assurance into another dashboard. Measured indicators are useful, but they can displace what is hard to quantify — professional judgement, user hesitation, affected-party experience and a pattern of exceptions that looks harmless one at a time. Continuous monitoring supports assurance; it does not create independence, suitable criteria or a defensible conclusion by itself.

The board did not need a universal declaration that the assistant was trustworthy. It needed a conclusion proportionate to the next decision. That conclusion might state that the available evidence provided a specified degree of confidence that the pilot operated within the defined source, access and review boundary during the stated period; that identified exceptions and evidence limitations were disclosed; and that any expansion remained conditional on closing material gaps and preserving change triggers. Depending on the consequence and intended reliance, the conclusion could be management’s, internal audit’s or an external assurance provider’s.

Assurance is the conclusion produced by evaluation. It is not another link in the Evolved Governance Chain. The spine preserves the traceability needed to test the claim; evaluation tests the evidence against criteria; assurance communicates what can responsibly be concluded, by whom, for whom and with which limitations.

The pilot had operated slowly enough for the organisation to gather records, review exceptions and reconstruct the important decisions. The next generation of systems may not. An AI system may invoke tools, change records, initiate communications, hand work to another system and alter its path in response to new information before a retrospective review begins.

What happens when the system begins to act faster than the organisation can reconstruct?

---

# Chapter 10 — When the System Begins to Act

The knowledge assistant had been expanded carefully.

After the sixty-day pilot, the organisation had resisted the temptation to give it broad access or a grand title. It received one modest additional function. When it found an approved procedure approaching its review date, it could open a review task, assign the task to the recorded owner, attach the relevant procedure and source links, and notify the owner’s team. It could not approve a revised procedure, publish anything, spend money or communicate outside the organisation. It used a distinct service identity, accessed only approved repositories and workflow tools, and recorded each task it created.

The change looked like a sensible next step. Staff had been spending time noticing review dates, checking ownership records and opening routine tasks. The assistant could remove that administrative delay without taking over the professional judgement involved in changing a procedure. A named manager remained accountable for the use. The permission had been documented. The tools were restricted. The activity would be monitored.

During an ordinary run, the assistant found two procedures covering related work. They conflicted on one operational step, and the older procedure named an owner who had moved into another role. The assistant queried a second organisational agent that could search project directories, team structures and recent work patterns. That agent returned a plausible answer: a manager who had chaired several recent meetings and appeared to own the process.

The first assistant opened three review tasks and assigned them to that manager. A scheduling system interpreted the tasks as priority compliance work and moved several operational activities to make room. Notifications spread across the manager’s team. One task entered a supplier workflow because the procedure referred to a third-party dependency, prompting a request for updated documentation from an external provider.

None of this was catastrophic. No system broke through a security perimeter. No agent invented a new power for itself. Each local action was permitted by some part of the environment. The assistant could create tasks. The ownership agent could provide contextual information. The scheduling system could respond to priority work. The supplier workflow could request documentation.

Yet nobody had made one conscious decision to authorise the complete consequence. By the time the manager saw the notifications, operational work had already been rescheduled and the supplier request had been issued. Disabling the first assistant would stop further tasks, but it would not recall the existing ones, restore the schedule, withdraw the external request or explain which system had treated the original ownership inference as sufficient authority.

At what point did permission become action that nobody could still meaningfully interrupt?

The question matters because *agentic* is rapidly becoming one of those terms that seems precise until two people try to use it in the same meeting. Some systems follow a fixed sequence with a few tool calls. Others plan across several steps, retain state, choose among tools, delegate work to other agents or continue until they reach a goal or a stopping condition. Current OECD and NIST work treats agentic capability as a spectrum shaped by planning, tool use, persistence, delegation, coordination and the degree of direct supervision, rather than as one binary technical category (OECD, 2026; NIST, 2026a).

That is a useful discipline for governance. The knowledge assistant did not become important because a product page called it an agent. It became important because it could move from finding information to changing the state of organisational work. The governance significance of an agent lies in what it can cause to happen, not in whether it is marketed as autonomous.

Bounded delegated action can create real value. A system that opens a routine task, gathers approved evidence or schedules a reversible maintenance check may reduce delay and allow people to concentrate on judgement rather than administration. The answer is not to force every useful action back into a manual queue. It is to recognise that the moment an output becomes a tool call, a record change, a message, a transaction or a hand-off, the organisation is no longer governing information alone. It is governing action.

Many of the underlying risks are not entirely new. Organisations have long governed service accounts, automated workflows, delegated credentials, batch processes and software that triggers downstream systems. What changes with agentic systems is the combination: probabilistic planning, natural-language instructions, flexible tool selection, persistent state, delegation and speed can turn an uncertain interpretation into a sequence of valid technical actions before a person sees the accumulating consequence. Established security and control disciplines remain relevant, but they must be applied to a more fluid path between instruction and effect (NIST, 2026b; ASD et al., 2026).

The relevant unit is therefore wider than the model and wider than its final output. It is the complete action path connecting the identity making the request, the principal on whose behalf it acts, the authority currently delegated, the tools and resources used, the state changes and hand-offs that follow, the evidence that survives, and the intervention or recourse still available. A fluent answer may begin the path, but organisational consequence is produced by everything that happens after the answer is accepted as a basis for action.

That distinction exposes the first weakness in the organisation’s design. Both agents had valid identities. The first assistant was authorised to open a review task. The second was authorised to search organisational context and return a likely owner. Authentication proved which software identity made each request. It did not prove that the second agent had authority to determine process ownership, nor that the first could convert a contextual inference into an assignment with operational consequences.

NIST’s current identity and authorisation work for software agents asks how authority can be bound to a human or institutional principal, how least privilege operates when future steps are not completely predictable, and how delegated actions can remain auditable and non-repudiable. Allied cyber-agency guidance similarly recommends distinct non-human identities, minimum permissions, expiring delegations, separation of roles and authorisation checks at the level of material actions rather than one broad approval at the beginning of a task (NIST NCCoE, 2026; ASD et al., 2026).

The organisational rule is simple to state and harder to preserve: **identity establishes who or what is requesting action; authorisation determines whether that action is permitted in the present context.** Permission may depend on the resource, tool, amount, counterparty, purpose, time, current risk and whether a material boundary has changed. An authenticated agent can still be asking to do something it should not do now.

This is also where the book’s earlier distinction returns under pressure: **capability does not confer authority.** A tool catalogue can reveal that an agent is technically able to create a task, send a message or update a record. An Agent Card or protocol description can advertise those capabilities. A2A and MCP can carry authenticated requests, task state and authorisation prompts. None of them decides whether the organisation has a legitimate purpose for the action, who may accept the risk, what evidence is required or which remedy must remain available (A2A Protocol, 2026; Model Context Protocol, 2026).

A protocol may also signal that additional authorisation is required without supplying that authorisation itself. That distinction is easy to lose when systems communicate quickly and the request appears technically well formed. A task can arrive through a trusted channel, from a recognised identity, using a valid capability description and still be outside the authority granted for the present purpose. Technical interoperability helps systems coordinate. Institutional legitimacy still has to come from the organisation (A2A Protocol, 2026; Model Context Protocol, 2026).

The organisation’s original approval had focused on the first assistant’s purpose and toolset. That was necessary, but it was no longer enough. The consequential step occurred when one agent’s contextual answer became another agent’s authority to assign work, and when the resulting task became a scheduling system’s reason to alter operations. A policy written before deployment could describe the intended boundary. A prompt could tell the assistant not to act beyond it. Neither could prevent the connected workflow from treating a locally permitted event as a trigger for a more consequential action.

**When AI can act, governance must be enforceable at the point where authority becomes action.**

Some of that enforcement is technical. A distinct identity can carry scoped credentials. A policy decision point can test whether the requested action, resource and context match the current delegation. Tools can be restricted. Environments can be sandboxed. Spending, rate or transaction limits can contain consequence. A material hand-off can trigger step-up authorisation. Sensitive data movement can be blocked. A request can fail closed when identity, authority or context cannot be established. Current NIST, allied cyber and Australian guidance increasingly places controls near the action for precisely this reason (NIST, 2026b; ASD et al., 2026; Australian Government, 2026b).

But runtime control is not the automation of all governance judgement. A policy engine can enforce an obsolete rule perfectly. A technically valid threshold may ignore a professional obligation or an affected person’s rights. Some decisions depend on ambiguity, competing values or circumstances no one sensibly encoded in advance. Operational enforcement should preserve the boundary the institution has chosen; it cannot make that boundary wise or legitimate by itself.

The next question is where human approval should enter. It is tempting to answer: before every action. That would defeat much of the purpose of delegated execution and could create a stream of requests that people approve by habit. A human click at the end of a poorly designed process is not meaningful control merely because a person was present.

Approval is strongest when it occurs before a consequential or difficult-to-reverse action and the reviewer has the information, time, authority and practical alternative needed to change the outcome (Calvert, 2025; ASD et al., 2026; Australian Government, 2026b). In the knowledge-assistant case, opening an internal review task may remain within standing permission. Reassigning process ownership, displacing scheduled operations or initiating an external supplier workflow may justify a fresh decision. The boundary should reflect consequence, uncertainty, reversibility, affected parties and whether the action crosses from one function or organisation into another. Meaningful human control scholarship makes the same broader point: control depends on the ability to understand and influence the system, not on ceremonial presence at the final step (Calvert, 2025).

Even a well-placed approval cannot solve every problem once action has spread. Stopping the first assistant would not necessarily cancel its tasks. Cancelling the tasks might not restore the operational schedule. Restoring the schedule might not withdraw the supplier request. A universal kill switch sounds reassuring because it compresses a difficult governance problem into one decisive gesture. In practice, abrupt shutdown can strand transactions, leave inconsistent records, interrupt legitimate work or create unsafe partial state.

Intervention is therefore plural. It may require refusing the request before execution, pausing one path, cancelling a task, revoking a credential, narrowing access, quarantining a workflow, returning to a checkpoint, rolling back a state change, switching to a trusted fallback, containing downstream effects, decommissioning the system safely or providing remedy where the action cannot be undone. Australian implementation guidance includes pause mechanisms, dynamic guardrails, intervention and planned withdrawal, while runtime-assurance research shows the value—and the limits—of monitoring a more capable controller and transferring control to a constrained fallback when defined properties are violated (Australian Government, 2026b; Slagel et al., 2024).

The appropriate requirement is not perfect reversibility. Some actions cannot be recalled. A message may have been read, a person affected, a supplier inconvenienced or a legal deadline altered. Governance must therefore preserve recourse as well as reversal. **Delegated action should remain bounded, attributable, observable, interruptible and revocable, with reversibility or defined recourse proportionate to consequence.**

That demand brings evidence back into the execution path. The organisation needed to know which identity acted, whose authority it was exercising, which permission was current, which tool was invoked, what state changed, what another agent or system did next, where approval occurred and which intervention remained available. It did not need a permanent record of every token or hidden internal state. Nor should it treat chain-of-thought as a complete or reliable explanation of action (UK AI Security Institute, 2026a). It needed a proportionate trace of material authority and consequence.

That trace should preserve the grant chain as well as the action. It should be possible to distinguish a permission inherited from a human role, one delegated to a service identity, one requested dynamically by an agent and one accepted by a downstream system. Otherwise the organisation may know which component acted while remaining unable to explain why the component was entitled to act (NIST NCCoE, 2026; ASD et al., 2026).

The Evolved Governance Chain from Chapter 9 still applies, but the tempo has changed. Purpose, authority, boundary, execution, evidence, evaluation and learning can no longer be reconstructed only after the work is complete. Material events must be visible quickly enough to support intervention while later remaining available for assurance. This is not simply more logging. A record that cannot distinguish an ownership lookup from a consequential authority hand-off may preserve enormous detail while concealing the event that mattered.

More observability can even reduce practical oversight. Longer tasks, multiple tool calls, memory, retries and agent-to-agent delegation can generate traces too large for a person to follow. UK AI Security Institute work on loss of oversight and its Transect tooling highlights the difficulty of understanding long agent trajectories containing experiments, tool use, delegations and collaboration (UK AI Security Institute, 2026a, 2026b). The answer is not complete transparency. It is observability designed around material changes in authority, access, state and consequence, with enough context to support live judgement and later reconstruction.

The case also shows why multi-agent governance cannot be built by assessing each component in isolation. The knowledge assistant followed its task-creation rule. The ownership agent returned a plausible answer from the information available. The scheduling system responded to priority work. The supplier workflow followed the procedure’s third-party dependency. The combined arrangement nevertheless produced an operational effect that no single component evaluation was designed to see.

Australia’s AI Safety Institute distinguishes singular systems controlled by one entity from federated and open multi-agent arrangements in which authority and governance reach are distributed. It identifies interaction-level risks including cascading error, amplification, false consensus, identity confusion and weaker control across organisational boundaries (Australian AI Safety Institute, 2026). The safety of a multi-agent arrangement cannot be inferred by adding together the safety claims of its components.

That does not mean multi-agent systems are inevitably uncontrollable. It means the organisation must govern the complete arrangement and be honest about its reach. Some identities, tools and policies may be under direct control. Some may be influenced through contracts or technical standards. Some may be dependencies the organisation cannot inspect. Others may represent residual risk it consciously accepts. Governance weakens when those differences are hidden beneath one comforting word such as *integrated*.

Pre-deployment evaluation remains important. AgentDojo, ToolEmu and Agent Security Bench expose indirect prompt injection, unsafe tool use, memory manipulation and other failure modes across their tested tasks and environments (Debenedetti et al., 2024; Ruan et al., 2024; Zhang et al., 2025). They help organisations design threat models, red-team cases and controls. They do not provide a universal probability that a deployed agent will fail in the same way.

The critique in *AI Agents That Matter* is particularly useful here. Agent evaluations can over-emphasise benchmark accuracy, ignore cost and operational fit, allow overfitting, and confuse research performance with deployment readiness (Kapoor et al., 2025). A benchmark pass can show that a system met defined conditions during a test. It cannot assure future operation after the model, tools, permissions, prompts, data, memory, counterpart agents, integrations or organisational context change.

**Pre-deployment evaluation is a gate, not a permanent assurance conclusion.**

Adaptive governance begins when the organisation treats material change as a reason to reassess permission, not merely to update documentation. The original assistant was approved to create bounded internal tasks. Once it began relying on another agent’s inference, triggering operational rescheduling and entering an external supplier process, the practical authority and consequence had changed. The organisation needed to decide whether the permission still held, whether stronger controls or approval were required, and whether parts of the path should be prohibited.

Adaptive governance does not mean allowing the agent to enlarge its own authority because the task has become difficult. It remains an institutional process: detecting change, examining the new action path, revising permissions, testing controls, preserving evidence and deciding whether to continue, narrow, pause or withdraw. Authority drift is not corrected by asking the system to govern itself.

At the end of the incident review, the organisation could identify the temptation to blame the first assistant. It had, after all, opened the tasks. But that answer would have been too easy and largely useless. The organisation had chosen the purpose, connected the tools, created the service identities, defined the permissions, accepted the ownership agent’s output, allowed the scheduling rule and integrated the supplier workflow. The agent could execute delegated authority. It could not absorb responsibility for the arrangement that made the action possible.

**Delegation does not transfer accountability.**

That principle is the line running through the entire book. A person or institution may remain named as accountable while losing the capability, visibility, authority or intervention capacity needed to make that accountability real. AI governance fails when responsibility stays on an organisation chart while practical control migrates into workflows, tools, suppliers and systems whose combined behaviour no one can meaningfully challenge.

The answer is not to prohibit every acting system. Nor is it to place a symbolic human at the end of a chain that has already committed the organisation. It is to design the organisation so that authority remains explicit, capability does not masquerade as permission, controls operate where action occurs, evidence travels with consequential decisions, intervention remains real and assurance continues after apparent success.

Seen together, these are not separate safeguards arranged around a technology. They are the operating system through which governance becomes organisationally real: purpose translated into authority, authority bounded in work and infrastructure, capability preserved for judgement, evidence connected to assurance, and intervention and learning kept available as conditions change. An organisation can possess each artefact in isolation and still lose the system if those connections fail.

The four propositions developed across these chapters now meet in one place. Capability does not confer authority. Delegation does not transfer accountability. Successful execution does not eliminate the need for assurance. And when AI can act, governance must be enforceable where authority becomes action.

The technology will continue to change. New agents will plan over longer horizons, use more tools, coordinate across organisations and act at greater speed. The governing obligation is more durable. An organisation must still be able to explain what it permitted, recognise when the boundary changed, interrupt what should not proceed, repair what cannot be reversed and accept responsibility for the consequences of the system it designed.

The organisation must still be able to govern what it permits AI to do.

---

# References

A2A Protocol 2026, *A2A Protocol specification*, viewed 20 November 2026, <https://a2a-protocol.org/latest/specification/>.

Adler, PS & Borys, B 1996, ‘Two types of bureaucracy: enabling and coercive’, *Administrative Science Quarterly*, vol. 41, no. 1, pp. 61–89, doi:10.2307/2393986.

Ahrens, T & Chapman, CS 2004, ‘Accounting for flexibility and efficiency: a field study of management control systems in a restaurant chain’, *Contemporary Accounting Research*, vol. 21, no. 2, pp. 271–301, doi:10.1506/VJR6-RP75-7GUX-XH0X.

Alles, MG, Brennan, G, Kogan, A & Vasarhelyi, MA 2006, ‘Continuous monitoring of business process controls: a pilot implementation of a continuous auditing system at Siemens’, *International Journal of Accounting Information Systems*, vol. 7, no. 2, pp. 137–161, doi:10.1016/j.accinf.2005.10.004.

Almeida, PG & Santos Júnior, CD 2025, ‘Artificial intelligence governance: understanding how public organizations implement it’, *Government Information Quarterly*, vol. 42, no. 1, article 102003, doi:10.1016/j.giq.2024.102003.

Arnold, M, Bellamy, RKE, Hind, M, Houde, S, Mehta, S, Mojsilović, A, Nair, R, Ramamurthy, KN, Olteanu, A, Piorkowski, D, Reimer, D, Richards, J, Tsay, J & Varshney, KR 2019, ‘FactSheets: increasing trust in AI services through supplier’s declarations of conformity’, *IBM Journal of Research and Development*, vol. 63, nos 4–5, pp. 6:1–6:13, doi:10.1147/JRD.2019.2942288.

Australian AI Safety Institute 2026, *Risks and controls for multi-agent systems*, Australian Government, viewed 20 November 2026, <https://www.industry.gov.au/publications/risks-and-controls-multi-agent-systems>.

Australian Government 2025a, *AI systems register template*, National AI Centre, October, viewed 20 November 2026, <https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/ai-systems-register>.

Australian Government 2025b, *Guidance for AI adoption: foundations*, National AI Centre, October, viewed 20 November 2026, <https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations>.

Australian Government 2025c, *AI screening questions*, National AI Centre, October, viewed 20 November 2026, <https://www.ai.gov.au/practical-guides-and-learning/planning-tools-and-templates/ai-screening-questions>.

Australian Government 2025d, *Guidance for AI adoption: implementation practices*, National AI Centre, October, viewed 20 November 2026, <https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-implementation-guidance>.

Australian Signals Directorate, Cybersecurity and Infrastructure Security Agency, National Security Agency, Canadian Centre for Cyber Security, National Cyber Security Centre New Zealand & National Cyber Security Centre United Kingdom 2026, *Careful adoption of agentic AI services*, Australian Signals Directorate, 1 May, viewed 20 November 2026, <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services>.

Baldwin, TT & Ford, JK 1988, ‘Transfer of training: a review and directions for future research’, *Personnel Psychology*, vol. 41, no. 1, pp. 63–105, doi:10.1111/j.1744-6570.1988.tb00632.x.

Bozeman, B, Youtie, J & Jung, J 2021, ‘Death by a thousand 10-minute tasks: workarounds and noncompliance in university research administration’, *Administration & Society*, vol. 53, no. 4, pp. 527–568, doi:10.1177/0095399720947994.

Brynjolfsson, E, Li, D & Raymond, LR 2025, ‘Generative AI at work’, *The Quarterly Journal of Economics*, vol. 140, no. 2, pp. 889–942, doi:10.1093/qje/qjae044.

Buçinca, Z, Malaya, MB & Gajos, KZ 2021, ‘To trust or to think: cognitive forcing functions can reduce overreliance on AI in AI-assisted decision-making’, *Proceedings of the ACM on Human-Computer Interaction*, vol. 5, CSCW1, article 188, doi:10.1145/3449287.

Cäker, M, Siverbo, S & Åkesson, J 2022, ‘Performance measurement systems, hierarchical accountability and enabling control’, *Accounting and Business Research*, vol. 52, no. 7, pp. 865–889, doi:10.1080/00014788.2021.1940076.

Calvert, SC 2025, ‘Principles and framework for the operationalisation of meaningful human control over autonomous systems’, *Science and Engineering Ethics*, doi:10.1007/s11948-025-00554-z.

Cavalcante Siebert, L, Lupetti, ML, Aizenberg, E, Beckers, N, Zgonnikov, A, Veluwenkamp, H, Abbink, D, Giaccardi, E, Houben, G-J, Jonker, CM, van den Hoven, J, Forster, D & Lagendijk, RL 2023, ‘Meaningful human control: actionable properties for AI system development’, *AI and Ethics*, vol. 3, pp. 241–255, doi:10.1007/s43681-022-00167-3.

Chapman, CS & Kihn, L-A 2009, ‘Information system integration, enabling control and performance’, *Accounting, Organizations and Society*, vol. 34, no. 2, pp. 151–169, doi:10.1016/j.aos.2008.07.003.

Chiu, V, Liu, Q & Vasarhelyi, MA 2014, ‘The development and intellectual structure of continuous auditing research’, *Journal of Accounting Literature*, vol. 33, no. 1–2, pp. 37–57, doi:10.1016/j.acclit.2014.08.001.

Cobbe, J, Lee, MSA & Singh, J 2021, ‘Reviewable automated decision-making: a framework for accountable algorithmic systems’, in *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, pp. 598–609, doi:10.1145/3442188.3445921.

Cobbe, J & Singh, J 2020, ‘Reviewable automated decision-making: a framework for accountable algorithmic systems’, *Computer Law & Security Review*, vol. 39, article 105475, doi:10.1016/j.clsr.2020.105475.

Committee of Sponsoring Organizations of the Treadway Commission 2013, *Internal control—integrated framework*, COSO, New York.

Debenedetti, E, Zhang, J, Balunović, M, Beurer-Kellner, L, Fischer, M & Tramèr, F 2024, ‘AgentDojo: a dynamic environment to evaluate prompt injection attacks and defenses for LLM agents’, *Advances in Neural Information Processing Systems*, vol. 37, pp. 82895–82920, doi:10.52202/079017-2636.

de Bree, M & Stoopendaal, A 2020, ‘De- and recoupling and public regulation’, *Organization Studies*, vol. 41, no. 5, pp. 599–620, doi:10.1177/0170840618800115.

de Hoop, E, Pols, A & Romijn, H 2016, ‘Limits to responsible innovation’, *Journal of Responsible Innovation*, vol. 3, no. 2, pp. 110–134, doi:10.1080/23299460.2016.1231396.

Department for Science, Innovation and Technology 2024, *Introduction to AI assurance*, UK Government, 12 February, viewed 20 November 2026, <https://www.gov.uk/government/publications/introduction-to-ai-assurance>.

Detert, JR & Burris, ER 2007, ‘Leadership behavior and employee voice: is the door really open?’, *Academy of Management Journal*, vol. 50, no. 4, pp. 869–884, doi:10.5465/amj.2007.26279183.

Edmondson, AC 1999, ‘Psychological safety and learning behavior in work teams’, *Administrative Science Quarterly*, vol. 44, no. 2, pp. 350–383, doi:10.2307/2666999.

Elish, MC 2019, ‘Moral crumple zones: cautionary tales in human–robot interaction’, *Engaging Science, Technology, and Society*, vol. 5, pp. 40–60, doi:10.17351/ests2019.260.

Endsley, MR & Kaber, DB 1999, ‘Level of automation effects on performance, situation awareness and workload in a dynamic control task’, *Ergonomics*, vol. 42, no. 3, pp. 462–492, doi:10.1080/001401399185595.

Endsley, MR & Kiris, EO 1995, ‘The out-of-the-loop performance problem and level of control in automation’, *Human Factors*, vol. 37, no. 2, pp. 381–394, doi:10.1518/001872095779064555.

Engin, Z 2026, ‘Human–AI governance (HAIG): a trust–utility approach’, *Journal of Responsible Technology*, vol. 26, article 100167, doi:10.1016/j.jrt.2026.100167.

Etchegaray, JM, Thomas, EJ & Profit, J 2019, ‘Preoccupation with failure and adherence to shared baselines: measuring high-reliability organizational culture’, *Journal of Patient Safety and Risk Management*, vol. 24, no. 4, pp. 147–152, doi:10.1177/2516043519838185.

European Union 2024, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence*, consolidated version 27 July 2026, *Official Journal of the European Union*, viewed 20 November 2026, <https://eur-lex.europa.eu/eli/reg/2024/1689>.

Flemisch, F, Heesen, M, Hesse, T, Kelsch, J, Schieben, A & Beller, J 2012, ‘Towards a dynamic balance between humans and automation: authority, ability, responsibility and control in shared and cooperative control situations’, *Cognition, Technology & Work*, vol. 14, pp. 3–18, doi:10.1007/s10111-011-0191-6.

Gebru, T, Morgenstern, J, Vecchione, B, Vaughan, JW, Wallach, H, Daumé III, H & Crawford, K 2021, ‘Datasheets for datasets’, *Communications of the ACM*, vol. 64, no. 12, pp. 86–92, doi:10.1145/3458723.

George, B, Pandey, SK & Steijn, B 2021, ‘Red tape, organizational performance, and employee outcomes: meta-analysis, meta-regression, and research agenda’, *Public Administration Review*, vol. 81, no. 4, pp. 638–651, doi:10.1111/puar.13327.

Goddard, K, Roudsari, A & Wyatt, JC 2012, ‘Automation bias: a systematic review of frequency, effect mediators, and mitigators’, *Journal of the American Medical Informatics Association*, vol. 19, no. 1, pp. 121–127, doi:10.1136/amiajnl-2011-000089.

Green, B 2022, ‘The flaws of policies requiring human oversight of government algorithms’, *Computer Law & Security Review*, vol. 45, article 105681, doi:10.1016/j.clsr.2022.105681.

Grossman, R & Salas, E 2011, ‘The transfer of training: what really matters’, *International Journal of Training and Development*, vol. 15, no. 2, pp. 103–120, doi:10.1111/j.1468-2419.2011.00373.x.

Gurman, M 2023, ‘Samsung bans staff’s AI use after spotting ChatGPT data leak’, *Bloomberg*, 1 May, viewed 20 November 2026, <https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak>.

Hales, DN & Chakravorty, SS 2016, ‘Creating high reliability organizations using mindfulness’, *Journal of Business Research*, vol. 69, no. 8, pp. 2873–2881, doi:10.1016/j.jbusres.2015.12.056.

International Auditing and Assurance Standards Board 2013, *International Standard on Assurance Engagements 3000 (Revised): Assurance engagements other than audits or reviews of historical financial information*, International Federation of Accountants, New York.

Institute of Internal Auditors 2024, *Global Internal Audit Standards*, issued 9 January 2024, effective 9 January 2025, IIA, Lake Mary, Florida.

Institute of Internal Auditors 2026, *The IIA’s Three Lines Model: an update of the Three Lines of Defense*, refreshed 8 July 2026, IIA, Lake Mary, Florida.

ISO/IEC 2023, *ISO/IEC 42001:2023 Information technology — Artificial intelligence — Management system*, International Organization for Standardization, Geneva.

ISO/IEC 2025, *ISO/IEC 42006:2025 Information technology — Artificial intelligence — Requirements for bodies providing audit and certification of artificial intelligence management systems*, International Organization for Standardization, Geneva.

Kapoor, S, Stroebl, B, Siegel, ZS, Nadgir, N & Narayanan, A 2025, ‘AI agents that matter’, *Transactions on Machine Learning Research*, May, <https://openreview.net/forum?id=Zy4uFzMviZ>.

Laux, J 2024, ‘Institutionalised distrust and human oversight of artificial intelligence: towards a democratic design of AI governance under the European Union AI Act’, *AI & Society*, vol. 39, pp. 2853–2866, doi:10.1007/s00146-023-01777-z.

Lee, H-P, Sarkar, A, Tankelevitch, L, Drosos, I, Rintel, S, Banks, R & Wilson, N 2025, ‘The impact of generative AI on critical thinking: self-reported reductions in cognitive effort and confidence effects from a survey of knowledge workers’, in *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems*, doi:10.1145/3706598.3713778.

Lee, JD & See, KA 2004, ‘Trust in automation: designing for appropriate reliance’, *Human Factors*, vol. 46, no. 1, pp. 50–80, doi:10.1518/hfes.46.1.50_30392.

Long, D & Magerko, B 2020, ‘What is AI literacy? Competencies and design considerations’, in *Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems*, pp. 1–16, doi:10.1145/3313831.3376727.

Madaio, MA, Stark, L, Wortman Vaughan, J & Wallach, H 2020, ‘Co-designing checklists to understand organizational challenges and opportunities around fairness in AI’, in *Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems*, pp. 1–14, doi:10.1145/3313831.3376445.

Microsoft 2026a, ‘Cemex builds an always-on HR experience with a Copilot Studio agent’, *Microsoft Customer Stories*, viewed 20 November 2026, <https://www.microsoft.com/en/customers/story/26985-cemex-microsoft-copilot-studio>.

Microsoft 2026b, ‘Wipro increases the impact of rewards and recognition platform with Microsoft 365 Copilot’, *Microsoft Customer Stories*, viewed 20 November 2026, <https://www.microsoft.com/en/customers/story/26393-wipro-microsoft-365-copilot>.

Miller, CA & Parasuraman, R 2007, ‘Designing for flexible interaction between humans and automation: delegation interfaces for supervisory control’, *Human Factors*, vol. 49, no. 1, pp. 57–75, doi:10.1518/001872007779598037.

Mitchell, M, Wu, S, Zaldivar, A, Barnes, P, Vasserman, L, Hutchinson, B, Spitzer, E, Raji, ID & Gebru, T 2019, ‘Model cards for model reporting’, in *Proceedings of the Conference on Fairness, Accountability, and Transparency*, pp. 220–229, doi:10.1145/3287560.3287596.

Model Context Protocol 2026, *Model Context Protocol specification and Tasks extension*, version 28 July 2026, viewed 20 November 2026, <https://tasks.extensions.modelcontextprotocol.io/specification/2026-07-28/tasks>.

Morrison, EW 2014, ‘Employee voice and silence’, *Annual Review of Organizational Psychology and Organizational Behavior*, vol. 1, pp. 173–197, doi:10.1146/annurev-orgpsych-031413-091328.

National Aeronautics and Space Administration 2024, *A verification framework for runtime assurance of autonomous UAS*, NASA technical publication, Washington, DC.

National Institute of Standards and Technology 2020a, *Security and privacy controls for information systems and organizations*, NIST Special Publication 800-53 Revision 5, US Department of Commerce, Gaithersburg, Maryland, doi:10.6028/NIST.SP.800-53r5.

National Institute of Standards and Technology 2020b, *Zero trust architecture*, NIST Special Publication 800-207, US Department of Commerce, Gaithersburg, Maryland, doi:10.6028/NIST.SP.800-207.

National Institute of Standards and Technology 2023, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, US Department of Commerce, Gaithersburg, Maryland, doi:10.6028/NIST.AI.100-1.

National Institute of Standards and Technology 2026a, ‘Announcing the AI Agent Standards Initiative for interoperable and secure innovation’, 17 February, viewed 20 November 2026, <https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure>.

National Institute of Standards and Technology 2026b, *Summary analysis of responses to the Request for Information regarding security considerations for AI agents*, NIST Trustworthy and Responsible AI 800-5, May, viewed 20 November 2026, <https://www.nist.gov/publications/summary-analysis-responses-request-information-regarding-security-considerations-ai>.

National Institute of Standards and Technology National Cybersecurity Center of Excellence 2026, *Accelerating the adoption of software and artificial intelligence agent identity and authorization: concept paper*, NCCoE, viewed 20 November 2026, <https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization>.

Ng, DTK, Leung, JKL, Chu, SKW & Qiao, MS 2021, ‘Conceptualizing AI literacy: an exploratory review’, *Computers and Education: Artificial Intelligence*, vol. 2, article 100041, doi:10.1016/j.caeai.2021.100041.

Nitchals, G 2026, ‘Meaningful human authority in AI-mediated decision making: an authority vector and bottleneck principle’, *AI and Ethics*, doi:10.1007/s43681-026-01414-7.

O’Donovan, R & McAuliffe, E 2020, ‘Exploring psychological safety in healthcare teams to inform the development of interventions: combining observational, survey and interview data’, *BMC Health Services Research*, vol. 20, article 810, doi:10.1186/s12913-020-05646-z.

OECD 2023, *Advancing accountability in AI: governing and managing risks throughout the lifecycle for trustworthy AI*, OECD Digital Economy Papers, no. 349, OECD Publishing, Paris, doi:10.1787/2448f04b-en.

OECD 2024, *Recommendation of the Council on Artificial Intelligence*, OECD/LEGAL/0449, amended 3 May 2024, OECD, Paris, <https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449>.

OECD 2026, *The agentic AI landscape and its conceptual foundations*, OECD Artificial Intelligence Papers, no. 56, OECD Publishing, Paris, doi:10.1787/396cf758-en.

Onnasch, L, Wickens, CD, Li, H & Manzey, D 2014, ‘Human performance consequences of stages and levels of automation: an integrated meta-analysis’, *Human Factors*, vol. 56, no. 3, pp. 476–488, doi:10.1177/0018720813501549.

Parasuraman, R & Manzey, DH 2010, ‘Complacency and bias in human use of automation: an attentional integration’, *Human Factors*, vol. 52, no. 3, pp. 381–410, doi:10.1177/0018720810376055.

Parasuraman, R & Riley, V 1997, ‘Humans and automation: use, misuse, disuse, abuse’, *Human Factors*, vol. 39, no. 2, pp. 230–253, doi:10.1518/001872097778543886.

Parasuraman, R, Sheridan, TB & Wickens, CD 2000, ‘A model for types and levels of human interaction with automation’, *IEEE Transactions on Systems, Man, and Cybernetics — Part A: Systems and Humans*, vol. 30, no. 3, pp. 286–297, doi:10.1109/3468.844354.

Papagiannidis, E, Mikalef, P & Conboy, K 2025, ‘Responsible artificial intelligence governance: a review and research framework’, *Journal of Strategic Information Systems*, vol. 34, no. 2, article 101885, doi:10.1016/j.jsis.2024.101885.

Public Company Accounting Oversight Board 2010, *AS 1105: Audit evidence*, PCAOB, Washington, DC, viewed 20 November 2026, <https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105>.

Raji, ID, Smart, A, White, RN, Mitchell, M, Gebru, T, Hutchinson, B, Smith-Loud, J, Theron, D & Barnes, P 2020, ‘Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing’, in *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*, pp. 33–44, doi:10.1145/3351095.3372873.

Ruan, Y, Dong, H, Wang, A, Pitis, S, Zhou, Y, Ba, J, Dubois, Y, Maddison, C & Hashimoto, T 2024, ‘Identifying the risks of LM agents with an LM-emulated sandbox’, in *International Conference on Learning Representations 2024*.

Sambasivan, N, Kapania, S, Highfill, H, Akrong, D, Paritosh, P & Aroyo, LM 2021, ‘“Everyone wants to do the model work, not the data work”: data cascades in high-stakes AI’, in *Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems*, article 39, doi:10.1145/3411764.3445518.

Sayan, A & Bueechl, J 2025, ‘Embedding AI governance in organizations: a multi-level approach to responsible AI use’, *Procedia Computer Science*, pp. 4144–4154, doi:10.1016/j.procs.2025.09.539.

Sebastian, IM, Weill, P, Haskamp, T & vom Brocke, J 2026, *Designing decision rights for AI*, MIT CISR Research Briefing, vol. XXVI, no. 6, Massachusetts Institute of Technology, Cambridge, Massachusetts, <https://dspace.mit.edu/handle/1721.1/175016>.

Singh, J, Cobbe, J & Norval, C 2019, ‘Decision provenance: harnessing data flow for accountable systems’, *IEEE Access*, vol. 7, pp. 6562–6574, doi:10.1109/ACCESS.2018.2887201.

Stanford Institute for Human-Centered Artificial Intelligence 2026, *AI Index Report 2026*, Stanford University, Stanford, California.

Sterz, S, Baum, K, Biewer, S, Hermanns, H, Lauber-Rönsberg, A, Lütz, C & Schmitz, P 2024, ‘On the quest for effectiveness in human oversight: interdisciplinary perspectives’, in *Proceedings of the 2024 ACM Conference on Fairness, Accountability, and Transparency*, pp. 2495–2507, doi:10.1145/3630106.3659051.

Stilgoe, J, Owen, R & Macnaghten, P 2013, ‘Developing a framework for responsible innovation’, *Research Policy*, vol. 42, no. 9, pp. 1568–1580, doi:10.1016/j.respol.2013.05.008.

UK AI Security Institute 2026a, ‘Loss of oversight: how AI systems may become harder to audit, monitor, and investigate’, viewed 20 November 2026, <https://www.aisi.gov.uk/research/loss-of-oversight-how-ai-systems-may-become-harder-to-audit-monitor-and-investigate>.

UK AI Security Institute 2026b, ‘Transect: making large-scale agentic evaluations easier to understand’, viewed 20 November 2026, <https://www.aisi.gov.uk/blog/transect-making-large-scale-agentic-evaluations-easier-to-understand>.

Vaccaro, M, Almaatouq, A & Malone, TW 2024, ‘When combinations of humans and AI are useful: a systematic review and meta-analysis’, *Nature Human Behaviour*, doi:10.1038/s41562-024-02024-1.

van de Sande, D, Economou-Zavlanos, N & van Genderen, ME 2026, ‘Meaningful oversight of medical AI beyond human in the loop’, *npj Digital Medicine*, vol. 9, article 569, doi:10.1038/s41746-026-02971-1.

van Loon, NM, Leisink, PLM, Knies, E & Brewer, GA 2016, ‘Red tape: developing and validating a new job-centered measure’, *Public Administration Review*, vol. 76, no. 4, pp. 662–673, doi:10.1111/puar.12569.

Weill, P & Ross, JW 2004, *IT governance: how top performers manage IT decision rights for superior results*, Harvard Business School Press, Boston.

Westphal, JD & Zajac, EJ 2001, ‘Decoupling policy from practice: the case of stock repurchase programs’, *Administrative Science Quarterly*, vol. 46, no. 2, pp. 202–228, doi:10.2307/2667086.

Wieringa, M 2020, ‘What to account for when accounting for algorithms: a systematic literature review on algorithmic accountability’, in *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*, pp. 1–18, doi:10.1145/3351095.3372833.

Wouters, M & Wilderom, C 2008, ‘Developing performance-measurement systems as enabling formalization: a longitudinal field study of a logistics department’, *Accounting, Organizations and Society*, vol. 33, nos 4–5, pp. 488–516, doi:10.1016/j.aos.2007.05.002.

Zhang, H, Huang, J, Mei, K, Yao, Y, Wang, Z, Zhan, C, Wang, H & Zhang, Y 2025, ‘Agent Security Bench (ASB): formalizing and benchmarking attacks and defenses in LLM-based agents’, in *International Conference on Learning Representations 2025*.

Zhang, Y, Liao, QV & Bellamy, RKE 2020, ‘Effect of confidence and explanation on accuracy and trust calibration in AI-assisted decision making’, in *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*, pp. 295–305, doi:10.1145/3351095.3372852.

Zhu, Q, Gold, C, Buch, V, Choudhury, A, Doshi-Velez, F, Evans, J, Gilpin, LH, Greer, A, Ghassemi, M, Hadfield-Menell, D, Heller, K, Liao, QV, Martin, K, McDermott, M, Mullainathan, S, Rosen, M, Shah, J, Suresh, H & others 2026, ‘Designing meaningful human oversight in AI’, *AI and Ethics*, vol. 6, article 286, doi:10.1007/s43681-026-01147-7.
