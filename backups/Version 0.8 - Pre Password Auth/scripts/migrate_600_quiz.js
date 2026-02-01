const fs = require('fs');
const path = require('path');

// Configuration
const QUIZ_DIR = path.join(__dirname, '../QUIZ');
const OUTPUT_DIR = path.join(__dirname, '../src/data/quizzes');

// File Mapping: Source MD -> Target TS
const FILE_MAPPING = [
    { source: '01_General_50Q.md', target: 'general-knowledge-quizzes.ts', phase: 'general', module: 'General Knowledge' },
    { source: '02_Define_75Q.md', target: 'define-phase-quizzes.ts', phase: 'define', module: 'Define Phase' },
    { source: '03_Measure_125Q.md', target: 'measure-phase-quizzes.ts', phase: 'measure', module: 'Measure Phase' },
    { source: '04_Analyze_150Q.md', target: 'analyze-phase-quizzes.ts', phase: 'analyze', module: 'Analyze Phase' },
    { source: '05_Improve_75Q.md', target: 'improve-phase-quizzes.ts', phase: 'improve', module: 'Improve Phase' },
    { source: '06_Control_125Q.md', target: 'control-phase-quizzes.ts', phase: 'control', module: 'Control Phase' }
];

function parseQuestions(content, phaseConfig) {
    const questions = [];

    let currentQ = null;
    let currentTopic = phaseConfig.module; // Default to broad module name

    for (const line of content.split('\n')) {
        // Match Sub-headers (e.g., ## D1-D25: Project Charter...)
        // Robust check: Starts with ##, contains dash (range) and colon
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('##') && trimmedLine.includes(':')) {
            const parts = trimmedLine.split(':');
            if (parts.length > 1) {
                currentTopic = parts.slice(1).join(':').trim(); // Take everything after first colon
                continue;
            }
        }

        // Match Question ID (e.g., **G1**: )
        const qMatch = line.match(/^\*\*([GDMAIC][0-9]+)\*\*: (.*)/);
        if (qMatch) {
            if (currentQ) questions.push(currentQ);
            currentQ = {
                id: qMatch[1],
                question: qMatch[2].trim(),
                options: {},
                correctAnswer: '',
                explanation: '',
                topic: currentTopic, // Use granular topic
                module: currentTopic // Also set module to this for matching
            };
            continue;
        }

        if (!currentQ) continue;

        const optAMatch = line.match(/^A\) (.*)/);
        if (optAMatch) { currentQ.options.A = optAMatch[1].replace('✓', '').trim(); continue; }

        const optBMatch = line.match(/^B\) (.*)/);
        if (optBMatch) { currentQ.options.B = optBMatch[1].replace('✓', '').trim(); continue; }

        const optCMatch = line.match(/^C\) (.*)/);
        if (optCMatch) { currentQ.options.C = optCMatch[1].replace('✓', '').trim(); continue; }

        const optDMatch = line.match(/^D\) (.*)/);
        if (optDMatch) { currentQ.options.D = optDMatch[1].replace('✓', '').trim(); continue; }

        const ansMatch = line.match(/^\*\*ANSWER: ([A-D])\*\* - (.*)/);
        if (ansMatch) {
            currentQ.correctAnswer = ansMatch[1];
            currentQ.explanation = ansMatch[2].trim();
            continue;
        }
    }
    if (currentQ) questions.push(currentQ);
    return questions;
}

function generateTSContent(questions, phaseConfig) {
    // Determine variable name based on filename
    // e.g., general-knowledge-quizzes.ts -> generalPhaseQuizzes
    // measure-phase-quizzes.ts -> measurePhaseQuizzes
    let varName = '';
    if (phaseConfig.phase === 'general') varName = 'generalPhaseQuizzes';
    else varName = `${phaseConfig.phase}PhaseQuizzes`;

    const qObjects = questions.map(q => {
        // Refine module/topic based on ID range if needed, or simple mapping
        // Logic: Try to keep module generic if strict mapping isn't available
        return `    {
        id: '${q.id}',
        phase: '${phaseConfig.phase}',
        module: '${phaseConfig.module}',
        difficulty: 'medium',
        question: ${JSON.stringify(q.question)},
        options: {
            A: ${JSON.stringify(q.options.A || 'Option A')},
            B: ${JSON.stringify(q.options.B || 'Option B')},
            C: ${JSON.stringify(q.options.C || 'Option C')},
            D: ${JSON.stringify(q.options.D || 'Option D')}
        },
        correctAnswer: '${q.correctAnswer}',
        explanation: ${JSON.stringify(q.explanation)},
        topic: '${phaseConfig.module}'
    }`;
    }).join(',\n');

    return `import { QuizQuestion } from '@/types/quiz.types';

export const ${varName}: QuizQuestion[] = [
${qObjects}
];
`;
}

function main() {
    console.log('Starting Multi-File Migration...');
    let totalQuestions = 0;

    FILE_MAPPING.forEach(config => {
        const sourcePath = path.join(QUIZ_DIR, config.source);
        const targetPath = path.join(OUTPUT_DIR, config.target);

        try {
            if (!fs.existsSync(sourcePath)) {
                console.error(`Missing source file: ${config.source}`);
                return;
            }

            const content = fs.readFileSync(sourcePath, 'utf8');
            const questions = parseQuestions(content, config);

            if (questions.length === 0) {
                console.warn(`No questions found in ${config.source}`);
            } else {
                const tsContent = generateTSContent(questions, config);
                fs.writeFileSync(targetPath, tsContent);
                console.log(`✅ ${config.source} -> ${config.target} (${questions.length} Qs)`);
                totalQuestions += questions.length;
            }

        } catch (err) {
            console.error(`Error processing ${config.source}:`, err);
        }
    });

    console.log(`\nMigration Complete. Total Questions: ${totalQuestions}`);
}

main();
