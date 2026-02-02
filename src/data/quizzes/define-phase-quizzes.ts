import { QuizQuestion } from '@/types/quiz.types';

export const definePhaseQuizzes: QuizQuestion[] = [
    {
        id: 'D1',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The primary purpose of the Define phase is:",
        optionsBank: [
            { id: 'D1_O1', text: "Collect all process data", correct: false },
            { id: 'D1_O2', text: "Identify and clarify problem, scope, CTQ characteristics, project goals", correct: true },
            { id: 'D1_O3', text: "Perform statistical analysis", correct: false },
            { id: 'D1_O4', text: "Implement solutions", correct: false },
            { id: 'D1_O5', text: "Design control charts for monitoring", correct: false },
            { id: 'D1_O6', text: "Select process improvement methodology", correct: false }
        ],
        explanation: "Define phase establishes the foundation by clarifying the business problem, customer needs (VOC), critical-to-quality characteristics, and measurable project objectives before any measurement or analysis begins.",
        topic: 'Define Phase'
    },
    {
        id: 'D2',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A project charter must include all EXCEPT:",
        optionsBank: [
            { id: 'D2_O1', text: "Problem statement and goal", correct: false },
            { id: 'D2_O2', text: "Timeline and budget", correct: false },
            { id: 'D2_O3', text: "Detailed control charts", correct: true },
            { id: 'D2_O4', text: "Stakeholders and scope", correct: false },
            { id: 'D2_O5', text: "Business justification and ROI expectations", correct: false },
            { id: 'D2_O6', text: "Team member names and roles", correct: false }
        ],
        explanation: "Control charts are monitoring tools developed during the Control phase, not part of initial project charter documentation; the charter focuses on scope, goals, resources, and business case.",
        topic: 'Define Phase'
    },
    {
        id: 'D3',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "CTQ (Critical to Quality) characteristics are:",
        optionsBank: [
            { id: 'D3_O1', text: "Determined by engineering alone", correct: false },
            { id: 'D3_O2', text: "Customer requirements that matter most to success", correct: true },
            { id: 'D3_O3', text: "Always numerical measurements only", correct: false },
            { id: 'D3_O4', text: "Set by Six Sigma team opinion", correct: false },
            { id: 'D3_O5', text: "Process requirements independent of customer needs", correct: false },
            { id: 'D3_O6', text: "Financial targets set by management", correct: false }
        ],
        explanation: "CTQs are identified directly from Voice of Customer analysis and represent the specific product/service attributes that drive customer satisfaction and business success; they can be quantitative or qualitative.",
        topic: 'Define Phase'
    },
    {
        id: 'D4',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Voice of Customer (VOC) is gathered through:",
        optionsBank: [
            { id: 'D4_O1', text: "Customer surveys only", correct: false },
            { id: 'D4_O2', text: "Surveys, interviews, focus groups, complaint data, observations", correct: true },
            { id: 'D4_O3', text: "Assumptions", correct: false },
            { id: 'D4_O4', text: "Marketing department only", correct: false },
            { id: 'D4_O5', text: "Historical product performance data", correct: false },
            { id: 'D4_O6', text: "Competitor analysis only", correct: false }
        ],
        explanation: "Multiple VOC collection methods—surveys, interviews, focus groups, customer complaints, direct observation—capture comprehensive customer needs and expectations; single methods risk missing important insights.",
        topic: 'Define Phase'
    },
    {
        id: 'D5',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The 7 Muda (wastes) in Lean include:",
        optionsBank: [
            { id: 'D5_O1', text: "Overproduction, correction, inventory, motion, conveyance, overprocessing, waiting", correct: true },
            { id: 'D5_O2', text: "Mistakes, meetings, management, money, materials, methods, men", correct: false },
            { id: 'D5_O3', text: "Only cost-related items", correct: false },
            { id: 'D5_O4', text: "Varies by industry", correct: false },
            { id: 'D5_O5', text: "Quality defects, training, equipment breakdowns, scheduling", correct: false },
            { id: 'D5_O6', text: "Supplier issues, communication delays, rework cycles", correct: false }
        ],
        explanation: "Taiichi Ohno's seven wastes (Muda) are universal non-value-added activities: overproduction, correction/rework, inventory excess, motion inefficiency, conveyance, overprocessing, and waiting; fundamental to Lean elimination.",
        topic: 'Define Phase'
    },
    {
        id: 'D6',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Overproduction waste occurs when:",
        optionsBank: [
            { id: 'D6_O1', text: "Customers want more products", correct: false },
            { id: 'D6_O2', text: "Producing more than demand requires = inventory buildup and cost", correct: true },
            { id: 'D6_O3', text: "Quality improves", correct: false },
            { id: 'D6_O4', text: "Equipment operates faster", correct: false },
            { id: 'D6_O5', text: "Workforce is highly skilled", correct: false },
            { id: 'D6_O6', text: "Production schedule is optimized", correct: false }
        ],
        explanation: "Overproduction—making products beyond current customer demand—creates excess inventory, storage costs, obsolescence risk, and hides quality problems; directly contradicts Lean pull-based principles.",
        topic: 'Define Phase'
    },
    {
        id: 'D7',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Correction waste (Rework) includes:",
        optionsBank: [
            { id: 'D7_O1', text: "Time spent fixing errors and scrap costs", correct: true },
            { id: 'D7_O2', text: "Inspection activities only", correct: false },
            { id: 'D7_O3', text: "Training employees", correct: false },
            { id: 'D7_O4', text: "Preventive maintenance", correct: false },
            { id: 'D7_O5', text: "Quality assurance procedures", correct: false },
            { id: 'D7_O6', text: "Customer satisfaction surveys", correct: false }
        ],
        explanation: "Correction/rework waste represents the highest cost of poor quality—labor, materials, and lost time to fix mistakes that could have been prevented; prevention is always cheaper than correction.",
        topic: 'Define Phase'
    },
    {
        id: 'D8',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Inventory waste represents:",
        optionsBank: [
            { id: 'D8_O1', text: "Work-in-process and finished goods excess", correct: true },
            { id: 'D8_O2', text: "Only raw materials", correct: false },
            { id: 'D8_O3', text: "Necessary buffer stock", correct: false },
            { id: 'D8_O4', text: "Storage costs only", correct: false },
            { id: 'D8_O5', text: "Supplier delivery delays", correct: false },
            { id: 'D8_O6', text: "Production scheduling issues", correct: false }
        ],
        explanation: "Inventory waste includes excess work-in-process and finished goods that tie up capital, hide quality problems, and increase carrying costs; Lean seeks minimal necessary inventory for responsiveness.",
        topic: 'Define Phase'
    },
    {
        id: 'D9',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Motion waste refers to:",
        optionsBank: [
            { id: 'D9_O1', text: "Unnecessary movement of workers/equipment", correct: true },
            { id: 'D9_O2', text: "Transportation between locations", correct: false },
            { id: 'D9_O3', text: "Unnecessary machine cycles", correct: false },
            { id: 'D9_O4', text: "Worker efficiency", correct: false },
            { id: 'D9_O5', text: "Production line speed", correct: false },
            { id: 'D9_O6', text: "Equipment changeover time", correct: false }
        ],
        explanation: "Motion waste stems from inefficient workstation layout, poor ergonomics, or disorganized procedures; eliminating unnecessary reaching, bending, and searching reduces fatigue and improves throughput.",
        topic: 'Define Phase'
    },
    {
        id: 'D10',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Conveyance waste is:",
        optionsBank: [
            { id: 'D10_O1', text: "Transportation/movement of products and materials", correct: true },
            { id: 'D10_O2', text: "Worker movement only", correct: false },
            { id: 'D10_O3', text: "Shipping to customers", correct: false },
            { id: 'D10_O4', text: "Inventory storage", correct: false },
            { id: 'D10_O5', text: "Material handling labor", correct: false },
            { id: 'D10_O6', text: "Logistics network design", correct: false }
        ],
        explanation: "Conveyance waste is unnecessary movement of materials between process steps; excessive transport adds time, cost, and damage risk without adding customer value; minimize distances and handoffs.",
        topic: 'Define Phase'
    },
    {
        id: 'D11',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Overprocessing waste includes:",
        optionsBank: [
            { id: 'D11_O1', text: "Adding unnecessary features customers don't want", correct: true },
            { id: 'D11_O2', text: "Normal process steps", correct: false },
            { id: 'D11_O3', text: "Quality inspections", correct: false },
            { id: 'D11_O4', text: "Preventive maintenance", correct: false },
            { id: 'D11_O5', text: "Standard work procedures", correct: false },
            { id: 'D11_O6', text: "Customer training and support", correct: false }
        ],
        explanation: "Overprocessing—adding features, complexity, or precision beyond customer requirements—creates unnecessary cost and complexity; align process output exactly to stated CTQs and customer needs.",
        topic: 'Define Phase'
    },
    {
        id: 'D12',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Waiting waste describes:",
        optionsBank: [
            { id: 'D12_O1', text: "Production delays waiting for upstream process, information, approval", correct: true },
            { id: 'D12_O2', text: "Customer waiting time", correct: false },
            { id: 'D12_O3', text: "Queuing theory only", correct: false },
            { id: 'D12_O4', text: "Any pause in activity", correct: false },
            { id: 'D12_O5', text: "Resource unavailability", correct: false },
            { id: 'D12_O6', text: "Batch processing delays", correct: false }
        ],
        explanation: "Waiting waste is idle time when work cannot proceed due to upstream bottlenecks, missing approvals, or information delays; continuous flow and clear handoffs minimize wait time.",
        topic: 'Define Phase'
    },
    {
        id: 'D13',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The 5S Lean workplace organization consists of:",
        optionsBank: [
            { id: 'D13_O1', text: "Safety, Sustainability, Speed, Standardization, Support", correct: false },
            { id: 'D13_O2', text: "Sort, Shine, Standardize, Sustain, Self-Discipline", correct: true },
            { id: 'D13_O3', text: "Source, Schedule, Store, Stock, Sustain", correct: false },
            { id: 'D13_O4', text: "System, Structure, Strategy, Scope, Support", correct: false },
            { id: 'D13_O5', text: "Sort, Schedule, Shine, System, Sustain", correct: false },
            { id: 'D13_O6', text: "Setup, Safety, Schedule, System, Sustain", correct: false }
        ],
        explanation: "5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) creates visual, organized workplaces; each S builds on the previous: Sort removes waste, Set in order organizes, Shine cleans, Standardize sustains, and Sustain maintains discipline.",
        topic: 'Define Phase'
    },
    {
        id: 'D14',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Sort\" (Seiri) means:",
        optionsBank: [
            { id: 'D14_O1', text: "Cleaning and organizing", correct: false },
            { id: 'D14_O2', text: "Removing unnecessary items; keeping only essentials", correct: true },
            { id: 'D14_O3', text: "Creating standard procedures", correct: false },
            { id: 'D14_O4', text: "Continuous improvement", correct: false },
            { id: 'D14_O5', text: "Establishing visual controls", correct: false },
            { id: 'D14_O6', text: "Training staff on new methods", correct: false }
        ],
        explanation: "Sort (Seiri) eliminates everything not needed for current operations using red-tag programs; reduces clutter, confusion, and search time; asks \"Do we need this item in this location?\"",
        topic: 'Define Phase'
    },
    {
        id: 'D15',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Shine\" (Seiso) involves:",
        optionsBank: [
            { id: 'D15_O1', text: "Creating standard procedures", correct: false },
            { id: 'D15_O2', text: "Removing unnecessary items", correct: false },
            { id: 'D15_O3', text: "Cleaning, organizing, and maintaining equipment", correct: true },
            { id: 'D15_O4', text: "Training employees", correct: false },
            { id: 'D15_O5', text: "Establishing metrics and goals", correct: false },
            { id: 'D15_O6', text: "Implementing visual management systems", correct: false }
        ],
        explanation: "Shine (Seiso) means regular cleaning and maintenance of equipment and workspaces; exposes hidden defects, improves safety, and creates pride in the workplace; daily cleaning is built into work.",
        topic: 'Define Phase'
    },
    {
        id: 'D16',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Standardize\" (Seiketsu) means:",
        optionsBank: [
            { id: 'D16_O1', text: "All equipment must be identical", correct: false },
            { id: 'D16_O2', text: "Establishing standard procedures to sustain improvements", correct: true },
            { id: 'D16_O3', text: "Only for manufacturing", correct: false },
            { id: 'D16_O4', text: "Written policies only", correct: false },
            { id: 'D16_O5', text: "Compliance inspections and audits", correct: false },
            { id: 'D16_O6', text: "Management oversight mechanisms", correct: false }
        ],
        explanation: "Standardize (Seiketsu) codifies Sort, Shine, and Set in Order into standard work and procedures; prevents regression to old habits; creates consistency across all shifts and locations.",
        topic: 'Define Phase'
    },
    {
        id: 'D17',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "5S \"Sustain\" (Shitsuke) emphasizes:",
        optionsBank: [
            { id: 'D17_O1', text: "Continuous management oversight", correct: false },
            { id: 'D17_O2', text: "Discipline to maintain improvements through habit and culture", correct: true },
            { id: 'D17_O3', text: "Daily leadership", correct: false },
            { id: 'D17_O4', text: "Reward systems", correct: false },
            { id: 'D17_O5', text: "Regular training programs", correct: false },
            { id: 'D17_O6', text: "Audits and quality checks", correct: false }
        ],
        explanation: "Sustain (Shitsuke) embeds 5S as organizational habit and culture through discipline and commitment; without this final S, improvements fade as pressure eases and old behaviors return.",
        topic: 'Define Phase'
    },
    {
        id: 'D18',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cost of Poor Quality (COPQ) includes:",
        optionsBank: [
            { id: 'D18_O1', text: "Internal failure costs only (scrap, rework)", correct: false },
            { id: 'D18_O2', text: "External failure costs only (returns, warranties, customer loss)", correct: false },
            { id: 'D18_O3', text: "Both internal and external failure costs", correct: true },
            { id: 'D18_O4', text: "Prevention costs only", correct: false },
            { id: 'D18_O5', text: "Inspection and testing costs", correct: false },
            { id: 'D18_O6', text: "Labor and overhead allocation", correct: false }
        ],
        explanation: "COPQ encompasses all nonconformance costs: internal (scrap, rework, downtime, redesign) before customer delivery and external (returns, warranties, liability, reputation damage) after; total cost of failure.",
        topic: 'Define Phase'
    },
    {
        id: 'D19',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "COPQ internal failures include:",
        optionsBank: [
            { id: 'D19_O1', text: "Scrap, rework, downtime, redesign", correct: true },
            { id: 'D19_O2', text: "Customer complaints", correct: false },
            { id: 'D19_O3', text: "Lost future sales", correct: false },
            { id: 'D19_O4', text: "Regulatory fines only", correct: false },
            { id: 'D19_O5', text: "Product recalls and field repairs", correct: false },
            { id: 'D19_O6', text: "Market share loss", correct: false }
        ],
        explanation: "Internal failure costs occur before customer receipt: scrap of defective units, labor and materials for rework, production downtime, design changes, and engineering reviews—measurable internal expenses.",
        topic: 'Define Phase'
    },
    {
        id: 'D20',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "COPQ external failures include:",
        optionsBank: [
            { id: 'D20_O1', text: "Scrap and rework", correct: false },
            { id: 'D20_O2', text: "Returns, warranty claims, liability, customer loss, reputation damage", correct: true },
            { id: 'D20_O3', text: "Inspection and testing", correct: false },
            { id: 'D20_O4', text: "Prevention programs", correct: false },
            { id: 'D20_O5', text: "Employee training expenses", correct: false },
            { id: 'D20_O6', text: "Equipment maintenance costs", correct: false }
        ],
        explanation: "External failure costs occur after customer delivery: returns and refunds, warranty/service claims, legal liability, lost customer loyalty, and reputation/brand damage; typically 5–10x higher than internal failure costs.",
        topic: 'Define Phase'
    },
    {
        id: 'D21',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Pareto Principle (80:20 rule) states:",
        optionsBank: [
            { id: 'D21_O1', text: "80% of problems require 20% of solutions", correct: false },
            { id: 'D21_O2', text: "20% of causes account for 80% of effects", correct: true },
            { id: 'D21_O3', text: "80% of solutions fix 20% of defects", correct: false },
            { id: 'D21_O4', text: "80% of time spent on 20% of results", correct: false },
            { id: 'D21_O5', text: "20% of resources produce 80% of waste", correct: false },
            { id: 'D21_O6', text: "80% of customers generate 20% of revenue", correct: false }
        ],
        explanation: "Pareto Principle: roughly 20% of root causes drive 80% of observed problems; prioritize the vital few high-impact causes rather than spreading effort across trivial many; focus for maximum effect.",
        topic: 'Define Phase'
    },
    {
        id: 'D22',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Pareto analysis helps project selection by:",
        optionsBank: [
            { id: 'D22_O1', text: "Identifying all problems", correct: false },
            { id: 'D22_O2', text: "Ranking problems by frequency, cost, or impact", correct: true },
            { id: 'D22_O3', text: "Creating control charts", correct: false },
            { id: 'D22_O4', text: "Measuring customer satisfaction", correct: false },
            { id: 'D22_O5', text: "Analyzing historical trends", correct: false },
            { id: 'D22_O6', text: "Benchmarking against competitors", correct: false }
        ],
        explanation: "Pareto analysis ranks problems by frequency, impact, or cost to identify the high-value \"vital few\" projects; guides portfolio selection toward highest-ROI improvements; applies 80/20 principle practically.",
        topic: 'Define Phase'
    },
    {
        id: 'D23',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "DPU (Defects Per Unit) is calculated as:",
        optionsBank: [
            { id: 'D23_O1', text: "Total defects / number of units", correct: true },
            { id: 'D23_O2', text: "Defects / million opportunities", correct: false },
            { id: 'D23_O3', text: "Failures × number of units", correct: false },
            { id: 'D23_O4', text: "Units with defects / total units", correct: false },
            { id: 'D23_O5', text: "Total defects / total opportunities", correct: false },
            { id: 'D23_O6', text: "Defective units / sample size", correct: false }
        ],
        explanation: "DPU = Total Defects ÷ Number of Units; measures average number of defects per unit; simple metric that captures defect density; does not account for number of opportunities per unit.",
        topic: 'Define Phase'
    },
    {
        id: 'D24',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "DPMO (Defects Per Million Opportunities) metric:",
        optionsBank: [
            { id: 'D24_O1', text: "Same as DPU", correct: false },
            { id: 'D24_O2', text: "Defect rate scaled to one million opportunities", correct: true },
            { id: 'D24_O3', text: "Always less than DPU value", correct: false },
            { id: 'D24_O4', text: "Only applicable to manufacturing", correct: false },
            { id: 'D24_O5', text: "Number of failed units per million produced", correct: false },
            { id: 'D24_O6', text: "Statistical measure of process centering", correct: false }
        ],
        explanation: "DPMO = (Total Defects ÷ Total Opportunities) × 1,000,000; standardizes defect rates across different products, processes, and industries for cross-functional benchmarking and Six Sigma level assignment.",
        topic: 'Define Phase'
    },
    {
        id: 'D25',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "FTY (First Time Yield) represents:",
        optionsBank: [
            { id: 'D25_O1', text: "Total units produced / customers", correct: false },
            { id: 'D25_O2', text: "Good units produced on first pass / units attempted", correct: true },
            { id: 'D25_O3', text: "Units that require rework", correct: false },
            { id: 'D25_O4', text: "Customer acceptance rate", correct: false },
            { id: 'D25_O5', text: "Final quality inspection pass rate", correct: false },
            { id: 'D25_O6', text: "Overall process efficiency ratio", correct: false }
        ],
        explanation: "FTY = Good Units on First Pass ÷ Units Attempted; measures single-process-step success without rework; higher FTY indicates better process control and lower hidden factory costs.",
        topic: 'Define Phase'
    },
    {
        id: 'D26',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Y=f(X) in Six Sigma means:",
        optionsBank: [
            { id: 'D26_O1', text: "Yield equals a fixed calculation", correct: false },
            { id: 'D26_O2', text: "The output (Y) is a function of inputs/causes (X)", correct: true },
            { id: 'D26_O3', text: "Year follows X timeline", correct: false },
            { id: 'D26_O4', text: "Young trainees follow expert training", correct: false },
            { id: 'D26_O5', text: "Quality metrics depend on inspection frequency", correct: false },
            { id: 'D26_O6', text: "Results vary based on customer preferences", correct: false }
        ],
        explanation: "Y=f(X) expresses the fundamental problem-solving principle: process outputs (Y) depend on controllable inputs and process variables (X); Six Sigma focuses on identifying and optimizing the critical Xs.",
        topic: 'Define Phase'
    },
    {
        id: 'D27',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The \"5 Whys\" technique is used to:",
        optionsBank: [
            { id: 'D27_O1', text: "Question customer complaints", correct: false },
            { id: 'D27_O2', text: "Drill down to root causes by repeatedly asking \"why\"", correct: true },
            { id: 'D27_O3', text: "Develop project goals", correct: false },
            { id: 'D27_O4', text: "Measure process capability", correct: false },
            { id: 'D27_O5', text: "Identify process improvement opportunities", correct: false },
            { id: 'D27_O6', text: "Prioritize customer requirements", correct: false }
        ],
        explanation: "5 Whys iteratively explores cause-and-effect relationships: each \"why\" answer becomes the premise for the next question until root cause is uncovered; simple but powerful root-cause analysis method.",
        topic: 'Define Phase'
    },
    {
        id: 'D28',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem statement elements include:",
        optionsBank: [
            { id: 'D28_O1', text: "Problem, impact, baseline metrics, desired state", correct: true },
            { id: 'D28_O2', text: "Only the problem description", correct: false },
            { id: 'D28_O3', text: "Solutions proposed", correct: false },
            { id: 'D28_O4', text: "Budget and timeline only", correct: false },
            { id: 'D28_O5', text: "Team member expertise levels", correct: false },
            { id: 'D28_O6', text: "Historical improvement attempts", correct: false }
        ],
        explanation: "Effective problem statement clearly articulates the current issue, its business/operational impact, baseline performance data, and desired target state; provides context and measurability for project scope.",
        topic: 'Define Phase'
    },
    {
        id: 'D29',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A well-defined problem statement is:",
        optionsBank: [
            { id: 'D29_O1', text: "Very general", correct: false },
            { id: 'D29_O2', text: "Specific, measurable, relevant to business goals", correct: true },
            { id: 'D29_O3', text: "Long and detailed", correct: false },
            { id: 'D29_O4', text: "Based on assumptions", correct: false },
            { id: 'D29_O5', text: "Includes proposed solutions", correct: false },
            { id: 'D29_O6', text: "Written by Six Sigma team only", correct: false }
        ],
        explanation: "Strong problem statements are specific and quantifiable (e.g., \"3% defect rate costs $500K annually\"), focused on business impact, and avoid vague language or assumed solutions; clarity enables project success.",
        topic: 'Define Phase'
    },
    {
        id: 'D30',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "RTY (Rolled Throughput Yield) differs from FTY because:",
        optionsBank: [
            { id: 'D30_O1', text: "RTY is outdated", correct: false },
            { id: 'D30_O2', text: "RTY includes rework as additional defects", correct: true },
            { id: 'D30_O3', text: "RTY only for services", correct: false },
            { id: 'D30_O4', text: "RTY is faster to calculate", correct: false },
            { id: 'D30_O5', text: "RTY measures customer satisfaction", correct: false },
            { id: 'D30_O6', text: "RTY eliminates measurement error", correct: false }
        ],
        explanation: "RTY = FTY1 × FTY2 × FTY3... (product of all process steps); reveals hidden defects and rework across entire flow; typically much lower than individual FTY values, exposing system inefficiency.",
        topic: 'Define Phase'
    },
    {
        id: 'D31',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cycle time metric measures:",
        optionsBank: [
            { id: 'D31_O1', text: "Only production time", correct: false },
            { id: 'D31_O2', text: "Total time from process start to finish", correct: true },
            { id: 'D31_O3', text: "Customer wait time", correct: false },
            { id: 'D31_O4', text: "Inspection duration", correct: false },
            { id: 'D31_O5', text: "Time per unit produced", correct: false },
            { id: 'D31_O6', text: "Equipment uptime percentage", correct: false }
        ],
        explanation: "Cycle time is total elapsed time from process start to finish, including both value-added work and non-value-added delays (waiting, transport, inspection); key metric for throughput and responsiveness.",
        topic: 'Define Phase'
    },
    {
        id: 'D32',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Lead time includes:",
        optionsBank: [
            { id: 'D32_O1', text: "Only customer wait", correct: false },
            { id: 'D32_O2', text: "Order placement to delivery; includes cycle time + wait time", correct: true },
            { id: 'D32_O3', text: "Manufacturing time only", correct: false },
            { id: 'D32_O4', text: "Inspection activities", correct: false },
            { id: 'D32_O5', text: "Production scheduling time", correct: false },
            { id: 'D32_O6', text: "Shipping duration only", correct: false }
        ],
        explanation: "Lead time = customer order placement through delivery; encompasses all cycle time and external wait periods (queuing, supplier delays); critical metric for customer responsiveness and competitive advantage.",
        topic: 'Define Phase'
    },
    {
        id: 'D33',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Sigma level calculation requires:",
        optionsBank: [
            { id: 'D33_O1', text: "Cpk directly", correct: false },
            { id: 'D33_O2', text: "Standard deviation and specification limits", correct: true },
            { id: 'D33_O3', text: "Sample size only", correct: false },
            { id: 'D33_O4', text: "Customer satisfaction", correct: false },
            { id: 'D33_O5', text: "DPMO values only", correct: false },
            { id: 'D33_O6', text: "Historical baseline data", correct: false }
        ],
        explanation: "Sigma level is calculated from process standard deviation (σ) relative to specification limits; determines how many standard deviations the process can shift before exceeding limits; fundamental to Six Sigma benchmarking.",
        topic: 'Define Phase'
    },
    {
        id: 'D34',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "The relationship between Cpk and DPMO:",
        optionsBank: [
            { id: 'D34_O1', text: "No relationship", correct: false },
            { id: 'D34_O2', text: "Cpk 1.33 ≈ 63 DPMO; Cpk 1.67 ≈ 3.4 DPMO", correct: true },
            { id: 'D34_O3', text: "Always equal", correct: false },
            { id: 'D34_O4', text: "Industry dependent only", correct: false },
            { id: 'D34_O5', text: "Cpk is always higher than DPMO", correct: false },
            { id: 'D34_O6', text: "Inverse relationship only", correct: false }
        ],
        explanation: "Direct mathematical relationship: higher Cpk (better centering and spread control) corresponds to lower DPMO (fewer defects per million); Cpk 1.67 with 1.5σ shift = 3.4 DPMO = Six Sigma level.",
        topic: 'Define Phase'
    },
    {
        id: 'D35',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Baseline metrics establish:",
        optionsBank: [
            { id: 'D35_O1', text: "Target state only", correct: false },
            { id: 'D35_O2', text: "Current state performance before improvement begins", correct: true },
            { id: 'D35_O3', text: "Final project results", correct: false },
            { id: 'D35_O4', text: "Customer expectations", correct: false },
            { id: 'D35_O5', text: "Competitor performance levels", correct: false },
            { id: 'D35_O6', text: "Industry best practice standards", correct: false }
        ],
        explanation: "Baseline metrics quantify current-state process performance (defect rate, cycle time, cost, etc.) before any improvements; essential for measuring project impact and demonstrating ROI post-implementation.",
        topic: 'Define Phase'
    },
    {
        id: 'D36',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A Business Case for a project includes:",
        optionsBank: [
            { id: 'D36_O1', text: "Problem and goal only", correct: false },
            { id: 'D36_O2', text: "Financial impact, expected ROI, resources, timeline, alternatives", correct: true },
            { id: 'D36_O3', text: "Only management approval", correct: false },
            { id: 'D36_O4', text: "No financial analysis needed", correct: false },
            { id: 'D36_O5', text: "Customer feedback only", correct: false },
            { id: 'D36_O6', text: "Risk register information only", correct: false }
        ],
        explanation: "Business case justifies project investment by documenting problem impact, financial benefits (cost savings, revenue, quality), required resources, timeline, risks, and alternatives; critical for executive approval.",
        topic: 'Define Phase'
    },
    {
        id: 'D37',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Financial justification metrics include:",
        optionsBank: [
            { id: 'D37_O1', text: "Cost savings only", correct: false },
            { id: 'D37_O2', text: "Revenue increase, cost savings, quality improvement, efficiency gains", correct: true },
            { id: 'D37_O3', text: "Employee satisfaction only", correct: false },
            { id: 'D37_O4', text: "No metrics needed", correct: false },
            { id: 'D37_O5', text: "Market share projections", correct: false },
            { id: 'D37_O6', text: "Competitor analysis only", correct: false }
        ],
        explanation: "Comprehensive business case quantifies multiple value dimensions: direct cost savings, incremental revenue, quality/defect reduction value, capacity/efficiency gains, and customer satisfaction improvement; multi-dimensional ROI.",
        topic: 'Define Phase'
    },
    {
        id: 'D38',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "A Fishbone Diagram (Ishikawa) is used to:",
        optionsBank: [
            { id: 'D38_O1', text: "Identify all problems", correct: false },
            { id: 'D38_O2', text: "Visualize root causes organized by category", correct: true },
            { id: 'D38_O3', text: "Control processes", correct: false },
            { id: 'D38_O4', text: "Measure capability", correct: false },
            { id: 'D38_O5', text: "Schedule project activities", correct: false },
            { id: 'D38_O6', text: "Allocate team resources", correct: false }
        ],
        explanation: "Fishbone diagram organizes potential root causes into categories (People, Methods, Materials, Equipment, Environment, Management) branching from the problem statement; facilitates structured brainstorming and analysis.",
        topic: 'Define Phase'
    },
    {
        id: 'D39',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process Mapping serves to:",
        optionsBank: [
            { id: 'D39_O1', text: "Track individual task progress", correct: false },
            { id: 'D39_O2', text: "Understand process flow, activities, decision points, handoffs", correct: true },
            { id: 'D39_O3', text: "Only for manufacturing", correct: false },
            { id: 'D39_O4', text: "Replace written procedures", correct: false },
            { id: 'D39_O5', text: "Assign employee responsibilities", correct: false },
            { id: 'D39_O6', text: "Establish performance metrics", correct: false }
        ],
        explanation: "Process mapping creates visual representation of how work flows: steps, inputs/outputs, decision gates, rework loops, and handoffs between departments; reveals waste, bottlenecks, and improvement opportunities.",
        topic: 'Define Phase'
    },
    {
        id: 'D40',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Value Stream Mapping includes:",
        optionsBank: [
            { id: 'D40_O1', text: "Only production steps", correct: false },
            { id: 'D40_O2', text: "Value-added activities, waste, delays, information flow", correct: true },
            { id: 'D40_O3', text: "Customer satisfaction only", correct: false },
            { id: 'D40_O4', text: "Financial summary", correct: false },
            { id: 'D40_O5', text: "Equipment specifications only", correct: false },
            { id: 'D40_O6', text: "Labor cost allocation", correct: false }
        ],
        explanation: "Value Stream Map visualizes entire end-to-end process flow: separates value-added from non-value-added time, identifies delay sources, shows material and information flow, and highlights improvement targets for Lean transformation.",
        topic: 'Define Phase'
    },
    {
        id: 'D41',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Swim lane diagram shows:",
        optionsBank: [
            { id: 'D41_O1', text: "Only timelines", correct: false },
            { id: 'D41_O2', text: "Process steps, ownership by department/role", correct: true },
            { id: 'D41_O3', text: "Customer journey only", correct: false },
            { id: 'D41_O4', text: "Financial metrics", correct: false },
            { id: 'D41_O5', text: "Equipment utilization rates", correct: false },
            { id: 'D41_O6', text: "Budget allocation by function", correct: false }
        ],
        explanation: "Swim lane diagram displays process flow across horizontal lanes representing different departments/roles; clarifies ownership, accountability, and handoff points; reveals silos and cross-functional dependencies.",
        topic: 'Define Phase'
    },
    {
        id: 'D42',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Input-Process-Output-Customer (IPOC) diagram:",
        optionsBank: [
            { id: 'D42_O1', text: "Same as SIPOC", correct: false },
            { id: 'D42_O2', text: "Simplified version showing key process components", correct: true },
            { id: 'D42_O3', text: "For projects only", correct: false },
            { id: 'D42_O4', text: "Statistical analysis tool", correct: false },
            { id: 'D42_O5', text: "Quality inspection framework", correct: false },
            { id: 'D42_O6', text: "Capability measurement process", correct: false }
        ],
        explanation: "IPOC is simplified SIPOC (without Suppliers and Process detail); documents Inputs→Process→Outputs→Customers; good starting point for basic process understanding before full SIPOC analysis.",
        topic: 'Define Phase'
    },
    {
        id: 'D43',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "SIPOC stands for:",
        optionsBank: [
            { id: 'D43_O1', text: "Suppliers, Inputs, Process, Outputs, Customers", correct: true },
            { id: 'D43_O2', text: "System, Integration, Planning, Operations, Compliance", correct: false },
            { id: 'D43_O3', text: "Scope, Input, Process, Operations, Change", correct: false },
            { id: 'D43_O4', text: "Source, Infrastructure, Process, Outcomes, Costs", correct: false },
            { id: 'D43_O5', text: "Steps, Integration, Procedures, Objectives, Controls", correct: false },
            { id: 'D43_O6', text: "System, Input, Performance, Output, Compliance", correct: false }
        ],
        explanation: "SIPOC maps high-level process context: Suppliers provide Inputs to the Process, which produces Outputs delivered to Customers; essential Define-phase tool for understanding process boundaries and stakeholders.",
        topic: 'Define Phase'
    },
    {
        id: 'D44',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "High-level process documentation typically shows:",
        optionsBank: [
            { id: 'D44_O1', text: "Every detail and procedure", correct: false },
            { id: 'D44_O2', text: "Key steps, inputs, outputs, major decisions", correct: true },
            { id: 'D44_O3', text: "Only metrics", correct: false },
            { id: 'D44_O4', text: "Historical changes", correct: false },
            { id: 'D44_O5', text: "Employee training materials", correct: false },
            { id: 'D44_O6', text: "Compliance audit requirements", correct: false }
        ],
        explanation: "High-level documentation captures process overview: main activities, key inputs/outputs, decision points, but not granular detail; sufficient for baseline understanding and Define phase scope without overwhelming complexity.",
        topic: 'Define Phase'
    },
    {
        id: 'D45',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cross-functional team for Six Sigma includes:",
        optionsBank: [
            { id: 'D45_O1', text: "Only statisticians", correct: false },
            { id: 'D45_O2', text: "Representatives from affected departments, process expertise", correct: true },
            { id: 'D45_O3', text: "Only managers", correct: false },
            { id: 'D45_O4', text: "Customers only", correct: false },
            { id: 'D45_O5', text: "Finance and IT personnel", correct: false },
            { id: 'D45_O6', text: "External consultants only", correct: false }
        ],
        explanation: "Cross-functional teams include people from process-involved departments (operations, sales, quality, engineering, etc.) with practical knowledge; diverse perspectives enhance problem-solving and implementation buy-in.",
        topic: 'Define Phase'
    },
    {
        id: 'D46',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project team roles include:",
        optionsBank: [
            { id: 'D46_O1', text: "Black Belt and team members", correct: false },
            { id: 'D46_O2', text: "Champion, Black Belt, Green Belt, team members, process owner", correct: true },
            { id: 'D46_O3', text: "CEO and Black Belt", correct: false },
            { id: 'D46_O4', text: "No defined roles needed", correct: false },
            { id: 'D46_O5', text: "Quality manager and auditors", correct: false },
            { id: 'D46_O6', text: "Consultants and trainers only", correct: false }
        ],
        explanation: "Six Sigma team structure: Champion (executive sponsor removing barriers), Black Belt (project leader/technical expert), Green Belt (project support), Team Members (subject matter experts), Process Owner (long-term accountability).",
        topic: 'Define Phase'
    },
    {
        id: 'D47',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase deliverables typically include:",
        optionsBank: [
            { id: 'D47_O1', text: "Control charts", correct: false },
            { id: 'D47_O2', text: "Charter, problem statement, CTQ, SIPOC, baseline metrics, business case", correct: true },
            { id: 'D47_O3', text: "Data analysis", correct: false },
            { id: 'D47_O4', text: "Statistical results", correct: false },
            { id: 'D47_O5', text: "Process improvement recommendations", correct: false },
            { id: 'D47_O6', text: "Implementation procedures", correct: false }
        ],
        explanation: "Define phase outputs are documentation-focused: signed charter, clear problem statement with impact, CTQ identification, SIPOC map, baseline metrics, and justified business case; gate to Measure phase.",
        topic: 'Define Phase'
    },
    {
        id: 'D48',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define Tollgate (gate review) assesses:",
        optionsBank: [
            { id: 'D48_O1', text: "Problem clarity, goal definition, metrics defined", correct: true },
            { id: 'D48_O2', text: "Solutions proposed", correct: false },
            { id: 'D48_O3', text: "Statistical validity", correct: false },
            { id: 'D48_O4', text: "Implementation status", correct: false },
            { id: 'D48_O5', text: "Financial approval", correct: false },
            { id: 'D48_O6', text: "Regulatory compliance", correct: false }
        ],
        explanation: "Define tollgate evaluates: problem articulation clarity, measurable objectives, scope boundaries, CTQ identification, baseline data, business case, and team readiness; gate determines go/no-go to Measure phase.",
        topic: 'Define Phase'
    },
    {
        id: 'D49',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Stakeholder analysis in Define identifies:",
        optionsBank: [
            { id: 'D49_O1', text: "Only customers", correct: false },
            { id: 'D49_O2', text: "Interests, influence, potential impact of all parties", correct: true },
            { id: 'D49_O3', text: "Competitors only", correct: false },
            { id: 'D49_O4', text: "Suppliers", correct: false },
            { id: 'D49_O5', text: "Regulatory bodies only", correct: false },
            { id: 'D49_O6', text: "Employee salary structures", correct: false }
        ],
        explanation: "Stakeholder analysis maps who is affected, their interests in the project, their influence/power, and potential impact on success; enables communication strategies and risk mitigation for resistance or obstacles.",
        topic: 'Define Phase'
    },
    {
        id: 'D50',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project scope definition serves to:",
        optionsBank: [
            { id: 'D50_O1', text: "Make scope as large as possible", correct: false },
            { id: 'D50_O2', text: "Include everything mentioned by stakeholders", correct: false },
            { id: 'D50_O3', text: "Clearly bound the project and prevent scope creep", correct: true },
            { id: 'D50_O4', text: "Allow scope to change throughout project", correct: false },
            { id: 'D50_O5', text: "Maximize resource allocation", correct: false },
            { id: 'D50_O6', text: "Include all possible improvements", correct: false }
        ],
        explanation: "Clear scope definition specifies what IS and IS NOT included in the project; prevents scope creep (uncontrolled expansion); critical for timeline, budget, and resource management control.",
        topic: 'Define Phase'
    },
    {
        id: 'D51',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Risk identification in Define includes:",
        optionsBank: [
            { id: 'D51_O1', text: "No risks at this stage", correct: false },
            { id: 'D51_O2', text: "Potential barriers, resource constraints, resistance to change", correct: true },
            { id: 'D51_O3', text: "Only financial risks", correct: false },
            { id: 'D51_O4', text: "Technical risks only", correct: false },
            { id: 'D51_O5', text: "Schedule delay possibilities", correct: false },
            { id: 'D51_O6', text: "Quality measurement issues", correct: false }
        ],
        explanation: "Define-phase risks include: resource availability, competing priorities, stakeholder resistance, technical feasibility, data access, and organizational change capacity; early identification enables mitigation planning.",
        topic: 'Define Phase'
    },
    {
        id: 'D52',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project timeline development includes:",
        optionsBank: [
            { id: 'D52_O1', text: "Define phase duration only", correct: false },
            { id: 'D52_O2', text: "All DMAIC phases, milestones, dependencies, resource allocation", correct: true },
            { id: 'D52_O3', text: "No planning needed", correct: false },
            { id: 'D52_O4', text: "Based on budget only", correct: false },
            { id: 'D52_O5', text: "Team availability schedules", correct: false },
            { id: 'D52_O6', text: "Executive meeting dates", correct: false }
        ],
        explanation: "Project timeline encompasses all DMAIC phases with realistic duration estimates, critical milestones (tollgates), task dependencies, resource requirements, and contingency; guides execution and tracks progress.",
        topic: 'Define Phase'
    },
    {
        id: 'D53',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Communication plan in Define establishes:",
        optionsBank: [
            { id: 'D53_O1', text: "No communication needed", correct: false },
            { id: 'D53_O2', text: "Stakeholder updates, frequency, methods, responsible parties", correct: true },
            { id: 'D53_O3', text: "Only team meetings", correct: false },
            { id: 'D53_O4', text: "Email only", correct: false },
            { id: 'D53_O5', text: "Executive summary updates", correct: false },
            { id: 'D53_O6', text: "Project status reporting", correct: false }
        ],
        explanation: "Communication plan specifies: who gets updates, what information, how often, delivery methods, and responsible parties; ensures transparency, engagement, and prevents misinformation or resistance.",
        topic: 'Define Phase'
    },
    {
        id: 'D54',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project constraints include:",
        optionsBank: [
            { id: 'D54_O1', text: "Unlimited budget and time", correct: false },
            { id: 'D54_O2', text: "Time, budget, resources, technical limitations, organizational factors", correct: true },
            { id: 'D54_O3', text: "None—all projects have full support", correct: false },
            { id: 'D54_O4', text: "Only time constraints", correct: false },
            { id: 'D54_O5', text: "Personnel availability only", correct: false },
            { id: 'D54_O6', text: "Executive decision-making delays", correct: false }
        ],
        explanation: "Real-world constraints: limited budget, tight timelines, resource competition, technical/system boundaries, organizational culture, regulatory requirements; acknowledging constraints enables realistic planning.",
        topic: 'Define Phase'
    },
    {
        id: 'D55',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Business metric alignment means:",
        optionsBank: [
            { id: 'D55_O1', text: "All improvement projects are equally valuable", correct: false },
            { id: 'D55_O2', text: "Six Sigma projects must support organizational strategic goals", correct: true },
            { id: 'D55_O3', text: "Projects create value regardless of business need", correct: false },
            { id: 'D55_O4', text: "No alignment required", correct: false },
            { id: 'D55_O5', text: "Only financial metrics matter", correct: false },
            { id: 'D55_O6', text: "Customer satisfaction is the only measure", correct: false }
        ],
        explanation: "Strategic alignment ensures Six Sigma projects drive organizational priorities (revenue growth, cost reduction, quality, customer satisfaction); improves portfolio ROI and executive support.",
        topic: 'Define Phase'
    },
    {
        id: 'D56',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer requirements hierarchy typically shows:",
        optionsBank: [
            { id: 'D56_O1', text: "All requirements equally important", correct: false },
            { id: 'D56_O2', text: "Must-haves (CTQ), performance needs, excitement factors", correct: true },
            { id: 'D56_O3', text: "Only price requirements", correct: false },
            { id: 'D56_O4', text: "No hierarchy needed", correct: false },
            { id: 'D56_O5', text: "Regulatory requirements only", correct: false },
            { id: 'D56_O6', text: "Competitor feature lists", correct: false }
        ],
        explanation: "Kano model: must-haves (basic expectations—absence causes dissatisfaction), performance needs (more is better), and excitement factors (unexpected delighters); prioritizes improvement focus strategically.",
        topic: 'Define Phase'
    },
    {
        id: 'D57',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Competitive analysis in Define shows:",
        optionsBank: [
            { id: 'D57_O1', text: "All competitors identical", correct: false },
            { id: 'D57_O2', text: "How performance compares to best-in-class or competitors", correct: true },
            { id: 'D57_O3', text: "Historical trends only", correct: false },
            { id: 'D57_O4', text: "No competitive factors relevant", correct: false },
            { id: 'D57_O5', text: "Pricing strategies only", correct: false },
            { id: 'D57_O6', text: "Marketing campaign analysis", correct: false }
        ],
        explanation: "Competitive benchmarking provides context for improvement targets: current performance vs. competitors vs. industry best-in-class; justifies project priority and sets realistic improvement goals.",
        topic: 'Define Phase'
    },
    {
        id: 'D58',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Market research inputs to Define phase:",
        optionsBank: [
            { id: 'D58_O1', text: "Not needed", correct: false },
            { id: 'D58_O2', text: "Customer expectations, industry trends, regulatory requirements", correct: true },
            { id: 'D58_O3', text: "Only sales data", correct: false },
            { id: 'D58_O4', text: "Competitor pricing only", correct: false },
            { id: 'D58_O5', text: "Historical performance metrics", correct: false },
            { id: 'D58_O6', text: "Employee survey results", correct: false }
        ],
        explanation: "Market research informs: customer priorities and expectations, industry standards, regulatory/compliance needs, competitive positioning; provides external context for internal project objectives.",
        topic: 'Define Phase'
    },
    {
        id: 'D59',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Regulatory requirements in Define:",
        optionsBank: [
            { id: 'D59_O1', text: "Not relevant to operations", correct: false },
            { id: 'D59_O2', text: "Compliance needs that constrain or shape process design", correct: true },
            { id: 'D59_O3', text: "Only for heavily regulated industries", correct: false },
            { id: 'D59_O4', text: "Determined by Six Sigma team", correct: false },
            { id: 'D59_O5', text: "Considered only in Improve phase", correct: false },
            { id: 'D59_O6', text: "Managed by external auditors only", correct: false }
        ],
        explanation: "Regulatory constraints (FDA, ISO, environmental, labor, industry standards) may limit process design options; defining these boundaries early prevents solutions that violate compliance requirements.",
        topic: 'Define Phase'
    },
    {
        id: 'D60',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Core team size for typical project:",
        optionsBank: [
            { id: 'D60_O1', text: "50+ members", correct: false },
            { id: 'D60_O2', text: "5-10 core members with extended team as needed", correct: true },
            { id: 'D60_O3', text: "2-3 only", correct: false },
            { id: 'D60_O4', text: "Whole organization", correct: false },
            { id: 'D60_O5', text: "15-20 minimum", correct: false },
            { id: 'D60_O6', text: "Only Black Belt and Champion", correct: false }
        ],
        explanation: "Optimal core team: 5-10 members (manageable for coordination) representing key functions plus extended team (subject matter experts) for specific phases; larger teams slow decision-making.",
        topic: 'Define Phase'
    },
    {
        id: 'D61',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project charter approval sequence:",
        optionsBank: [
            { id: 'D61_O1', text: "Not required", correct: false },
            { id: 'D61_O2', text: "Team develops, sponsor approves, stakeholders informed", correct: true },
            { id: 'D61_O3', text: "Only team review", correct: false },
            { id: 'D61_O4', text: "Continuous revision without approval", correct: false },
            { id: 'D61_O5', text: "Executive committee approval only", correct: false },
            { id: 'D61_O6', text: "Customer sign-off required", correct: false }
        ],
        explanation: "Charter development: team drafts with inputs, Champion/sponsor formally approves (provides authority and commitment), stakeholders receive communication; formal approval ensures governance and resource commitment.",
        topic: 'Define Phase'
    },
    {
        id: 'D62',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Preliminary root cause hypothesis in Define:",
        optionsBank: [
            { id: 'D62_O1', text: "Not developed", correct: false },
            { id: 'D62_O2', text: "Initial theories to be tested in later phases", correct: true },
            { id: 'D62_O3', text: "Confirmed root causes", correct: false },
            { id: 'D62_O4', text: "Final analysis only", correct: false },
            { id: 'D62_O5', text: "Team consensus on solutions", correct: false },
            { id: 'D62_O6', text: "Statistical proof of cause", correct: false }
        ],
        explanation: "Preliminary hypotheses based on team expertise and brainstorming guide data collection strategy in Measure phase; tested rigorously in Analyze phase; prevents bias from jumping to conclusions.",
        topic: 'Define Phase'
    },
    {
        id: 'D63',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase duration typically:",
        optionsBank: [
            { id: 'D63_O1', text: "2-3 weeks for typical project", correct: true },
            { id: 'D63_O2', text: "1-2 days", correct: false },
            { id: 'D63_O3', text: "Several months", correct: false },
            { id: 'D63_O4', text: "One year", correct: false },
            { id: 'D63_O5', text: "1-2 weeks always", correct: false },
            { id: 'D63_O6', text: "Duration dependent on budget", correct: false }
        ],
        explanation: "Typical Define phase: 2-3 weeks including data gathering, charter development, team kickoff, VOC collection, and tollgate review; longer for complex cross-functional processes.",
        topic: 'Define Phase'
    },
    {
        id: 'D64',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Kickoff meeting in Define serves to:",
        optionsBank: [
            { id: 'D64_O1', text: "Finalize solutions", correct: false },
            { id: 'D64_O2', text: "Align team, communicate vision, establish norms, build commitment", correct: true },
            { id: 'D64_O3', text: "Present results", correct: false },
            { id: 'D64_O4', text: "No meeting needed", correct: false },
            { id: 'D64_O5', text: "Conduct statistical training", correct: false },
            { id: 'D64_O6', text: "Review competitor analysis", correct: false }
        ],
        explanation: "Kickoff meeting builds psychological safety and team cohesion: introduces project vision and goals, establishes ground rules and communication norms, clarifies roles, and secures commitment and enthusiasm.",
        topic: 'Define Phase'
    },
    {
        id: 'D65',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process owner engagement in Define:",
        optionsBank: [
            { id: 'D65_O1', text: "Not needed", correct: false },
            { id: 'D65_O2', text: "Critical for process understanding and implementation success", correct: true },
            { id: 'D65_O3', text: "Only during Control phase", correct: false },
            { id: 'D65_O4', text: "Optional involvement", correct: false },
            { id: 'D65_O5', text: "Involved after improvements are designed", correct: false },
            { id: 'D65_O6', text: "Part-time participation only", correct: false }
        ],
        explanation: "Process owner is critical stakeholder from Define onward: provides process knowledge, builds team buy-in, ensures feasibility of improvements, and commits to Control-phase sustainability post-project.",
        topic: 'Define Phase'
    },
    {
        id: 'D66',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Supplier analysis in SIPOC identifies:",
        optionsBank: [
            { id: 'D66_O1', text: "Only external vendors", correct: false },
            { id: 'D66_O2', text: "Internal and external sources of inputs; quality expectations", correct: true },
            { id: 'D66_O3', text: "Competitors", correct: false },
            { id: 'D66_O4', text: "Not necessary", correct: false },
            { id: 'D66_O5', text: "Equipment manufacturers only", correct: false },
            { id: 'D66_O6', text: "Service providers for outsourcing", correct: false }
        ],
        explanation: "Supplier analysis maps input sources (internal departments, external vendors, contracted services) and quality/reliability expectations; identifies upstream process quality impact on project success.",
        topic: 'Define Phase'
    },
    {
        id: 'D67',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer identification in SIPOC:",
        optionsBank: [
            { id: 'D67_O1', text: "Only external customers", correct: false },
            { id: 'D67_O2', text: "Internal and external receivers of process outputs", correct: true },
            { id: 'D67_O3', text: "Shareholders only", correct: false },
            { id: 'D67_O4', text: "No customer definition needed", correct: false },
            { id: 'D67_O5', text: "End-consumers only", correct: false },
            { id: 'D67_O6', text: "Government regulatory bodies", correct: false }
        ],
        explanation: "SIPOC customers include internal downstream users (next process step) and external end-customers; understanding both perspectives ensures process outputs meet all needs; enables complete CTQ definition.",
        topic: 'Define Phase'
    },
    {
        id: 'D68',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process inputs in SIPOC include:",
        optionsBank: [
            { id: 'D68_O1', text: "Only materials", correct: false },
            { id: 'D68_O2', text: "Materials, information, labor, equipment, services", correct: true },
            { id: 'D68_O3', text: "Only services", correct: false },
            { id: 'D68_O4', text: "Time and money only", correct: false },
            { id: 'D68_O5', text: "Raw materials exclusively", correct: false },
            { id: 'D68_O6', text: "Customer specifications only", correct: false }
        ],
        explanation: "Complete input view: tangible (materials, equipment, parts), intangible (information, instructions, data), and human resources (labor, expertise); missing inputs create bottlenecks and defects.",
        topic: 'Define Phase'
    },
    {
        id: 'D69',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process outputs in SIPOC include:",
        optionsBank: [
            { id: 'D69_O1', text: "Only products", correct: false },
            { id: 'D69_O2', text: "Products, services, information, waste, decisions", correct: true },
            { id: 'D69_O3', text: "Only revenue", correct: false },
            { id: 'D69_O4', text: "Data only", correct: false },
            { id: 'D69_O5', text: "Tangible goods exclusively", correct: false },
            { id: 'D69_O6', text: "Customer invoices only", correct: false }
        ],
        explanation: "Process outputs span primary (products/services delivered to customers), secondary (reports, information, approvals to other functions), and waste/byproducts; complete view for CTQ definition.",
        topic: 'Define Phase'
    },
    {
        id: 'D70',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Suppliers' role in Define phase:",
        optionsBank: [
            { id: 'D70_O1', text: "Not involved", correct: false },
            { id: 'D70_O2', text: "Provide input data, constraints, capability information", correct: true },
            { id: 'D70_O3', text: "Make process decisions", correct: false },
            { id: 'D70_O4', text: "Only during Improve phase", correct: false },
            { id: 'D70_O5', text: "Conduct process analysis", correct: false },
            { id: 'D70_O6', text: "Approve all project changes", correct: false }
        ],
        explanation: "Supplier input: provide specifications, lead times, quality standards, constraints, and capability data; critical for understanding input-side bottlenecks and improvement feasibility.",
        topic: 'Define Phase'
    },
    {
        id: 'D71',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer involvement during Define:",
        optionsBank: [
            { id: 'D71_O1', text: "Not needed until later phases", correct: false },
            { id: 'D71_O2', text: "Essential for accurate VOC and CTQ identification", correct: true },
            { id: 'D71_O3', text: "Only for surveys", correct: false },
            { id: 'D71_O4', text: "Marketing handles customer contact", correct: false },
            { id: 'D71_O5', text: "Involved in tollgate reviews only", correct: false },
            { id: 'D71_O6', text: "Interview-based feedback only", correct: false }
        ],
        explanation: "Early customer engagement captures authentic voice: interviews, focus groups, observation, complaint analysis; prevents solutions that miss key customer needs or over-engineer non-critical attributes.",
        topic: 'Define Phase'
    },
    {
        id: 'D72',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Brainstorming in Define session rules:",
        optionsBank: [
            { id: 'D72_O1', text: "Manager makes all suggestions", correct: false },
            { id: 'D72_O2', text: "All ideas welcomed without criticism; build on others' ideas", correct: true },
            { id: 'D72_O3', text: "Silent individual thinking only", correct: false },
            { id: 'D72_O4', text: "No rules needed", correct: false },
            { id: 'D72_O5', text: "Most senior person decides ideas", correct: false },
            { id: 'D72_O6', text: "Debate each idea immediately", correct: false }
        ],
        explanation: "Effective brainstorming requires psychological safety: defer judgment, welcome all ideas, build on others' thoughts, encourage wild ideas; generates quantity before quality; prevents self-censoring.",
        topic: 'Define Phase'
    },
    {
        id: 'D73',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Affinity diagram in Define:",
        optionsBank: [
            { id: 'D73_O1', text: "Same as flowchart", correct: false },
            { id: 'D73_O2', text: "Groups ideas/data into logical categories", correct: true },
            { id: 'D73_O3', text: "Time-sequenced process", correct: false },
            { id: 'D73_O4', text: "Statistical plot", correct: false },
            { id: 'D73_O5', text: "Risk matrix visualization", correct: false },
            { id: 'D73_O6', text: "Project timeline representation", correct: false }
        ],
        explanation: "Affinity diagram organizes brainstorm output: group related ideas, identify themes and patterns, reduce volume; transforms raw brainstorm data into structured categories for further analysis.",
        topic: 'Define Phase'
    },
    {
        id: 'D74',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Priority Matrix in Define helps:",
        optionsBank: [
            { id: 'D74_O1', text: "Control processes", correct: false },
            { id: 'D74_O2', text: "Evaluate and rank project ideas/solutions", correct: true },
            { id: 'D74_O3', text: "Calculate statistics", correct: false },
            { id: 'D74_O4', text: "Create schedules", correct: false },
            { id: 'D74_O5', text: "Assess team performance", correct: false },
            { id: 'D74_O6', text: "Analyze financial data", correct: false }
        ],
        explanation: "Priority Matrix (2×2 grid) evaluates options on impact vs. effort or importance vs. urgency; enables data-driven selection of high-value projects; reduces subjectivity in prioritization.",
        topic: 'Define Phase'
    },
    {
        id: 'D75',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Success criteria in Define includes:",
        optionsBank: [
            { id: 'D75_O1', text: "Project completion only", correct: false },
            { id: 'D75_O2', text: "Financial metrics, quality improvement, customer satisfaction, timeline", correct: true },
            { id: 'D75_O3', text: "Team satisfaction only", correct: false },
            { id: 'D75_O4', text: "No criteria needed", correct: false },
            { id: 'D75_O5', text: "Executive approval only", correct: false },
            { id: 'D75_O6', text: "Cost reduction target only", correct: false }
        ],
        explanation: "Comprehensive success criteria: ROI/cost savings target, defect/quality reduction %, customer satisfaction improvement, on-time project completion; measurable, specific, and business-aligned.",
        topic: 'Define Phase'
    },
    {
        id: 'D76',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "VOC-to-CTQ translation process:",
        optionsBank: [
            { id: 'D76_O1', text: "Direct copy of customer words", correct: false },
            { id: 'D76_O2', text: "Convert customer needs into measurable process specifications", correct: true },
            { id: 'D76_O3', text: "Marketing department responsibility", correct: false },
            { id: 'D76_O4', text: "Done after Measure phase", correct: false },
            { id: 'D76_O5', text: "Based on engineering assumptions", correct: false },
            { id: 'D76_O6', text: "Requires statistical analysis only", correct: false }
        ],
        explanation: "Translation: qualitative VOC statements (\"fast delivery\", \"reliable\") become measurable CTQs (\"order-to-delivery ≤ 2 days\", \"uptime ≥ 99%\"); critical for objective project evaluation.",
        topic: 'Define Phase'
    },
    {
        id: 'D77',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Kano model customer satisfaction:",
        optionsBank: [
            { id: 'D77_O1', text: "All customer needs are equally important", correct: false },
            { id: 'D77_O2', text: "Must-haves create no satisfaction if met; disappointment if missing", correct: true },
            { id: 'D77_O3', text: "Price is the primary satisfaction driver", correct: false },
            { id: 'D77_O4', text: "More features always increase satisfaction", correct: false },
            { id: 'D77_O5', text: "Quality is the only satisfaction factor", correct: false },
            { id: 'D77_O6', text: "Customer expectations never change", correct: false }
        ],
        explanation: "Kano model: must-haves (basics—absence causes dissatisfaction but presence doesn't delight), performance needs (more is better), delighters (unexpected extras that exceed expectations); strategic differentiation.",
        topic: 'Define Phase'
    },
    {
        id: 'D78',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Scope creep prevention method:",
        optionsBank: [
            { id: 'D78_O1', text: "Ignore stakeholder requests", correct: false },
            { id: 'D78_O2', text: "Formal change control process and clear scope boundaries", correct: true },
            { id: 'D78_O3', text: "Avoid written scope document", correct: false },
            { id: 'D78_O4', text: "Extend timeline indefinitely", correct: false },
            { id: 'D78_O5', text: "No stakeholder involvement", correct: false },
            { id: 'D78_O6', text: "Frequent scope modifications", correct: false }
        ],
        explanation: "Scope creep control: clear definition in charter, formal change request process with impact analysis, scope verification at tollgates, communication of any changes; protects timeline and budget.",
        topic: 'Define Phase'
    },
    {
        id: 'D79',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Pre-mortem analysis in Define:",
        optionsBank: [
            { id: 'D79_O1', text: "Not applicable early in project", correct: false },
            { id: 'D79_O2', text: "Team imagines project failure to identify risks early", correct: true },
            { id: 'D79_O3', text: "Post-project retrospective only", correct: false },
            { id: 'D79_O4', text: "Audit of team capabilities", correct: false },
            { id: 'D79_O5', text: "Market competitor analysis", correct: false },
            { id: 'D79_O6', text: "Budget forecasting exercise", correct: false }
        ],
        explanation: "Pre-mortem: team imagines the project has failed and works backward to identify \"why\" (risks); psychological safety allows honest discussion of potential problems before they occur; valuable risk mitigation.",
        topic: 'Define Phase'
    },
    {
        id: 'D80',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Y (output) metric requirements:",
        optionsBank: [
            { id: 'D80_O1', text: "Qualitative descriptions", correct: false },
            { id: 'D80_O2', text: "Specific, measurable, linked to CTQ, baselined", correct: true },
            { id: 'D80_O3', text: "Financial metrics only", correct: false },
            { id: 'D80_O4', text: "Customer opinions", correct: false },
            { id: 'D80_O5', text: "Historical averages", correct: false },
            { id: 'D80_O6', text: "Industry benchmark data", correct: false }
        ],
        explanation: "Y metrics must be: specific and quantifiable (e.g., defect rate %), directly linked to CTQ, baseline established (current state), and trackable to measure project impact; foundation for hypothesis testing.",
        topic: 'Define Phase'
    },
    {
        id: 'D81',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project sponsor role in Define:",
        optionsBank: [
            { id: 'D81_O1', text: "No involvement needed", correct: false },
            { id: 'D81_O2', text: "Provides executive authority, removes barriers, secures resources", correct: true },
            { id: 'D81_O3', text: "Performs detailed analysis", correct: false },
            { id: 'D81_O4', text: "Manages day-to-day team activities", correct: false },
            { id: 'D81_O5', text: "Conducts statistical calculations", correct: false },
            { id: 'D81_O6', text: "Reports only at final review", correct: false }
        ],
        explanation: "Champion/Sponsor is executive advocate: approves charter, provides authority and accountability, removes organizational barriers, secures budget/resources, ensures strategic alignment, and facilitates change.",
        topic: 'Define Phase'
    },
    {
        id: 'D82',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Data collection planning in Define:",
        optionsBank: [
            { id: 'D82_O1', text: "Not needed until Measure phase", correct: false },
            { id: 'D82_O2', text: "Identify what data, sources, methods, timeline for Measure phase", correct: true },
            { id: 'D82_O3', text: "Only for statistical projects", correct: false },
            { id: 'D82_O4', text: "Determined by IT department", correct: false },
            { id: 'D82_O5', text: "Collection begins immediately", correct: false },
            { id: 'D82_O6', text: "Depends on random sampling only", correct: false }
        ],
        explanation: "Define phase includes preliminary data collection planning: identify key Y and X variables, existing data sources, measurement gaps, collection methods, sample sizes; streamlines Measure phase execution.",
        topic: 'Define Phase'
    },
    {
        id: 'D83',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Measurement system requirements in Define:",
        optionsBank: [
            { id: 'D83_O1', text: "Not considered until Control phase", correct: false },
            { id: 'D83_O2', text: "Identify need to validate measurement accuracy and repeatability", correct: true },
            { id: 'D83_O3', text: "Only for manufacturing", correct: false },
            { id: 'D83_O4', text: "Auditor responsibility only", correct: false },
            { id: 'D83_O5', text: "Statistical calculation tools only", correct: false },
            { id: 'D83_O6', text: "External lab testing only", correct: false }
        ],
        explanation: "Define identifies Y and X metrics that must be measured; Measure phase includes Gauge R&R and MSA studies to ensure measurement system is accurate, repeatable, and capable before data analysis.",
        topic: 'Define Phase'
    },
    {
        id: 'D84',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Historical data review in Define:",
        optionsBank: [
            { id: 'D84_O1', text: "Never useful", correct: false },
            { id: 'D84_O2', text: "Provides baseline trends, patterns, variability insight", correct: true },
            { id: 'D84_O3', text: "Replaces Voice of Customer", correct: false },
            { id: 'D84_O4', text: "Only if data is recent", correct: false },
            { id: 'D84_O5', text: "Marketing responsibility only", correct: false },
            { id: 'D84_O6', text: "Used for final project approval", correct: false }
        ],
        explanation: "Historical review: identify data availability, baseline metrics, trend patterns, seasonality, and variability; informs preliminary hypotheses and confirms need for improved processes or systems.",
        topic: 'Define Phase'
    },
    {
        id: 'D85',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Organizational culture consideration in Define:",
        optionsBank: [
            { id: 'D85_O1', text: "Not relevant to technical projects", correct: false },
            { id: 'D85_O2', text: "Shapes communication, change approach, and implementation strategy", correct: true },
            { id: 'D85_O3', text: "Only marketing concern", correct: false },
            { id: 'D85_O4', text: "Determined by HR alone", correct: false },
            { id: 'D85_O5', text: "Addressed only after implementation", correct: false },
            { id: 'D85_O6', text: "Never changes within projects", correct: false }
        ],
        explanation: "Organizational culture (hierarchical vs. collaborative, risk tolerance, change readiness) informs communication style, stakeholder engagement approach, and implementation pace; ignoring it increases resistance.",
        topic: 'Define Phase'
    },
    {
        id: 'D86',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Assumption validation in Define:",
        optionsBank: [
            { id: 'D86_O1', text: "Not necessary", correct: false },
            { id: 'D86_O2', text: "Question and verify assumptions about problem, process, solutions", correct: true },
            { id: 'D86_O3', text: "Accept all team member statements", correct: false },
            { id: 'D86_O4', text: "Only done by leadership", correct: false },
            { id: 'D86_O5', text: "Irrelevant to project success", correct: false },
            { id: 'D86_O6', text: "Done after Measure phase", correct: false }
        ],
        explanation: "Challenge assumptions early: Is the problem really what we think? Is the process configured as stated? Do proposed solutions address root causes? Validates project direction and prevents wasted effort.",
        topic: 'Define Phase'
    },
    {
        id: 'D87',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Business impact statement includes:",
        optionsBank: [
            { id: 'D87_O1', text: "Problem description only", correct: false },
            { id: 'D87_O2', text: "Financial cost, operational impact, customer/employee consequences", correct: true },
            { id: 'D87_O3', text: "Competitor information", correct: false },
            { id: 'D87_O4', text: "Team member list", correct: false },
            { id: 'D87_O5', text: "Timeline projections", correct: false },
            { id: 'D87_O6', text: "Equipment specifications", correct: false }
        ],
        explanation: "Business impact statement quantifies the \"why\": annual cost of problem, operational disruptions, customer dissatisfaction effects, safety/compliance risks; justifies urgency and investment.",
        topic: 'Define Phase'
    },
    {
        id: 'D88',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project resource requirements include:",
        optionsBank: [
            { id: 'D88_O1', text: "Personnel only", correct: false },
            { id: 'D88_O2', text: "Personnel, budget, tools, data access, time commitment", correct: true },
            { id: 'D88_O3', text: "Financial investment only", correct: false },
            { id: 'D88_O4', text: "No formal resource planning needed", correct: false },
            { id: 'D88_O5', text: "External consultant fees only", correct: false },
            { id: 'D88_O6', text: "Equipment purchases only", correct: false }
        ],
        explanation: "Comprehensive resource plan: Black Belt/Green Belt time (FTE %), team member availability (% allocation), budget for tools/data/training, system access, and protected time from day-job pressures.",
        topic: 'Define Phase'
    },
    {
        id: 'D89',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Lessons from past projects in Define:",
        optionsBank: [
            { id: 'D89_O1', text: "Irrelevant to new projects", correct: false },
            { id: 'D89_O2', text: "Inform similar process improvement approaches and risk mitigation", correct: true },
            { id: 'D89_O3', text: "Only useful if successful", correct: false },
            { id: 'D89_O4', text: "External projects only", correct: false },
            { id: 'D89_O5', text: "Documented only after completion", correct: false },
            { id: 'D89_O6', text: "Reviewed only at project end", correct: false }
        ],
        explanation: "Organizational learning: review past Six Sigma projects—what worked, what failed, barriers encountered; apply lessons to Define phase planning, team composition, and risk management.",
        topic: 'Define Phase'
    },
    {
        id: 'D90',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase outputs handoff to Measure:",
        optionsBank: [
            { id: 'D90_O1', text: "No formal handoff needed", correct: false },
            { id: 'D90_O2', text: "Approved charter, problem statement, metrics, data plan, team alignment", correct: true },
            { id: 'D90_O3', text: "Preliminary solutions only", correct: false },
            { id: 'D90_O4', text: "Raw brainstorm notes", correct: false },
            { id: 'D90_O5', text: "Financial approvals only", correct: false },
            { id: 'D90_O6', text: "Team meeting minutes", correct: false }
        ],
        explanation: "Clean handoff: signed charter, clear problem/goals, identified CTQs, baseline metrics, data collection plan, engaged team, executive sponsor commitment; Measure phase begins with clear direction.",
        topic: 'Define Phase'
    },
    {
        id: 'D91',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Change management in Define context:",
        optionsBank: [
            { id: 'D91_O1', text: "Only applies after improvements", correct: false },
            { id: 'D91_O2', text: "Begins with stakeholder communication and change readiness assessment", correct: true },
            { id: 'D91_O3', text: "Not needed in early phases", correct: false },
            { id: 'D91_O4', text: "HR-only responsibility", correct: false },
            { id: 'D91_O5', text: "Managed during Control phase only", correct: false },
            { id: 'D91_O6', text: "Irrelevant to technical improvements", correct: false }
        ],
        explanation: "Change management starts in Define: assess organizational readiness, identify resistors and advocates, tailor communication approach, build coalition for change, and plan adoption strategy.",
        topic: 'Define Phase'
    },
    {
        id: 'D92',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process documentation baseline:",
        optionsBank: [
            { id: 'D92_O1', text: "Creates new procedures from scratch", correct: false },
            { id: 'D92_O2', text: "Records current-state process as baseline for comparison", correct: true },
            { id: 'D92_O3', text: "Only needed after improvements", correct: false },
            { id: 'D92_O4', text: "Quality assurance requirement only", correct: false },
            { id: 'D92_O5', text: "Formal document control only", correct: false },
            { id: 'D92_O6', text: "Not needed if process is stable", correct: false }
        ],
        explanation: "Baseline documentation: how the process currently operates (SIPOC, flowchart, timings, defect points); provides reference for measuring improvement and prevents regression post-implementation.",
        topic: 'Define Phase'
    },
    {
        id: 'D93',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Opportunity statement differs from problem statement in:",
        optionsBank: [
            { id: 'D93_O1', text: "No difference", correct: false },
            { id: 'D93_O2', text: "Opportunity framed as positive potential; problem as negative current state", correct: true },
            { id: 'D93_O3', text: "Opportunity costs more to address", correct: false },
            { id: 'D93_O4', text: "Opportunity doesn't require analysis", correct: false },
            { id: 'D93_O5', text: "Problem statements are never quantified", correct: false },
            { id: 'D93_O6', text: "Opportunity involves customers only", correct: false }
        ],
        explanation: "Problem statement: \"Defect rate is 5%, costing $200K annually.\" Opportunity statement: \"Reduce defects to <1% would save $150K+ and improve customer satisfaction.\" Same issue, different framing/perspective.",
        topic: 'Define Phase'
    },
    {
        id: 'D94',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Geographic/regional variations in Define:",
        optionsBank: [
            { id: 'D94_O1', text: "Assume all locations identical", correct: false },
            { id: 'D94_O2', text: "Identify if problem/process varies by location to scope appropriately", correct: true },
            { id: 'D94_O3', text: "Always scope all locations", correct: false },
            { id: 'D94_O4', text: "Irrelevant to improvement projects", correct: false },
            { id: 'D94_O5', text: "Addressed only in Control phase", correct: false },
            { id: 'D94_O6', text: "Not applicable to service processes", correct: false }
        ],
        explanation: "Process variation by location (factory, office, region) affects problem scope: may require separate projects per location or pilot-then-deploy approach; critical for project feasibility.",
        topic: 'Define Phase'
    },
    {
        id: 'D95',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase dependencies on external factors:",
        optionsBank: [
            { id: 'D95_O1', text: "No external factors exist", correct: false },
            { id: 'D95_O2', text: "Identify system/regulatory/supplier constraints that may limit improvements", correct: true },
            { id: 'D95_O3', text: "Never limit improvement scope", correct: false },
            { id: 'D95_O4', text: "Only financial constraints matter", correct: false },
            { id: 'D95_O5', text: "External factors determined after Analyze", correct: false },
            { id: 'D95_O6', text: "Always controllable by team", correct: false }
        ],
        explanation: "Boundary conditions: system limitations, regulatory requirements, supplier dependencies, budget caps, timeline constraints; acknowledge early to set realistic expectations and design feasible solutions.",
        topic: 'Define Phase'
    },
    {
        id: 'D96',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define metrics linkage to business strategy:",
        optionsBank: [
            { id: 'D96_O1', text: "Not necessary for local improvements", correct: false },
            { id: 'D96_O2', text: "Y metrics must connect to organizational strategic objectives", correct: true },
            { id: 'D96_O3', text: "Linkage determined after project completion", correct: false },
            { id: 'D96_O4', text: "Only for cost reduction projects", correct: false },
            { id: 'D96_O5', text: "Finance-only responsibility", correct: false },
            { id: 'D96_O6', text: "Generic metrics apply to all projects", correct: false }
        ],
        explanation: "Metrics alignment: project targets (Y improvements) must ladder to strategic priorities (growth, margin, customer loyalty, efficiency); ensures portfolio ROI and executive commitment.",
        topic: 'Define Phase'
    },
    {
        id: 'D97',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Soft vs. hard benefits in business case:",
        optionsBank: [
            { id: 'D97_O1', text: "All benefits are identical", correct: false },
            { id: 'D97_O2', text: "Hard = quantified costs/revenue; Soft = difficult-to-quantify improvements", correct: true },
            { id: 'D97_O3', text: "Hard benefits are never achieved", correct: false },
            { id: 'D97_O4', text: "Soft benefits irrelevant to ROI", correct: false },
            { id: 'D97_O5', text: "Only hard benefits count", correct: false },
            { id: 'D97_O6', text: "Soft benefits are marketing claims", correct: false }
        ],
        explanation: "Hard benefits: direct cost savings, revenue increase, measurable defect reduction. Soft benefits: improved morale, customer satisfaction, competitive positioning; both matter for holistic business case.",
        topic: 'Define Phase'
    },
    {
        id: 'D98',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Expected vs. actual scope in projects:",
        optionsBank: [
            { id: 'D98_O1', text: "Always identical", correct: false },
            { id: 'D98_O2', text: "Define phase clarifies boundaries to match expectations", correct: true },
            { id: 'D98_O3', text: "Gap is inevitable and ignored", correct: false },
            { id: 'D98_O4', text: "Stakeholders always agree initially", correct: false },
            { id: 'D98_O5', text: "Scope changes are prohibited", correct: false },
            { id: 'D98_O6', text: "No planning prevents gaps", correct: false }
        ],
        explanation: "Scope definition bridges expectations: what each stakeholder thinks should be included vs. actual project boundaries; documented agreement prevents scope creep and stakeholder disappointment.",
        topic: 'Define Phase'
    },
    {
        id: 'D99',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Iterative refinement during Define:",
        optionsBank: [
            { id: 'D99_O1', text: "One-pass process only", correct: false },
            { id: 'D99_O2', text: "Problem statement, CTQ, scope refined through feedback loops", correct: true },
            { id: 'D99_O3', text: "Changes always delayed", correct: false },
            { id: 'D99_O4', text: "Team input not incorporated", correct: false },
            { id: 'D99_O5', text: "Final decisions made without discussion", correct: false },
            { id: 'D99_O6', text: "Stakeholder input irrelevant", correct: false }
        ],
        explanation: "Define is not linear: brainstorm → organize → refine → validate → refine again; incorporates feedback from preliminary data, stakeholder input, and team consensus; produces shared ownership.",
        topic: 'Define Phase'
    },
    {
        id: 'D100',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase success indicators:",
        optionsBank: [
            { id: 'D100_O1', text: "Meeting scheduled only", correct: false },
            { id: 'D100_O2', text: "Signed charter, clear problem, identified CTQs, engaged team, readiness to measure", correct: true },
            { id: 'D100_O3', text: "Draft document completion", correct: false },
            { id: 'D100_O4', text: "Budget allocation only", correct: false },
            { id: 'D100_O5', text: "Executive approval without clarity", correct: false },
            { id: 'D100_O6', text: "Team meeting attendance", correct: false }
        ],
        explanation: "Define phase success: approved charter with clear governance, problem/goal articulation understood by all, CTQs identified and prioritized, team aligned and engaged, baseline metrics established, ready to launch Measure phase confidently.",
        topic: 'Define Phase'
    },
    {
        id: 'D101',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Operational definition in Define establishes:",
        optionsBank: [
            { id: 'D101_O1', text: "How each metric will be measured and calculated", correct: true },
            { id: 'D101_O2', text: "Customer expectations only", correct: false },
            { id: 'D101_O3', text: "Team member responsibilities", correct: false },
            { id: 'D101_O4', text: "Budget allocations", correct: false },
            { id: 'D101_O5', text: "Timeline estimates", correct: false },
            { id: 'D101_O6', text: "Supplier requirements", correct: false }
        ],
        explanation: "Operational definition removes ambiguity: \"defect\" means exactly this, measured this way, using this equipment/standard; prevents different team members from measuring the same thing differently.",
        topic: 'Define Phase'
    },
    {
        id: 'D102',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Voice of Business (VOB) differs from Voice of Customer in that VOB:",
        optionsBank: [
            { id: 'D102_O1', text: "Is less important", correct: false },
            { id: 'D102_O2', text: "Focuses on financial, operational, and strategic priorities", correct: true },
            { id: 'D102_O3', text: "Only applies to cost reduction", correct: false },
            { id: 'D102_O4', text: "Comes from external sources", correct: false },
            { id: 'D102_O5', text: "Never conflicts with VOC", correct: false },
            { id: 'D102_O6', text: "Is determined by competitors", correct: false }
        ],
        explanation: "VOB = internal business requirements (profit, growth, efficiency, risk reduction); VOC = customer needs; successful projects align both—meeting customer needs profitably.",
        topic: 'Define Phase'
    },
    {
        id: 'D103',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project-specific metrics in Define establish:",
        optionsBank: [
            { id: 'D103_O1', text: "Generic industry benchmarks", correct: false },
            { id: 'D103_O2', text: "Specific improvement targets unique to this project", correct: true },
            { id: 'D103_O3', text: "Historical performance levels", correct: false },
            { id: 'D103_O4', text: "Competitor performance only", correct: false },
            { id: 'D103_O5', text: "Customer satisfaction surveys", correct: false },
            { id: 'D103_O6', text: "Cost minimization goals", correct: false }
        ],
        explanation: "Project-specific targets: reduce defects from 5% to <1%, improve cycle time from 10 days to 5 days, increase customer satisfaction from 75% to 90%; clear, measurable, achievable objectives.",
        topic: 'Define Phase'
    },
    {
        id: 'D104',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Charter approval gate ensures:",
        optionsBank: [
            { id: 'D104_O1', text: "No changes are allowed", correct: false },
            { id: 'D104_O2', text: "Problem clarity, stakeholder alignment, executive commitment before proceeding", correct: true },
            { id: 'D104_O3', text: "Budget is fully allocated", correct: false },
            { id: 'D104_O4', text: "Solutions are pre-approved", correct: false },
            { id: 'D104_O5', text: "Team is fully trained", correct: false },
            { id: 'D104_O6', text: "Data collection is complete", correct: false }
        ],
        explanation: "Charter gate review: problem well-defined?, CTQ clear?, scope bounded?, business case justified?, team ready?, sponsor committed?, resources allocated?; no compromise on fundamentals.",
        topic: 'Define Phase'
    },
    {
        id: 'D105',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process stability baseline importance:",
        optionsBank: [
            { id: 'D105_O1', text: "Not needed if process is improving", correct: false },
            { id: 'D105_O2', text: "Essential to understand current-state variation and improvement opportunity", correct: true },
            { id: 'D105_O3', text: "Only for manufacturing processes", correct: false },
            { id: 'D105_O4', text: "Determined after Analyze phase", correct: false },
            { id: 'D105_O5', text: "Irrelevant if customer complains", correct: false },
            { id: 'D105_O6', text: "Applies only to cost metrics", correct: false }
        ],
        explanation: "Stability baseline: how much variation exists in current process? What's minimum vs. maximum? Is variation consistent or unpredictable? Guides realistic improvement targets and measurement strategy.",
        topic: 'Define Phase'
    },
    {
        id: 'D106',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Stakeholder communication during Define includes:",
        optionsBank: [
            { id: 'D106_O1', text: "Only formal announcements", correct: false },
            { id: 'D106_O2', text: "Problem visibility, project importance, team roles, timeline expectations", correct: true },
            { id: 'D106_O3', text: "Results announcement only", correct: false },
            { id: 'D106_O4', text: "No communication needed", correct: false },
            { id: 'D106_O5', text: "Email only", correct: false },
            { id: 'D106_O6', text: "Executive briefing only", correct: false }
        ],
        explanation: "Early, transparent communication builds awareness, reduces rumors, identifies concerns, demonstrates commitment; tailored for different audiences (executives, teams, support staff) with relevant context.",
        topic: 'Define Phase'
    },
    {
        id: 'D107',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Data quality considerations in Define:",
        optionsBank: [
            { id: 'D107_O1', text: "Not needed until Measure phase", correct: false },
            { id: 'D107_O2', text: "Identify data availability, accuracy issues, access barriers early", correct: true },
            { id: 'D107_O3', text: "Assume all data is usable", correct: false },
            { id: 'D107_O4', text: "IT responsibility only", correct: false },
            { id: 'D107_O5', text: "Data quality improves automatically", correct: false },
            { id: 'D107_O6', text: "Only for large datasets", correct: false }
        ],
        explanation: "Define identifies: Is data available in systems? What quality issues exist (duplicates, missing values, outdated)? Who has access? Can we pull it? Planning early prevents Measure-phase delays.",
        topic: 'Define Phase'
    },
    {
        id: 'D108',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Competitive advantage perspective in Define:",
        optionsBank: [
            { id: 'D108_O1', text: "Not relevant to operations", correct: false },
            { id: 'D108_O2', text: "Project should address competitive weakness or differentiate", correct: true },
            { id: 'D108_O3', text: "Only applies to sales", correct: false },
            { id: 'D108_O4', text: "Never changes competitive position", correct: false },
            { id: 'D108_O5', text: "Marketing responsibility only", correct: false },
            { id: 'D108_O6', text: "Irrelevant to quality improvements", correct: false }
        ],
        explanation: "Strategic context: Does this improvement close competitive gap? Enable differentiation? Strengthen market position? Improves project urgency and resource allocation priority.",
        topic: 'Define Phase'
    },
    {
        id: 'D109',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Preliminary root cause categorization in Define:",
        optionsBank: [
            { id: 'D109_O1', text: "Waste of time before analysis", correct: false },
            { id: 'D109_O2', text: "Broad grouping of suspected causes to focus data collection", correct: true },
            { id: 'D109_O3', text: "Final root cause determination", correct: false },
            { id: 'D109_O4', text: "Statistical analysis of causes", correct: false },
            { id: 'D109_O5', text: "Solution implementation planning", correct: false },
            { id: 'D109_O6', text: "Team training material", correct: false }
        ],
        explanation: "Brainstorm potential causes, group into categories (People, Process, Material, etc.); guides Measure phase data collection to test hypotheses; prevents random data gathering.",
        topic: 'Define Phase'
    },
    {
        id: 'D110',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Budget justification in business case requires:",
        optionsBank: [
            { id: 'D110_O1', text: "No specific amounts", correct: false },
            { id: 'D110_O2', text: "Estimated costs linked to expected ROI and payback period", correct: true },
            { id: 'D110_O3', text: "Only labor costs", correct: false },
            { id: 'D110_O4', text: "Arbitrary allocation", correct: false },
            { id: 'D110_O5', text: "Equipment costs only", correct: false },
            { id: 'D110_O6', text: "No business case needed", correct: false }
        ],
        explanation: "Budget breakdown: Black Belt/Green Belt labor, team time, tools/software, training, travel, consulting; ROI calculation (benefits/costs) and payback period demonstrate financial viability.",
        topic: 'Define Phase'
    },
    {
        id: 'D111',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem scope breadth considerations:",
        optionsBank: [
            { id: 'D111_O1', text: "Always make it as large as possible", correct: false },
            { id: 'D111_O2', text: "Balance ambition with feasibility within timeline/resources", correct: true },
            { id: 'D111_O3', text: "Only one product can be addressed", correct: false },
            { id: 'D111_O4', text: "Multiple locations always complicate projects", correct: false },
            { id: 'D111_O5', text: "Breadth determines success automatically", correct: false },
            { id: 'D111_O6', text: "External factors cannot limit scope", correct: false }
        ],
        explanation: "Scope balance: too narrow = limited impact; too broad = impossible timeline/resources; typical project = single process improvement with 2-3 month timeline across one location.",
        topic: 'Define Phase'
    },
    {
        id: 'D112',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Measurement units standardization in Define:",
        optionsBank: [
            { id: 'D112_O1', text: "Not necessary", correct: false },
            { id: 'D112_O2', text: "Ensure all metrics use consistent units ($ vs %, vs days, etc.)", correct: true },
            { id: 'D112_O3', text: "Only for financial metrics", correct: false },
            { id: 'D112_O4', text: "Determined by equipment", correct: false },
            { id: 'D112_O5', text: "Can be changed mid-project", correct: false },
            { id: 'D112_O6', text: "Irrelevant to comparison", correct: false }
        ],
        explanation: "Unit standardization: Is Y measured in dollars? Percentage? Days? Parts per million? Standardized units enable comparison across departments, locations, and time periods; prevents confusion.",
        topic: 'Define Phase'
    },
    {
        id: 'D113',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process performance targets in Define reflect:",
        optionsBank: [
            { id: 'D113_O1', text: "Wishes without analysis", correct: false },
            { id: 'D113_O2', text: "Customer CTQ, competitive benchmarks, operational capability", correct: true },
            { id: 'D113_O3', text: "Random numbers", correct: false },
            { id: 'D113_O4', text: "Only financial constraints", correct: false },
            { id: 'D113_O5', text: "Never based on data", correct: false },
            { id: 'D113_O6', text: "Set by team preference", correct: false }
        ],
        explanation: "Target setting: What do customers require (CTQ)? What are competitors achieving? What can this process realistically reach? Targets should be ambitious but achievable with focused effort.",
        topic: 'Define Phase'
    },
    {
        id: 'D114',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Internal stakeholder buy-in strategy in Define:",
        optionsBank: [
            { id: 'D114_O1', text: "Ignore concerns", correct: false },
            { id: 'D114_O2', text: "Engage early, address concerns, demonstrate respect for input", correct: true },
            { id: 'D114_O3', text: "Announce decision only", correct: false },
            { id: 'D114_O4', text: "Force participation", correct: false },
            { id: 'D114_O5', text: "Limit information sharing", correct: false },
            { id: 'D114_O6', text: "Avoid group discussions", correct: false }
        ],
        explanation: "Buy-in builds through: transparent communication, genuinely seeking input, acknowledging concerns, adjusting plans based on feedback, demonstrating respect; prevents passive resistance.",
        topic: 'Define Phase'
    },
    {
        id: 'D115',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process capability vs. process performance distinction:",
        optionsBank: [
            { id: 'D115_O1', text: "No difference", correct: false },
            { id: 'D115_O2', text: "Capability = potential (short-term); Performance = actual (long-term)", correct: true },
            { id: 'D115_O3', text: "Performance is always better", correct: false },
            { id: 'D115_O4', text: "Only one metric needed", correct: false },
            { id: 'D115_O5', text: "Capability never improves", correct: false },
            { id: 'D115_O6', text: "Performance is unmeasurable", correct: false }
        ],
        explanation: "Capability (short-term, favorable conditions) vs. Performance (long-term, real-world variation); performance is lower due to special causes; Define phase baseline typically measures performance.",
        topic: 'Define Phase'
    },
    {
        id: 'D116',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Team skill assessment in Define:",
        optionsBank: [
            { id: 'D116_O1', text: "Not needed", correct: false },
            { id: 'D116_O2', text: "Identify training gaps (statistics, tools, soft skills) to address", correct: true },
            { id: 'D116_O3', text: "Only for new Black Belts", correct: false },
            { id: 'D116_O4', text: "Done after training begins", correct: false },
            { id: 'D116_O5', text: "HR responsibility only", correct: false },
            { id: 'D116_O6', text: "Irrelevant to project success", correct: false }
        ],
        explanation: "Define identifies gaps: Does team need DOE training? Statistical software training? Facilitation skills? Plans just-in-time training to support project execution without overloading upfront.",
        topic: 'Define Phase'
    },
    {
        id: 'D117',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer satisfaction measurement in Define context:",
        optionsBank: [
            { id: 'D117_O1', text: "Not relevant at this stage", correct: false },
            { id: 'D117_O2', text: "Baseline current satisfaction to measure improvement impact", correct: true },
            { id: 'D117_O3', text: "Only after improvements implemented", correct: false },
            { id: 'D117_O4', text: "Survey department responsibility", correct: false },
            { id: 'D117_O5', text: "Marketing metric only", correct: false },
            { id: 'D117_O6', text: "Qualitative feedback only", correct: false }
        ],
        explanation: "Define baseline: What is current customer satisfaction? Which attributes drive satisfaction? Define tracks satisfaction as one Y metric; shows before/after project impact.",
        topic: 'Define Phase'
    },
    {
        id: 'D118',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cross-departmental process ownership challenges:",
        optionsBank: [
            { id: 'D118_O1', text: "Do not exist", correct: false },
            { id: 'D118_O2', text: "Multiple owners with different priorities; define governance clearly", correct: true },
            { id: 'D118_O3', text: "Always resolved easily", correct: false },
            { id: 'D118_O4', text: "Ignored in Define phase", correct: false },
            { id: 'D118_O5', text: "Never affect project success", correct: false },
            { id: 'D118_O6', text: "Resolved by upper management", correct: false }
        ],
        explanation: "Cross-functional processes: define clear accountability (who is the primary owner? who supports?), decision authority (who approves changes?), and incentive alignment; prevents blame-shifting.",
        topic: 'Define Phase'
    },
    {
        id: 'D119',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Market timing considerations in Define:",
        optionsBank: [
            { id: 'D119_O1', text: "Irrelevant to operations", correct: false },
            { id: 'D119_O2', text: "Consider seasonality, sales cycles, business events affecting project timing", correct: true },
            { id: 'D119_O3', text: "Always start immediately", correct: false },
            { id: 'D119_O4', text: "Never affects project feasibility", correct: false },
            { id: 'D119_O5', text: "Only sales concern", correct: false },
            { id: 'D119_O6', text: "Determined by team preference", correct: false }
        ],
        explanation: "Timing context: Don't pilot new process during peak season; align data collection windows to normal operations; consider end-of-month/quarter/year data anomalies; plan accordingly.",
        topic: 'Define Phase'
    },
    {
        id: 'D120',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Threshold for initiating improvement projects:",
        optionsBank: [
            { id: 'D120_O1', text: "Any problem justifies a project", correct: false },
            { id: 'D120_O2', text: "Impact × probability × cost must exceed project investment", correct: true },
            { id: 'D120_O3', text: "Never needed assessment", correct: false },
            { id: 'D120_O4', text: "Only financial impact matters", correct: false },
            { id: 'D120_O5', text: "No evaluation required", correct: false },
            { id: 'D120_O6', text: "All problems are equal priority", correct: false }
        ],
        explanation: "Project threshold: Does expected benefit ($150K savings) exceed project cost (Black Belt time $30K + team $20K)? ROI > 1? Strategic fit? Quick filters prevent resource waste on low-impact projects.",
        topic: 'Define Phase'
    },
    {
        id: 'D121',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Regulatory impact on project scope:",
        optionsBank: [
            { id: 'D121_O1', text: "Never affects scope", correct: false },
            { id: 'D121_O2', text: "May prohibit or require specific design; clarify constraints early", correct: true },
            { id: 'D121_O3', text: "Only for pharmaceutical/medical", correct: false },
            { id: 'D121_O4', text: "Addressed after Improve phase", correct: false },
            { id: 'D121_O5', text: "Legal responsibility only", correct: false },
            { id: 'D121_O6', text: "Irrelevant to improvements", correct: false }
        ],
        explanation: "Regulatory check: FDA requirements? ISO standards? Environmental rules? Labor laws? May mandate process controls, documentation, testing; constraint-based approach prevents non-compliant solutions.",
        topic: 'Define Phase'
    },
    {
        id: 'D122',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Supplier performance baseline in Define:",
        optionsBank: [
            { id: 'D122_O1', text: "Not relevant", correct: false },
            { id: 'D122_O2', text: "Establish current quality/delivery metrics to identify input constraints", correct: true },
            { id: 'D122_O3', text: "Only relevant after improvements", correct: false },
            { id: 'D122_O4', text: "Procurement responsibility only", correct: false },
            { id: 'D122_O5', text: "Cannot be measured", correct: false },
            { id: 'D122_O6', text: "Has no impact on project", correct: false }
        ],
        explanation: "Supplier baseline: What is current quality level? Lead time? Defect rate? If supplier input quality is root cause, improvement must involve supplier engagement; know constraints upfront.",
        topic: 'Define Phase'
    },
    {
        id: 'D123',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Technology enablement consideration in Define:",
        optionsBank: [
            { id: 'D123_O1', text: "Always requires new technology", correct: false },
            { id: 'D123_O2', text: "Identify if process changes need system support or automation", correct: true },
            { id: 'D123_O3', text: "IT decision exclusively", correct: false },
            { id: 'D123_O4', text: "Irrelevant to lean improvements", correct: false },
            { id: 'D123_O5', text: "Only for manufacturing", correct: false },
            { id: 'D123_O6', text: "Addressed only in Improve phase", correct: false }
        ],
        explanation: "Tech assessment: Will improved process require new systems/tools? Are current systems barriers? Can Excel work or do we need automation? Define constraints/opportunities for realistic solution design.",
        topic: 'Define Phase'
    },
    {
        id: 'D124',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Emotional intelligence in team formation:",
        optionsBank: [
            { id: 'D124_O1', text: "Not important for technical projects", correct: false },
            { id: 'D124_O2', text: "Critical for managing conflict, building trust, sustaining engagement", correct: true },
            { id: 'D124_O3', text: "Only HR concern", correct: false },
            { id: 'D124_O4', text: "Skills-based selection only", correct: false },
            { id: 'D124_O5', text: "Irrelevant to Six Sigma", correct: false },
            { id: 'D124_O6', text: "Cannot be developed", correct: false }
        ],
        explanation: "EI matters: Can team members handle disagreement productively? Listen without judgment? Adapt to feedback? Stay composed under stress? EI skills enhance collaboration and resilience.",
        topic: 'Define Phase'
    },
    {
        id: 'D125',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Supply chain complexity in project scope:",
        optionsBank: [
            { id: 'D125_O1', text: "Always simplify scope", correct: false },
            { id: 'D125_O2', text: "Assess if multiple suppliers/locations complicate project feasibility", correct: true },
            { id: 'D125_O3', text: "Never a concern", correct: false },
            { id: 'D125_O4', text: "Procurement handles entirely", correct: false },
            { id: 'D125_O5', text: "Only for manufacturing", correct: false },
            { id: 'D125_O6', text: "Irrelevant to delivery", correct: false }
        ],
        explanation: "Supply complexity: Single supplier vs. multiple? Single location vs. global? Single product vs. multi-product? Complexity increases project duration and risk; adjust timeline/resources accordingly.",
        topic: 'Define Phase'
    },
    {
        id: 'D126',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Industry-specific performance standards in Define:",
        optionsBank: [
            { id: 'D126_O1', text: "Do not exist", correct: false },
            { id: 'D126_O2', text: "Reference to benchmark improvement targets and success criteria", correct: true },
            { id: 'D126_O3', text: "Only for manufacturing", correct: false },
            { id: 'D126_O4', text: "Always lower than current performance", correct: false },
            { id: 'D126_O5', text: "Irrelevant to projects", correct: false },
            { id: 'D126_O6', text: "Cannot be found", correct: false }
        ],
        explanation: "Industry benchmarks: What do competitors achieve? What standards apply (Six Sigma, ISO, Baldrige)? Research provides context for realistic targets and competitive positioning.",
        topic: 'Define Phase'
    },
    {
        id: 'D127',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase documentation review in charter:",
        optionsBank: [
            { id: 'D127_O1', text: "No review needed", correct: false },
            { id: 'D127_O2', text: "Verify problem statement, goals, CTQ clarity, completeness", correct: true },
            { id: 'D127_O3', text: "Only for formal projects", correct: false },
            { id: 'D127_O4', text: "Done by legal only", correct: false },
            { id: 'D127_O5', text: "Irrelevant to gate review", correct: false },
            { id: 'D127_O6', text: "Not part of approval", correct: false }
        ],
        explanation: "Charter review checklist: Is problem clear and quantified? Goals SMART? CTQs defined? Scope bounded? Business case justified? Team identified? Timeline realistic? Sponsor committed?",
        topic: 'Define Phase'
    },
    {
        id: 'D128',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Unintended consequences anticipation in Define:",
        optionsBank: [
            { id: 'D128_O1', text: "Not possible to predict", correct: false },
            { id: 'D128_O2', text: "Brainstorm potential negative impacts and mitigation strategies", correct: true },
            { id: 'D128_O3', text: "Only management concern", correct: false },
            { id: 'D128_O4', text: "Irrelevant to planning", correct: false },
            { id: 'D128_O5', text: "Never occur", correct: false },
            { id: 'D128_O6', text: "Cannot be mitigated", correct: false }
        ],
        explanation: "Unintended impacts: If we reduce processing time by 50%, will quality suffer? Will customers receive incomplete information? Will employees resist? Plan mitigation upfront.",
        topic: 'Define Phase'
    },
    {
        id: 'D129',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process maturity assessment in Define:",
        optionsBank: [
            { id: 'D129_O1', text: "Not needed", correct: false },
            { id: 'D129_O2', text: "Evaluate if process foundation is stable enough for improvement", correct: true },
            { id: 'D129_O3', text: "Only for new processes", correct: false },
            { id: 'D129_O4', text: "Operations only responsibility", correct: false },
            { id: 'D129_O5', text: "Irrelevant to Six Sigma", correct: false },
            { id: 'D129_O6', text: "Cannot be improved", correct: false }
        ],
        explanation: "Maturity check: Is process documented? Is it followed consistently? Are metrics tracked? If process is immature (undocumented, chaotic), foundational work may be needed before Six Sigma.",
        topic: 'Define Phase'
    },
    {
        id: 'D130',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer segmentation in VOC collection:",
        optionsBank: [
            { id: 'D130_O1', text: "All customers are identical", correct: false },
            { id: 'D130_O2', text: "Different customer types may have different CTQs and needs", correct: true },
            { id: 'D130_O3', text: "Not relevant to Define", correct: false },
            { id: 'D130_O4', text: "Marketing responsibility only", correct: false },
            { id: 'D130_O5', text: "Irrelevant to improvement", correct: false },
            { id: 'D130_O6', text: "Cannot be identified", correct: false }
        ],
        explanation: "Customer segments: Premium vs. cost-conscious? Large vs. small accounts? Different geographies? Each segment may prioritize different CTQs (speed vs. cost vs. quality); address in project scope.",
        topic: 'Define Phase'
    },
    {
        id: 'D131',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase resource commitment from business:",
        optionsBank: [
            { id: 'D131_O1', text: "Not necessary", correct: false },
            { id: 'D131_O2', text: "Allocated team time, budget, technology access, executive visibility", correct: true },
            { id: 'D131_O3', text: "Only Black Belt time matters", correct: false },
            { id: 'D131_O4', text: "Funding not required", correct: false },
            { id: 'D131_O5', text: "Without commitment, success guaranteed", correct: false },
            { id: 'D131_O6', text: "Part-time only commitment", correct: false }
        ],
        explanation: "Resource commitment = credibility. Without dedicated team time, budget, and sponsor visibility, project dies in daily job competition. Explicit commitment signals organizational priority.",
        topic: 'Define Phase'
    },
    {
        id: 'D132',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cost-benefit ratio calculation in Define:",
        optionsBank: [
            { id: 'D132_O1', text: "Not needed", correct: false },
            { id: 'D132_O2', text: "Expected benefits ÷ project costs to justify investment", correct: true },
            { id: 'D132_O3', text: "Only for financial projects", correct: false },
            { id: 'D132_O4', text: "Finance calculates independently", correct: false },
            { id: 'D132_O5', text: "Irrelevant to approval", correct: false },
            { id: 'D132_O6', text: "Cannot be estimated early", correct: false }
        ],
        explanation: "Benefit-cost ratio: If $150K benefit vs. $30K investment = 5:1 ratio; threshold varies by org but typically >3:1 preferred; drives prioritization and resource allocation.",
        topic: 'Define Phase'
    },
    {
        id: 'D133',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Pilot testing scope in Define planning:",
        optionsBank: [
            { id: 'D133_O1', text: "No pilot ever needed", correct: false },
            { id: 'D133_O2', text: "Define if solution will be piloted first or full-scale rollout immediately", correct: true },
            { id: 'D133_O3', text: "Always full-scale launch", correct: false },
            { id: 'D133_O4', text: "Pilots only for manufacturing", correct: false },
            { id: 'D133_O5', text: "Decided after Improve phase", correct: false },
            { id: 'D133_O6', text: "Irrelevant to success", correct: false }
        ],
        explanation: "Pilot strategy: Test solution on small scale first (one shift, one location, subset of customers) to validate before full rollout? De-risk; reduce implementation risk and resistance.",
        topic: 'Define Phase'
    },
    {
        id: 'D134',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Sustainability planning initiation in Define:",
        optionsBank: [
            { id: 'D134_O1', text: "Only in Control phase", correct: false },
            { id: 'D134_O2', text: "Identify process owner and control mechanisms needed post-improvement", correct: true },
            { id: 'D134_O3', text: "Not relevant in Define", correct: false },
            { id: 'D134_O4', text: "Only for manufacturing", correct: false },
            { id: 'D134_O5', text: "Irrelevant to project planning", correct: false },
            { id: 'D134_O6', text: "Cannot be planned early", correct: false }
        ],
        explanation: "Sustainability foundation: Define identifies process owner who will maintain gains. Control phase designs controls, but Define identifies who owns it long-term; prevents improvement regression.",
        topic: 'Define Phase'
    },
    {
        id: 'D135',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Competitive benchmarking sources in Define:",
        optionsBank: [
            { id: 'D135_O1', text: "Only internal historical data", correct: false },
            { id: 'D135_O2', text: "Industry reports, competitor analysis, best-in-class standards", correct: true },
            { id: 'D135_O3', text: "Always classified information", correct: false },
            { id: 'D135_O4', text: "Only large companies benchmark", correct: false },
            { id: 'D135_O5', text: "Data never available", correct: false },
            { id: 'D135_O6', text: "Irrelevant to target setting", correct: false }
        ],
        explanation: "Benchmarking sources: industry associations, consulting firms, published reports, JD Power, Gartner, analyst firms; external context prevents setting too-low targets and guides competitive positioning.",
        topic: 'Define Phase'
    },
    {
        id: 'D136',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Organizational readiness for change in Define:",
        optionsBank: [
            { id: 'D136_O1', text: "Assume organization is ready", correct: false },
            { id: 'D136_O2', text: "Assess culture, past change success, resources, leadership commitment", correct: true },
            { id: 'D136_O3', text: "Not relevant early on", correct: false },
            { id: 'D136_O4', text: "HR responsibility only", correct: false },
            { id: 'D136_O5', text: "Cannot be improved", correct: false },
            { id: 'D136_O6', text: "Irrelevant to project planning", correct: false }
        ],
        explanation: "Readiness assessment: Has organization successfully implemented changes before? Do people trust leadership? Are resources committed? Low readiness = longer timeline, more communication, change management.",
        topic: 'Define Phase'
    },
    {
        id: 'D137',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Voice of Employee (VOE) in Define context:",
        optionsBank: [
            { id: 'D137_O1', text: "Not relevant", correct: false },
            { id: 'D137_O2', text: "Employee input on current process pain points and improvement ideas", correct: true },
            { id: 'D137_O3', text: "Only for HR projects", correct: false },
            { id: 'D137_O4', text: "Never sought", correct: false },
            { id: 'D137_O5', text: "Irrelevant to improvements", correct: false },
            { id: 'D137_O6', text: "Always conflicts with customers", correct: false }
        ],
        explanation: "VOE captures frontline perspective: What slows them down? What frustrates them? What ideas do they have? Employees know processes intimately; their input improves solutions and builds buy-in.",
        topic: 'Define Phase'
    },
    {
        id: 'D138',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase iteration vs. completion distinction:",
        optionsBank: [
            { id: 'D138_O1', text: "One pass to completion", correct: false },
            { id: 'D138_O2', text: "Multiple cycles of feedback and refinement before tollgate", correct: true },
            { id: 'D138_O3', text: "No refinement needed", correct: false },
            { id: 'D138_O4', text: "Only for large projects", correct: false },
            { id: 'D138_O5', text: "Irrelevant to quality", correct: false },
            { id: 'D138_O6', text: "Wastes time", correct: false }
        ],
        explanation: "Iterative Define: draft charter → team review → refine → stakeholder input → refine → tollgate review → final approval; better clarity through multiple refinements than single attempt.",
        topic: 'Define Phase'
    },
    {
        id: 'D139',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Metrics tracking baseline importance:",
        optionsBank: [
            { id: 'D139_O1', text: "Only relevant after improvements", correct: false },
            { id: 'D139_O2', text: "Establish current tracking capability for ongoing measurement", correct: true },
            { id: 'D139_O3', text: "Automatic tracking always available", correct: false },
            { id: 'D139_O4', text: "Not needed for Define", correct: false },
            { id: 'D139_O5', text: "IT responsibility exclusively", correct: false },
            { id: 'D139_O6', text: "Cannot be implemented early", correct: false }
        ],
        explanation: "Tracking baseline: Can we measure Y metric daily/weekly/monthly? Do systems exist or need to be created? Define establishes process for ongoing measurement to track improvement sustainability.",
        topic: 'Define Phase'
    },
    {
        id: 'D140',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Contingency planning in Define timeline:",
        optionsBank: [
            { id: 'D140_O1', text: "Not necessary", correct: false },
            { id: 'D140_O2', text: "Build buffer time for delays, unexpected challenges, external dependencies", correct: true },
            { id: 'D140_O3', text: "Always exact estimate", correct: false },
            { id: 'D140_O4', text: "Project managers handle only", correct: false },
            { id: 'D140_O5', text: "Irrelevant to scheduling", correct: false },
            { id: 'D140_O6', text: "Extends timeline unnecessarily", correct: false }
        ],
        explanation: "Contingency buffer: Typical Define = 2-3 weeks; add 20-30% buffer for complex situations (multiple sites, new data systems, stakeholder complexity) to improve probability of on-time delivery.",
        topic: 'Define Phase'
    },
    {
        id: 'D141',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Executive steering committee role in Define:",
        optionsBank: [
            { id: 'D141_O1', text: "No role needed", correct: false },
            { id: 'D141_O2', text: "Charter approval, resource commitment, barrier removal, strategic alignment", correct: true },
            { id: 'D141_O3', text: "Daily team management", correct: false },
            { id: 'D141_O4', text: "Statistical analysis only", correct: false },
            { id: 'D141_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D141_O6', text: "Only for large projects", correct: false }
        ],
        explanation: "Steering committee: approves charter, allocates resources, escalates barriers, ensures strategic fit; meets at tollgates; elevates project visibility and ensures executive accountability.",
        topic: 'Define Phase'
    },
    {
        id: 'D142',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Quality management system integration in Define:",
        optionsBank: [
            { id: 'D142_O1', text: "No connection exists", correct: false },
            { id: 'D142_O2', text: "Project improvements must integrate with existing QMS and ISO procedures", correct: true },
            { id: 'D142_O3', text: "Only manufacturing concern", correct: false },
            { id: 'D142_O4', text: "Quality department handles independently", correct: false },
            { id: 'D142_O5', text: "Irrelevant to Six Sigma", correct: false },
            { id: 'D142_O6', text: "Cannot be integrated", correct: false }
        ],
        explanation: "QMS alignment: If organization is ISO 9001-certified, improvements must not conflict with documented procedures; may require formal change control; reduces implementation resistance.",
        topic: 'Define Phase'
    },
    {
        id: 'D143',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Financial projection assumptions in business case:",
        optionsBank: [
            { id: 'D143_O1', text: "No assumptions needed", correct: false },
            { id: 'D143_O2', text: "Document assumptions (inflation, volume growth, discount rates, timelines)", correct: true },
            { id: 'D143_O3', text: "Keep hidden from finance", correct: false },
            { id: 'D143_O4', text: "Only estimates, no documentation", correct: false },
            { id: 'D143_O5', text: "Irrelevant to approval", correct: false },
            { id: 'D143_O6', text: "Always 100% accurate", correct: false }
        ],
        explanation: "Transparent assumptions: Assume defect reduction results in Y cost savings (not labor reduction)? Assume 6-month savings capture (not 12 months)? Document to enable post-project validation.",
        topic: 'Define Phase'
    },
    {
        id: 'D144',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project interdependencies in Define assessment:",
        optionsBank: [
            { id: 'D144_O1', text: "Not relevant", correct: false },
            { id: 'D144_O2', text: "Identify if other projects or initiatives affect timing/scope", correct: true },
            { id: 'D144_O3', text: "Never occur", correct: false },
            { id: 'D144_O4', text: "Ignored in planning", correct: false },
            { id: 'D144_O5', text: "Irrelevant to scheduling", correct: false },
            { id: 'D144_O6', text: "Cannot be managed", correct: false }
        ],
        explanation: "Dependencies: Is a system change happening concurrently? Is another team already improving this process? Conflicting initiatives = scope conflicts, resource competition; identify and coordinate early.",
        topic: 'Define Phase'
    },
    {
        id: 'D145',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Environmental, Social, Governance (ESG) in Define scope:",
        optionsBank: [
            { id: 'D145_O1', text: "Not relevant to improvements", correct: false },
            { id: 'D145_O2', text: "Consider if improvements affect environmental, social, or governance performance", correct: true },
            { id: 'D145_O3', text: "Only marketing concern", correct: false },
            { id: 'D145_O4', text: "Only for public companies", correct: false },
            { id: 'D145_O5', text: "Irrelevant to projects", correct: false },
            { id: 'D145_O6', text: "Cannot be measured", correct: false }
        ],
        explanation: "ESG considerations: Does improvement reduce waste (environmental)? Improve working conditions (social)? Enhance transparency/compliance (governance)? May increase project value proposition.",
        topic: 'Define Phase'
    },
    {
        id: 'D146',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase quality gates criteria:",
        optionsBank: [
            { id: 'D146_O1', text: "Any documentation accepted", correct: false },
            { id: 'D146_O2', text: "Problem clear, CTQ defined, scope bounded, metrics set, team ready, resources committed", correct: true },
            { id: 'D146_O3', text: "No criteria needed", correct: false },
            { id: 'D146_O4', text: "Only cost review", correct: false },
            { id: 'D146_O5', text: "Subjective approval only", correct: false },
            { id: 'D146_O6', text: "Never enforced", correct: false }
        ],
        explanation: "Gate criteria checklist: Problem statement quantified? CTQs identified and validated? Scope clearly defined and stakeholder-agreed? Y metrics baselined? Business case justified? Team skilled and committed?",
        topic: 'Define Phase'
    },
    {
        id: 'D147',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer feedback integration in Define problem validation:",
        optionsBank: [
            { id: 'D147_O1', text: "Not necessary", correct: false },
            { id: 'D147_O2', text: "Confirm problem statement accuracy with customer interviews/data", correct: true },
            { id: 'D147_O3', text: "Irrelevant early in Define", correct: false },
            { id: 'D147_O4', text: "Only for new products", correct: false },
            { id: 'D147_O5', text: "Assumes problem is always correct", correct: false },
            { id: 'D147_O6', text: "Cannot validate early", correct: false }
        ],
        explanation: "Customer validation: Does customer acknowledge the problem exists? Agree on impact? Validate priority? Sometimes internal and customer views diverge; external validation strengthens project justification.",
        topic: 'Define Phase'
    },
    {
        id: 'D148',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase communication protocol establishment:",
        optionsBank: [
            { id: 'D148_O1', text: "Not needed", correct: false },
            { id: 'D148_O2', text: "Define meeting schedule, formats, reporting cadence, stakeholder updates", correct: true },
            { id: 'D148_O3', text: "Only team meetings", correct: false },
            { id: 'D148_O4', text: "Informal communication only", correct: false },
            { id: 'D148_O5', text: "Irrelevant to execution", correct: false },
            { id: 'D148_O6', text: "No formal structure needed", correct: false }
        ],
        explanation: "Communication protocol: Weekly team meetings? Bi-weekly steering? Monthly sponsor brief? Defined cadence prevents information gaps and maintains engagement momentum.",
        topic: 'Define Phase'
    },
    {
        id: 'D149',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Lessons learned documentation in Define:",
        optionsBank: [
            { id: 'D149_O1', text: "Only at project end", correct: false },
            { id: 'D149_O2', text: "Capture Define-phase insights to inform Measure and future projects", correct: true },
            { id: 'D149_O3', text: "Not necessary for early phases", correct: false },
            { id: 'D149_O4', text: "Marketing responsibility only", correct: false },
            { id: 'D149_O5', text: "Irrelevant to learning", correct: false },
            { id: 'D149_O6', text: "Cannot be documented early", correct: false }
        ],
        explanation: "Define lessons: What stakeholder resistance emerged? What data gaps? What worked well? Document early insights enable Measure phase efficiency and improve future project planning.",
        topic: 'Define Phase'
    },
    {
        id: 'D150',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase completion confidence level:",
        optionsBank: [
            { id: 'D150_O1', text: "No assessment needed", correct: false },
            { id: 'D150_O2', text: "Team confidence in problem clarity, scope, CTQ, metrics supports Measure readiness", correct: true },
            { id: 'D150_O3', text: "Always certain regardless", correct: false },
            { id: 'D150_O4', text: "Confidence irrelevant", correct: false },
            { id: 'D150_O5', text: "Only manager opinion", correct: false },
            { id: 'D150_O6', text: "Cannot be gauged", correct: false }
        ],
        explanation: "Confidence check: Team survey—do you clearly understand the problem? The goal? The metrics? Low confidence suggests Define incomplete; revisit before moving to Measure phase.",
        topic: 'Define Phase'
    },
    {
        id: 'D151',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem ownership clarity in charter:",
        optionsBank: [
            { id: 'D151_O1', text: "Not needed", correct: false },
            { id: 'D151_O2', text: "Process owner and sponsor clearly identified with accountability", correct: true },
            { id: 'D151_O3', text: "Only team ownership matters", correct: false },
            { id: 'D151_O4', text: "Distributed ownership prevents bottlenecks", correct: false },
            { id: 'D151_O5', text: "Irrelevant to charter", correct: false },
            { id: 'D151_O6', text: "Always clear without definition", correct: false }
        ],
        explanation: "Clear ownership: Who is accountable for the process long-term? Who is executive sponsor? Ambiguous ownership enables blame-shifting and prevents sustained improvement.",
        topic: 'Define Phase'
    },
    {
        id: 'D152',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Baseline data documentation in Define includes:",
        optionsBank: [
            { id: 'D152_O1', text: "Only summary statistics", correct: false },
            { id: 'D152_O2', text: "Source, collection method, period, caveats, limitations acknowledged", correct: true },
            { id: 'D152_O3', text: "No documentation needed", correct: false },
            { id: 'D152_O4', text: "Raw data only", correct: false },
            { id: 'D152_O5', text: "Irrelevant to measurement", correct: false },
            { id: 'D152_O6', text: "Not part of charter", correct: false }
        ],
        explanation: "Transparent documentation: Where did we get the 5% defect rate? How? When? What problems? This transparency enables colleagues to verify findings and trust baseline accuracy.",
        topic: 'Define Phase'
    },
    {
        id: 'D153',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Measurement frequency in Define planning:",
        optionsBank: [
            { id: 'D153_O1', text: "Not determined until later", correct: false },
            { id: 'D153_O2', text: "Daily/weekly/monthly cadence depends on process speed and variability", correct: true },
            { id: 'D153_O3', text: "Always daily", correct: false },
            { id: 'D153_O4', text: "Never specified early", correct: false },
            { id: 'D153_O5', text: "Irrelevant to data collection", correct: false },
            { id: 'D153_O6', text: "Only for statistical projects", correct: false }
        ],
        explanation: "Frequency selection: Fast process (call center) = daily/hourly; slow process (hiring) = monthly; determines sample size and data collection effort; specified in Define for Measure execution.",
        topic: 'Define Phase'
    },
    {
        id: 'D154',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project success metrics vs. business metrics:",
        optionsBank: [
            { id: 'D154_O1', text: "Always identical", correct: false },
            { id: 'D154_O2', text: "Project metrics are input; business metrics are outcome impact", correct: true },
            { id: 'D154_O3', text: "Only business metrics matter", correct: false },
            { id: 'D154_O4', text: "Never connected", correct: false },
            { id: 'D154_O5', text: "Irrelevant distinction", correct: false },
            { id: 'D154_O6', text: "Cannot be mapped", correct: false }
        ],
        explanation: "Project Y (reduce defects 5%→1%) vs. Business (save $150K, improve margin 2%). Project improvements should ladder to business outcomes; Define clarifies the connection.",
        topic: 'Define Phase'
    },
    {
        id: 'D155',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Stakeholder feedback loop in Define iteration:",
        optionsBank: [
            { id: 'D155_O1', text: "Not needed", correct: false },
            { id: 'D155_O2', text: "Regular feedback from stakeholders refines problem/scope/goals", correct: true },
            { id: 'D155_O3', text: "Only final approval feedback", correct: false },
            { id: 'D155_O4', text: "Team decides independently", correct: false },
            { id: 'D155_O5', text: "Slows Define phase", correct: false },
            { id: 'D155_O6', text: "Irrelevant to charter", correct: false }
        ],
        explanation: "Iterative feedback: draft → stakeholder review → incorporate concerns → refine → present again; builds shared ownership and prevents surprises at tollgate approval.",
        topic: 'Define Phase'
    },
    {
        id: 'D156',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Data collection feasibility assessment in Define:",
        optionsBank: [
            { id: 'D156_O1', text: "Always feasible", correct: false },
            { id: 'D156_O2', text: "Verify data exists, is accessible, can be pulled within timeline/cost", correct: true },
            { id: 'D156_O3', text: "Not evaluated until Measure", correct: false },
            { id: 'D156_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D156_O5', text: "Never a barrier", correct: false },
            { id: 'D156_O6', text: "Only IT concern", correct: false }
        ],
        explanation: "Feasibility check: Does data exist in systems? Can we access it without IT project? Will it take 2 weeks or 2 months to extract? Identify barriers and solutions early to prevent Measure delays.",
        topic: 'Define Phase'
    },
    {
        id: 'D157',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "CTQ prioritization in Define context:",
        optionsBank: [
            { id: 'D157_O1', text: "All CTQs equally important", correct: false },
            { id: 'D157_O2', text: "Rank CTQs by customer importance and business impact", correct: true },
            { id: 'D157_O3', text: "Not done in Define", correct: false },
            { id: 'D157_O4', text: "Determined by team opinion only", correct: false },
            { id: 'D157_O5', text: "Irrelevant to scope", correct: false },
            { id: 'D157_O6', text: "Cannot be prioritized", correct: false }
        ],
        explanation: "CTQ ranking: Is on-time delivery more critical to customers than packaging? Prioritization guides problem root-cause focus and prevents chasing low-impact improvements.",
        topic: 'Define Phase'
    },
    {
        id: 'D158',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase vs. project kickoff meeting difference:",
        optionsBank: [
            { id: 'D158_O1', text: "Same thing", correct: false },
            { id: 'D158_O2', text: "Define = problem clarification; Kickoff = work planning and team alignment", correct: true },
            { id: 'D158_O3', text: "Both unnecessary", correct: false },
            { id: 'D158_O4', text: "Define replaces kickoff", correct: false },
            { id: 'D158_O5', text: "No distinction needed", correct: false },
            { id: 'D158_O6', text: "Only one is required", correct: false }
        ],
        explanation: "Define is pre-project homework (identify problem, build case); Kickoff is team launch (share vision, establish norms, assign roles); both distinct and both valuable.",
        topic: 'Define Phase'
    },
    {
        id: 'D159',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Business continuity consideration in project scope:",
        optionsBank: [
            { id: 'D159_O1', text: "Not relevant", correct: false },
            { id: 'D159_O2', text: "Ensure improvements don't disrupt critical operations or customer service", correct: true },
            { id: 'D159_O3', text: "Only for manufacturing", correct: false },
            { id: 'D159_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D159_O5', text: "Never a concern", correct: false },
            { id: 'D159_O6', text: "Handled during Control phase", correct: false }
        ],
        explanation: "Business continuity: Can we pilot this during slow season? Must we maintain 24/7 operations? Define risk mitigation strategy to protect revenue/service during transition.",
        topic: 'Define Phase'
    },
    {
        id: 'D160',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Sponsor-team alignment in Define charter:",
        optionsBank: [
            { id: 'D160_O1', text: "Not necessary", correct: false },
            { id: 'D160_O2', text: "Sponsor and team must share understanding of problem, goals, success criteria", correct: true },
            { id: 'D160_O3', text: "Sponsor decides independently", correct: false },
            { id: 'D160_O4', text: "Team alignment irrelevant", correct: false },
            { id: 'D160_O5', text: "Different perspectives acceptable", correct: false },
            { id: 'D160_O6', text: "Cannot be achieved", correct: false }
        ],
        explanation: "Alignment ensures: sponsor understands what team will do, team understands sponsor expectations, both agree on success criteria; misalignment causes mid-project conflict.",
        topic: 'Define Phase'
    },
    {
        id: 'D161',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem vs. opportunity reframing benefit:",
        optionsBank: [
            { id: 'D161_O1', text: "No difference", correct: false },
            { id: 'D161_O2', text: "Opportunity framing energizes team; problem framing emphasizes urgency", correct: true },
            { id: 'D161_O3', text: "Problem always preferred", correct: false },
            { id: 'D161_O4', text: "Irrelevant to project", correct: false },
            { id: 'D161_O5', text: "Cannot be reframed", correct: false },
            { id: 'D161_O6', text: "Only for marketing", correct: false }
        ],
        explanation: "Problem: \"We're losing customers due to delays.\" Opportunity: \"Reducing delays could increase customer retention by 15% = $2M value.\" Both true; opportunity framing motivates better.",
        topic: 'Define Phase'
    },
    {
        id: 'D162',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "External expert involvement in Define decision:",
        optionsBank: [
            { id: 'D162_O1', text: "Always required", correct: false },
            { id: 'D162_O2', text: "Consider for industry expertise, methodology guidance, objectivity", correct: true },
            { id: 'D162_O3', text: "Never helpful", correct: false },
            { id: 'D162_O4', text: "Only for large projects", correct: false },
            { id: 'D162_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D162_O6', text: "Replaces internal input", correct: false }
        ],
        explanation: "External consultants add: industry benchmarking, methodology rigor, objectivity on sensitive issues; use selectively when internal expertise gaps or political complexity exists.",
        topic: 'Define Phase'
    },
    {
        id: 'D163',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem statement revision frequency in Define:",
        optionsBank: [
            { id: 'D163_O1', text: "Never revised", correct: false },
            { id: 'D163_O2', text: "Refine based on stakeholder input, new data, evolving understanding", correct: true },
            { id: 'D163_O3', text: "Revised daily", correct: false },
            { id: 'D163_O4', text: "No refinement beneficial", correct: false },
            { id: 'D163_O5', text: "Fixed from day one", correct: false },
            { id: 'D163_O6', text: "Irrelevant to clarity", correct: false }
        ],
        explanation: "Dynamic refinement: initial problem statement → gather feedback → clarify ambiguities → validate with data → finalize; prevents locking into incorrect framing.",
        topic: 'Define Phase'
    },
    {
        id: 'D164',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Resource dedication level in Define commitment:",
        optionsBank: [
            { id: 'D164_O1', text: "Part-time incidental", correct: false },
            { id: 'D164_O2', text: "Dedicated % allocation for Black Belt, Green Belt, team members", correct: true },
            { id: 'D164_O3', text: "No time allocation needed", correct: false },
            { id: 'D164_O4', text: "Volunteers only", correct: false },
            { id: 'D164_O5', text: "Irrelevant to success", correct: false },
            { id: 'D164_O6', text: "Cannot be determined early", correct: false }
        ],
        explanation: "Dedication clarity: Black Belt = 100% project time; Green Belt = 50% project + 50% day-job; team members = 20% ongoing meetings + analysis; clarity prevents \"too busy\" excuses.",
        topic: 'Define Phase'
    },
    {
        id: 'D165',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase handoff completeness checklist:",
        optionsBank: [
            { id: 'D165_O1', text: "No checklist needed", correct: false },
            { id: 'D165_O2', text: "Verify charter signed, metrics defined, data collection plan ready, team aligned", correct: true },
            { id: 'D165_O3', text: "Documentation only", correct: false },
            { id: 'D165_O4', text: "Subjective approval sufficient", correct: false },
            { id: 'D165_O5', text: "Irrelevant to transition", correct: false },
            { id: 'D165_O6', text: "Only manager review", correct: false }
        ],
        explanation: "Handoff readiness: Charter approved? CTQs identified? Baseline metrics baselined? Data access confirmed? Team trained? Measure phase entry criteria clearly met.",
        topic: 'Define Phase'
    },
    {
        id: 'D166',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Customer satisfaction baseline establishment:",
        optionsBank: [
            { id: 'D166_O1', text: "Not needed at this stage", correct: false },
            { id: 'D166_O2', text: "Measure current satisfaction to track improvement post-project", correct: true },
            { id: 'D166_O3', text: "Only after improvements", correct: false },
            { id: 'D166_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D166_O5', text: "Cannot be baselined early", correct: false },
            { id: 'D166_O6', text: "Only for service industries", correct: false }
        ],
        explanation: "Satisfaction baseline (NPS, CSAT, effort score): baseline = current state; post-improvement = final state; measures customer-facing project impact beyond internal metrics.",
        topic: 'Define Phase'
    },
    {
        id: 'D167',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Team meeting cadence during Define:",
        optionsBank: [
            { id: 'D167_O1', text: "Not scheduled", correct: false },
            { id: 'D167_O2', text: "Weekly or bi-weekly depending on project complexity and urgency", correct: true },
            { id: 'D167_O3', text: "Daily always", correct: false },
            { id: 'D167_O4', text: "Only one meeting total", correct: false },
            { id: 'D167_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D167_O6', text: "Cannot be scheduled early", correct: false }
        ],
        explanation: "Meeting cadence: Complex cross-functional = weekly; simpler single-department = bi-weekly; keeps momentum, enables quick feedback loops, prevents scope drift.",
        topic: 'Define Phase'
    },
    {
        id: 'D168',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase risk register initiation:",
        optionsBank: [
            { id: 'D168_O1', text: "Not created until later", correct: false },
            { id: 'D168_O2', text: "Document Define-phase risks and mitigation strategies", correct: true },
            { id: 'D168_O3', text: "Only for large projects", correct: false },
            { id: 'D168_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D168_O5', text: "Never updated", correct: false },
            { id: 'D168_O6', text: "Cannot be managed early", correct: false }
        ],
        explanation: "Risk register: What if sponsor changes? What if data unavailable? What if stakeholder resistance? Document risks, probability, impact, mitigation; monitor and update throughout.",
        topic: 'Define Phase'
    },
    {
        id: 'D169',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Process variability understanding in Define context:",
        optionsBank: [
            { id: 'D169_O1', text: "Assumed consistent", correct: false },
            { id: 'D169_O2', text: "Recognize variation exists and will affect data collection/improvement", correct: true },
            { id: 'D169_O3', text: "Irrelevant to Define", correct: false },
            { id: 'D169_O4', text: "Only in Measure phase", correct: false },
            { id: 'D169_O5', text: "Never affects projects", correct: false },
            { id: 'D169_O6', text: "Cannot be anticipated", correct: false }
        ],
        explanation: "Variability recognition: Defect rate fluctuates 3-7%? Cycle time varies by 2-10 days? Baseline includes range (min/max/average); guides realistic targets and data collection strategy.",
        topic: 'Define Phase'
    },
    {
        id: 'D170',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Stakeholder resistance anticipation in Define:",
        optionsBank: [
            { id: 'D170_O1', text: "Not considered", correct: false },
            { id: 'D170_O2', text: "Identify potential resistors and plan early communication/engagement", correct: true },
            { id: 'D170_O3', text: "Resistance never occurs", correct: false },
            { id: 'D170_O4', text: "Addressed during Control phase", correct: false },
            { id: 'D170_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D170_O6', text: "Cannot be predicted", correct: false }
        ],
        explanation: "Resistance sources: Who loses power/status? Whose department budget affected? Who has bad past experience? Early ID enables targeted engagement and pre-emptive communication.",
        topic: 'Define Phase'
    },
    {
        id: 'D171',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Preliminary solution ideas in Define context:",
        optionsBank: [
            { id: 'D171_O1', text: "Finalized and approved", correct: false },
            { id: 'D171_O2', text: "Brainstormed but not committed; tested in Improve phase", correct: true },
            { id: 'D171_O3', text: "Not discussed", correct: false },
            { id: 'D171_O4', text: "Implemented immediately", correct: false },
            { id: 'D171_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D171_O6', text: "Never considered early", correct: false }
        ],
        explanation: "Solution hypotheses: \"We think bottleneck is approvals\" or \"Setup time seems excessive\"—guide Measure data collection but aren't final solutions; prevents confirmation bias.",
        topic: 'Define Phase'
    },
    {
        id: 'D172',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Functional leader buy-in strategy in Define:",
        optionsBank: [
            { id: 'D172_O1', text: "Not needed", correct: false },
            { id: 'D172_O2', text: "Engage department heads early for resource commitment and barrier removal", correct: true },
            { id: 'D172_O3', text: "After project approval only", correct: false },
            { id: 'D172_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D172_O5', text: "Never required", correct: false },
            { id: 'D172_O6', text: "Cannot influence early", correct: false }
        ],
        explanation: "Leader engagement: Do operations leaders support? Will finance approve budget? Will IT allocate resources? Early buy-in prevents mid-project vetoes and enables smooth execution.",
        topic: 'Define Phase'
    },
    {
        id: 'D173',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Measure phase data collection strategy formulation:",
        optionsBank: [
            { id: 'D173_O1', text: "Not needed until Measure", correct: false },
            { id: 'D173_O2', text: "Define outlines what data, sources, methods, sample sizes needed", correct: true },
            { id: 'D173_O3', text: "Only executed in Measure", correct: false },
            { id: 'D173_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D173_O5', text: "Cannot be planned early", correct: false },
            { id: 'D173_O6', text: "Data collection spontaneous", correct: false }
        ],
        explanation: "Collection plan: Measure which X variables? From which locations? Over what period (2 weeks, 1 month)? Random or consecutive? Plans now enable Measure execution without delay.",
        topic: 'Define Phase'
    },
    {
        id: 'D174',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase completion criteria documentation:",
        optionsBank: [
            { id: 'D174_O1', text: "Not specified", correct: false },
            { id: 'D174_O2', text: "Define clearly what accomplished signals Define completion", correct: true },
            { id: 'D174_O3', text: "Always arbitrary", correct: false },
            { id: 'D174_O4', text: "Irrelevant to gates", correct: false },
            { id: 'D174_O5', text: "Cannot be pre-specified", correct: false },
            { id: 'D174_O6', text: "Only manager knows", correct: false }
        ],
        explanation: "Completion criteria: Chartered and approved? Problem quantified? CTQ identified? Baseline metrics established? Team assigned? Sponsor committed? All must be YES.",
        topic: 'Define Phase'
    },
    {
        id: 'D175',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cross-training importance in Define team:",
        optionsBank: [
            { id: 'D175_O1', text: "Not needed", correct: false },
            { id: 'D175_O2', text: "Ensures knowledge sharing and covers absences during project", correct: true },
            { id: 'D175_O3', text: "Only for large teams", correct: false },
            { id: 'D175_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D175_O5', text: "Never valuable", correct: false },
            { id: 'D175_O6', text: "Cannot be done during Define", correct: false }
        ],
        explanation: "Cross-training: If Black Belt leaves, can Green Belt continue? If team member absent, can other member present findings? Redundancy reduces project risk and builds capability.",
        topic: 'Define Phase'
    },
    {
        id: 'D176',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase pace setting in timeline:",
        optionsBank: [
            { id: 'D176_O1', text: "As fast as possible", correct: false },
            { id: 'D176_O2', text: "Deliberate yet efficient to build foundation without rushing clarity", correct: true },
            { id: 'D176_O3', text: "As slow as possible", correct: false },
            { id: 'D176_O4', text: "No schedule", correct: false },
            { id: 'D176_O5', text: "Irrelevant to project", correct: false },
            { id: 'D176_O6', text: "Always tight", correct: false }
        ],
        explanation: "Pace balance: Rushing Define = fuzzy charter, confused team, Measure delays; dragging = momentum loss; typical 2-3 weeks is sweet spot for focus without stalling.",
        topic: 'Define Phase'
    },
    {
        id: 'D177',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Competitive positioning context in Define charter:",
        optionsBank: [
            { id: 'D177_O1', text: "Not relevant", correct: false },
            { id: 'D177_O2', text: "How does improvement strengthen competitive advantage or close gap", correct: true },
            { id: 'D177_O3', text: "Only for new products", correct: false },
            { id: 'D177_O4', text: "Irrelevant to operations", correct: false },
            { id: 'D177_O5', text: "Never affects priority", correct: false },
            { id: 'D177_O6', text: "Cannot be assessed", correct: false }
        ],
        explanation: "Competitive context: Does improvement enable us to compete on speed, price, quality, or innovation? Increases project visibility and drives urgency with executives.",
        topic: 'Define Phase'
    },
    {
        id: 'D178',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase documentation repository:",
        optionsBank: [
            { id: 'D178_O1', text: "Not needed", correct: false },
            { id: 'D178_O2', text: "Centralized location for charter, VOC, SIPOC, metrics, all artifacts", correct: true },
            { id: 'D178_O3', text: "Each person keeps copies", correct: false },
            { id: 'D178_O4', text: "Email distribution only", correct: false },
            { id: 'D178_O5', text: "Irrelevant to project", correct: false },
            { id: 'D178_O6', text: "Cannot be organized", correct: false }
        ],
        explanation: "Single repository (SharePoint, Google Drive, project management tool) prevents lost documents, enables easy reference, facilitates Measure phase access, improves efficiency.",
        topic: 'Define Phase'
    },
    {
        id: 'D179',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase versus Measure phase boundary:",
        optionsBank: [
            { id: 'D179_O1', text: "No distinction", correct: false },
            { id: 'D179_O2', text: "Define = problem clarity; Measure = data collection and validation", correct: true },
            { id: 'D179_O3', text: "Both collect data", correct: false },
            { id: 'D179_O4', text: "Measure unnecessary", correct: false },
            { id: 'D179_O5', text: "Irrelevant distinction", correct: false },
            { id: 'D179_O6', text: "Cannot separate phases", correct: false }
        ],
        explanation: "Phase boundary: Define = build case and charter; Measure = gather data to understand process. Don't measure until Define is clear. Clear boundary prevents scope creep and confusion.",
        topic: 'Define Phase'
    },
    {
        id: 'D180',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem scoping principles in Define:",
        optionsBank: [
            { id: 'D180_O1', text: "Unlimited scope", correct: false },
            { id: 'D180_O2', text: "Specific enough to be meaningful, focused enough to be achievable", correct: true },
            { id: 'D180_O3', text: "As broad as possible", correct: false },
            { id: 'D180_O4', text: "No limits needed", correct: false },
            { id: 'D180_O5', text: "Irrelevant to success", correct: false },
            { id: 'D180_O6', text: "Cannot be bounded", correct: false }
        ],
        explanation: "Scope principle: \"Improve quality\" (too broad) vs. \"Reduce door-to-door delivery time from 10 to 5 days\" (specific, measurable); right scope enables focused effort.",
        topic: 'Define Phase'
    },
    {
        id: 'D181',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase exit criteria verification:",
        optionsBank: [
            { id: 'D181_O1', text: "Not verified", correct: false },
            { id: 'D181_O2', text: "Tollgate review confirms all exit criteria met before Measure start", correct: true },
            { id: 'D181_O3', text: "Only charter needed", correct: false },
            { id: 'D181_O4', text: "Irrelevant to phase transition", correct: false },
            { id: 'D181_O5', text: "Cannot be objective", correct: false },
            { id: 'D181_O6', text: "Always assumed met", correct: false }
        ],
        explanation: "Exit verification: Charter approved? Problem clear? CTQs identified? Scope bounded? Metrics baselined? Resources allocated? Team aligned? All YES? Proceed to Measure. Any NO? Complete Define work.",
        topic: 'Define Phase'
    },
    {
        id: 'D182',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Project archive creation during Define:",
        optionsBank: [
            { id: 'D182_O1', text: "Not needed", correct: false },
            { id: 'D182_O2', text: "Create project repository with all Define artifacts for future reference", correct: true },
            { id: 'D182_O3', text: "Only at project end", correct: false },
            { id: 'D182_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D182_O5', text: "Cannot be done early", correct: false },
            { id: 'D182_O6', text: "Only managers maintain", correct: false }
        ],
        explanation: "Project archive: Centralized storage of charter, SIPOC, VOC, meeting notes, decision logs; enables knowledge transfer, supports future projects, documents decision rationale.",
        topic: 'Define Phase'
    },
    {
        id: 'D183',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Team skill maturity in Define assessment:",
        optionsBank: [
            { id: 'D183_O1', text: "Assumed proficient", correct: false },
            { id: 'D183_O2', text: "Evaluate Six Sigma methodology knowledge; plan training as needed", correct: true },
            { id: 'D183_O3', text: "Not relevant to Define", correct: false },
            { id: 'D183_O4', text: "Irrelevant to success", correct: false },
            { id: 'D183_O5', text: "Cannot be assessed", correct: false },
            { id: 'D183_O6', text: "Only HR evaluates", correct: false }
        ],
        explanation: "Skill assessment: Does team understand Y=f(X)? DMAIC phases? Statistical basics? Identify gaps; provide just-in-time training (not overwhelming upfront); build confidence.",
        topic: 'Define Phase'
    },
    {
        id: 'D184',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase communication channels establishment:",
        optionsBank: [
            { id: 'D184_O1', text: "Not needed", correct: false },
            { id: 'D184_O2', text: "Specify meetings, email distribution, reporting formats, escalation paths", correct: true },
            { id: 'D184_O3', text: "Ad hoc only", correct: false },
            { id: 'D184_O4', text: "Irrelevant to project", correct: false },
            { id: 'D184_O5', text: "Cannot be established early", correct: false },
            { id: 'D184_O6', text: "No structure needed", correct: false }
        ],
        explanation: "Communication structure: Weekly team meetings (in-person/virtual)? Bi-weekly sponsor updates? Escalation path for issues? Documented channels prevent miscommunication and keep momentum.",
        topic: 'Define Phase'
    },
    {
        id: 'D185',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase vs. Strategic planning relationship:",
        optionsBank: [
            { id: 'D185_O1', text: "Unrelated", correct: false },
            { id: 'D185_O2', text: "Six Sigma projects should align with organization's strategic direction", correct: true },
            { id: 'D185_O3', text: "Define determines strategy", correct: false },
            { id: 'D185_O4', text: "Strategy irrelevant to projects", correct: false },
            { id: 'D185_O5', text: "Irrelevant connection", correct: false },
            { id: 'D185_O6', text: "Cannot be connected", correct: false }
        ],
        explanation: "Strategic alignment: If org strategy is \"expand digital services\", Six Sigma projects should support that (improve online ordering, reduce digital errors); improves executive sponsorship.",
        topic: 'Define Phase'
    },
    {
        id: 'D186',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Financial impact estimation methodology in Define:",
        optionsBank: [
            { id: 'D186_O1', text: "Random guesses", correct: false },
            { id: 'D186_O2', text: "Conservative estimates with documented assumptions and uncertainty ranges", correct: true },
            { id: 'D186_O3', text: "Optimistic projections only", correct: false },
            { id: 'D186_O4', text: "No estimation needed", correct: false },
            { id: 'D186_O5', text: "Finance estimates independently", correct: false },
            { id: 'D186_O6', text: "Cannot be estimated early", correct: false }
        ],
        explanation: "Estimation discipline: If defect reduction saves labor, estimate conservatively (70% of calculated value); document assumptions (inflation rate, volume assumptions); enables post-project validation.",
        topic: 'Define Phase'
    },
    {
        id: 'D187',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase executive sponsor expectations setting:",
        optionsBank: [
            { id: 'D187_O1', text: "Not needed", correct: false },
            { id: 'D187_O2', text: "Clarify timeline, investment, benefits, sponsor role and commitments", correct: true },
            { id: 'D187_O3', text: "Sponsor decides independently", correct: false },
            { id: 'D187_O4', text: "Irrelevant to charter", correct: false },
            { id: 'D187_O5', text: "Never required", correct: false },
            { id: 'D187_O6', text: "Cannot be managed", correct: false }
        ],
        explanation: "Expectation clarity: Sponsor should expect 3-month timeline, $50K investment, $150K return; team expects barrier removal, budget approval, executive visibility; avoid surprises.",
        topic: 'Define Phase'
    },
    {
        id: 'D188',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Cultural fit assessment of solutions in Define:",
        optionsBank: [
            { id: 'D188_O1', text: "Not relevant early", correct: false },
            { id: 'D188_O2', text: "Identify if preliminary ideas align with organizational culture and values", correct: true },
            { id: 'D188_O3', text: "Culture irrelevant to improvements", correct: false },
            { id: 'D188_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D188_O5', text: "Cannot be assessed", correct: false },
            { id: 'D188_O6', text: "Only HR concern", correct: false }
        ],
        explanation: "Cultural fit: If org values employee empowerment, solution should involve frontline input. If hierarchical, different approach. Misaligned solutions face adoption resistance.",
        topic: 'Define Phase'
    },
    {
        id: 'D189',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Measurement system capability baseline in Define:",
        optionsBank: [
            { id: 'D189_O1', text: "Not checked until Measure", correct: false },
            { id: 'D189_O2', text: "Verify existing measurement systems are adequate or identify new system needs", correct: true },
            { id: 'D189_O3', text: "Assumed always capable", correct: false },
            { id: 'D189_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D189_O5', text: "Cannot be pre-assessed", correct: false },
            { id: 'D189_O6', text: "Only IT concern", correct: false }
        ],
        explanation: "Measurement check: Do we have scales accurate enough? Can we pull data from systems? Do procedures exist? Early ID prevents Measure-phase surprises and enables contingency planning.",
        topic: 'Define Phase'
    },
    {
        id: 'D190',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase reflection meeting before Measure:",
        optionsBank: [
            { id: 'D190_O1', text: "Not needed", correct: false },
            { id: 'D190_O2', text: "Team reflection on clarity, readiness, concerns before moving to Measure", correct: true },
            { id: 'D190_O3', text: "Only management reviews", correct: false },
            { id: 'D190_O4', text: "Irrelevant to transition", correct: false },
            { id: 'D190_O5', text: "Wastes time", correct: false },
            { id: 'D190_O6', text: "Cannot improve clarity", correct: false }
        ],
        explanation: "Reflection meeting: Does team feel charter is clear? Any lingering questions? Concerns about measurement feasibility? Resolve before Measure starts; improves Measure phase efficiency.",
        topic: 'Define Phase'
    },
    {
        id: 'D191',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Problem causality hypothesis in Define formation:",
        optionsBank: [
            { id: 'D191_O1', text: "Not needed", correct: false },
            { id: 'D191_O2', text: "Initial theories on problem causes to test rigorously in Analyze phase", correct: true },
            { id: 'D191_O3', text: "Final root cause determination", correct: false },
            { id: 'D191_O4', text: "Biases analysis", correct: false },
            { id: 'D191_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D191_O6', text: "Prevents data collection", correct: false }
        ],
        explanation: "Hypotheses: \"We think equipment downtime is root cause\" or \"Setup inefficiency dominates.\" Guide investigation without locking team into conclusions; tested objectively in Analyze.",
        topic: 'Define Phase'
    },
    {
        id: 'D192',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase success story preparation:",
        optionsBank: [
            { id: 'D192_O1', text: "Not relevant early", correct: false },
            { id: 'D192_O2', text: "Identify similar past successes to build confidence and credibility", correct: true },
            { id: 'D192_O3', text: "Only after project completion", correct: false },
            { id: 'D192_O4', text: "Irrelevant to Define", correct: false },
            { id: 'D192_O5', text: "Cannot be used early", correct: false },
            { id: 'D192_O6', text: "Marketing only responsibility", correct: false }
        ],
        explanation: "Success stories: Reference past Six Sigma wins in similar department/process to build team confidence and sponsor support; increases belief in feasibility and ROI.",
        topic: 'Define Phase'
    },
    {
        id: 'D193',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase knowledge transfer documentation:",
        optionsBank: [
            { id: 'D193_O1', text: "Not documented", correct: false },
            { id: 'D193_O2', text: "Document Define learnings for organizational learning and future reference", correct: true },
            { id: 'D193_O3', text: "Only success documented", correct: false },
            { id: 'D193_O4', text: "Irrelevant to learning", correct: false },
            { id: 'D193_O5', text: "Cannot be captured early", correct: false },
            { id: 'D193_O6', text: "Only trainer responsibility", correct: false }
        ],
        explanation: "Documentation: What VOC techniques worked? What data sources were easiest? What stakeholder concerns emerged? Enables faster Define in future projects.",
        topic: 'Define Phase'
    },
    {
        id: 'D194',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Measure phase readiness confirmation in Define:",
        optionsBank: [
            { id: 'D194_O1', text: "Not checked", correct: false },
            { id: 'D194_O2', text: "Ensure data access, team availability, tools ready before Measure launch", correct: true },
            { id: 'D194_O3', text: "Only Measure lead decides", correct: false },
            { id: 'D194_O4', text: "Irrelevant to transition", correct: false },
            { id: 'D194_O5', text: "Cannot be pre-verified", correct: false },
            { id: 'D194_O6', text: "Assumed always ready", correct: false }
        ],
        explanation: "Readiness check: Can we access data systems? Is team trained? Do statistical tools work? Confirmed YES enables Measure phase to launch without delay or setup time.",
        topic: 'Define Phase'
    },
    {
        id: 'D195',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase milestone celebration importance:",
        optionsBank: [
            { id: 'D195_O1', text: "Not needed", correct: false },
            { id: 'D195_O2', text: "Acknowledge Define completion to celebrate progress and sustain momentum", correct: true },
            { id: 'D195_O3', text: "Only at project end", correct: false },
            { id: 'D195_O4', text: "Irrelevant to team morale", correct: false },
            { id: 'D195_O5', text: "Wastes time", correct: false },
            { id: 'D195_O6', text: "Cannot improve engagement", correct: false }
        ],
        explanation: "Milestone celebration: Acknowledge Define completion (charter approved, team aligned, ready to measure); builds confidence and momentum; energizes team for Measure phase.",
        topic: 'Define Phase'
    },
    {
        id: 'D196',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase schedule buffer justification:",
        optionsBank: [
            { id: 'D196_O1', text: "Not needed", correct: false },
            { id: 'D196_O2', text: "Reserve time for unexpected delays, stakeholder feedback, clarification needs", correct: true },
            { id: 'D196_O3', text: "Always exact estimates", correct: false },
            { id: 'D196_O4', text: "Irrelevant to planning", correct: false },
            { id: 'D196_O5', text: "Wastes project time", correct: false },
            { id: 'D196_O6', text: "Cannot be justified", correct: false }
        ],
        explanation: "Buffer rationale: Stakeholder availability delays? Clarification iterations? VOC data gathering takes longer? 20-30% buffer (1.5-3 weeks for typical 2-week Define) improves delivery reliability.",
        topic: 'Define Phase'
    },
    {
        id: 'D197',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase team recognition strategy:",
        optionsBank: [
            { id: 'D197_O1', text: "Not needed", correct: false },
            { id: 'D197_O2', text: "Acknowledge individual and team contributions to Define progress", correct: true },
            { id: 'D197_O3', text: "Only for external teams", correct: false },
            { id: 'D197_O4', text: "Irrelevant to morale", correct: false },
            { id: 'D197_O5', text: "Cannot be implemented", correct: false },
            { id: 'D197_O6', text: "Only management role", correct: false }
        ],
        explanation: "Recognition: Thank you note, public acknowledgment, small incentive for Define contribution; builds psychological ownership and motivates continued engagement through Measure/Analyze/Improve.",
        topic: 'Define Phase'
    },
    {
        id: 'D198',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase versus project charter distinction:",
        optionsBank: [
            { id: 'D198_O1', text: "Same thing", correct: false },
            { id: 'D198_O2', text: "Define = process; Charter = output document formalizing project authority", correct: true },
            { id: 'D198_O3', text: "Define replaces charter", correct: false },
            { id: 'D198_O4', text: "Both identical", correct: false },
            { id: 'D198_O5', text: "Irrelevant distinction", correct: false },
            { id: 'D198_O6', text: "Cannot be separated", correct: false }
        ],
        explanation: "Define = the work phase (discovery, problem clarification, stakeholder engagement); Charter = formal document output; Define produces the charter.",
        topic: 'Define Phase'
    },
    {
        id: 'D199',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase knowledge management:",
        optionsBank: [
            { id: 'D199_O1', text: "Not important", correct: false },
            { id: 'D199_O2', text: "Capture and organize Define insights for organizational learning and reuse", correct: true },
            { id: 'D199_O3', text: "Only at project end", correct: false },
            { id: 'D199_O4', text: "Irrelevant to projects", correct: false },
            { id: 'D199_O5', text: "Cannot be managed early", correct: false },
            { id: 'D199_O6', text: "Only documentation role", correct: false }
        ],
        explanation: "Knowledge management: Store VOC technique insights, stakeholder mapping templates, lessons learned in accessible repository; enables continuous improvement of Define process itself.",
        topic: 'Define Phase'
    },
    {
        id: 'D200',
        phase: 'define',
        module: 'Define Phase',
        difficulty: 'medium',
        question: "Define phase continuous improvement mindset:",
        optionsBank: [
            { id: 'D200_O1', text: "One-time process", correct: false },
            { id: 'D200_O2', text: "Define reflects PDCA mindset: continuous refinement toward clarity and alignment", correct: true },
            { id: 'D200_O3', text: "Perfection required upfront", correct: false },
            { id: 'D200_O4', text: "No improvement possible", correct: false },
            { id: 'D200_O5', text: "Irrelevant to Define", correct: false },
            { id: 'D200_O6', text: "Cannot be applied early", correct: false }
        ],
        explanation: "Mindset: Define isn't about perfect clarity on day 1; it's about continuous refinement—draft → feedback → adjust → finalize. PDCA cycle starts in Define and continues through DMAIC.",
        topic: 'Define Phase'
    }
];

