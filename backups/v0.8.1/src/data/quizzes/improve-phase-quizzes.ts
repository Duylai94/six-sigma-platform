import { QuizQuestion } from '@/types/quiz.types';

export const improvePhaseQuizzes: QuizQuestion[] = [
    {
        id: 'I1',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Simple Linear Regression Y = a + bX, \"b\" is:",
        options: {
            A: "Intercept (Y when X=0)",
            B: "Slope (rate of change of Y per unit X)",
            C: "Correlation coefficient",
            D: "Standard deviation"
        },
        correctAnswer: 'B',
        explanation: "Shows how much Y changes per unit X",
        topic: 'Improve Phase'
    },
    {
        id: 'I2',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Correlation coefficient r = 0.92:",
        options: {
            A: "Weak relationship",
            B: "Very strong positive relationship",
            C: "Perfect fit",
            D: "Causation exists"
        },
        correctAnswer: 'B',
        explanation: "|r| > 0.9 is very strong; NO causation",
        topic: 'Improve Phase'
    },
    {
        id: 'I3',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "R² (coefficient of determination) = 0.75:",
        options: {
            A: "75% error",
            B: "75% of Y variation explained by X",
            C: "Process is 75% capable",
            D: "75 defects per million"
        },
        correctAnswer: 'B',
        explanation: "Shows proportion of variance explained",
        topic: 'Improve Phase'
    },
    {
        id: 'I4',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "In regression, residuals should:",
        options: {
            A: "Show clear pattern",
            B: "Be normally distributed around zero",
            C: "All be positive",
            D: "Equal predicted values"
        },
        correctAnswer: 'B',
        explanation: "Random residuals indicate valid model",
        topic: 'Improve Phase'
    },
    {
        id: 'I5',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Multicollinearity in multiple regression:",
        options: {
            A: "Multiple dependent variables",
            B: "Predictor variables highly correlated",
            C: "Sample too small",
            D: "Residuals non-normal"
        },
        correctAnswer: 'B',
        explanation: "Problem: inflates standard errors",
        topic: 'Improve Phase'
    },
    {
        id: 'I6',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "VIF (Variance Inflation Factor) > 5:",
        options: {
            A: "Good model fit",
            B: "Multicollinearity problem needing correction",
            C: "Adequate sample",
            D: "Data transformation needed"
        },
        correctAnswer: 'B',
        explanation: "VIF > 5 typically indicates problem",
        topic: 'Improve Phase'
    },
    {
        id: 'I7',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Box-Cox transformation used to:",
        options: {
            A: "Reduce outliers",
            B: "Address non-normality of residuals",
            C: "Improve R² directly",
            D: "Replace missing data"
        },
        correctAnswer: 'B',
        explanation: "Power transformation normalizes skewed",
        topic: 'Improve Phase'
    },
    {
        id: 'I8',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Solution Selection Matrix use:",
        options: {
            A: "Identify problems",
            B: "Evaluate and prioritize potential solutions",
            C: "Test statistical significance",
            D: "Monitor performance"
        },
        correctAnswer: 'C',
        explanation: "Compares solutions on importance criteria",
        topic: 'Improve Phase'
    },
    {
        id: 'I9',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Pilot test in Six Sigma:",
        options: {
            A: "Full-scale implementation",
            B: "Test solution on small scale before rollout",
            C: "Collect baseline data",
            D: "Identify special causes"
        },
        correctAnswer: 'B',
        explanation: "Reduces risk before full implementation",
        topic: 'Improve Phase'
    },
    {
        id: 'I10',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Cost-Benefit Analysis compares:",
        options: {
            A: "Current vs target state only",
            B: "Implementation costs against expected benefits",
            C: "Different departments",
            D: "Customer satisfaction only"
        },
        correctAnswer: 'B',
        explanation: "ROI justification for solution",
        topic: 'Improve Phase'
    },
    {
        id: 'I11',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Pilot test documentation includes:",
        options: {
            A: "Historical data only",
            B: "Pilot plan, success criteria, data methods, timeline",
            C: "Only financial statements",
            D: "Customer complaints"
        },
        correctAnswer: 'B',
        explanation: "Protocol ensures controlled test",
        topic: 'Improve Phase'
    },
    {
        id: 'I12',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Correlation vs causation:",
        options: {
            A: "Correlation proves causation",
            B: "Correlation implies causation",
            C: "Correlation does NOT prove causation",
            D: "Causation is obsolete"
        },
        correctAnswer: 'C',
        explanation: "Most common misinterpretation",
        topic: 'Improve Phase'
    },
    {
        id: 'I13',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "In multiple regression, Adjusted R²:",
        options: {
            A: "Outdated",
            B: "Accounts for predictor count",
            C: "Identical to R²",
            D: "Always larger"
        },
        correctAnswer: 'B',
        explanation: "Penalizes adding unnecessary variables",
        topic: 'Improve Phase'
    },
    {
        id: 'I14',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Residual plots showing \"funnel\" pattern:",
        options: {
            A: "Model excellent",
            B: "Heteroscedasticity (unequal variance)",
            C: "Perfect fit",
            D: "Normal distribution"
        },
        correctAnswer: 'B',
        explanation: "Violates constant variance assumption",
        topic: 'Improve Phase'
    },
    {
        id: 'I15',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Prediction Interval vs Confidence Interval:",
        options: {
            A: "Same",
            B: "Prediction wider; accounts for individual error",
            C: "Confidence wider",
            D: "Used interchangeably"
        },
        correctAnswer: 'B',
        explanation: "PI for individual value, CI for mean",
        topic: 'Improve Phase'
    },
    {
        id: 'I16',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Unexpected pilot results action:",
        options: {
            A: "Abandon solution",
            B: "Implement despite results",
            C: "Investigate root cause",
            D: "Declare failure"
        },
        correctAnswer: 'C',
        explanation: "Learning opportunity; investigate",
        topic: 'Improve Phase'
    },
    {
        id: 'I17',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Solution testing on different shifts:",
        options: {
            A: "Not necessary",
            B: "Validates solution works across conditions",
            C: "Too expensive",
            D: "Only for final"
        },
        correctAnswer: 'B',
        explanation: "Robustness verification",
        topic: 'Improve Phase'
    },
    {
        id: 'I18',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Pilot scope definition:",
        options: {
            A: "Same as full implementation",
            B: "Smaller, representative subset",
            C: "Individual only",
            D: "Whole organization"
        },
        correctAnswer: 'B',
        explanation: "Manageable but meaningful scale",
        topic: 'Improve Phase'
    },
    {
        id: 'I19',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Risk assessment during piloting:",
        options: {
            A: "Not needed",
            B: "Identifies potential failure modes early",
            C: "Only after full rollout",
            D: "Manager responsibility only"
        },
        correctAnswer: 'B',
        explanation: "Proactive risk management",
        topic: 'Improve Phase'
    },
    {
        id: 'I20',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Success criteria clarity:",
        options: {
            A: "Vague okay",
            B: "Specific, measurable, achievable targets",
            C: "Open-ended",
            D: "Subjective judgment"
        },
        correctAnswer: 'B',
        explanation: "Objective evaluation",
        topic: 'Improve Phase'
    },
    {
        id: 'I21',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Regression assumption: linearity:",
        options: {
            A: "Never assumed",
            B: "Relationship should be linear",
            C: "Always violated",
            D: "Not testable"
        },
        correctAnswer: 'B',
        explanation: "Scatter plot assessment",
        topic: 'Improve Phase'
    },
    {
        id: 'I22',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Regression assumption: independence:",
        options: {
            A: "Not necessary",
            B: "Observations independent; no autocorrelation",
            C: "Can be correlated",
            D: "Not important"
        },
        correctAnswer: 'B',
        explanation: "Critical for inference validity",
        topic: 'Improve Phase'
    },
    {
        id: 'I23',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Regression assumption: homoscedasticity:",
        options: {
            A: "Varying variance okay",
            B: "Constant variance across predicted values",
            C: "No variance needed",
            D: "Doesn't affect results"
        },
        correctAnswer: 'B',
        explanation: "Equal error distribution",
        topic: 'Improve Phase'
    },
    {
        id: 'I24',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Regression assumption: normality:",
        options: {
            A: "Always satisfied",
            B: "Residuals should be normally distributed",
            C: "Never satisfied",
            D: "Not testable"
        },
        correctAnswer: 'B',
        explanation: "Check with Q-Q plot or test",
        topic: 'Improve Phase'
    },
    {
        id: 'I25',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Multiple regression interpretation:",
        options: {
            A: "All coefficients independent",
            B: "Each coefficient controls for other predictors",
            C: "Order doesn't matter",
            D: "Only intercept important"
        },
        correctAnswer: 'B',
        explanation: "Partial effect interpretation",
        topic: 'Improve Phase'
    },
    {
        id: 'I26',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Stepwise regression limitation:",
        options: {
            A: "No limitation",
            B: "Can capitalize on chance; overfitting",
            C: "Always optimal",
            D: "No problem"
        },
        correctAnswer: 'B',
        explanation: "Use with caution; cross-validate",
        topic: 'Improve Phase'
    },
    {
        id: 'I27',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Forward selection method:",
        options: {
            A: "Start with all variables",
            B: "Start with none; add one at a time",
            C: "Remove variables only",
            D: "Random order"
        },
        correctAnswer: 'B',
        explanation: "Build model incrementally",
        topic: 'Improve Phase'
    },
    {
        id: 'I28',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Backward elimination method:",
        options: {
            A: "Start with none",
            B: "Start with all; remove one at a time",
            C: "Add variables only",
            D: "Random sequence"
        },
        correctAnswer: 'B',
        explanation: "Reduce model complexity",
        topic: 'Improve Phase'
    },
    {
        id: 'I29',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Model selection criteria (AIC, BIC):",
        options: {
            A: "Same values always",
            B: "Balance fit and complexity",
            C: "Only maximize R²",
            D: "Not compared"
        },
        correctAnswer: 'B',
        explanation: "Penalize additional parameters",
        topic: 'Improve Phase'
    },
    {
        id: 'I30',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Cross-validation purpose:",
        options: {
            A: "Validates on same data",
            B: "Assesses generalization to new data",
            C: "Not necessary",
            D: "Statistical test only"
        },
        correctAnswer: 'B',
        explanation: "Prevents overfitting",
        topic: 'Improve Phase'
    },
    {
        id: 'I31',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Hold-hold plan for pilot:",
        options: {
            A: "Not needed",
            B: "Contingency if solution fails",
            C: "Implement regardless",
            D: "No backup"
        },
        correctAnswer: 'B',
        explanation: "Reversal procedure prepared",
        topic: 'Improve Phase'
    },
    {
        id: 'I32',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Stakeholder communication during pilot:",
        options: {
            A: "Not necessary",
            B: "Regular updates on progress and results",
            C: "Only final presentation",
            D: "Silent observation"
        },
        correctAnswer: 'B',
        explanation: "Transparency and buy-in",
        topic: 'Improve Phase'
    },
    {
        id: 'I33',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Pilot timing selection:",
        options: {
            A: "Whenever convenient",
            B: "Strategically chosen period; minimize disruption",
            C: "Busiest time best",
            D: "No planning needed"
        },
        correctAnswer: 'B',
        explanation: "Maximize learning with minimal impact",
        topic: 'Improve Phase'
    },
    {
        id: 'I34',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Data collection during pilot:",
        options: {
            A: "No extra data",
            B: "Captures implementation and effect metrics",
            C: "Minimal tracking",
            D: "Only final count"
        },
        correctAnswer: 'B',
        explanation: "Demonstrates solution impact",
        topic: 'Improve Phase'
    },
    {
        id: 'I35',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Operator feedback on solution:",
        options: {
            A: "Not relevant",
            B: "Critical for refinement and acceptance",
            C: "Only from managers",
            D: "Ignored"
        },
        correctAnswer: 'B',
        explanation: "Front-line perspective valuable",
        topic: 'Improve Phase'
    },
    {
        id: 'I36',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Solution scalability assessment:",
        options: {
            A: "Not considered",
            B: "Can expanded version work enterprise-wide",
            C: "Always scalable",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Readiness for rollout",
        topic: 'Improve Phase'
    },
    {
        id: 'I37',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Resource requirements for full implementation:",
        options: {
            A: "Same as pilot",
            B: "Estimated based on scale-up factors",
            C: "Unknown",
            D: "Free"
        },
        correctAnswer: 'B',
        explanation: "Budget and planning",
        topic: 'Improve Phase'
    },
    {
        id: 'I38',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Training needs for implementation:",
        options: {
            A: "Not needed",
            B: "Identify and schedule employee instruction",
            C: "Self-taught",
            D: "No training required"
        },
        correctAnswer: 'B',
        explanation: "Competency development",
        topic: 'Improve Phase'
    },
    {
        id: 'I39',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Quality Function Deployment (QFD):",
        options: {
            A: "Not used",
            B: "Translates customer needs to technical specs",
            C: "Only for design",
            D: "Never in improvement"
        },
        correctAnswer: 'B',
        explanation: "House of Quality tool",
        topic: 'Improve Phase'
    },
    {
        id: 'I40',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Design of Experiments (DOE):",
        options: {
            A: "Not for Green Belts",
            B: "Systematic variation of factors to test effects",
            C: "Only for research",
            D: "Always full factorial"
        },
        correctAnswer: 'B',
        explanation: "Efficient experimentation",
        topic: 'Improve Phase'
    },
    {
        id: 'I41',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Fractional factorial design:",
        options: {
            A: "Full factorial only",
            B: "Reduced runs testing main effects",
            C: "Never used",
            D: "Always confounded"
        },
        correctAnswer: 'B',
        explanation: "Efficiency vs information trade-off",
        topic: 'Improve Phase'
    },
    {
        id: 'I42',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Confounding in DOE:",
        options: {
            A: "Not possible",
            B: "Two effects cannot be separated",
            C: "Always good",
            D: "Avoidable always"
        },
        correctAnswer: 'B',
        explanation: "Design limitation",
        topic: 'Improve Phase'
    },
    {
        id: 'I43',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Randomization in experiments:",
        options: {
            A: "Not necessary",
            B: "Eliminates systematic bias",
            C: "Reduces efficiency",
            D: "Same results either way"
        },
        correctAnswer: 'B',
        explanation: "Statistical validity",
        topic: 'Improve Phase'
    },
    {
        id: 'I44',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Replication in experiments:",
        options: {
            A: "Test each combination once",
            B: "Repeat combinations for variance estimation",
            C: "Not needed",
            D: "Expensive only"
        },
        correctAnswer: 'B',
        explanation: "Precision improvement",
        topic: 'Improve Phase'
    },
    {
        id: 'I45',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Main effect vs interaction:",
        options: {
            A: "Same thing",
            B: "Main = direct effect; interaction = combined effect",
            C: "Never both present",
            D: "Only main matters"
        },
        correctAnswer: 'B',
        explanation: "Crucial distinction",
        topic: 'Improve Phase'
    },
    {
        id: 'I46',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Two-level factors in screening:",
        options: {
            A: "Low only",
            B: "Low and high for initial testing",
            C: "Multiple levels always",
            D: "Continuous only"
        },
        correctAnswer: 'B',
        explanation: "Efficiency in screening",
        topic: 'Improve Phase'
    },
    {
        id: 'I47',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Response surface methodology (RSM):",
        options: {
            A: "Initial screening",
            B: "Optimization around optimal region",
            C: "One-factor tests",
            D: "Theoretical only"
        },
        correctAnswer: 'B',
        explanation: "Advanced optimization",
        topic: 'Improve Phase'
    },
    {
        id: 'I48',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Central composite design:",
        options: {
            A: "Simple two-level",
            B: "Allows curvature estimation for optimization",
            C: "Orthogonal only",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Response surface design",
        topic: 'Improve Phase'
    },
    {
        id: 'I49',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Robust design concept:",
        options: {
            A: "Solution immune to variation",
            B: "Solution insensitive to noise factors",
            C: "No variation possible",
            D: "Impossible to achieve"
        },
        correctAnswer: 'B',
        explanation: "Parameter design",
        topic: 'Improve Phase'
    },
    {
        id: 'I50',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Lean manufacturing principle:",
        options: {
            A: "Minimum materials only",
            B: "Eliminate waste; create value",
            C: "Low cost always",
            D: "No inventory"
        },
        correctAnswer: 'B',
        explanation: "Lean philosophy",
        topic: 'Improve Phase'
    },
    {
        id: 'I51',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Just-In-Time (JIT):",
        options: {
            A: "Any time acceptable",
            B: "Minimum inventory; material arrives when needed",
            C: "After demand",
            D: "Always stock"
        },
        correctAnswer: 'B',
        explanation: "Flow and waste reduction",
        topic: 'Improve Phase'
    },
    {
        id: 'I52',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Kaizen event (blitz):",
        options: {
            A: "Quality problem only",
            B: "Intensive multi-day improvement activity",
            C: "One person",
            D: "Never planned"
        },
        correctAnswer: 'B',
        explanation: "Rapid improvement",
        topic: 'Improve Phase'
    },
    {
        id: 'I53',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Value-added vs non-value-added:",
        options: {
            A: "Same thing",
            B: "Value-added transforms product; non-value-added is waste",
            C: "Both valuable",
            D: "Neither important"
        },
        correctAnswer: 'B',
        explanation: "Lean classification",
        topic: 'Improve Phase'
    },
    {
        id: 'I54',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Takt time concept:",
        options: {
            A: "Production rate",
            B: "Rate needed to meet customer demand",
            C: "Theoretical only",
            D: "Not measurable"
        },
        correctAnswer: 'B',
        explanation: "Production pacing",
        topic: 'Improve Phase'
    },
    {
        id: 'I55',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Pull system principle:",
        options: {
            A: "Push based on forecasts",
            B: "Triggered by downstream demand",
            C: "Management directive",
            D: "No planning"
        },
        correctAnswer: 'B',
        explanation: "Demand-driven production",
        topic: 'Improve Phase'
    },
    {
        id: 'I56',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Visual management system:",
        options: {
            A: "Decorative only",
            B: "Immediate status understanding",
            C: "Complex reporting",
            D: "Not effective"
        },
        correctAnswer: 'B',
        explanation: "Communication tool",
        topic: 'Improve Phase'
    },
    {
        id: 'I57',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Mistake-proofing (Poka-Yoke):",
        options: {
            A: "Impossible",
            B: "Prevents defects automatically",
            C: "Training only",
            D: "No technology needed"
        },
        correctAnswer: 'B',
        explanation: "Error prevention",
        topic: 'Improve Phase'
    },
    {
        id: 'I58',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Standard Work:",
        options: {
            A: "Arbitrary procedures",
            B: "Best-known process documented for consistency",
            C: "Never changes",
            D: "Not needed"
        },
        correctAnswer: 'B',
        explanation: "Foundation for improvement",
        topic: 'Improve Phase'
    },
    {
        id: 'I59',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Point-of-use storage:",
        options: {
            A: "Central location",
            B: "Materials stored at use location",
            C: "Inventory centralized",
            D: "Increases motion"
        },
        correctAnswer: 'B',
        explanation: "Reduces waste",
        topic: 'Improve Phase'
    },
    {
        id: 'I60',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "One-piece flow:",
        options: {
            A: "Batch processing",
            B: "Individual items flow through process",
            C: "Not practical",
            D: "Too slow"
        },
        correctAnswer: 'B',
        explanation: "Lean production",
        topic: 'Improve Phase'
    },
    {
        id: 'I61',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Andon system:",
        options: {
            A: "Communication system",
            B: "Visual/audible signal of problem",
            C: "Not used",
            D: "Optional"
        },
        correctAnswer: 'B',
        explanation: "Immediate problem detection",
        topic: 'Improve Phase'
    },
    {
        id: 'I62',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Continuous improvement culture:",
        options: {
            A: "Stops after project",
            B: "Ongoing small improvements from everyone",
            C: "Only management",
            D: "Unnecessary"
        },
        correctAnswer: 'B',
        explanation: "Kaizen philosophy",
        topic: 'Improve Phase'
    },
    {
        id: 'I63',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Suggestion system benefit:",
        options: {
            A: "No benefit",
            B: "Engages workforce; captures ideas",
            C: "Management only",
            D: "Discourages thinking"
        },
        correctAnswer: 'B',
        explanation: "Employee empowerment",
        topic: 'Improve Phase'
    },
    {
        id: 'I64',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Respect for people principle:",
        options: {
            A: "Formal only",
            B: "Employee involvement and development",
            C: "Top-down commands",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Lean culture",
        topic: 'Improve Phase'
    },
    {
        id: 'I65',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Cost-benefit ROI calculation:",
        options: {
            A: "Revenue only",
            B: "(Benefits - Costs) / Costs = ROI",
            C: "Qualitative only",
            D: "Not necessary"
        },
        correctAnswer: 'B',
        explanation: "Financial justification",
        topic: 'Improve Phase'
    },
    {
        id: 'I66',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Payback period:",
        options: {
            A: "Always payback",
            B: "Time for benefits to equal costs",
            C: "In years only",
            D: "Not used"
        },
        correctAnswer: 'B',
        explanation: "Investment recovery",
        topic: 'Improve Phase'
    },
    {
        id: 'I67',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Net present value (NPV):",
        options: {
            A: "Revenue minus costs",
            B: "Discounted future benefits minus costs",
            C: "Annual benefit only",
            D: "Not calculated"
        },
        correctAnswer: 'B',
        explanation: "Time value of money",
        topic: 'Improve Phase'
    },
    {
        id: 'I68',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Internal rate of return (IRR):",
        options: {
            A: "Annual percentage return",
            B: "Discount rate making NPV = zero",
            C: "Same as payback",
            D: "Not important"
        },
        correctAnswer: 'B',
        explanation: "Project attractiveness",
        topic: 'Improve Phase'
    },
    {
        id: 'I69',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Break-even analysis:",
        options: {
            A: "Not needed",
            B: "Point where revenue equals costs",
            C: "Final state only",
            D: "Not applicable"
        },
        correctAnswer: 'B',
        explanation: "Financial milestone",
        topic: 'Improve Phase'
    },
    {
        id: 'I70',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Sensitivity analysis impact:",
        options: {
            A: "Not useful",
            B: "Tests how results change with assumptions",
            C: "Final answer only",
            D: "Unnecessary detail"
        },
        correctAnswer: 'B',
        explanation: "Robustness check",
        topic: 'Improve Phase'
    },
    {
        id: 'I71',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Scenario planning:",
        options: {
            A: "Assumes one future",
            B: "Tests multiple possible outcomes",
            C: "Theoretical only",
            D: "Not strategic"
        },
        correctAnswer: 'B',
        explanation: "Risk management",
        topic: 'Improve Phase'
    },
    {
        id: 'I72',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Decision tree analysis:",
        options: {
            A: "Not statistical",
            B: "Maps decisions and outcomes probabilistically",
            C: "Only qualitative",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Decision tool",
        topic: 'Improve Phase'
    },
    {
        id: 'I73',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Risk matrix probability-impact:",
        options: {
            A: "No assessment needed",
            B: "Prioritizes risks by severity",
            C: "All equal",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Risk prioritization",
        topic: 'Improve Phase'
    },
    {
        id: 'I74',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Mitigation strategy selection:",
        options: {
            A: "Accept all risks",
            B: "Avoid, reduce, mitigate, or transfer risks",
            C: "No options",
            D: "Random choice"
        },
        correctAnswer: 'B',
        explanation: "Risk response options",
        topic: 'Improve Phase'
    },
    {
        id: 'I75',
        phase: 'improve',
        module: 'Improve Phase',
        difficulty: 'medium',
        question: "Implementation readiness checklist:",
        options: {
            A: "Not necessary",
            B: "Verifies people, process, systems ready",
            C: "Optional",
            D: "After implementation"
        },
        correctAnswer: 'B',
        explanation: "Launch preparation",
        topic: 'Improve Phase'
    }
];
