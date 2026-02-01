"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { iasscGreenBeltCourse } from "@/data/course_content";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Code, Trophy, Activity, FileText } from "lucide-react";
import { PythonEditor } from "@/components/PythonEditor";
import { ChapterQuiz } from "@/components/quiz/ChapterQuiz";
import { useAITutor } from "@/contexts/AITutorContext";
import { FormattedText } from "@/components/FormattedText";
import { LessonCompletion, getNextModuleId } from "@/components/layout/LessonCompletion";
import { useLanguage } from "@/contexts/LanguageContext";
import { UI_STRINGS } from "@/data/i18n";

export default function ModulePage() {
    const params = useParams();
    const [moduleId, setModuleId] = useState<string>("");
    const router = useRouter();
    const { language, toggleLanguage } = useLanguage();
    const { sendQuestion, setModuleContext } = useAITutor();
    const ui = UI_STRINGS;

    useEffect(() => {
        if (params?.moduleId) {
            setModuleId(Array.isArray(params.moduleId) ? params.moduleId[0] : params.moduleId);
        }
    }, [params]);

    // Find the module using useMemo to avoid recalculation
    const { currentModule, currentChapter } = React.useMemo(() => {
        for (const chapter of iasscGreenBeltCourse.chapters) {
            const mod = chapter.modules.find(m => m.id === moduleId);
            if (mod) {
                return { currentModule: mod, currentChapter: chapter };
            }
        }
        return { currentModule: null, currentChapter: null };
    }, [moduleId]);

    // Update AI Tutor context when module changes (MUST be before early returns)
    useEffect(() => {
        if (currentModule && currentChapter) {
            setModuleContext(`Chapter: ${currentChapter.title_en}\nModule: ${currentModule.title_en}\nSummary: ${currentModule.summary_vi}`);
        }
    }, [currentModule, currentChapter, setModuleContext]);

    if (!moduleId) return <div className="p-10 text-center">Loading module...</div>;
    if (!currentModule) return <div className="p-10 text-center text-red-500">Module not found!</div>;


    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Top Bar */}
            <header className="border-b px-6 py-4 flex items-center gap-4 bg-muted/20">
                <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        {currentChapter?.title_en}
                    </div>
                    <h1 className="text-xl font-bold">{currentModule.title_en}</h1>
                </div>
                <div className="ml-auto flex gap-2 items-center">
                    <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2">
                        {language === 'vn' ? 'VN' : 'ENG'}
                    </Button>
                    <Badge variant="outline">{currentModule.estimated_time_minutes} min</Badge>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto max-w-6xl p-6 h-[calc(100vh-80px)]">
                <Tabs defaultValue="learn" className="h-full flex flex-col">
                    <TabsList className="inline-flex w-full md:w-auto h-auto p-1 mb-6 flex-wrap gap-2 bg-muted/50">
                        <TabsTrigger value="learn" className="flex-1 md:flex-none px-4"><BookOpen className="h-4 w-4 mr-2" /> {ui.module.detailed_explanation[language]}</TabsTrigger>
                        <TabsTrigger value="code" className="flex-1 md:flex-none px-4"><Code className="h-4 w-4 mr-2" /> {ui.module.python_focus[language]}</TabsTrigger>
                        {/* Quiz Tab Trigger - Only show if module has a quiz defined */}
                        {currentModule.quiz && (
                            <TabsTrigger value="quiz" className="flex-1 md:flex-none px-4"><Trophy className="h-4 w-4 mr-2" /> Quiz</TabsTrigger>
                        )}
                        {/* Optional Mini Project */}
                        <TabsTrigger value="project" disabled={!currentModule.mini_project} className="flex-1 md:flex-none px-4"><Activity className="h-4 w-4 mr-2" /> Project</TabsTrigger>
                    </TabsList>

                    {/* Tab: Theory */}
                    <TabsContent value="learn" className="flex-1 overflow-hidden">
                        <ScrollArea className="h-full pr-4">
                            <div className="max-w-3xl mx-auto space-y-8 pb-20">
                                {/* Summary */}
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">
                                            {language === 'vn' ? 'Tổng quan' : 'Summary'}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-lg">
                                            {language === 'vn' ? currentModule.summary_vi : (currentModule.summary_en || currentModule.summary_vi)}
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Explanation */}
                                <div className="prose dark:prose-invert max-w-none">
                                    <h3>{ui.module.detailed_explanation[language]}</h3>
                                    <FormattedText text={language === 'vn' ? currentModule.explanation_vi : (currentModule.explanation_en || currentModule.explanation_vi)} />
                                </div>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card>
                                        <CardHeader><CardTitle className="text-base">{ui.module.key_metrics[language]}</CardTitle></CardHeader>
                                        <CardContent>
                                            <ul className="list-disc ml-5 space-y-1">
                                                {currentModule.key_metrics_en.map((m, i) => <li key={i}>{m}</li>)}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader><CardTitle className="text-base">{ui.module.key_takeaways[language]}</CardTitle></CardHeader>
                                        <CardContent>
                                            <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                                                {currentModule.key_points_en.map((p, i) => <li key={i}>{p}</li>)}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Completion Section */}
                                <LessonCompletion
                                    moduleId={currentModule.id}
                                    nextModuleId={getNextModuleId(currentModule.id)}
                                />
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    {/* Tab: Code */}
                    <TabsContent value="code" className="flex-1 overflow-auto">
                        <ScrollArea className="h-full pr-4">
                            <div className="max-w-4xl mx-auto space-y-6 pb-20">
                                {/* Header */}
                                <div className="mb-4">
                                    <h2 className="text-lg font-semibold mb-2">Python Sandbox</h2>
                                    <p className="text-sm text-muted-foreground">
                                        {language === 'vn'
                                            ? `Sử dụng editor bên dưới để chạy ví dụ. ${currentModule.code_blocks.length} ví dụ có sẵn.`
                                            : `Use the editor below to run the examples. ${currentModule.code_blocks.length} examples available.`
                                        }
                                    </p>
                                </div>

                                {currentModule.code_blocks.length > 0 ? (
                                    <>
                                        {/* Concept Overview Panel */}
                                        {(currentModule.code_blocks[0].concept_explanation_en || currentModule.code_blocks[0].concept_explanation_vi) && (
                                            <Card className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 dark:from-purple-900/10 dark:to-indigo-900/10 border-purple-200 dark:border-purple-900/50">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-base flex items-center gap-2 text-purple-700 dark:text-purple-400">
                                                        📚 {language === 'vn' ? 'Tổng quan Khái niệm' : 'Concept Overview'}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                                                        <FormattedText text={language === 'vn'
                                                            ? (currentModule.code_blocks[0].concept_explanation_vi || currentModule.code_blocks[0].concept_explanation_en || '')
                                                            : (currentModule.code_blocks[0].concept_explanation_en || '')}
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Formula Breakdown */}
                                        {currentModule.code_blocks[0].formula_breakdown && (
                                            <Card className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 border-amber-200 dark:border-amber-900/50">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-base flex items-center gap-2 text-amber-700 dark:text-amber-400">
                                                        📐 {language === 'vn' ? 'Công thức' : 'Formula Breakdown'}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-3">
                                                    {/* Main Formula */}
                                                    <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border font-mono text-center text-lg">
                                                        {currentModule.code_blocks[0].formula_breakdown.formula}
                                                    </div>
                                                    {/* Variables Table */}
                                                    <div className="grid gap-2">
                                                        {currentModule.code_blocks[0].formula_breakdown.variables.map((v, i) => (
                                                            <div key={i} className="flex items-start gap-3 text-sm bg-white/50 dark:bg-slate-800/50 rounded p-2">
                                                                <Badge variant="outline" className="font-mono shrink-0">{v.name}</Badge>
                                                                <span className="flex-1 text-muted-foreground">
                                                                    {language === 'vn' ? (v.description_vi || v.description_en) : v.description_en}
                                                                </span>
                                                                {v.example_value && (
                                                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded">
                                                                        {v.example_value}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Step-by-Step Walkthrough */}
                                        {(currentModule.code_blocks[0].step_by_step_en || currentModule.code_blocks[0].step_by_step_vi) && (
                                            <Card className="bg-gradient-to-r from-cyan-50/50 to-teal-50/50 dark:from-cyan-900/10 dark:to-teal-900/10 border-cyan-200 dark:border-cyan-900/50">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-base flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                                                        📋 {language === 'vn' ? 'Hướng dẫn Từng Bước' : 'Step-by-Step Walkthrough'}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-2">
                                                        {(language === 'vn'
                                                            ? (currentModule.code_blocks[0].step_by_step_vi || currentModule.code_blocks[0].step_by_step_en || [])
                                                            : (currentModule.code_blocks[0].step_by_step_en || [])
                                                        ).map((step, i) => (
                                                            <div key={i} className="text-sm text-foreground/80 leading-relaxed">
                                                                <FormattedText text={step} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Original Context Cards (Kept for backwards compatibility) */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            {/* English Context - Only if available */}
                                            {currentModule.code_blocks[0].context_en && (
                                                <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/50">
                                                    <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                                                        <span>🇬🇧</span> Situation & Math
                                                    </h3>
                                                    <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                                                        {currentModule.code_blocks[0].context_en}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Vietnamese Explanation - Always show */}
                                            <div className="p-4 bg-green-50/50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/50">
                                                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                                                    <span>🇻🇳</span> Giải thích Code
                                                </h3>
                                                <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">
                                                    {currentModule.code_blocks[0].description_vi || "Không có giải thích chi tiết."}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Python Editor */}
                                        <PythonEditor
                                            initialCode={currentModule.code_blocks[0].code_template}
                                        />
                                        <div className="text-xs text-muted-foreground">
                                            <strong>{language === 'vn' ? 'Kết quả mong đợi:' : 'Expected Output:'}</strong> {currentModule.code_blocks[0].expected_output_en}
                                        </div>

                                        {/* AI Tutor Suggestions */}
                                        {currentModule.code_blocks[0].ai_tutor_prompts && currentModule.code_blocks[0].ai_tutor_prompts.length > 0 && (
                                            <Card className="bg-gradient-to-r from-rose-50/50 to-pink-50/50 dark:from-rose-900/10 dark:to-pink-900/10 border-rose-200 dark:border-rose-900/50">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-base flex items-center gap-2 text-rose-700 dark:text-rose-400">
                                                        🤖 {language === 'vn' ? 'Hỏi AI Tutor' : 'Ask AI Tutor'}
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {language === 'vn' ? 'Nhấn vào câu hỏi để hỏi AI Tutor' : 'Click a question to ask the AI Tutor'}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex flex-wrap gap-2">
                                                        {currentModule.code_blocks[0].ai_tutor_prompts.map((prompt, i) => (
                                                            <Badge
                                                                key={i}
                                                                variant="secondary"
                                                                className="cursor-pointer hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors active:scale-95"
                                                                onClick={() => sendQuestion(prompt)}
                                                            >
                                                                {prompt}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Challenges Section */}
                                        {currentModule.code_blocks[0].challenges && currentModule.code_blocks[0].challenges.length > 0 && (
                                            <Card className="bg-gradient-to-r from-emerald-50/50 to-green-50/50 dark:from-emerald-900/10 dark:to-green-900/10 border-emerald-200 dark:border-emerald-900/50">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-base flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                                                        🎯 {language === 'vn' ? 'Thử thách' : 'Challenge'}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    {currentModule.code_blocks[0].challenges.map((challenge, i) => (
                                                        <div key={challenge.id} className="space-y-2">
                                                            <p className="text-sm font-medium">
                                                                {language === 'vn' ? (challenge.prompt_vi || challenge.prompt_en) : challenge.prompt_en}
                                                            </p>
                                                            {(challenge.hint_en || challenge.hint_vi) && (
                                                                <details className="text-xs">
                                                                    <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                                                                        💡 {language === 'vn' ? 'Xem gợi ý' : 'Show hint'}
                                                                    </summary>
                                                                    <div className="mt-1 p-2 bg-muted/50 rounded text-muted-foreground">
                                                                        {language === 'vn' ? (challenge.hint_vi || challenge.hint_en) : challenge.hint_en}
                                                                    </div>
                                                                </details>
                                                            )}
                                                        </div>
                                                    ))}
                                                </CardContent>
                                            </Card>
                                        )}
                                    </>
                                ) : (
                                    <div className="flex items-center justify-center h-48 border rounded-lg bg-muted/10">
                                        <p>{language === 'vn' ? 'Không có ví dụ code cho bài học này.' : 'No code examples for this module.'}</p>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    {/* Tab: Quiz */}
                    {currentModule.quiz && (
                        <TabsContent value="quiz" className="flex-1 overflow-auto">
                            <div className="max-w-2xl mx-auto py-6">
                                <h2 className="text-2xl font-bold mb-6 text-center">{ui.module.take_quiz[language]}</h2>
                                <ChapterQuiz moduleId={currentModule.id} moduleTitle={currentModule.title_en} />
                            </div>
                        </TabsContent>
                    )}

                    {/* Tab: Project */}
                    <TabsContent value="project" className="flex-1 overflow-auto">
                        {currentModule.mini_project && (
                            <div className="max-w-3xl mx-auto space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{currentModule.mini_project.title_en}</CardTitle>
                                        <CardDescription>{language === 'vn' ? currentModule.mini_project.scenario_vi : (currentModule.mini_project.scenario_en || currentModule.mini_project.scenario_vi)}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold mb-2">Tasks:</h3>
                                            <ul className="list-decimal ml-5 space-y-1">
                                                {currentModule.mini_project.tasks_en.map((t, i) => <li key={i}>{t}</li>)}
                                            </ul>
                                        </div>
                                        <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                                            {currentModule.mini_project.code_skeleton}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
