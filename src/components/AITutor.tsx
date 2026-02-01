"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, X, MessageSquare, Loader2, Trash2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAITutor } from "@/contexts/AITutorContext";
import { FormattedText } from "@/components/FormattedText";
import { useLanguage } from "@/contexts/LanguageContext";

export function AITutor() {
    const {
        isOpen,
        setIsOpen,
        messages,
        addMessage,
        clearMessages,
        pendingQuestion,
        clearPendingQuestion,
        moduleContext
    } = useAITutor();

    const { language } = useLanguage();

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [aiLanguage, setAiLanguage] = useState<'en' | 'vn'>('vn'); // Local AI response language
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (scrollRef.current) {
            const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    }, [messages, isOpen]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Handle pending question from clickable badges
    useEffect(() => {
        if (pendingQuestion && isOpen && !isLoading) {
            handleSendMessage(pendingQuestion);
            clearPendingQuestion();
        }
    }, [pendingQuestion, isOpen, isLoading]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading) return;

        const userMsg = messageText.trim();
        setInput("");
        addMessage({ role: "user", content: userMsg });
        setIsLoading(true);

        try {
            const res = await fetch("/api/ai/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMsg,
                    context: moduleContext,
                    language: aiLanguage // Use local AI language preference
                })
            });

            const data = await res.json();

            if (data.error) {
                addMessage({ role: "assistant", content: `Lỗi: ${data.error}` });
            } else {
                addMessage({ role: "assistant", content: data.reply });
            }
        } catch (e) {
            addMessage({
                role: "assistant",
                content: language === 'vn'
                    ? "Xin lỗi, đã xảy ra lỗi kết nối. Vui lòng thử lại."
                    : "Sorry, a connection error occurred. Please try again."
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(input);
    };

    const placeholderText = language === 'vn' ? "Hỏi về Six Sigma..." : "Ask about Six Sigma...";

    return (
        <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end pointer-events-none">
            {isOpen && (
                <Card className={cn(
                    "shadow-xl flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in pointer-events-auto flex-shrink-0 border-primary/20 overflow-hidden p-0",
                    "w-[90vw] sm:w-[380px] h-[520px] max-h-[85vh] mb-4 sm:mb-2"
                )}>
                    <CardHeader className="py-3 px-4 bg-primary text-primary-foreground flex flex-row justify-between items-center flex-shrink-0 shadow-md">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            <CardTitle className="text-base font-mono">AI Tutor</CardTitle>
                        </div>
                        <div className="flex items-center gap-1">
                            {/* AI Response Language Toggle */}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs font-mono text-primary-foreground hover:bg-white/20 gap-1"
                                onClick={() => setAiLanguage(prev => prev === 'vn' ? 'en' : 'vn')}
                                title={aiLanguage === 'vn' ? 'Switch to English' : 'Đổi sang Tiếng Việt'}
                            >
                                <Globe className="h-3 w-3" />
                                {aiLanguage === 'vn' ? 'VN' : 'EN'}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-primary-foreground hover:bg-white/20"
                                onClick={clearMessages}
                                title="Clear chat"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-primary-foreground hover:bg-white/20"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    {/* Scroll Bleed Fix: overscroll-contain */}
                    <CardContent className="flex-1 p-0 overflow-hidden relative bg-white/50 dark:bg-black/20 backdrop-blur-sm overscroll-contain">
                        <ScrollArea className="h-full p-4" viewportClassName="overscroll-contain" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((m, i) => (
                                    <div key={i} className={cn("flex w-full", m.role === "user" ? "justify-end" : "justify-start")}>
                                        <div className={cn(
                                            "max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm overflow-hidden",
                                            m.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-br-none"
                                                : "bg-white dark:bg-slate-800 border-border text-foreground rounded-bl-none"
                                        )}>
                                            {m.role === "user" ? (
                                                <p className="whitespace-pre-wrap font-sans break-words">{m.content}</p>
                                            ) : (
                                                <FormattedText text={m.content} className="text-sm space-y-2 [&_p]:leading-normal min-w-0 max-w-full overflow-hidden [&_*]:max-w-full" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white/80 dark:bg-slate-800/80 border shadow-sm rounded-2xl rounded-bl-none px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
                                            <Loader2 className="h-3 w-3 animate-spin" /> Thinking...
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3 border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-b-lg">
                        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                            <Input
                                ref={inputRef}
                                placeholder={placeholderText}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                className="flex-1 bg-white dark:bg-black/20 border-primary/20 focus-visible:ring-primary"
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-cta hover:bg-cta/90 text-cta-foreground shadow-sm">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full h-14 w-14 shadow-xl bg-gradient-to-br from-primary to-teal-700 hover:scale-110 transition-all pointer-events-auto animate-in zoom-in duration-300"
                >
                    <MessageSquare className="h-7 w-7 text-white" />
                </Button>
            )}
        </div>
    );
}
