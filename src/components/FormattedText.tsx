import React from "react";
import { cn } from "@/lib/utils";

interface FormattedTextProps {
    text: string;
    className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
    if (!text) return null;

    // Split by double newlines to form paragraphs/blocks
    const blocks = text.split("\n\n");

    return (
        <div className={cn("space-y-4 text-foreground/90 leading-relaxed", className)}>
            {blocks.map((block, index) => {
                // Check for Table (lines starting with |)
                if (isTableBlock(block)) {
                    return <TableParser key={index} block={block} />;
                }

                // Check for List Items
                if (block.trim().startsWith("- ")) {
                    const items = block.split("\n").filter((line) => line.trim().startsWith("- "));
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

                // Check for Numbered List (1. 2. 3. or 1️⃣ 2️⃣ etc)
                if (block.trim().match(/^(\d+\.|[1-5]️⃣)/)) {
                    const lines = block.split("\n").filter((line) => line.trim().length > 0);
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
                        <InlineParser text={block} />
                    </p>
                );
            })}
        </div>
    );
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

// Simple Parser for **Bold** and *Italic*
function InlineParser({ text }: { text: string }) {
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

