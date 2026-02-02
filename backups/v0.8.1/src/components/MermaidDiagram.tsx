"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

// Configure mermaid once
mermaid.initialize({
    startOnLoad: false,
    theme: "default",
    securityLevel: "loose",
    fontFamily: "Inter, sans-serif",
});

interface MermaidDiagramProps {
    chart: string;
    className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const renderChart = async () => {
            if (!ref.current) return;

            try {
                // Generate a unique ID for this chart instance
                const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;

                // Render the chart
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(null);
            } catch (err) {
                console.error("Mermaid rendering failed:", err);
                setError("Failed to render diagram. Syntax might be incorrect.");
            }
        };

        renderChart();
    }, [chart]);

    if (error) {
        return (
            <div className="p-4 border border-destructive/50 bg-destructive/10 text-destructive rounded-lg text-sm font-mono">
                {error}
                <pre className="mt-2 text-xs opacity-70 whitespace-pre-wrap">{chart}</pre>
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className={cn(
                "flex justify-center items-center p-4 bg-muted/20 rounded-lg overflow-x-auto my-6 border border-border/50",
                className
            )}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
