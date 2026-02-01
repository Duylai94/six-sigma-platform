export const QUIZ_MAPPING: Record<string, { topics: string[], phase: string, idRanges?: [string, string][] }> = {
    // --- Chapter 1: Foundations Pool (52 Qs) ---
    // [G1-G50] General + [D45-D46] Roles
    // --- Chapter 1: Foundations Pool (52 Qs) ---
    // Unified Quiz Module
    'mod_foundations_quiz': { topics: ['Foundations Pool'], phase: 'general', idRanges: [['G1', 'G50'], ['D45', 'D46']] },

    // --- Chapter 2: Define Pool (45 Qs) ---
    // --- Chapter 2: Define Pool (45 Qs) ---
    // Unified Quiz Module
    'mod_define_quiz': { topics: ['Define Pool'], phase: 'define', idRanges: [['D1', 'D4'], ['D18', 'D20'], ['D23', 'D26'], ['D28', 'D36'], ['D47', 'D75']] },

    // --- Chapter 3: Measure Pool (100+ Qs) ---
    // --- Chapter 3: Measure Pool (100+ Qs) ---
    // Unified Quiz Module
    'mod_measure_quiz': { topics: ['Measure Pool'], phase: 'measure', idRanges: [['M1', 'M7'], ['M16', 'M125']] },

    // --- Chapter 4: Analyze Patterns Pool (45 Qs) ---
    // --- Chapter 4: Analyze Patterns Pool (45 Qs) ---
    // Unified Quiz Module
    'mod_analyze_patterns_quiz': { topics: ['Analyze Patterns Pool'], phase: 'analyze', idRanges: [['M8', 'M15'], ['I1', 'I7'], ['I12', 'I14'], ['I21', 'I30']] },

    // --- Chapter 5: Analyze Hypothesis Pool (150 Qs) ---
    // Unified Quiz Module
    'mod_analyze_hypothesis_quiz': { topics: ['Analyze Hypothesis Pool'], phase: 'analyze', idRanges: [['A1', 'A50']] },

    // --- Chapter 6: Analyze RCA Pool (25 Qs) ---
    // Unified Quiz Module
    'mod_improve_quiz': { topics: ['Analyze RCA Pool'], phase: 'improve', idRanges: [['D5', 'D17'], ['D21', 'D22'], ['D27', 'D38'], ['D40', 'D41']] },

    // --- Chapter 7: Improve Pool (40 Qs) ---
    // Unified Quiz Module
    'mod_improve_doe_quiz': { topics: ['Improve Pool'], phase: 'improve', idRanges: [['I1', 'I5'], ['I8', 'I11'], ['I16', 'I20'], ['I31', 'I50']] },

    // --- Chapter 8: Control Pool (125 Qs) ---
    // Unified Quiz Module
    'mod_control_quiz': { topics: ['Control Pool'], phase: 'control', idRanges: [['C1', 'C125']] },
};
