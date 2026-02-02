"use client";

import React from "react";
import { MockExamComponent } from "@/components/quiz/MockExamComponent";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MockExamPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="border-b px-6 py-4 flex items-center gap-4 bg-muted/20">
                <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-xl font-bold">IASSC Green Belt Mock Exam</h1>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Full 100-Question Simulation (3 Hours)
                    </p>
                </div>
            </header>

            <main className="flex-1 bg-muted/5">
                <MockExamComponent />
            </main>
        </div>
    );
}
