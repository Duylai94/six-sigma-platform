"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProgress } from "@/contexts/ProgressContext";
import { iasscGreenBeltCourse } from "@/data/course_content";
import { cn } from "@/lib/utils";
import { AlertCircle, BookOpen, CheckCircle2, ChevronDown, ChevronRight, Circle, Cloud, CloudOff, LayoutDashboard, LogIn, LogOut, Menu, RefreshCw, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface SidebarProps {
    className?: string;
}

export function CourseSidebar({ className }: SidebarProps) {
    const { language } = useLanguage();
    const { getLessonStatus, syncStatus, lastSyncError } = useProgress();
    const { user, signOut } = useAuth();
    const pathname = usePathname();
    const [expandedChapters, setExpandedChapters] = useState<string[]>([]);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleChapter = (chapterId: string) => {
        setExpandedChapters(prev =>
            prev.includes(chapterId)
                ? prev.filter(id => id !== chapterId)
                : [...prev, chapterId]
        );
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-border/40">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <Trophy className="h-6 w-6" />
                    <span>Six Sigma GB</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <ScrollArea className="flex-1 py-4">
                <div className="px-4 space-y-6">
                    {/* Dashboard Link */}
                    <Link href="/dashboard">
                        <Button variant={pathname === "/dashboard" ? "secondary" : "ghost"} className="w-full justify-start gap-3">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Button>
                    </Link>

                    {/* Chapters List */}
                    <div className="space-y-1">
                        <div className="px-2 mb-2 mt-4">
                            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Curriculum</h3>
                        </div>
                        {iasscGreenBeltCourse.chapters.map((chapter) => {
                            const isExpanded = expandedChapters.includes(chapter.id);
                            const completedCount = chapter.modules.filter(m => getLessonStatus(m.id)?.completed).length;
                            const totalCount = chapter.modules.length;
                            const isChapterComplete = completedCount === totalCount && totalCount > 0;

                            return (
                                <div key={chapter.id} className="px-1">
                                    <button
                                        onClick={() => toggleChapter(chapter.id)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-2 rounded-md text-sm font-medium hover:bg-accent transition-colors",
                                            isExpanded ? "bg-accent/50" : ""
                                        )}
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            {isChapterComplete ? (
                                                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                                            ) : (
                                                <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30 shrink-0 flex items-center justify-center text-[10px]">
                                                    {chapter.order}
                                                </div>
                                            )}
                                            <span className="line-clamp-1 text-left leading-tight">{chapter.title_en}</span>
                                        </div>
                                        {isExpanded ? (
                                            <ChevronDown className="h-3 w-3 opacity-50" />
                                        ) : (
                                            <ChevronRight className="h-3 w-3 opacity-50" />
                                        )}
                                    </button>

                                    {isExpanded && (
                                        <div className="ml-4 mt-1 border-l-2 border-muted pl-2 space-y-1">
                                            {chapter.modules.map((module) => {
                                                const status = getLessonStatus(module.id);
                                                const isActive = pathname === `/learn/${module.id}`;

                                                return (
                                                    <Link
                                                        key={module.id}
                                                        href={`/learn/${module.id}`}
                                                        className={cn(
                                                            "flex items-start gap-2 p-2 rounded-md text-sm transition-colors hover:text-primary",
                                                            isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground",
                                                            status?.completed ? "text-foreground" : ""
                                                        )}
                                                    >
                                                        {status?.completed ? (
                                                            <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600 shrink-0" />
                                                        ) : (
                                                            <Circle className="h-3 w-3 mt-0.5 shrink-0" />
                                                        )}
                                                        <span className="line-clamp-2">{module.title_en}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ScrollArea>

            {/* Sync Status / Footer */}
            {user && (
                <div className="p-4 border-t border-border/40 bg-muted/20 mt-auto">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-foreground truncate max-w-[140px]" title={user.email}>{user.email}</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:text-destructive shrink-0" onClick={signOut}>
                                <LogOut className="h-3 w-3" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 mt-1 bg-background/50 p-1.5 rounded-md">
                            <span className={cn(
                                "flex items-center gap-1.5 text-[10px] transition-colors",
                                syncStatus === 'synced' ? "text-green-600 font-medium" : "",
                                syncStatus === 'saving' ? "text-blue-500 animate-pulse" : "",
                                syncStatus === 'error' ? "text-red-500 font-bold" : ""
                            )}>
                                {syncStatus === 'saving' && <RefreshCw className="h-3 w-3 animate-spin" />}
                                {syncStatus === 'synced' && <CheckCircle2 className="h-3 w-3" />}
                                {syncStatus === 'error' && <AlertCircle className="h-3 w-3" />}

                                {syncStatus === 'idle' && "Cloud Sync Active"}
                                {syncStatus === 'saving' && "Saving..."}
                                {syncStatus === 'synced' && "Saved"}
                                {syncStatus === 'error' && "Sync Failed"}
                            </span>
                        </div>
                        {syncStatus === 'error' && lastSyncError && (
                            <span className="text-[10px] text-red-500 break-words leading-tight px-1">
                                {lastSyncError}
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* Guest User Footer */}
            {!user && (
                <div className="p-4 border-t border-border/40 bg-muted/20 mt-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-medium text-foreground text-xs">Guest User</span>
                        <span className="text-[10px] text-muted-foreground">Progress saved locally</span>
                    </div>
                    <Link href="/">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:text-primary shrink-0" title="Sign In">
                            <LogIn className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className={cn("hidden lg:block w-72 border-r bg-background h-[calc(100vh-4rem)] sticky top-0", className)}>
                <SidebarContent />
            </div>

            {/* Mobile Sidebar (Sheet) */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger asChild>
                    {/* Only show this trigger if NOT using the top navbar trigger */}
                    <div className="hidden" />
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                    <SidebarContent />
                </SheetContent>
            </Sheet>
        </>
    );
}
export function MobileSidebarTrigger() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden shrink-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle course map</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
                <div className="h-full">
                    <CourseSidebar className="block w-full border-none h-full static" />
                </div>
            </SheetContent>
        </Sheet>
    );
}
