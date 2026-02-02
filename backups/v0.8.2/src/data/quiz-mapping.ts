/**
 * Quiz Question Mapping
 * Maps module quiz identifiers to their question pools
 * 
 * General Knowledge (G1-G100) distributed by topic depth:
 * - Chapter 1 Foundations: ~55 questions (basics, roles, gurus, DMAIC, Lean)
 * - Chapter 2 Define: ~16 questions (VOC, CTQ, charter, stakeholders)
 * - Chapter 3 Measure: ~15 questions (statistics, MSA, Cp/Cpk)
 * - Chapter 4-8: Remaining questions on specialized topics
 */
export const QUIZ_MAPPING: Record<string, { topics: string[], phase: string, idRanges?: [string, string][] }> = {
    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 1: FOUNDATIONS (55 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_basics_01 - Six Sigma Origins & Definition (13 Qs)
    // G1,G2,G6,G7,G8,G11,G57,G58,G66,G90,G91,G92,G100
    'mod_basics_01': {
        topics: ['Six Sigma Origins', 'DPMO Definition', 'Lean Six Sigma'],
        phase: 'general',
        idRanges: [
            ['G1', 'G2'],    // Motorola origin, 6σ definition
            ['G6', 'G8'],    // DPMO, 3.4 DPMO, Lean SS
            ['G11', 'G11'],  // Primary goal
            ['G57', 'G58'],  // Motorola savings, Bob Galvin
            ['G66', 'G66'],  // Jack Welch / GE
            ['G90', 'G92'],  // Trademark, GE year, Fortune 500
            ['G100', 'G100'] // Operational excellence
        ]
    },

    // mod_roles_belts - Roles, Belts & Certification (10 Qs)
    // G9,G10,G12,G13,G14,G15,G16,G30,G50,G83
    'mod_roles_belts': {
        topics: ['Six Sigma Roles', 'Belt Certification', 'IASSC vs ASQ'],
        phase: 'general',
        idRanges: [
            ['G9', 'G10'],   // IASSC, ASQ
            ['G12', 'G16'],  // Roles (BB, GB, Champion, YB)
            ['G30', 'G30'],  // Process Owner
            ['G50', 'G50'],  // GB certification
            ['G83', 'G83']   // Belt velocity
        ]
    },

    // mod_gurus_teams - Quality Gurus & Team Dynamics (11 Qs)
    // G3,G4,G5,G21,G22,G23,G24,G25,G51,G52,G53
    'mod_gurus_teams': {
        topics: ['Quality Gurus', 'Tuckman Stages', 'Team Development'],
        phase: 'general',
        idRanges: [
            ['G3', 'G5'],    // Deming, Shewhart, Juran
            ['G21', 'G25'],  // Tuckman stages
            ['G51', 'G53']   // Ishikawa, Quality circles, Mikel Harry
        ]
    },

    // mod_dmaic_overview - DMAIC/DMADV Overview (7 Qs)
    // G17,G18,G85,G86,G87,G88,G89
    'mod_dmaic_overview': {
        topics: ['DMAIC Methodology', 'DMADV', 'Phase Outputs'],
        phase: 'general',
        idRanges: [
            ['G17', 'G18'],  // DMAIC vs DMADV
            ['G85', 'G89']   // DMAIC phase outputs
        ]
    },

    // mod_lean_wastes - Lean Concepts & Kaizen (14 Qs)
    // G19,G31,G32,G33,G34,G35,G36,G37,G38,G39,G40,G41,G42,G69
    'mod_lean_wastes': {
        topics: ['PDCA Cycle', 'Kaizen', 'Lean Philosophy', 'Poka-Yoke'],
        phase: 'general',
        idRanges: [
            ['G19', 'G19'],  // Continuous improvement
            ['G31', 'G35'],  // PDCA stages
            ['G36', 'G42'],  // Kaizen, Gemba, process thinking
            ['G69', 'G69']   // Poka-Yoke
        ]
    },

    // Combined Chapter 1 Quiz Pool (for chapter quiz)
    'mod_foundations_quiz': {
        topics: ['Foundations Pool'],
        phase: 'general',
        idRanges: [
            ['G1', 'G25'],   // Basics through team dynamics
            ['G30', 'G42'],  // Process owner through process thinking
            ['G50', 'G53'],  // Certification and gurus
            ['G57', 'G58'],  // Motorola history
            ['G66', 'G66'],  // Jack Welch
            ['G69', 'G69'],  // Poka-Yoke
            ['G83', 'G83'],  // Belt velocity
            ['G85', 'G92'],  // DMAIC outputs through Fortune 500
            ['G100', 'G100'], // Operational excellence
            ['D45', 'D46']   // Define roles questions
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 2: DEFINE PHASE (16 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_define_01 - Project Selection & Business Case (5 Qs)
    // G45,G46,G47,G49,G82
    'mod_define_01': {
        topics: ['Business Case', 'Tollgates', 'Benefits Realization'],
        phase: 'define',
        idRanges: [
            ['G45', 'G47'],  // Business case, tollgate, benefits
            ['G49', 'G49'],  // Governance
            ['G82', 'G82']   // Quick wins
        ]
    },

    // mod_define_02 - VOC & CTQ (3 Qs)
    // G20,G67,G68
    'mod_define_02': {
        topics: ['Voice of Customer', 'CTQ', 'House of Quality'],
        phase: 'define',
        idRanges: [
            ['G20', 'G20'],  // VOC definition
            ['G67', 'G68']   // CTQ, QFD
        ]
    },

    // mod_define_03 - Project Charter & Stakeholders (7 Qs)
    // G26,G27,G28,G29,G43,G44,G48
    'mod_define_03': {
        topics: ['Change Management', 'Stakeholder Analysis', 'Project Charter'],
        phase: 'define',
        idRanges: [
            ['G26', 'G29'],  // Change management, stakeholders
            ['G43', 'G44'],  // Scope creep, charter
            ['G48', 'G48']   // Lessons learned
        ]
    },

    // mod_define_04 - SIPOC & Process Mapping (1 Q)
    // G63
    'mod_define_04': {
        topics: ['SIPOC Diagram'],
        phase: 'define',
        idRanges: [
            ['G63', 'G63']   // SIPOC definition
        ]
    },

    // Combined Chapter 2 Quiz Pool
    'mod_define_quiz': {
        topics: ['Define Pool'],
        phase: 'define',
        idRanges: [
            ['G20', 'G20'],  // VOC
            ['G26', 'G29'],  // Change, stakeholders
            ['G43', 'G49'],  // Scope through governance
            ['G63', 'G63'],  // SIPOC
            ['G67', 'G68'],  // CTQ, QFD
            ['G82', 'G82'],  // Quick wins
            ['D1', 'D4'],    // Define phase questions
            ['D18', 'D20'],
            ['D23', 'D26'],
            ['D28', 'D36'],
            ['D47', 'D75']
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 3: MEASURE PHASE (15 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_measure_02 - Statistics & Normality (5 Qs)
    // G70,G71,G72,G73,G81
    'mod_measure_02': {
        topics: ['Central Limit Theorem', 'Kurtosis', 'Skewness', 'Stratification'],
        phase: 'measure',
        idRanges: [
            ['G70', 'G73'],  // CLT, kurtosis, skewness, bimodal
            ['G81', 'G81']   // Stratification
        ]
    },

    // mod_measure_03 - MSA (Gage R&R) (5 Qs)
    // G76,G77,G78,G79,G80
    'mod_measure_03': {
        topics: ['MSA', 'Gage R&R', 'Accuracy vs Precision'],
        phase: 'measure',
        idRanges: [
            ['G76', 'G80']   // MSA purpose, R&R, Bias, Accuracy, Precision
        ]
    },

    // mod_measure_04 - Process Capability (Cp, Cpk) (5 Qs)
    // G54,G55,G56,G96,G97
    'mod_measure_04': {
        topics: ['Cp', 'Cpk', 'RTY', 'FTY'],
        phase: 'measure',
        idRanges: [
            ['G54', 'G56'],  // Cpk, Cp, 6σ Cpk
            ['G96', 'G97']   // RTY, FTY
        ]
    },

    // Combined Chapter 3 Quiz Pool
    'mod_measure_quiz': {
        topics: ['Measure Pool'],
        phase: 'measure',
        idRanges: [
            ['G54', 'G56'],  // Cp/Cpk
            ['G70', 'G73'],  // Statistics
            ['G76', 'G81'],  // MSA through stratification
            ['G96', 'G97'],  // RTY/FTY
            ['M1', 'M7'],
            ['M16', 'M125']
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 4: ANALYZE - PATTERNS (2 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_analyze_regression_01 - Correlation & Regression (2 Qs)
    // G74,G75
    'mod_analyze_regression_01': {
        topics: ['Correlation Coefficient'],
        phase: 'analyze',
        idRanges: [
            ['G74', 'G75']   // Correlation interpretation & range
        ]
    },

    // Combined Chapter 4 Quiz Pool
    'mod_analyze_patterns_quiz': {
        topics: ['Analyze Patterns Pool'],
        phase: 'analyze',
        idRanges: [
            ['G74', 'G75'],  // Correlation
            ['M8', 'M15'],
            ['I1', 'I7'],
            ['I12', 'I14'],
            ['I21', 'I30']
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 5: ANALYZE - HYPOTHESIS TESTING (3 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_analyze_hyp_basics - Hypothesis Testing Basics (3 Qs)
    // G93,G94,G95
    'mod_analyze_hyp_basics': {
        topics: ['Hypothesis Testing', 'Alpha Risk', 'Beta Risk'],
        phase: 'analyze',
        idRanges: [
            ['G93', 'G95']   // Hypothesis testing, Type I, Type II errors
        ]
    },

    // Combined Chapter 5 Quiz Pool
    'mod_analyze_hypothesis_quiz': {
        topics: ['Analyze Hypothesis Pool'],
        phase: 'analyze',
        idRanges: [
            ['G93', 'G95'],  // Hypothesis testing basics
            ['A1', 'A50']
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 6: ANALYZE - ROOT CAUSE & LEAN (7 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_analyze_rootcause_01 - Pareto & Fishbone (3 Qs)
    // G61,G64,G65
    'mod_analyze_rootcause_01': {
        topics: ['Pareto Principle', '7 Basic Quality Tools', 'Fishbone Diagram'],
        phase: 'analyze',
        idRanges: [
            ['G61', 'G61'],  // Pareto 80/20
            ['G64', 'G65']   // 7 tools, Fishbone
        ]
    },

    // mod_analyze_vsm - VSM & Lean (2 Qs)
    // G60,G62
    'mod_analyze_vsm': {
        topics: ['SMED', 'Value Stream Map'],
        phase: 'analyze',
        idRanges: [
            ['G60', 'G60'],  // SMED
            ['G62', 'G62']   // VSM
        ]
    },

    // mod_analyze_waste - Lean Wastes & 5S (1 Q)
    // G59
    'mod_analyze_waste': {
        topics: ['5S Methodology'],
        phase: 'analyze',
        idRanges: [
            ['G59', 'G59']   // 5S sequence
        ]
    },

    // Combined Chapter 6 Quiz Pool
    'mod_improve_quiz': {
        topics: ['Analyze RCA Pool'],
        phase: 'improve',
        idRanges: [
            ['G59', 'G65'],  // 5S through Fishbone
            ['D5', 'D17'],
            ['D21', 'D22'],
            ['D27', 'D38'],
            ['D40', 'D41']
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 7: IMPROVE PHASE (2 General Knowledge Questions)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_improve_doe_02 - DOE Fundamentals (2 Qs)
    // G98,G99
    'mod_improve_doe_02': {
        topics: ['DOE Factors', 'DOE Levels'],
        phase: 'improve',
        idRanges: [
            ['G98', 'G99']   // DOE factors & levels
        ]
    },

    // Combined Chapter 7 Quiz Pool
    'mod_improve_doe_quiz': {
        topics: ['Improve Pool'],
        phase: 'improve',
        idRanges: [
            ['G98', 'G99'],  // DOE basics
            ['I1', 'I5'],
            ['I8', 'I11'],
            ['I16', 'I20'],
            ['I31', 'I50']
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHAPTER 8: CONTROL PHASE (1 General Knowledge Question)
    // ═══════════════════════════════════════════════════════════════════════

    // mod_control_plan_01 - Control Plan (1 Q)
    // G84
    'mod_control_plan_01': {
        topics: ['Control Plan'],
        phase: 'control',
        idRanges: [
            ['G84', 'G84']   // Control Plan purpose
        ]
    },

    // Combined Chapter 8 Quiz Pool
    'mod_control_quiz': {
        topics: ['Control Pool'],
        phase: 'control',
        idRanges: [
            ['G84', 'G84'],  // Control Plan
            ['C1', 'C125']
        ]
    },
};
