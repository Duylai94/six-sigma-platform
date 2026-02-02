import { useState, useCallback } from 'react';
import { QuizQuestion, RenderedQuestion, MockExamConfig } from '@/types/quiz.types';
import { allQuizzes } from '@/data/quizzes';
import { renderQuestions } from '@/lib/quizUtils';

// Standard IASSC Green Belt Distribution (100 Questions total)
const DEFAULT_DISTRIBUTION: MockExamConfig = {
    defineCount: 15,
    measureCount: 18,
    analyzeCount: 22,
    improveCount: 15,
    controlCount: 20,
    generalCount: 10 // Lean/Fundamentals
};

const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const useMockExamGenerator = () => {
    const [examQuestions, setExamQuestions] = useState<RenderedQuestion[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateExam = useCallback((config: MockExamConfig = DEFAULT_DISTRIBUTION) => {
        setIsGenerating(true);

        // 1. Separate by Phase
        const definePool = allQuizzes.filter(q => q.phase === 'define');
        const measurePool = allQuizzes.filter(q => q.phase === 'measure');
        const analyzePool = allQuizzes.filter(q => q.phase === 'analyze');
        const improvePool = allQuizzes.filter(q => q.phase === 'improve');
        const controlPool = allQuizzes.filter(q => q.phase === 'control');
        const generalPool = allQuizzes.filter(q => q.phase === 'general');

        // 2. Shuffle and Slice
        const selectedDefine = shuffleArray(definePool).slice(0, config.defineCount);
        const selectedMeasure = shuffleArray(measurePool).slice(0, config.measureCount);
        const selectedAnalyze = shuffleArray(analyzePool).slice(0, config.analyzeCount);
        const selectedImprove = shuffleArray(improvePool).slice(0, config.improveCount);
        const selectedControl = shuffleArray(controlPool).slice(0, config.controlCount);
        const selectedGeneral = shuffleArray(generalPool).slice(0, config.generalCount);

        // 3. Combine
        const allSelected: QuizQuestion[] = [
            ...selectedDefine,
            ...selectedMeasure,
            ...selectedAnalyze,
            ...selectedImprove,
            ...selectedControl,
            ...selectedGeneral
        ];

        // 4. Shuffle Final Set (so questions are mixed, not sequential by phase)
        const shuffledQuestions = shuffleArray(allSelected);

        // 5. Render questions (shuffle options, assign A/B/C/D)
        const finalExam = renderQuestions(shuffledQuestions);

        setExamQuestions(finalExam);
        setIsGenerating(false);
        return finalExam;
    }, []);

    return {
        examQuestions,
        generateExam,
        isGenerating
    };
};
