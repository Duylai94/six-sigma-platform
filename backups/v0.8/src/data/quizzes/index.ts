import { definePhaseQuizzes } from './define-phase-quizzes';
import { measurePhaseQuizzes } from './measure-phase-quizzes';
import { analyzePhaseQuizzes } from './analyze-phase-quizzes';
import { improvePhaseQuizzes } from './improve-phase-quizzes';
import { controlPhaseQuizzes } from './control-phase-quizzes';
import { generalPhaseQuizzes } from './general-knowledge-quizzes';
import { QuizQuestion } from '@/types/quiz.types';

export const allQuizzes: QuizQuestion[] = [
    ...definePhaseQuizzes,
    ...measurePhaseQuizzes,
    ...analyzePhaseQuizzes,
    ...improvePhaseQuizzes,
    ...controlPhaseQuizzes,
    ...generalPhaseQuizzes
];

export {
    definePhaseQuizzes,
    measurePhaseQuizzes,
    analyzePhaseQuizzes,
    improvePhaseQuizzes,
    controlPhaseQuizzes,
    generalPhaseQuizzes
};
