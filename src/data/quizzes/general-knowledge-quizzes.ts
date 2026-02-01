import { QuizQuestion } from '@/types/quiz.types';

export const generalPhaseQuizzes: QuizQuestion[] = [
    {
        id: 'G1',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Six Sigma methodology was originally developed by:",
        options: {
            A: "Toyota for lean manufacturing",
            B: "Motorola in 1986 for defect reduction",
            C: "General Electric under Jack Welch",
            D: "American Society for Quality (ASQ)"
        },
        correctAnswer: 'B',
        explanation: "Founded by Bill Smith & Mikel Harry at Motorola in mid-1980s",
        topic: 'General Knowledge'
    },
    {
        id: 'G2',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The term \"6-Sigma\" refers to:",
        options: {
            A: "Six standard deviations from the mean = 99.99966% accuracy",
            B: "Six different quality methodologies",
            C: "Six phases of process improvement",
            D: "Six metrics for performance measurement"
        },
        correctAnswer: 'A',
        explanation: "Cpk 1.67 with 1.5σ shift = 3.4 DPMO",
        topic: 'General Knowledge'
    },
    {
        id: 'G3',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "W. Edwards Deming is best known for:",
        options: {
            A: "Founding Motorola",
            B: "Creating the PDCA cycle (Plan-Do-Check-Act)",
            C: "Developing control charts",
            D: "Inventing the Pareto principle"
        },
        correctAnswer: 'B',
        explanation: "Core framework for continuous improvement; Japanese quality revolution",
        topic: 'General Knowledge'
    },
    {
        id: 'G4',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Walter Shewhart's major contribution to quality was:",
        options: {
            A: "Statistical Process Control (SPC) and control charts",
            B: "The concept of Six Sigma",
            C: "Lean manufacturing principles",
            D: "Total Quality Management"
        },
        correctAnswer: 'A',
        explanation: "Foundations of modern quality management; Bell Labs",
        topic: 'General Knowledge'
    },
    {
        id: 'G5',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Joseph Juran is credited with the concept:",
        options: {
            A: "Standard deviation",
            B: "Pareto Analysis (80:20 rule)",
            C: "The \"Vital Few\" and \"Trivial Many\"",
            D: "Process mapping"
        },
        correctAnswer: 'C',
        explanation: "80% of problems come from 20% of causes; prioritization",
        topic: 'General Knowledge'
    },
    {
        id: 'G6',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "DPMO (Defects Per Million Opportunities) definition:",
        options: {
            A: "Total defects / total units manufactured",
            B: "(Total defects / total opportunities) × 1,000,000",
            C: "Defects found in the first million units",
            D: "Defect rate expressed as percentage"
        },
        correctAnswer: 'B',
        explanation: "Standardized metric for cross-industry comparison",
        topic: 'General Knowledge'
    },
    {
        id: 'G7',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "At 6-Sigma quality level, DPMO expected is:",
        options: {
            A: "66,800 DPMO",
            B: "6,210 DPMO",
            C: "3.4 DPMO",
            D: "0.34 DPMO"
        },
        correctAnswer: 'C',
        explanation: "Definition: 99.99966% accuracy with 1.5σ process shift",
        topic: 'General Knowledge'
    },
    {
        id: 'G8',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Lean Six Sigma combines:",
        options: {
            A: "Quality and cost management",
            B: "Lean (waste elimination) + Six Sigma (defect reduction)",
            C: "DMAIC and DMADV",
            D: "Statistical analysis and process mapping"
        },
        correctAnswer: 'B',
        explanation: "Best results require both philosophies",
        topic: 'General Knowledge'
    },
    {
        id: 'G9',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The IASSC (International Association for Six Sigma Certification) certifies:",
        options: {
            A: "Only manufacturing professionals",
            B: "Green Belts, Black Belts, Master Black Belts, Yellow Belts",
            C: "All project managers",
            D: "Quality auditors only"
        },
        correctAnswer: 'B',
        explanation: "Multiple levels of Six Sigma expertise and certification",
        topic: 'General Knowledge'
    },
    {
        id: 'G10',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "ASQ (American Society for Quality) certification differs from IASSC in:",
        options: {
            A: "No difference—identical exams",
            B: "ASQ is older; focuses on broader quality management",
            C: "ASQ only certifies Black Belts",
            D: "IASSC certification is globally recognized; ASQ is not"
        },
        correctAnswer: 'B',
        explanation: "Both are respected; different emphasis areas; ASQ founded 1946",
        topic: 'General Knowledge'
    },
    {
        id: 'G11',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The primary goal of Six Sigma is:",
        options: {
            A: "Achieving zero defects immediately",
            B: "Reducing process variation and eliminating defects",
            C: "Replacing all manual processes",
            D: "Cost reduction above quality improvement"
        },
        correctAnswer: 'B',
        explanation: "Variation reduction = fewer errors and lower costs",
        topic: 'General Knowledge'
    },
    {
        id: 'G12',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Six Sigma roles include all EXCEPT:",
        options: {
            A: "Champion",
            B: "Black Belt",
            C: "Compliance Officer",
            D: "Green Belt"
        },
        correctAnswer: 'C',
        explanation: "Roles: Champion, Black Belt, Green Belt, Yellow Belt, Process Owner",
        topic: 'General Knowledge'
    },
    {
        id: 'G13',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Black Belt in Six Sigma typically:",
        options: {
            A: "Leads individual Green Belt projects",
            B: "Leads complex projects, coaches Green Belts, trains teams",
            C: "Only trains other belts",
            D: "Manages company operations"
        },
        correctAnswer: 'B',
        explanation: "Leadership, mentoring, and advanced statistical expertise; full-time",
        topic: 'General Knowledge'
    },
    {
        id: 'G14',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Green Belt in Six Sigma typically:",
        options: {
            A: "Leads small to medium improvement projects full-time",
            B: "Part of their normal job with 30-40% time allocation",
            C: "Only supports Black Belts",
            D: "Works full-time on projects only"
        },
        correctAnswer: 'B',
        explanation: "Balanced: project work + regular responsibilities",
        topic: 'General Knowledge'
    },
    {
        id: 'G15',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Champion's role in Six Sigma is:",
        options: {
            A: "Perform statistical analysis",
            B: "Remove barriers, secure resources, align to business strategy",
            C: "Lead the technical aspects of projects",
            D: "Train all project team members"
        },
        correctAnswer: 'B',
        explanation: "Executive-level support and project governance",
        topic: 'General Knowledge'
    },
    {
        id: 'G16',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Yellow Belt certification includes:",
        options: {
            A: "Full DMAIC methodology training",
            B: "Two-week intensive program",
            C: "Foundation training in Lean & Six Sigma basics",
            D: "Advanced statistics and DOE"
        },
        correctAnswer: 'C',
        explanation: "Entry-level awareness and participation training; 1-2 days",
        topic: 'General Knowledge'
    },
    {
        id: 'G17',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "DMAIC is used when:",
        options: {
            A: "Designing new processes",
            B: "Improving existing processes",
            C: "Creating new products",
            D: "Reorganizing departments"
        },
        correctAnswer: 'B',
        explanation: "Define-Measure-Analyze-Improve-Control for improvement",
        topic: 'General Knowledge'
    },
    {
        id: 'G18',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "DMADV is used when:",
        options: {
            A: "Improving existing processes",
            B: "Launching continuous improvement",
            C: "Designing new processes or products",
            D: "Reducing operational costs"
        },
        correctAnswer: 'C',
        explanation: "Define-Measure-Analyze-Design-Verify for design; DFSS",
        topic: 'General Knowledge'
    },
    {
        id: 'G19',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Continuous improvement culture emphasizes:",
        options: {
            A: "Annual major change initiatives",
            B: "Small, ongoing improvements from all employees",
            C: "Only top-down improvement efforts",
            D: "One-time Six Sigma projects only"
        },
        correctAnswer: 'B',
        explanation: "Kaizen: continuous flow of incremental improvements",
        topic: 'General Knowledge'
    },
    {
        id: 'G20',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"voice of the customer\" means:",
        options: {
            A: "Customer complaints",
            B: "Customers' stated and implied needs, expectations, preferences",
            C: "Annual customer surveys",
            D: "Customer satisfaction scores"
        },
        correctAnswer: 'B',
        explanation: "Captures what matters to customers; VOC",
        topic: 'General Knowledge'
    },
    {
        id: 'G21',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Tuckman's stages of team development include all EXCEPT:",
        options: {
            A: "Forming",
            B: "Storming",
            C: "Norming",
            D: "Perfecting"
        },
        correctAnswer: 'D',
        explanation: "Stages: Forming, Storming, Norming, Performing",
        topic: 'General Knowledge'
    },
    {
        id: 'G22',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Forming\" stage of team development occurs when:",
        options: {
            A: "Team members work together smoothly",
            B: "Team members first come together and orientation occurs",
            C: "Conflict emerges among members",
            D: "Team reaches peak performance"
        },
        correctAnswer: 'B',
        explanation: "Initial introduction and role clarification; dependency",
        topic: 'General Knowledge'
    },
    {
        id: 'G23',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Storming\" stage of team development is characterized by:",
        options: {
            A: "High productivity",
            B: "Conflict, disagreement, and unclear roles",
            C: "Agreement on goals and procedures",
            D: "Team dissolution"
        },
        correctAnswer: 'B',
        explanation: "Natural conflict; requires skilled facilitation; power struggles",
        topic: 'General Knowledge'
    },
    {
        id: 'G24',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Norming\" stage occurs when:",
        options: {
            A: "Team just formed",
            B: "Major conflicts emerge",
            C: "Team establishes rules, roles, goals, and cohesion",
            D: "Team performance declines"
        },
        correctAnswer: 'C',
        explanation: "Functioning effectively with shared standards; collaboration",
        topic: 'General Knowledge'
    },
    {
        id: 'G25',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "\"Performing\" stage is when:",
        options: {
            A: "Team identifies initial goals",
            B: "Team members argue about direction",
            C: "Team functions at high effectiveness with minimal oversight",
            D: "Team members leave the project"
        },
        correctAnswer: 'C',
        explanation: "Autonomous, productive, focused on results",
        topic: 'General Knowledge'
    },
    {
        id: 'G26',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Change management in Six Sigma emphasizes:",
        options: {
            A: "Forcing new processes without input",
            B: "Communication, training, buy-in, and resistance management",
            C: "Only top-down directives",
            D: "No formal change process needed"
        },
        correctAnswer: 'B',
        explanation: "People management is critical to success",
        topic: 'General Knowledge'
    },
    {
        id: 'G27',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Resistance to change typically stems from:",
        options: {
            A: "Lack of good reasons",
            B: "Fear of unknown, loss of control, comfort with status quo",
            C: "Change always being wrong",
            D: "Employees being difficult"
        },
        correctAnswer: 'B',
        explanation: "Understanding resistance helps address root causes",
        topic: 'General Knowledge'
    },
    {
        id: 'G28',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The most effective way to overcome resistance is:",
        options: {
            A: "Force compliance",
            B: "Ignore concerns",
            C: "Involve stakeholders early and communicate benefits",
            D: "Implement quickly before objections arise"
        },
        correctAnswer: 'C',
        explanation: "Participation builds ownership and commitment",
        topic: 'General Knowledge'
    },
    {
        id: 'G29',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Stakeholder analysis identifies:",
        options: {
            A: "Only customers",
            B: "People, interests, influence, and impact on project",
            C: "Project obstacles only",
            D: "Competitors only"
        },
        correctAnswer: 'B',
        explanation: "Comprehensive understanding of interested parties",
        topic: 'General Knowledge'
    },
    {
        id: 'G30',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Process Owner is responsible for:",
        options: {
            A: "Only implementing solutions",
            B: "Owning accountability for process performance long-term",
            C: "Statistical analysis",
            D: "Project leadership"
        },
        correctAnswer: 'B',
        explanation: "Critical for sustainability post-project",
        topic: 'General Knowledge'
    },
    {
        id: 'G31',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "PDCA cycle stands for:",
        options: {
            A: "Process, Design, Control, Audit",
            B: "Plan, Do, Check, Act",
            C: "Predict, Define, Certify, Apply",
            D: "Project, Data, Cause, Analysis"
        },
        correctAnswer: 'B',
        explanation: "Continuous improvement framework; Shewhart cycle",
        topic: 'General Knowledge'
    },
    {
        id: 'G32',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Plan\" phase in PDCA includes:",
        options: {
            A: "Implementing changes",
            B: "Collecting data and checking results",
            C: "Setting objectives, analyzing root causes, designing solutions",
            D: "Standardizing improvements"
        },
        correctAnswer: 'C',
        explanation: "Prepare for the \"Do\" phase",
        topic: 'General Knowledge'
    },
    {
        id: 'G33',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Do\" phase in PDCA involves:",
        options: {
            A: "Testing solutions on small scale",
            B: "Full-scale implementation",
            C: "Analyzing results",
            D: "Planning next cycle"
        },
        correctAnswer: 'A',
        explanation: "Pilot or trial implementation; controlled experiment",
        topic: 'General Knowledge'
    },
    {
        id: 'G34',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Check\" phase in PDCA includes:",
        options: {
            A: "Monitoring and measuring results",
            B: "Making changes",
            C: "Planning future improvements",
            D: "Scaling to entire organization"
        },
        correctAnswer: 'A',
        explanation: "Did we get expected results?",
        topic: 'General Knowledge'
    },
    {
        id: 'G35',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Act\" phase in PDCA includes:",
        options: {
            A: "Making improvements immediately",
            B: "Standardizing successful changes and planning next cycle",
            C: "Only celebrating success",
            D: "Documenting failures"
        },
        correctAnswer: 'B',
        explanation: "Sustain gains and repeat cycle",
        topic: 'General Knowledge'
    },
    {
        id: 'G36',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Kaizen in Japanese means:",
        options: {
            A: "Cost reduction",
            B: "Team work",
            C: "Continuous improvement",
            D: "Waste elimination"
        },
        correctAnswer: 'C',
        explanation: "Incremental, ongoing improvement philosophy",
        topic: 'General Knowledge'
    },
    {
        id: 'G37',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The concept of \"respect for people\" in Lean/Six Sigma emphasizes:",
        options: {
            A: "Formal hierarchies",
            B: "Employee involvement, empowerment, and continuous learning",
            C: "Management knows best",
            D: "Following orders without question"
        },
        correctAnswer: 'B',
        explanation: "Engagement and development of workforce",
        topic: 'General Knowledge'
    },
    {
        id: 'G38',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "\"Gemba\" refers to:",
        options: {
            A: "Quality department",
            B: "The actual place where work is performed",
            C: "Management office",
            D: "Meeting room"
        },
        correctAnswer: 'B',
        explanation: "Japanese for \"actual place\"—go see reality; gemba walk",
        topic: 'General Knowledge'
    },
    {
        id: 'G39',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Data-driven decision making means:",
        options: {
            A: "Ignoring intuition",
            B: "Using facts and analysis rather than assumptions",
            C: "Collecting data for its own sake",
            D: "Only using financial metrics"
        },
        correctAnswer: 'B',
        explanation: "Evidence-based approach to problem solving",
        topic: 'General Knowledge'
    },
    {
        id: 'G40',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Process thinking involves understanding:",
        options: {
            A: "Only individual tasks",
            B: "How inputs transform to outputs and interconnected relationships",
            C: "Department boundaries",
            D: "Historical practices"
        },
        correctAnswer: 'B',
        explanation: "Systems perspective; interdependencies",
        topic: 'General Knowledge'
    },
    {
        id: 'G41',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A process metric measures:",
        options: {
            A: "Customer satisfaction only",
            B: "Process performance: cost, time, quality, efficiency",
            C: "Employee satisfaction",
            D: "Competitor performance"
        },
        correctAnswer: 'B',
        explanation: "Indicators of how well process functions",
        topic: 'General Knowledge'
    },
    {
        id: 'G42',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Alignment to business strategy means:",
        options: {
            A: "All projects help achieve organizational goals",
            B: "Any improvement project is worthwhile",
            C: "Business strategy is unrelated to operations",
            D: "Projects are purely technical"
        },
        correctAnswer: 'A',
        explanation: "Strategic fit and ROI focus; portfolio management",
        topic: 'General Knowledge'
    },
    {
        id: 'G43',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Scope creep in projects occurs when:",
        options: {
            A: "Project completes on time",
            B: "Project requirements expand uncontrollably",
            C: "Team members leave",
            D: "Budget decreases"
        },
        correctAnswer: 'B',
        explanation: "Major project risk; requires active management",
        topic: 'General Knowledge'
    },
    {
        id: 'G44',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Project charter documents:",
        options: {
            A: "Only the problem",
            B: "Problem, objectives, scope, resources, timeline, stakeholders",
            C: "Solutions only",
            D: "Final results"
        },
        correctAnswer: 'B',
        explanation: "Foundation for project governance",
        topic: 'General Knowledge'
    },
    {
        id: 'G45',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The business case for a Six Sigma project should include:",
        options: {
            A: "Problem statement and project goal only",
            B: "Financial impact, ROI, timeline, resource requirements",
            C: "Manager's opinion",
            D: "No financial analysis needed"
        },
        correctAnswer: 'B',
        explanation: "Justifies project investment",
        topic: 'General Knowledge'
    },
    {
        id: 'G46',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A project tollgate is:",
        options: {
            A: "Checkpoint to assess progress and decide to proceed",
            B: "Physical entrance to facility",
            C: "Customer satisfaction review",
            D: "Annual budget review"
        },
        correctAnswer: 'A',
        explanation: "Go/no-go decision point; phase gate",
        topic: 'General Knowledge'
    },
    {
        id: 'G47',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Project benefits realization means:",
        options: {
            A: "Project is completed",
            B: "Actual financial and operational benefits achieved and sustained",
            C: "Customer satisfaction increased",
            D: "New tools implemented"
        },
        correctAnswer: 'B',
        explanation: "True success = achieved objectives sustained",
        topic: 'General Knowledge'
    },
    {
        id: 'G48',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Lessons learned documentation:",
        options: {
            A: "Records failures only",
            B: "What worked, what didn't, improvements for next project",
            C: "Employee performance reviews",
            D: "Benchmarking data only"
        },
        correctAnswer: 'B',
        explanation: "Knowledge management and organizational learning",
        topic: 'General Knowledge'
    },
    {
        id: 'G49',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Governance in Six Sigma organizations includes:",
        options: {
            A: "Rigid command structure",
            B: "Portfolio management, resource allocation, project prioritization",
            C: "Compliance only",
            D: "No formal structure needed"
        },
        correctAnswer: 'B',
        explanation: "Strategic management of improvement initiatives",
        topic: 'General Knowledge'
    },
    {
        id: 'G50',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Certification as Green Belt requires:",
        options: {
            A: "Completion of training course only",
            B: "Training + passing exam + project completion (varies by body)",
            C: "Any improvement experience",
            D: "Only for manufacturing"
        },
        correctAnswer: 'B',
        explanation: "Demonstrated competency through multiple criteria",
        topic: 'General Knowledge'
    }
];
