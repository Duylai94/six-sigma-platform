import { QuizQuestion } from '@/types/quiz.types';

export const measurePhaseQuizzes: QuizQuestion[] = [
    {
        id: 'M1',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Continuous data examples include:",
        options: {
            A: "Number of defects",
            B: "Time in minutes, weight, temperature, pressure",
            C: "Pass/fail results",
            D: "Customer satisfaction level (1-5)"
        },
        correctAnswer: 'B',
        explanation: "Measurable on continuous scale",
        topic: 'Measure Phase'
    },
    {
        id: 'M2',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Discrete data examples include:",
        options: {
            A: "Temperature readings",
            B: "Number of defects, customer complaints, occurrences",
            C: "Response time in seconds",
            D: "Diameter measurements"
        },
        correctAnswer: 'B',
        explanation: "Counted, not measured",
        topic: 'Measure Phase'
    },
    {
        id: 'M3',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Attribute (categorical) data includes:",
        options: {
            A: "Measurements",
            B: "Pass/fail, yes/no, color, category classifications",
            C: "Time duration",
            D: "Weight"
        },
        correctAnswer: 'B',
        explanation: "Non-numeric categories",
        topic: 'Measure Phase'
    },
    {
        id: 'M4',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Nominal data scale includes:",
        options: {
            A: "Ordered rankings",
            B: "Categories with no natural order (color, location, type)",
            C: "Measurements",
            D: "Percentages"
        },
        correctAnswer: 'B',
        explanation: "Unordered categories",
        topic: 'Measure Phase'
    },
    {
        id: 'M5',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Ordinal data scale includes:",
        options: {
            A: "Measurements",
            B: "Ranked categories (poor/fair/good/excellent, size S/M/L)",
            C: "Discrete counts",
            D: "No order relationship"
        },
        correctAnswer: 'B',
        explanation: "Ordered categories but not measured intervals",
        topic: 'Measure Phase'
    },
    {
        id: 'M6',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "When should you use a parametric test?",
        options: {
            A: "Always",
            B: "With discrete data only",
            C: "With normally distributed continuous data",
            D: "Never in Six Sigma"
        },
        correctAnswer: 'C',
        explanation: "Parametric assumes normal distribution",
        topic: 'Measure Phase'
    },
    {
        id: 'M7',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "When should you use a non-parametric test?",
        options: {
            A: "Never",
            B: "With non-normal data or small samples",
            C: "Always preferred",
            D: "Only for attribute data"
        },
        correctAnswer: 'B',
        explanation: "Protects validity when assumptions violated",
        topic: 'Measure Phase'
    },
    {
        id: 'M8',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Sample size for continuous data minimum:",
        options: {
            A: "5 minimum",
            B: "20-30 for most tests",
            C: "100+ always",
            D: "1 sufficient"
        },
        correctAnswer: 'B',
        explanation: "Central Limit Theorem applies at n≥30",
        topic: 'Measure Phase'
    },
    {
        id: 'M9',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Sample size for discrete/attribute data typically:",
        options: {
            A: "Smaller than continuous",
            B: "Larger than continuous because variation patterns less predictable",
            C: "Same as continuous",
            D: "Not important"
        },
        correctAnswer: 'B',
        explanation: "Need more observations for discrete",
        topic: 'Measure Phase'
    },
    {
        id: 'M10',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Which test for 2 groups, continuous, normal data?",
        options: {
            A: "Chi-squared",
            B: "t-test",
            C: "ANOVA",
            D: "Poisson"
        },
        correctAnswer: 'B',
        explanation: "Two-sample t-test is standard",
        topic: 'Measure Phase'
    },
    {
        id: 'M11',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Which test for 3+ groups, continuous, normal data?",
        options: {
            A: "t-test",
            B: "Chi-squared",
            C: "ANOVA",
            D: "Friedman"
        },
        correctAnswer: 'C',
        explanation: "Compares multiple group means",
        topic: 'Measure Phase'
    },
    {
        id: 'M12',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Non-normal continuous data typically uses:",
        options: {
            A: "Parametric tests anyway",
            B: "Force transformation",
            C: "Non-parametric alternative (Mann-Whitney, Kruskal-Wallis)",
            D: "Abandon analysis"
        },
        correctAnswer: 'C',
        explanation: "Alternative when normality assumption fails",
        topic: 'Measure Phase'
    },
    {
        id: 'M13',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Categorical data with independence test:",
        options: {
            A: "t-test",
            B: "ANOVA",
            C: "Chi-squared",
            D: "Correlation"
        },
        correctAnswer: 'C',
        explanation: "Tests independence of categories",
        topic: 'Measure Phase'
    },
    {
        id: 'M14',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Paired data (before/after same units) test:",
        options: {
            A: "Independent t-test",
            B: "Paired t-test",
            C: "ANOVA",
            D: "Chi-squared"
        },
        correctAnswer: 'B',
        explanation: "Accounts for within-subject correlation",
        topic: 'Measure Phase'
    },
    {
        id: 'M15',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Test selection flowchart depends on:",
        options: {
            A: "Researcher preference",
            B: "Data type, sample size, normality, independence",
            C: "Software availability",
            D: "Budget"
        },
        correctAnswer: 'B',
        explanation: "Critical decision factors",
        topic: 'Measure Phase'
    },
    {
        id: 'M16',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement System Analysis (MSA) purpose:",
        options: {
            A: "Measure process capability",
            B: "Validate that measurement system is accurate and repeatable",
            C: "Improve process directly",
            D: "Replace control charts"
        },
        correctAnswer: 'B',
        explanation: "Cannot trust data if measurement invalid",
        topic: 'Measure Phase'
    },
    {
        id: 'M17',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Precision in measurement means:",
        options: {
            A: "Accuracy",
            B: "Consistency and repeatability",
            C: "Speed of measurement",
            D: "Cost-effectiveness"
        },
        correctAnswer: 'B',
        explanation: "Same reading multiple times",
        topic: 'Measure Phase'
    },
    {
        id: 'M18',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Accuracy in measurement means:",
        options: {
            A: "Consistency",
            B: "Measured value close to true value",
            C: "Speed",
            D: "Simplicity"
        },
        correctAnswer: 'B',
        explanation: "Correctness of measurement",
        topic: 'Measure Phase'
    },
    {
        id: 'M19',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Bias in measurement is:",
        options: {
            A: "Systematic error; consistent deviation from true value",
            B: "Random variation",
            C: "Precision issue",
            D: "Normal variation"
        },
        correctAnswer: 'A',
        explanation: "Does gauge read consistently high/low?",
        topic: 'Measure Phase'
    },
    {
        id: 'M20',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Linearity in measurement means:",
        options: {
            A: "Straight line relationship",
            B: "Accuracy consistent across range of measurements",
            C: "Gage used in straight line motion",
            D: "Linear regression"
        },
        correctAnswer: 'B',
        explanation: "Does gage measure accurately at all values?",
        topic: 'Measure Phase'
    },
    {
        id: 'M21',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "GR&R (Gage Repeatability & Reproducibility) percentage:",
        options: {
            A: "<10% = Excellent",
            B: "10-30% = Marginal",
            C: ">30% = Unacceptable",
            D: "All answers correct"
        },
        correctAnswer: 'A',
        explanation: "Interpretation categories",
        topic: 'Measure Phase'
    },
    {
        id: 'M22',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Repeatability in GR&R measures:",
        options: {
            A: "Different operators on same part",
            B: "Equipment variation; same operator, part, gage",
            C: "Process variation",
            D: "Supplier differences"
        },
        correctAnswer: 'B',
        explanation: "Equipment consistency only",
        topic: 'Measure Phase'
    },
    {
        id: 'M23',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Reproducibility in GR&R measures:",
        options: {
            A: "Equipment repeatability",
            B: "Different operators on same parts; operator variation",
            C: "Time of day effects",
            D: "Environmental factors"
        },
        correctAnswer: 'B',
        explanation: "Operator technique, interpretation",
        topic: 'Measure Phase'
    },
    {
        id: 'M24',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Typical GR&R study design 10×3×3:",
        options: {
            A: "10 measurements total",
            B: "10 parts × 3 operators × 3 trials = 90 measurements",
            C: "3 parts × 3 operators × 10 trials",
            D: "30 total measurements"
        },
        correctAnswer: 'B',
        explanation: "Standard crossed design",
        topic: 'Measure Phase'
    },
    {
        id: 'M25',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "If Repeatability (EV) high but Reproducibility (AV) low:",
        options: {
            A: "Operator training needed",
            B: "Equipment needs calibration/fix",
            C: "Process unstable",
            D: "Gage type wrong"
        },
        correctAnswer: 'B',
        explanation: "Repeatability = equipment issue",
        topic: 'Measure Phase'
    },
    {
        id: 'M26',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "If Reproducibility (AV) high but Repeatability (EV) low:",
        options: {
            A: "Replace gage",
            B: "Standardize measurement procedure, train operators",
            C: "Change measurement frequency",
            D: "Extend study"
        },
        correctAnswer: 'B',
        explanation: "Reproducibility = operator issue",
        topic: 'Measure Phase'
    },
    {
        id: 'M27',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "GR&R <10% indicates:",
        options: {
            A: "Unacceptable measurement system",
            B: "Marginal acceptance",
            C: "Excellent system ready for use",
            D: "Need more study"
        },
        correctAnswer: 'C',
        explanation: "Proceed with confidence",
        topic: 'Measure Phase'
    },
    {
        id: 'M28',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "GR&R 10-30% indicates:",
        options: {
            A: "Accept without concern",
            B: "Conditionally acceptable; monitor closely",
            C: "Reject immediately",
            D: "Excellent"
        },
        correctAnswer: 'B',
        explanation: "Marginal; use with caution",
        topic: 'Measure Phase'
    },
    {
        id: 'M29',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "GR&R >30% indicates:",
        options: {
            A: "Still acceptable",
            B: "Measurement system unreliable; stop project",
            C: "Recalculate differently",
            D: "Continue analysis anyway"
        },
        correctAnswer: 'B',
        explanation: "Untrustworthy data invalidates analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M30',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage R&R ANOVA method vs Range method:",
        options: {
            A: "Same results always",
            B: "ANOVA provides more detailed variance breakdown",
            C: "Range method more accurate",
            D: "Method doesn't matter"
        },
        correctAnswer: 'B',
        explanation: "More detailed analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M31',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "When to repeat GR&R study:",
        options: {
            A: "Never; done once",
            B: "When gage serviced, replaced, after maintenance",
            C: "Monthly routine",
            D: "When convenient"
        },
        correctAnswer: 'B',
        explanation: "Validate system integrity",
        topic: 'Measure Phase'
    },
    {
        id: 'M32',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage linearity assessment:",
        options: {
            A: "Accuracy over time",
            B: "Accuracy consistent across measurement range",
            C: "Gage used in straight motion",
            D: "Linear trend in data"
        },
        correctAnswer: 'B',
        explanation: "Does gage perform equally at all values?",
        topic: 'Measure Phase'
    },
    {
        id: 'M33',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage bias study:",
        options: {
            A: "Operator technique",
            B: "Systematic error; does gage consistently read high/low",
            C: "Random error",
            D: "Calibration"
        },
        correctAnswer: 'B',
        explanation: "True value comparison",
        topic: 'Measure Phase'
    },
    {
        id: 'M34',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement system validation before project:",
        options: {
            A: "Optional",
            B: "Critical—cannot trust data if system invalid",
            C: "Only for critical measurements",
            D: "Not cost-effective"
        },
        correctAnswer: 'B',
        explanation: "Foundation of data integrity",
        topic: 'Measure Phase'
    },
    {
        id: 'M35',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Process Capability definition:",
        options: {
            A: "Process can meet specifications",
            B: "Measure of how well process performs relative to specs",
            C: "Process always within spec limits",
            D: "Customer satisfaction measure"
        },
        correctAnswer: 'B',
        explanation: "Performance vs requirements",
        topic: 'Measure Phase'
    },
    {
        id: 'M36',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cp metric measures:",
        options: {
            A: "Process centering",
            B: "Process potential; spec range vs process variation",
            C: "Actual performance",
            D: "Defect rate"
        },
        correctAnswer: 'B',
        explanation: "Ignores centering",
        topic: 'Measure Phase'
    },
    {
        id: 'M37',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk metric measures:",
        options: {
            A: "Process potential only",
            B: "Actual capability accounting for centering",
            C: "Spec limits only",
            D: "Customer acceptance"
        },
        correctAnswer: 'B',
        explanation: "How close process to spec limit?",
        topic: 'Measure Phase'
    },
    {
        id: 'M38',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk calculation includes:",
        options: {
            A: "Mean and standard deviation only",
            B: "Mean, standard deviation, and spec limits",
            C: "Sample size only",
            D: "Defect rate only"
        },
        correctAnswer: 'B',
        explanation: "Both capability and centering",
        topic: 'Measure Phase'
    },
    {
        id: 'M39',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk interpretation 1.33:",
        options: {
            A: "Poor capability",
            B: "Marginal; barely acceptable",
            C: "Excellent",
            D: "Unacceptable"
        },
        correctAnswer: 'B',
        explanation: "Minimum \"capable\" threshold",
        topic: 'Measure Phase'
    },
    {
        id: 'M40',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk = 2.0 represents:",
        options: {
            A: "4-Sigma",
            B: "5-Sigma",
            C: "6-Sigma (with 1.5σ shift)",
            D: "3-Sigma"
        },
        correctAnswer: 'C',
        explanation: "Six Sigma gold standard",
        topic: 'Measure Phase'
    },
    {
        id: 'M41',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Six Sigma definition (3.4 DPMO):",
        options: {
            A: "Cpk = 1.0",
            B: "Cpk = 1.67 with 1.5σ long-term shift",
            C: "Cpk = 2.0 exactly",
            D: "Cpk = 1.33"
        },
        correctAnswer: 'B',
        explanation: "Standard Six Sigma target",
        topic: 'Measure Phase'
    },
    {
        id: 'M42',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Capability assessment prerequisites:",
        options: {
            A: "Not required",
            B: "Process stable (in control)",
            C: "Large sample only",
            D: "Normally distributed only"
        },
        correctAnswer: 'B',
        explanation: "Stability prerequisite",
        topic: 'Measure Phase'
    },
    {
        id: 'M43',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Non-normal data capability:",
        options: {
            A: "Calculate Cpk anyway",
            B: "Use Box-Cox transformation or non-parametric method",
            C: "Ignore non-normality",
            D: "Assume normal"
        },
        correctAnswer: 'B',
        explanation: "Address distribution issues first",
        topic: 'Measure Phase'
    },
    {
        id: 'M44',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "One-sided vs two-sided specifications effect on capability:",
        options: {
            A: "No difference",
            B: "Different calculation; one-sided uses full distance",
            C: "Same Cpk always",
            D: "Never mixed"
        },
        correctAnswer: 'B',
        explanation: "Affects calculation",
        topic: 'Measure Phase'
    },
    {
        id: 'M45',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Asymmetric specs (6 upper, 4 lower) Cpk:",
        options: {
            A: "Use average tolerance",
            B: "Calculate for each side, use minimum",
            C: "Equal distribution",
            D: "Use larger value"
        },
        correctAnswer: 'B',
        explanation: "Limiting side determines capability",
        topic: 'Measure Phase'
    },
    {
        id: 'M46',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Pp vs Ppk difference:",
        options: {
            A: "No difference",
            B: "Pp = potential (short-term), Ppk = performance (long-term)",
            C: "Only for Black Belts",
            D: "Same calculation"
        },
        correctAnswer: 'B',
        explanation: "Ppk more conservative than Pp",
        topic: 'Measure Phase'
    },
    {
        id: 'M47',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Process sigma calculation:",
        options: {
            A: "Directly from Cpk",
            B: "From standard deviation; Cpk = (spec limit - mean) / (3σ)",
            C: "Sample size based",
            D: "Defect rate only"
        },
        correctAnswer: 'B',
        explanation: "Fundamental to sigma level",
        topic: 'Measure Phase'
    },
    {
        id: 'M48',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "DPMO from Cpk = 1.33:",
        options: {
            A: "3.4 DPMO",
            B: "63 DPMO",
            C: "6,210 DPMO",
            D: "66,807 DPMO"
        },
        correctAnswer: 'B',
        explanation: "Standard conversion",
        topic: 'Measure Phase'
    },
    {
        id: 'M49',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Long-term shift assumption:",
        options: {
            A: "0σ",
            B: "1.5σ",
            C: "3σ",
            D: "No shift"
        },
        correctAnswer: 'B',
        explanation: "Standard Six Sigma assumption",
        topic: 'Measure Phase'
    },
    {
        id: 'M50',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Baseline capability study duration:",
        options: {
            A: "One day",
            B: "20-25 subgroups to capture normal variation",
            C: "One measurement",
            D: "Years of data"
        },
        correctAnswer: 'B',
        explanation: "Sufficient data window",
        topic: 'Measure Phase'
    },
    {
        id: 'M51',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk trending over time indicates:",
        options: {
            A: "Unnecessary",
            B: "Process improvement or degradation",
            C: "All same value always",
            D: "Random occurrence"
        },
        correctAnswer: 'B',
        explanation: "Early warning system",
        topic: 'Measure Phase'
    },
    {
        id: 'M52',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Specification limits source:",
        options: {
            A: "Process data",
            B: "Customer requirements",
            C: "Historical averages",
            D: "Team preference"
        },
        correctAnswer: 'B',
        explanation: "Customer needs drive specs",
        topic: 'Measure Phase'
    },
    {
        id: 'M53',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "When Cpk = 0:",
        options: {
            A: "Normal",
            B: "Spec limit = process mean",
            C: "Good process",
            D: "Process centered"
        },
        correctAnswer: 'B',
        explanation: "At boundary of spec",
        topic: 'Measure Phase'
    },
    {
        id: 'M54',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk sensitivity to centering:",
        options: {
            A: "No impact",
            B: "Highly sensitive",
            C: "Minor impact",
            D: "Only affects Pp"
        },
        correctAnswer: 'B',
        explanation: "Off-center significantly lowers Cpk",
        topic: 'Measure Phase'
    },
    {
        id: 'M55',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Target Cpk for high-risk process:",
        options: {
            A: "1.0",
            B: "1.33",
            C: "1.67+",
            D: "1.5"
        },
        correctAnswer: 'C',
        explanation: "Higher target for critical specs",
        topic: 'Measure Phase'
    },
    {
        id: 'M56',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Capability improvement primarily requires:",
        options: {
            A: "Change specs lower",
            B: "Reduce variation (smaller σ)",
            C: "Ignore high values",
            D: "Blame suppliers"
        },
        correctAnswer: 'B',
        explanation: "Tighter process = better capability",
        topic: 'Measure Phase'
    },
    {
        id: 'M57',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Perfect centering when Cp = 1.8:",
        options: {
            A: "Cpk > 1.8",
            B: "Cpk = 1.8",
            C: "Cpk < 1.8",
            D: "Cannot determine"
        },
        correctAnswer: 'B',
        explanation: "When centered, Cp = Cpk",
        topic: 'Measure Phase'
    },
    {
        id: 'M58',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Minimum sample for valid capability:",
        options: {
            A: "5 observations",
            B: "10 observations",
            C: "30+ observations",
            D: "100+ always"
        },
        correctAnswer: 'C',
        explanation: "Central limit theorem",
        topic: 'Measure Phase'
    },
    {
        id: 'M59',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data types impact on capability analysis:",
        options: {
            A: "No difference",
            B: "Normal continuous preferred; non-normal/discrete requires alternatives",
            C: "Same method for all",
            D: "Discrete preferred"
        },
        correctAnswer: 'B',
        explanation: "Distribution matters",
        topic: 'Measure Phase'
    },
    {
        id: 'M60',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Graphical capability analysis includes:",
        options: {
            A: "Histogram only",
            B: "Histogram, normal probability plot, control chart",
            C: "Control chart only",
            D: "Verbal description"
        },
        correctAnswer: 'B',
        explanation: "Multiple visual assessments",
        topic: 'Measure Phase'
    },
    {
        id: 'M61',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Bilateral tolerance specs:",
        options: {
            A: "Only upper limit",
            B: "Only lower limit",
            C: "Both upper and lower",
            D: "No limits"
        },
        correctAnswer: 'C',
        explanation: "Most common",
        topic: 'Measure Phase'
    },
    {
        id: 'M62',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Unilateral tolerance:",
        options: {
            A: "Both limits required",
            B: "Only one-sided spec (upper or lower only)",
            C: "Never used",
            D: "Rarely applicable"
        },
        correctAnswer: 'B',
        explanation: "Single directional limit",
        topic: 'Measure Phase'
    },
    {
        id: 'M63',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk interpretation 1.0-1.33:",
        options: {
            A: "Excellent",
            B: "Marginal; barely acceptable",
            C: "Poor",
            D: "Excellent"
        },
        correctAnswer: 'B',
        explanation: "Needs improvement",
        topic: 'Measure Phase'
    },
    {
        id: 'M64',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cpk 1.67-2.0 interpretation:",
        options: {
            A: "Acceptable",
            B: "Good to excellent",
            C: "Needs improvement",
            D: "Unacceptable"
        },
        correctAnswer: 'B',
        explanation: "Strong capability",
        topic: 'Measure Phase'
    },
    {
        id: 'M65',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Process centering adjustment:",
        options: {
            A: "Change specifications",
            B: "Adjust mean toward specification center",
            C: "Increase variation",
            D: "Change defect definition"
        },
        correctAnswer: 'B',
        explanation: "Improves Cpk dramatically",
        topic: 'Measure Phase'
    },
    {
        id: 'M66',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Capability indices limitations:",
        options: {
            A: "Perfectly accurate",
            B: "Assume normality, constant variation, stable process",
            C: "No limitations",
            D: "Only for manufacturing"
        },
        correctAnswer: 'B',
        explanation: "Conditional validity",
        topic: 'Measure Phase'
    },
    {
        id: 'M67',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Short-term vs long-term capability:",
        options: {
            A: "Same thing",
            B: "Short-term = subgroup variation only; long-term = all variation",
            C: "No difference",
            D: "Long-term always zero"
        },
        correctAnswer: 'B',
        explanation: "Different perspectives",
        topic: 'Measure Phase'
    },
    {
        id: 'M68',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "When process OUT of control:",
        options: {
            A: "Calculate Cpk anyway",
            B: "Cpk invalid; fix control issues first",
            C: "Ignore special causes",
            D: "Use Pp instead"
        },
        correctAnswer: 'B',
        explanation: "Stability prerequisite",
        topic: 'Measure Phase'
    },
    {
        id: 'M69',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Six Sigma initiative goal:",
        options: {
            A: "Cpk 1.0",
            B: "Cpk 1.33",
            C: "Cpk 1.67+",
            D: "Any improvement"
        },
        correctAnswer: 'C',
        explanation: "Ambitious but achievable target",
        topic: 'Measure Phase'
    },
    {
        id: 'M70',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Capability study documentation includes:",
        options: {
            A: "Cpk number only",
            B: "Data collection method, sample size, time period, results, conclusions",
            C: "Only final result",
            D: "Historical data only"
        },
        correctAnswer: 'B',
        explanation: "Complete traceability",
        topic: 'Measure Phase'
    },
    {
        id: 'M71',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage stability over time:",
        options: {
            A: "Not important",
            B: "Gage should maintain accuracy without drift",
            C: "Only annual check needed",
            D: "Not measurable"
        },
        correctAnswer: 'B',
        explanation: "Ensures reliable long-term measurements",
        topic: 'Measure Phase'
    },
    {
        id: 'M72',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Calibration in measurement system:",
        options: {
            A: "Optional",
            B: "Adjusting gage to reference standards at regular intervals",
            C: "Only needed at purchase",
            D: "Not related to GR&R"
        },
        correctAnswer: 'B',
        explanation: "Maintains accuracy",
        topic: 'Measure Phase'
    },
    {
        id: 'M73',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Variable MSA used for:",
        options: {
            A: "Pass/fail measurements",
            B: "Continuous measurements (dimension, weight, time)",
            C: "Categorical data",
            D: "Only attributes"
        },
        correctAnswer: 'B',
        explanation: "Continuous/variable data analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M74',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Attribute MSA used for:",
        options: {
            A: "Continuous measurements",
            B: "Pass/fail, go/no-go, conforming/non-conforming classifications",
            C: "Only dimensional",
            D: "Time measurements"
        },
        correctAnswer: 'B',
        explanation: "Categorical data analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M75',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Visual controls for measurement:",
        options: {
            A: "Not needed",
            B: "Color coding, marking standards, visual boundaries",
            C: "Only for display",
            D: "Statistical only"
        },
        correctAnswer: 'B',
        explanation: "Supports consistent measurement",
        topic: 'Measure Phase'
    },
    {
        id: 'M76',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement procedure standardization:",
        options: {
            A: "Not necessary",
            B: "Written, detailed steps to ensure consistency",
            C: "Only verbal instructions",
            D: "Each operator different approach fine"
        },
        correctAnswer: 'B',
        explanation: "Critical for reproducibility",
        topic: 'Measure Phase'
    },
    {
        id: 'M77',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Operator training for measurement:",
        options: {
            A: "Not needed",
            B: "Instruction and practice on proper measurement technique",
            C: "Only for new equipment",
            D: "One-time orientation sufficient"
        },
        correctAnswer: 'B',
        explanation: "Ongoing competency maintenance",
        topic: 'Measure Phase'
    },
    {
        id: 'M78',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Environmental factors affecting measurement:",
        options: {
            A: "Never matter",
            B: "Temperature, humidity, vibration can affect readings",
            C: "Only in manufacturing",
            D: "Controllable so ignored"
        },
        correctAnswer: 'B',
        explanation: "May require environmental controls",
        topic: 'Measure Phase'
    },
    {
        id: 'M79',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement error sources multiple contributors:",
        options: {
            A: "Always single cause",
            B: "Gage, operator, environment, technique, procedure",
            C: "Not identifiable",
            D: "Only equipment matters"
        },
        correctAnswer: 'B',
        explanation: "Multiple factors to manage",
        topic: 'Measure Phase'
    },
    {
        id: 'M80',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Repeatability variation formula uses:",
        options: {
            A: "Range only",
            B: "Standard deviation only",
            C: "Average range across replicates by operators",
            D: "Total variation"
        },
        correctAnswer: 'C',
        explanation: "Equipment variation calculation",
        topic: 'Measure Phase'
    },
    {
        id: 'M81',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Reproducibility variation formula uses:",
        options: {
            A: "Equipment variation",
            B: "Range of operator averages adjusted for repeatability",
            C: "Total process variation",
            D: "Customer specification"
        },
        correctAnswer: 'B',
        explanation: "Operator variation calculation",
        topic: 'Measure Phase'
    },
    {
        id: 'M82',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Total GR&R calculation:",
        options: {
            A: "Repeatability only",
            B: "Reproducibility only",
            C: "Combined repeatability and reproducibility",
            D: "Process variation"
        },
        correctAnswer: 'C',
        explanation: "Sum of both sources of measurement error",
        topic: 'Measure Phase'
    },
    {
        id: 'M83',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Part variation in GR&R:",
        options: {
            A: "Same as GR&R",
            B: "Variation between parts tested",
            C: "Not calculated",
            D: "Always zero"
        },
        correctAnswer: 'B',
        explanation: "Part-to-part differences",
        topic: 'Measure Phase'
    },
    {
        id: 'M84',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Discrimination ratio (D/d ratio):",
        options: {
            A: "Not important",
            B: "Number of distinct categories gage can measure; should be ≥5",
            C: "Defect rate",
            D: "Not used"
        },
        correctAnswer: 'B',
        explanation: "Gage resolution adequacy",
        topic: 'Measure Phase'
    },
    {
        id: 'M85',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage nesting error:",
        options: {
            A: "Random variation",
            B: "Systematic error from part seating position",
            C: "Operator error",
            D: "Environmental"
        },
        correctAnswer: 'B',
        explanation: "Consistency of part position",
        topic: 'Measure Phase'
    },
    {
        id: 'M86',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage wear over time:",
        options: {
            A: "Improves gage performance",
            B: "Degrades accuracy; requires replacement",
            C: "Not measurable",
            D: "Acceptable"
        },
        correctAnswer: 'B',
        explanation: "Maintenance necessity",
        topic: 'Measure Phase'
    },
    {
        id: 'M87',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement resolution (discrimination):",
        options: {
            A: "Can measure to fraction of tolerance",
            B: "Should be ≤10% of tolerance for good discrimination",
            C: "Not important",
            D: "Larger is better"
        },
        correctAnswer: 'B',
        explanation: "Gage capability requirement",
        topic: 'Measure Phase'
    },
    {
        id: 'M88',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Attribute GR&R (pass/fail measurement):",
        options: {
            A: "Same as variable GR&R",
            B: "Assesses repeatability and reproducibility of go/no-go decisions",
            C: "Not possible",
            D: "Always perfect"
        },
        correctAnswer: 'B',
        explanation: "Evaluates classifier consistency",
        topic: 'Measure Phase'
    },
    {
        id: 'M89',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Confusion matrix in attribute MSA:",
        options: {
            A: "Not used",
            B: "Shows rates of correct/incorrect classifications",
            C: "Statistical test only",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Misclassification analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M90',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data integrity in Measure phase:",
        options: {
            A: "Not critical",
            B: "Complete, accurate, traceable, timely, verified data essential",
            C: "Only final data matters",
            D: "Source doesn't matter"
        },
        correctAnswer: 'B',
        explanation: "Prevents downstream errors",
        topic: 'Measure Phase'
    },
    {
        id: 'M91',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Sampling plan characteristics:",
        options: {
            A: "Random only",
            B: "Random, stratified, systematic based on objective",
            C: "No plan needed",
            D: "First available"
        },
        correctAnswer: 'B',
        explanation: "Strategic sampling approach",
        topic: 'Measure Phase'
    },
    {
        id: 'M92',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Sample size adequacy check:",
        options: {
            A: "No need to verify",
            B: "Ensures enough data for valid statistical inferences",
            C: "Always 30 sufficient",
            D: "Approximate okay"
        },
        correctAnswer: 'B',
        explanation: "Statistical power requirement",
        topic: 'Measure Phase'
    },
    {
        id: 'M93',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Rational subgrouping for data collection:",
        options: {
            A: "Any grouping acceptable",
            B: "Groups capture process variation; comparisons show shifts",
            C: "Random assignment",
            D: "Doesn't matter"
        },
        correctAnswer: 'B',
        explanation: "Statistical sensitivity",
        topic: 'Measure Phase'
    },
    {
        id: 'M94',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Time sequence of data collection:",
        options: {
            A: "Irrelevant",
            B: "Important to detect time-based patterns or trends",
            C: "All same",
            D: "Arbitrary order"
        },
        correctAnswer: 'B',
        explanation: "Temporal patterns matter",
        topic: 'Measure Phase'
    },
    {
        id: 'M95',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data stratification by:",
        options: {
            A: "No stratification needed",
            B: "Time, location, operator, equipment, material sources",
            C: "Only numerically",
            D: "Alphabetically"
        },
        correctAnswer: 'B',
        explanation: "Isolate specific sources of variation",
        topic: 'Measure Phase'
    },
    {
        id: 'M96',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Control chart for measurement system:",
        options: {
            A: "Not useful",
            B: "Monitors measurement system stability over time",
            C: "Only for process",
            D: "Too early in project"
        },
        correctAnswer: 'B',
        explanation: "Ensures valid ongoing measurements",
        topic: 'Measure Phase'
    },
    {
        id: 'M97',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Baseline data significance:",
        options: {
            A: "Not important",
            B: "Establishes starting point and normal variation before improvements",
            C: "Only final matters",
            D: "Can use historical"
        },
        correctAnswer: 'B',
        explanation: "Project reference point",
        topic: 'Measure Phase'
    },
    {
        id: 'M98',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data normality assessment:",
        options: {
            A: "Always assume normal",
            B: "Test using Anderson-Darling, Shapiro-Wilk, visual methods",
            C: "Not necessary",
            D: "Force normal"
        },
        correctAnswer: 'B',
        explanation: "Prerequisite for parametric tests",
        topic: 'Measure Phase'
    },
    {
        id: 'M99',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Outlier detection:",
        options: {
            A: "Always include",
            B: "Investigate unusual values; may indicate errors or special causes",
            C: "Always delete",
            D: "Ignore"
        },
        correctAnswer: 'B',
        explanation: "Critical evaluation before analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M100',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data transformation need:",
        options: {
            A: "Never needed",
            B: "May be required for non-normal data to enable parametric tests",
            C: "Always transform",
            D: "Not effective"
        },
        correctAnswer: 'B',
        explanation: "Box-Cox or log transformation",
        topic: 'Measure Phase'
    },
    {
        id: 'M101',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Histogram for capability analysis:",
        options: {
            A: "Not useful",
            B: "Visual assessment of distribution shape and centering",
            C: "Only statistical tests needed",
            D: "Too basic"
        },
        correctAnswer: 'B',
        explanation: "Important visual tool",
        topic: 'Measure Phase'
    },
    {
        id: 'M102',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Probability plot interpretation:",
        options: {
            A: "Not needed",
            B: "Points near line = normal; deviations = non-normal",
            C: "No interpretation needed",
            D: "Always perfect line"
        },
        correctAnswer: 'B',
        explanation: "Normality assessment",
        topic: 'Measure Phase'
    },
    {
        id: 'M103',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Run chart in Measure phase:",
        options: {
            A: "Not useful",
            B: "Plots data over time to detect trends or patterns",
            C: "Only for Control phase",
            D: "Statistical only"
        },
        correctAnswer: 'B',
        explanation: "Visual trend detection",
        topic: 'Measure Phase'
    },
    {
        id: 'M104',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Scatter plot for relationships:",
        options: {
            A: "Not necessary",
            B: "Displays relationship between two variables",
            C: "Only numerical analysis",
            D: "Not interpretable"
        },
        correctAnswer: 'B',
        explanation: "Visual correlation assessment",
        topic: 'Measure Phase'
    },
    {
        id: 'M105',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Box plot advantages:",
        options: {
            A: "Only shows mean",
            B: "Shows median, quartiles, outliers, distribution shape",
            C: "Difficult to interpret",
            D: "Same as histogram"
        },
        correctAnswer: 'B',
        explanation: "Comprehensive visual summary",
        topic: 'Measure Phase'
    },
    {
        id: 'M106',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Pareto chart of problems:",
        options: {
            A: "All problems equal",
            B: "Ranks problems by frequency; focuses on vital few",
            C: "Only numerical analysis",
            D: "Not actionable"
        },
        correctAnswer: 'B',
        explanation: "Prioritization tool",
        topic: 'Measure Phase'
    },
    {
        id: 'M107',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data validation procedures:",
        options: {
            A: "Not needed",
            B: "Verify accuracy, completeness, reasonableness, consistency",
            C: "Assumed correct",
            D: "Only random check"
        },
        correctAnswer: 'B',
        explanation: "Quality assurance",
        topic: 'Measure Phase'
    },
    {
        id: 'M108',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Missing data handling:",
        options: {
            A: "Ignore",
            B: "Investigate reason; may indicate special cause",
            C: "Assume average",
            D: "Delete observation"
        },
        correctAnswer: 'B',
        explanation: "Not trivial; investigate patterns",
        topic: 'Measure Phase'
    },
    {
        id: 'M109',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data security and access:",
        options: {
            A: "Not important",
            B: "Controlled access, audit trails, backup procedures",
            C: "Public sharing",
            D: "No protocols"
        },
        correctAnswer: 'B',
        explanation: "Data integrity protection",
        topic: 'Measure Phase'
    },
    {
        id: 'M110',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Subgrouping for X-bar R chart:",
        options: {
            A: "Any grouping",
            B: "Rational groups capturing common cause only",
            C: "Random individuals",
            D: "Doesn't matter"
        },
        correctAnswer: 'B',
        explanation: "Sensitivity to special causes",
        topic: 'Measure Phase'
    },
    {
        id: 'M111',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Collection method documentation:",
        options: {
            A: "Not necessary",
            B: "Records who, when, how, where, equipment used",
            C: "Optional",
            D: "Final report only"
        },
        correctAnswer: 'B',
        explanation: "Traceability and reproducibility",
        topic: 'Measure Phase'
    },
    {
        id: 'M112',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement variation vs process variation:",
        options: {
            A: "Same thing",
            B: "Must distinguish; reduce measurement error first",
            C: "Only process matters",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Critical for valid analysis",
        topic: 'Measure Phase'
    },
    {
        id: 'M113',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage adequacy decision:",
        options: {
            A: "Any gage acceptable",
            B: "GR&R acceptable AND gage can detect meaningful changes",
            C: "Always adequate",
            D: "Change gages frequently"
        },
        correctAnswer: 'B',
        explanation: "Dual qualification",
        topic: 'Measure Phase'
    },
    {
        id: 'M114',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Alternative measurement methods:",
        options: {
            A: "Always use original",
            B: "May evaluate multiple methods for accuracy/efficiency",
            C: "Different gage always worse",
            D: "Not necessary"
        },
        correctAnswer: 'B',
        explanation: "Best practice selection",
        topic: 'Measure Phase'
    },
    {
        id: 'M115',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cost vs quality in measurement:",
        options: {
            A: "Always choose cheapest",
            B: "Balance cost against data quality needs",
            C: "Money irrelevant",
            D: "Always expensive"
        },
        correctAnswer: 'B',
        explanation: "Resource optimization",
        topic: 'Measure Phase'
    },
    {
        id: 'M116',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Real-time data collection:",
        options: {
            A: "Never possible",
            B: "Automated or immediate measurement may be available",
            C: "Always manual",
            D: "Not discussed"
        },
        correctAnswer: 'B',
        explanation: "Technology options",
        topic: 'Measure Phase'
    },
    {
        id: 'M117',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Historical data usage:",
        options: {
            A: "Always use",
            B: "Can supplement but verify quality and relevance",
            C: "Never use",
            D: "Always preferred"
        },
        correctAnswer: 'B',
        explanation: "Contextual consideration",
        topic: 'Measure Phase'
    },
    {
        id: 'M118',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Data retention policies:",
        options: {
            A: "Delete immediately",
            B: "Keep for specified period per organizational/legal requirements",
            C: "Keep forever",
            D: "Not important"
        },
        correctAnswer: 'B',
        explanation: "Compliance and reference",
        topic: 'Measure Phase'
    },
    {
        id: 'M119',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Shift patterns in data:",
        options: {
            A: "Always random",
            B: "Can indicate special causes; investigate systematically",
            C: "Not important",
            D: "Expected"
        },
        correctAnswer: 'B',
        explanation: "Root cause analysis trigger",
        topic: 'Measure Phase'
    },
    {
        id: 'M120',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Cyclical patterns in data:",
        options: {
            A: "Always normal",
            B: "May indicate time-based factors (shift, day, season)",
            C: "Ignore",
            D: "No meaning"
        },
        correctAnswer: 'B',
        explanation: "Stratification opportunity",
        topic: 'Measure Phase'
    },
    {
        id: 'M121',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Measurement robustness:",
        options: {
            A: "Same result regardless",
            B: "Procedure should work under varying conditions",
            C: "Only perfect conditions",
            D: "Fragile okay"
        },
        correctAnswer: 'B',
        explanation: "Real-world applicability",
        topic: 'Measure Phase'
    },
    {
        id: 'M122',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Gage comparison studies:",
        options: {
            A: "Not useful",
            B: "Evaluate agreement between measurement methods",
            C: "Always same",
            D: "Not statistical"
        },
        correctAnswer: 'B',
        explanation: "Method validation",
        topic: 'Measure Phase'
    },
    {
        id: 'M123',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Acceptance sampling:",
        options: {
            A: "No sampling used",
            B: "Inspecting sample to make decision on batch",
            C: "100% inspection always",
            D: "Not used in Six Sigma"
        },
        correctAnswer: 'B',
        explanation: "Statistical quality control",
        topic: 'Measure Phase'
    },
    {
        id: 'M124',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Control limits vs specification limits:",
        options: {
            A: "Same thing",
            B: "Control limits monitor process; specs define customer requirements",
            C: "Never both used",
            D: "Interchangeable"
        },
        correctAnswer: 'B',
        explanation: "Fundamentally different concepts",
        topic: 'Measure Phase'
    },
    {
        id: 'M125',
        phase: 'measure',
        module: 'Measure Phase',
        difficulty: 'medium',
        question: "Process capability prerequisites summary:",
        options: {
            A: "Any data acceptable",
            B: "Valid measurement, normal distribution, stable process, adequate sample",
            C: "No prerequisites",
            D: "Only one matters"
        },
        correctAnswer: 'B',
        explanation: "Multiple requirements for validity",
        topic: 'Measure Phase'
    }
];
