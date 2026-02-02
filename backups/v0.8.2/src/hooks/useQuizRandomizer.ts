import { useState, useCallback } from 'react';
import { QuizQuestion, RenderedQuestion } from '@/types/quiz.types';
import { allQuizzes } from '@/data/quizzes';
import { renderQuestions } from '@/lib/quizUtils';
import { QUIZ_MAPPING } from '@/data/quiz-mapping';

// Fisher-Yates Shuffle
const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const useQuizRandomizer = () => {
    const [questions, setQuestions] = useState<RenderedQuestion[]>([]);

    const generateModuleQuiz = useCallback((moduleName: string, count: number = 5, phaseFallback: string = '', moduleId: string = '') => {
        let pool: QuizQuestion[] = [];

        // 1. Explicit Mapping (Best Accuracy)
        if (moduleId && QUIZ_MAPPING[moduleId]) {
            const mapping = QUIZ_MAPPING[moduleId];

            // 1A. Check ID Ranges (Most Robust)
            if (mapping.idRanges) {
                pool = allQuizzes.filter(q => {
                    return mapping.idRanges?.some(([start, end]) => {
                        // Extract numeric part if needed, or lexicographical compare
                        // Assuming IDs like G1, G20... length compare + value compare

                        // Parse ID components e.g. "G1" -> prefix "G", num 1
                        const qMatch = q.id.match(/([A-Z]+)([0-9]+)/);
                        const startMatch = start.match(/([A-Z]+)([0-9]+)/);
                        const endMatch = end.match(/([A-Z]+)([0-9]+)/);

                        if (qMatch && startMatch && endMatch) {
                            const qPrefix = qMatch[1];
                            const qNum = parseInt(qMatch[2]);

                            const sPrefix = startMatch[1];
                            const sNum = parseInt(startMatch[2]);

                            const ePrefix = endMatch[1];
                            const eNum = parseInt(endMatch[2]);

                            if (qPrefix !== sPrefix) return false;
                            return qNum >= sNum && qNum <= eNum;
                        }
                        return false;
                    });
                });
            }

            // 1B. Fallback to Topic (if Ranges empty or yielded no results)
            if (pool.length === 0) {
                pool = allQuizzes.filter(q => {
                    const qTopic = (q.topic || '').toLowerCase();
                    const qModule = (q.module || '').toLowerCase();
                    return mapping.topics.some(t => qTopic.includes(t.toLowerCase()) || qModule.includes(t.toLowerCase()));
                });
            }

            // 1C. Fallback to Phase
            if (pool.length === 0 && mapping.phase) {
                console.log(`Explicit Mapping empty, falling back to Phase: ${mapping.phase}`);
                pool = allQuizzes.filter(q => q.phase === mapping.phase);
            }
        }

        // 2. Exact Match (Legacy/Direct)
        if (pool.length === 0) {
            pool = allQuizzes.filter(q => q.module === moduleName);
        }

        // 3. Fuzzy/Keyword Match
        if (pool.length === 0) {
            const moduleTokens = moduleName.toLowerCase().split(/\s+/).filter(t => t.length > 2);
            pool = allQuizzes.filter(q => {
                if (!q.module && !q.topic) return false;
                const targetText = ((q.module || '') + ' ' + (q.topic || '')).toLowerCase();
                const hasTokenMatch = moduleTokens.some(token => targetText.includes(token));
                const substringMatch = targetText.includes(moduleName.toLowerCase()) || moduleName.toLowerCase().includes(targetText);
                return hasTokenMatch || substringMatch;
            });
        }

        // 4. Fallback to Phase
        if (pool.length === 0 && phaseFallback) {
            console.log(`Fallback to Phase: ${phaseFallback}`);
            pool = allQuizzes.filter(q => q.phase === phaseFallback);
        }

        if (pool.length === 0) {
            console.warn(`No questions found for module: ${moduleName} (${moduleId})`);
            setQuestions([]);
            return [];
        }

        const shuffled = shuffleArray(pool);
        const selected = shuffled.slice(0, count);

        // Render questions (shuffle options, assign A/B/C/D)
        const rendered = renderQuestions(selected);
        setQuestions(rendered);
        return rendered;
    }, []);

    const generatePhaseQuiz = useCallback((phase: string, count: number = 10) => {
        const pool = allQuizzes.filter(q => q.phase === phase);
        const shuffled = shuffleArray(pool);
        const selected = shuffled.slice(0, count);

        // Render questions (shuffle options, assign A/B/C/D)
        const rendered = renderQuestions(selected);
        setQuestions(rendered);
        return rendered;
    }, []);

    return {
        questions,
        generateModuleQuiz,
        generatePhaseQuiz
    };
};
