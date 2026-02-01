export type Phase = 'define' | 'measure' | 'analyze' | 'improve' | 'control' | 'general';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Answer = 'A' | 'B' | 'C' | 'D';

export interface QuizQuestion {
    id: string;                  // "D1", "M21", "A35", "C45", etc.
    phase: Phase;                // Which phase (define/measure/analyze/improve/control/general)
    module?: string;             // "Project Selection", "MSA", "Hypothesis Testing", etc.
    difficulty: Difficulty;      // easy | medium | hard
    question: string;            // Full question text
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: Answer;       // A | B | C | D
    explanation: string;         // 2-3 sentence explanation
    topic: string;               // Topic category: "Cpk", "Control Charts", "P-value", etc.
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
