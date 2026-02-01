import { QuizQuestion } from '@/types/quiz.types';

export const controlPhaseQuizzes: QuizQuestion[] = [
    {
        id: 'C1',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "SPC chart primary purpose:",
        options: {
            A: "Record history only",
            B: "Detect special cause variation for investigation",
            C: "Replace analysis",
            D: "Calculate means"
        },
        correctAnswer: 'B',
        explanation: "Monitoring tool for stability",
        topic: 'Control Phase'
    },
    {
        id: 'C2',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control limits set at:",
        options: {
            A: "±2σ",
            B: "±3σ from center",
            C: "Customer specs",
            D: "Operator preference"
        },
        correctAnswer: 'B',
        explanation: "Standard 99.7% variation band",
        topic: 'Control Phase'
    },
    {
        id: 'C3',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "UCL = mean + 3σ represents:",
        options: {
            A: "Upper specification limit",
            B: "Statistical control boundary",
            C: "Tolerance band",
            D: "Customer requirement"
        },
        correctAnswer: 'B',
        explanation: "Chart construction",
        topic: 'Control Phase'
    },
    {
        id: 'C4',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Point beyond ±3σ indicates:",
        options: {
            A: "Random variation",
            B: "Special cause present; investigate",
            C: "Process normal",
            D: "Need new gage"
        },
        correctAnswer: 'B',
        explanation: "Out-of-control signal",
        topic: 'Control Phase'
    },
    {
        id: 'C5',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "I-MR chart used for:",
        options: {
            A: "Subgroup averages",
            B: "Individual measurements with moving ranges",
            C: "Proportions",
            D: "Defect counts"
        },
        correctAnswer: 'B',
        explanation: "When can't form rational subgroups",
        topic: 'Control Phase'
    },
    {
        id: 'C6',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "X̄-R chart tracks:",
        options: {
            A: "Individual values only",
            B: "Subgroup means (centering) and ranges (spread)",
            C: "Only ranges",
            D: "Proportions"
        },
        correctAnswer: 'B',
        explanation: "Two charts monitoring different aspects",
        topic: 'Control Phase'
    },
    {
        id: 'C7',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Moving range (MR) calculation:",
        options: {
            A: "|X₁ - X₂| / n",
            B: "|X_current - X_previous|",
            C: "Max - Min",
            D: "Standard deviation"
        },
        correctAnswer: 'B',
        explanation: "Consecutive individual differences",
        topic: 'Control Phase'
    },
    {
        id: 'C8',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "P-chart used for:",
        options: {
            A: "Continuous data",
            B: "Proportion or percentage defective",
            C: "Subgroup averages",
            D: "Ranges"
        },
        correctAnswer: 'B',
        explanation: "Attribute data chart",
        topic: 'Control Phase'
    },
    {
        id: 'C9',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "C-chart used for:",
        options: {
            A: "Proportions",
            B: "Count of defects per unit",
            C: "Continuous measurements",
            D: "Individuals"
        },
        correctAnswer: 'B',
        explanation: "Number defects in standard unit",
        topic: 'Control Phase'
    },
    {
        id: 'C10',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "U-chart used for:",
        options: {
            A: "Individual measurements",
            B: "Defects per unit (variable sample size)",
            C: "Proportions only",
            D: "Averages"
        },
        correctAnswer: 'B',
        explanation: "Standardized defect rate",
        topic: 'Control Phase'
    },
    {
        id: 'C11',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "When to use I-chart vs X̄-R:",
        options: {
            A: "Same situation",
            B: "I-chart for individuals; X̄-R for subgroups",
            C: "X̄-R always better",
            D: "I-chart outdated"
        },
        correctAnswer: 'B',
        explanation: "Depends on data structure",
        topic: 'Control Phase'
    },
    {
        id: 'C12',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Rational subgrouping principle:",
        options: {
            A: "Random selection only",
            B: "Subgroups capture process variation; shifts shown",
            C: "Arbitrary grouping",
            D: "Doesn't matter"
        },
        correctAnswer: 'B',
        explanation: "Critical for sensitivity",
        topic: 'Control Phase'
    },
    {
        id: 'C13',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Subgroup size typical:",
        options: {
            A: "1",
            B: "3-5",
            C: "10+",
            D: "50"
        },
        correctAnswer: 'B',
        explanation: "Balance cost and information",
        topic: 'Control Phase'
    },
    {
        id: 'C14',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control chart baseline uses:",
        options: {
            A: "All historical data",
            B: "First 20-25 subgroups in control",
            C: "One measurement",
            D: "Estimates"
        },
        correctAnswer: 'B',
        explanation: "Stable period for limit calculation",
        topic: 'Control Phase'
    },
    {
        id: 'C15',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Centerline formula:",
        options: {
            A: "Mean of data",
            B: "Target value",
            C: "Upper specification",
            D: "Customer spec"
        },
        correctAnswer: 'A',
        explanation: "Reference for comparison",
        topic: 'Control Phase'
    },
    {
        id: 'C16',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "UCL_X̄ formula for X̄-R:",
        options: {
            A: "X̄ + 2σ",
            B: "X̄ + A₂(R̄)",
            C: "X̄ + 3σ",
            D: "R̄ + 2"
        },
        correctAnswer: 'B',
        explanation: "Using subgroup range",
        topic: 'Control Phase'
    },
    {
        id: 'C17',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control chart constant A₂:",
        options: {
            A: "Same for all sizes",
            B: "Varies by subgroup size",
            C: "Always 2.66",
            D: "Not used"
        },
        correctAnswer: 'B',
        explanation: "Lookup in tables by n",
        topic: 'Control Phase'
    },
    {
        id: 'C18',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Range control limits:",
        options: {
            A: "Same as X̄ limits",
            B: "LCL = D₃(R̄), UCL = D₄(R̄)",
            C: "Not calculated",
            D: "Manual estimation"
        },
        correctAnswer: 'B',
        explanation: "Separate limits for variability",
        topic: 'Control Phase'
    },
    {
        id: 'C19',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "If process variance increases:",
        options: {
            A: "R̄ decreases",
            B: "R̄ increases; points may exceed UCL",
            C: "Not visible",
            D: "Irrelevant"
        },
        correctAnswer: 'B',
        explanation: "Variability increase detected",
        topic: 'Control Phase'
    },
    {
        id: 'C20',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "If process mean shifts:",
        options: {
            A: "Range increases",
            B: "X̄ chart shows points beyond limits",
            C: "Not visible",
            D: "Centering not detectable"
        },
        correctAnswer: 'B',
        explanation: "Shift in location",
        topic: 'Control Phase'
    },
    {
        id: 'C21',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Run of 9 consecutive points same side:",
        options: {
            A: "Normal variation",
            B: "Special cause; non-random pattern",
            C: "Process in control",
            D: "Need larger sample"
        },
        correctAnswer: 'B',
        explanation: "Western Electric rule",
        topic: 'Control Phase'
    },
    {
        id: 'C22',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Six consecutive increasing points:",
        options: {
            A: "Acceptable pattern",
            B: "Special cause; trend detected",
            C: "Random variation",
            D: "No action"
        },
        correctAnswer: 'B',
        explanation: "Systematic change indicated",
        topic: 'Control Phase'
    },
    {
        id: 'C23',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Two of three beyond ±2σ:",
        options: {
            A: "Normal",
            B: "Special cause signal",
            C: "Unreliable",
            D: "Never occurs"
        },
        correctAnswer: 'B',
        explanation: "Sensitivity rule",
        topic: 'Control Phase'
    },
    {
        id: 'C24',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Fourteen consecutive alternating points:",
        options: {
            A: "Normal",
            B: "Special cause; oscillation",
            C: "Ignore",
            D: "No investigation"
        },
        correctAnswer: 'B',
        explanation: "Systematic oscillation",
        topic: 'Control Phase'
    },
    {
        id: 'C25',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process \"in control\" means:",
        options: {
            A: "No defects",
            B: "All points within limits and no patterns",
            C: "Zero variation",
            D: "Meets spec"
        },
        correctAnswer: 'B',
        explanation: "Statistically stable",
        topic: 'Control Phase'
    },
    {
        id: 'C26',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process \"out of control\" means:",
        options: {
            A: "One point beyond ±3σ",
            B: "Any special cause signal",
            C: "Not capable",
            D: "Poor quality"
        },
        correctAnswer: 'B',
        explanation: "Special cause identified",
        topic: 'Control Phase'
    },
    {
        id: 'C27',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Recalculating control limits:",
        options: {
            A: "Never done",
            B: "When process changes or quarterly",
            C: "Only if out of control",
            D: "Annually only"
        },
        correctAnswer: 'B',
        explanation: "Keep limits current",
        topic: 'Control Phase'
    },
    {
        id: 'C28',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "False alarm rate (Type I):",
        options: {
            A: "Never happens",
            B: "α = 0.27% per point with normal",
            C: "Very high",
            D: "Not important"
        },
        correctAnswer: 'B',
        explanation: "27 per 10,000 points expected",
        topic: 'Control Phase'
    },
    {
        id: 'C29',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Tampering (over-correction):",
        options: {
            A: "Good practice",
            B: "Reacting to normal variation increases it",
            C: "Prevents problems",
            D: "Required"
        },
        correctAnswer: 'B',
        explanation: "Shewhart warning",
        topic: 'Control Phase'
    },
    {
        id: 'C30',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Special cause investigation timing:",
        options: {
            A: "Weekly review",
            B: "Immediately when signal detected",
            C: "End of month",
            D: "Never"
        },
        correctAnswer: 'B',
        explanation: "Prompt action critical",
        topic: 'Control Phase'
    },
    {
        id: 'C31',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Pre-control chart:",
        options: {
            A: "Same as SPC",
            B: "Warning zone approach (red/yellow/green)",
            C: "Not useful",
            D: "Old method"
        },
        correctAnswer: 'B',
        explanation: "Alternative method",
        topic: 'Control Phase'
    },
    {
        id: 'C32',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Individuals vs subgroup variation:",
        options: {
            A: "Same thing",
            B: "Individuals show all; subgroups show common",
            C: "Subgroups larger",
            D: "No difference"
        },
        correctAnswer: 'B',
        explanation: "Subgrouping reduces noise",
        topic: 'Control Phase'
    },
    {
        id: 'C33',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Short-term vs long-term variation:",
        options: {
            A: "No difference",
            B: "Short within subgroup; long all",
            C: "Same measurement",
            D: "Only managers care"
        },
        correctAnswer: 'B',
        explanation: "Important distinction",
        topic: 'Control Phase'
    },
    {
        id: 'C34',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process capability on stable process:",
        options: {
            A: "Not relevant",
            B: "Meaningful only on stable",
            C: "Capability not related",
            D: "Always calculate"
        },
        correctAnswer: 'B',
        explanation: "Stability prerequisite",
        topic: 'Control Phase'
    },
    {
        id: 'C35',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control chart sensitivity:",
        options: {
            A: "Fixed",
            B: "Increases with better subgrouping",
            C: "Decreases with larger samples",
            D: "Not adjustable"
        },
        correctAnswer: 'B',
        explanation: "Design impacts detection",
        topic: 'Control Phase'
    },
    {
        id: 'C36',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Type II error on control chart:",
        options: {
            A: "Not possible",
            B: "Failing to detect special cause",
            C: "Always detected",
            D: "Irrelevant"
        },
        correctAnswer: 'B',
        explanation: "Missing signals risk",
        topic: 'Control Phase'
    },
    {
        id: 'C37',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Lagging indicators on chart:",
        options: {
            A: "Always good",
            B: "Delayed detection reduces response",
            C: "No impact",
            D: "Preferred"
        },
        correctAnswer: 'B',
        explanation: "Real-time better",
        topic: 'Control Phase'
    },
    {
        id: 'C38',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Standardized control chart:",
        options: {
            A: "Not useful",
            B: "Converts to z-scores for comparison",
            C: "Never used",
            D: "Same as regular"
        },
        correctAnswer: 'B',
        explanation: "Compares different scales",
        topic: 'Control Phase'
    },
    {
        id: 'C39',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "EWMA chart (Exponentially Weighted):",
        options: {
            A: "Same as regular",
            B: "Gives more weight to recent data",
            C: "Less sensitive",
            D: "Unnecessary"
        },
        correctAnswer: 'B',
        explanation: "Detects small shifts faster",
        topic: 'Control Phase'
    },
    {
        id: 'C40',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "CuSum chart (Cumulative Sum):",
        options: {
            A: "Same as Shewhart",
            B: "Accumulates deviations; detects trends",
            C: "Less informative",
            D: "Not used"
        },
        correctAnswer: 'B',
        explanation: "Alternative approach",
        topic: 'Control Phase'
    },
    {
        id: 'C41',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control plan purpose:",
        options: {
            A: "Record history",
            B: "Specify what to monitor, how, when, response",
            C: "Prevent improvement",
            D: "Document procedures only"
        },
        correctAnswer: 'B',
        explanation: "Comprehensive sustainment tool",
        topic: 'Control Phase'
    },
    {
        id: 'C42',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Critical process inputs (X's) in control plan:",
        options: {
            A: "All inputs",
            B: "High-impact X's identified from Analyze",
            C: "Outputs",
            D: "Random factors"
        },
        correctAnswer: 'B',
        explanation: "Focus on vital few",
        topic: 'Control Phase'
    },
    {
        id: 'C43',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control plan monitoring method:",
        options: {
            A: "Only statistical tests",
            B: "SPC chart, visual, process owner check",
            C: "Periodic sampling only",
            D: "No monitoring"
        },
        correctAnswer: 'B',
        explanation: "Multiple approaches combined",
        topic: 'Control Phase'
    },
    {
        id: 'C44',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Monitoring frequency based on:",
        options: {
            A: "Arbitrary",
            B: "Risk and process capability",
            C: "Convenience",
            D: "Never changes"
        },
        correctAnswer: 'B',
        explanation: "Risk-based approach",
        topic: 'Control Phase'
    },
    {
        id: 'C45',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Response plan activation:",
        options: {
            A: "When normal",
            B: "When control signal detected",
            C: "Randomly",
            D: "No response"
        },
        correctAnswer: 'B',
        explanation: "Predetermined triggers",
        topic: 'Control Phase'
    },
    {
        id: 'C46',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Corrective action must:",
        options: {
            A: "Be quick band-aid",
            B: "Address root cause",
            C: "Blame operator",
            D: "Temporary fix"
        },
        correctAnswer: 'B',
        explanation: "Permanent solution",
        topic: 'Control Phase'
    },
    {
        id: 'C47',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Preventive action:",
        options: {
            A: "Stops problems never occurring",
            B: "Reduces likelihood before failure",
            C: "Same as corrective",
            D: "Not needed"
        },
        correctAnswer: 'B',
        explanation: "Proactive approach",
        topic: 'Control Phase'
    },
    {
        id: 'C48',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Standard Operating Procedure (SOP):",
        options: {
            A: "Optional",
            B: "Written, detailed procedure for correct method",
            C: "Only complex",
            D: "Manager preference"
        },
        correctAnswer: 'B',
        explanation: "Critical for consistency",
        topic: 'Control Phase'
    },
    {
        id: 'C49',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Visual control examples:",
        options: {
            A: "Verbal only",
            B: "Lights, colors, marks showing status",
            C: "Computer reports only",
            D: "Training only"
        },
        correctAnswer: 'B',
        explanation: "Promotes ownership",
        topic: 'Control Phase'
    },
    {
        id: 'C50',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process owner role:",
        options: {
            A: "No responsibility",
            B: "Owns and sustains process performance",
            C: "Only during project",
            D: "Temporary"
        },
        correctAnswer: 'B',
        explanation: "Permanent accountability",
        topic: 'Control Phase'
    },
    {
        id: 'C51',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Responsibility matrix in control plan:",
        options: {
            A: "Not needed",
            B: "Clear assignment: who does what",
            C: "Confuses accountability",
            D: "Only large teams"
        },
        correctAnswer: 'B',
        explanation: "Clarity prevents gaps",
        topic: 'Control Phase'
    },
    {
        id: 'C52',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control plan review frequency:",
        options: {
            A: "Never",
            B: "Quarterly or when process changes",
            C: "Only if problems",
            D: "Annually only"
        },
        correctAnswer: 'B',
        explanation: "Keep current",
        topic: 'Control Phase'
    },
    {
        id: 'C53',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control plan effectiveness measure:",
        options: {
            A: "Existence only",
            B: "Process remains at target; improvements sustained",
            C: "Monitoring activity only",
            D: "No measurement"
        },
        correctAnswer: 'B',
        explanation: "True success = sustained gains",
        topic: 'Control Phase'
    },
    {
        id: 'C54',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Delegation in control plan:",
        options: {
            A: "Green Belt continues forever",
            B: "Hand off to process owner",
            C: "No transition",
            D: "Manager takes over"
        },
        correctAnswer: 'B',
        explanation: "Sustainability requires ownership",
        topic: 'Control Phase'
    },
    {
        id: 'C55',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control limit update:",
        options: {
            A: "Never",
            B: "First week of project",
            C: "When stabilizes, then quarterly",
            D: "Daily"
        },
        correctAnswer: 'C',
        explanation: "Dynamic adjustment",
        topic: 'Control Phase'
    },
    {
        id: 'C56',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "If control plan abandoned:",
        options: {
            A: "Process improves continuously",
            B: "Improvements regress within 3-6 months",
            C: "No impact",
            D: "Gains permanent"
        },
        correctAnswer: 'B',
        explanation: "Vigilance required",
        topic: 'Control Phase'
    },
    {
        id: 'C57',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Metrics tracked in control phase:",
        options: {
            A: "Only baseline vs end",
            B: "Ongoing: defects, variation, cost, satisfaction",
            C: "Stopped after improvement",
            D: "Annual only"
        },
        correctAnswer: 'B',
        explanation: "Continuous measurement",
        topic: 'Control Phase'
    },
    {
        id: 'C58',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Cost of monitoring vs risk:",
        options: {
            A: "Always monitor everything",
            B: "Balance cost vs impact",
            C: "Never monitor",
            D: "Ignore cost"
        },
        correctAnswer: 'B',
        explanation: "Risk-based allocation",
        topic: 'Control Phase'
    },
    {
        id: 'C59',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Automated monitoring:",
        options: {
            A: "Always better",
            B: "When feasible and cost-effective",
            C: "Never use automation",
            D: "Manual always better"
        },
        correctAnswer: 'B',
        explanation: "Technology where justified",
        topic: 'Control Phase'
    },
    {
        id: 'C60',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Red tag system (visual):",
        options: {
            A: "Permanent solutions",
            B: "Temporary warning for out-of-spec",
            C: "Not used",
            D: "Color-coding only"
        },
        correctAnswer: 'B',
        explanation: "Visual management",
        topic: 'Control Phase'
    },
    {
        id: 'C61',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Layered process audit (LPA):",
        options: {
            A: "Statistical test",
            B: "Structured audit of control procedures",
            C: "Customer satisfaction",
            D: "Inspection only"
        },
        correctAnswer: 'B',
        explanation: "Verifies system compliance",
        topic: 'Control Phase'
    },
    {
        id: 'C62',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control chart interpretation training:",
        options: {
            A: "Not needed",
            B: "Essential for operators and supervisors",
            C: "Only statisticians",
            D: "Optional"
        },
        correctAnswer: 'B',
        explanation: "Understanding drives compliance",
        topic: 'Control Phase'
    },
    {
        id: 'C63',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Sustaining improvement investment:",
        options: {
            A: "None (free)",
            B: "Requires resources: training, monitoring, procedures",
            C: "Only initial cost",
            D: "Pays immediately"
        },
        correctAnswer: 'B',
        explanation: "Real cost of sustainability",
        topic: 'Control Phase'
    },
    {
        id: 'C64',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Regression in improved process:",
        options: {
            A: "Immediately after",
            B: "Typically 3-6 months if not monitored",
            C: "Never happens",
            D: "Only poor solutions"
        },
        correctAnswer: 'B',
        explanation: "Why Control phase critical",
        topic: 'Control Phase'
    },
    {
        id: 'C65',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Change management in control:",
        options: {
            A: "Not applicable",
            B: "Process change requires documentation",
            C: "Changes always okay",
            D: "No change allowed"
        },
        correctAnswer: 'B',
        explanation: "Controlled change protocol",
        topic: 'Control Phase'
    },
    {
        id: 'C66',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control plan sign-off:",
        options: {
            A: "Not required",
            B: "Champion, Process Owner, Sponsor approval",
            C: "Formality only",
            D: "Manager only"
        },
        correctAnswer: 'B',
        explanation: "Accountability and commitment",
        topic: 'Control Phase'
    },
    {
        id: 'C67',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Key success factors for control:",
        options: {
            A: "Good monitoring alone",
            B: "Clear procedures, trained staff, responsive",
            C: "Owner dedication",
            D: "Technology investment"
        },
        correctAnswer: 'B',
        explanation: "Multiple elements required",
        topic: 'Control Phase'
    },
    {
        id: 'C68',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Continuous improvement culture:",
        options: {
            A: "Stops after Six Sigma",
            B: "Kaizen mindset; ongoing small improvements",
            C: "No further change",
            D: "Only manufacturing"
        },
        correctAnswer: 'B',
        explanation: "Sustaining philosophy",
        topic: 'Control Phase'
    },
    {
        id: 'C69',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Benchmarking in control:",
        options: {
            A: "Not needed",
            B: "Compare to best-in-class for opportunities",
            C: "Competitive copying",
            D: "Discouraged"
        },
        correctAnswer: 'B',
        explanation: "Inspiration for next level",
        topic: 'Control Phase'
    },
    {
        id: 'C70',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control phase closure:",
        options: {
            A: "When project ends",
            B: "When sustained at target for 2 cycles",
            C: "Arbitrary date",
            D: "Never official"
        },
        correctAnswer: 'B',
        explanation: "Proof of sustained success",
        topic: 'Control Phase'
    },
    {
        id: 'C71',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "5S implementation in control:",
        options: {
            A: "One-time only",
            B: "Continuous maintenance of Sort-Shine-Standardize-Sustain",
            C: "Optional",
            D: "Manufacturing only"
        },
        correctAnswer: 'B',
        explanation: "Ongoing discipline",
        topic: 'Control Phase'
    },
    {
        id: 'C72',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Kanban system benefits:",
        options: {
            A: "No benefit",
            B: "Limits WIP; triggers production",
            C: "Requires forecasts",
            D: "Creates inventory"
        },
        correctAnswer: 'B',
        explanation: "Pull-based efficiency",
        topic: 'Control Phase'
    },
    {
        id: 'C73',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Poka-Yoke effectiveness:",
        options: {
            A: "No impact",
            B: "Prevents defects automatically",
            C: "Training enough",
            D: "No technology"
        },
        correctAnswer: 'B',
        explanation: "Error-proofing",
        topic: 'Control Phase'
    },
    {
        id: 'C74',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Work standardization:",
        options: {
            A: "Stifles creativity",
            B: "Ensures consistency; basis for improvement",
            C: "Never changes",
            D: "Not helpful"
        },
        correctAnswer: 'B',
        explanation: "Foundation",
        topic: 'Control Phase'
    },
    {
        id: 'C75',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Continuous flow benefits:",
        options: {
            A: "No benefit",
            B: "Reduces inventory, cycle time, waste",
            C: "Complex to manage",
            D: "Not applicable"
        },
        correctAnswer: 'B',
        explanation: "Lean efficiency",
        topic: 'Control Phase'
    },
    {
        id: 'C76',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Andon (visual signal):",
        options: {
            A: "Not used",
            B: "Alerts to problems immediately",
            C: "Complex system",
            D: "Not effective"
        },
        correctAnswer: 'B',
        explanation: "Problem notification",
        topic: 'Control Phase'
    },
    {
        id: 'C77',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Gemba walk:",
        options: {
            A: "Not useful",
            B: "Leader goes to actual place to see reality",
            C: "Management only",
            D: "No learning"
        },
        correctAnswer: 'B',
        explanation: "Direct observation",
        topic: 'Control Phase'
    },
    {
        id: 'C78',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Daily huddle purpose:",
        options: {
            A: "Social gathering",
            B: "Team alignment on goals, problems, progress",
            C: "Not necessary",
            D: "Theoretical only"
        },
        correctAnswer: 'B',
        explanation: "Communication practice",
        topic: 'Control Phase'
    },
    {
        id: 'C79',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Suggestion program:",
        options: {
            A: "No benefit",
            B: "Captures employee ideas; improves engagement",
            C: "Management only",
            D: "Ignores workforce"
        },
        correctAnswer: 'B',
        explanation: "Front-line perspective",
        topic: 'Control Phase'
    },
    {
        id: 'C80',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Safety culture in control:",
        options: {
            A: "Not related",
            B: "Critical component of sustained excellence",
            C: "Secondary to production",
            D: "Separate from quality"
        },
        correctAnswer: 'B',
        explanation: "Integrated approach",
        topic: 'Control Phase'
    },
    {
        id: 'C81',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Employee training effectiveness:",
        options: {
            A: "Not measured",
            B: "Verified by performance, understanding, consistency",
            C: "Assumed successful",
            D: "One-time only"
        },
        correctAnswer: 'B',
        explanation: "Competency validation",
        topic: 'Control Phase'
    },
    {
        id: 'C82',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Documentation requirements:",
        options: {
            A: "Optional",
            B: "Standard procedures, metrics, responsibilities",
            C: "Too much paperwork",
            D: "Not needed"
        },
        correctAnswer: 'B',
        explanation: "Traceability and standards",
        topic: 'Control Phase'
    },
    {
        id: 'C83',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Audit schedule consistency:",
        options: {
            A: "Random",
            B: "Regular predetermined schedule",
            C: "Only if problems",
            D: "No pattern"
        },
        correctAnswer: 'B',
        explanation: "Systematic oversight",
        topic: 'Control Phase'
    },
    {
        id: 'C84',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Audit findings action:",
        options: {
            A: "Documented only",
            B: "Tracked to resolution with accountability",
            C: "Ignored if minor",
            D: "No follow-up"
        },
        correctAnswer: 'B',
        explanation: "Closure verification",
        topic: 'Control Phase'
    },
    {
        id: 'C85',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Performance metrics dashboard:",
        options: {
            A: "Not needed",
            B: "Real-time visibility of key indicators",
            C: "Only financial",
            D: "Annual only"
        },
        correctAnswer: 'B',
        explanation: "Transparency",
        topic: 'Control Phase'
    },
    {
        id: 'C86',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Deviation response speed:",
        options: {
            A: "Whenever possible",
            B: "Immediate investigation required",
            C: "Monthly review",
            D: "No timing"
        },
        correctAnswer: 'B',
        explanation: "Minimize impact",
        topic: 'Control Phase'
    },
    {
        id: 'C87',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Root cause analysis in control:",
        options: {
            A: "Done only in Analyze",
            B: "Ongoing for any deviation",
            C: "Not needed here",
            D: "Preventive only"
        },
        correctAnswer: 'B',
        explanation: "Continuous problem-solving",
        topic: 'Control Phase'
    },
    {
        id: 'C88',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Lessons learned documentation:",
        options: {
            A: "Not captured",
            B: "Recorded for organizational knowledge",
            C: "Individual memory only",
            D: "Forgotten"
        },
        correctAnswer: 'B',
        explanation: "Organizational learning",
        topic: 'Control Phase'
    },
    {
        id: 'C89',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Knowledge transfer methods:",
        options: {
            A: "Assumed transfer",
            B: "Training, documentation, mentoring, practice",
            C: "Only verbal",
            D: "No transfer needed"
        },
        correctAnswer: 'B',
        explanation: "Multiple approaches",
        topic: 'Control Phase'
    },
    {
        id: 'C90',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Succession planning:",
        options: {
            A: "Not relevant",
            B: "Prepares replacement for key roles",
            C: "When person leaves",
            D: "No planning"
        },
        correctAnswer: 'B',
        explanation: "Risk mitigation",
        topic: 'Control Phase'
    },
    {
        id: 'C91',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Certification maintenance:",
        options: {
            A: "Once certified always valid",
            B: "Ongoing training to maintain competency",
            C: "Optional",
            D: "No requirements"
        },
        correctAnswer: 'B',
        explanation: "Continuous development",
        topic: 'Control Phase'
    },
    {
        id: 'C92',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Innovation encouragement:",
        options: {
            A: "Not needed",
            B: "Fosters new improvement ideas",
            C: "Disrupts processes",
            D: "No benefit"
        },
        correctAnswer: 'B',
        explanation: "Growth mindset",
        topic: 'Control Phase'
    },
    {
        id: 'C93',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Customer feedback integration:",
        options: {
            A: "Not needed",
            B: "Informs next improvements",
            C: "Only complaints",
            D: "Ignored"
        },
        correctAnswer: 'B',
        explanation: "Voice of Customer",
        topic: 'Control Phase'
    },
    {
        id: 'C94',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Supplier collaboration:",
        options: {
            A: "Not relevant",
            B: "Partners for quality, delivery reliability",
            C: "Adversarial only",
            D: "No involvement"
        },
        correctAnswer: 'B',
        explanation: "Value chain",
        topic: 'Control Phase'
    },
    {
        id: 'C95',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Communication frequency:",
        options: {
            A: "Yearly sufficient",
            B: "Regular intervals to maintain alignment",
            C: "Sporadic",
            D: "No schedule"
        },
        correctAnswer: 'B',
        explanation: "Consistency in messaging",
        topic: 'Control Phase'
    },
    {
        id: 'C96',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Recognition program:",
        options: {
            A: "Not necessary",
            B: "Acknowledges contributions and sustains culture",
            C: "Monetary only",
            D: "Passive approach"
        },
        correctAnswer: 'B',
        explanation: "Employee engagement",
        topic: 'Control Phase'
    },
    {
        id: 'C97',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Risk register maintenance:",
        options: {
            A: "One-time document",
            B: "Continuously updated with new risks",
            C: "Not needed",
            D: "Historical only"
        },
        correctAnswer: 'B',
        explanation: "Dynamic management",
        topic: 'Control Phase'
    },
    {
        id: 'C98',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Compliance verification:",
        options: {
            A: "Assumed",
            B: "Regular audits to ensure adherence",
            C: "Not necessary",
            D: "Trust-based"
        },
        correctAnswer: 'B',
        explanation: "Governance",
        topic: 'Control Phase'
    },
    {
        id: 'C99',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Financial tracking:",
        options: {
            A: "Not required",
            B: "Monitor cost savings and investment returns",
            C: "Assumed benefits",
            D: "No metrics"
        },
        correctAnswer: 'B',
        explanation: "Value quantification",
        topic: 'Control Phase'
    },
    {
        id: 'C100',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Stakeholder updates:",
        options: {
            A: "Not needed",
            B: "Regular communication on status, benefits",
            C: "Only if problems",
            D: "No reporting"
        },
        correctAnswer: 'B',
        explanation: "Transparency and support",
        topic: 'Control Phase'
    },
    {
        id: 'C101',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Control chart selection guide:",
        options: {
            A: "Arbitrary choice",
            B: "Based on data type, subgrouping, rational basis",
            C: "Always X-R",
            D: "Manager preference"
        },
        correctAnswer: 'B',
        explanation: "Strategic decision",
        topic: 'Control Phase'
    },
    {
        id: 'C102',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Capability vs stability priority:",
        options: {
            A: "Only stability",
            B: "Both required; stability first",
            C: "Only capability",
            D: "Neither necessary"
        },
        correctAnswer: 'B',
        explanation: "Logical sequence",
        topic: 'Control Phase'
    },
    {
        id: 'C103',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Gage monitoring in control:",
        options: {
            A: "Not necessary",
            B: "Periodic verification to ensure validity",
            C: "One-time check",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Maintains measurement integrity",
        topic: 'Control Phase'
    },
    {
        id: 'C104',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Reaction plan component:",
        options: {
            A: "Problem statement only",
            B: "Who responds, when, what actions taken",
            C: "No documentation",
            D: "Manager decides ad-hoc"
        },
        correctAnswer: 'B',
        explanation: "Predetermined protocol",
        topic: 'Control Phase'
    },
    {
        id: 'C105',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Escalation procedure:",
        options: {
            A: "Not needed",
            B: "Path when response insufficient",
            C: "Ignored",
            D: "No levels"
        },
        correctAnswer: 'B',
        explanation: "Issue management",
        topic: 'Control Phase'
    },
    {
        id: 'C106',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process drift detection:",
        options: {
            A: "Not possible",
            B: "Gradual shift detected by trending",
            C: "Only sudden shifts",
            D: "No warning"
        },
        correctAnswer: 'B',
        explanation: "Early intervention",
        topic: 'Control Phase'
    },
    {
        id: 'C107',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Noise factors vs control factors:",
        options: {
            A: "Same thing",
            B: "Noise = uncontrollable; control = manageable",
            C: "Never distinguish",
            D: "All controllable"
        },
        correctAnswer: 'B',
        explanation: "Design robustness",
        topic: 'Control Phase'
    },
    {
        id: 'C108',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process validation requirement:",
        options: {
            A: "Not needed",
            B: "Confirms process meets specifications",
            C: "Optional verification",
            D: "No standard"
        },
        correctAnswer: 'B',
        explanation: "Release readiness",
        topic: 'Control Phase'
    },
    {
        id: 'C109',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Transfer to production readiness:",
        options: {
            A: "When complete",
            B: "When sustained performance proven",
            C: "Immediately",
            D: "No check"
        },
        correctAnswer: 'B',
        explanation: "Success verification",
        topic: 'Control Phase'
    },
    {
        id: 'C110',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Operational excellence definition:",
        options: {
            A: "Cost reduction only",
            B: "Continuous improvement of quality, cost, speed, safety",
            C: "Production volume",
            D: "Efficiency only"
        },
        correctAnswer: 'B',
        explanation: "Balanced scorecard",
        topic: 'Control Phase'
    },
    {
        id: 'C111',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Process maturity levels:",
        options: {
            A: "Not defined",
            B: "Initial → Managed → Defined → Optimized",
            C: "High or low only",
            D: "Not applicable"
        },
        correctAnswer: 'B',
        explanation: "CMM framework",
        topic: 'Control Phase'
    },
    {
        id: 'C112',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Stakeholder communication channels:",
        options: {
            A: "One way",
            B: "Multiple; feedback and dialogue",
            C: "Email only",
            D: "No structure"
        },
        correctAnswer: 'B',
        explanation: "Interactive engagement",
        topic: 'Control Phase'
    },
    {
        id: 'C113',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Metric reporting frequency:",
        options: {
            A: "Annually",
            B: "Regular intervals per metric importance",
            C: "Whenever available",
            D: "No schedule"
        },
        correctAnswer: 'B',
        explanation: "Consistent rhythm",
        topic: 'Control Phase'
    },
    {
        id: 'C114',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Data integrity controls:",
        options: {
            A: "Trust only",
            B: "Access restrictions, audit trails, backups",
            C: "No security",
            D: "Optional"
        },
        correctAnswer: 'B',
        explanation: "Information governance",
        topic: 'Control Phase'
    },
    {
        id: 'C115',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Emergency response plan:",
        options: {
            A: "Not needed",
            B: "Prepared for major process failures",
            C: "Reactive only",
            D: "No plan"
        },
        correctAnswer: 'B',
        explanation: "Crisis management",
        topic: 'Control Phase'
    },
    {
        id: 'C116',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Continuous verification program:",
        options: {
            A: "Not done",
            B: "Systematic checks of continued effectiveness",
            C: "Assumed ongoing",
            D: "Once validated"
        },
        correctAnswer: 'B',
        explanation: "Assurance",
        topic: 'Control Phase'
    },
    {
        id: 'C117',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Long-term sustainment strategy:",
        options: {
            A: "Project-based",
            B: "Integrated into process operations",
            C: "Temporary measures",
            D: "No strategy"
        },
        correctAnswer: 'B',
        explanation: "Permanent change",
        topic: 'Control Phase'
    },
    {
        id: 'C118',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Improvement tracking system:",
        options: {
            A: "Manual records",
            B: "Integrated system for metrics and status",
            C: "No tracking",
            D: "Verbal only"
        },
        correctAnswer: 'B',
        explanation: "Data-driven management",
        topic: 'Control Phase'
    },
    {
        id: 'C119',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Organizational learning capture:",
        options: {
            A: "Lost with people",
            B: "Documented and shared for benefit",
            C: "Not valued",
            D: "Confidential only"
        },
        correctAnswer: 'B',
        explanation: "Knowledge asset",
        topic: 'Control Phase'
    },
    {
        id: 'C120',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Culture reinforcement methods:",
        options: {
            A: "Assume permanence",
            B: "Recognition, communication, modeling, training",
            C: "No reinforcement needed",
            D: "One-time message"
        },
        correctAnswer: 'B',
        explanation: "Sustained emphasis",
        topic: 'Control Phase'
    },
    {
        id: 'C121',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Next improvement identification:",
        options: {
            A: "Not started",
            B: "Pipeline of opportunities for continued progress",
            C: "Stop after one project",
            D: "No planning"
        },
        correctAnswer: 'B',
        explanation: "Continuous flow",
        topic: 'Control Phase'
    },
    {
        id: 'C122',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "ROI realization timeline:",
        options: {
            A: "Immediate",
            B: "Tracked to actual financial benefits",
            C: "Assumed benefits",
            D: "No timeline"
        },
        correctAnswer: 'B',
        explanation: "Verification",
        topic: 'Control Phase'
    },
    {
        id: 'C123',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Competitive advantage maintenance:",
        options: {
            A: "Inherent forever",
            B: "Requires continued improvement and innovation",
            C: "Static process",
            D: "No effort"
        },
        correctAnswer: 'B',
        explanation: "Dynamic advantage",
        topic: 'Control Phase'
    },
    {
        id: 'C124',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Scalability assessment:",
        options: {
            A: "One-time check",
            B: "Ongoing evaluation of expansion potential",
            C: "Not relevant",
            D: "Manual only"
        },
        correctAnswer: 'B',
        explanation: "Growth planning",
        topic: 'Control Phase'
    },
    {
        id: 'C125',
        phase: 'control',
        module: 'Control Phase',
        difficulty: 'medium',
        question: "Business integration confirmation:",
        options: {
            A: "Not verified",
            B: "Process improvements become standard operations",
            C: "Separate from business",
            D: "No confirmation"
        },
        correctAnswer: 'B',
        explanation: "Full adoption",
        topic: 'Control Phase'
    }
];
