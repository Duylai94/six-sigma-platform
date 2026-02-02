"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, HelpCircle, Lightbulb, Trophy } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface QuizRunnerProps {
    questions: QuizQuestion[];
    onComplete?: (score: number, total: number) => void;
}

export function QuizRunner({ questions, onComplete }: QuizRunnerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const [hintLevel, setHintLevel] = useState<"none" | "basic" | "intermediate" | "expert">("none");

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    const handleSelect = (value: string) => {
        if (isAnswered) return;
        setSelectedOption(parseInt(value));
    };

    const handleCheck = () => {
        if (selectedOption === null) return;

        const correct = selectedOption === currentQuestion.correct_index;
        setIsCorrect(correct);
        setIsAnswered(true);

        if (correct) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(false);
            setHintLevel("none");
        } else {
            if (onComplete) onComplete(score, questions.length);
            setCurrentIndex(prev => prev + 1); // Move to completion state
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setIsCorrect(false);
        setHintLevel("none");
    };

    const showHint = () => {
        if (hintLevel === "none") setHintLevel("basic");
        else if (hintLevel === "basic") setHintLevel("intermediate");
        else if (hintLevel === "intermediate") setHintLevel("expert");
    };

    if (!currentQuestion) {
        const percentage = Math.round((score / questions.length) * 100);
        let message = "Good effort!";
        if (percentage >= 80) message = "Excellent! You have mastered this module.";
        else if (percentage >= 60) message = "Good job! Keep practicing.";
        else message = "Review the material and try again.";

        return (
            <Card className="max-w-md mx-auto text-center py-10">
                <CardContent className="space-y-6">
                    <Trophy className="h-20 w-20 mx-auto text-yellow-500 mb-4" />
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Quiz Completed!</h2>
                        <p className="text-muted-foreground text-lg">{message}</p>
                    </div>

                    <div className="py-6">
                        <div className="text-5xl font-bold text-primary mb-2">{percentage}%</div>
                        <p className="text-sm text-foreground/70">
                            You scored {score} out of {questions.length}
                        </p>
                    </div>

                    <Button onClick={handleRestart} size="lg" className="w-full">
                        Try Again
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-sm text-foreground/80">
                <span>Question {currentIndex + 1} of {questions.length}</span>
                <span>Score: {score}</span>
            </div>
            <Progress value={progress} className="h-2" />

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-xl font-medium leading-relaxed">
                            {currentQuestion.stem_en}
                        </CardTitle>
                        <Badge variant={currentQuestion.difficulty_en === "Exam-level" ? "default" : "destructive"}>
                            {currentQuestion.difficulty_en}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <RadioGroup
                        value={selectedOption?.toString()}
                        onValueChange={handleSelect}
                        className="space-y-3"
                    >
                        {currentQuestion.options_en.map((option, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center space-x-2 border p-4 rounded-lg cursor-pointer transition-colors
                  ${isAnswered && idx === currentQuestion.correct_index ? "bg-green-500/10 border-green-500" : ""}
                  ${isAnswered && selectedOption === idx && idx !== currentQuestion.correct_index ? "bg-red-500/10 border-red-500" : ""}
                  ${!isAnswered && selectedOption === idx ? "bg-accent border-accent-foreground" : "hover:bg-accent/50"}
                `}
                                onClick={() => handleSelect(idx.toString())}
                            >
                                <RadioGroupItem value={idx.toString()} id={`opt-${idx}`} className="sr-only" />
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 shrink-0
                   ${selectedOption === idx ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"}
                `}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <Label htmlFor={`opt-${idx}`} className="flex-1 cursor-pointer font-normal text-base leading-relaxed">
                                    {option}
                                </Label>

                                {isAnswered && idx === currentQuestion.correct_index && (
                                    <CheckCircle2 className="text-green-600 h-5 w-5 ml-2" />
                                )}
                                {isAnswered && selectedOption === idx && idx !== currentQuestion.correct_index && (
                                    <AlertCircle className="text-red-600 h-5 w-5 ml-2" />
                                )}
                            </div>
                        ))}
                    </RadioGroup>

                    {/* Hint Area */}
                    {(hintLevel !== "none") && (
                        <Alert className="bg-yellow-500/5 border-yellow-500/50">
                            <Lightbulb className="h-4 w-4 text-yellow-600" />
                            <AlertTitle className="text-yellow-700">Hint ({hintLevel})</AlertTitle>
                            <AlertDescription className="text-yellow-800/90 italic mt-1">
                                {hintLevel === "basic" && currentQuestion.hint_levels?.basic}
                                {hintLevel === "intermediate" && currentQuestion.hint_levels?.intermediate}
                                {hintLevel === "expert" && currentQuestion.hint_levels?.expert}
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Explanation / Result */}
                    {isAnswered && (
                        <Alert className={isCorrect ? "bg-green-500/10 border-green-500/50" : "bg-red-500/10 border-red-500/50"}>
                            {isCorrect ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <AlertCircle className="h-4 w-4 text-red-600" />}
                            <AlertTitle className={isCorrect ? "text-green-700" : "text-red-700"}>
                                {isCorrect ? "Correct!" : "Incorrect"}
                            </AlertTitle>
                            <AlertDescription className="mt-2 text-foreground/90">
                                <span className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1 block">Explanation (Vietnamese)</span>
                                {currentQuestion.explanation_vi}
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6 bg-muted/10">
                    {!isAnswered ? (
                        <>
                            <Button variant="ghost" onClick={showHint} disabled={hintLevel === "expert"} className="text-muted-foreground hover:text-yellow-600">
                                <HelpCircle className="h-4 w-4 mr-2" />
                                {hintLevel === "none" ? "Need a Hint?" : "Next Hint"}
                            </Button>
                            <Button onClick={handleCheck} disabled={selectedOption === null} size="lg">Submit Answer</Button>
                        </>
                    ) : (
                        <Button onClick={handleNext} className="w-full" size="lg">
                            {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                        </Button>
                    )}
                </CardFooter>
            </Card>

            {/* Mapping Info */}
            <div className="text-center text-xs text-muted-foreground">
                Mapped to: {currentQuestion.iassc_mapping_en.join(", ")}
            </div>
        </div>
    );
}
