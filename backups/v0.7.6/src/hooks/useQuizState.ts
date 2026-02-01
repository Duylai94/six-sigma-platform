import { useState, useEffect, useCallback } from 'react';
import { QuizQuestion, Answer } from '@/types/quiz.types';

export interface QuizState {
    answers: Record<string, Answer>; // map questionId -> Answer (A, B, C, D)
    currentQuestionIndex: number;
    flagged: string[]; // List of flagged question IDs
    isComplete: boolean;
    score: number;
}

const STORAGE_KEY_PREFIX = 'six_sigma_quiz_';

export const useQuizState = (quizId: string, questions: QuizQuestion[]) => {
    const [state, setState] = useState<QuizState>({
        answers: {},
        currentQuestionIndex: 0,
        flagged: [],
        isComplete: false,
        score: 0
    });

    // Load state from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${quizId}`);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setState(parsed);
            } catch (e) {
                console.error('Failed to parse saved quiz state', e);
            }
        }
    }, [quizId]);

    // Save state to local storage on change
    useEffect(() => {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}${quizId}`, JSON.stringify(state));
    }, [quizId, state]);

    const selectAnswer = useCallback((questionId: string, answer: Answer) => {
        if (state.isComplete) return; // Prevent changing after completion

        setState(prev => ({
            ...prev,
            answers: {
                ...prev.answers,
                [questionId]: answer
            }
        }));
    }, [state.isComplete]);

    const toggleFlag = useCallback((questionId: string) => {
        setState(prev => {
            const isFlagged = prev.flagged.includes(questionId);
            return {
                ...prev,
                flagged: isFlagged
                    ? prev.flagged.filter(id => id !== questionId)
                    : [...prev.flagged, questionId]
            };
        });
    }, []);

    const nextQuestion = useCallback(() => {
        if (state.currentQuestionIndex < questions.length - 1) {
            setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
        }
    }, [questions.length, state.currentQuestionIndex]);

    const prevQuestion = useCallback(() => {
        if (state.currentQuestionIndex > 0) {
            setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 }));
        }
    }, [state.currentQuestionIndex]);

    const jumpToQuestion = useCallback((index: number) => {
        if (index >= 0 && index < questions.length) {
            setState(prev => ({ ...prev, currentQuestionIndex: index }));
        }
    }, [questions.length]);

    const finishQuiz = useCallback(() => {
        // Calculate Score
        let correctCount = 0;
        questions.forEach(q => {
            if (state.answers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        const finalScore = Math.round((correctCount / questions.length) * 100);

        setState(prev => ({
            ...prev,
            isComplete: true,
            score: finalScore
        }));

        // Optional: Could clear storage here if we don't want to persist finished state
        // but usually users want to review results, so we keep it.
    }, [questions, state.answers]);

    const resetQuiz = useCallback(() => {
        const newState = {
            answers: {},
            currentQuestionIndex: 0,
            flagged: [],
            isComplete: false,
            score: 0
        };
        setState(newState);
        localStorage.removeItem(`${STORAGE_KEY_PREFIX}${quizId}`);
    }, [quizId]);

    return {
        state,
        selectAnswer,
        toggleFlag,
        nextQuestion,

        prevQuestion,
        jumpToQuestion,
        finishQuiz,
        resetQuiz
    };
};
