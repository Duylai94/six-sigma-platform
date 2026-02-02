import { Chapter, Module } from "../types/course";
import { chapterFoundations } from "./chapters/chapter1";
import { chapterDefine } from "./chapters/chapter2";
// Import other chapters as needed

// 1. Define the metadata shape
export interface LessonMetadata {
    id: string;               // Module ID (e.g., "mod_foundations_01")
    display_id: string;       // Human readable (e.g., "1.1")
    title_en: string;
    summary_en: string;
    key_points_en: string[];
    key_metrics_en: string[]; // Important for lookup
    chapter_id: string;
    chapter_title_en: string;
}

// 2. Aggregation Helper
const getAllChapters = (): Chapter[] => {
    return [
        chapterFoundations,
        chapterDefine,
        // Add others as we expand references
    ];
};

// 3. Build the Registry
const buildLessonRegistry = (): Record<string, LessonMetadata> => {
    const registry: Record<string, LessonMetadata> = {};
    const chapters = getAllChapters();

    chapters.forEach((chapter) => {
        chapter.modules.forEach((module) => {
            const display_id = `${chapter.order}.${module.order}`;

            registry[module.id] = {
                id: module.id,
                display_id: display_id,
                title_en: module.title_en,
                summary_en: module.summary_en || module.summary_vi, // Fallback if EN missing in older content
                key_points_en: module.key_points_en || [],
                key_metrics_en: module.key_metrics_en || [],
                chapter_id: chapter.id,
                chapter_title_en: chapter.title_en
            };
        });
    });

    return registry;
};

// 4. Export the Singleton Registry
export const lessonRegistry = buildLessonRegistry();

// 5. Helper to get metadata safely
export const getLessonMetadata = (moduleId: string): LessonMetadata | null => {
    return lessonRegistry[moduleId] || null;
};
