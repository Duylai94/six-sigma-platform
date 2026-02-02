"use client";

import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { runPythonCode, getPyodide } from "@/lib/pyodide";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Play } from "lucide-react";

interface PythonEditorProps {
    initialCode?: string;
    onRunComplete?: (output: string) => void;
}

export function PythonEditor({ initialCode = "# Type your Python code here...", onRunComplete }: PythonEditorProps) {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        // Preload Pyodide
        getPyodide()
            .then(() => setIsLoading(false))
            .catch((err) => {
                console.error(err);
                setOutput(`Failed to load Python engine.\nDetails: ${err instanceof Error ? err.message : String(err)}\nFull Error: ${String(err)}`);
                setIsLoading(false);
            });
    }, []);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput(""); // Clear previous output
        setPlotImage(null); // Clear previous plot

        try {
            let capturedOutput = "";
            const result = await runPythonCode(code, (text) => {
                // Check for Plot Marker
                const plotMatch = text.match(/!\[PLOT_B64:(.*?)\]/);
                if (plotMatch) {
                    setPlotImage(`data:image/png;base64,${plotMatch[1]}`);
                    // Remove the marker from visible output
                    text = text.replace(/!\[PLOT_B64:.*?\]/, "");
                }

                capturedOutput += text;
                setOutput((prev) => prev + text);
            });

            // If result is not undefined and not already captured in stdout 
            // (some expressions return values like repl)
            if (result !== undefined) {
                // Optionally append result
            }

            if (onRunComplete) onRunComplete(capturedOutput);

        } catch (e: any) {
            setOutput((prev) => prev + "\nError: " + e.message);
        } finally {
            setIsRunning(false);
        }
    };

    const [plotImage, setPlotImage] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] w-full">
            {/* Editor Column */}
            <Card className="flex flex-col h-full overflow-hidden p-0">
                <CardHeader className="flex flex-row items-center justify-between py-2 px-4 bg-muted/20 border-b">
                    <CardTitle className="text-sm font-medium">Python Code</CardTitle>
                    <Button
                        size="sm"
                        onClick={handleRun}
                        disabled={isLoading || isRunning}
                        className="flex items-center gap-2"
                    >
                        {isRunning || isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                        {isLoading ? "Loading Engine..." : "Run Code"}
                    </Button>
                </CardHeader>
                <div className="flex-1 min-h-0">
                    <Editor
                        height="100%"
                        defaultLanguage="python"
                        theme="vs-dark"
                        value={code}
                        onChange={(val) => setCode(val || "")}
                        options={{
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            fontSize: 14,
                        }}
                    />
                </div>
            </Card>

            {/* Output Column */}
            <Card className="flex flex-col h-full overflow-hidden">
                <CardHeader className="py-2 px-4 bg-muted/20 border-b">
                    <CardTitle className="text-sm font-medium">Console Output</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0 bg-black text-white font-mono text-sm overflow-auto">
                    {plotImage && (
                        <div className="p-4 bg-white border-b border-gray-700 flex justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={plotImage} alt="Matplotlib Plot" className="max-w-full max-h-[300px]" />
                        </div>
                    )}
                    <pre className="p-4 whitespace-pre-wrap min-h-full">
                        {output || <span className="text-gray-500 italic">Output will appear here...</span>}
                    </pre>
                </CardContent>
            </Card>

            {/* Hidden Plot Target (Pyodide automatically appends global figures, but we can try to constrain it) */}
            <div id="plot_target" className="hidden"></div>
        </div>
    );
}
