export type Phase = 'define' | 'measure' | 'analyze' | 'improve' | 'control' | 'general';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type OptionID = 'A' | 'B' | 'C' | 'D';

// Individual option in the bank (new format)
export interface BankOption {
    id: string;       // "C1_O1", "C1_O2", etc.
    text: string;     // Option text
    correct: boolean; // Exactly one true per question
}

// Legacy fixed options format
export interface LegacyOptions {
    A: string;
    B: string;
    C: string;
    D: string;
}

// Question interface supporting both legacy and new formats during migration
export interface QuizQuestion {
    id: string;                  // "D1", "M21", "A35", "C45", etc.
    phase: Phase;                // Which phase (define/measure/analyze/improve/control/general)
    module?: string;             // "Project Selection", "MSA", "Hypothesis Testing", etc.
    difficulty: Difficulty;      // easy | medium | hard
    question: string;            // Full question text
    explanation: string;         // 2-3 sentence explanation
    topic: string;               // Topic category: "Cpk", "Control Charts", "P-value", etc.

    // NEW FORMAT: Options bank with 4-10 choices (preferred)
    optionsBank?: BankOption[];

    // LEGACY FORMAT: Fixed A/B/C/D options (being migrated away)
    options?: LegacyOptions;
    correctAnswer?: OptionID;
}

// Runtime-rendered question (after shuffle, ready for display)
export interface RenderedQuestion extends Omit<QuizQuestion, 'optionsBank' | 'options' | 'correctAnswer'> {
    options: Record<OptionID, string>;
    correctAnswer: OptionID;
}

export interface ChapterModule {
    id: string;                  // "define-1", "measure-2", etc.
    name: string;                // "Project Selection", "Charter", etc.
    chapter: string;             // "Chapter 1", "Chapter 2", etc.
    quizCount: number;           // How many Qs in pool (e.g., 10)
    quizIds: string[];           // ["D1", "D2", "D3", ...]
}

export interface MockExamConfig {
    defineCount: number;
    measureCount: number;
    analyzeCount: number;
    improveCount: number;
    controlCount: number;
    generalCount: number;
}
