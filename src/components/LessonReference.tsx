import React from "react";
import Link from "next/link";
import { getLessonMetadata } from "../data/lesson-mapping";
import { ExternalLink, BookOpen, Key } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface LessonReferenceProps {
    id: string;
    className?: string;
}

export function LessonReference({ id, className }: LessonReferenceProps) {
    const meta = getLessonMetadata(id);

    if (!meta) {
        return (
            <span className="text-destructive text-sm font-mono bg-destructive/10 px-1 py-0.5 rounded">
                [Ref Not Found: {id}]
            </span>
        );
    }

    return (
        <div className={cn("my-4 p-4 rounded-lg border border-border bg-muted/40 hover:bg-muted/60 transition-colors", className)}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg text-primary">
                        Review: {meta.title_en}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-mono">
                        Mod {meta.display_id}
                    </span>
                </div>
                <Link href={`/learn/${id}`} passHref>
                    <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
                        Go to Lesson <ExternalLink className="w-3 h-3" />
                    </Button>
                </Link>
            </div>

            {/* Content Preview */}
            <div className="space-y-3">
                <p className="text-sm text-foreground/80 italic">
                    "{meta.summary_en}"
                </p>

                {meta.key_metrics_en && meta.key_metrics_en.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {meta.key_metrics_en.slice(0, 3).map((metric, i) => (
                            <span key={i} className="text-xs border border-border bg-background px-2 py-1 rounded-md text-muted-foreground font-medium">
                                {metric}
                            </span>
                        ))}
                    </div>
                )}

                {meta.key_points_en && meta.key_points_en.length > 0 && (
                    <div className="mt-2 text-xs text-muted-foreground">
                        <strong className="flex items-center gap-1 mb-1 text-foreground/70">
                            <Key className="w-3 h-3" /> Key Takeaway:
                        </strong>
                        <ul className="list-disc ml-5 space-y-0.5">
                            {meta.key_points_en.slice(0, 2).map((point, idx) => (
                                <li key={idx} className="line-clamp-1" title={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
