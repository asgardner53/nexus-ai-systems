# Chapter 1 — The AI You Are Already Governing

For many organisations, the story of AI adoption begins with a meeting. Someone proposes a pilot. A vendor demonstrates a product. A transformation team prepares a business case. Risk, legal, technology and HR are invited into the conversation, and eventually a decision is made about whether the organisation should proceed.

It is a reassuring sequence because it suggests there is a moment when AI enters the organisation and governance can begin.

Increasingly, there is no such moment.

AI often arrives quietly. It appears as a new feature inside software the organisation already uses. It is switched on by a vendor, bundled into a licence, added to a search function, inserted into an analytics platform, or made available inside an employee's existing productivity suite. Elsewhere, an employee opens a public generative AI service on a personal account because it can summarise a document faster than the approved systems can. A manager experiments with it to draft a performance discussion. A recruiter uses it to sharpen a job advertisement. A project officer asks it to make sense of meeting notes. None of these actions necessarily feels like the deployment of an AI system. They feel like work.

That is the first difficulty of AI governance in practice. The technology does not always arrive wearing a badge that says *govern me*.

In May 2023, Samsung restricted employee use of external generative AI services after sensitive information, including source code, had been uploaded to ChatGPT. The significance of the episode was not that Samsung had made a strategic decision to deploy a new enterprise AI platform. It was almost the opposite. The risk emerged because employees had access to a powerful public tool before the organisation's normal governance mechanisms had caught up with the way people were beginning to use it (Gurman, 2023).

The incident quickly became one of the early examples attached to the phrase *shadow AI*: the use of AI outside the formal approval or oversight that an organisation expects. The phrase is useful, but it can also narrow the problem if we imagine shadow AI as nothing more than employees behaving badly with unauthorised websites. The deeper issue is visibility. An organisation cannot govern a use of AI it does not know exists, but neither can it assume that everything requiring governance will appear in procurement records or on an approved-technology register.

Some AI is hidden because employees introduce it informally. Other AI is hidden in plain sight because it is embedded in systems the organisation already regards as ordinary infrastructure.

Consider an HR employee asking a question in Microsoft Teams. The conversation may look entirely familiar. Behind it, however, an AI agent may retrieve information from SharePoint, interact with a service-management platform, draw on employee data, create a ticket, and progressively execute transactions in a human-capital-management system. That is broadly the direction taken by Cemex with its Consult HR agent, developed using Microsoft Copilot Studio. The agent operates through Microsoft Teams and is connected to ServiceNow, SharePoint and SAP SuccessFactors. It began with a controlled pilot and moved into production support for around 800 employees in Central Mexico in January 2026 (Microsoft, 2026a).

From the employee's perspective, it is a conversation. From the organisation's perspective, it is a chain of systems, data sources, permissions, decisions and potential actions.

Wipro offers a different example. Its recognition agent was embedded inside Microsoft 365 Copilot and connected with enterprise information and workflows, including data from email, Teams, meetings, OneDrive, SharePoint and other organisational sources. The employee does not necessarily leave the flow of ordinary work to enter a separate AI environment. The AI is progressively becoming part of the environment in which the work already happens (Microsoft, 2026b).

These vendor case studies should be treated carefully. They are useful illustrations of implementation, not independent proof of the performance benefits vendors report. But they reveal something important about the shape of contemporary AI adoption. The boundary between an “AI system” and the rest of the organisation's digital environment is becoming less obvious. An AI capability may sit inside a larger platform, use data from several systems, trigger activity in another, and influence decisions without ever presenting itself to the user as a discrete application.

That creates a governance problem that a simple technology inventory cannot solve on its own.

This does not mean inventories are unimportant. They are essential. The Australian Government's AI systems register template recommends recording the AI systems an organisation uses, their use cases, accountable people and appropriate governance level. Significantly, it also states that the register should include AI features embedded in common software packages. The guidance is making a practical point: organisations cannot confine governance to systems that were purchased under the heading *artificial intelligence* (Australian Government, 2025a).

The problem arises when the inventory becomes the destination rather than the starting point.

Imagine an entry that reads: *Microsoft Copilot — approved*. What, exactly, has been governed?

The same capability might be used by one employee to improve the wording of an internal email and by another to summarise a confidential investigation. It might help a marketing team generate first-draft copy, assist a manager in interpreting employee information, support a finance team in analysing a spreadsheet, or be connected to workflows that initiate transactions. The product name has not changed. The organisational consequence has.

Australian guidance makes this distinction explicit. It notes that the same AI system can present very different levels of risk depending on how it is used. Using a general-purpose generative AI system to draft marketing emails is not the same governance proposition as using it to assess job applications. The technology may be identical; the context, affected people, evidence requirements and consequences are not (Australian Government, 2025b).

NIST's AI Risk Management Framework reaches the same issue from a broader risk perspective. Its Map function asks organisations to understand and document intended purpose, users, deployment settings, impacts, limitations, foreseeable uses and potential misuse. It also recognises that AI systems operate across interdependent activities in which no single actor necessarily has complete visibility or control (NIST, 2023). The practical message is difficult to avoid: knowing *what the tool is* is not the same as knowing *what the organisation is doing with it*.

That distinction becomes more important as AI participates more deeply in decisions.

There is a considerable difference between an AI system generating text that a person may choose to ignore and a system ranking applicants, identifying suspicious transactions, recommending a clinical intervention, prioritising customer complaints or initiating an organisational action. In each case, the system may be described broadly as “AI”, but the governance question changes because the system's participation in the work changes.

This is why the language of *use case* matters. It forces attention away from the technology in isolation and towards the relationship between the technology, the work and the consequences.

A useful governance conversation therefore begins with questions that are more concrete than “Where are we using AI?” It asks: What work is the system participating in? What information does it use? Who is affected? Is it generating, recommending, prioritising, deciding or acting? What happens if it is wrong? Can a person recognise the error? Can the outcome be reversed? Who has authority to intervene?

Those questions begin to expose something that a software list cannot.

They expose **decision participation**.

An AI system need not make the final decision to shape it. It can frame the options a human sees. It can decide which information is surfaced and which remains buried. It can rank candidates before a recruiter ever looks at them. It can determine which customer cases receive attention first. It can generate the draft that becomes the anchor around which a later human judgement is made. It can create a workflow step that employees come to rely on because the alternative is slower or harder.

The governance relevance lies not only in whether AI is present, but in how much of the work has begun to organise itself around the AI.

That is why **govern the work AI participates in, not merely the tools labelled AI** is a more useful starting point than a technology census. The sentence is not an argument against inventories. It is an argument about what inventories must lead to. A register tells the organisation where to look. Governance begins when the organisation understands what it is looking at.

There is, however, an obvious danger in taking this too far.

If every spell-checker, recommendation, autocomplete feature and low-consequence prompt is subjected to the same governance process as an AI system affecting employment, safety, finance or access to essential services, governance itself becomes the problem. It becomes slow, expensive and increasingly ignored. Employees route around it. Managers create informal exceptions. Risk teams accumulate queues they cannot realistically examine. Eventually the organisation can point to an impressive process while losing practical control over what matters most.

The Australian Government's AI screening tool was designed in part to avoid this. It recommends screening AI systems and individual use cases so that higher-risk applications receive greater scrutiny while less consequential uses do not overwhelm the governance process. Its example is deliberately ordinary: an AI system that automatically decides customer complaints and handles refunds warrants a different level of attention from a chatbot processing restaurant bookings (Australian Government, 2025c).

This introduces a principle that will matter throughout this book: visibility without proportionality becomes bureaucracy.

The purpose of seeing AI is not to create an encyclopaedia of everything the organisation could possibly call artificial intelligence. The purpose is to know enough about AI participation in work to make defensible decisions about where governance effort belongs.

That means an organisation may legitimately decide that some uses can operate under general policies and controls. Others will require a documented assessment. Some will require approval by people with particular expertise. A smaller group may demand ongoing monitoring, stronger evidence, human intervention points or explicit limits on what the system is permitted to do. And some uses should not proceed at all.

The point is not uniformity. The point is conscious choice.

This is where the idea of *consequential use* becomes helpful. A use becomes consequential not simply because the AI is sophisticated, but because the outcome matters. It may affect employment, money, safety, access, privacy, legal rights, reputation or another significant organisational interest. A technically simple model can therefore deserve more governance attention than a far more capable generative system used for harmless drafting. The sophistication of the technology and the consequence of the use are related questions, not interchangeable ones.

The same logic also changes the way organisations should think about shadow AI.

If the response to shadow AI is simply to ban every unapproved tool, the organisation may reduce some risks while learning very little about why employees are using those tools in the first place. People often route around official systems because the alternative feels slower, more cumbersome or less useful. An organisation that only sees misconduct may miss information about unmet needs, poor workflow design or a gap between formal technology strategy and actual work.

None of that makes unauthorised use acceptable where it exposes confidential information, creates legal risk or bypasses necessary controls. Samsung's experience is a reminder of how quickly experimentation can become an information-governance problem. But governance that merely prohibits behaviour it cannot see is fragile. Effective governance needs enough visibility to understand both the risk and the work that produced it.

The same applies to embedded enterprise AI. Cemex's HR agent is not simply a chatbot that happens to answer questions. As its integrations expand, it increasingly participates in the path from employee request to organisational action. Wipro's recognition agent does not merely generate polished language; it draws on organisational information and helps shape what managers notice and act upon. Once AI becomes part of the route through which work is interpreted or executed, the organisation needs to understand that participation whether or not the user experiences the AI as a separate system.

This suggests a different opening discipline for AI governance.

Start with the work.

Look for the places where information is interpreted, options are narrowed, people are ranked, priorities are set, recommendations are produced, content is generated, transactions are initiated or decisions are made easier to accept. Then ask where AI is participating in those moments.

From there, identify the system, the data, the people, the intended purpose, the likely consequence and the level of scrutiny required. Some uses will prove mundane. Others will reveal that the organisation has delegated more influence to AI than anyone had consciously decided.

That is the real value of visibility. It converts accidental adoption into something the organisation can examine.

Only then does proportional governance become possible.

An organisation that can see where AI participates in its work can begin to distinguish low-consequence assistance from consequential decision participation. It can decide which uses need stronger approval, which require monitoring, which can operate within broad controls and which exceed the organisation's risk appetite. It can also discover where the same AI capability is being used in several fundamentally different ways.

The register still matters. The inventory still matters. Procurement records still matter. But none of them should be mistaken for the organisation itself.

The organisation exists in the work people actually perform.

And once the organisation can finally see where AI has entered that work, a more uncomfortable question appears.

It is no longer enough to ask where the AI is.

The question becomes: **what, exactly, is governing what it is allowed to do?**
