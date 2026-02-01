"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlashcardProps {
    index: number;
    question: string;
    answer: string;
    difficulty?: string;
    aiTutorAvailable?: boolean;
    onExplain?: () => void;
    language: 'vn' | 'en';
}

export function Flashcard({
    index,
    question,
    answer,
    difficulty,
    aiTutorAvailable,
    onExplain,
    language
}: FlashcardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group h-[300px] w-full [perspective:1000px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={cn(
                    "relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]",
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                )}
            >
                {/* Front Face (Question) */}
                <Card className="absolute h-full w-full [backface-visibility:hidden] flex flex-col border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all">
                    <CardHeader className="pb-2 flex-none">
                        <div className="flex justify-between items-start">
                            <Badge variant="outline" className="mb-2">Card #{index + 1}</Badge>
                            {difficulty && (
                                <Badge variant={difficulty === 'Easy' ? 'secondary' : difficulty === 'Hard' ? 'destructive' : 'default'} className="text-xs">
                                    {difficulty}
                                </Badge>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-center items-center text-center p-6">
                        <CardTitle className="text-xl font-medium leading-relaxed">
                            {question}
                        </CardTitle>
                        <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2 animate-pulse">
                            <RotateCw className="h-3 w-3" />
                            {language === 'vn' ? 'Nhấn để xem đáp án' : 'Click to flip'}
                        </p>
                    </CardContent>
                </Card>

                {/* Back Face (Answer) */}
                <Card className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col border-primary/20 bg-primary/5">
                    <CardHeader className="pb-2 flex-none opacity-0">
                        {/* Hidden header to maintain spacing consistency if needed, or just remove */}
                        <div className="flex justify-between items-start"><Badge variant="outline">Card #{index + 1}</Badge></div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-card rounded-xl m-[1px]">
                        <p className="font-semibold text-primary mb-3">
                            {language === 'vn' ? 'Đáp án:' : 'Answer:'}
                        </p>
                        <p className="text-lg leading-relaxed">
                            {answer}
                        </p>

                        {aiTutorAvailable && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="mt-6 text-xs text-muted-foreground hover:text-primary gap-1 z-10"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent flipping back when clicking the button
                                    onExplain?.();
                                }}
                            >
                                <Activity className="h-3 w-3" />
                                {language === 'vn' ? 'Giải thích thêm' : 'Explain Concept'}
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
