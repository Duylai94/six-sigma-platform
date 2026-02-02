import React, { useEffect, useState } from 'react';
import { useMockExamGenerator } from '@/hooks/useMockExamGenerator';
import { useQuizState } from '@/hooks/useQuizState';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Timer, ChevronRight, ChevronLeft, Flag } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';

export const MockExamComponent: React.FC = () => {
    const { generateExam, examQuestions, isGenerating } = useMockExamGenerator();
    // We use a fixed ID 'mock-exam-v1' for the state
    const {
        state,
        selectAnswer,
        nextQuestion,
        prevQuestion,
        jumpToQuestion,
        finishQuiz,
        resetQuiz
    } = useQuizState('mock-exam-v1', examQuestions);

    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 Hours in seconds

    // Start Exam on Mount
    useEffect(() => {
        if (examQuestions.length === 0 && !isGenerating) {
            generateExam();
        }
    }, [generateExam, examQuestions.length, isGenerating]);

    // Timer Logic
    useEffect(() => {
        if (state.isComplete) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    finishQuiz(); // Auto-submit
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [state.isComplete, finishQuiz]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    if (isGenerating || examQuestions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <h2 className="text-xl font-semibold">Generating IASSC Mock Exam...</h2>
                <p className="text-muted-foreground">Selecting 100 random questions matched to the Body of Knowledge.</p>
            </div>
        );
    }

    // --- RESULTS VIEW ---
    if (state.isComplete) {
        const isPass = state.score >= 70; // IASSC Pass is typically 70% (385/550 roughly 70%)
        return (
            <div className="max-w-4xl mx-auto p-4 space-y-6">
                <Card className="w-full border-2 border-primary/20">
                    <CardHeader className="text-center bg-muted/10 pb-8">
                        <CardTitle className="text-3xl mb-2">Exam Results</CardTitle>
                        <div className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${isPass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {isPass ? 'PASSED' : 'FAILED'}
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center -mt-6">
                        <div className="bg-background p-2 rounded-full shadow-lg">
                            <div className={`w-32 h-32 rounded-full flex items-center justify-center border-8 ${isPass ? 'border-green-500' : 'border-red-500'}`}>
                                <span className="text-5xl font-bold">{state.score}%</span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="p-4 bg-muted rounded-lg text-center">
                                <p className="text-sm text-muted-foreground">Total Time</p>
                                <p className="text-xl font-semibold">{formatTime(3 * 60 * 60 - timeLeft)}</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg text-center">
                                <p className="text-sm text-muted-foreground">Correct Answers</p>
                                <p className="text-xl font-semibold">{Math.round((state.score / 100) * 100)} / 100</p>
                            </div>
                        </div>

                        <Button className="mt-8 w-full md:w-auto" onClick={() => {
                            resetQuiz();
                            generateExam();
                        }}>
                            Take New Exam
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // --- EXAM INTERFACE ---
    const currentQ = examQuestions[state.currentQuestionIndex];
    const selectedOption = state.answers[currentQ.id];

    return (
        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4 h-[calc(100vh-100px)]">
            {/* LEFT: Navigation Sidebar */}
            <Card className="hidden md:flex flex-col w-64 h-full">
                <CardHeader>
                    <CardTitle className="text-sm uppercase tracking-wide text-muted-foreground">Question Navigator</CardTitle>
                    <div className="flex items-center gap-2 text-xl font-mono font-bold text-primary">
                        <Timer className="h-5 w-5" />
                        {formatTime(timeLeft)}
                    </div>
                </CardHeader>
                <div className="flex-grow overflow-y-auto px-4 min-h-0">
                    <div className="grid grid-cols-4 gap-2 pb-4">
                        {examQuestions.map((_, idx) => {
                            const isActive = idx === state.currentQuestionIndex;
                            const isAnswered = !!state.answers[examQuestions[idx].id];
                            return (
                                <button
                                    key={idx}
                                    onClick={() => jumpToQuestion(idx)}
                                    className={`
                    h-8 w-8 text-xs rounded-md flex items-center justify-center transition-all
                    ${isActive ? 'bg-primary text-primary-foreground ring-2 ring-offset-1 ring-primary' : ''}
                    ${!isActive && isAnswered ? 'bg-primary/20 text-primary' : ''}
                    ${!isActive && !isAnswered ? 'bg-muted text-muted-foreground hover:bg-muted/80' : ''}
                  `}
                                >
                                    {idx + 1}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="p-4 text-xs text-center text-muted-foreground border-t">
                    {Object.keys(state.answers).length} / 100 Answered
                </div>
            </Card>

            {/* RIGHT: Main Question Area */}
            <Card className="flex-1 flex flex-col h-full shadow-lg">
                <CardHeader className="flex-none pb-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <Badge variant="secondary" className="mb-2">{currentQ.phase.toUpperCase()} PHASE</Badge>
                            <div className="text-sm text-muted-foreground">Question {state.currentQuestionIndex + 1} of 100</div>
                        </div>
                        {/* Mobile Timer Display */}
                        <div className="md:hidden font-mono font-bold">{formatTime(timeLeft)}</div>
                    </div>
                    <Progress value={((state.currentQuestionIndex + 1) / 100) * 100} className="h-1 mt-2" />
                </CardHeader>

                <CardContent className="flex-grow overflow-y-auto py-6">
                    <div className="prose dark:prose-invert max-w-none">
                        <h3 className="text-xl font-medium mb-8 leading-snug">{currentQ.question}</h3>

                        <RadioGroup
                            key={currentQ.id}
                            value={selectedOption}
                            onValueChange={(val) => selectAnswer(currentQ.id, val as any)}
                            className="space-y-4"
                        >
                            {(Object.keys(currentQ.options) as Array<keyof typeof currentQ.options>).map((key) => (
                                <div key={key} className={`flex items-start space-x-3 border p-4 rounded-xl transition-all ${selectedOption === key ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-muted/50'}`}>
                                    <RadioGroupItem value={key} id={`q-${currentQ.id}-${key}`} className="mt-1" />
                                    <Label htmlFor={`q-${currentQ.id}-${key}`} className="flex-grow cursor-pointer text-base font-normal leading-relaxed">
                                        <span className="font-semibold text-foreground mr-2">{key})</span>
                                        {currentQ.options[key]}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </CardContent>

                <CardFooter className="flex-none border-t bg-muted/10 p-4 flex justify-between">
                    <Button
                        variant="outline"
                        onClick={prevQuestion}
                        disabled={state.currentQuestionIndex === 0}
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                    </Button>

                    <div className="flex gap-2">
                        {/* Flag for Review Logic could go here */}
                        {state.currentQuestionIndex === 100 - 1 ? (
                            <Button onClick={finishQuiz} variant="default" size="lg">
                                Submit Exam <CheckCircle2 className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button onClick={nextQuestion} disabled={!selectedOption}>
                                Next <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};
