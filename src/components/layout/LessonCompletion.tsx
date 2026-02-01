"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, RotateCw } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { iasscGreenBeltCourse } from "@/data/course_content";

interface LessonCompletionProps {
    moduleId: string;
    nextModuleId?: string;
    onComplete?: () => void;
}

export function LessonCompletion({ moduleId, nextModuleId, onComplete }: LessonCompletionProps) {
    const { getLessonStatus, markLessonComplete } = useProgress();
    const { language } = useLanguage();
    const router = useRouter();

    // Status
    const status = getLessonStatus(moduleId);
    const isCompleted = status?.completed;

    const handleComplete = () => {
        markLessonComplete(moduleId);
        if (onComplete) onComplete();
    };

    const handleNext = () => {
        if (!nextModuleId) {
            router.push("/dashboard");
            return;
        }
        router.push(`/learn/${nextModuleId}`);
    };

    return (
        <div className="mt-12 mb-8 p-6 bg-muted/30 rounded-lg border flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-2">
                {isCompleted
                    ? (language === 'vn' ? "Đã hoàn thành bài học!" : "Lesson Completed!")
                    : (language === 'vn' ? "Kết thúc bài học" : "End of Lesson")}
            </h3>

            <div className="max-w-md w-full space-y-4">
                {!isCompleted ? (
                    <Button
                        size="lg"
                        onClick={handleComplete}
                        className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white"
                    >
                        <CheckCircle2 className="h-5 w-5" />
                        {language === 'vn' ? "Đánh dấu đã hoàn thành" : "Mark as Complete"}
                    </Button>
                ) : (
                    <div className="bg-green-50 text-green-700 p-3 rounded-md flex items-center justify-center gap-2 mb-4">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="font-medium">
                            {language === 'vn' ? "Bạn đã hoàn thành bài học này" : "You have completed this lesson"}
                        </span>
                    </div>
                )}

                <div className="flex gap-3">
                    {/* Only show Next Lesson button if completed */}
                    {isCompleted && (
                        <Button
                            className="flex-1 gap-2"
                            onClick={handleNext}
                        >
                            {nextModuleId
                                ? (language === 'vn' ? "Bài tiếp theo" : "Next Lesson")
                                : (language === 'vn' ? "Về Dashboard" : "Back to Dashboard")}
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}

                    {/* Option to re-read if needed, or if completed show generic back */}
                </div>
            </div>
        </div>
    );
}

// Helper to find next module
export function getNextModuleId(currentId: string): string | undefined {
    // Flatten all modules
    const allModules = iasscGreenBeltCourse.chapters.flatMap(c => c.modules);
    const index = allModules.findIndex(m => m.id === currentId);

    if (index !== -1 && index < allModules.length - 1) {
        return allModules[index + 1].id;
    }
    return undefined; // Last module
}
