import { QuizQuestion, RenderedQuestion, OptionID, BankOption } from '@/types/quiz.types';

const LETTERS: OptionID[] = ['A', 'B', 'C', 'D'];

// Fisher-Yates Shuffle
function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Converts a QuizQuestion (stored format) to a RenderedQuestion (display format).
 * Handles both legacy format (options/correctAnswer) and new format (optionsBank).
 * 
 * For new format: Selects 1 correct + 3 random wrong → shuffles → assigns A-D
 * For legacy format: Shuffles existing A-D options → reassigns A-D
 */
export function getRenderedQuestion(q: QuizQuestion): RenderedQuestion {
    let options: Record<OptionID, string> = {} as Record<OptionID, string>;
    let correctAnswer: OptionID = 'A';

    if (q.optionsBank && q.optionsBank.length > 0) {
        // NEW FORMAT: Use optionsBank
        const correct = q.optionsBank.find(o => o.correct);
        if (!correct) {
            throw new Error(`Question ${q.id} has no correct answer marked in optionsBank`);
        }

        const wrongs = shuffle(q.optionsBank.filter(o => !o.correct)).slice(0, 3);
        const selected = shuffle([correct, ...wrongs]);

        selected.forEach((opt, idx) => {
            const letter = LETTERS[idx];
            options[letter] = opt.text;
            if (opt.correct) {
                correctAnswer = letter;
            }
        });
    } else if (q.options && q.correctAnswer) {
        // LEGACY FORMAT: Shuffle existing A/B/C/D options
        const legacyOptions: { letter: OptionID; text: string; isCorrect: boolean }[] = [
            { letter: 'A', text: q.options.A, isCorrect: q.correctAnswer === 'A' },
            { letter: 'B', text: q.options.B, isCorrect: q.correctAnswer === 'B' },
            { letter: 'C', text: q.options.C, isCorrect: q.correctAnswer === 'C' },
            { letter: 'D', text: q.options.D, isCorrect: q.correctAnswer === 'D' }
        ];

        const shuffled = shuffle(legacyOptions);

        shuffled.forEach((opt, idx) => {
            const letter = LETTERS[idx];
            options[letter] = opt.text;
            if (opt.isCorrect) {
                correctAnswer = letter;
            }
        });
    } else {
        throw new Error(`Question ${q.id} has neither optionsBank nor legacy options/correctAnswer`);
    }

    // Create RenderedQuestion - exclude both old and new format fields
    const { optionsBank, options: _opts, correctAnswer: _ca, ...rest } = q;
    return { ...rest, options, correctAnswer };
}

/**
 * Renders an array of QuizQuestions into RenderedQuestions.
 */
export function renderQuestions(questions: QuizQuestion[]): RenderedQuestion[] {
    return questions.map(q => getRenderedQuestion(q));
}
