import { QuizQuestion } from '@/types/quiz.types';

export const analyzePhaseQuizzes: QuizQuestion[] = [
    {
        id: 'A1',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "P-value represents:",
        options: {
            A: "Probability hypothesis is true",
            B: "Probability of observing data IF H₀ true",
            C: "Error rate",
            D: "Sample size needed"
        },
        correctAnswer: 'B',
        explanation: "Most misunderstood concept",
        topic: 'Analyze Phase'
    },
    {
        id: 'A2',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "If p-value = 0.02, α = 0.05:",
        options: {
            A: "Accept H₀",
            B: "Inconclusive",
            C: "Reject H₀",
            D: "Need more data"
        },
        correctAnswer: 'C',
        explanation: "p < α = significant",
        topic: 'Analyze Phase'
    },
    {
        id: 'A3',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "P-value = 0.15 at α = 0.05:",
        options: {
            A: "Reject H₀",
            B: "Strong evidence for H₀",
            C: "Fail to reject H₀",
            D: "Test failed"
        },
        correctAnswer: 'C',
        explanation: "p > α = insufficient evidence",
        topic: 'Analyze Phase'
    },
    {
        id: 'A4',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Type I error (false positive):",
        options: {
            A: "Accepting false H₀",
            B: "Rejecting true H₀",
            C: "Sample too small",
            D: "Data normal"
        },
        correctAnswer: 'B',
        explanation: "α = Type I error",
        topic: 'Analyze Phase'
    },
    {
        id: 'A5',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Type II error (false negative):",
        options: {
            A: "Rejecting true H₀",
            B: "Accepting false H₀",
            C: "Rejecting false H₀",
            D: "Sample adequate"
        },
        correctAnswer: 'B',
        explanation: "β = Type II error",
        topic: 'Analyze Phase'
    },
    {
        id: 'A6',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Power = 1 - β means:",
        options: {
            A: "Ability to detect true effect",
            B: "Sample size",
            C: "P-value",
            D: "Confidence level"
        },
        correctAnswer: 'A',
        explanation: "Probability of correct rejection",
        topic: 'Analyze Phase'
    },
    {
        id: 'A7',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Increasing sample size:",
        options: {
            A: "Reduces power",
            B: "Has no effect",
            C: "Increases power",
            D: "Changes H₀"
        },
        correctAnswer: 'C',
        explanation: "Larger n = better detection",
        topic: 'Analyze Phase'
    },
    {
        id: 'A8',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "One-tailed vs two-tailed test:",
        options: {
            A: "Same result",
            B: "One directional; two non-directional",
            C: "Different populations",
            D: "One always better"
        },
        correctAnswer: 'B',
        explanation: "Directionality determines type",
        topic: 'Analyze Phase'
    },
    {
        id: 'A9',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Two-tailed test example:",
        options: {
            A: "μ > 100",
            B: "μ < 100",
            C: "μ ≠ 100",
            D: "μ ≥ 100"
        },
        correctAnswer: 'C',
        explanation: "Difference in either direction",
        topic: 'Analyze Phase'
    },
    {
        id: 'A10',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "One-tailed test example:",
        options: {
            A: "μ ≠ 100",
            B: "μ > target or μ < target",
            C: "Always non-directional",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Specific direction predicted",
        topic: 'Analyze Phase'
    },
    {
        id: 'A11',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Two-tailed p-value conversion:",
        options: {
            A: "Same as one-tailed",
            B: "One-tailed × 2 only sometimes",
            C: "Report as-is; don't modify",
            D: "Always divide by 2"
        },
        correctAnswer: 'C',
        explanation: "Two-tailed already accounts for both",
        topic: 'Analyze Phase'
    },
    {
        id: 'A12',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Significance level α = 0.05:",
        options: {
            A: "5% chance H₀ true",
            B: "5% chance rejecting true H₀",
            C: "5% chance Type II error",
            D: "95% sample variation"
        },
        correctAnswer: 'B',
        explanation: "Standard risk accepted",
        topic: 'Analyze Phase'
    },
    {
        id: 'A13',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Practical vs statistical significance:",
        options: {
            A: "Same thing",
            B: "Statistically significant may not be practically meaningful",
            C: "Opposite concepts",
            D: "Only matters for Black Belt"
        },
        correctAnswer: 'B',
        explanation: "Both matter for decisions",
        topic: 'Analyze Phase'
    },
    {
        id: 'A14',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "When sample size very large:",
        options: {
            A: "Always reject H₀",
            B: "Tiny effects become significant",
            C: "No statistical testing needed",
            D: "Power decreases"
        },
        correctAnswer: 'B',
        explanation: "Check practical significance",
        topic: 'Analyze Phase'
    },
    {
        id: 'A15',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Confidence interval 95% means:",
        options: {
            A: "95% probability true value in interval",
            B: "If repeated many times, 95% of intervals contain true value",
            C: "95% certainty in sample",
            D: "Only 5% error possible"
        },
        correctAnswer: 'B',
        explanation: "Correct CI interpretation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A16',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Narrower confidence interval indicates:",
        options: {
            A: "Less precision",
            B: "More precision",
            C: "Larger sample",
            D: "More error"
        },
        correctAnswer: 'B',
        explanation: "Tighter bounds = better estimate",
        topic: 'Analyze Phase'
    },
    {
        id: 'A17',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Effect size importance:",
        options: {
            A: "Not important",
            B: "Shows practical magnitude of difference",
            C: "Same as p-value",
            D: "Never reported"
        },
        correctAnswer: 'B',
        explanation: "Supplements p-value",
        topic: 'Analyze Phase'
    },
    {
        id: 'A18',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Null hypothesis always:",
        options: {
            A: "True",
            B: "False",
            C: "Represents \"no difference\"",
            D: "Never tested"
        },
        correctAnswer: 'C',
        explanation: "Burden to prove alternative",
        topic: 'Analyze Phase'
    },
    {
        id: 'A19',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Multiple testing problem:",
        options: {
            A: "Doesn't exist",
            B: "More tests = more Type I error risk",
            C: "Helps accuracy",
            D: "Requires special software"
        },
        correctAnswer: 'B',
        explanation: "Each test adds α risk",
        topic: 'Analyze Phase'
    },
    {
        id: 'A20',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Multiple comparison correction (Bonferroni):",
        options: {
            A: "Not needed",
            B: "Reduces α for each test",
            C: "Increases power",
            D: "Obsolete"
        },
        correctAnswer: 'B',
        explanation: "Maintains overall α level",
        topic: 'Analyze Phase'
    },
    {
        id: 'A21',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "When to reject H₀:",
        options: {
            A: "When p > α",
            B: "When p < α",
            C: "When power > 0.80",
            D: "When n > 30"
        },
        correctAnswer: 'B',
        explanation: "Decision rule",
        topic: 'Analyze Phase'
    },
    {
        id: 'A22',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Alternative hypothesis represents:",
        options: {
            A: "What we assume true",
            B: "What we're trying to prove",
            C: "Process specification",
            D: "Customer requirement"
        },
        correctAnswer: 'B',
        explanation: "Research hypothesis",
        topic: 'Analyze Phase'
    },
    {
        id: 'A23',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Assuming normality without testing:",
        options: {
            A: "Always fine",
            B: "Can invalidate results",
            C: "Doesn't matter",
            D: "For large samples only"
        },
        correctAnswer: 'B',
        explanation: "Critical assumption",
        topic: 'Analyze Phase'
    },
    {
        id: 'A24',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Test for normality:",
        options: {
            A: "Anderson-Darling or Shapiro-Wilk",
            B: "Always use Cpk",
            C: "Visual inspection only",
            D: "Never test"
        },
        correctAnswer: 'A',
        explanation: "Formal tests before parametric",
        topic: 'Analyze Phase'
    },
    {
        id: 'A25',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "If non-normal data detected:",
        options: {
            A: "Force normal anyway",
            B: "Use non-parametric alternative",
            C: "Ignore non-normality",
            D: "Always transform"
        },
        correctAnswer: 'B',
        explanation: "Protects validity",
        topic: 'Analyze Phase'
    },
    {
        id: 'A26',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "One-sample t-test compares:",
        options: {
            A: "Two groups",
            B: "Sample mean to target/population",
            C: "Multiple groups",
            D: "Proportions only"
        },
        correctAnswer: 'B',
        explanation: "Single group test",
        topic: 'Analyze Phase'
    },
    {
        id: 'A27',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Paired t-test requires:",
        options: {
            A: "Independent groups",
            B: "Same subjects measured twice",
            C: "Different samples",
            D: "Proportions"
        },
        correctAnswer: 'B',
        explanation: "Before/after on same units",
        topic: 'Analyze Phase'
    },
    {
        id: 'A28',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Assumptions for t-test:",
        options: {
            A: "Any distribution",
            B: "Normality, independence, similar variance",
            C: "Only sample size matters",
            D: "No assumptions"
        },
        correctAnswer: 'B',
        explanation: "All critical",
        topic: 'Analyze Phase'
    },
    {
        id: 'A29',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Welch's t-test when:",
        options: {
            A: "Variances equal",
            B: "Sample sizes equal",
            C: "Variances unequal",
            D: "Always use standard"
        },
        correctAnswer: 'C',
        explanation: "Modification for heterogeneity",
        topic: 'Analyze Phase'
    },
    {
        id: 'A30',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Equal variance test (Levene):",
        options: {
            A: "Always required",
            B: "Tests if variance assumption met",
            C: "Not useful",
            D: "Only for ANOVA"
        },
        correctAnswer: 'B',
        explanation: "Preliminary to t-test",
        topic: 'Analyze Phase'
    },
    {
        id: 'A31',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "ANOVA tests:",
        options: {
            A: "Individual means",
            B: "If 3+ group means differ",
            C: "Variance only",
            D: "One group"
        },
        correctAnswer: 'B',
        explanation: "Compares multiple groups",
        topic: 'Analyze Phase'
    },
    {
        id: 'A32',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "F-statistic in ANOVA:",
        options: {
            A: "Between-group / within-group variation",
            B: "Always 1.0",
            C: "Variance measure only",
            D: "Unnecessary to report"
        },
        correctAnswer: 'A',
        explanation: "Ratio determines significance",
        topic: 'Analyze Phase'
    },
    {
        id: 'A33',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "If ANOVA F-statistic = 0.5:",
        options: {
            A: "Highly significant",
            B: "No significant difference",
            C: "Perfect result",
            D: "Need to transform"
        },
        correctAnswer: 'B',
        explanation: "F < 1 suggests no effect",
        topic: 'Analyze Phase'
    },
    {
        id: 'A34',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "ANOVA p < 0.05 means:",
        options: {
            A: "All groups different",
            B: "At least one group mean differs",
            C: "Groups identical",
            D: "Test failed"
        },
        correctAnswer: 'B',
        explanation: "Only identifies if difference",
        topic: 'Analyze Phase'
    },
    {
        id: 'A35',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Post-hoc test (Tukey) when:",
        options: {
            A: "Before ANOVA",
            B: "ANOVA p > 0.05",
            C: "ANOVA p < 0.05 to identify which differ",
            D: "Never used"
        },
        correctAnswer: 'C',
        explanation: "Specify which pairs differ",
        topic: 'Analyze Phase'
    },
    {
        id: 'A36',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "ANOVA assumptions include:",
        options: {
            A: "Any distribution",
            B: "Normality, independence, equal variance",
            C: "Large sample always",
            D: "No assumptions"
        },
        correctAnswer: 'B',
        explanation: "All critical",
        topic: 'Analyze Phase'
    },
    {
        id: 'A37',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Kruskal-Wallis test:",
        options: {
            A: "Parametric ANOVA",
            B: "Non-parametric alternative when assumptions fail",
            C: "Same as ANOVA",
            D: "Less powerful"
        },
        correctAnswer: 'B',
        explanation: "Ranks-based approach",
        topic: 'Analyze Phase'
    },
    {
        id: 'A38',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Sample size per group minimum:",
        options: {
            A: "1",
            B: "5",
            C: "10+ per group",
            D: "30 each"
        },
        correctAnswer: 'C',
        explanation: "Adequate variation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A39',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Effect size in ANOVA:",
        options: {
            A: "Not reported",
            B: "Eta-squared indicates % variance explained",
            C: "Same as p-value",
            D: "Not interpretable"
        },
        correctAnswer: 'B',
        explanation: "Practical significance measure",
        topic: 'Analyze Phase'
    },
    {
        id: 'A40',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Two-way ANOVA tests:",
        options: {
            A: "One factor",
            B: "Two factors AND their interaction",
            C: "Multiple factors",
            D: "Groups only"
        },
        correctAnswer: 'B',
        explanation: "Main effects + interaction",
        topic: 'Analyze Phase'
    },
    {
        id: 'A41',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Interaction effect means:",
        options: {
            A: "Independent effects only",
            B: "One factor's effect depends on another",
            C: "No relationship",
            D: "Always significant"
        },
        correctAnswer: 'B',
        explanation: "Combined effect differs",
        topic: 'Analyze Phase'
    },
    {
        id: 'A42',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Repeated measures ANOVA:",
        options: {
            A: "Same as regular",
            B: "Same subjects measured multiple times",
            C: "Different subjects each time",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Within-subject correlation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A43',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "When sample size very unequal:",
        options: {
            A: "ANOVA doesn't apply",
            B: "Use Welch ANOVA",
            C: "Ignore inequality",
            D: "Balance artificially"
        },
        correctAnswer: 'B',
        explanation: "Accounts for heterogeneity",
        topic: 'Analyze Phase'
    },
    {
        id: 'A44',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Bonferroni correction for 3 comparisons:",
        options: {
            A: "α = 0.05",
            B: "α = 0.05/3 ≈ 0.017",
            C: "No adjustment",
            D: "Add 0.05 three times"
        },
        correctAnswer: 'B',
        explanation: "Reduces per-test α",
        topic: 'Analyze Phase'
    },
    {
        id: 'A45',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Fisher LSD vs Tukey:",
        options: {
            A: "Same test",
            B: "Fisher less conservative; Tukey more",
            C: "Tukey better for 3 groups",
            D: "Fisher for ANOVA"
        },
        correctAnswer: 'B',
        explanation: "Trade-off power vs error",
        topic: 'Analyze Phase'
    },
    {
        id: 'A46',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "ANOVA power depends on:",
        options: {
            A: "Sample size only",
            B: "Effect size, sample size, significance level",
            C: "Number of groups only",
            D: "Duration only"
        },
        correctAnswer: 'B',
        explanation: "Multiple factors",
        topic: 'Analyze Phase'
    },
    {
        id: 'A47',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Degrees of freedom in ANOVA:",
        options: {
            A: "Not important",
            B: "Determine critical value for F-statistic",
            C: "Always same",
            D: "Never reported"
        },
        correctAnswer: 'B',
        explanation: "df = groups-1 and n-groups",
        topic: 'Analyze Phase'
    },
    {
        id: 'A48',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Sum of Squares partitioned into:",
        options: {
            A: "One component",
            B: "Between and within groups",
            C: "Random and systematic",
            D: "Measurable and error"
        },
        correctAnswer: 'B',
        explanation: "ANOVA decomposition",
        topic: 'Analyze Phase'
    },
    {
        id: 'A49',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Mean Square =:",
        options: {
            A: "Sum of Squares only",
            B: "Sum of Squares / degrees of freedom",
            C: "Variance only",
            D: "Standard deviation"
        },
        correctAnswer: 'B',
        explanation: "Average variance estimate",
        topic: 'Analyze Phase'
    },
    {
        id: 'A50',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "ANOVA table interpretation:",
        options: {
            A: "F-statistic and p-value only",
            B: "F, p-value, MS, SS, and df together",
            C: "Ignore most columns",
            D: "Only SS matters"
        },
        correctAnswer: 'B',
        explanation: "Complete interpretation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A51',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Non-parametric equivalent to paired t-test:",
        options: {
            A: "Wilcoxon Signed-Rank",
            B: "Mann-Whitney",
            C: "Kruskal-Wallis",
            D: "Chi-squared"
        },
        correctAnswer: 'A',
        explanation: "For paired non-normal",
        topic: 'Analyze Phase'
    },
    {
        id: 'A52',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Mann-Whitney U test:",
        options: {
            A: "Parametric",
            B: "Non-parametric for 2 independent groups",
            C: "For 3+ groups",
            D: "Only paired"
        },
        correctAnswer: 'B',
        explanation: "Alternative to independent t-test",
        topic: 'Analyze Phase'
    },
    {
        id: 'A53',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Chi-squared test for:",
        options: {
            A: "Continuous means",
            B: "Categorical frequencies",
            C: "Proportions only",
            D: "Variances"
        },
        correctAnswer: 'B',
        explanation: "Goodness of fit or independence",
        topic: 'Analyze Phase'
    },
    {
        id: 'A54',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Contingency table example:",
        options: {
            A: "All continuous",
            B: "Two categorical variables cross-tabulated",
            C: "Sample means",
            D: "Standard deviations"
        },
        correctAnswer: 'B',
        explanation: "Rows × columns categorized",
        topic: 'Analyze Phase'
    },
    {
        id: 'A55',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Chi-squared requirements:",
        options: {
            A: "No assumptions",
            B: "Expected frequency ≥ 5 per cell",
            C: "Sample size < 10",
            D: "Always applicable"
        },
        correctAnswer: 'B',
        explanation: "Ensures adequate power",
        topic: 'Analyze Phase'
    },
    {
        id: 'A56',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Expected frequency calculation:",
        options: {
            A: "Observed count",
            B: "(Row total × Column total) / Overall total",
            C: "Total divided by cells",
            D: "Random guess"
        },
        correctAnswer: 'B',
        explanation: "Formula for null model",
        topic: 'Analyze Phase'
    },
    {
        id: 'A57',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "McNemar's test:",
        options: {
            A: "Continuous",
            B: "Paired categorical (2×2 table)",
            C: "Three groups",
            D: "Proportions only"
        },
        correctAnswer: 'B',
        explanation: "Matched pairs",
        topic: 'Analyze Phase'
    },
    {
        id: 'A58',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Goodness of fit test:",
        options: {
            A: "Compares two groups",
            B: "Tests if data match expected distribution",
            C: "Assesses quality only",
            D: "Not statistical"
        },
        correctAnswer: 'B',
        explanation: "Observed vs expected",
        topic: 'Analyze Phase'
    },
    {
        id: 'A59',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Degrees of freedom in Chi-squared:",
        options: {
            A: "n - 1",
            B: "(rows - 1) × (columns - 1)",
            C: "Categories - 1",
            D: "Always same"
        },
        correctAnswer: 'B',
        explanation: "Contingency table formula",
        topic: 'Analyze Phase'
    },
    {
        id: 'A60',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Standardized residuals:",
        options: {
            A: "Always ignored",
            B: "Show which cells contribute most to Chi-squared",
            C: "Same as observed",
            D: "Never calculated"
        },
        correctAnswer: 'B',
        explanation: "Identifies significant cells",
        topic: 'Analyze Phase'
    },
    {
        id: 'A61',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Correlation vs causation:",
        options: {
            A: "Same thing",
            B: "Correlation ≠ causation; critical distinction",
            C: "Correlation always causes",
            D: "Never test causation"
        },
        correctAnswer: 'B',
        explanation: "Most common misinterpretation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A62',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "r = 0.95 indicates:",
        options: {
            A: "Weak relationship",
            B: "Very strong positive relationship",
            C: "Causation exists",
            D: "Perfect fit"
        },
        correctAnswer: 'B',
        explanation: "High correlation but not perfect",
        topic: 'Analyze Phase'
    },
    {
        id: 'A63',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "r² = 0.80 means:",
        options: {
            A: "80% error",
            B: "80% of Y variation explained by X",
            C: "Strong causation",
            D: "Perfect model"
        },
        correctAnswer: 'B',
        explanation: "Coefficient of determination",
        topic: 'Analyze Phase'
    },
    {
        id: 'A64',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Regression line equation:",
        options: {
            A: "Y = X",
            B: "Y = a + bX",
            C: "Y = 1/X",
            D: "Y = constant"
        },
        correctAnswer: 'B',
        explanation: "Slope-intercept form",
        topic: 'Analyze Phase'
    },
    {
        id: 'A65',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Slope interpretation in regression:",
        options: {
            A: "Y-value when X=0",
            B: "Change in Y per unit change in X",
            C: "Correlation coefficient",
            D: "P-value"
        },
        correctAnswer: 'B',
        explanation: "Rate of change",
        topic: 'Analyze Phase'
    },
    {
        id: 'A66',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Intercept interpretation:",
        options: {
            A: "Slope value",
            B: "Y-value when X = 0",
            C: "Correlation",
            D: "Statistical test"
        },
        correctAnswer: 'B',
        explanation: "Y-axis crossing point",
        topic: 'Analyze Phase'
    },
    {
        id: 'A67',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "R² of 0.50:",
        options: {
            A: "Poor model always",
            B: "50% explained; context-dependent",
            C: "Weak correlation",
            D: "Unacceptable always"
        },
        correctAnswer: 'B',
        explanation: "Field-dependent interpretation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A68',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Residuals should:",
        options: {
            A: "Show pattern",
            B: "Be normally distributed around 0",
            C: "Have trend",
            D: "Never analyzed"
        },
        correctAnswer: 'B',
        explanation: "Check violations",
        topic: 'Analyze Phase'
    },
    {
        id: 'A69',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Heteroscedasticity means:",
        options: {
            A: "Equal variance",
            B: "Unequal variance; violates assumption",
            C: "Normal distribution",
            D: "Linear relationship"
        },
        correctAnswer: 'B',
        explanation: "Problematic for regression",
        topic: 'Analyze Phase'
    },
    {
        id: 'A70',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Box-Cox transformation:",
        options: {
            A: "Always needed",
            B: "Addresses non-normality of residuals",
            C: "Automatic in software",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Normalizes skewed",
        topic: 'Analyze Phase'
    },
    {
        id: 'A71',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Multicollinearity in multiple regression:",
        options: {
            A: "Multiple variables required",
            B: "Predictor variables correlated with each other",
            C: "Many observations",
            D: "Better model"
        },
        correctAnswer: 'B',
        explanation: "Problem: inflates uncertainty",
        topic: 'Analyze Phase'
    },
    {
        id: 'A72',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "VIF > 5 indicates:",
        options: {
            A: "Good model",
            B: "Multicollinearity problem",
            C: "Adequate power",
            D: "No concern"
        },
        correctAnswer: 'B',
        explanation: "Remove or combine variables",
        topic: 'Analyze Phase'
    },
    {
        id: 'A73',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Adjusted R²:",
        options: {
            A: "Same as R²",
            B: "Accounts for number of variables",
            C: "Always lower than R²",
            D: "Not used in practice"
        },
        correctAnswer: 'B',
        explanation: "Penalizes adding variables",
        topic: 'Analyze Phase'
    },
    {
        id: 'A74',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Interaction term in regression:",
        options: {
            A: "Not needed",
            B: "Represents combined effect of variables",
            C: "Same as main effect",
            D: "Always negative"
        },
        correctAnswer: 'B',
        explanation: "X₁ × X₂ interaction",
        topic: 'Analyze Phase'
    },
    {
        id: 'A75',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Outlier detection methods:",
        options: {
            A: "Visual inspection only",
            B: "Standardized residuals, leverage, influence",
            C: "Never check",
            D: "Delete all unusual"
        },
        correctAnswer: 'B',
        explanation: "Multiple approaches",
        topic: 'Analyze Phase'
    },
    {
        id: 'A76',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Prediction interval vs confidence interval:",
        options: {
            A: "Same thing",
            B: "Prediction wider; accounts for model error",
            C: "Confidence wider",
            D: "No difference"
        },
        correctAnswer: 'B',
        explanation: "Prediction for individuals",
        topic: 'Analyze Phase'
    },
    {
        id: 'A77',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Logistic regression:",
        options: {
            A: "For continuous Y",
            B: "For binary Y (0/1, yes/no)",
            C: "Linear only",
            D: "Not common"
        },
        correctAnswer: 'B',
        explanation: "Non-linear for proportions",
        topic: 'Analyze Phase'
    },
    {
        id: 'A78',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Polynomial regression:",
        options: {
            A: "Straight line only",
            B: "Curves to capture non-linear relationships",
            C: "Always better",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Y = a + bX + cX² ...",
        topic: 'Analyze Phase'
    },
    {
        id: 'A79',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Model validation:",
        options: {
            A: "Test on training data only",
            B: "Use separate data or cross-validation",
            C: "Not necessary",
            D: "Visual check sufficient"
        },
        correctAnswer: 'B',
        explanation: "Avoid overfitting",
        topic: 'Analyze Phase'
    },
    {
        id: 'A80',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Causation determination in Six Sigma:",
        options: {
            A: "Through correlation alone",
            B: "Correlation + DOE + theory",
            C: "Correlation sufficient",
            D: "Never possible"
        },
        correctAnswer: 'B',
        explanation: "Multiple evidence required",
        topic: 'Analyze Phase'
    },
    {
        id: 'A81',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Confidence interval for mean:",
        options: {
            A: "Exact value always",
            B: "Range with specified probability of containing true mean",
            C: "Sample mean ± standard error",
            D: "Always symmetric"
        },
        correctAnswer: 'B',
        explanation: "Correct interpretation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A82',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Standard error decreases with:",
        options: {
            A: "Smaller sample size",
            B: "Larger sample size",
            C: "More variation",
            D: "No relationship"
        },
        correctAnswer: 'B',
        explanation: "1/√n relationship",
        topic: 'Analyze Phase'
    },
    {
        id: 'A83',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Hypothesis test power calculation:",
        options: {
            A: "Not necessary",
            B: "Determines sample size needed for desired power",
            C: "Only done after test",
            D: "Same as p-value"
        },
        correctAnswer: 'B',
        explanation: "Prospective planning",
        topic: 'Analyze Phase'
    },
    {
        id: 'A84',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Practical significance vs statistical:",
        options: {
            A: "Same thing always",
            B: "Results statistically significant but practically negligible",
            C: "Opposite meanings",
            D: "Only one matters"
        },
        correctAnswer: 'B',
        explanation: "Both essential for decisions",
        topic: 'Analyze Phase'
    },
    {
        id: 'A85',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Effect size calculation methods:",
        options: {
            A: "Only one way",
            B: "Cohen's d, r, eta various measures",
            C: "P-value directly",
            D: "Not calculated"
        },
        correctAnswer: 'B',
        explanation: "Context-dependent selection",
        topic: 'Analyze Phase'
    },
    {
        id: 'A86',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Normal distribution mean and standard deviation:",
        options: {
            A: "Any values work",
            B: "Mean defines center, σ defines spread",
            C: "Always zero and one",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Distribution parameters",
        topic: 'Analyze Phase'
    },
    {
        id: 'A87',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Confidence level vs significance level:",
        options: {
            A: "Same thing",
            B: "CL = 1 - α (complementary)",
            C: "Opposite meanings",
            D: "No relationship"
        },
        correctAnswer: 'B',
        explanation: "Inverse relationship",
        topic: 'Analyze Phase'
    },
    {
        id: 'A88',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Hypothesis test type selection:",
        options: {
            A: "All tests equivalent",
            B: "Depends on data type, sample size, question",
            C: "Always use ANOVA",
            D: "Never matters"
        },
        correctAnswer: 'B',
        explanation: "Critical decision",
        topic: 'Analyze Phase'
    },
    {
        id: 'A89',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Sample size for proportion test:",
        options: {
            A: "No special considerations",
            B: "Requires expected proportion and power calculations",
            C: "Always 30",
            D: "Larger than continuous"
        },
        correctAnswer: 'B',
        explanation: "Specific formula",
        topic: 'Analyze Phase'
    },
    {
        id: 'A90',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Type I error risk control:",
        options: {
            A: "Not controllable",
            B: "Set significance level α",
            C: "Always zero possible",
            D: "Increases with n"
        },
        correctAnswer: 'B',
        explanation: "Direct alpha management",
        topic: 'Analyze Phase'
    },
    {
        id: 'A91',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Type II error risk:",
        options: {
            A: "Not controllable",
            B: "Reduced by larger sample size",
            C: "Controlled by α only",
            D: "Always zero"
        },
        correctAnswer: 'B',
        explanation: "Power = 1 - β",
        topic: 'Analyze Phase'
    },
    {
        id: 'A92',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Assumption checking importance:",
        options: {
            A: "Optional nice-to-have",
            B: "Critical for test validity",
            C: "Only in academic research",
            D: "Not relevant in practice"
        },
        correctAnswer: 'B',
        explanation: "Determines method choice",
        topic: 'Analyze Phase'
    },
    {
        id: 'A93',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Transforming skewed data:",
        options: {
            A: "Never needed",
            B: "Log, square root, or Box-Cox to normalize",
            C: "Always works",
            D: "Changes interpretation"
        },
        correctAnswer: 'B',
        explanation: "Common in practice",
        topic: 'Analyze Phase'
    },
    {
        id: 'A94',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Testing homogeneity of variance:",
        options: {
            A: "Not important",
            B: "Assesses equal variance assumption for tests",
            C: "Always satisfied",
            D: "Only for large samples"
        },
        correctAnswer: 'B',
        explanation: "Preliminary test",
        topic: 'Analyze Phase'
    },
    {
        id: 'A95',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Independence of observations:",
        options: {
            A: "Always guaranteed",
            B: "Must be verified; affects test validity",
            C: "Doesn't matter",
            D: "Automatically ensured"
        },
        correctAnswer: 'B',
        explanation: "Critical assumption",
        topic: 'Analyze Phase'
    },
    {
        id: 'A96',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Stratified sampling advantage:",
        options: {
            A: "No advantage",
            B: "Ensures representation of subgroups",
            C: "Always better than random",
            D: "Not used"
        },
        correctAnswer: 'B',
        explanation: "Comparison strategy",
        topic: 'Analyze Phase'
    },
    {
        id: 'A97',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Cluster sampling use:",
        options: {
            A: "Never used",
            B: "Groups data geographically or logically",
            C: "Always preferable",
            D: "Only for small populations"
        },
        correctAnswer: 'B',
        explanation: "Practical sampling method",
        topic: 'Analyze Phase'
    },
    {
        id: 'A98',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Bias in estimation:",
        options: {
            A: "Always present",
            B: "Should be minimized for unbiased estimators",
            C: "Not measurable",
            D: "Acceptable always"
        },
        correctAnswer: 'B',
        explanation: "Estimation quality",
        topic: 'Analyze Phase'
    },
    {
        id: 'A99',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Variance vs bias trade-off:",
        options: {
            A: "No trade-off",
            B: "Low bias may require higher variance",
            C: "Always zero both",
            D: "Not relevant"
        },
        correctAnswer: 'B',
        explanation: "Estimator design consideration",
        topic: 'Analyze Phase'
    },
    {
        id: 'A100',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Bootstrap method:",
        options: {
            A: "Not used",
            B: "Resampling with replacement to estimate distribution",
            C: "Only theoretical",
            D: "Requires huge samples"
        },
        correctAnswer: 'B',
        explanation: "Modern resampling approach",
        topic: 'Analyze Phase'
    },
    {
        id: 'A101',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Bayesian vs frequentist approaches:",
        options: {
            A: "Same thing",
            B: "Bayesian uses prior; frequentist doesn't",
            C: "Both identical results",
            D: "Bayesian not used"
        },
        correctAnswer: 'B',
        explanation: "Philosophical difference",
        topic: 'Analyze Phase'
    },
    {
        id: 'A102',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Prior distribution in Bayes:",
        options: {
            A: "Not important",
            B: "Existing knowledge before collecting data",
            C: "Same as likelihood",
            D: "Never specified"
        },
        correctAnswer: 'B',
        explanation: "Incorporates prior knowledge",
        topic: 'Analyze Phase'
    },
    {
        id: 'A103',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "P-value misinterpretation:",
        options: {
            A: "Probability H₀ is true",
            B: "Probability of H₀ being true is p-value  (common wrong interpretation)",
            C: "Probability H₀ correct given data",
            D: "Not misinterpreted"
        },
        correctAnswer: 'B',
        explanation: "Critical to avoid",
        topic: 'Analyze Phase'
    },
    {
        id: 'A104',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Multiple hypothesis testing correction:",
        options: {
            A: "Not necessary",
            B: "Bonferroni, FDR, others to control error",
            C: "Never used",
            D: "Increases true positive rate"
        },
        correctAnswer: 'B',
        explanation: "Controls familywise error",
        topic: 'Analyze Phase'
    },
    {
        id: 'A105',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Sequential testing:",
        options: {
            A: "Not possible",
            B: "Testing at interim and final time points",
            C: "Only theoretical",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Adaptive trial design",
        topic: 'Analyze Phase'
    },
    {
        id: 'A106',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Equivalence testing:",
        options: {
            A: "Never needed",
            B: "Demonstrating non-inferiority or equivalence",
            C: "Same as equality test",
            D: "Not statistical"
        },
        correctAnswer: 'B',
        explanation: "Different from traditional testing",
        topic: 'Analyze Phase'
    },
    {
        id: 'A107',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Power analysis timing:",
        options: {
            A: "Only after study",
            B: "Before study to determine sample size",
            C: "Never done",
            D: "Same as significance testing"
        },
        correctAnswer: 'B',
        explanation: "Prospective planning",
        topic: 'Analyze Phase'
    },
    {
        id: 'A108',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Effect size interpretation:",
        options: {
            A: "Arbitrary values",
            B: "Small (0.2), medium (0.5), large (0.8) for Cohen's d",
            C: "Same as p-value",
            D: "Always report but not interpret"
        },
        correctAnswer: 'B',
        explanation: "Practical magnitude",
        topic: 'Analyze Phase'
    },
    {
        id: 'A109',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Reproducibility of statistical results:",
        options: {
            A: "Guaranteed always",
            B: "Depends on randomness; report confidence intervals",
            C: "Not important",
            D: "Same result every time"
        },
        correctAnswer: 'B',
        explanation: "Variability management",
        topic: 'Analyze Phase'
    },
    {
        id: 'A110',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Statistical vs practical significance example:",
        options: {
            A: "Always same",
            B: "Large sample shows tiny 0.1% improvement significant",
            C: "Never different",
            D: "No examples exist"
        },
        correctAnswer: 'B',
        explanation: "Common in big data",
        topic: 'Analyze Phase'
    },
    {
        id: 'A111',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Confounding variable:",
        options: {
            A: "Not relevant",
            B: "Third variable affecting relationship being studied",
            C: "Same as interaction",
            D: "Always controlled"
        },
        correctAnswer: 'B',
        explanation: "Must be managed",
        topic: 'Analyze Phase'
    },
    {
        id: 'A112',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Randomization purpose:",
        options: {
            A: "No purpose",
            B: "Distributes confounders equally across groups",
            C: "Ensures normality",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Experimental control",
        topic: 'Analyze Phase'
    },
    {
        id: 'A113',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Blocking in designed experiment:",
        options: {
            A: "Not used",
            B: "Groups similar units to reduce error",
            C: "Random assignment always",
            D: "Never beneficial"
        },
        correctAnswer: 'B',
        explanation: "Variance reduction",
        topic: 'Analyze Phase'
    },
    {
        id: 'A114',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Factorial experiment benefits:",
        options: {
            A: "No benefits",
            B: "Tests multiple factors simultaneously and interactions",
            C: "Less efficient than one-factor-at-a-time",
            D: "Only for screening"
        },
        correctAnswer: 'B',
        explanation: "Efficiency and interactions",
        topic: 'Analyze Phase'
    },
    {
        id: 'A115',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Response surface methodology:",
        options: {
            A: "Not advanced",
            B: "Optimizes response by mapping factor relationships",
            C: "Only for simple linear",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Optimization tool",
        topic: 'Analyze Phase'
    },
    {
        id: 'A116',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Partial least squares:",
        options: {
            A: "Not useful",
            B: "Handles correlated predictors in regression",
            C: "Same as standard regression",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Multicollinearity solution",
        topic: 'Analyze Phase'
    },
    {
        id: 'A117',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Tree-based methods:",
        options: {
            A: "Only for forests",
            B: "Classification/regression trees for non-linear relationships",
            C: "Never used in Six Sigma",
            D: "Only theoretical"
        },
        correctAnswer: 'B',
        explanation: "Machine learning approach",
        topic: 'Analyze Phase'
    },
    {
        id: 'A118',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Cluster analysis:",
        options: {
            A: "Not statistical",
            B: "Groups observations by similarity",
            C: "Same as classification",
            D: "No business use"
        },
        correctAnswer: 'B',
        explanation: "Unsupervised learning",
        topic: 'Analyze Phase'
    },
    {
        id: 'A119',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Principal component analysis:",
        options: {
            A: "Not statistical",
            B: "Reduces dimensions while retaining variance",
            C: "Same as correlation",
            D: "Never used"
        },
        correctAnswer: 'B',
        explanation: "Dimensionality reduction",
        topic: 'Analyze Phase'
    },
    {
        id: 'A120',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Survival analysis:",
        options: {
            A: "Not relevant",
            B: "Analyzes time until event occurrence",
            C: "Only medical research",
            D: "Not statistical"
        },
        correctAnswer: 'B',
        explanation: "Time-to-event analysis",
        topic: 'Analyze Phase'
    },
    {
        id: 'A121',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Control chart limits vs confidence interval:",
        options: {
            A: "Same thing",
            B: "Control limits narrow; detect faster shifts",
            C: "Never both used",
            D: "Interchangeable"
        },
        correctAnswer: 'B',
        explanation: "Different purposes",
        topic: 'Analyze Phase'
    },
    {
        id: 'A122',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Statistical testing assumptions checklist:",
        options: {
            A: "Not necessary",
            B: "Verify normality, independence, equal variance",
            C: "Assume satisfied always",
            D: "Only one matters"
        },
        correctAnswer: 'B',
        explanation: "Prerequisite validation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A123',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Q-Q plot interpretation:",
        options: {
            A: "Not useful",
            B: "Points on line = normal; deviations = non-normal",
            C: "Only for visual appeal",
            D: "Never interpreted"
        },
        correctAnswer: 'B',
        explanation: "Normality visual assessment",
        topic: 'Analyze Phase'
    },
    {
        id: 'A124',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Interpretation of confidence coefficient:",
        options: {
            A: "Probability parameter in interval",
            B: "Long-run coverage rate if repeated",
            C: "Certainty in sample",
            D: "Not interpretable"
        },
        correctAnswer: 'B',
        explanation: "Frequentist perspective",
        topic: 'Analyze Phase'
    },
    {
        id: 'A125',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Risk assessment in statistical testing:",
        options: {
            A: "Not important",
            B: "Balance Type I, Type II errors, sample size, cost",
            C: "Only control Type I",
            D: "No trade-offs"
        },
        correctAnswer: 'B',
        explanation: "Multi-dimensional optimization",
        topic: 'Analyze Phase'
    },
    {
        id: 'A126',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Statistical software validation:",
        options: {
            A: "Not needed",
            B: "Verify correct implementation of methods",
            C: "Trust vendors always",
            D: "Not possible"
        },
        correctAnswer: 'B',
        explanation: "Best practice",
        topic: 'Analyze Phase'
    },
    {
        id: 'A127',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Reporting p-value limits:",
        options: {
            A: "No limits",
            B: "Exact value or p < 0.001 when very small",
            C: "Always round",
            D: "Never report"
        },
        correctAnswer: 'B',
        explanation: "Precision standards",
        topic: 'Analyze Phase'
    },
    {
        id: 'A128',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Missing data mechanisms:",
        options: {
            A: "All same",
            B: "MCAR, MAR, MNAR—different handling",
            C: "Never matter",
            D: "Always ignorable"
        },
        correctAnswer: 'B',
        explanation: "Affects validity",
        topic: 'Analyze Phase'
    },
    {
        id: 'A129',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Imputation methods:",
        options: {
            A: "Not used",
            B: "Single, multiple imputation based on mechanism",
            C: "Delete all missing",
            D: "Leave blank"
        },
        correctAnswer: 'B',
        explanation: "Data completion",
        topic: 'Analyze Phase'
    },
    {
        id: 'A130',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Sensitivity analysis in statistical testing:",
        options: {
            A: "Not done",
            B: "Tests robustness to assumptions or data changes",
            C: "Only for linear",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Validates conclusions",
        topic: 'Analyze Phase'
    },
    {
        id: 'A131',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Meta-analysis purpose:",
        options: {
            A: "Single study only",
            B: "Combines results across multiple studies",
            C: "No statistical basis",
            D: "Not quantitative"
        },
        correctAnswer: 'B',
        explanation: "Systematic review synthesis",
        topic: 'Analyze Phase'
    },
    {
        id: 'A132',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Effect modification concept:",
        options: {
            A: "Not statistical",
            B: "Third variable changes magnitude of relationship",
            C: "Same as confounding",
            D: "Never occurs"
        },
        correctAnswer: 'B',
        explanation: "Subgroup analysis",
        topic: 'Analyze Phase'
    },
    {
        id: 'A133',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Standardization in analysis:",
        options: {
            A: "Not necessary",
            B: "Adjusts for differing population structures",
            C: "Only in manufacturing",
            D: "Same as normalization"
        },
        correctAnswer: 'B',
        explanation: "Epidemiologic adjustment",
        topic: 'Analyze Phase'
    },
    {
        id: 'A134',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Smoothing in data analysis:",
        options: {
            A: "Always avoid",
            B: "Reduces noise while preserving signal",
            C: "Distorts completely",
            D: "Not statistical"
        },
        correctAnswer: 'B',
        explanation: "Exploratory approach",
        topic: 'Analyze Phase'
    },
    {
        id: 'A135',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Forecasting vs prediction:",
        options: {
            A: "Same thing",
            B: "Forecast = future time series; predict = cross-sectional",
            C: "Never distinguished",
            D: "No difference"
        },
        correctAnswer: 'B',
        explanation: "Method-dependent distinction",
        topic: 'Analyze Phase'
    },
    {
        id: 'A136',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Time series decomposition:",
        options: {
            A: "Not used",
            B: "Trend, seasonality, irregular components",
            C: "Only for stock prices",
            D: "Never practical"
        },
        correctAnswer: 'B',
        explanation: "Pattern analysis",
        topic: 'Analyze Phase'
    },
    {
        id: 'A137',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Autocorrelation in data:",
        options: {
            A: "Not important",
            B: "Values correlated with past values; affects inference",
            C: "Always zero",
            D: "Ignored"
        },
        correctAnswer: 'B',
        explanation: "Violates independence",
        topic: 'Analyze Phase'
    },
    {
        id: 'A138',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Heterogeneity testing:",
        options: {
            A: "Not statistical",
            B: "Assesses whether studies differ beyond chance",
            C: "Same as homogeneity",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Meta-analysis consideration",
        topic: 'Analyze Phase'
    },
    {
        id: 'A139',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Publication bias:",
        options: {
            A: "Not real",
            B: "Studies showing effects more likely published",
            C: "Not addressable",
            D: "Same as selection bias"
        },
        correctAnswer: 'B',
        explanation: "Meta-analysis concern",
        topic: 'Analyze Phase'
    },
    {
        id: 'A140',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Odds ratio interpretation:",
        options: {
            A: "Same as relative risk",
            B: "Odds in treatment vs control; >1 = higher odds",
            C: "Probability directly",
            D: "Never reported"
        },
        correctAnswer: 'B',
        explanation: "Epidemiologic measure",
        topic: 'Analyze Phase'
    },
    {
        id: 'A141',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Relative risk calculation:",
        options: {
            A: "Same as odds ratio",
            B: "Risk in treatment / risk in control",
            C: "Probability difference",
            D: "Not calculated"
        },
        correctAnswer: 'B',
        explanation: "Cohort study measure",
        topic: 'Analyze Phase'
    },
    {
        id: 'A142',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Attributable risk:",
        options: {
            A: "Not calculated",
            B: "Risk in exposed minus risk in unexposed",
            C: "Same as relative risk",
            D: "Not interpretable"
        },
        correctAnswer: 'B',
        explanation: "Absolute difference",
        topic: 'Analyze Phase'
    },
    {
        id: 'A143',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Number needed to treat (NNT):",
        options: {
            A: "Not used",
            B: "Patients treated to prevent one event = 1/ARR",
            C: "Sample size",
            D: "Not practical"
        },
        correctAnswer: 'B',
        explanation: "Clinical significance",
        topic: 'Analyze Phase'
    },
    {
        id: 'A144',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Diagnostic test sensitivity:",
        options: {
            A: "Probability negative if disease absent",
            B: "Probability positive if disease present",
            C: "Same as specificity",
            D: "Not important"
        },
        correctAnswer: 'B',
        explanation: "True positive rate",
        topic: 'Analyze Phase'
    },
    {
        id: 'A145',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Diagnostic test specificity:",
        options: {
            A: "Probability positive if disease present",
            B: "Probability negative if disease absent",
            C: "Same as sensitivity",
            D: "Never tested"
        },
        correctAnswer: 'B',
        explanation: "True negative rate",
        topic: 'Analyze Phase'
    },
    {
        id: 'A146',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Positive predictive value (PPV):",
        options: {
            A: "Sensitivity",
            B: "Probability disease if test positive",
            C: "Specificity",
            D: "Not calculated"
        },
        correctAnswer: 'B',
        explanation: "Post-test probability",
        topic: 'Analyze Phase'
    },
    {
        id: 'A147',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Receiver operating characteristic (ROC) curve:",
        options: {
            A: "Not used",
            B: "Plots sensitivity vs 1-specificity",
            C: "Same as histogram",
            D: "Only theoretical"
        },
        correctAnswer: 'B',
        explanation: "Classifier evaluation",
        topic: 'Analyze Phase'
    },
    {
        id: 'A148',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Area under ROC curve (AUC):",
        options: {
            A: "Only line segments",
            B: "Probability classifier ranks random positive higher than negative",
            C: "Always 0.5",
            D: "Ranges 0-1"
        },
        correctAnswer: 'B',
        explanation: "Discrimination measure",
        topic: 'Analyze Phase'
    },
    {
        id: 'A149',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Threshold selection in classification:",
        options: {
            A: "Not important",
            B: "Balances sensitivity, specificity, costs",
            C: "Always 0.5",
            D: "Same for all applications"
        },
        correctAnswer: 'B',
        explanation: "Context-dependent",
        topic: 'Analyze Phase'
    },
    {
        id: 'A150',
        phase: 'analyze',
        module: 'Analyze Phase',
        difficulty: 'medium',
        question: "Statistical vs machine learning difference:",
        options: {
            A: "No difference",
            B: "Statistics focuses on inference; ML on prediction",
            C: "Always same results",
            D: "No distinction needed"
        },
        correctAnswer: 'B',
        explanation: "Different objectives",
        topic: 'Analyze Phase'
    }
];
