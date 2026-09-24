// IKM Set 1: combined, deduplicated and validated against ITIL 4.
window.QUESTION_BANK = (window.QUESTION_BANK || []).concat(
[
 {
  "id": "s1-Q1",
  "set": "set1",
  "question": "Which of the following are typically recorded in a change record (request for change, RFC) for change enablement?",
  "options": {
   "A": "Review date",
   "B": "Reason for change",
   "C": "A copy of the whole change process",
   "D": "Details of how the change will be implemented",
   "E": "The priority of the change"
  },
  "answers": [
   "A",
   "B",
   "D",
   "E"
  ],
  "category": "Change Enablement",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Think about what an approver needs for THIS change: why, how, when to review it and how urgent it is.",
  "explanation": "**Correct: A, B, D and E.** A change record captures the specifics of one change. A copy of the generic change process is not change-specific, and the source also marked C as wrong. *V4 note:* ITIL 4 (change enablement) does not prescribe fixed RFC fields; these are the commonly recorded ones, same as in ITIL v3."
 },
 {
  "id": "s1-Q2",
  "set": "set1",
  "question": "Which of the following measures show that knowledge is available and helping to support decisions and resolution?",
  "options": {
   "A": "Increased number of changes rejected by the change authority",
   "B": "Increased percentage of incidents solved using known errors and knowledge articles",
   "C": "Decreased use of knowledge articles, regardless of quality",
   "D": "Increased scores in regular satisfaction surveys on knowledge management",
   "E": "Increased number of accesses to the knowledge base by managers and staff"
  },
  "answers": [
   "B",
   "D",
   "E"
  ],
  "category": "Knowledge Management",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Look for measures that show knowledge being USED and valued.",
  "explanation": "**Correct: B, D and E.** Rising reuse of known errors/articles, better satisfaction and more access all show knowledge is available and useful. A is a change measure and C is the opposite of success. *V4 note:* v3 said SKMS; ITIL 4 uses the knowledge management practice and its knowledge base. Options A and C were replaced because they relied on v3 CMDB/review-date wording."
 },
 {
  "id": "s1-Q3",
  "set": "set1",
  "question": "Which of the following are NOT typical measures for capacity and performance management?",
  "options": {
   "A": "Accuracy of capacity forecasts versus actual demand",
   "B": "Percentage of leave requests submitted on time",
   "C": "Percentage of services with performance monitoring in place",
   "D": "Number of incidents caused by capacity shortages",
   "E": "Percentage of changes approved by the change authority"
  },
  "answers": [
   "B",
   "E"
  ],
  "category": "Capacity & Performance",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Capacity and performance management is about making sure resources meet current and future demand.",
  "explanation": "**Correct: B and E.** A, C and D directly measure forecasting, monitoring and capacity-related failures. Leave requests (B) and change approval rates (E) belong elsewhere. *V4 note:* rewritten for ITIL 4 'capacity and performance management'; the v3 list (e.g. 'suitable underpinning contracts') mixed in supplier management and could not be verified."
 },
 {
  "id": "s1-Q4",
  "set": "set1",
  "question": "Which of the following show the effectiveness of service level management?",
  "options": {
   "A": "Percentage of service targets being met",
   "B": "Percentage of changes implemented on time",
   "C": "Accurate, up-to-date growth forecasts",
   "D": "Number of expedited records evaluated in change authority meetings",
   "E": "Percentage of services covered by service level agreements"
  },
  "answers": [
   "A",
   "E"
  ],
  "category": "Service Level Management",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "SLM is about agreeing service levels and meeting them.",
  "explanation": "**Correct: A and E.** Targets met and SLA coverage measure SLM directly. B and D are change measures; C is a capacity/demand measure. Unchanged in ITIL 4 (service level management)."
 },
 {
  "id": "s1-Q5",
  "set": "set1",
  "question": "In ITIL 4, which of the following drives ongoing improvement across the whole service value system, in the same spirit as the Plan-Do-Check-Act cycle?",
  "options": {
   "A": "The continual improvement practice and model",
   "B": "Service desk",
   "C": "Deployment management",
   "D": "Change enablement",
   "E": "Supplier management"
  },
  "answers": [
   "A"
  ],
  "category": "Continual Improvement",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Look for the element whose whole job is improving everything else.",
  "explanation": "**Correct: A.** ITIL 4 provides the continual improvement model (with the 'Improve' value chain activity and the continual improvement practice). *V4 note:* the ITIL v3 answer was 'Continual Service Improvement', a lifecycle stage that no longer exists in ITIL 4."
 },
 {
  "id": "s1-Q6",
  "set": "set1",
  "question": "Which of the following correctly describes the purpose of service catalogue management?",
  "options": {
   "A": "Provide a single source of consistent information on all services and service offerings, available to the relevant audience",
   "B": "Work with configuration management to align all CIs to published services",
   "C": "Work with strategy and transition teams to implement all new services",
   "D": "Capture the maintenance and use of asset and configuration data"
  },
  "answers": [
   "A"
  ],
  "category": "Service Catalogue",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "Think 'one authoritative list' of what the provider offers.",
  "explanation": "**Correct: A.** This is the ITIL 4 purpose of service catalogue management. B and D describe configuration/asset management; C describes implementation work."
 },
 {
  "id": "s1-Q7",
  "set": "set1",
  "question": "A change manager needs the basic terms of a contract with a supplier. What is the best source?",
  "options": {
   "A": "The knowledge management database (KMDB)",
   "B": "The supplier and contract management information system (SCMIS) / supplier and contract register",
   "C": "Hold a meeting with the service level management team",
   "D": "Open a request with the service desk",
   "E": "Search the CMDB, since contracts are maintained there"
  },
  "answers": [
   "B"
  ],
  "category": "Supplier Management",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Which repository is built specifically to hold supplier and contract details?",
  "explanation": "**Correct: B.** ITIL 4's supplier management practice keeps contract terms in a supplier and contract management information system. *V4 note:* ITIL v3 called this the Supplier and Contract Database (SCD)."
 },
 {
  "id": "s1-Q9",
  "set": "set1",
  "question": "With which of the following must service configuration management be integrated to keep configuration information accurate and up to date?",
  "options": {
   "A": "Change enablement",
   "B": "Release management",
   "C": "Capacity and performance management",
   "D": "Service continuity management",
   "E": "Service financial management"
  },
  "answers": [
   "A",
   "B"
  ],
  "category": "Service Configuration",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Configuration records go stale when things are changed or released without updating them.",
  "explanation": "**Correct: A and B.** Changes and releases alter configuration items, so those practices must update the records. *V4 note:* v3 names (Change, Release Management) mapped to change enablement and release management."
 },
 {
  "id": "s1-Q11",
  "set": "set1",
  "question": "Which of the following is NOT an objective of service continuity management?",
  "options": {
   "A": "Conduct regular business impact analysis so plans stay current",
   "B": "Conduct regular risk assessments with the business to ensure continuity",
   "C": "Maintain IT continuity plans so recovery mechanisms meet business expectations",
   "D": "Ensure proper recovery mechanisms are in place to meet business expectations",
   "E": "Ensure release management builds release versions based on the impact of change records"
  },
  "answers": [
   "E"
  ],
  "category": "Service Continuity",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Four of these are about recovery and continuity; one is about how releases are built.",
  "explanation": "**Correct: E.** Release versioning belongs to release/change work. Options C and D are both valid continuity objectives, so only E is the odd one out. (One copy of the source also listed D, which is not correct.)"
 },
 {
  "id": "s1-Q12",
  "set": "set1",
  "question": "Which of the following are valid measures of success for release and deployment?",
  "options": {
   "A": "A formal process exists to decide which services to provide",
   "B": "Appropriate data transfer is ensured, with no loss or corruption",
   "C": "Minimizing business impact of incidents that cannot be prevented",
   "D": "Increasing the number of customer surveys completed",
   "E": "Reduced resources and cost to diagnose and fix incidents and problems caused by releases in live use"
  },
  "answers": [
   "B",
   "E"
  ],
  "category": "Release & Deployment",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Look for outcomes a good release or deployment directly produces.",
  "explanation": "**Correct: B and E.** Clean data transfer and fewer live-use fixes show deployments are landing well. A relates to portfolio decisions, C to continuity/incident work, D to feedback gathering. *V4 note:* mapped to release management and deployment management."
 },
 {
  "id": "s1-Q13",
  "set": "set1",
  "question": "Which of the following are valid success factors for service financial management?",
  "options": {
   "A": "Funding is available to support the provision of services",
   "B": "Relationship management provides information to financial management",
   "C": "The ability to establish and articulate business requirements for new or changed services",
   "D": "An enterprise-wide framework exists to identify, manage and communicate service information",
   "E": "Regular reports are produced on the costs and use of customer and service assets"
  },
  "answers": [
   "A",
   "E"
  ],
  "category": "Service Financial Mgmt",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Success here means money is available and its use is visible.",
  "explanation": "**Correct: A and E.** Funding and cost/usage reporting are core financial outcomes. C is a business analysis outcome and D is knowledge management. *Note:* the source key was A, C and E; C does not belong to financial management."
 },
 {
  "id": "s1-Q18",
  "set": "set1",
  "question": "Which of the following correctly describes how incoming calls to the service desk are categorized and routed?",
  "options": {
   "A": "Requests for increased security access are forwarded to application development",
   "B": "Requests for increased security access are forwarded to the compliance manager",
   "C": "Requests to test network connectivity between two offices go to service validation and testing",
   "D": "Reports of an unplanned interruption to a service are forwarded to incident management",
   "E": "Requests for a change proposal are forwarded to service management"
  },
  "answers": [
   "D"
  ],
  "category": "Incident Management",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "An unplanned interruption has a specific name in ITIL.",
  "explanation": "**Correct: D.** An unplanned interruption or degradation is an incident and is handled by incident management. Access requests are service requests; change proposals go to change enablement."
 },
 {
  "id": "s1-Q19",
  "set": "set1",
  "question": "Which of the following are valid critical success factors for service continuity management?",
  "options": {
   "A": "Awareness throughout the organization of business and IT continuity plans",
   "B": "IT services are delivered and can be recovered to meet supplier objectives",
   "C": "Increase in validated awareness of business impact, needs and requirements throughout IT",
   "D": "Risk assessment and management are conducted in isolation",
   "E": "Overall reduction in the risk and impact of possible failures of IT services"
  },
  "answers": [
   "A",
   "C",
   "E"
  ],
  "category": "Service Continuity",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Watch for options that name the wrong goal (suppliers) or a bad practice (isolation).",
  "explanation": "**Correct: A, C and E.** B should refer to *business* objectives, not supplier objectives, and D describes poor practice. (The two source copies disagreed: A+E vs A+C+E; C is valid.)"
 },
 {
  "id": "s1-Q22",
  "set": "set1",
  "question": "Which of the following act as triggers for capacity and performance management?",
  "options": {
   "A": "Ad hoc capacity and performance reports",
   "B": "New and changed services, and review or revision of SLAs",
   "C": "Supplier financial issues",
   "D": "User financial issues",
   "E": "New or changed corporate governance guidelines"
  },
  "answers": [
   "B"
  ],
  "category": "Capacity & Performance",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "Capacity work is triggered by changes to what the service must deliver.",
  "explanation": "**Correct: B.** New/changed services and SLA revisions alter the demand or targets to plan capacity for. Reports are outputs, not triggers, and the other options are unrelated to capacity."
 },
 {
  "id": "s1-Q23",
  "set": "set1",
  "question": "Which practice must supplier management work with to develop consistent, reliable approaches to supplier contracts and agreements?",
  "options": {
   "A": "Capacity and performance management",
   "B": "Availability management",
   "C": "Service level management",
   "D": "Service continuity management",
   "E": "Service catalogue management"
  },
  "answers": [
   "C"
  ],
  "category": "Supplier Management",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "Contract terms need to line up with the service targets promised to customers.",
  "explanation": "**Correct: C.** Supplier contracts must support the service levels agreed with customers, so supplier management works with service level management."
 },
 {
  "id": "s1-Q24",
  "set": "set1",
  "question": "Which of the following statements about the change schedule are correct?",
  "options": {
   "A": "It lists planned changes and their proposed implementation dates",
   "B": "It is always created by release management and passed to change enablement for review",
   "C": "It helps avoid clashes between changes and tells stakeholders what is planned",
   "D": "It only lists the categories of change, not individual changes",
   "E": "It contains only changes that will not affect service levels"
  },
  "answers": [
   "A",
   "C"
  ],
  "category": "Change Enablement",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "The schedule is a calendar of specific planned changes.",
  "explanation": "**Correct: A and C.** *V4 note:* v3's 'Forward Schedule of Change' and 'Projected Service Outage' are now the change schedule in change enablement. The original key (A, C, E) relied on v3-only terms and was rewritten."
 },
 {
  "id": "s1-Q26",
  "set": "set1",
  "question": "Incidents appear right after a release team applied a change in production. How will support proceed?",
  "options": {
   "A": "Notify the monitoring team to solve the incidents",
   "B": "Let the incidents sit in queues for the next support level",
   "C": "Notify the release team to back out the change",
   "D": "Escalate the incidents to the next level so they are resolved",
   "E": "Tell monitoring to change thresholds so the incidents are no longer captured"
  },
  "answers": [
   "C",
   "D"
  ],
  "category": "Incident Management",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "The goal is to restore service, not hide or ignore the symptoms.",
  "explanation": "**Correct: C and D.** Backing out the suspect change and escalating restores service quickly. Passing incidents to monitoring, waiting in queues or hiding alerts does not."
 },
 {
  "id": "s1-Q28",
  "set": "set1",
  "question": "How does a business benefit from service financial management?",
  "options": {
   "A": "It helps asset management with depreciation models",
   "B": "It ensures the IT organization follows SOX compliance processes",
   "C": "It provides better planning and forecasting of the money needed to cover the cost of services",
   "D": "Aligning infrastructure to change governance means less spending on outages",
   "E": "Aligning services to business expectations creates more appropriate, controllable spending and more predictable profitability"
  },
  "answers": [
   "C",
   "E"
  ],
  "category": "Service Financial Mgmt",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "Look for benefits about planning and controlling spend.",
  "explanation": "**Correct: C and E.** Better forecasting and controllable spending are core benefits. A, B and D belong to asset management, compliance and change governance."
 },
 {
  "id": "s1-Q29",
  "set": "set1",
  "question": "Which of the following are deployment approaches described in ITIL 4?",
  "options": {
   "A": "Phased deployment",
   "B": "Big bang deployment",
   "C": "Temporary deployment",
   "D": "Pull deployment",
   "E": "Delta deployment"
  },
  "answers": [
   "A",
   "B",
   "D"
  ],
  "category": "Deployment",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "ITIL 4 lists four approaches; one of them is 'continuous delivery'.",
  "explanation": "**Correct: A, B and D.** ITIL 4 lists phased, big bang, continuous delivery and pull. *V4 note:* the ITIL v3 question asked for release types (package, delta, full), which ITIL 4 no longer defines, so it was rewritten."
 },
 {
  "id": "s1-Q31",
  "set": "set1",
  "question": "Which of the following can an IT organization use to cut incident and problem resolution times through maintained, accessible knowledge records containing workarounds?",
  "options": {
   "A": "Deployment management",
   "B": "Service configuration management (CMDB)",
   "C": "Knowledge management (knowledge base)",
   "D": "Change enablement",
   "E": "Service level management"
  },
  "answers": [
   "C"
  ],
  "category": "Knowledge Management",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Which practice exists to keep reusable know-how findable?",
  "explanation": "**Correct: C.** A maintained knowledge base of workarounds speeds resolution. *V4 note:* v3 answer was the SKMS."
 },
 {
  "id": "s1-Q32",
  "set": "set1",
  "question": "Which of the following are valid measures of the continual improvement practice?",
  "options": {
   "A": "Number of improvement opportunities identified and logged",
   "B": "Number of identified contract breaches",
   "C": "Capacity reserves",
   "D": "Number of major security incidents",
   "E": "Improvement initiatives are reviewed and tracked to completion"
  },
  "answers": [
   "A",
   "E"
  ],
  "category": "Continual Improvement",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Choose measures about improvement activity itself.",
  "explanation": "**Correct: A and E.** B belongs to supplier management, C to capacity, D to security. The two source copies disagreed (D vs A+E); A and E fit improvement work."
 },
 {
  "id": "s1-Q33",
  "set": "set1",
  "question": "Which of the following is a key element of the REACTIVE activities of availability management?",
  "options": {
   "A": "Rapidly integrating hardware technology to make the infrastructure more available",
   "B": "Planning, design and improvement of availability",
   "C": "Gathering technical requirements to make sure systems are available",
   "D": "Monitoring, measuring and analysis of all change records going into production",
   "E": "Monitoring, measuring and analysis of all events, incidents and problems around unavailability"
  },
  "answers": [
   "E"
  ],
  "category": "Availability",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "'Reactive' means responding to what has already gone wrong.",
  "explanation": "**Correct: E only.** Reactive activities analyse events, incidents and problems involving unavailability; A-C are proactive design/improvement. The source also listed D, which is not a reactive availability activity."
 },
 {
  "id": "s1-Q35",
  "set": "set1",
  "question": "Which of the following are advantages of service continuity management?",
  "options": {
   "A": "Staff able to decide the business continuity need",
   "B": "Supports the overall business continuity plan",
   "C": "Ability to recover in a controlled manner",
   "D": "Ability to recover all resources regardless of business need",
   "E": "Ability to control the annual spending of continuity management"
  },
  "answers": [
   "B",
   "C"
  ],
  "category": "Service Continuity",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "Continuity is driven by business need, not by IT preference.",
  "explanation": "**Correct: B and C.** It supports the business plan and enables controlled recovery. Recovering everything regardless of need (D) ignores priorities."
 },
 {
  "id": "s1-Q36",
  "set": "set1",
  "question": "Which of the following must be recorded for every configuration item (CI)?",
  "options": {
   "A": "Version number",
   "B": "Unique identifier",
   "C": "CI type",
   "D": "Manufacturer information",
   "E": "Purchase cost"
  },
  "answers": [
   "B",
   "C"
  ],
  "category": "Service Configuration",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "What's the minimum needed to tell any two CIs apart and classify them?",
  "explanation": "**Correct: B and C.** Every CI needs a unique ID and a type. Versions, manufacturer and cost apply only to some CIs. *Note:* the source key (serial number and unique ID) was incorrect since not every CI has a serial number."
 },
 {
  "id": "s1-Q37",
  "set": "set1",
  "question": "A company will roll out a POS upgrade to all retail stores. Which actions minimize the risk to store operations?",
  "options": {
   "A": "Divide stores into groups (e.g. by region) and deploy in phases",
   "B": "Deploy to every store at once during trading hours",
   "C": "Start with a small pilot group of stores, then widen the roll-out",
   "D": "Skip the back-out plan to save time",
   "E": "Prepare a back-out plan and train store staff for the upgrade"
  },
  "answers": [
   "A",
   "C",
   "E"
  ],
  "category": "Deployment",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Risk falls when you go small first, and have a way back.",
  "explanation": "**Correct: A, C and E.** Phased and pilot roll-outs limit exposure; a back-out plan and trained staff limit impact. *V4 note:* rewritten around ITIL 4 deployment approaches; the source key endorsed a big-bang roll-out, which is less clearly risk-minimizing."
 },
 {
  "id": "s1-Q39",
  "set": "set1",
  "question": "Which of the following is the purpose of the continual improvement practice?",
  "options": {
   "A": "Ensure external suppliers meet OLAs and customers are satisfied with their services",
   "B": "Analyze all changes with a change impact analysis tool",
   "C": "Create a single technology to maintain integration across applications",
   "D": "Continually align IT services with changing business needs by identifying and implementing improvements",
   "E": "Store all infrastructure data in a configuration database"
  },
  "answers": [
   "D"
  ],
  "category": "Continual Improvement",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "It's about staying aligned with what the business needs over time.",
  "explanation": "**Correct: D only.** A mixes supplier management with OLAs (OLAs are internal), B is change, E is configuration management. (The source key was A and D; A is not correct.)"
 },
 {
  "id": "s1-Q41",
  "set": "set1",
  "question": "How does service financial management help with understanding the value of a service?",
  "options": {
   "A": "By establishing best finance practices and policies",
   "B": "By working with the service desk so all support costs are covered",
   "C": "By working with accounting on the balance sheet",
   "D": "By providing means to understand a service's cost relative to its business value, using accounting methods and ROI approaches",
   "E": "By charging customers for use of the infrastructure"
  },
  "answers": [
   "D"
  ],
  "category": "Service Financial Mgmt",
  "source": "ikm-set1",
  "v4": "k",
  "hint": "Value means comparing cost against what the business gets.",
  "explanation": "**Correct: D.** Service valuation relates cost to business value. *V4 note:* service valuation is part of service financial management in ITIL 4."
 },
 {
  "id": "s1-Q44",
  "set": "set1",
  "question": "Which of the following best defines change enablement?",
  "options": {
   "A": "A group of people with authority to approve changes",
   "B": "A group of people who advise on implementing changes",
   "C": "The process to implement changes that require release management",
   "D": "Maximizing the number of successful changes by ensuring risks are properly assessed, authorizing changes to proceed and managing the change schedule",
   "E": "A record of which CIs are affected by an authorized change"
  },
  "answers": [
   "D"
  ],
  "category": "Change Enablement",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "The answer describes a practice's purpose, not a group or a record.",
  "explanation": "**Correct: D.** This is ITIL 4's purpose statement. A is a change authority, B a former CAB role, E a change record. *V4 note:* 'change management' is now 'change enablement'."
 },
 {
  "id": "s1-Q46",
  "set": "set1",
  "question": "How can the knowledge management practice help the services team with their documentation?",
  "options": {
   "A": "Work with service owners to capture information about services going into production",
   "B": "Approve all changes to production",
   "C": "Review knowledge on retired or outdated services and decide what to update or archive",
   "D": "Ask external vendors to review the stored data",
   "E": "Collect and store information about services currently in production in a knowledge base"
  },
  "answers": [
   "A",
   "C",
   "E"
  ],
  "category": "Knowledge Management",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Knowledge management captures, curates and shares information.",
  "explanation": "**Correct: A, C and E.** Capturing, curating and storing service information is core; approving changes and outsourcing review are not."
 },
 {
  "id": "s1-Q47",
  "set": "set1",
  "question": "Which of the following events belong to event management, and how are they classified?",
  "options": {
   "A": "A user logging in to an application is an informational event",
   "B": "A CI sending an automated notification when conditions are met is a filtered event",
   "C": "An email reaching its intended recipient is an exception event",
   "D": "A transaction taking 15% longer than normal is a warning event",
   "E": "A user entering an incorrect password is an exception event"
  },
  "answers": [
   "A",
   "D",
   "E"
  ],
  "category": "Monitoring & Event Mgmt",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "Events are classified as informational, warning or exception; 'filtered' is not one of them.",
  "explanation": "**Correct: A, D and E.** Normal activity is informational, a deviation is a warning, a failure to comply is an exception. B is wrong because 'filtered' is not a classification, and C is informational. *Note:* the source key included B, which is incorrect."
 },
 {
  "id": "s1-Q48",
  "set": "set1",
  "question": "Which of the following are activities in problem management?",
  "options": {
   "A": "Problem identification",
   "B": "Problem control",
   "C": "Error control",
   "D": "Approving standard changes",
   "E": "Overseeing access to services"
  },
  "answers": [
   "A",
   "B",
   "C"
  ],
  "category": "Problem Management",
  "source": "ikm-set1",
  "v4": "r",
  "hint": "ITIL 4 splits problem management into three phases.",
  "explanation": "**Correct: A, B and C.** ITIL 4 describes problem identification, problem control and error control (which includes managing known errors). *V4 note:* replaces the v3 activity list; D and E belong to change enablement and access management."
 }
]
);
