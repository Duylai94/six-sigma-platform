"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { user, loading, signInWithEmail } = useAuth();

  // Email state
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailLoading(true);
    const { error } = await signInWithEmail(email);
    setEmailLoading(false);
    if (!error) {
      setIsEmailSent(true);
    } else {
      alert("Error sending magic link: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center relative selection:bg-primary/10">

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      {/* Main Content */}
      <div className={`flex flex-col items-center space-y-8 max-w-2xl w-full transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Version Badge */}
        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full shadow-sm animate-in fade-in zoom-in duration-500 delay-100">
          v0.8.0 • Green Belt Edition
        </Badge>

        {/* Hero Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-primary/5 text-primary">
            <Trophy className="w-12 h-12 stroke-[1.5]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Learning Six Sigma
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-lg mx-auto">
            Interactive. Data-Driven. IASSC Accredited.
          </p>
        </div>

        {/* Author Tag */}
        <p className="text-sm font-medium text-muted-foreground/60 tracking-wider uppercase">
          by Duy Nguyen
        </p>

        {/* Action Area */}
        <div className={`w-full max-w-sm mx-auto transition-all duration-700 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {!loading && (
            <div className="flex flex-col items-center gap-6">
              {user ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-lg font-medium">
                    Welcome back, <span className="text-primary">{user.email?.split('@')[0]}</span>
                  </p>
                  <Link href="/dashboard">
                    <Button size="lg" className="w-full rounded-full py-6 text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 active:scale-95">
                      Enter Platform
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

                  {/* Email Magic Link (Primary) */}
                  {isEmailSent ? (
                    <div className="p-4 rounded-xl bg-green-500/10 text-green-600 border border-green-200 animate-in zoom-in duration-300">
                      <p className="font-bold text-lg">Check your email!</p>
                      <p className="text-sm opacity-90 mt-1">We sent a magic link to <span className="font-medium underline">{email}</span>.</p>
                      <Button variant="ghost" size="sm" onClick={() => setIsEmailSent(false)} className="mt-2 text-xs h-auto py-1 hover:bg-green-500/20 hover:text-green-700">
                        Try different email
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
                      <div className="flex gap-2">
                        <Input
                          type="email"
                          placeholder="Enter your email to login..."
                          className="rounded-full pl-6 py-6 bg-background/80 backdrop-blur-sm border-input shadow-sm focus-visible:ring-primary text-base"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          autoFocus
                        />
                        <Button type="submit" size="lg" className="rounded-full aspect-square shrink-0 shadow-md" disabled={emailLoading}>
                          {emailLoading ? <span className="animate-spin">⏳</span> : <ArrowRight className="w-5 h-5" />}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        We'll send you a secure magic link. No password needed.
                      </p>
                    </form>
                  )}

                  <p className="text-xs text-muted-foreground pt-8 border-t border-border/40 mt-6">
                    Just browsing?{' '}
                    <Link href="/dashboard" className="underline hover:text-primary transition-colors font-medium">Continue as guest</Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-xs text-muted-foreground/40">
        © 2026 Six Sigma Platform. All rights reserved.
      </div>
    </div>
  );
}
