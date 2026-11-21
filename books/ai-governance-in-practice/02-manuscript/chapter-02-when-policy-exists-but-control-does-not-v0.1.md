# Chapter 2 — When Policy Exists but Control Does Not

By the time many organisations begin to take AI governance seriously, they already have the beginnings of a respectable governance architecture. There is a policy. There are principles. Someone has created an approval form. A committee has been given oversight. A register may list approved systems and use cases. Training has been rolled out, perhaps unevenly, and senior leaders can point to a document that says the organisation is committed to responsible AI.

From a distance, it looks reassuring.

Then someone asks a practical question.

Who can approve this particular use? What evidence must they see before doing so? If the system changes after approval, who notices? If the risk increases, who has authority to stop it? What happens when the business owner wants to proceed but risk is uncomfortable? Who monitors whether the control that was designed six months ago still works?

At that point, the appearance of governance can become less convincing. The documents may be real. The committee may meet regularly. The policy may be thoughtful and well written. Yet the organisation can still be uncertain about what happens at the moment a decision must actually be made.

This is not an argument against policy. On the contrary, policy matters because organisations need to make their intentions explicit. They need to state what they value, what they will not accept, what responsibilities people carry and what standards should guide judgement. The problem begins when the existence of those statements is mistaken for evidence that governance has been enacted.

The distinction is familiar outside AI. Organisational researchers have long examined what happens when formal structures become separated from day-to-day practice. Policies may be adopted, committees established and procedures documented, yet the work continues according to a different set of habits, incentives and practical constraints. This is often described as **decoupling**: a gap between the way the organisation says work should happen and the way it actually happens.

That gap does not necessarily imply bad faith. It can emerge because people do not understand the policy, because the required process is too difficult, because responsibilities overlap, because no one has enough authority, because systems were never changed to reflect the new requirement, or because the organisation has created a rule without creating the capability to follow it. Sometimes the formal process simply sits too far away from the work it is supposed to govern.

AI makes this familiar organisational weakness harder to ignore because the consequences can move quickly. A policy may state that human oversight is required, but the workflow may not tell anyone when intervention is necessary. A principle may require fairness, but the approval process may not specify what evidence of fairness is needed. A committee may own governance at the organisational level, while managers and system owners remain uncertain about who can make the operational decision in front of them.

The policy has not failed because it exists. It has failed to become coupled to practice.

That distinction is embedded in the major governance frameworks. ISO/IEC 42001 does not define an AI management system as a policy document. It describes an organisational system that establishes policies and objectives **and the processes required to achieve them**, supported by implementation, performance evaluation and continual improvement. NIST takes a similar position. Its AI Risk Management Framework places governance across the entire lifecycle and expects policies, processes, procedures and practices to be implemented effectively, supported by accountability structures, clearly defined roles, training, monitoring and periodic review.

The language matters because it changes the unit of attention. Governance is no longer the statement of intent. It is the mechanism through which intent becomes action.

That mechanism can be surprisingly mundane. It may be the approval threshold that determines when a use case needs specialist review. It may be the system permission that prevents an AI agent from taking an action outside its authorised scope. It may be the requirement for a particular piece of evidence before deployment. It may be the person who has authority to pause a system when conditions change. It may be a monitoring process that reveals that the original control is no longer sufficient.

None of those mechanisms is glamorous. They are also where governance becomes real.

This is why an organisation can possess strong governance artefacts and still have weak governance capability. A policy, register, committee, standard, risk assessment and training module are all artefacts. They are visible things that can be counted, reviewed and presented to a board or regulator. Governance capability is different. It is the organisation's ability to use those artefacts to make, constrain, explain and revisit real decisions.

The difference becomes obvious when the artefacts are tested against a live case. Imagine a business team proposes using a generative AI system to screen customer complaints and recommend which cases should be escalated. The organisation's policy may say that AI must be fair, transparent and subject to appropriate human oversight. Those are sensible principles. But they do not yet answer the operational questions.

What evidence would demonstrate that the screening process is sufficiently fair? What information would the human reviewer need to understand why a case was prioritised? At what level of risk does the use require specialist approval? Who is responsible for monitoring performance after deployment? If the use changes from recommendation to automatic action, does the original approval still apply?

A policy can tell the organisation what it cares about. Governance must determine how those concerns change the decision.

That is the point at which formal principles either acquire operational force or remain largely symbolic. A principle about fairness becomes governance when it changes the evidence required before deployment. A principle about human oversight becomes governance when it creates a clear intervention point and assigns someone the authority to use it. A principle about accountability becomes governance when the organisation can identify who owns the decision, what they must consider, and what happens if the conditions under which approval was granted no longer hold.

In that sense, governance exists where principles alter decisions, permissions, controls, evidence and behaviour.

The formulation is deliberately practical because AI governance can become abstract very quickly. Terms such as responsibility, transparency, fairness, safety and accountability are essential, but they are also easy to admire at a distance. The real test is whether they change what someone does on Tuesday afternoon when a project is under pressure and a decision cannot be postponed.

This is also why the existence of a committee should not be confused with the existence of control. Committees can be valuable. They can bring together legal, risk, technology, data, security, HR and business perspectives that no single function holds alone. But a committee that reviews policy without clarifying operational authority may create another layer of discussion rather than a clearer decision.

The same is true of approval forms. Forms can discipline thinking and create a record. Yet a form that asks whether a system is “high risk” without defining the basis for that judgement may simply relocate uncertainty into a checkbox. A register can improve visibility, as we saw in the previous chapter, but a register that is not linked to approval, monitoring and review may become little more than a catalogue.

The problem is not that these artefacts are unnecessary. It is that they acquire meaning only through their connection to the work.

Current research on responsible AI continues to identify this translation problem. Organisations are increasingly adopting responsible-AI policies, principles and formal governance arrangements, but implementation remains uneven. Studies of developers and governance practitioners report recurring difficulties in translating high-level commitments into usable processes, assigning responsibilities across functions and adapting governance as systems and contexts change. The 2026 Stanford AI Index similarly reports that formal responsible-AI policies are becoming more common while organisations continue to face barriers involving knowledge, resources and regulatory uncertainty.

That pattern should be interpreted carefully. It does not prove that formal governance is ineffective. In fact, the opposite can also be true. Organisations that successfully internalise strategy, policy, standards, training and clear responsibilities can build stronger governance capability. The important distinction is not between formalisation and flexibility. It is between formalisation that is connected to operational practice and formalisation that is not.

This matters because the phrase *governance theatre* is tempting. It captures something recognisable: organisations displaying policies and committees that create an appearance of control without changing much underneath. But the phrase should be used sparingly. Weak implementation is not always theatre. Sometimes the organisation is genuinely trying to govern responsibly and simply has not yet solved the harder problems of capability, authority, coordination and evidence.

Those harder problems are where the work lies.

An organisation can write a policy relatively quickly. It is much more difficult to redesign a workflow so that the right person sees the right evidence before a decision is made. It is harder to decide which risks can be accepted locally and which require escalation. Harder again is building monitoring that can detect when the assumptions behind an approval have changed. None of this fits neatly into a single policy statement, because governance is not a document. It is a set of relationships between decisions, people, systems and controls.

This is also why mature governance needs feedback. An approval made once is not necessarily valid forever. The model may change. The vendor may update a feature. The data may shift. The organisation may start using the system for a different purpose. What began as a low-consequence use may gradually become more consequential as employees rely on it more heavily or as the system gains the ability to initiate actions.

A policy can remain unchanged while the risk around it changes completely.

That is why monitoring and continual improvement appear so consistently in serious governance frameworks. They recognise that governance is not finished when the organisation approves a system. The organisation must be able to observe what happens afterwards, detect when conditions change and revisit earlier decisions. In practical terms, that means governance must have memory. It must know not only what was approved, but why, under what conditions, with what evidence and with what limits.

Without that, the organisation can become confident in its own paperwork while losing sight of the system it thought it had governed.

The most useful way to think about the policy–practice gap is therefore not as a failure of documentation, but as a failure of coupling. Policy is one part of the governance system. Roles are another. Controls, permissions, evidence, escalation, monitoring and review are others. The system works when those parts reinforce one another closely enough that the organisation's stated principles survive contact with real work.

Policy tells the organisation what it intends. Governance determines what actually happens.

The distinction becomes especially important when responsibility is assigned to a human being. A policy may say that a manager remains accountable for the final decision. The organisation may point to that sentence as proof that human oversight has been preserved.

But that raises a more difficult question.

What if the human remains accountable while the practical ability to understand, challenge or control the decision has already begun to move somewhere else?
