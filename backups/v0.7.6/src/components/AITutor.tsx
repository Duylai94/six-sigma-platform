"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, X, MessageSquare, Loader2, Trash2 } from "lucide-react";
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
                    language: language
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
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
            {isOpen && (
                <Card className="w-[380px] h-[520px] max-h-[80vh] mb-4 shadow-xl flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in pointer-events-auto flex-shrink-0">
                    <CardHeader className="py-3 px-4 bg-primary text-primary-foreground rounded-t-lg flex flex-row justify-between items-center flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            <CardTitle className="text-base">AI Tutor</CardTitle>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-primary-foreground hover:bg-primary/80"
                                onClick={clearMessages}
                                title="Clear chat"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-primary-foreground hover:bg-primary/80"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden relative bg-muted/5">
                        <ScrollArea className="h-full p-4" viewportClassName="overscroll-contain" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((m, i) => (
                                    <div key={i} className={cn("flex w-full", m.role === "user" ? "justify-end" : "justify-start")}>
                                        <div className={cn(
                                            "max-w-[85%] rounded-lg px-3 py-2 text-sm shadow-sm",
                                            m.role === "user" ? "bg-primary text-primary-foreground" : "bg-white border text-foreground"
                                        )}>
                                            {m.role === "user" ? (
                                                <p className="whitespace-pre-wrap">{m.content}</p>
                                            ) : (
                                                <FormattedText text={m.content} className="text-sm space-y-2 [&_p]:leading-normal" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border shadow-sm rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground">
                                            <Loader2 className="h-3 w-3 animate-spin" /> Thinking...
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3 border-t bg-background">
                        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                            <Input
                                ref={inputRef}
                                placeholder={placeholderText}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                className="flex-1"
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 transition-all hover:scale-110 pointer-events-auto"
                >
                    <MessageSquare className="h-7 w-7" />
                </Button>
            )}
        </div>
    );
}
