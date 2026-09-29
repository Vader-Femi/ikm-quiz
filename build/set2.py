import json
Q=[]
L="ABCDEF"
def E(n,cat,q,o,a,hint,exp,tag=None):
    Q.append({"id":f"s2-Q{n}","set":"set2","question":q,
        "options":{L[i]:t for i,t in enumerate(o)},"answers":list(a),
        "category":cat,"source":"ikm-set2","v4":tag,"hint":hint,"explanation":exp})

# --- Service Value System ---
E(1,"Service Value System","Which of the following are core components of the ITIL Service Value System (SVS)?",
  ["The ITIL Service Value Chain","ITIL guiding principles","Incident management","Continual improvement"],"ABD",
  "The SVS has 5 components; one option here is a practice, not a component.",
  "**Correct: A, B and D.** The SVS's five components are governance, the service value chain, practices, the guiding principles and continual improvement. Incident management is a practice used *within* the SVS, not a component of it.")
E(2,"Service Value System","Which of the following are components of the ITIL Service Value System (SVS)?",
  ["Governance","Practices","Continual improvement","Service Value Chain"],"ABCD",
  "All four listed here are genuine SVS components.",
  "**Correct: A, B, C and D.** Along with the guiding principles (not listed here), these make up all five SVS components.")
E(3,"Service Value System","What is a key objective of the ITIL Service Value System (SVS)?",
  ["To promote value co-creation","To align IT services with business goals","To automate all services","To enforce regulatory compliance"],"AB",
  "The SVS exists to turn demand into value, in step with the business.",
  "**Correct: A and B.** The SVS shows how all the organization's components work together to enable value co-creation, aligned with business goals. C and D are narrower, service-specific concerns, not the SVS's purpose.")
E(4,"Service Value System","In the ITIL 4 framework, which elements contribute to continual improvement within the SVS?",
  ["Service Value Chain","Feedback loops","Governance","Service Desk Practices"],"ABC",
  "Think about what feeds information back into decisions at every level.",
  "**Correct: A, B and C.** The value chain generates outputs to improve, feedback loops surface what needs improving, and governance directs priorities. Service desk work is an input/example, not a mechanism of continual improvement itself.")
E(5,"Service Value System","Which of the following describe the purpose of the ITIL Service Value System (SVS)?",
  ["It ensures flexibility in service creation and delivery","It provides a shared system for value creation","It serves only to reduce costs","It integrates governance across IT practices"],"ABD",
  "One option is too narrow to be the SVS's purpose.",
  "**Correct: A, B and D.** The SVS is deliberately broader than cost-cutting (C) — it's about flexible, governed, shared value creation across the whole organization.")
E(6,"Service Value System","What components of the SVS enable organizations to align their IT practices with strategic goals?",
  ["The guiding principles","The continual improvement model","Demand forecasting","Governance"],"ABD",
  "Demand forecasting is an input to planning, not an SVS component.",
  "**Correct: A, B and D.** The guiding principles, continual improvement and governance are SVS components that keep practices aligned with strategy. Demand forecasting isn't one of the SVS's named components.")

# --- Guiding Principles ---
E(7,"Guiding Principles","Which guiding principles are emphasized in ITIL 4 for effective service management?",
  ["Focus on value","Collaborate and promote visibility","Outsource all processes","Optimize and automate"],"ABD",
  "One option describes an operating choice, not a principle.",
  "**Correct: A, B and D.** These are 3 of ITIL 4's 7 guiding principles. \"Outsource all processes\" isn't a principle at all, and contradicts \"keep it simple and practical.\"")
E(8,"Guiding Principles","What does the guiding principle \"Start where you are\" suggest?",
  ["Analyze the current state before making changes","Implement new tools without analyzing the current state","Avoid change as much as possible","Identify what can be reused"],"AD",
  "The principle is about not throwing away what already works.",
  "**Correct: A and D.** \"Start where you are\" means assessing the current state and reusing what's usable rather than rebuilding from scratch — it doesn't mean resisting change (C) or skipping analysis (B).")
E(9,"Guiding Principles","Which principle encourages organizations to avoid adding unnecessary steps in service delivery?",
  ["Focus on value","Optimize and automate","Keep it simple and practical","Progress iteratively with feedback"],"C",
  "Which principle is literally about simplicity?",
  "**Correct: C only.** \"Keep it simple and practical\" is specifically about cutting unnecessary steps and complexity.")
E(10,"Guiding Principles","\"Progress iteratively with feedback\" helps achieve which of the following?",
  ["Faster time to market","Reduced resource wastage","Continual learning","Complete automation"],"ABC",
  "Small iterations with feedback loops give you speed, efficiency and learning — not automation by themselves.",
  "**Correct: A, B and C.** Iterating with feedback shortens cycles, avoids wasted effort on the wrong thing, and builds learning into the process. It says nothing about automation.")
E(11,"Guiding Principles","Which guiding principles are essential for teamwork and transparency?",
  ["Think and work holistically","Collaborate and promote visibility","Focus on individual outcomes","Keep it simple and practical"],"AB",
  "One option is the opposite of teamwork.",
  "**Correct: A and B.** Both explicitly involve cross-team perspective and visible, shared work. \"Focus on individual outcomes\" runs counter to collaboration.")
E(12,"Guiding Principles","Which principles of the ITIL Service Value System are focused on value?",
  ["Focus on value","Start where you are","Progress iteratively with feedback","Deliver on time"],"A",
  "\"Deliver on time\" isn't one of ITIL's 7 guiding principles at all.",
  "**Correct: A only.** \"Focus on value\" is the principle directly about value. The others matter, but aren't specifically about defining or measuring value — and \"deliver on time\" isn't an ITIL 4 guiding principle.",
  "r")

# --- Service Value Chain ---
E(13,"Service Value Chain","Which activities are part of the ITIL Service Value Chain?",
  ["Engage","Design and transition","Service request management","Deliver and support"],"ABD",
  "The Service Value Chain has 6 named activities; one option here is a practice, not one of them.",
  "**Correct: A, B and D.** The six SVC activities are Plan, Improve, Engage, Design and transition, Obtain/build, and Deliver and support. Service request management is a *practice*, not an SVC activity.")
E(14,"Service Value Chain","In the ITIL Service Value Chain, what is the purpose of the \"Improve\" activity?",
  ["To evaluate performance metrics","To support change management","To ensure continual improvement","To validate service offerings"],"AC",
  "\"Improve\" is the activity that keeps every other activity and practice getting better.",
  "**Correct: A and C.** Improve ensures continual improvement of products, services and practices across the value chain, informed by performance evaluation.")
E(15,"Service Value Chain","What are the key activities of the ITIL Service Value Chain?",
  ["Plan","Develop","Engage","Obtain/build"],"ACD",
  "\"Develop\" isn't one of the six named SVC activities — \"Obtain/build\" is.",
  "**Correct: A, C and D.** Plan, Engage and Obtain/build are three of the six SVC activities. \"Develop\" is not one of the named six (Plan, Improve, Engage, Design and transition, Obtain/build, Deliver and support).")
E(16,"Service Value Chain","Which of the following activities are associated with \"Engage\" in the Service Value Chain?",
  ["Gathering requirements from customers","Managing stakeholders","Providing user feedback loops","Validating service designs"],"ABC",
  "Validating a design is part of \"Design and transition\", not \"Engage\".",
  "**Correct: A, B and C.** Engage covers gathering requirements, managing stakeholder relationships and maintaining feedback channels. Validation belongs to Design and transition.")
E(17,"Service Value Chain","What Service Value Chain activity involves confirming that products meet stakeholder requirements?",
  ["Obtain/build","Engage","Design and transition","Deliver and support"],"C",
  "Which activity is about building and validating the actual solution before it goes live?",
  "**Correct: C only.** Design and transition ensures products and services meet stakeholder expectations for quality, cost and time to market.")

# --- General Management Practices ---
E(18,"General Management Practices","Which practices are considered general management practices in ITIL 4?",
  ["Knowledge management","Continual improvement","Problem management","Relationship management"],"ABD",
  "Problem management is a service management practice, not a general one.",
  "**Correct: A, B and D.** Knowledge, continual improvement and relationship management are general management practices (adapted from general business management). Problem management sits in the service management practices group.")
E(19,"General Management Practices","In ITIL 4, which practices aim to manage risk and ensure regulatory compliance?",
  ["Risk management","Information security management","Monitoring and event management","Supplier management"],"AB",
  "Two of these are directly about risk/compliance; the other two are operational or relationship practices.",
  "**Correct: A and B.** Risk management and information security management directly target risk and compliance. Monitoring/event management and supplier management serve other purposes.")
E(20,"General Management Practices","Which management practices support business change and project goals?",
  ["Organizational change management","Project management","Architecture management","Service request management"],"ABC",
  "Service request management is day-to-day operational, not about driving change or architecture.",
  "**Correct: A, B and C.** These three general management practices directly support planned change, project delivery and architectural direction.")
E(21,"General Management Practices","What are the goals of the ITIL continual improvement practice?",
  ["To reduce service downtime","To align IT services with business needs","To ensure cost-effectiveness","To support adaptability"],"BCD",
  "Downtime reduction is more the job of availability/incident management than continual improvement specifically.",
  "**Correct: B, C and D.** Continual improvement keeps services aligned with changing business needs, cost-effective and adaptable. Downtime reduction is a byproduct at best, not its defining goal.")
E(22,"General Management Practices","Which practice is essential for maintaining knowledge resources within the organization?",
  ["Relationship management","Knowledge management","Service desk","Continual improvement"],"B",
  "This one is in the name.",
  "**Correct: B only.** Knowledge management exists specifically to ensure accurate, useful information is available where and when it's needed.")
E(23,"General Management Practices","Which practices fall under ITIL General Management Practices?",
  ["Business Analysis","Risk Management","Incident Management","Continual Improvement"],"ABD",
  "One of these four is a service management practice, not general.",
  "**Correct: A, B and D.** Business analysis, risk management and continual improvement are general management practices. Incident management is a service management practice.")

# --- Four Dimensions ---
E(24,"Four Dimensions","Which are the four dimensions of service management in ITIL 4?",
  ["Organizations and people","Value streams and processes","Products and services","External factors and trends"],"AB",
  "Two of these four options aren't actually among the four dimensions at all.",
  "**Correct: A and B only.** The real four dimensions are organizations and people; information and technology; partners and suppliers; and value streams and processes. \"Products and services\" and \"external factors and trends\" (PESTLE) are related ITIL 4 concepts, but neither is one of the four dimensions — a common exam trap.",
  "r")
E(25,"Four Dimensions","What are the four dimensions of service management in ITIL V4?",
  ["Organizations and People","Value Streams and Processes","Information and Technology","Partners and Suppliers"],"ABCD",
  "This time all four options are correct.",
  "**Correct: A, B, C and D.** These are, together, the complete and correct set of the four dimensions of service management.")
E(26,"Four Dimensions","In the four dimensions of service management, what does \"Organizations and people\" refer to?",
  ["Aligning roles and responsibilities","Implementing IT infrastructure","Managing supplier contracts","Creating value chains"],"A",
  "This dimension is about how the organization's structure, culture and people are set up to support services.",
  "**Correct: A only.** It covers structure, roles, responsibilities, culture and the right number of people with the right skills. The others belong to different dimensions.")
E(27,"Four Dimensions","Which dimension of service management includes technologies and tools that support service delivery?",
  ["Partners and suppliers","Information and technology","Value streams and processes","Organizational change"],"B",
  None,
  "**Correct: B only.** Information and technology covers the technologies, tools, applications and information that support service management.")
E(28,"Four Dimensions","What aspect does the \"Partners and Suppliers\" dimension cover?",
  ["Vendor relationship management","Outsourcing critical IT functions","External support in delivering services","Monitoring regulatory changes"],"ABC",
  "Regulatory-change monitoring is more of an external factor than this dimension's core concern.",
  "**Correct: A, B and C.** This dimension is about the organization's relationships with other organizations involved in the design, delivery, support or improvement of services.")
E(29,"Four Dimensions","\"Value streams and processes\" in ITIL 4 focuses on which of the following?",
  ["Service workflows and efficiencies","Supplier performance","Workflow automation","Product development"],"AC",
  "This dimension is about how the parts of the organization work together, end to end, in defined activities.",
  "**Correct: A and C.** It's about how the organization's parts work together via defined activities, workflows and process efficiency — not directly about supplier performance or building products.")

# --- Service Management Practices (identification) ---
E(30,"Service Management Practices","Which of these practices are part of ITIL service management practices?",
  ["Incident management","Change enablement","IT asset management","Service request management"],"ABCD",
  "All four listed here are genuine ITIL 4 service management practices.",
  "**Correct: A, B, C and D.** Note the ITIL 4 name \"change enablement\" (not \"change management\" or \"change control\", which are older/looser terms).")
E(31,"Service Management Practices","Which of these are considered Technical Management Practices in ITIL 4?",
  ["Deployment management","Capacity and performance management","Availability management","Service request management"],"A",
  "ITIL 4 has only 3 technical management practices — most familiar-sounding practices are actually *service* management practices.",
  "**Correct: A only.** ITIL 4's three technical management practices are deployment management, infrastructure and platform management, and software development and management. Capacity/performance and availability management are service management practices, and service request management is too — none of the other three belong here, despite sounding \"technical\".",
  "r")
E(32,"Service Management Practices","Which practices are related to service support (incident, request and problem handling)?",
  ["Incident Management","Service Request Management","Problem Management","Change Control"],"ABCD",
  "\"Service support\" isn't an ITIL 4 category (it's ITIL v3 book title); as a plain list of relevant practices, though, all four fit.",
  "**Correct: A, B, C and D.** *V4 note:* \"Change Control\" here really means the ITIL 4 practice \"change enablement\" — all four are genuine service management practices that a support function typically uses day to day.",
  "r")

# --- Incident Management ---
E(33,"Incident Management","What is the purpose of \"Incident Management\"?",
  ["Ensuring incidents are resolved quickly","Minimizing service disruptions","Analyzing root causes","Logging all incidents in the service catalog"],"AB",
  "Root cause analysis belongs to a different practice, and there's no such thing as logging incidents \"in the service catalog\".",
  "**Correct: A and B.** Incident management exists to restore normal service operation as fast as possible and minimize business impact. Root-cause analysis is problem management's job, and incidents are logged in an incident record, not the service catalogue.")
E(34,"Incident Management","Which of the following are roles in Incident Management?",
  ["Service Desk Agent","Incident Manager","Problem Manager","Change Manager"],"AB",
  "Two of these roles belong to other practices entirely.",
  "**Correct: A and B.** The service desk agent and incident manager are core incident management roles. Problem Manager and Change Manager are roles in their own separate practices.")
E(35,"Incident Management","How will support proceed if incidents appear right after a release team applied a change in production?",
  ["Notify the monitoring team to solve the incidents","Let the incidents sit in queues for the next support level","Notify the release team to back out the change","Escalate the incidents to the next level so they are resolved"],"CD",
  "The goal is restoring service fast — that usually means undoing the suspect change and getting the right people on it.",
  "**Correct: C and D.** Backing out a suspect change and escalating to get it resolved restores service quickly. Passing it to monitoring or leaving it in a queue doesn't fix anything.")
E(36,"Incident Management","What is the primary objective of the Incident Management practice?",
  ["To minimize disruption to services","To identify the root cause of incidents","To communicate with customers","To analyze service performance"],"A",
  "The other three options describe other practices' primary jobs.",
  "**Correct: A only.** Minimizing disruption and restoring service is incident management's defining purpose. Root-cause analysis is problem management.")
E(37,"Incident Management","Which of the following correctly describes how incoming calls to the service desk are categorized and routed?",
  ["Requests for increased security access are forwarded to application development","Requests for increased security access are forwarded to the compliance manager","Requests to test network connectivity between two offices go to service validation and testing","Reports of an unplanned interruption to a service are forwarded to incident management"],"D",
  "An unplanned interruption or degradation has a specific ITIL name.",
  "**Correct: D only.** An unplanned interruption or reduction in quality is an incident by definition. Access requests are service requests, not application-development or compliance work.")

# --- Problem Management ---
E(38,"Problem Management","In ITIL V4, what is a \"known error\"?",
  ["An incident that has been resolved","A problem with an identified root cause","A change that has failed","An unresolved incident"],"B",
  None,
  "**Correct: B only.** A known error is a problem that has been analyzed and whose root cause is documented — it may or may not yet have a permanent fix.")
E(39,"Problem Management","In ITIL, what does a \"problem\" refer to?",
  ["An incident that has been logged","The underlying cause of one or more incidents","A service outage","A customer complaint"],"B",
  None,
  "**Correct: B only.** A problem is the cause, or potential cause, of one or more incidents — distinct from the incidents themselves.")
E(40,"Problem Management","What is the role of a Problem Manager?",
  ["To restore service operation","To identify root causes of problems","To manage incidents","To monitor service performance"],"B",
  "Restoring service and managing incidents are the incident manager's job.",
  "**Correct: B only.** Finding and documenting root causes is what distinguishes problem management from incident management, which focuses purely on restoring service.")
E(41,"Problem Management","What are the key activities of Problem Management?",
  ["Identifying root causes of incidents","Creating known error records","Restoring service operation","Conducting post-incident reviews"],"AB",
  "Restoring service is incident management's job, not problem management's.",
  "**Correct: A and B.** ITIL 4 splits problem management into problem identification, problem control, and error control (which produces known error records). Restoring service belongs to incident management.")
E(42,"Problem Management","What are the main components of a problem analysis process?",
  ["Identifying root causes","Implementing solutions","Documenting known errors","Engaging with stakeholders"],"ABC",
  "Stakeholder engagement is a general activity across many practices, not specific to problem analysis.",
  "**Correct: A, B and C.** Root-cause identification, fixing it, and recording it as a known error are the core problem-analysis steps.")

# --- Change Enablement ---
E(43,"Change Enablement","What is the goal of Change Control in ITIL V4?",
  ["To ensure that changes are made with minimal disruption","To implement changes without approval","To track all changes made to services","To assess and authorize changes to services"],"AD",
  None,
  "**Correct: A and D.** *V4 note:* ITIL 4 calls this practice \"change enablement\": maximize successful change by properly assessing risk, authorizing changes, and managing the schedule — never implementing without approval (B).",
  "r")
E(44,"Change Enablement","Which of the following are outcomes of effective Change Control?",
  ["Improved service availability","Reduced risk of change failures","Increased documentation burden","Enhanced stakeholder engagement"],"AB",
  "Two of these are actual benefits; the other two describe process overhead, not outcomes worth aiming for.",
  "**Correct: A and B.** Well-run change enablement improves availability and cuts the risk of failed changes. Extra paperwork isn't a goal, and D is too vague to count as a defining outcome.")
E(45,"Change Enablement","What is the primary purpose of the Change Control practice?",
  ["To keep changes as informal as possible","To manage the lifecycle of all changes","To authorize changes after implementation","To track changes for auditing purposes"],"BD",
  "Changes must be authorized *before*, not after, they go live.",
  "**Correct: B and D.** Change enablement manages the change lifecycle and keeps an auditable record. Authorizing changes only after the fact defeats the purpose of risk control.")
E(46,"Change Enablement","Which of the following are essential for effective Change Control?",
  ["Change evaluation","Change scheduling","Change approval","Change denial"],"ABC",
  "Approving a change is essential; \"denial\" on its own isn't a distinct essential element — it's just one possible outcome of approval.",
  "**Correct: A, B and C.** Evaluating risk, scheduling and formally approving (or rejecting) changes are the essential elements. \"Denial\" is one possible result of the approval step, not a separate essential activity.",
  "r")
E(47,"Change Enablement","What is a \"Change Advisory Board\" (CAB)?",
  ["A group responsible for approving changes","A board that focuses on financial management","A committee that evaluates service performance","A team responsible for incident resolution"],"A",
  None,
  "**Correct: A only.** *V4 note:* ITIL 4 doesn't mandate a CAB by name — it uses the broader term \"change authority\", which can be a person, a role, or a group like a CAB, depending on the change's risk and impact.",
  "r")
E(48,"Change Enablement","Which of the following are roles involved in Change Control?",
  ["Change Manager","Change Advisory Board (CAB)","Incident Manager","Service Owner"],"AB",
  None,
  "**Correct: A and B.** The change manager and change authority (which a CAB represents) are the roles specific to change enablement; Incident Manager and Service Owner belong to other practices.")
E(49,"Change Enablement","Which of the following statements about the change schedule are correct?",
  ["It lists planned changes and their proposed implementation dates","It helps avoid clashes between changes and tells stakeholders what is planned"],"AB",
  "The schedule is a simple planning calendar.",
  "**Correct: A and B.** The change schedule is used to help plan changes, avoid conflicts, and communicate what's coming to stakeholders.")

# --- Service Request Management ---
E(50,"Service Request Management","What is the purpose of the Service Request Management practice?",
  ["To manage the lifecycle of all service requests","To restore normal service operation as quickly as possible","To provide a channel for users to request services","To handle incidents and problems"],"AC",
  "Two of these options describe incident and problem management instead.",
  "**Correct: A and C.** Service request management handles pre-defined, user-initiated requests end to end. Restoring service after disruption is incident management; handling incidents/problems is not this practice's job.")
E(51,"Service Request Management","What is the focus of \"Service Request Management\"?",
  ["Managing user requests efficiently","Prioritizing critical incidents","Automating repetitive tasks","Providing assistance based on user needs"],"AD",
  "Prioritizing incidents belongs to incident management, and automation is a tool, not the focus itself.",
  "**Correct: A and D.** This practice is about handling user-initiated, pre-defined requests efficiently and helpfully — not about incident triage or automation for its own sake.")

# --- Service Level Management ---
E(52,"Service Level Management","What are the objectives of Service Level Management?",
  ["To negotiate SLAs with customers","To monitor service performance against SLAs","To enforce compliance with regulations","To improve service quality"],"AB",
  "Regulatory enforcement and broad quality improvement belong to other practices, not SLM specifically.",
  "**Correct: A and B.** Service level management is about setting clear, business-based targets with customers and tracking performance against them — not regulatory enforcement or general quality improvement.")
E(53,"Service Level Management","What are the key components of a Service Level Agreement (SLA)?",
  ["Service description","Performance metrics","Pricing information","Roles and responsibilities"],"ABD",
  "SLAs define service expectations, not prices.",
  "**Correct: A, B and D.** An SLA describes the service, sets measurable targets, and clarifies who's responsible for what. Pricing belongs to a separate commercial agreement or contract.")
E(54,"Service Level Management","What is a service level agreement (SLA)?",
  ["A formal agreement between a service provider and a customer","A document detailing the service provider's capabilities","A tool for measuring service performance","A guideline for internal processes"],"AC",
  None,
  "**Correct: A and C.** An SLA is a formal, documented agreement that also sets the measurable targets used to track performance.")
E(55,"Service Level Management","Which of the following are true about Service Level Agreements (SLAs)?",
  ["They define the level of service expected by customers","They are informal agreements that can be changed at any time","They include performance metrics and penalties for non-compliance","They are only applicable to external services"],"AC",
  "SLAs are formal (not casually changeable) and apply to internal services too.",
  "**Correct: A and C.** SLAs formally define expected service levels and often include metrics with consequences for missing them. They aren't informal, and internal SLAs are common too.")

# --- Knowledge Management ---
E(56,"Knowledge Management","What is the purpose of Knowledge Management?",
  ["To store documents and files","To ensure that the right information is available to the right people","To track service performance","To automate IT processes"],"B",
  "Storage is a mechanism, not the purpose itself.",
  "**Correct: B only.** Knowledge management's purpose is making sure accurate, reliable information is available to the people who need it, when they need it — not just archiving files.")
E(57,"Knowledge Management","What is the purpose of a \"Known Error Database\"?",
  ["To log all service requests","To track recurring incidents","To provide a repository for known errors and their workarounds","To assess service performance"],"C",
  None,
  "**Correct: C only.** The known error database (part of the wider knowledge base in ITIL 4) holds documented problems, their causes, and any known workarounds.")

# --- IT Asset Management ---
E(58,"IT Asset Management","What does \"IT asset management\" involve?",
  ["Tracking hardware and software assets","Managing user accounts","Developing new IT policies","Evaluating service performance"],"A",
  None,
  "**Correct: A only.** IT asset management plans and manages the full lifecycle of IT assets — the other options belong to access management, strategy and reporting respectively.")
E(59,"IT Asset Management","Which practice involves tracking and recording IT assets?",
  ["Change enablement","Problem management","IT asset management","Continual improvement"],"C",
  None,
  "**Correct: C only.** This one's in the name.")

# --- Release & Deployment ---
E(60,"Release & Deployment","Which of the following are deployment approaches described in ITIL 4?",
  ["Phased deployment","Big bang deployment","Temporary deployment","Pull deployment"],"ABD",
  "ITIL 4 lists four deployment approaches; \"temporary\" isn't one of them.",
  "**Correct: A, B and D.** ITIL 4's four deployment approaches are phased, big bang, continuous delivery, and pull deployment — \"temporary deployment\" isn't one.")
E(61,"Release & Deployment","A company will roll out a POS upgrade to all retail stores. Which actions minimize the risk to store operations?",
  ["Divide stores into groups (e.g. by region) and deploy in phases","Deploy to every store at once during trading hours","Start with a small pilot group of stores, then widen the roll-out","Prepare a back-out plan and train store staff for the upgrade"],"ACD",
  "Risk falls when you go small first and have a way back — not when you deploy everywhere at once.",
  "**Correct: A, C and D.** Phased or pilot rollouts limit exposure, and a back-out plan plus trained staff limit impact if something goes wrong. Deploying to every store during trading hours maximizes risk, not minimizes it.")

# --- Service Continuity ---
E(62,"Service Continuity","What is the focus of the ITIL practice of Service Continuity Management?",
  ["Ensuring services remain available during disruptions","Managing day-to-day operations","Improving service efficiency","Conducting market analysis"],"A",
  None,
  "**Correct: A only.** Service continuity management ensures the availability and performance of services is maintained at a sufficient level in the event of a disaster.")

# --- Availability ---
E(63,"Availability Management","In ITIL, what does \"availability\" refer to?",
  ["The ability of a service to perform its intended function","The extent to which a service is operational","The number of incidents logged","The total cost of service delivery"],"AB",
  "Availability is about uptime and fitness for purpose, not cost or incident counts.",
  "**Correct: A and B.** Availability is the ability of a service or component to perform its agreed function when required.")
E(64,"Availability Management","What is the primary focus of the ITIL practice of Capacity Management?",
  ["Ensuring services meet performance requirements","Managing service delivery costs","Handling incidents and problems","Analyzing service quality"],"A",
  None,
  "**Correct: A only.** Capacity and performance management ensures services achieve agreed and expected performance, satisfying current and future demand cost-effectively.")

# --- Service Desk ---
E(65,"Service Desk","What is the purpose of the Service Desk?",
  ["To manage incidents only","To act as a single point of contact for users","To develop new IT policies","To assess service performance"],"B",
  "The service desk's role is broader than just incidents.",
  "**Correct: B only.** The service desk is the single point of contact between the service provider and its users for all requests, incidents and communication — not incidents alone.")

# --- Governance, Risk & Concepts ---
E(66,"ITIL Concepts","What does ITIL recommend for managing service relationships?",
  ["Treat all customers equally","Establish clear communication channels","Focus solely on service delivery","Use standardized agreements"],"B",
  "Clear, ongoing communication is the throughline of good relationship management, more than rigid standardization.",
  "**Correct: B only.** ITIL's relationship management practice centers on establishing and nurturing clear, ongoing communication links between the organization and its stakeholders.")
E(67,"ITIL Concepts","Which components are part of the ITIL framework?",
  ["Service Value System","ITIL Practices","ITIL Processes","ITIL Functions"],"AB",
  "\"Processes\" and \"functions\" as organizing concepts belong to the earlier ITIL v3 structure.",
  "**Correct: A and B.** *V4 note:* ITIL 4 is built around the Service Value System and 34 practices — it replaced ITIL v3's separate \"processes\" and \"functions\" structure, so those two aren't ITIL 4 framework components.",
  "r")
E(68,"ITIL Concepts","Which of the following best describes the relationship between ITIL and Agile?",
  ["They are completely separate methodologies","ITIL provides a framework that can complement Agile practices","Agile replaces the need for ITIL","They conflict in their approach to service delivery"],"B",
  None,
  "**Correct: B only.** ITIL 4 was explicitly designed to work alongside Agile, Lean and DevOps rather than compete with them.")
E(69,"ITIL Concepts","Which of the following statements are true about ITIL and DevOps?",
  ["They are mutually exclusive methodologies","ITIL can complement DevOps practices","Both emphasize collaboration and continuous improvement","They focus on different aspects of service delivery"],"BC",
  "Same idea as the Agile question — ITIL 4 is meant to fit alongside modern ways of working, not against them.",
  "**Correct: B and C.** ITIL 4 explicitly supports DevOps ways of working; both value collaboration, feedback and continual improvement.")
E(70,"ITIL Concepts","Which of the following statements are true about ITIL practices?",
  ["They can be customized to fit organizational needs","They are mandatory for all organizations","They provide guidance but allow flexibility","They require strict adherence"],"AC",
  "ITIL is explicitly a flexible framework, not a rigid, mandatory standard.",
  "**Correct: A and C.** ITIL 4 practices are meant to be adopted and adapted, not applied rigidly or treated as compulsory.")
E(71,"ITIL Concepts","What is a critical success factor for ITIL implementation?",
  ["Strong leadership support","Following the framework rigidly","Limited stakeholder involvement","High initial costs"],"A",
  None,
  "**Correct: A only.** Leadership buy-in drives successful adoption; rigid adherence and limited involvement work against it.")
E(72,"ITIL Concepts","Which of the following statements about ITIL implementation are true?",
  ["It requires full organizational commitment","It can be implemented gradually","It should be aligned with business objectives"],"ABC",
  None,
  "**Correct: A, B and C.** Successful adoption needs genuine commitment, can (and usually should) be phased in gradually, and must stay tied to business goals.")
E(73,"ITIL Concepts","Which of the following are key benefits of adopting a service-oriented approach?",
  ["Improved customer satisfaction","Increased profitability","Greater agility in responding to change","Enhanced internal collaboration"],"ACD",
  "Profitability can follow, but it's an indirect result rather than a defining benefit of the approach itself.",
  "**Correct: A, C and D.** These are the direct, commonly cited benefits; profitability is a possible downstream effect rather than a defining benefit of service-orientation itself.")
E(74,"ITIL Concepts","Which of the following are effective methods for stakeholder engagement?",
  ["Regular communication","Involving stakeholders in decision-making","Limiting stakeholder input","Providing updates on service performance"],"ABD",
  "Limiting input is the opposite of engagement.",
  "**Correct: A, B and D.** Good stakeholder engagement means communicating often, involving people in decisions, and keeping them updated — not shutting out their input.")
E(75,"ITIL Concepts","Which of the following statements are true regarding Risk Management?",
  ["It is solely focused on financial risks","It helps identify and mitigate potential risks","It involves collaboration with stakeholders","It is not relevant to ITIL practices"],"BC",
  "Risk management covers more than money, and it's very much part of ITIL.",
  "**Correct: B and C.** Risk management identifies and mitigates risk of all kinds through collaborative work with stakeholders — it's a core ITIL 4 general management practice, not irrelevant to it, and not limited to financial risk.")
E(76,"ITIL Concepts","Which of the following are true regarding service integration?",
  ["It ensures consistency across services","It focuses solely on technical aspects","It fosters collaboration among service providers","It eliminates the need for governance"],"AC",
  "Integration is about more than tech, and it doesn't remove the need for governance.",
  "**Correct: A and C.** Integration keeps multiple providers and services working consistently and collaboratively together; it doesn't replace governance or reduce to a purely technical exercise.")

# --- Definitions ---
E(77,"ITIL Concepts","In ITIL V4, what is the definition of a service?",
  ["A means of delivering value to customers","A product that is sold to customers","An internal process within an organization","A temporary project to achieve a goal"],"A",
  None,
  "**Correct: A only.** ITIL 4 defines a service as a means of enabling value co-creation by facilitating outcomes customers want, without them having to own specific costs and risks.")
E(78,"ITIL Concepts","Which of the following are characteristics of services?",
  ["Intangible","Consumed at the point of delivery","Involves co-creation of value","Can be owned"],"ABC",
  "A service, unlike a good, isn't something the customer owns outright.",
  "**Correct: A, B and C.** Services are intangible, consumed as they're delivered, and created jointly with the customer — ownership doesn't apply the way it does to goods.")
E(79,"ITIL Concepts","In ITIL, what does the term \"value\" refer to?",
  ["The financial worth of services","The perceived benefit of services by stakeholders","The cost of delivering services","The efficiency of processes"],"B",
  None,
  "**Correct: B only.** ITIL defines value as the perceived benefits, usefulness and importance of something — it's subjective to the stakeholder, not a fixed cost or price figure.")
E(80,"ITIL Concepts","In ITIL, what is the significance of the term \"service offering\"?",
  ["A detailed plan for service delivery","A collection of services designed to meet a specific need","A financial proposal for IT services","A technical specification document"],"B",
  None,
  "**Correct: B only.** A service offering is a description of one or more services designed to address a specific customer need, including the goods, access, and service actions bundled with it.")
E(81,"ITIL Concepts","What is a \"service value proposition\"?",
  ["A statement of the benefits provided by a service","A financial forecast for service delivery","A technical specification for service components","A document outlining service processes"],"A",
  None,
  "**Correct: A only.** It's a clear statement of the benefits a customer can expect, not a financial or technical document.")
E(82,"ITIL Concepts","In ITIL, what does the term \"value stream\" refer to?",
  ["A series of activities that deliver value to a customer","A financial analysis of service costs","A collection of IT processes","A project management methodology"],"A",
  None,
  "**Correct: A only.** A value stream is a specific combination of an organization's activities involved in delivering a product or service to a consumer.")
E(83,"ITIL Concepts","In ITIL, what does the term \"service consumer\" refer to?",
  ["A customer who uses IT services","An internal IT team","A vendor providing IT solutions","A stakeholder involved in service delivery"],"A",
  None,
  "**Correct: A only.** A service consumer is a role that receives a service — as a customer, user, or sponsor.")
E(84,"ITIL Concepts","What is the role of a Service Owner?",
  ["To manage all service-related activities","To oversee the entire IT organization","To focus solely on incident resolution","To develop new IT policies"],"A",
  None,
  "**Correct: A only.** A service owner is accountable for a specific service, end to end, not the whole IT organization or just its incidents.")
E(85,"ITIL Concepts","What does the term \"incident\" refer to in ITIL?",
  ["A service request","An unplanned interruption to a service","A scheduled maintenance task","A documented problem"],"B",
  None,
  "**Correct: B only.** An incident is an unplanned interruption to, or reduction in the quality of, a service.")
E(86,"ITIL Concepts","Which of the following statements are true about ITIL's approach to change management?",
  ["It promotes a culture of flexibility and responsiveness","It requires detailed documentation for all changes","It emphasizes collaboration among teams","It discourages stakeholder input"],"AC",
  "ITIL 4's change enablement scales its rigor to the change's risk — it isn't uniformly heavy on paperwork, and it wants stakeholder input, not less of it.",
  "**Correct: A and C.** ITIL 4 favors proportionate, collaborative change enablement over rigid, one-size-fits-all documentation, and it wants more stakeholder input, not less.")
E(87,"ITIL Concepts","Which of the following are characteristics of effective service management?",
  ["Proactive approach to risk","Reactive response to incidents","Clear communication with stakeholders","Continuous evaluation of service performance"],"ACD",
  "Being purely reactive is the opposite of effective, proactive management.",
  "**Correct: A, C and D.** Effective service management is proactive about risk, communicates clearly, and continually evaluates performance — being reactive rather than proactive describes the opposite.",
  "r")
E(88,"ITIL Concepts","Which of the following are activities in the ITIL Design and transition value chain activity (formerly ITIL v3's Service Transition)?",
  ["Planning and managing service transitions","Training users on new services"],"AB",
  None,
  "**Correct: A and B.** *V4 note:* \"Service Transition\" was a separate ITIL v3 lifecycle stage; in ITIL 4 this work sits inside the \"Design and transition\" value chain activity.",
  "r")

open("../data_set2.js","w").write(
  "// IKM Set 2: combined from IKM_ChatGPT_Generated and IKM_PRACTICE_QUESTIONS, deduplicated and validated against ITIL 4.\n"
  "window.QUESTION_BANK = (window.QUESTION_BANK || []).concat(\n"
  + json.dumps(Q, indent=1, ensure_ascii=False) + "\n);\n"
)
print(len(Q))
