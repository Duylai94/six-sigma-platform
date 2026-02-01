"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "vn" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string; // Helper for simple lookups (optional)
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("vn");

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("app_language") as Language;
        if (saved === "vn" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("app_language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "vn" ? "en" : "vn"));
    };

    // Placeholder for simple translation helper if needed
    const t = (text: string) => text;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
