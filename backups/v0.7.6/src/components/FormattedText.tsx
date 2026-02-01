import React from "react";
import { cn } from "@/lib/utils";

interface FormattedTextProps {
    text: string;
    className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
    if (!text) return null;

    // improved splitting: Detect tables and split them out
    const blocks = extractTables(text);

    return (
        <div className={cn("space-y-4 text-foreground/90 leading-relaxed", className)}>
            {blocks.map((block, index) => {
                // If special marker for table
                if (block.type === 'table') {
                    return <TableParser key={index} block={block.content} />;
                }

                // Normal Text processing
                const content = block.content;

                // Check for List Items
                if (content.trim().startsWith("- ")) {
                    const items = content.split("\n").filter((line) => line.trim().startsWith("- "));
                    return (
                        <ul key={index} className="list-disc ml-6 space-y-1">
                            {items.map((item, i) => (
                                <li key={i} className="pl-1">
                                    <InlineParser text={item.replace(/^- /, "")} />
                                </li>
                            ))}
                        </ul>
                    );
                }

                // Check for Numbered List
                if (content.trim().match(/^(\d+\.|[1-5]️⃣)/)) {
                    const lines = content.split("\n").filter((line) => line.trim().length > 0);
                    return (
                        <div key={index} className="space-y-2">
                            {lines.map((line, i) => (
                                <p key={i} className="whitespace-pre-line">
                                    <InlineParser text={line} />
                                </p>
                            ))}
                        </div>
                    );
                }

                // Standard Paragraph
                return (
                    <p key={index} className="whitespace-pre-line">
                        <InlineParser text={content} />
                    </p>
                );
            })}
        </div>
    );
}

// Helper: Extract tables from text and return mixed array
type TextBlock = { type: 'text' | 'table', content: string };

function extractTables(text: string): TextBlock[] {
    const lines = text.split("\n");
    const result: TextBlock[] = [];
    let currentBuffer: string[] = [];
    let isTableMode = false;

    // Helper to flush text buffer
    const flushBuffer = (type: 'text' | 'table') => {
        if (currentBuffer.length > 0) {
            result.push({ type, content: currentBuffer.join("\n") });
            currentBuffer = [];
        }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        // Detect table row: starts/ends with | AND contains |
        // Relaxed check: Just needs containing pipes and looking tabular
        const isTableRow = trimmed.includes("|") && (trimmed.startsWith("|") || trimmed.match(/^\s*\|/));
        const isSeparator = trimmed.match(/^\|?[\s\-:|]+\|[\s\-:|]+\|?$/);

        if (isTableMode) {
            if (isTableRow || isSeparator) {
                currentBuffer.push(line);
            } else {
                // End of table
                flushBuffer('table');
                isTableMode = false;
                // Re-process this line as text
                if (trimmed.length > 0) currentBuffer.push(line);
            }
        } else {
            // Check if this line MIGHT be start of table
            // Look ahead for separator
            if (isTableRow) {
                const nextLine = lines[i + 1]?.trim();
                const nextIsSeparator = nextLine?.match(/^\|?[\s\-:|]+\|[\s\-:|]+\|?$/);

                if (nextIsSeparator) {
                    flushBuffer('text');
                    isTableMode = true;
                    currentBuffer.push(line);
                } else {
                    currentBuffer.push(line);
                }
            } else {
                // Normal text line
                // Split by double newline for paragraphs if not in table
                if (line.trim() === "") {
                    flushBuffer('text'); // Empty line = split paragraph
                } else {
                    currentBuffer.push(line);
                }
            }
        }
    }
    flushBuffer(isTableMode ? 'table' : 'text');

    return result;
}

// Check if a block is a markdown table
function isTableBlock(block: string): boolean {
    const lines = block.trim().split("\n");
    if (lines.length < 2) return false;

    // Check if lines start and contain pipe characters
    const hasTableSyntax = lines.every(line =>
        line.trim().includes("|") &&
        !line.trim().startsWith("┌") && // Not ASCII art table
        !line.trim().startsWith("├") &&
        !line.trim().startsWith("└")
    );

    // Check for separator row (|---|---|)
    const hasSeparator = lines.some(line =>
        line.trim().match(/^\|?[\s\-:|]+\|[\s\-:|]+\|?$/)
    );

    return hasTableSyntax && hasSeparator;
}

// Parse and render markdown table
function TableParser({ block }: { block: string }) {
    const lines = block.trim().split("\n").filter(line => line.trim().length > 0);

    // Find separator line index
    const separatorIndex = lines.findIndex(line =>
        line.trim().match(/^\|?[\s\-:|]+\|[\s\-:|]+\|?$/)
    );

    if (separatorIndex === -1) return <p>{block}</p>;

    // Parse header (lines before separator)
    const headerLines = lines.slice(0, separatorIndex);
    const bodyLines = lines.slice(separatorIndex + 1);

    // Parse cells from a line
    const parseCells = (line: string): string[] => {
        return line
            .split("|")
            .map(cell => cell.trim())
            .filter((cell, index, arr) => {
                // Remove empty first/last cells from | at start/end
                if (index === 0 && cell === "") return false;
                if (index === arr.length - 1 && cell === "") return false;
                return true;
            });
    };

    const headerCells = headerLines.length > 0 ? parseCells(headerLines[0]) : [];
    const bodyRows = bodyLines.map(line => parseCells(line));

    return (
        <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-border rounded-lg overflow-hidden">
                {headerCells.length > 0 && (
                    <thead className="bg-muted/50">
                        <tr>
                            {headerCells.map((cell, i) => (
                                <th
                                    key={i}
                                    className="px-4 py-3 text-left font-semibold border-b border-border text-sm"
                                >
                                    <InlineParser text={cell} />
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {bodyRows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={cn(
                                "transition-colors hover:bg-muted/30",
                                rowIndex % 2 === 0 ? "bg-background" : "bg-muted/20"
                            )}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-4 py-3 border-b border-border text-sm"
                                >
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

import katex from "katex";

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

