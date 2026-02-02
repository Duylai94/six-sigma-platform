"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, XCircle, ChevronDown, ChevronRight, Flag } from "lucide-react";
import { RenderedQuestion, OptionID } from "@/types/quiz.types";


interface QuizState {
    answers: Record<string, string>; // questionId -> selectedOptionKey
    score: number;
    currentQuestionIndex: number;
    isComplete: boolean;
}

interface QuizReviewProps {
    questions: RenderedQuestion[];
    userAnswers: Record<string, OptionID>;
    score: number;
    flaggedQuestions?: string[];
}



export function QuizReview({ questions, userAnswers, score, flaggedQuestions = [] }: QuizReviewProps) {
    const [expandedQuestion, setExpandedQuestion] = React.useState<string | null>(null);

    return (
        <div className="space-y-6 w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm uppercase text-muted-foreground font-semibold">Overall Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">{score}%</div>
                        <p className="text-sm text-muted-foreground mt-1">
                            {score >= 80 ? "Excellent Mastery!" : "Keep practicing to improve."}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm uppercase text-muted-foreground font-semibold">Performance Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <div className="flex justify-between text-sm">
                            <span>Questions Answered:</span>
                            <span className="font-medium">{Object.keys(userAnswers).length} / {questions.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Questions Correct:</span>
                            <span className="font-medium text-green-600">
                                {questions.filter(q => userAnswers[q.id] === q.correctAnswer).length}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <h3 className="text-lg font-semibold border-b pb-2">Detailed Answer Review</h3>

            <div className="space-y-3">
                {questions.map((q, index) => {
                    const userAnswer = userAnswers[q.id];
                    const isCorrect = userAnswer === q.correctAnswer;
                    const isExpanded = expandedQuestion === q.id;

                    return (
                        <Card
                            key={q.id}
                            className={`cursor-pointer transition-colors hover:bg-accent/30 ${isCorrect ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-red-500'}`}
                            onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
                        >
                            <div className="p-4 flex gap-4 items-start">
                                <div className="mt-1">
                                    {isCorrect ? (
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    ) : (
                                        <XCircle className="h-5 w-5 text-red-600" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium text-sm leading-relaxed pr-8">
                                            {index + 1}. {q.question}
                                            {flaggedQuestions.includes(q.id) && (
                                                <Flag className="inline-block h-3 w-3 text-orange-500 ml-2 mb-0.5 fill-orange-500" />
                                            )}
                                        </h4>
                                        {isExpanded ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                                    </div>

                                    {!isCorrect && (
                                        <p className="text-xs text-red-600 mt-1 font-medium">
                                            Your Answer: {userAnswer && q.options[userAnswer as OptionID]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Expanded Details */}
                            {isExpanded && (
                                <div className="px-4 pb-4 pl-14 text-sm space-y-3 border-t bg-muted/20 pt-3">
                                    <div className="grid gap-2">
                                        <div className="p-2 rounded bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30">
                                            <span className="font-semibold text-green-700 dark:text-green-400 block text-xs mb-1">CORRECT ANSWER</span>
                                            {q.options[q.correctAnswer]}
                                        </div>

                                        <div className="mt-2">
                                            <span className="font-semibold text-muted-foreground block text-xs mb-1">EXPLANATION</span>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {q.explanation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
