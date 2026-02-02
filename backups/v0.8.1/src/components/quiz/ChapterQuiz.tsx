import React, { useEffect } from 'react';
import { useQuizRandomizer } from '@/hooks/useQuizRandomizer';
import { useQuizState } from '@/hooks/useQuizState';
import { useProgress } from '@/contexts/ProgressContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, RefreshCcw, ChevronRight, ChevronLeft, Flag } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { QuizReview } from './QuizReview';

interface ChapterQuizProps {
    moduleId: string;
    moduleTitle: string;
    onComplete?: (score: number) => void;
}

export const ChapterQuiz: React.FC<ChapterQuizProps> = ({ moduleId, moduleTitle, onComplete }) => {
    const { generateModuleQuiz, questions } = useQuizRandomizer();
    const { markLessonComplete, updateTopicScore } = useProgress();

    const {
        state,
        selectAnswer,
        toggleFlag,
        nextQuestion,
        prevQuestion,
        finishQuiz,
        resetQuiz
    } = useQuizState(moduleId, questions);

    const [initialized, setInitialized] = React.useState(false);

    // Initialize quiz on mount
    useEffect(() => {
        // Extract phase from moduleId (e.g., "mod_define_01" -> "define")
        const phaseMatch = moduleId.match(/mod_([a-z]+)_/);
        const phaseFallback = phaseMatch ? phaseMatch[1] : '';

        // Pass moduleId for explicit mapping
        generateModuleQuiz(moduleTitle, 25, phaseFallback, moduleId);
        setInitialized(true);
    }, [moduleId, moduleTitle, generateModuleQuiz]);

    // Handle completion callback
    useEffect(() => {
        if (state.isComplete) {
            // Save to Context
            markLessonComplete(moduleId, state.score);

            // Save Topic Score
            const phaseMatch = moduleId.match(/mod_([a-z]+)_/);
            const topic = phaseMatch ? phaseMatch[1] : 'general';
            updateTopicScore(topic, state.score, questions.length);

            if (onComplete) {
                onComplete(state.score);
            }
        }
    }, [state.isComplete, state.score, moduleId, questions.length, markLessonComplete, updateTopicScore, onComplete]);

    if (!initialized) {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Loading Quiz...</CardTitle>
                    <CardDescription>Preparing questions for {moduleTitle}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center p-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (questions.length === 0) {
        return (
            <Card className="w-full border-dashed">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl text-muted-foreground">No Questions Available</CardTitle>
                    <CardDescription>
                        We couldn't find any practice questions specifically for "{moduleTitle}".
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center pb-8">
                    <AlertCircle className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <p className="text-sm text-center max-w-sm text-muted-foreground">
                        This module might be a general introduction or the questions are still being migrated.
                        Try the <strong>Mock Exam</strong> for a comprehensive test.
                    </p>
                </CardContent>
            </Card>
        );
    }

    // --- RESULTS VIEW ---
    if (state.isComplete) {
        const isPass = state.score >= 80;
        return (
            <Card className="w-full border-2 border-primary/20">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                    <CardDescription>Result for {moduleTitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-6">
                    <div className={`p-6 rounded-full border-4 ${isPass ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                        <span className={`text-4xl font-bold ${isPass ? 'text-green-600' : 'text-red-600'}`}>
                            {state.score}%
                        </span>
                    </div>

                    <Alert variant={isPass ? "default" : "destructive"} className="max-w-md">
                        {isPass ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                        <AlertTitle>{isPass ? 'Excellent Work!' : 'Keep Studying'}</AlertTitle>
                        <AlertDescription>
                            {isPass
                                ? 'You have mastered this topic. Ready for the next module!'
                                : 'Review the material and try again to improve your score.'}
                        </AlertDescription>
                    </Alert>

                    {/* Review Section */}
                    <QuizReview
                        questions={questions}
                        userAnswers={state.answers}
                        score={state.score}
                        flaggedQuestions={state.flagged}
                    />
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                    <Button variant="outline" onClick={() => {
                        resetQuiz();
                        // Extract phase again for retry
                        const phaseMatch = moduleId.match(/mod_([a-z]+)_/);
                        const phaseFallback = phaseMatch ? phaseMatch[1] : '';
                        generateModuleQuiz(moduleTitle, 25, phaseFallback, moduleId);
                    }}>
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Retry Quiz
                    </Button>
                </CardFooter>
            </Card>
        );
    }

    // --- QUIZ VIEW ---
    const currentQ = questions[state.currentQuestionIndex];
    const progressVal = ((state.currentQuestionIndex + 1) / questions.length) * 100;
    const selectedOption = state.answers[currentQ.id];
    const isFlagged = state.flagged.includes(currentQ.id);

    return (
        <Card className="w-full shadow-lg">
            <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="text-muted-foreground">
                        Question {state.currentQuestionIndex + 1} of {questions.length}
                    </Badge>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFlag(currentQ.id)}
                        className={isFlagged ? "text-orange-500 hover:text-orange-600 hover:bg-orange-50" : "text-muted-foreground"}
                    >
                        <Flag className={`h-4 w-4 mr-2 ${isFlagged ? "fill-orange-500" : ""}`} />
                        {isFlagged ? "Flagged" : "Flag for Review"}
                    </Button>
                </div>
                <Progress value={progressVal} className="h-2" />
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="min-h-[100px]">
                    <h3 className="text-lg font-semibold leading-relaxed">
                        {currentQ.question}
                    </h3>
                </div>

                <RadioGroup
                    key={currentQ.id}
                    value={selectedOption}
                    onValueChange={(val) => selectAnswer(currentQ.id, val as any)}
                    className="space-y-3"
                >
                    {(Object.keys(currentQ.options) as Array<keyof typeof currentQ.options>).map((key) => (
                        <div key={key} className={`flex items-center space-x-2 border p-4 rounded-lg transition-colors ${selectedOption === key ? 'border-primary bg-primary/5' : 'hover:bg-muted'}`}>
                            <RadioGroupItem value={key} id={`opt-${key}`} />
                            <Label htmlFor={`opt-${key}`} className="flex-grow cursor-pointer font-normal text-base">
                                <span className="font-semibold mr-2">{key})</span>
                                {currentQ.options[key]}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>

            <CardFooter className="flex justify-between pt-6 border-t bg-muted/20">
                <Button
                    variant="ghost"
                    onClick={prevQuestion}
                    disabled={state.currentQuestionIndex === 0}
                >
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                {state.currentQuestionIndex === questions.length - 1 ? (
                    <Button onClick={finishQuiz} disabled={!selectedOption}>
                        Finish Quiz <CheckCircle2 className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button onClick={nextQuestion} disabled={!selectedOption}>
                        Next Question <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
