import type { Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google"; // Pro Max Typography
import "./globals.css";
import "katex/dist/katex.min.css";

// Body Font - Technical/Precise
const firaSans = Fira_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Heading/Code Font
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IASSC Lean Six Sigma Green Belt | Learning Platform",
  description: "Comprehensive bilingual Six Sigma course with Python integration.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        className={`${firaSans.variable} ${firaCode.variable} antialiased`}
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
