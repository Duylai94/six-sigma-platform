import { QuizQuestion } from '@/types/quiz.types';

export const definePhaseQuizzes: QuizQuestion[] = [
    {
        id: 'D1',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The primary purpose of the Define phase is:",
        options: {
            A: "Collect all process data",
            B: "Identify and clarify problem, scope, CTQ characteristics, project goals",
            C: "Perform statistical analysis",
            D: "Implement solutions"
        },
        correctAnswer: 'B',
        explanation: "Foundation for entire project",
        topic: 'Define Phase'
    },
    {
        id: 'D2',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A project charter must include all EXCEPT:",
        options: {
            A: "Problem statement and goal",
            B: "Timeline and budget",
            C: "Detailed control charts",
            D: "Stakeholders and scope"
        },
        correctAnswer: 'C',
        explanation: "Control charts are for Control phase",
        topic: 'Define Phase'
    },
    {
        id: 'D3',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "CTQ (Critical to Quality) characteristics are:",
        options: {
            A: "Determined by engineering alone",
            B: "Customer requirements that matter most to success",
            C: "Always numerical measurements only",
            D: "Set by Six Sigma team opinion"
        },
        correctAnswer: 'B',
        explanation: "Identified through Voice of Customer",
        topic: 'Define Phase'
    },
    {
        id: 'D4',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Voice of Customer (VOC) is gathered through:",
        options: {
            A: "Customer surveys only",
            B: "Surveys, interviews, focus groups, complaint data, observations",
            C: "Assumptions",
            D: "Marketing department only"
        },
        correctAnswer: 'B',
        explanation: "Multiple methods capture comprehensive needs",
        topic: 'Define Phase'
    },
    {
        id: 'D5',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The 7 Muda (wastes) in Lean include:",
        options: {
            A: "Overproduction, correction, inventory, motion, conveyance, overprocessing, waiting",
            B: "Mistakes, meetings, management, money, materials, methods, men",
            C: "Only cost-related items",
            D: "Varies by industry"
        },
        correctAnswer: 'A',
        explanation: "Taiichi Ohno's seven wastes",
        topic: 'Define Phase'
    },
    {
        id: 'D6',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Overproduction waste occurs when:",
        options: {
            A: "Customers want more products",
            B: "Producing more than demand requires = inventory buildup and cost",
            C: "Quality improves",
            D: "Equipment operates faster"
        },
        correctAnswer: 'B',
        explanation: "Produces defects and waste",
        topic: 'Define Phase'
    },
    {
        id: 'D7',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Correction waste (Rework) includes:",
        options: {
            A: "Time spent fixing errors and scrap costs",
            B: "Inspection activities only",
            C: "Training employees",
            D: "Preventive maintenance"
        },
        correctAnswer: 'A',
        explanation: "Most expensive form of waste",
        topic: 'Define Phase'
    },
    {
        id: 'D8',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Inventory waste represents:",
        options: {
            A: "Work-in-process and finished goods excess",
            B: "Only raw materials",
            C: "Necessary buffer stock",
            D: "Storage costs only"
        },
        correctAnswer: 'A',
        explanation: "Hides problems, ties up capital",
        topic: 'Define Phase'
    },
    {
        id: 'D9',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Motion waste refers to:",
        options: {
            A: "Unnecessary movement of workers/equipment",
            B: "Transportation between locations",
            C: "Unnecessary machine cycles",
            D: "Worker efficiency"
        },
        correctAnswer: 'A',
        explanation: "Inefficient workstations and procedures",
        topic: 'Define Phase'
    },
    {
        id: 'D10',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Conveyance waste is:",
        options: {
            A: "Transportation/movement of products and materials",
            B: "Worker movement only",
            C: "Shipping to customers",
            D: "Inventory storage"
        },
        correctAnswer: 'A',
        explanation: "Unnecessary movement adds time, cost",
        topic: 'Define Phase'
    },
    {
        id: 'D11',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Overprocessing waste includes:",
        options: {
            A: "Adding unnecessary features customers don't want",
            B: "Normal process steps",
            C: "Quality inspections",
            D: "Preventive maintenance"
        },
        correctAnswer: 'A',
        explanation: "Creates complexity and cost",
        topic: 'Define Phase'
    },
    {
        id: 'D12',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Waiting waste describes:",
        options: {
            A: "Production delays waiting for upstream process, information, approval",
            B: "Customer waiting time",
            C: "Queuing theory only",
            D: "Any pause in activity"
        },
        correctAnswer: 'A',
        explanation: "Idle time is waste",
        topic: 'Define Phase'
    },
    {
        id: 'D13',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The 5S Lean workplace organization consists of:",
        options: {
            A: "Safety, Sustainability, Speed, Standardization, Support",
            B: "Sort, Shine, Standardize, Sustain, Self-Discipline",
            C: "Source, Schedule, Store, Stock, Sustain",
            D: "System, Structure, Strategy, Scope, Support"
        },
        correctAnswer: 'B',
        explanation: "Japanese: Seiri, Seiton, Seiso, Seiketsu, Shitsuke",
        topic: 'Define Phase'
    },
    {
        id: 'D14',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Sort\" (Seiri) means:",
        options: {
            A: "Cleaning and organizing",
            B: "Removing unnecessary items; keeping only essentials",
            C: "Creating standard procedures",
            D: "Continuous improvement"
        },
        correctAnswer: 'B',
        explanation: "Red tag program for elimination",
        topic: 'Define Phase'
    },
    {
        id: 'D15',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Shine\" (Seiso) involves:",
        options: {
            A: "Creating standard procedures",
            B: "Removing unnecessary items",
            C: "Cleaning, organizing, and maintaining equipment",
            D: "Training employees"
        },
        correctAnswer: 'C',
        explanation: "Improves safety and identifies problems",
        topic: 'Define Phase'
    },
    {
        id: 'D16',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Standardize\" (Seiketsu) means:",
        options: {
            A: "All equipment must be identical",
            B: "Establishing standard procedures to sustain improvements",
            C: "Only for manufacturing",
            D: "Written policies only"
        },
        correctAnswer: 'B',
        explanation: "Prevents backsliding to old ways",
        topic: 'Define Phase'
    },
    {
        id: 'D17',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Sustain\" (Shitsuke) emphasizes:",
        options: {
            A: "Continuous management oversight",
            B: "Discipline to maintain improvements through habit and culture",
            C: "Daily leadership",
            D: "Reward systems"
        },
        correctAnswer: 'B',
        explanation: "Commitment to new standards",
        topic: 'Define Phase'
    },
    {
        id: 'D18',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cost of Poor Quality (COPQ) includes:",
        options: {
            A: "Internal failure costs only (scrap, rework)",
            B: "External failure costs only (returns, warranties, customer loss)",
            C: "Both internal and external failure costs",
            D: "Prevention costs only"
        },
        correctAnswer: 'C',
        explanation: "Total cost of nonconformance",
        topic: 'Define Phase'
    },
    {
        id: 'D19',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "COPQ internal failures include:",
        options: {
            A: "Scrap, rework, downtime, redesign",
            B: "Customer complaints",
            C: "Lost future sales",
            D: "Regulatory fines only"
        },
        correctAnswer: 'A',
        explanation: "Costs before customer receives product",
        topic: 'Define Phase'
    },
    {
        id: 'D20',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "COPQ external failures include:",
        options: {
            A: "Scrap and rework",
            B: "Returns, warranty claims, liability, customer loss, reputation damage",
            C: "Inspection and testing",
            D: "Prevention programs"
        },
        correctAnswer: 'B',
        explanation: "Costs after customer receives product",
        topic: 'Define Phase'
    },
    {
        id: 'D21',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Pareto Principle (80:20 rule) states:",
        options: {
            A: "80% of problems require 20% of solutions",
            B: "20% of causes account for 80% of effects",
            C: "80% of solutions fix 20% of defects",
            D: "80% of time spent on 20% of results"
        },
        correctAnswer: 'B',
        explanation: "Focus on vital few, not trivial many",
        topic: 'Define Phase'
    },
    {
        id: 'D22',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Pareto analysis helps project selection by:",
        options: {
            A: "Identifying all problems",
            B: "Ranking problems by frequency, cost, or impact",
            C: "Creating control charts",
            D: "Measuring customer satisfaction"
        },
        correctAnswer: 'B',
        explanation: "Prioritize highest impact improvements",
        topic: 'Define Phase'
    },
    {
        id: 'D23',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "DPU (Defects Per Unit) is calculated as:",
        options: {
            A: "Total defects / number of units",
            B: "Defects / million opportunities",
            C: "Failures × number of units",
            D: "Units with defects / total units"
        },
        correctAnswer: 'A',
        explanation: "Average defects per unit",
        topic: 'Define Phase'
    },
    {
        id: 'D24',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "DPMO (Defects Per Million Opportunities) metric:",
        options: {
            A: "Same as DPU",
            B: "Defect rate scaled to one million opportunities",
            C: "Always less than DPU value",
            D: "Only applicable to manufacturing"
        },
        correctAnswer: 'B',
        explanation: "Standardized cross-industry metric",
        topic: 'Define Phase'
    },
    {
        id: 'D25',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "FTY (First Time Yield) represents:",
        options: {
            A: "Total units produced / customers",
            B: "Good units produced on first pass / units attempted",
            C: "Units that require rework",
            D: "Customer acceptance rate"
        },
        correctAnswer: 'B',
        explanation: "Measures process efficiency without rework",
        topic: 'Define Phase'
    },
    {
        id: 'D26',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Y=f(X) in Six Sigma means:",
        options: {
            A: "Yield equals a fixed calculation",
            B: "The output (Y) is a function of inputs/causes (X)",
            C: "Year follows X timeline",
            D: "Young trainees follow expert training"
        },
        correctAnswer: 'B',
        explanation: "Fundamental problem-solving concept",
        topic: 'Define Phase'
    },
    {
        id: 'D27',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The \"5 Whys\" technique is used to:",
        options: {
            A: "Question customer complaints",
            B: "Drill down to root causes by repeatedly asking \"why\"",
            C: "Develop project goals",
            D: "Measure process capability"
        },
        correctAnswer: 'B',
        explanation: "Uncovers true causes vs symptoms",
        topic: 'Define Phase'
    },
    {
        id: 'D28',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem statement elements include:",
        options: {
            A: "Problem, impact, baseline metrics, desired state",
            B: "Only the problem description",
            C: "Solutions proposed",
            D: "Budget and timeline only"
        },
        correctAnswer: 'A',
        explanation: "Clear context for improvement",
        topic: 'Define Phase'
    },
    {
        id: 'D29',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A well-defined problem statement is:",
        options: {
            A: "Very general",
            B: "Specific, measurable, relevant to business goals",
            C: "Long and detailed",
            D: "Based on assumptions"
        },
        correctAnswer: 'B',
        explanation: "Clarity drives project success",
        topic: 'Define Phase'
    },
    {
        id: 'D30',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "RTY (Rolled Throughput Yield) differs from FTY because:",
        options: {
            A: "RTY is outdated",
            B: "RTY includes rework as additional defects",
            C: "RTY only for services",
            D: "RTY is faster to calculate"
        },
        correctAnswer: 'B',
        explanation: "Reveals hidden waste from rework",
        topic: 'Define Phase'
    },
    {
        id: 'D31',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cycle time metric measures:",
        options: {
            A: "Only production time",
            B: "Total time from process start to finish",
            C: "Customer wait time",
            D: "Inspection duration"
        },
        correctAnswer: 'B',
        explanation: "Includes value-added and non-value-added time",
        topic: 'Define Phase'
    },
    {
        id: 'D32',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Lead time includes:",
        options: {
            A: "Only customer wait",
            B: "Order placement to delivery; includes cycle time + wait time",
            C: "Manufacturing time only",
            D: "Inspection activities"
        },
        correctAnswer: 'B',
        explanation: "Customer's perspective timing",
        topic: 'Define Phase'
    },
    {
        id: 'D33',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Sigma level calculation requires:",
        options: {
            A: "Cpk directly",
            B: "Standard deviation and specification limits",
            C: "Sample size only",
            D: "Customer satisfaction"
        },
        correctAnswer: 'B',
        explanation: "Fundamental to sigma metric",
        topic: 'Define Phase'
    },
    {
        id: 'D34',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The relationship between Cpk and DPMO:",
        options: {
            A: "No relationship",
            B: "Cpk 1.33 ≈ 63 DPMO; Cpk 1.67 ≈ 3.4 DPMO",
            C: "Always equal",
            D: "Industry dependent only"
        },
        correctAnswer: 'B',
        explanation: "Direct mathematical relationship",
        topic: 'Define Phase'
    },
    {
        id: 'D35',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Baseline metrics establish:",
        options: {
            A: "Target state only",
            B: "Current state performance before improvement begins",
            C: "Final project results",
            D: "Customer expectations"
        },
        correctAnswer: 'B',
        explanation: "Starting point for measurement",
        topic: 'Define Phase'
    },
    {
        id: 'D36',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A Business Case for a project includes:",
        options: {
            A: "Problem and goal only",
            B: "Financial impact, expected ROI, resources, timeline, alternatives",
            C: "Only management approval",
            D: "No financial analysis needed"
        },
        correctAnswer: 'B',
        explanation: "Justifies investment decision",
        topic: 'Define Phase'
    },
    {
        id: 'D37',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Financial justification metrics include:",
        options: {
            A: "Cost savings only",
            B: "Revenue increase, cost savings, quality improvement, efficiency gains",
            C: "Employee satisfaction only",
            D: "No metrics needed"
        },
        correctAnswer: 'B',
        explanation: "Multiple dimensions of value",
        topic: 'Define Phase'
    },
    {
        id: 'D38',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A Fishbone Diagram (Ishikawa) is used to:",
        options: {
            A: "Identify all problems",
            B: "Visualize root causes organized by category",
            C: "Control processes",
            D: "Measure capability"
        },
        correctAnswer: 'B',
        explanation: "Structural approach to cause analysis",
        topic: 'Define Phase'
    },
    {
        id: 'D39',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process Mapping serves to:",
        options: {
            A: "Track individual task progress",
            B: "Understand process flow, activities, decision points, handoffs",
            C: "Only for manufacturing",
            D: "Replace written procedures"
        },
        correctAnswer: 'B',
        explanation: "Visual understanding of process",
        topic: 'Define Phase'
    },
    {
        id: 'D40',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Value Stream Mapping includes:",
        options: {
            A: "Only production steps",
            B: "Value-added activities, waste, delays, information flow",
            C: "Customer satisfaction only",
            D: "Financial summary"
        },
        correctAnswer: 'B',
        explanation: "Comprehensive process visualization",
        topic: 'Define Phase'
    },
    {
        id: 'D41',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Swim lane diagram shows:",
        options: {
            A: "Only timelines",
            B: "Process steps, ownership by department/role",
            C: "Customer journey only",
            D: "Financial metrics"
        },
        correctAnswer: 'B',
        explanation: "Clarifies responsibility",
        topic: 'Define Phase'
    },
    {
        id: 'D42',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Input-Process-Output-Customer (IPOC) diagram:",
        options: {
            A: "Same as SIPOC",
            B: "Simplified version showing key process components",
            C: "For projects only",
            D: "Statistical analysis tool"
        },
        correctAnswer: 'B',
        explanation: "Foundation for understanding process",
        topic: 'Define Phase'
    },
    {
        id: 'D43',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "SIPOC stands for:",
        options: {
            A: "Suppliers, Inputs, Process, Outputs, Customers",
            B: "System, Integration, Planning, Operations, Compliance",
            C: "Scope, Input, Process, Operations, Change",
            D: "Source, Infrastructure, Process, Outcomes, Costs"
        },
        correctAnswer: 'A',
        explanation: "High-level process understanding",
        topic: 'Define Phase'
    },
    {
        id: 'D44',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "High-level process documentation typically shows:",
        options: {
            A: "Every detail and procedure",
            B: "Key steps, inputs, outputs, major decisions",
            C: "Only metrics",
            D: "Historical changes"
        },
        correctAnswer: 'B',
        explanation: "Adequate for baseline understanding",
        topic: 'Define Phase'
    },
    {
        id: 'D45',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cross-functional team for Six Sigma includes:",
        options: {
            A: "Only statisticians",
            B: "Representatives from affected departments, process expertise",
            C: "Only managers",
            D: "Customers only"
        },
        correctAnswer: 'B',
        explanation: "Diverse perspectives and ownership",
        topic: 'Define Phase'
    },
    {
        id: 'D46',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project team roles include:",
        options: {
            A: "Black Belt and team members",
            B: "Champion, Black Belt, Green Belt, team members, process owner",
            C: "CEO and Black Belt",
            D: "No defined roles needed"
        },
        correctAnswer: 'B',
        explanation: "Clear accountability structure",
        topic: 'Define Phase'
    },
    {
        id: 'D47',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase deliverables typically include:",
        options: {
            A: "Control charts",
            B: "Charter, problem statement, CTQ, SIPOC, baseline metrics, business case",
            C: "Data analysis",
            D: "Statistical results"
        },
        correctAnswer: 'B',
        explanation: "Foundation documentation",
        topic: 'Define Phase'
    },
    {
        id: 'D48',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define Tollgate (gate review) assesses:",
        options: {
            A: "Problem clarity, goal definition, metrics defined",
            B: "Solutions proposed",
            C: "Statistical validity",
            D: "Implementation status"
        },
        correctAnswer: 'A',
        explanation: "Go/no-go to proceed to Measure",
        topic: 'Define Phase'
    },
    {
        id: 'D49',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Stakeholder analysis in Define identifies:",
        options: {
            A: "Only customers",
            B: "Interests, influence, potential impact of all parties",
            C: "Competitors only",
            D: "Suppliers"
        },
        correctAnswer: 'B',
        explanation: "Comprehensive understanding",
        topic: 'Define Phase'
    },
    {
        id: 'D50',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project scope definition serves to:",
        options: {
            A: "Make scope as large as possible",
            B: "Include everything mentioned by stakeholders",
            C: "Clearly bound the project and prevent scope creep",
            D: "Allow scope to change throughout project"
        },
        correctAnswer: 'C',
        explanation: "Scope management critical",
        topic: 'Define Phase'
    },
    {
        id: 'D51',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Risk identification in Define includes:",
        options: {
            A: "No risks at this stage",
            B: "Potential barriers, resource constraints, resistance to change",
            C: "Only financial risks",
            D: "Technical risks only"
        },
        correctAnswer: 'B',
        explanation: "Early mitigation planning",
        topic: 'Define Phase'
    },
    {
        id: 'D52',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project timeline development includes:",
        options: {
            A: "Define phase duration only",
            B: "All DMAIC phases, milestones, dependencies, resource allocation",
            C: "No planning needed",
            D: "Based on budget only"
        },
        correctAnswer: 'B',
        explanation: "Realistic scheduling",
        topic: 'Define Phase'
    },
    {
        id: 'D53',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Communication plan in Define establishes:",
        options: {
            A: "No communication needed",
            B: "Stakeholder updates, frequency, methods, responsible parties",
            C: "Only team meetings",
            D: "Email only"
        },
        correctAnswer: 'B',
        explanation: "Transparency and engagement",
        topic: 'Define Phase'
    },
    {
        id: 'D54',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project constraints include:",
        options: {
            A: "Unlimited budget and time",
            B: "Time, budget, resources, technical limitations, organizational factors",
            C: "None—all projects have full support",
            D: "Only time constraints"
        },
        correctAnswer: 'B',
        explanation: "Reality-based planning",
        topic: 'Define Phase'
    },
    {
        id: 'D55',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Business metric alignment means:",
        options: {
            A: "All improvement projects are equally valuable",
            B: "Six Sigma projects must support organizational strategic goals",
            C: "Projects create value regardless of business need",
            D: "No alignment required"
        },
        correctAnswer: 'B',
        explanation: "Strategic fit critical",
        topic: 'Define Phase'
    },
    {
        id: 'D56',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer requirements hierarchy typically shows:",
        options: {
            A: "All requirements equally important",
            B: "Must-haves (CTQ), performance needs, excitement factors",
            C: "Only price requirements",
            D: "No hierarchy needed"
        },
        correctAnswer: 'B',
        explanation: "Kano model approach",
        topic: 'Define Phase'
    },
    {
        id: 'D57',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Competitive analysis in Define shows:",
        options: {
            A: "All competitors identical",
            B: "How performance compares to best-in-class or competitors",
            C: "Historical trends only",
            D: "No competitive factors relevant"
        },
        correctAnswer: 'B',
        explanation: "Benchmark context",
        topic: 'Define Phase'
    },
    {
        id: 'D58',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Market research inputs to Define phase:",
        options: {
            A: "Not needed",
            B: "Customer expectations, industry trends, regulatory requirements",
            C: "Only sales data",
            D: "Competitor pricing only"
        },
        correctAnswer: 'B',
        explanation: "External context for objectives",
        topic: 'Define Phase'
    },
    {
        id: 'D59',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Regulatory requirements in Define:",
        options: {
            A: "Not relevant to operations",
            B: "Compliance needs that constrain or shape process design",
            C: "Only for heavily regulated industries",
            D: "Determined by Six Sigma team"
        },
        correctAnswer: 'B',
        explanation: "External constraints",
        topic: 'Define Phase'
    },
    {
        id: 'D60',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Core team size for typical project:",
        options: {
            A: "50+ members",
            B: "5-10 core members with extended team as needed",
            C: "2-3 only",
            D: "Whole organization"
        },
        correctAnswer: 'B',
        explanation: "Manageable yet representative",
        topic: 'Define Phase'
    },
    {
        id: 'D61',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project charter approval sequence:",
        options: {
            A: "Not required",
            B: "Team develops, sponsor approves, stakeholders informed",
            C: "Only team review",
            D: "Continuous revision without approval"
        },
        correctAnswer: 'B',
        explanation: "Governance and commitment",
        topic: 'Define Phase'
    },
    {
        id: 'D62',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Preliminary root cause hypothesis in Define:",
        options: {
            A: "Not developed",
            B: "Initial theories to be tested in later phases",
            C: "Confirmed root causes",
            D: "Final analysis only"
        },
        correctAnswer: 'B',
        explanation: "Guides Measure phase direction",
        topic: 'Define Phase'
    },
    {
        id: 'D63',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase duration typically:",
        options: {
            A: "2-3 weeks for typical project",
            B: "1-2 days",
            C: "Several months",
            D: "One year"
        },
        correctAnswer: 'A',
        explanation: "Establishes foundation quickly",
        topic: 'Define Phase'
    },
    {
        id: 'D64',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Kickoff meeting in Define serves to:",
        options: {
            A: "Finalize solutions",
            B: "Align team, communicate vision, establish norms, build commitment",
            C: "Present results",
            D: "No meeting needed"
        },
        correctAnswer: 'B',
        explanation: "Sets project tone and expectations",
        topic: 'Define Phase'
    },
    {
        id: 'D65',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process owner engagement in Define:",
        options: {
            A: "Not needed",
            B: "Critical for process understanding and implementation success",
            C: "Only during Control phase",
            D: "Optional involvement"
        },
        correctAnswer: 'B',
        explanation: "Must-have stakeholder",
        topic: 'Define Phase'
    },
    {
        id: 'D66',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Supplier analysis in SIPOC identifies:",
        options: {
            A: "Only external vendors",
            B: "Internal and external sources of inputs; quality expectations",
            C: "Competitors",
            D: "Not necessary"
        },
        correctAnswer: 'B',
        explanation: "Supply chain understanding",
        topic: 'Define Phase'
    },
    {
        id: 'D67',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer identification in SIPOC:",
        options: {
            A: "Only external customers",
            B: "Internal and external receivers of process outputs",
            C: "Shareholders only",
            D: "No customer definition needed"
        },
        correctAnswer: 'B',
        explanation: "Full customer spectrum",
        topic: 'Define Phase'
    },
    {
        id: 'D68',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process inputs in SIPOC include:",
        options: {
            A: "Only materials",
            B: "Materials, information, labor, equipment, services",
            C: "Only services",
            D: "Time and money only"
        },
        correctAnswer: 'B',
        explanation: "All resource types",
        topic: 'Define Phase'
    },
    {
        id: 'D69',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process outputs in SIPOC include:",
        options: {
            A: "Only products",
            B: "Products, services, information, waste, decisions",
            C: "Only revenue",
            D: "Data only"
        },
        correctAnswer: 'B',
        explanation: "Tangible and intangible outputs",
        topic: 'Define Phase'
    },
    {
        id: 'D70',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Suppliers' role in Define phase:",
        options: {
            A: "Not involved",
            B: "Provide input data, constraints, capability information",
            C: "Make process decisions",
            D: "Only during Improve phase"
        },
        correctAnswer: 'B',
        explanation: "Contributes input quality perspective",
        topic: 'Define Phase'
    },
    {
        id: 'D71',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer involvement during Define:",
        options: {
            A: "Not needed until later phases",
            B: "Essential for accurate VOC and CTQ identification",
            C: "Only for surveys",
            D: "Marketing handles customer contact"
        },
        correctAnswer: 'B',
        explanation: "Direct customer input critical",
        topic: 'Define Phase'
    },
    {
        id: 'D72',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Brainstorming in Define session rules:",
        options: {
            A: "Manager makes all suggestions",
            B: "All ideas welcomed without criticism; build on others' ideas",
            C: "Silent individual thinking only",
            D: "No rules needed"
        },
        correctAnswer: 'B',
        explanation: "Psychological safety for creativity",
        topic: 'Define Phase'
    },
    {
        id: 'D73',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Affinity diagram in Define:",
        options: {
            A: "Same as flowchart",
            B: "Groups ideas/data into logical categories",
            C: "Time-sequenced process",
            D: "Statistical plot"
        },
        correctAnswer: 'B',
        explanation: "Organizing brainstorm results",
        topic: 'Define Phase'
    },
    {
        id: 'D74',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Priority Matrix in Define helps:",
        options: {
            A: "Control processes",
            B: "Evaluate and rank project ideas/solutions",
            C: "Calculate statistics",
            D: "Create schedules"
        },
        correctAnswer: 'B',
        explanation: "Decision-making tool",
        topic: 'Define Phase'
    },
    {
        id: 'D75',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Success criteria in Define includes:",
        options: {
            A: "Project completion only",
            B: "Financial metrics, quality improvement, customer satisfaction, timeline",
            C: "Team satisfaction only",
            D: "No criteria needed"
        },
        correctAnswer: 'B',
        explanation: "Measurable success definition",
        topic: 'Define Phase'
    }
];
