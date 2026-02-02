"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TopicScore {
    topic: string; // e.g., "Define", "Measure"
    label: string;
    score: number; // 0-100
    questionsAttempted: number;
}

interface AnalyticsCardProps {
    scores: TopicScore[];
}

import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnalyticsCard({ scores }: AnalyticsCardProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    if (!scores || scores.length === 0) {
        return null;
    }

    // Sort by weakness (lower score first) to highlight areas for improvement
    const sortedScores = [...scores].sort((a, b) => a.score - b.score);

    return (
        <Card className="h-full">
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                            Learning Analytics
                            <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Beta</span>
                        </CardTitle>
                        <CardDescription>Your mastery level by DMAIC phase.</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)}>
                        {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                    </Button>
                </div>
            </CardHeader>
            {!isCollapsed && (
                <CardContent className="space-y-5">
                    {sortedScores.map((item) => (
                        <div key={item.topic}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-sm">{item.label}</span>
                                <span className={`text-xs font-semibold ${item.score >= 80 ? "text-green-600" :
                                    item.score >= 60 ? "text-yellow-600" : "text-red-500"
                                    }`}>
                                    {item.score}%
                                    <span className="text-muted-foreground font-normal ml-1">
                                        ({item.score >= 80 ? "Mastered" : "Needs Review"})
                                    </span>
                                </span>
                            </div>
                            <Progress
                                value={item.score}
                                className={`h-2 ${item.score >= 80 ? "[&>div]:bg-green-600" :
                                    item.score >= 60 ? "[&>div]:bg-yellow-500" : "[&>div]:bg-red-500"
                                    }`}
                            />
                        </div>
                    ))}

                    <div className="pt-4 border-t">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Recommendation</h4>
                        <p className="text-sm">
                            {sortedScores[0].score < 80 ? (
                                <>
                                    Focus your study on the <strong>{sortedScores[0].label}</strong> phase.
                                    Review the concepts and retake the quizzes to improve.
                                </>
                            ) : (
                                "You are demonstrating strong knowledge across all active topics. Keep pushing!"
                            )}
                        </p>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}
