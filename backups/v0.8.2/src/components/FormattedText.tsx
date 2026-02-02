import React from "react";
import { cn } from "@/lib/utils";

interface FormattedTextProps {
    text: string;
    className?: string;
}

// Import Mermaid dynamically or statically (client component)
import { MermaidDiagram } from "./MermaidDiagram";
import katex from "katex";

type BlockType = 'text' | 'table' | 'mermaid';
type ContentBlock = { type: BlockType; content: string };

export function FormattedText({ text, className }: FormattedTextProps) {
    if (!text) return null;

    // Use the robust state-machine parser
    const blocks = parseMarkdown(text);

    return (
        <div className={cn("space-y-4 text-foreground/90 leading-relaxed max-w-full overflow-hidden", className)}>
            {blocks.map((block, index) => {
                if (block.type === 'mermaid') {
                    return <MermaidDiagram key={index} chart={block.content} />;
                }

                if (block.type === 'table') {
                    return <TableParser key={index} block={block.content} />;
                }

                // Normal Text (Text Block)
                // Parse for lists and paragraphs
                const content = block.content;

                // Simple check for lists at the start of the block
                // (Note: This is a simplification. Ideally, the parser should chunk lists too.
                // But for now, we assume a text block might be a mix or a single paragraph).
                // Let's split by double newline to handle paragraphs.
                const paragraphs = content.split(/\n\s*\n/);

                return (
                    <div key={index} className="space-y-2 max-w-full overflow-hidden">
                        {paragraphs.map((p, i) => {
                            if (!p.trim()) return null;

                            // Check for List
                            if (p.trim().startsWith("- ")) {
                                const items = p.split("\n").filter((line) => line.trim().startsWith("- "));
                                return (
                                    <ul key={i} className="list-disc ml-4 md:ml-6 space-y-1 max-w-full">
                                        {items.map((item, j) => (
                                            <li key={j} className="pl-1 break-words overflow-wrap-anywhere">
                                                <InlineParser text={item.replace(/^\s*-\s/, "")} />
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }

                            // Check for Numbered List
                            if (p.trim().match(/^(\d+\.|[1-5]️⃣)/)) {
                                const lines = p.split("\n").filter((line) => line.trim().length > 0);
                                return (
                                    <div key={i} className="space-y-2">
                                        {lines.map((line, j) => (
                                            <p key={j} className="whitespace-pre-line break-words overflow-wrap-anywhere">
                                                <InlineParser text={line} />
                                            </p>
                                        ))}
                                    </div>
                                );
                            }

                            // Standard Paragraph
                            return (
                                <p key={i} className="whitespace-pre-line break-words overflow-wrap-anywhere">
                                    <InlineParser text={p} />
                                </p>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

// ---------------------------------------------------------------------------
// PARSER ENGINE
// ---------------------------------------------------------------------------
function parseMarkdown(text: string): ContentBlock[] {
    const lines = text.split("\n");
    const blocks: ContentBlock[] = [];

    let currentBuffer: string[] = [];
    let state: 'NORMAL' | 'TABLE' | 'CODE' = 'NORMAL';

    const flush = (type: BlockType) => {
        if (currentBuffer.length > 0) {
            // Only push if content is not just empty lines
            const content = currentBuffer.join("\n").trim();
            if (content.length > 0 || type !== 'text') { // Always push non-text blocks even if content is empty (e.g., empty mermaid block)
                blocks.push({ type, content: currentBuffer.join("\n") });
            }
            currentBuffer = [];
        }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (state === 'NORMAL') {
            // Check for Code Block Start
            if (trimmed.startsWith("```mermaid")) {
                flush('text');
                state = 'CODE';
                // Do NOT include the fence line in the content for MermaidDiagram
                // But we must handle indentation if it exists?
                // Actually MermaidDiagram expects just the graph def.
                // So skipping this line is correct.
            }
            // Check for Table Start
            else if (isTableStart(line, lines[i + 1])) {
                flush('text');
                state = 'TABLE';
                currentBuffer.push(line);
            }
            else {
                currentBuffer.push(line);
            }
        }
        else if (state === 'CODE') {
            // Check for Code Block End
            if (trimmed.startsWith("```")) {
                flush('mermaid');
                state = 'NORMAL';
            } else {
                currentBuffer.push(line);
            }
        }
        else if (state === 'TABLE') {
            // Check for Table End (empty line or non-table row)
            if (!isTableRow(line)) {
                flush('table');
                state = 'NORMAL';
                // Reprocess this line as Normal
                i--;
            } else {
                currentBuffer.push(line);
            }
        }
    }

    // Final flush
    if (state === 'CODE') flush('mermaid'); // Should not happen if closed properly, but safe
    else if (state === 'TABLE') flush('table');
    else flush('text');

    return blocks;
}

// Helper: Is this line a table row?
function isTableRow(line: string): boolean {
    const trimmed = line.trim();
    // Must contain pipe and look like a table row
    // Allow indentation
    return trimmed.includes("|");
}

// Helper: Check if a table is starting
function isTableStart(currentLine: string, nextLine?: string): boolean {
    if (!isTableRow(currentLine)) return false;
    if (!nextLine) return false;
    // Check if next line is a separator |---|---|
    return !!nextLine.trim().match(/^\|?[\s\-:|]+\|[\s\-:|]+\|?$/);
}

// ---------------------------------------------------------------------------
// RENDERERS (TableParser, InlineParser, BoldParser)
// ---------------------------------------------------------------------------

function TableParser({ block }: { block: string }) {
    const lines = block.trim().split("\n").filter(line => line.trim().length > 0);

    // Find separator line index to distinguish Header vs Body
    const separatorIndex = lines.findIndex(line =>
        line.trim().match(/^\|?[\s\-:|]+\|[\s\-:|]+\|?$/)
    );

    if (separatorIndex === -1) return <p className="font-mono text-xs">{block}</p>;

    const headerLine = lines[0];
    const bodyLines = lines.slice(separatorIndex + 1);

    const parseCells = (line: string): string[] => {
        return line
            .split("|")
            .map(cell => cell.trim())
            .filter((cell, index, arr) => {
                // Remove empty first/last cells if they are result of leading/trailing pipes
                if (index === 0 && cell === "") return false;
                if (index === arr.length - 1 && cell === "") return false;
                return true;
            });
    };

    const headerCells = parseCells(headerLine);
    const bodyRows = bodyLines.map(line => parseCells(line));

    return (
        // Pro Max Fix: max-w-full and overflow-x-auto for mobile/chat contexts
        <div className="w-full max-w-full overflow-x-auto my-2 rounded-lg border border-border bg-muted/20">
            <table className="w-full divide-y divide-border text-xs">
                <thead className="bg-muted/50">
                    <tr>
                        {headerCells.map((cell, i) => (
                            <th key={i} className="px-2 py-1.5 text-left font-semibold text-xs text-muted-foreground uppercase tracking-wider break-words">
                                <InlineParser text={cell} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                    {bodyRows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={cn("transition-colors hover:bg-muted/30", rowIndex % 2 === 0 ? "bg-card" : "bg-muted/10")}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-2 py-1.5 text-xs break-words">
                                    <InlineParser text={cell} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Simple Parser for Math ($...$ or $$...$$) and **Bold**
function InlineParser({ text }: { text: string }) {
    // 1. Split by Block Math ($$...$$) and Inline Math ($...$)
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);

    return (
        <>
            {parts.map((part, i) => {
                // Block Math
                if (part.startsWith("$$") && part.endsWith("$$")) {
                    const formula = part.slice(2, -2);
                    try {
                        const html = katex.renderToString(formula, { displayMode: true, throwOnError: false });
                        return <div key={i} dangerouslySetInnerHTML={{ __html: html }} className="my-2 overflow-x-auto" />;
                    } catch (e) {
                        return <code key={i}>{part}</code>;
                    }
                }
                // Inline Math
                if (part.startsWith("$") && part.endsWith("$")) {
                    const formula = part.slice(1, -1);
                    try {
                        const html = katex.renderToString(formula, { displayMode: false, throwOnError: false });
                        return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
                    } catch (e) {
                        return <code key={i}>{part}</code>;
                    }
                }

                // 2. Fallback to Bold Parsing for text nodes
                return <BoldParser key={i} text={part} />;
            })}
        </>
    );
}

function BoldParser({ text }: { text: string }) {
    // Regex to match **bold**
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
                }
                return part;
            })}
        </>
    );
}

