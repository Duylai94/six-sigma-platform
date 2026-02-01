"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface AITutorContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    messages: Message[];
    addMessage: (message: Message) => void;
    clearMessages: () => void;
    sendQuestion: (question: string) => void;
    pendingQuestion: string | null;
    clearPendingQuestion: () => void;
    moduleContext: string;
    setModuleContext: (context: string) => void;
}

const AITutorContext = createContext<AITutorContextType | undefined>(undefined);

export function AITutorProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Xin chào! Tôi là trợ lý AI Six Sigma của bạn. Tôi có thể giúp gì cho bạn hôm nay? / Hello! I'm your Six Sigma AI assistant. How can I help you today?" }
    ]);
    const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);
    const [moduleContext, setModuleContext] = useState<string>("");

    const addMessage = useCallback((message: Message) => {
        setMessages(prev => [...prev, message]);
    }, []);

    const clearMessages = useCallback(() => {
        setMessages([
            { role: "assistant", content: "Xin chào! Tôi là trợ lý AI Six Sigma của bạn. Tôi có thể giúp gì cho bạn hôm nay? / Hello! I'm your Six Sigma AI assistant. How can I help you today?" }
        ]);
    }, []);

    // Send a question (used by clickable badges)
    const sendQuestion = useCallback((question: string) => {
        setIsOpen(true);
        setPendingQuestion(question);
    }, []);

    const clearPendingQuestion = useCallback(() => {
        setPendingQuestion(null);
    }, []);

    return (
        <AITutorContext.Provider value={{
            isOpen,
            setIsOpen,
            messages,
            addMessage,
            clearMessages,
            sendQuestion,
            pendingQuestion,
            clearPendingQuestion,
            moduleContext,
            setModuleContext
        }}>
            {children}
        </AITutorContext.Provider>
    );
}

export function useAITutor() {
    const context = useContext(AITutorContext);
    if (context === undefined) {
        throw new Error("useAITutor must be used within an AITutorProvider");
    }
    return context;
}
