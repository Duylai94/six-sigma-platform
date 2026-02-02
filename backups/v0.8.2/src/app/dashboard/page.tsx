"use client";

import Link from "next/link";
import { iasscGreenBeltCourse } from "@/data/course_content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Code, Trophy, ArrowRight, Languages, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { UI_STRINGS } from "@/data/i18n";

import { useProgress } from "@/contexts/ProgressContext";
import { MobileSidebarTrigger } from "@/components/layout/CourseSidebar";
import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";

import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export default function DashboardPage() {
    // Safety Check for Configuration
    if (!isSupabaseConfigured) {
        return (
            <div className="p-10 flex flex-col items-center justify-center min-h-screen text-center space-y-4">
                <div className="text-red-500 text-5xl">⚠️</div>
                <h1 className="text-2xl font-bold">Configuration Error</h1>
                <p className="max-w-md text-muted-foreground">
                    The app is running with placeholder configuration. This means the Environment Variables were not detected during the build.
                </p>
                <div className="p-4 bg-muted rounded-md text-left text-sm font-mono">
                    <p>Current URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || "Using Placeholder"}</p>
                </div>
                <p className="font-semibold text-primary">Please Redeploy in Vercel.</p>
            </div>
        );
    }

    const course = iasscGreenBeltCourse;
    const { language, toggleLanguage } = useLanguage();
    const { getLessonStatus, progress } = useProgress();
    const ui = UI_STRINGS;

    // Analytics Data (Safe Mapping)
    const analyticsData = Object.entries(progress?.topics || {}).map(([topic, data]) => {
        if (!data) return null;
        const scoreData = data as { score: number; totalQuestions: number };
        return {
            topic: topic,
            label: topic.charAt(0).toUpperCase() + topic.slice(1),
            score: scoreData?.score || 0,
            questionsAttempted: scoreData?.totalQuestions || 0
        };
    }).filter((item): item is NonNullable<typeof item> => item !== null);

    // Calculate overall progress
    const allModules = course.chapters.flatMap(c => c.modules);
    const completedModules = allModules.filter(m => getLessonStatus(m.id)?.completed).length;
    const progressPercent = Math.round((completedModules / allModules.length) * 100);

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b bg-muted/40 p-4 md:p-6 sticky top-0 z-10 backdrop-blur-md bg-background/80">
                <div className="container mx-auto max-w-5xl flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                        {/* Mobile Sidebar Trigger */}
                        <MobileSidebarTrigger />

                        <div className="flex-1 min-w-0">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary break-words">{course.title_en}</h1>
                            {/* Progress Bar */}
                            <div className="mt-4 flex items-center gap-4">
                                <Progress value={progressPercent} className="h-2 flex-1" />
                                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{progressPercent}% {ui.dashboard.start_learning_btn[language] === "Start Learning" ? "Completed" : "Hoàn thành"}</span>
                            </div>

                            <p className="text-muted-foreground mt-4 max-w-2xl text-sm md:text-base hidden md:block">
                                {language === 'vn' ? course.description_vi : (course.description_en || course.description_vi)}
                            </p>


                        </div>
                    </div>

                    <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2 shrink-0">
                        <Languages className="size-4" />
                        {language === 'vn' ? 'VN' : 'ENG'}
                    </Button>
                </div>
            </header>

            <main className="container mx-auto max-w-5xl py-8 px-4">
                {/* Analytics Summary */}
                {analyticsData.length > 0 && (
                    <div className="mb-10">
                        <AnalyticsCard scores={analyticsData} />
                    </div>
                )}

                {/* Mock Exam Banner */}
                <Card className="mb-10 border-primary/20 bg-primary/5">
                    <div className="flex flex-col md:flex-row items-center p-6 gap-6">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-2">{ui.dashboard.exam_banner_title[language]}</h2>
                            <p className="text-muted-foreground">
                                {ui.dashboard.exam_banner_desc[language]}
                            </p>
                        </div>
                        <Link href="/mock-exam">
                            <Button size="lg" className="whitespace-nowrap">
                                <Trophy className="mr-2 h-5 w-5" />
                                {ui.dashboard.take_exam_btn[language]}
                            </Button>
                        </Link>
                    </div>
                </Card>

                <div className="grid gap-8">
                    {course.chapters.map((chapter) => (
                        <div key={chapter.id} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {chapter.order}
                                </div>
                                <h2 className="text-2xl font-semibold tracking-tight">{chapter.title_en}</h2>
                            </div>
                            <p className="text-muted-foreground ml-11 -mt-2 mb-4">
                                {language === 'vn' ? chapter.goal_vi : (chapter.goal_en || chapter.goal_vi)}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-11 auto-rows-fr">
                                {chapter.modules.map((module) => (
                                    <Card key={module.id} className={cn(
                                        "hover:shadow-md transition-shadow cursor-pointer border-l-4 group relative overflow-hidden flex flex-col min-h-[280px]",
                                        getLessonStatus(module.id)?.completed
                                            ? "border-l-green-500 bg-green-50/50"
                                            : "border-l-transparent hover:border-l-primary"
                                    )}>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <Badge variant={getLessonStatus(module.id)?.completed ? "success" : "outline"} className="mb-2">
                                                    {getLessonStatus(module.id)?.completed && <CheckCircle2 className="h-3 w-3 mr-1" />}
                                                    {ui.course.module[language]} {module.order}
                                                </Badge>
                                                <div className="flex gap-1 text-muted-foreground group-hover:text-primary transition-colors">
                                                    {module.code_blocks.length > 0 && <Code className="h-4 w-4" />}
                                                    {module.quiz && <Trophy className="h-4 w-4" />}
                                                </div>
                                            </div>
                                            <CardTitle className="leading-snug text-lg group-hover:text-primary transition-colors">
                                                {module.title_en}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1">
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {language === 'vn' ? module.summary_vi : (module.summary_en || module.summary_vi)}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="pt-0">
                                            <Link href={module.id === 'mod_final_exam' ? '/mock-exam' : `/learn/${module.id}`} className="w-full">
                                                <Button
                                                    variant={getLessonStatus(module.id)?.completed ? "outline" : "secondary"}
                                                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                                                >
                                                    {getLessonStatus(module.id)?.completed ? (
                                                        <span className="flex items-center text-green-600 group-hover:text-white">Completed <CheckCircle2 className="ml-2 h-4 w-4" /></span>
                                                    ) : (
                                                        <>
                                                            {ui.dashboard.start_learning_btn[language]}
                                                            <ArrowRight className="h-4 w-4" />
                                                        </>
                                                    )}
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
