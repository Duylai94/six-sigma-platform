import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IASSC Lean Six Sigma Green Belt | Learning Platform",
  description: "Comprehensive bilingual Six Sigma course with Python integration.",
};

import { LanguageProvider } from "@/contexts/LanguageContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { AITutorProvider } from "@/contexts/AITutorContext";
import { AITutor } from "@/components/AITutor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <LanguageProvider>
            <ProgressProvider>
              <AITutorProvider>
                {children}
                {/* Global AI Tutor - Available on all pages */}
                <AITutor />
              </AITutorProvider>
            </ProgressProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
