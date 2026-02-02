import { QuizQuestion } from '@/types/quiz.types';

export const generalPhaseQuizzes: QuizQuestion[] = [
    {
        id: 'G1',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Six Sigma methodology was originally developed by:",
        optionsBank: [
            { id: 'G1_O1', text: 'Toyota for lean manufacturing', correct: false },
            { id: 'G1_O2', text: 'Motorola in 1986 for defect reduction', correct: true },
            { id: 'G1_O3', text: 'General Electric under Jack Welch', correct: false },
            { id: 'G1_O4', text: 'American Society for Quality (ASQ)', correct: false },
            { id: 'G1_O5', text: 'Honeywell in the 1990s', correct: false },
            { id: 'G1_O6', text: 'Mikel Harry independently at a consulting firm', correct: false },
            { id: 'G1_O7', text: 'Bill Smith and Mikel Harry working together', correct: false }
        ],
        explanation: "Founded by Bill Smith & Mikel Harry at Motorola in mid-1980s to address quality defects; G1_O7 is close but G1_O2 is precise",
        topic: 'General Knowledge'
    },
    {
        id: 'G2',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The term \"6-Sigma\" refers to:",
        optionsBank: [
            { id: 'G2_O1', text: 'Six standard deviations from the mean = 99.99966% accuracy', correct: true },
            { id: 'G2_O2', text: 'Six different quality methodologies', correct: false },
            { id: 'G2_O3', text: 'Six phases of process improvement', correct: false },
            { id: 'G2_O4', text: 'Six metrics for performance measurement', correct: false },
            { id: 'G2_O5', text: 'Six weeks of intensive training for belts', correct: false },
            { id: 'G2_O6', text: 'Six certified levels in the Six Sigma hierarchy', correct: false },
            { id: 'G2_O7', text: 'Six times the standard deviation', correct: false }
        ],
        explanation: "Cpk 1.67 with 1.5σ shift = 3.4 DPMO; statistical measure of process performance; note: 6σ = 6 times sigma",
        topic: 'General Knowledge'
    },
    {
        id: 'G3',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "W. Edwards Deming is best known for:",
        optionsBank: [
            { id: 'G3_O1', text: 'Founding Motorola', correct: false },
            { id: 'G3_O2', text: 'Creating the PDCA cycle (Plan-Do-Check-Act)', correct: true },
            { id: 'G3_O3', text: 'Developing control charts', correct: false },
            { id: 'G3_O4', text: 'Inventing the Pareto principle', correct: false },
            { id: 'G3_O5', text: 'Establishing the first quality circle', correct: false },
            { id: 'G3_O6', text: 'Developing the 14 points of quality', correct: false },
            { id: 'G3_O7', text: 'Inventing the fishbone diagram', correct: false }
        ],
        explanation: "Core framework for continuous improvement; Japanese quality revolution; Shewhart cycle foundation; Deming wrote 14 Points but PDCA is his flagship",
        topic: 'General Knowledge'
    },
    {
        id: 'G4',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Walter Shewhart's major contribution to quality was:",
        optionsBank: [
            { id: 'G4_O1', text: 'Statistical Process Control (SPC) and control charts', correct: true },
            { id: 'G4_O2', text: 'The concept of Six Sigma', correct: false },
            { id: 'G4_O3', text: 'Lean manufacturing principles', correct: false },
            { id: 'G4_O4', text: 'Total Quality Management', correct: false },
            { id: 'G4_O5', text: 'Quality circles development', correct: false },
            { id: 'G4_O6', text: 'The Pareto chart visualization', correct: false },
            { id: 'G4_O7', text: 'Process capability index formulas', correct: false }
        ],
        explanation: "Foundations of modern quality management; Bell Labs; invention of control charts; founder of statistical process control",
        topic: 'General Knowledge'
    },
    {
        id: 'G5',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Joseph Juran is credited with the concept:",
        optionsBank: [
            { id: 'G5_O1', text: 'Standard deviation', correct: false },
            { id: 'G5_O2', text: 'Pareto Analysis (80:20 rule)', correct: false },
            { id: 'G5_O3', text: 'The \"Vital Few\" and \"Trivial Many\"', correct: true },
            { id: 'G5_O4', text: 'Process mapping', correct: false },
            { id: 'G5_O5', text: 'Design for Six Sigma (DFSS)', correct: false },
            { id: 'G5_O6', text: 'Quality Function Deployment', correct: false },
            { id: 'G5_O7', text: 'Poka-Yoke mistake-proofing', correct: false }
        ],
        explanation: "80% of problems come from 20% of causes; prioritization tool; Juran Trilogy; Vital Few = Pareto principle application",
        topic: 'General Knowledge'
    },
    {
        id: 'G6',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "DPMO (Defects Per Million Opportunities) definition:",
        optionsBank: [
            { id: 'G6_O1', text: 'Total defects / total units manufactured', correct: false },
            { id: 'G6_O2', text: '(Total defects / total opportunities) × 1,000,000', correct: true },
            { id: 'G6_O3', text: 'Defects found in the first million units', correct: false },
            { id: 'G6_O4', text: 'Defect rate expressed as percentage', correct: false },
            { id: 'G6_O5', text: 'Defects measured over a one-month period', correct: false },
            { id: 'G6_O6', text: 'Defects per million dollars of revenue', correct: false },
            { id: 'G6_O7', text: 'Defect rate normalized by complexity', correct: false }
        ],
        explanation: "Standardized metric for cross-industry comparison; normalizes by opportunities; allows benchmarking",
        topic: 'General Knowledge'
    },
    {
        id: 'G7',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "At 6-Sigma quality level, DPMO expected is:",
        optionsBank: [
            { id: 'G7_O1', text: '66,800 DPMO', correct: false },
            { id: 'G7_O2', text: '6,210 DPMO', correct: false },
            { id: 'G7_O3', text: '3.4 DPMO', correct: true },
            { id: 'G7_O4', text: '0.34 DPMO', correct: false },
            { id: 'G7_O5', text: '34 DPMO', correct: false },
            { id: 'G7_O6', text: '233 DPMO', correct: false },
            { id: 'G7_O7', text: '1,350 DPMO', correct: false }
        ],
        explanation: "Definition: 99.99966% accuracy with 1.5σ process shift accounting for long-term drift; 66,800 is 4σ; 233 is 5σ",
        topic: 'General Knowledge'
    },
    {
        id: 'G8',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Lean Six Sigma combines:",
        optionsBank: [
            { id: 'G8_O1', text: 'Quality and cost management', correct: false },
            { id: 'G8_O2', text: 'Lean (waste elimination) + Six Sigma (defect reduction)', correct: true },
            { id: 'G8_O3', text: 'DMAIC and DMADV', correct: false },
            { id: 'G8_O4', text: 'Statistical analysis and process mapping', correct: false },
            { id: 'G8_O5', text: 'Yellow Belt and Green Belt training', correct: false },
            { id: 'G8_O6', text: 'Motorola and Toyota methods', correct: false },
            { id: 'G8_O7', text: 'Kaizen and Poka-Yoke principles only', correct: false }
        ],
        explanation: "Best results require both philosophies; eliminates waste and variation simultaneously; synergistic approach",
        topic: 'General Knowledge'
    },
    {
        id: 'G9',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The IASSC (International Association for Six Sigma Certification) certifies:",
        optionsBank: [
            { id: 'G9_O1', text: 'Only manufacturing professionals', correct: false },
            { id: 'G9_O2', text: 'Green Belts, Black Belts, Master Black Belts, Yellow Belts', correct: true },
            { id: 'G9_O3', text: 'All project managers', correct: false },
            { id: 'G9_O4', text: 'Quality auditors only', correct: false },
            { id: 'G9_O5', text: 'ASQ-approved consultants', correct: false },
            { id: 'G9_O6', text: 'Only Black Belts and Master Black Belts', correct: false },
            { id: 'G9_O7', text: 'White Belts through Master Black Belts', correct: false }
        ],
        explanation: "Multiple levels of Six Sigma expertise and certification; globally recognized; includes Yellow, Green, Black, Master Black",
        topic: 'General Knowledge'
    },
    {
        id: 'G10',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "ASQ (American Society for Quality) certification differs from IASSC in:",
        optionsBank: [
            { id: 'G10_O1', text: 'No difference—identical exams', correct: false },
            { id: 'G10_O2', text: 'ASQ is older; focuses on broader quality management', correct: true },
            { id: 'G10_O3', text: 'ASQ only certifies Black Belts', correct: false },
            { id: 'G10_O4', text: 'IASSC certification is globally recognized; ASQ is not', correct: false },
            { id: 'G10_O5', text: 'ASQ requires more years of experience', correct: false },
            { id: 'G10_O6', text: 'ASQ is Europe-focused; IASSC is global', correct: false },
            { id: 'G10_O7', text: 'IASSC focuses only on manufacturing', correct: false }
        ],
        explanation: "Both are respected; different emphasis areas; ASQ founded 1946; broader scope; IASSC founded 2008",
        topic: 'General Knowledge'
    },
    {
        id: 'G11',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The primary goal of Six Sigma is:",
        optionsBank: [
            { id: 'G11_O1', text: 'Achieving zero defects immediately', correct: false },
            { id: 'G11_O2', text: 'Reducing process variation and eliminating defects', correct: true },
            { id: 'G11_O3', text: 'Replacing all manual processes', correct: false },
            { id: 'G11_O4', text: 'Cost reduction above quality improvement', correct: false },
            { id: 'G11_O5', text: 'Increasing production volume', correct: false },
            { id: 'G11_O6', text: 'Achieving 100% customer satisfaction', correct: false },
            { id: 'G11_O7', text: 'Automating all operations', correct: false }
        ],
        explanation: "Variation reduction = fewer errors and lower costs; continuous improvement; balanced approach",
        topic: 'General Knowledge'
    },
    {
        id: 'G12',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Six Sigma roles include all EXCEPT:",
        optionsBank: [
            { id: 'G12_O1', text: 'Champion', correct: false },
            { id: 'G12_O2', text: 'Black Belt', correct: false },
            { id: 'G12_O3', text: 'Compliance Officer', correct: true },
            { id: 'G12_O4', text: 'Green Belt', correct: false },
            { id: 'G12_O5', text: 'Process Owner', correct: false },
            { id: 'G12_O6', text: 'Yellow Belt', correct: false },
            { id: 'G12_O7', text: 'Master Black Belt', correct: false }
        ],
        explanation: "Roles: Champion, Black Belt, Green Belt, Yellow Belt, Master Black Belt, Process Owner; Compliance Officer NOT a formal Six Sigma role",
        topic: 'General Knowledge'
    },
    {
        id: 'G13',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Black Belt in Six Sigma typically:",
        optionsBank: [
            { id: 'G13_O1', text: 'Leads individual Green Belt projects', correct: false },
            { id: 'G13_O2', text: 'Leads complex projects, coaches Green Belts, trains teams', correct: true },
            { id: 'G13_O3', text: 'Only trains other belts', correct: false },
            { id: 'G13_O4', text: 'Manages company operations', correct: false },
            { id: 'G13_O5', text: 'Conducts quality audits part-time', correct: false },
            { id: 'G13_O6', text: 'Works 20% time on projects', correct: false },
            { id: 'G13_O7', text: 'Supports Green Belts as team member', correct: false }
        ],
        explanation: "Leadership, mentoring, and advanced statistical expertise; full-time dedication required; 6-8 projects per year",
        topic: 'General Knowledge'
    },
    {
        id: 'G14',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Green Belt in Six Sigma typically:",
        optionsBank: [
            { id: 'G14_O1', text: 'Leads small to medium improvement projects full-time', correct: false },
            { id: 'G14_O2', text: 'Part of their normal job with 30-40% time allocation', correct: true },
            { id: 'G14_O3', text: 'Only supports Black Belts', correct: false },
            { id: 'G14_O4', text: 'Works full-time on projects only', correct: false },
            { id: 'G14_O5', text: 'Trains Yellow Belts exclusively', correct: false },
            { id: 'G14_O6', text: 'Works 60% time on operations', correct: false },
            { id: 'G14_O7', text: 'Leads 10+ projects annually', correct: false }
        ],
        explanation: "Balanced role: project work + regular responsibilities; 2-3 projects per year typical; blended resource",
        topic: 'General Knowledge'
    },
    {
        id: 'G15',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Champion's role in Six Sigma is:",
        optionsBank: [
            { id: 'G15_O1', text: 'Perform statistical analysis', correct: false },
            { id: 'G15_O2', text: 'Remove barriers, secure resources, align to business strategy', correct: true },
            { id: 'G15_O3', text: 'Lead the technical aspects of projects', correct: false },
            { id: 'G15_O4', text: 'Train all project team members', correct: false },
            { id: 'G15_O5', text: 'Conduct daily standups with teams', correct: false },
            { id: 'G15_O6', text: 'Execute statistical hypothesis tests', correct: false },
            { id: 'G15_O7', text: 'Document project lessons learned', correct: false }
        ],
        explanation: "Executive-level support and project governance; portfolio management; remove obstacles; strategic alignment",
        topic: 'General Knowledge'
    },
    {
        id: 'G16',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Yellow Belt certification includes:",
        optionsBank: [
            { id: 'G16_O1', text: 'Full DMAIC methodology training', correct: false },
            { id: 'G16_O2', text: 'Two-week intensive program', correct: false },
            { id: 'G16_O3', text: 'Foundation training in Lean & Six Sigma basics', correct: true },
            { id: 'G16_O4', text: 'Advanced statistics and DOE', correct: false },
            { id: 'G16_O5', text: 'Project leadership requirements', correct: false },
            { id: 'G16_O6', text: 'Belt exam and project completion', correct: false },
            { id: 'G16_O7', text: 'Six Sigma methodology mastery', correct: false }
        ],
        explanation: "Entry-level awareness and participation training; 1-2 days; foundational concepts only; preparation for higher levels",
        topic: 'General Knowledge'
    },
    {
        id: 'G17',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "DMAIC is used when:",
        optionsBank: [
            { id: 'G17_O1', text: 'Designing new processes', correct: false },
            { id: 'G17_O2', text: 'Improving existing processes', correct: true },
            { id: 'G17_O3', text: 'Creating new products', correct: false },
            { id: 'G17_O4', text: 'Reorganizing departments', correct: false },
            { id: 'G17_O5', text: 'Compliance auditing', correct: false },
            { id: 'G17_O6', text: 'Training workforce', correct: false },
            { id: 'G17_O7', text: 'Planning budgets', correct: false }
        ],
        explanation: "Define-Measure-Analyze-Improve-Control for existing process improvement initiatives; fixes broken processes",
        topic: 'General Knowledge'
    },
    {
        id: 'G18',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "DMADV is used when:",
        optionsBank: [
            { id: 'G18_O1', text: 'Improving existing processes', correct: false },
            { id: 'G18_O2', text: 'Launching continuous improvement', correct: false },
            { id: 'G18_O3', text: 'Designing new processes or products', correct: true },
            { id: 'G18_O4', text: 'Reducing operational costs', correct: false },
            { id: 'G18_O5', text: 'Addressing customer complaints', correct: false },
            { id: 'G18_O6', text: 'Fixing underperforming metrics', correct: false },
            { id: 'G18_O7', text: 'Auditing quality procedures', correct: false }
        ],
        explanation: "Define-Measure-Analyze-Design-Verify for design; also called Design for Six Sigma (DFSS); builds new capabilities",
        topic: 'General Knowledge'
    },
    {
        id: 'G19',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Continuous improvement culture emphasizes:",
        optionsBank: [
            { id: 'G19_O1', text: 'Annual major change initiatives', correct: false },
            { id: 'G19_O2', text: 'Small, ongoing improvements from all employees', correct: true },
            { id: 'G19_O3', text: 'Only top-down improvement efforts', correct: false },
            { id: 'G19_O4', text: 'One-time Six Sigma projects only', correct: false },
            { id: 'G19_O5', text: 'External consultant-led changes', correct: false },
            { id: 'G19_O6', text: 'Revolutionary transformation only', correct: false },
            { id: 'G19_O7', text: 'Quarterly review cycles', correct: false }
        ],
        explanation: "Kaizen philosophy: continuous flow of incremental improvements from frontline workers; daily engagement",
        topic: 'General Knowledge'
    },
    {
        id: 'G20',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"voice of the customer\" means:",
        optionsBank: [
            { id: 'G20_O1', text: 'Customer complaints', correct: false },
            { id: 'G20_O2', text: "Customers' stated and implied needs, expectations, preferences", correct: true },
            { id: 'G20_O3', text: 'Annual customer surveys', correct: false },
            { id: 'G20_O4', text: 'Customer satisfaction scores', correct: false },
            { id: 'G20_O5', text: 'Customer return rates', correct: false },
            { id: 'G20_O6', text: 'Focus group feedback only', correct: false },
            { id: 'G20_O7', text: 'Customer service call recordings', correct: false }
        ],
        explanation: "Captures what matters to customers; VOC includes unspoken needs and expectations; foundational to Define phase",
        topic: 'General Knowledge'
    },
    {
        id: 'G21',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Tuckman's stages of team development include all EXCEPT:",
        optionsBank: [
            { id: 'G21_O1', text: 'Forming', correct: false },
            { id: 'G21_O2', text: 'Storming', correct: false },
            { id: 'G21_O3', text: 'Norming', correct: false },
            { id: 'G21_O4', text: 'Perfecting', correct: true },
            { id: 'G21_O5', text: 'Performing', correct: false },
            { id: 'G21_O6', text: 'Adjourning', correct: false },
            { id: 'G21_O7', text: 'Dissolving', correct: false }
        ],
        explanation: "Stages: Forming, Storming, Norming, Performing, Adjourning; no 'Perfecting' stage; Adjourning is later addition",
        topic: 'General Knowledge'
    },
    {
        id: 'G22',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Forming\" stage of team development occurs when:",
        optionsBank: [
            { id: 'G22_O1', text: 'Team members work together smoothly', correct: false },
            { id: 'G22_O2', text: 'Team members first come together and orientation occurs', correct: true },
            { id: 'G22_O3', text: 'Conflict emerges among members', correct: false },
            { id: 'G22_O4', text: 'Team reaches peak performance', correct: false },
            { id: 'G22_O5', text: 'Team establishes control mechanisms', correct: false },
            { id: 'G22_O6', text: 'Team members question authority', correct: false },
            { id: 'G22_O7', text: 'Productivity reaches maximum', correct: false }
        ],
        explanation: "Initial introduction and role clarification; polite and cautious; dependency on leader; relationship building",
        topic: 'General Knowledge'
    },
    {
        id: 'G23',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Storming\" stage of team development is characterized by:",
        optionsBank: [
            { id: 'G23_O1', text: 'High productivity', correct: false },
            { id: 'G23_O2', text: 'Conflict, disagreement, and unclear roles', correct: true },
            { id: 'G23_O3', text: 'Agreement on goals and procedures', correct: false },
            { id: 'G23_O4', text: 'Team dissolution', correct: false },
            { id: 'G23_O5', text: 'Low engagement from members', correct: false },
            { id: 'G23_O6', text: 'High morale and unity', correct: false },
            { id: 'G23_O7', text: 'Clear decision-making processes', correct: false }
        ],
        explanation: "Natural conflict; requires skilled facilitation; power struggles and sub-groups may form; necessary growth phase",
        topic: 'General Knowledge'
    },
    {
        id: 'G24',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Norming\" stage occurs when:",
        optionsBank: [
            { id: 'G24_O1', text: 'Team just formed', correct: false },
            { id: 'G24_O2', text: 'Major conflicts emerge', correct: false },
            { id: 'G24_O3', text: 'Team establishes rules, roles, goals, and cohesion', correct: true },
            { id: 'G24_O4', text: 'Team performance declines', correct: false },
            { id: 'G24_O5', text: 'Team members resign', correct: false },
            { id: 'G24_O6', text: 'Disputes intensify significantly', correct: false },
            { id: 'G24_O7', text: 'Leadership changes hands', correct: false }
        ],
        explanation: "Functioning effectively with shared standards; strong collaboration; mutual support; team cohesion builds",
        topic: 'General Knowledge'
    },
    {
        id: 'G25',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "\"Performing\" stage is when:",
        optionsBank: [
            { id: 'G25_O1', text: 'Team identifies initial goals', correct: false },
            { id: 'G25_O2', text: 'Team members argue about direction', correct: false },
            { id: 'G25_O3', text: 'Team functions at high effectiveness with minimal oversight', correct: true },
            { id: 'G25_O4', text: 'Team members leave the project', correct: false },
            { id: 'G25_O5', text: 'Team needs frequent leader intervention', correct: false },
            { id: 'G25_O6', text: 'Team members struggle with roles', correct: false },
            { id: 'G25_O7', text: 'Team requires extensive monitoring', correct: false }
        ],
        explanation: "Autonomous, productive, focused on results; flexible and adaptive; interdependent; peak performance stage",
        topic: 'General Knowledge'
    },
    {
        id: 'G26',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Change management in Six Sigma emphasizes:",
        optionsBank: [
            { id: 'G26_O1', text: 'Forcing new processes without input', correct: false },
            { id: 'G26_O2', text: 'Communication, training, buy-in, and resistance management', correct: true },
            { id: 'G26_O3', text: 'Only top-down directives', correct: false },
            { id: 'G26_O4', text: 'No formal change process needed', correct: false },
            { id: 'G26_O5', text: 'Rapid implementation without planning', correct: false },
            { id: 'G26_O6', text: 'Avoiding stakeholder feedback', correct: false },
            { id: 'G26_O7', text: 'Implementation-first, explanation-later approach', correct: false }
        ],
        explanation: "People management is critical to success; cultural transformation required; holistic change strategy",
        topic: 'General Knowledge'
    },
    {
        id: 'G27',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Resistance to change typically stems from:",
        optionsBank: [
            { id: 'G27_O1', text: 'Lack of good reasons', correct: false },
            { id: 'G27_O2', text: 'Fear of unknown, loss of control, comfort with status quo', correct: true },
            { id: 'G27_O3', text: 'Change always being wrong', correct: false },
            { id: 'G27_O4', text: 'Employees being difficult', correct: false },
            { id: 'G27_O5', text: 'Management incompetence', correct: false },
            { id: 'G27_O6', text: 'Poor communication only', correct: false },
            { id: 'G27_O7', text: 'Lack of training materials', correct: false }
        ],
        explanation: "Understanding resistance helps address root causes; psychological and organizational factors; natural human response",
        topic: 'General Knowledge'
    },
    {
        id: 'G28',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The most effective way to overcome resistance is:",
        optionsBank: [
            { id: 'G28_O1', text: 'Force compliance', correct: false },
            { id: 'G28_O2', text: 'Ignore concerns', correct: false },
            { id: 'G28_O3', text: 'Involve stakeholders early and communicate benefits', correct: true },
            { id: 'G28_O4', text: 'Implement quickly before objections arise', correct: false },
            { id: 'G28_O5', text: 'Use punitive measures', correct: false },
            { id: 'G28_O6', text: 'Announce changes without discussion', correct: false },
            { id: 'G28_O7', text: 'Change process unilaterally', correct: false }
        ],
        explanation: "Participation builds ownership and commitment; transparency and dialogue essential; sustained adoption",
        topic: 'General Knowledge'
    },
    {
        id: 'G29',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Stakeholder analysis identifies:",
        optionsBank: [
            { id: 'G29_O1', text: 'Only customers', correct: false },
            { id: 'G29_O2', text: 'People, interests, influence, and impact on project', correct: true },
            { id: 'G29_O3', text: 'Project obstacles only', correct: false },
            { id: 'G29_O4', text: 'Competitors only', correct: false },
            { id: 'G29_O5', text: 'Financial constraints', correct: false },
            { id: 'G29_O6', text: 'External regulatory bodies only', correct: false },
            { id: 'G29_O7', text: 'Project budget holders', correct: false }
        ],
        explanation: "Comprehensive understanding of interested parties; their power and interest in project; Define phase critical",
        topic: 'General Knowledge'
    },
    {
        id: 'G30',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Process Owner is responsible for:",
        optionsBank: [
            { id: 'G30_O1', text: 'Only implementing solutions', correct: false },
            { id: 'G30_O2', text: 'Owning accountability for process performance long-term', correct: true },
            { id: 'G30_O3', text: 'Statistical analysis', correct: false },
            { id: 'G30_O4', text: 'Project leadership', correct: false },
            { id: 'G30_O5', text: 'Training all team members', correct: false },
            { id: 'G30_O6', text: 'Conducting monthly reviews only', correct: false },
            { id: 'G30_O7', text: 'Maintaining project documentation', correct: false }
        ],
        explanation: "Critical for sustainability post-project; maintains gains and prevents backsliding; Control phase ownership",
        topic: 'General Knowledge'
    },
    {
        id: 'G31',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "PDCA cycle stands for:",
        optionsBank: [
            { id: 'G31_O1', text: 'Process, Design, Control, Audit', correct: false },
            { id: 'G31_O2', text: 'Plan, Do, Check, Act', correct: true },
            { id: 'G31_O3', text: 'Predict, Define, Certify, Apply', correct: false },
            { id: 'G31_O4', text: 'Project, Data, Cause, Analysis', correct: false },
            { id: 'G31_O5', text: 'Process, Develop, Change, Audit', correct: false },
            { id: 'G31_O6', text: 'Perform, Design, Control, Assess', correct: false },
            { id: 'G31_O7', text: 'Plan, Design, Check, Audit', correct: false }
        ],
        explanation: "Continuous improvement framework; Shewhart cycle; foundation for DMAIC; iterative approach",
        topic: 'General Knowledge'
    },
    {
        id: 'G32',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Plan\" phase in PDCA includes:",
        optionsBank: [
            { id: 'G32_O1', text: 'Implementing changes', correct: false },
            { id: 'G32_O2', text: 'Collecting data and checking results', correct: false },
            { id: 'G32_O3', text: 'Setting objectives, analyzing root causes, designing solutions', correct: true },
            { id: 'G32_O4', text: 'Standardizing improvements', correct: false },
            { id: 'G32_O5', text: 'Celebrating success', correct: false },
            { id: 'G32_O6', text: 'Training staff on changes', correct: false },
            { id: 'G32_O7', text: 'Executing the pilot', correct: false }
        ],
        explanation: "Prepare for the \"Do\" phase; define problem and propose countermeasures; foundational work",
        topic: 'General Knowledge'
    },
    {
        id: 'G33',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Do\" phase in PDCA involves:",
        optionsBank: [
            { id: 'G33_O1', text: 'Testing solutions on small scale', correct: true },
            { id: 'G33_O2', text: 'Full-scale implementation', correct: false },
            { id: 'G33_O3', text: 'Analyzing results', correct: false },
            { id: 'G33_O4', text: 'Planning next cycle', correct: false },
            { id: 'G33_O5', text: 'Training the organization', correct: false },
            { id: 'G33_O6', text: 'Conducting final review', correct: false },
            { id: 'G33_O7', text: 'Standardizing procedures', correct: false }
        ],
        explanation: "Pilot or trial implementation; controlled experiment; execute on small scale first; gather data",
        topic: 'General Knowledge'
    },
    {
        id: 'G34',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Check\" phase in PDCA includes:",
        optionsBank: [
            { id: 'G34_O1', text: 'Monitoring and measuring results', correct: true },
            { id: 'G34_O2', text: 'Making changes', correct: false },
            { id: 'G34_O3', text: 'Planning future improvements', correct: false },
            { id: 'G34_O4', text: 'Scaling to entire organization', correct: false },
            { id: 'G34_O5', text: 'Communicating outcomes', correct: false },
            { id: 'G34_O6', text: 'Approving changes', correct: false },
            { id: 'G34_O7', text: 'Documenting lessons', correct: false }
        ],
        explanation: "Did we get expected results? Verify effectiveness against plan; Measure phase analog",
        topic: 'General Knowledge'
    },
    {
        id: 'G35',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Act\" phase in PDCA includes:",
        optionsBank: [
            { id: 'G35_O1', text: 'Making improvements immediately', correct: false },
            { id: 'G35_O2', text: 'Standardizing successful changes and planning next cycle', correct: true },
            { id: 'G35_O3', text: 'Only celebrating success', correct: false },
            { id: 'G35_O4', text: 'Documenting failures', correct: false },
            { id: 'G35_O5', text: 'Finalizing the project', correct: false },
            { id: 'G35_O6', text: 'Reporting to executives', correct: false },
            { id: 'G35_O7', text: 'Closing project budget', correct: false }
        ],
        explanation: "Sustain gains and repeat cycle; embed changes into standard procedures; continuous cycle",
        topic: 'General Knowledge'
    },
    {
        id: 'G36',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Kaizen in Japanese means:",
        optionsBank: [
            { id: 'G36_O1', text: 'Cost reduction', correct: false },
            { id: 'G36_O2', text: 'Team work', correct: false },
            { id: 'G36_O3', text: 'Continuous improvement', correct: true },
            { id: 'G36_O4', text: 'Waste elimination', correct: false },
            { id: 'G36_O5', text: 'Perfect quality', correct: false },
            { id: 'G36_O6', text: 'Process efficiency', correct: false },
            { id: 'G36_O7', text: 'Change for the better', correct: false }
        ],
        explanation: "Incremental, ongoing improvement philosophy; everyone participates; small changes; \"Kai\" (change) + \"Zen\" (good)",
        topic: 'General Knowledge'
    },
    {
        id: 'G37',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The concept of \"respect for people\" in Lean/Six Sigma emphasizes:",
        optionsBank: [
            { id: 'G37_O1', text: 'Formal hierarchies', correct: false },
            { id: 'G37_O2', text: 'Employee involvement, empowerment, and continuous learning', correct: true },
            { id: 'G37_O3', text: 'Management knows best', correct: false },
            { id: 'G37_O4', text: 'Following orders without question', correct: false },
            { id: 'G37_O5', text: 'Minimizing labor costs', correct: false },
            { id: 'G37_O6', text: 'Management control systems', correct: false },
            { id: 'G37_O7', text: 'Performance ratings only', correct: false }
        ],
        explanation: "Engagement and development of workforce; everyone has valuable ideas; dignity and autonomy",
        topic: 'General Knowledge'
    },
    {
        id: 'G38',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "\"Gemba\" refers to:",
        optionsBank: [
            { id: 'G38_O1', text: 'Quality department', correct: false },
            { id: 'G38_O2', text: 'The actual place where work is performed', correct: true },
            { id: 'G38_O3', text: 'Management office', correct: false },
            { id: 'G38_O4', text: 'Meeting room', correct: false },
            { id: 'G38_O5', text: 'Customer site', correct: false },
            { id: 'G38_O6', text: 'Headquarters', correct: false },
            { id: 'G38_O7', text: 'Inspection station', correct: false }
        ],
        explanation: "Japanese for \"actual place\"—go see reality; gemba walk to understand processes firsthand; reality-based",
        topic: 'General Knowledge'
    },
    {
        id: 'G39',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Data-driven decision making means:",
        optionsBank: [
            { id: 'G39_O1', text: 'Ignoring intuition', correct: false },
            { id: 'G39_O2', text: 'Using facts and analysis rather than assumptions', correct: true },
            { id: 'G39_O3', text: 'Collecting data for its own sake', correct: false },
            { id: 'G39_O4', text: 'Only using financial metrics', correct: false },
            { id: 'G39_O5', text: 'Following past decisions', correct: false },
            { id: 'G39_O6', text: 'Requiring big data analytics', correct: false },
            { id: 'G39_O7', text: 'Eliminating human judgment', correct: false }
        ],
        explanation: "Evidence-based approach to problem solving; reduces subjective bias; data informs, not replaces, judgment",
        topic: 'General Knowledge'
    },
    {
        id: 'G40',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Process thinking involves understanding:",
        optionsBank: [
            { id: 'G40_O1', text: 'Only individual tasks', correct: false },
            { id: 'G40_O2', text: 'How inputs transform to outputs and interconnected relationships', correct: true },
            { id: 'G40_O3', text: 'Department boundaries', correct: false },
            { id: 'G40_O4', text: 'Historical practices', correct: false },
            { id: 'G40_O5', text: 'Individual performance only', correct: false },
            { id: 'G40_O6', text: 'Functional silos', correct: false },
            { id: 'G40_O7', text: 'Organizational structure', correct: false }
        ],
        explanation: "Systems perspective; interdependencies; end-to-end value delivery; cross-functional thinking",
        topic: 'General Knowledge'
    },
    {
        id: 'G41',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A process metric measures:",
        optionsBank: [
            { id: 'G41_O1', text: 'Customer satisfaction only', correct: false },
            { id: 'G41_O2', text: 'Process performance: cost, time, quality, efficiency', correct: true },
            { id: 'G41_O3', text: 'Employee satisfaction', correct: false },
            { id: 'G41_O4', text: 'Competitor performance', correct: false },
            { id: 'G41_O5', text: 'Market share', correct: false },
            { id: 'G41_O6', text: 'Revenue only', correct: false },
            { id: 'G41_O7', text: 'Brand perception', correct: false }
        ],
        explanation: "Indicators of how well process functions; includes cycle time, cost, defects; internal focus",
        topic: 'General Knowledge'
    },
    {
        id: 'G42',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Alignment to business strategy means:",
        optionsBank: [
            { id: 'G42_O1', text: 'All projects help achieve organizational goals', correct: true },
            { id: 'G42_O2', text: 'Any improvement project is worthwhile', correct: false },
            { id: 'G42_O3', text: 'Business strategy is unrelated to operations', correct: false },
            { id: 'G42_O4', text: 'Projects are purely technical', correct: false },
            { id: 'G42_O5', text: 'All improvement ideas must be pursued', correct: false },
            { id: 'G42_O6', text: 'Strategy changes with every project', correct: false },
            { id: 'G42_O7', text: 'Cost reduction overrides all goals', correct: false }
        ],
        explanation: "Strategic fit and ROI focus; portfolio management; prioritize high-impact initiatives; governance",
        topic: 'General Knowledge'
    },
    {
        id: 'G43',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Scope creep in projects occurs when:",
        optionsBank: [
            { id: 'G43_O1', text: 'Project completes on time', correct: false },
            { id: 'G43_O2', text: 'Project requirements expand uncontrollably', correct: true },
            { id: 'G43_O3', text: 'Team members leave', correct: false },
            { id: 'G43_O4', text: 'Budget decreases', correct: false },
            { id: 'G43_O5', text: 'Stakeholders are satisfied', correct: false },
            { id: 'G43_O6', text: 'Resources increase', correct: false },
            { id: 'G43_O7', text: 'Timeline expands', correct: false }
        ],
        explanation: "Major project risk; requires active change control management; impacts timeline/budget; preventable",
        topic: 'General Knowledge'
    },
    {
        id: 'G44',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Project charter documents:",
        optionsBank: [
            { id: 'G44_O1', text: 'Only the problem', correct: false },
            { id: 'G44_O2', text: 'Problem, objectives, scope, resources, timeline, stakeholders', correct: true },
            { id: 'G44_O3', text: 'Solutions only', correct: false },
            { id: 'G44_O4', text: 'Final results', correct: false },
            { id: 'G44_O5', text: 'Team member roles only', correct: false },
            { id: 'G44_O6', text: 'Budget details only', correct: false },
            { id: 'G44_O7', text: 'Risk assessments only', correct: false }
        ],
        explanation: "Foundation for project governance; authorizes project; establishes baseline; Define phase output",
        topic: 'General Knowledge'
    },
    {
        id: 'G45',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The business case for a Six Sigma project should include:",
        optionsBank: [
            { id: 'G45_O1', text: 'Problem statement and project goal only', correct: false },
            { id: 'G45_O2', text: 'Financial impact, ROI, timeline, resource requirements', correct: true },
            { id: 'G45_O3', text: "Manager's opinion", correct: false },
            { id: 'G45_O4', text: 'No financial analysis needed', correct: false },
            { id: 'G45_O5', text: 'Competitor benchmarking only', correct: false },
            { id: 'G45_O6', text: 'Technical specifications only', correct: false },
            { id: 'G45_O7', text: 'Team preferences', correct: false }
        ],
        explanation: "Justifies project investment; quantifies expected benefits and costs; business rationale critical",
        topic: 'General Knowledge'
    },
    {
        id: 'G46',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A project tollgate is:",
        optionsBank: [
            { id: 'G46_O1', text: 'Checkpoint to assess progress and decide to proceed', correct: true },
            { id: 'G46_O2', text: 'Physical entrance to facility', correct: false },
            { id: 'G46_O3', text: 'Customer satisfaction review', correct: false },
            { id: 'G46_O4', text: 'Annual budget review', correct: false },
            { id: 'G46_O5', text: 'Team celebration event', correct: false },
            { id: 'G46_O6', text: 'Status meeting only', correct: false },
            { id: 'G46_O7', text: 'End-of-project audit', correct: false }
        ],
        explanation: "Go/no-go decision point; phase gate; milestone review; gate criteria applied; governance control",
        topic: 'General Knowledge'
    },
    {
        id: 'G47',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Project benefits realization means:",
        optionsBank: [
            { id: 'G47_O1', text: 'Project is completed', correct: false },
            { id: 'G47_O2', text: 'Actual financial and operational benefits achieved and sustained', correct: true },
            { id: 'G47_O3', text: 'Customer satisfaction increased', correct: false },
            { id: 'G47_O4', text: 'New tools implemented', correct: false },
            { id: 'G47_O5', text: 'Team receives recognition', correct: false },
            { id: 'G47_O6', text: 'Project closure approved', correct: false },
            { id: 'G47_O7', text: 'Final report submitted', correct: false }
        ],
        explanation: "True success = achieved objectives sustained; benefits must persist post-project; Control phase focus",
        topic: 'General Knowledge'
    },
    {
        id: 'G48',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Lessons learned documentation:",
        optionsBank: [
            { id: 'G48_O1', text: 'Records failures only', correct: false },
            { id: 'G48_O2', text: "What worked, what didn't, improvements for next project", correct: true },
            { id: 'G48_O3', text: 'Employee performance reviews', correct: false },
            { id: 'G48_O4', text: 'Benchmarking data only', correct: false },
            { id: 'G48_O5', text: 'Budget reconciliation', correct: false },
            { id: 'G48_O6', text: 'Team training materials', correct: false },
            { id: 'G48_O7', text: 'Customer feedback only', correct: false }
        ],
        explanation: "Knowledge management and organizational learning; captures best practices; organizational memory",
        topic: 'General Knowledge'
    },
    {
        id: 'G49',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Governance in Six Sigma organizations includes:",
        optionsBank: [
            { id: 'G49_O1', text: 'Rigid command structure', correct: false },
            { id: 'G49_O2', text: 'Portfolio management, resource allocation, project prioritization', correct: true },
            { id: 'G49_O3', text: 'Compliance only', correct: false },
            { id: 'G49_O4', text: 'No formal structure needed', correct: false },
            { id: 'G49_O5', text: 'Reactive decision making', correct: false },
            { id: 'G49_O6', text: 'Ad-hoc project selection', correct: false },
            { id: 'G49_O7', text: 'Individual departmental control', correct: false }
        ],
        explanation: "Strategic management of improvement initiatives; ensures alignment and resource efficiency; portfolio view",
        topic: 'General Knowledge'
    },
    {
        id: 'G50',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Certification as Green Belt requires:",
        optionsBank: [
            { id: 'G50_O1', text: 'Completion of training course only', correct: false },
            { id: 'G50_O2', text: 'Training + passing exam + project completion (varies by body)', correct: true },
            { id: 'G50_O3', text: 'Any improvement experience', correct: false },
            { id: 'G50_O4', text: 'Only for manufacturing', correct: false },
            { id: 'G50_O5', text: 'Sponsorship from executive only', correct: false },
            { id: 'G50_O6', text: 'Minimum 5 years experience', correct: false },
            { id: 'G50_O7', text: 'Industry-specific knowledge', correct: false }
        ],
        explanation: "Demonstrated competency through multiple criteria; varies between IASSC and ASQ; rigorous standards",
        topic: 'General Knowledge'
    },
    {
        id: 'G51',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Kaoru Ishikawa's most famous contribution is:",
        optionsBank: [
            { id: 'G51_O1', text: 'Process capability indices', correct: false },
            { id: 'G51_O2', text: 'Fishbone diagram (cause-and-effect diagram)', correct: true },
            { id: 'G51_O3', text: 'DMAIC methodology', correct: false },
            { id: 'G51_O4', text: 'Central limit theorem', correct: false },
            { id: 'G51_O5', text: 'Design of experiments', correct: false },
            { id: 'G51_O6', text: 'Statistical hypothesis testing', correct: false },
            { id: 'G51_O7', text: 'Control chart development', correct: false }
        ],
        explanation: "Known as Father of Japanese Quality; presented fishbone in 1945; still one of 7 basic tools; widely used",
        topic: 'General Knowledge'
    },
    {
        id: 'G52',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Quality circles were pioneered by:",
        optionsBank: [
            { id: 'G52_O1', text: 'Bill Smith', correct: false },
            { id: 'G52_O2', text: 'W. Edwards Deming', correct: false },
            { id: 'G52_O3', text: 'Kaoru Ishikawa', correct: true },
            { id: 'G52_O4', text: 'Jack Welch', correct: false },
            { id: 'G52_O5', text: 'Joseph Juran', correct: false },
            { id: 'G52_O6', text: 'Walter Shewhart', correct: false },
            { id: 'G52_O7', text: 'Mikel Harry', correct: false }
        ],
        explanation: "Groups of employees meeting to improve organizational performance; Ishikawa 1960; first at NTT; Japanese invention",
        topic: 'General Knowledge'
    },
    {
        id: 'G53',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Mikel Harry's primary role in Six Sigma development was:",
        optionsBank: [
            { id: 'G53_O1', text: 'CEO of Motorola', correct: false },
            { id: 'G53_O2', text: 'Main architect; co-created MAIC which evolved to DMAIC', correct: true },
            { id: 'G53_O3', text: 'Founder of IASSC', correct: false },
            { id: 'G53_O4', text: 'Inventor of control charts', correct: false },
            { id: 'G53_O5', text: 'Developed Lean manufacturing', correct: false },
            { id: 'G53_O6', text: 'Created fishbone diagram', correct: false },
            { id: 'G53_O7', text: 'Established ASQ standards', correct: false }
        ],
        explanation: "Worked with Bill Smith at Motorola; defined 4-stage approach that became DMAIC; key architect",
        topic: 'General Knowledge'
    },
    {
        id: 'G54',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The process capability index Cpk accounts for:",
        optionsBank: [
            { id: 'G54_O1', text: 'Only process variation', correct: false },
            { id: 'G54_O2', text: 'Only process centering', correct: false },
            { id: 'G54_O3', text: 'Both process variation and centering relative to spec limits', correct: true },
            { id: 'G54_O4', text: 'Only upper specification limit', correct: false },
            { id: 'G54_O5', text: 'Historical defect rates', correct: false },
            { id: 'G54_O6', text: 'Customer tolerance only', correct: false },
            { id: 'G54_O7', text: 'Manufacturing cost', correct: false }
        ],
        explanation: "Cpk = Min[(USL-μ)/(3σ), (μ-LSL)/(3σ)]; measures actual process capability; accounts for off-centering",
        topic: 'General Knowledge'
    },
    {
        id: 'G55',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The process capability index Cp accounts for:",
        optionsBank: [
            { id: 'G55_O1', text: 'Process variation only (spread)', correct: true },
            { id: 'G55_O2', text: 'Process centering only', correct: false },
            { id: 'G55_O3', text: 'Both variation and centering', correct: false },
            { id: 'G55_O4', text: 'Customer satisfaction', correct: false },
            { id: 'G55_O5', text: 'Cost of poor quality', correct: false },
            { id: 'G55_O6', text: 'Defect rates', correct: false },
            { id: 'G55_O7', text: 'Specification tightness', correct: false }
        ],
        explanation: "Cp = (USL-LSL)/(6σ); measures potential capability assuming perfect centering; ignore centering issues",
        topic: 'General Knowledge'
    },
    {
        id: 'G56',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "For a process to achieve 6-Sigma quality, minimum Cpk value should be:",
        optionsBank: [
            { id: 'G56_O1', text: '0.5', correct: false },
            { id: 'G56_O2', text: '1.0', correct: false },
            { id: 'G56_O3', text: '1.33', correct: false },
            { id: 'G56_O4', text: '1.67 or greater', correct: true },
            { id: 'G56_O5', text: '2.0 or greater', correct: false },
            { id: 'G56_O6', text: '3.0 or greater', correct: false },
            { id: 'G56_O7', text: '1.5 or greater', correct: false }
        ],
        explanation: "Cpk ≥ 1.67 achieved with 6σ and 1.5σ shift = 3.4 DPMO; high performance standard; industry expectation",
        topic: 'General Knowledge'
    },
    {
        id: 'G57',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Motorola's Six Sigma initiative generated approximately:",
        optionsBank: [
            { id: 'G57_O1', text: '$500 million in 4 years', correct: false },
            { id: 'G57_O2', text: '$2.2 billion in 4 years', correct: true },
            { id: 'G57_O3', text: '$5 billion in 4 years', correct: false },
            { id: 'G57_O4', text: '$500 million in 15 years', correct: false },
            { id: 'G57_O5', text: '$10 billion in 4 years', correct: false },
            { id: 'G57_O6', text: '$1 billion in 4 years', correct: false },
            { id: 'G57_O7', text: '$16 billion in 4 years', correct: false }
        ],
        explanation: "$2.2B within first 4 years; $16B within 15 years; transformative ROI; benchmark case study",
        topic: 'General Knowledge'
    },
    {
        id: 'G58',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Motorola CEO Bob Galvin was important because he:",
        optionsBank: [
            { id: 'G58_O1', text: 'Invented Six Sigma methodology', correct: false },
            { id: 'G58_O2', text: 'First CEO to understand need to control variation; approved Six Sigma', correct: true },
            { id: 'G58_O3', text: 'Created DMAIC process', correct: false },
            { id: 'G58_O4', text: 'Founded IASSC', correct: false },
            { id: 'G58_O5', text: 'Developed fishbone diagram', correct: false },
            { id: 'G58_O6', text: 'Invented control charts', correct: false },
            { id: 'G58_O7', text: 'Created quality circles', correct: false }
        ],
        explanation: "Supported Bill Smith and Mikel Harry; championed cultural transformation at Motorola; visionary leader",
        topic: 'General Knowledge'
    },
    {
        id: 'G59',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The 5S methodology sequence is:",
        optionsBank: [
            { id: 'G59_O1', text: 'Sort, Set in order, Shine, Standardize, Sustain', correct: true },
            { id: 'G59_O2', text: 'Sort, Separate, System, Schedule, Sustain', correct: false },
            { id: 'G59_O3', text: 'Safety, Simplify, System, Schedule, Sustain', correct: false },
            { id: 'G59_O4', text: 'Setup, Service, Schedule, System, Sustain', correct: false },
            { id: 'G59_O5', text: 'Select, Sequence, Setup, Schedule, Sustain', correct: false },
            { id: 'G59_O6', text: 'Scan, Sort, Shine, System, Sustain', correct: false },
            { id: 'G59_O7', text: 'Separate, Set, Shine, Signal, Sustain', correct: false }
        ],
        explanation: "Japanese lean tool; eliminates waste; creates visual workplace; Japanese: Seiri, Seiton, Seiso, Seiketsu, Shitsuke",
        topic: 'General Knowledge'
    },
    {
        id: 'G60',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "SMED (Single Minute Exchange of Dies) is primarily used to:",
        optionsBank: [
            { id: 'G60_O1', text: 'Reduce defects in manufacturing', correct: false },
            { id: 'G60_O2', text: 'Reduce setup/changeover time in production', correct: true },
            { id: 'G60_O3', text: 'Train equipment operators', correct: false },
            { id: 'G60_O4', text: 'Improve product design', correct: false },
            { id: 'G60_O5', text: 'Measure process capability', correct: false },
            { id: 'G60_O6', text: 'Reduce labor costs', correct: false },
            { id: 'G60_O7', text: 'Improve quality consistency', correct: false }
        ],
        explanation: "Lean method to reduce non-value-added changeover time; increase flexibility and throughput; Shigeo Shingo",
        topic: 'General Knowledge'
    },
    {
        id: 'G61',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The Pareto principle states that:",
        optionsBank: [
            { id: 'G61_O1', text: '50% of problems come from 50% of causes', correct: false },
            { id: 'G61_O2', text: '80% of problems come from 20% of causes', correct: true },
            { id: 'G61_O3', text: '90% of problems come from 10% of causes', correct: false },
            { id: 'G61_O4', text: 'All problems are equally important', correct: false },
            { id: 'G61_O5', text: '70% of effects come from 30% of causes', correct: false },
            { id: 'G61_O6', text: '60% of problems come from 40% of causes', correct: false },
            { id: 'G61_O7', text: '95% of problems come from 5% of causes', correct: false }
        ],
        explanation: "Vital Few vs Trivial Many; focus on high-impact root causes first; universal principle",
        topic: 'General Knowledge'
    },
    {
        id: 'G62',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A Value Stream Map (VSM) is used to:",
        optionsBank: [
            { id: 'G62_O1', text: 'Display individual process steps only', correct: false },
            { id: 'G62_O2', text: 'Visualize end-to-end process flow including value/non-value activities', correct: true },
            { id: 'G62_O3', text: 'Calculate financial metrics', correct: false },
            { id: 'G62_O4', text: 'Identify team members', correct: false },
            { id: 'G62_O5', text: 'Plan project budget', correct: false },
            { id: 'G62_O6', text: 'Show departmental hierarchy', correct: false },
            { id: 'G62_O7', text: 'Track inventory levels', correct: false }
        ],
        explanation: "Shows material and information flow; identifies waste and improvement opportunities; Measure phase tool",
        topic: 'General Knowledge'
    },
    {
        id: 'G63',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A SIPOC diagram documents:",
        optionsBank: [
            { id: 'G63_O1', text: 'Only the current state process', correct: false },
            { id: 'G63_O2', text: 'Suppliers, Inputs, Process, Outputs, Customers', correct: true },
            { id: 'G63_O3', text: 'Statistical process parameters', correct: false },
            { id: 'G63_O4', text: 'Team member responsibilities', correct: false },
            { id: 'G63_O5', text: 'Project timeline', correct: false },
            { id: 'G63_O6', text: 'Financial budgets', correct: false },
            { id: 'G63_O7', text: 'Risk assessments', correct: false }
        ],
        explanation: "High-level process context; stakeholder mapping; Define phase tool; starting point for analysis",
        topic: 'General Knowledge'
    },
    {
        id: 'G64',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The Seven Basic Quality Tools include all EXCEPT:",
        optionsBank: [
            { id: 'G64_O1', text: 'Control chart', correct: false },
            { id: 'G64_O2', text: 'Fishbone diagram', correct: false },
            { id: 'G64_O3', text: 'Histogram', correct: false },
            { id: 'G64_O4', text: 'Neural network', correct: true },
            { id: 'G64_O5', text: 'Scatter plot', correct: false },
            { id: 'G64_O6', text: 'Check sheet', correct: false },
            { id: 'G64_O7', text: 'Pareto chart', correct: false }
        ],
        explanation: "Seven tools: flowchart, check sheet, histogram, Pareto, scatter, control chart, fishbone; neural networks are advanced AI",
        topic: 'General Knowledge'
    },
    {
        id: 'G65',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A fishbone diagram (Ishikawa diagram) helps identify:",
        optionsBank: [
            { id: 'G65_O1', text: 'Process cycle time only', correct: false },
            { id: 'G65_O2', text: 'Root causes of a problem through systematic exploration', correct: true },
            { id: 'G65_O3', text: 'Customer satisfaction metrics', correct: false },
            { id: 'G65_O4', text: 'Team performance', correct: false },
            { id: 'G65_O5', text: 'Financial constraints', correct: false },
            { id: 'G65_O6', text: 'Supplier quality only', correct: false },
            { id: 'G65_O7', text: 'Schedule delays', correct: false }
        ],
        explanation: "Major category bones (People, Process, Methods, Materials, Environment, etc.) to major cause; Analyze phase",
        topic: 'General Knowledge'
    },
    {
        id: 'G66',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Jack Welch's role in Six Sigma history was:",
        optionsBank: [
            { id: 'G66_O1', text: 'Invented Six Sigma at Motorola', correct: false },
            { id: 'G66_O2', text: 'Adopted and championed Six Sigma as central strategy at GE in 1995', correct: true },
            { id: 'G66_O3', text: 'Founded IASSC certification body', correct: false },
            { id: 'G66_O4', text: 'Developed DMAIC methodology', correct: false },
            { id: 'G66_O5', text: 'Created fishbone diagram', correct: false },
            { id: 'G66_O6', text: 'Invented quality circles', correct: false },
            { id: 'G66_O7', text: 'Pioneered Lean manufacturing', correct: false }
        ],
        explanation: "CEO of General Electric; made Six Sigma core business strategy; drove Fortune 500 adoption; visionary",
        topic: 'General Knowledge'
    },
    {
        id: 'G67',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "CTQ (Critical To Quality) characteristics are determined by:",
        optionsBank: [
            { id: 'G67_O1', text: 'Engineering department only', correct: false },
            { id: 'G67_O2', text: 'Voice of the Customer and translated into specifications', correct: true },
            { id: 'G67_O3', text: 'Management decision only', correct: false },
            { id: 'G67_O4', text: 'Historical performance data', correct: false },
            { id: 'G67_O5', text: 'Competitor benchmarking', correct: false },
            { id: 'G67_O6', text: 'Industry standards only', correct: false },
            { id: 'G67_O7', text: 'Cost minimization', correct: false }
        ],
        explanation: "Define phase; customer needs translated into measurable requirements; critical for success",
        topic: 'General Knowledge'
    },
    {
        id: 'G68',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The House of Quality is a key tool in:",
        optionsBank: [
            { id: 'G68_O1', text: 'Statistical process control', correct: false },
            { id: 'G68_O2', text: 'Quality Function Deployment (QFD)', correct: true },
            { id: 'G68_O3', text: 'Design of experiments', correct: false },
            { id: 'G68_O4', text: 'FMEA analysis', correct: false },
            { id: 'G68_O5', text: 'Hypothesis testing', correct: false },
            { id: 'G68_O6', text: 'Process mapping', correct: false },
            { id: 'G68_O7', text: 'Capability analysis', correct: false }
        ],
        explanation: "Translates customer requirements to technical specifications; integrates Ishikawa diagram; DMADV tool",
        topic: 'General Knowledge'
    },
    {
        id: 'G69',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Mistake-proofing (Poka-Yoke) primarily aims to:",
        optionsBank: [
            { id: 'G69_O1', text: 'Reduce labor costs', correct: false },
            { id: 'G69_O2', text: 'Prevent errors from occurring or reaching customers', correct: true },
            { id: 'G69_O3', text: 'Increase production speed', correct: false },
            { id: 'G69_O4', text: 'Train operators better', correct: false },
            { id: 'G69_O5', text: 'Improve communication', correct: false },
            { id: 'G69_O6', text: 'Reduce inspection needs', correct: false },
            { id: 'G69_O7', text: 'Simplify documentation', correct: false }
        ],
        explanation: "Design defect prevention into process; Lean tool; make problems visible immediately; Japanese concept",
        topic: 'General Knowledge'
    },
    {
        id: 'G70',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The Central Limit Theorem states that:",
        optionsBank: [
            { id: 'G70_O1', text: 'All data follows normal distribution', correct: false },
            { id: 'G70_O2', text: 'Sampling distribution approaches normal regardless of population', correct: true },
            { id: 'G70_O3', text: 'Larger samples have lower average', correct: false },
            { id: 'G70_O4', text: 'Standard deviation equals mean', correct: false },
            { id: 'G70_O5', text: 'All distributions are bimodal', correct: false },
            { id: 'G70_O6', text: 'Sample means equal population means', correct: false },
            { id: 'G70_O7', text: 'Normal distribution is always best', correct: false }
        ],
        explanation: "Fundamental statistics principle; enables hypothesis testing and confidence intervals; mathematical foundation",
        topic: 'General Knowledge'
    },
    {
        id: 'G71',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Kurtosis in a data distribution indicates:",
        optionsBank: [
            { id: 'G71_O1', text: 'The direction of asymmetry', correct: false },
            { id: 'G71_O2', text: 'The peakedness and tail behavior', correct: true },
            { id: 'G71_O3', text: 'The spread of data', correct: false },
            { id: 'G71_O4', text: 'The sample size', correct: false },
            { id: 'G71_O5', text: 'The probability range', correct: false },
            { id: 'G71_O6', text: 'The center of data', correct: false },
            { id: 'G71_O7', text: 'The range width', correct: false }
        ],
        explanation: "Positive = peaked (leptokurtic); Negative = flat (platykurtic); describes tail behavior; Measure phase",
        topic: 'General Knowledge'
    },
    {
        id: 'G72',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Skewness in a data distribution indicates:",
        optionsBank: [
            { id: 'G72_O1', text: 'The peakedness of data', correct: false },
            { id: 'G72_O2', text: 'The asymmetry or imbalance in distribution', correct: true },
            { id: 'G72_O3', text: 'The sample size', correct: false },
            { id: 'G72_O4', text: 'The correlation strength', correct: false },
            { id: 'G72_O5', text: 'The process capability', correct: false },
            { id: 'G72_O6', text: 'The data variance', correct: false },
            { id: 'G72_O7', text: 'The outlier presence', correct: false }
        ],
        explanation: "Positive skew = right tail; Negative skew = left tail; indicates centering issues; impacts capability",
        topic: 'General Knowledge'
    },
    {
        id: 'G73',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "A bimodal distribution indicates:",
        optionsBank: [
            { id: 'G73_O1', text: 'There is one peak in the data', correct: false },
            { id: 'G73_O2', text: 'There are two distinct peaks/modes in the data', correct: true },
            { id: 'G73_O3', text: 'The data is normally distributed', correct: false },
            { id: 'G73_O4', text: 'All observations are identical', correct: false },
            { id: 'G73_O5', text: 'The mean equals the median', correct: false },
            { id: 'G73_O6', text: 'The data has no outliers', correct: false },
            { id: 'G73_O7', text: 'The variance is very low', correct: false }
        ],
        explanation: "Often signals two different populations mixed; investigate stratification; Analyze phase signal",
        topic: 'General Knowledge'
    },
    {
        id: 'G74',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Correlation coefficient of -0.95 indicates:",
        optionsBank: [
            { id: 'G74_O1', text: 'Strong positive relationship', correct: false },
            { id: 'G74_O2', text: 'No relationship', correct: false },
            { id: 'G74_O3', text: 'Strong negative relationship', correct: true },
            { id: 'G74_O4', text: 'Weak negative relationship', correct: false },
            { id: 'G74_O5', text: 'Perfect positive correlation', correct: false },
            { id: 'G74_O6', text: 'Moderate positive relationship', correct: false },
            { id: 'G74_O7', text: 'Weak positive relationship', correct: false }
        ],
        explanation: "As one variable increases, other decreases; high inverse relationship; causation not implied; strong link",
        topic: 'General Knowledge'
    },
    {
        id: 'G75',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Correlation coefficient range is:",
        optionsBank: [
            { id: 'G75_O1', text: '0 to 1', correct: false },
            { id: 'G75_O2', text: '-1 to 1', correct: true },
            { id: 'G75_O3', text: '-∞ to +∞', correct: false },
            { id: 'G75_O4', text: '0 to 100', correct: false },
            { id: 'G75_O5', text: '-100 to 100', correct: false },
            { id: 'G75_O6', text: '-10 to 10', correct: false },
            { id: 'G75_O7', text: '-2 to 2', correct: false }
        ],
        explanation: "-1 = perfect negative; 0 = no relationship; 1 = perfect positive correlation; bounded range",
        topic: 'General Knowledge'
    },
    {
        id: 'G76',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The primary purpose of Measurement System Analysis (MSA) is to:",
        optionsBank: [
            { id: 'G76_O1', text: 'Calculate product cost', correct: false },
            { id: 'G76_O2', text: 'Assess if measurement equipment is accurate and reliable', correct: true },
            { id: 'G76_O3', text: 'Train measurement operators', correct: false },
            { id: 'G76_O4', text: 'Design new products', correct: false },
            { id: 'G76_O5', text: 'Identify customer needs', correct: false },
            { id: 'G76_O6', text: 'Set control limits', correct: false },
            { id: 'G76_O7', text: 'Define inspection procedures', correct: false }
        ],
        explanation: "Includes Gauge R&R studies; validates that data collection is trustworthy; Measure phase prerequisite",
        topic: 'General Knowledge'
    },
    {
        id: 'G77',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In Gauge R&R study, R&R stands for:",
        optionsBank: [
            { id: 'G77_O1', text: 'Reliability & Robustness', correct: false },
            { id: 'G77_O2', text: 'Repeatability & Reproducibility', correct: true },
            { id: 'G77_O3', text: 'Resolution & Range', correct: false },
            { id: 'G77_O4', text: 'Regression & Range', correct: false },
            { id: 'G77_O5', text: 'Record & Report', correct: false },
            { id: 'G77_O6', text: 'Redo & Review', correct: false },
            { id: 'G77_O7', text: 'Reaction & Response', correct: false }
        ],
        explanation: "Repeatability = same operator, same part; Reproducibility = different operators, same part; measurement validation",
        topic: 'General Knowledge'
    },
    {
        id: 'G78',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Bias in measurement refers to:",
        optionsBank: [
            { id: 'G78_O1', text: 'Random variation in measurements', correct: false },
            { id: 'G78_O2', text: 'Systematic deviation of measured value from true value', correct: true },
            { id: 'G78_O3', text: 'Operator error', correct: false },
            { id: 'G78_O4', text: 'Environmental temperature', correct: false },
            { id: 'G78_O5', text: 'Customer satisfaction', correct: false },
            { id: 'G78_O6', text: 'Measurement variation', correct: false },
            { id: 'G78_O7', text: 'Instrument aging', correct: false }
        ],
        explanation: "Shift or offset; consistent error in same direction; must be eliminated for valid data; MSA concern",
        topic: 'General Knowledge'
    },
    {
        id: 'G79',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Accuracy in measurement means:",
        optionsBank: [
            { id: 'G79_O1', text: 'Measurements are reproducible', correct: false },
            { id: 'G79_O2', text: 'Measurements are close to true value', correct: true },
            { id: 'G79_O3', text: 'Sample size is large', correct: false },
            { id: 'G79_O4', text: 'Data has low variation', correct: false },
            { id: 'G79_O5', text: 'Equipment is new', correct: false },
            { id: 'G79_O6', text: 'Calibration is current', correct: false },
            { id: 'G79_O7', text: 'Instrument is expensive', correct: false }
        ],
        explanation: "Closeness to true value; absence of bias; vs. Precision (reproducibility); different concepts",
        topic: 'General Knowledge'
    },
    {
        id: 'G80',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Precision in measurement means:",
        optionsBank: [
            { id: 'G80_O1', text: 'Measurements match true value', correct: false },
            { id: 'G80_O2', text: 'Repeated measurements yield consistent, close results', correct: true },
            { id: 'G80_O3', text: 'No measurement error exists', correct: false },
            { id: 'G80_O4', text: 'Sample size is large', correct: false },
            { id: 'G80_O5', text: 'Equipment is expensive', correct: false },
            { id: 'G80_O6', text: 'Operator is experienced', correct: false },
            { id: 'G80_O7', text: 'Environment is controlled', correct: false }
        ],
        explanation: "Repeatability and closeness of measurements to each other; low variation; vs. Accuracy (different)",
        topic: 'General Knowledge'
    },
    {
        id: 'G81',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Stratification in data analysis means:",
        optionsBank: [
            { id: 'G81_O1', text: 'Collecting data from different locations', correct: false },
            { id: 'G81_O2', text: 'Separating data into groups to reveal patterns and root causes', correct: true },
            { id: 'G81_O3', text: 'Creating control limits', correct: false },
            { id: 'G81_O4', text: 'Calculating sample size', correct: false },
            { id: 'G81_O5', text: 'Designing experiments', correct: false },
            { id: 'G81_O6', text: 'Sorting historical data', correct: false },
            { id: 'G81_O7', text: 'Creating subsets for storage', correct: false }
        ],
        explanation: "By shift, operator, machine, material, etc. to identify specific sources of variation; Analyze tool",
        topic: 'General Knowledge'
    },
    {
        id: 'G82',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In Six Sigma, a \"quick win\" project typically:",
        optionsBank: [
            { id: 'G82_O1', text: 'Requires extensive data collection', correct: false },
            { id: 'G82_O2', text: 'Shows benefits with 30-90 day timeline', correct: true },
            { id: 'G82_O3', text: 'Requires design of experiments', correct: false },
            { id: 'G82_O4', text: 'Involves capital investment', correct: false },
            { id: 'G82_O5', text: 'Takes over one year to complete', correct: false },
            { id: 'G82_O6', text: 'Requires executive sponsorship', correct: false },
            { id: 'G82_O7', text: 'Demands large team participation', correct: false }
        ],
        explanation: "Builds momentum; demonstrates methodology value; generates early ROI; trains teams; morale boost",
        topic: 'General Knowledge'
    },
    {
        id: 'G83',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "\"Belt velocity\" in Six Sigma refers to:",
        optionsBank: [
            { id: 'G83_O1', text: 'Speed of career progression', correct: false },
            { id: 'G83_O2', text: 'Number of projects completed per year', correct: true },
            { id: 'G83_O3', text: 'Training duration', correct: false },
            { id: 'G83_O4', text: 'Team size', correct: false },
            { id: 'G83_O5', text: 'Financial savings rate', correct: false },
            { id: 'G83_O6', text: 'Project cycle time', correct: false },
            { id: 'G83_O7', text: 'Belt salary increase', correct: false }
        ],
        explanation: "Measures productivity; typical: 3-5 projects/year for Green Belt; 6-8 for Black Belt; throughput",
        topic: 'General Knowledge'
    },
    {
        id: 'G84',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Control Plan in Six Sigma projects documents:",
        optionsBank: [
            { id: 'G84_O1', text: 'Initial problem statement', correct: false },
            { id: 'G84_O2', text: 'How to sustain improvements and prevent regression', correct: true },
            { id: 'G84_O3', text: 'Team member bios', correct: false },
            { id: 'G84_O4', text: 'Budget allocation', correct: false },
            { id: 'G84_O5', text: 'Customer feedback only', correct: false },
            { id: 'G84_O6', text: 'Project schedule', correct: false },
            { id: 'G84_O7', text: 'Historical background', correct: false }
        ],
        explanation: "Closing phase; specifies control methods, monitoring frequency, responsibility; sustainability",
        topic: 'General Knowledge'
    },
    {
        id: 'G85',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Define phase\" primary output is:",
        optionsBank: [
            { id: 'G85_O1', text: 'Detailed statistical analysis', correct: false },
            { id: 'G85_O2', text: 'Problem statement, project charter, and goals', correct: true },
            { id: 'G85_O3', text: 'Process improvements', correct: false },
            { id: 'G85_O4', text: 'Root cause verification', correct: false },
            { id: 'G85_O5', text: 'Implementation plan', correct: false },
            { id: 'G85_O6', text: 'Statistical control limits', correct: false },
            { id: 'G85_O7', text: 'Customer complaints list', correct: false }
        ],
        explanation: "Sets project scope, objectives, CTQ; SIPOC diagram; business case established; foundation",
        topic: 'General Knowledge'
    },
    {
        id: 'G86',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Measure phase\" primary output is:",
        optionsBank: [
            { id: 'G86_O1', text: 'Root causes identified', correct: false },
            { id: 'G86_O2', text: 'Baseline metrics and process capability established', correct: true },
            { id: 'G86_O3', text: 'Solutions designed', correct: false },
            { id: 'G86_O4', text: 'Control procedures', correct: false },
            { id: 'G86_O5', text: 'Lessons learned document', correct: false },
            { id: 'G86_O6', text: 'Hypothesis test results', correct: false },
            { id: 'G86_O7', text: 'Improvement recommendations', correct: false }
        ],
        explanation: "Current state data collected; MSA conducted; capability assessed; 2k of data typical; benchmark",
        topic: 'General Knowledge'
    },
    {
        id: 'G87',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Analyze phase\" primary output is:",
        optionsBank: [
            { id: 'G87_O1', text: 'Data collection plan', correct: false },
            { id: 'G87_O2', text: 'Root causes validated and vital X variables identified', correct: true },
            { id: 'G87_O3', text: 'Solutions fully implemented', correct: false },
            { id: 'G87_O4', text: 'Team training completed', correct: false },
            { id: 'G87_O5', text: 'Budget finalized', correct: false },
            { id: 'G87_O6', text: 'Process flowchart updated', correct: false },
            { id: 'G87_O7', text: 'Customer requirements confirmed', correct: false }
        ],
        explanation: "Hypothesis tests conducted; correlations found; causes prioritized for impact; key X identification",
        topic: 'General Knowledge'
    },
    {
        id: 'G88',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Improve phase\" primary output is:",
        optionsBank: [
            { id: 'G88_O1', text: 'Problem definition', correct: false },
            { id: 'G88_O2', text: 'Solutions designed, piloted, and optimized', correct: true },
            { id: 'G88_O3', text: 'Baseline established', correct: false },
            { id: 'G88_O4', text: 'New control methods', correct: false },
            { id: 'G88_O5', text: 'Stakeholder approval', correct: false },
            { id: 'G88_O6', text: 'Root causes documented', correct: false },
            { id: 'G88_O7', text: 'Training materials created', correct: false }
        ],
        explanation: "Experiments run; DOE if needed; solutions validated before full rollout; optimal design achieved",
        topic: 'General Knowledge'
    },
    {
        id: 'G89',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The \"Control phase\" primary output is:",
        optionsBank: [
            { id: 'G89_O1', text: 'Root cause analysis', correct: false },
            { id: 'G89_O2', text: 'Control Plan and monitoring procedures established', correct: true },
            { id: 'G89_O3', text: 'Improvement solutions designed', correct: false },
            { id: 'G89_O4', text: 'Initial measurement', correct: false },
            { id: 'G89_O5', text: 'Problem statement', correct: false },
            { id: 'G89_O6', text: 'Team training completed', correct: false },
            { id: 'G89_O7', text: 'Budget reconciliation', correct: false }
        ],
        explanation: "Sustain improvements; standard work documented; control charts implemented; long-term sustainability",
        topic: 'General Knowledge'
    },
    {
        id: 'G90',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The term \"Six Sigma\" was registered as a trademark by:",
        optionsBank: [
            { id: 'G90_O1', text: 'General Electric', correct: false },
            { id: 'G90_O2', text: 'Motorola', correct: true },
            { id: 'G90_O3', text: 'IASSC', correct: false },
            { id: 'G90_O4', text: 'ASQ', correct: false },
            { id: 'G90_O5', text: 'Honeywell', correct: false },
            { id: 'G90_O6', text: 'Sony', correct: false },
            { id: 'G90_O7', text: 'Motorola Solutions', correct: false }
        ],
        explanation: "Trademarked in early 1990s by Motorola; methodology later adopted globally; proprietary origin",
        topic: 'General Knowledge'
    },
    {
        id: 'G91',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Six Sigma was adopted as central strategy by General Electric in:",
        optionsBank: [
            { id: 'G91_O1', text: '1986', correct: false },
            { id: 'G91_O2', text: '1990', correct: false },
            { id: 'G91_O3', text: '1995', correct: true },
            { id: 'G91_O4', text: '2000', correct: false },
            { id: 'G91_O5', text: '1980', correct: false },
            { id: 'G91_O6', text: '1988', correct: false },
            { id: 'G91_O7', text: '1998', correct: false }
        ],
        explanation: "Jack Welch championed Six Sigma; drove adoption across Fortune 500 companies; major milestone",
        topic: 'General Knowledge'
    },
    {
        id: 'G92',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "By the late 1990s, approximately what percentage of Fortune 500 companies had started Six Sigma initiatives?",
        optionsBank: [
            { id: 'G92_O1', text: 'One-third', correct: false },
            { id: 'G92_O2', text: 'Half', correct: false },
            { id: 'G92_O3', text: 'Two-thirds', correct: true },
            { id: 'G92_O4', text: 'Three-quarters', correct: false },
            { id: 'G92_O5', text: 'Nearly all', correct: false },
            { id: 'G92_O6', text: 'One-quarter', correct: false },
            { id: 'G92_O7', text: 'Ninety percent', correct: false }
        ],
        explanation: "Rapid adoption post-Jack Welch at GE; became industry standard; widespread acceptance",
        topic: 'General Knowledge'
    },
    {
        id: 'G93',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "Hypothesis testing in Six Sigma helps determine:",
        optionsBank: [
            { id: 'G93_O1', text: 'Customer preferences', correct: false },
            { id: 'G93_O2', text: 'Whether observed differences are statistically significant or due to chance', correct: true },
            { id: 'G93_O3', text: 'Process capability alone', correct: false },
            { id: 'G93_O4', text: 'Budget allocation', correct: false },
            { id: 'G93_O5', text: 'Team satisfaction', correct: false },
            { id: 'G93_O6', text: 'Supplier quality', correct: false },
            { id: 'G93_O7', text: 'Market opportunity', correct: false }
        ],
        explanation: "Tests null vs. alternative hypotheses; Analyze phase tool; p-values and alpha risk; rigor",
        topic: 'General Knowledge'
    },
    {
        id: 'G94',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In hypothesis testing, \"alpha risk\" refers to:",
        optionsBank: [
            { id: 'G94_O1', text: 'Probability of Type II error', correct: false },
            { id: 'G94_O2', text: 'Probability of rejecting null hypothesis when it is true (Type I error)', correct: true },
            { id: 'G94_O3', text: 'Sample size', correct: false },
            { id: 'G94_O4', text: 'Confidence interval', correct: false },
            { id: 'G94_O5', text: 'Statistical power', correct: false },
            { id: 'G94_O6', text: 'Significance value', correct: false },
            { id: 'G94_O7', text: 'P-value threshold', correct: false }
        ],
        explanation: "Significance level; typically 0.05 (5%); false positive rate; producer's risk",
        topic: 'General Knowledge'
    },
    {
        id: 'G95',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In hypothesis testing, \"beta risk\" refers to:",
        optionsBank: [
            { id: 'G95_O1', text: 'Probability of Type I error', correct: false },
            { id: 'G95_O2', text: 'Probability of failing to reject null hypothesis when it is false (Type II error)', correct: true },
            { id: 'G95_O3', text: 'Statistical significance', correct: false },
            { id: 'G95_O4', text: 'Process capability', correct: false },
            { id: 'G95_O5', text: 'Sample variance', correct: false },
            { id: 'G95_O6', text: 'Critical value', correct: false },
            { id: 'G95_O7', text: 'Confidence level', correct: false }
        ],
        explanation: "False negative rate; 1 - beta = statistical power; affects sample size calculation; consumer's risk",
        topic: 'General Knowledge'
    },
    {
        id: 'G96',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In Six Sigma, \"RTY\" (Rolled Throughput Yield) measures:",
        optionsBank: [
            { id: 'G96_O1', text: 'Gross production output', correct: false },
            { id: 'G96_O2', text: 'Percentage of output that passes all process steps without rework', correct: true },
            { id: 'G96_O3', text: 'Financial return on investment', correct: false },
            { id: 'G96_O4', text: 'Customer satisfaction', correct: false },
            { id: 'G96_O5', text: 'Equipment utilization', correct: false },
            { id: 'G96_O6', text: 'Labor efficiency', correct: false },
            { id: 'G96_O7', text: 'Cost per unit', correct: false }
        ],
        explanation: "Product of individual step yields; indicates end-to-end process quality; Measure phase metric",
        topic: 'General Knowledge'
    },
    {
        id: 'G97',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "\"First Time Yield\" (FTY) differs from RTY in that FTY:",
        optionsBank: [
            { id: 'G97_O1', text: 'Includes reworked parts', correct: false },
            { id: 'G97_O2', text: 'Measures output at single step without considering prior steps', correct: true },
            { id: 'G97_O3', text: 'Is always higher than RTY', correct: false },
            { id: 'G97_O4', text: 'Measures customer defects only', correct: false },
            { id: 'G97_O5', text: 'Includes scrap value', correct: false },
            { id: 'G97_O6', text: 'Measures overall line performance', correct: false },
            { id: 'G97_O7', text: 'Is always lower than RTY', correct: false }
        ],
        explanation: "FTY = step yield; RTY = product of all steps; RTY ≤ FTY always; local vs. global",
        topic: 'General Knowledge'
    },
    {
        id: 'G98',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In design of experiments (DOE), \"factors\" are:",
        optionsBank: [
            { id: 'G98_O1', text: 'Measurement errors', correct: false },
            { id: 'G98_O2', text: 'Independent variables being tested', correct: true },
            { id: 'G98_O3', text: 'Control limits', correct: false },
            { id: 'G98_O4', text: 'Customer requirements', correct: false },
            { id: 'G98_O5', text: 'Process outputs only', correct: false },
            { id: 'G98_O6', text: 'Response variables', correct: false },
            { id: 'G98_O7', text: 'Statistical interactions', correct: false }
        ],
        explanation: "Input variables (people, method, material); vary systematically to measure effects; X variables",
        topic: 'General Knowledge'
    },
    {
        id: 'G99',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "In design of experiments (DOE), \"levels\" are:",
        optionsBank: [
            { id: 'G99_O1', text: 'Process output measurements', correct: false },
            { id: 'G99_O2', text: 'Different values or settings of each factor', correct: true },
            { id: 'G99_O3', text: 'Statistical confidence ranges', correct: false },
            { id: 'G99_O4', text: 'Categorical data types', correct: false },
            { id: 'G99_O5', text: 'Control chart zones', correct: false },
            { id: 'G99_O6', text: 'Factor interactions', correct: false },
            { id: 'G99_O7', text: 'Experimental replicates', correct: false }
        ],
        explanation: "Low, medium, high settings; 2-level DOE most common (half-factorial designs); treatment combinations",
        topic: 'General Knowledge'
    },
    {
        id: 'G100',
        phase: 'general',
        module: 'General Knowledge',
        difficulty: 'medium',
        question: "The term \"operational excellence\" in Six Sigma context means:",
        optionsBank: [
            { id: 'G100_O1', text: 'Only meeting customer expectations', correct: false },
            { id: 'G100_O2', text: 'Consistent delivery of products/services exceeding expectations with efficiency', correct: true },
            { id: 'G100_O3', text: 'Maximum profit generation', correct: false },
            { id: 'G100_O4', text: 'Lowest cost production', correct: false },
            { id: 'G100_O5', text: 'Fastest production time', correct: false },
            { id: 'G100_O6', text: 'Highest employee satisfaction', correct: false },
            { id: 'G100_O7', text: 'Market share leadership', correct: false }
        ],
        explanation: "Combines quality, speed, cost, and customer focus; organizational capability built through Six Sigma",
        topic: 'General Knowledge'
    }
];
