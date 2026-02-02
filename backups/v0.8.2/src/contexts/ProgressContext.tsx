"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

// --- Types ---
export interface LessonProgress {
    completed: boolean;
    completedAt?: string; // ISO date string
    score?: number;       // For quizzes
    attempts?: number;    // For quizzes
}

export interface CategoryScore {
    score: number;
    totalQuestions: number;
    lastUpdated: string;
}

export interface ProgressState {
    lessons: { [lessonId: string]: LessonProgress };
    topics: { [topicId: string]: CategoryScore };
}

export type SyncStatus = 'idle' | 'saving' | 'synced' | 'error';

interface ProgressContextType {
    progress: ProgressState;
    syncStatus: SyncStatus;
    lastSyncError: string | null;
    lastViewedLesson: string | null;
    markLessonComplete: (lessonId: string, score?: number) => void;
    updateTopicScore: (topicId: string, score: number, questionsCount: number) => void;
    updateLastViewed: (lessonId: string) => void;
    getLessonStatus: (lessonId: string) => LessonProgress | undefined;
    getChapterCompletion: (chapterId: string, totalModules: number) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// --- Provider ---
export function ProgressProvider({ children }: { children: React.ReactNode }) {
    const { user } = useAuth(); // Get user from AuthContext
    const [progress, setProgress] = useState<ProgressState>({ lessons: {}, topics: {} });
    const [lastViewedLesson, setLastViewed] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
    const [lastSyncError, setLastSyncError] = useState<string | null>(null);

    // Track loaded user to prevent reload loops
    const loadedUserIdRef = React.useRef<string | null>(null);

    // 1. Load Strategy: Cloud First -> Local Fallback
    useEffect(() => {
        async function loadProgress() {
            // Prevent reloading if we already loaded this user's data
            if (user?.id === loadedUserIdRef.current) return;

            try {
                // Determine source: Cloud or Local
                if (user) {
                    console.log("Loading progress for user:", user.id);
                    loadedUserIdRef.current = user.id; // Mark as loaded immediately to prevent race conditions

                    const { data, error } = await supabase
                        .from('user_progress')
                        .select('progress_data')
                        .eq('user_id', user.id)
                        .single();

                    if (data?.progress_data && Object.keys(data.progress_data.lessons || {}).length > 0) {
                        console.log("Cloud progress loaded (Found existing data).");
                        setProgress({
                            lessons: data.progress_data.lessons || {},
                            topics: data.progress_data.topics || {}
                        });
                    } else {
                        // Cloud is empty. Check for Local Guest Data to Migrate.
                        const savedProgress = localStorage.getItem("six_sigma_progress_v1");
                        if (savedProgress) {
                            console.log("Found local guest data. Migrating to Cloud...");
                            const parsed = JSON.parse(savedProgress);
                            // Set state with local data (this will trigger the saveToCloud effect automatically!)
                            setProgress({
                                lessons: parsed.lessons || {},
                                topics: parsed.topics || {}
                            });
                        } else {
                            console.log("No cloud or local data. Starting fresh.");
                            // If pure new user, keep empty state, but ensure structure
                            if (data?.progress_data) {
                                setProgress({
                                    lessons: data.progress_data.lessons || {},
                                    topics: data.progress_data.topics || {}
                                });
                            }
                        }
                    }
                } else {
                    // Guest Mode
                    loadedUserIdRef.current = null;
                    const savedProgress = localStorage.getItem("six_sigma_progress_v1");
                    if (savedProgress) {
                        const parsed = JSON.parse(savedProgress);
                        setProgress({
                            lessons: parsed.lessons || {},
                            topics: parsed.topics || {}
                        });
                    }
                }

                // Always load last viewed from local
                const savedLastViewed = localStorage.getItem("six_sigma_last_viewed");
                if (savedLastViewed) setLastViewed(savedLastViewed);

            } catch (error) {
                console.error("Failed to load progress:", error);
                loadedUserIdRef.current = null; // Reset on error so we can try again
            } finally {
                setIsLoaded(true);
            }
        }

        loadProgress();
    }, [user?.id]); // Only re-run if the USER ID changes, not the user object reference

    // 2. Save Strategy: Save to both (Cloud + Local)
    useEffect(() => {
        if (!isLoaded) return;

        // Save Local
        localStorage.setItem("six_sigma_progress_v1", JSON.stringify(progress));

        // Save Cloud (Debounced 2s to avoid spamming DB)
        const saveToCloud = async () => {
            if (user) {
                setSyncStatus('saving');
                setLastSyncError(null);

                try {
                    const { error } = await supabase
                        .from('user_progress')
                        .upsert(
                            { user_id: user.id, progress_data: progress, updated_at: new Date().toISOString() },
                            { onConflict: 'user_id' }
                        );

                    if (error) {
                        console.error("Cloud Save Failed:", error.message);
                        setSyncStatus('error');
                        setLastSyncError(error.message);
                    } else {
                        setSyncStatus('synced');
                        setTimeout(() => setSyncStatus('idle'), 3000);
                    }
                } catch (err: any) {
                    console.error("Unexpected Save Error:", err);
                    setSyncStatus('error');
                    setLastSyncError(err?.message || "Unknown Error");
                }
            }
        };

        const timeoutId = setTimeout(saveToCloud, 2000);
        return () => clearTimeout(timeoutId);

    }, [progress, isLoaded, user]);

    // Actions
    const markLessonComplete = (lessonId: string, score?: number) => {
        setProgress(prev => ({
            ...prev,
            lessons: {
                ...prev.lessons,
                [lessonId]: {
                    ...prev.lessons[lessonId],
                    completed: true,
                    completedAt: new Date().toISOString(),
                    score: score ?? prev.lessons[lessonId]?.score,
                    attempts: (prev.lessons[lessonId]?.attempts || 0) + (score !== undefined ? 1 : 0)
                }
            }
        }));
    };

    const updateTopicScore = (topicId: string, score: number, questionsCount: number) => {
        setProgress(prev => {
            return {
                ...prev,
                topics: {
                    ...prev.topics,
                    [topicId]: {
                        score: score,
                        totalQuestions: questionsCount,
                        lastUpdated: new Date().toISOString()
                    }
                }
            };
        });
    };

    const updateLastViewed = (lessonId: string) => {
        setLastViewed(lessonId);
    };

    const getLessonStatus = (lessonId: string) => {
        return progress?.lessons?.[lessonId];
    };

    const getChapterCompletion = (chapterId: string, totalModules: number) => {
        return 0;
    };

    return (
        <ProgressContext.Provider value={{
            progress,
            syncStatus,
            lastSyncError,
            lastViewedLesson,
            markLessonComplete,
            updateTopicScore,
            updateLastViewed,
            getLessonStatus,
            getChapterCompletion
        }}>
            {children}
        </ProgressContext.Provider>
    );
}

// --- Hook ---
export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error("useProgress must be used within a ProgressProvider");
    }
    return context;
}
