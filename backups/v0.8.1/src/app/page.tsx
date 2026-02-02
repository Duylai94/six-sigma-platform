"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Trophy, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { user, loading, signUp, signIn } = useAuth();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setFormLoading(true);
    setError(null);
    setSuccess(null);

    if (isRegistering) {
      // Sign Up
      const { error } = await signUp(email, password);
      if (error) {
        setError(error.message);
      } else {
        setSuccess("Account created! You are now logged in.");
      }
    } else {
      // Sign In
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      }
    }

    setFormLoading(false);
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

                  {/* Login/Register Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Email Input */}
                    <Input
                      type="email"
                      placeholder="Email"
                      className="rounded-full pl-6 py-6 bg-background/80 backdrop-blur-sm border-input shadow-sm focus-visible:ring-primary text-base"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />

                    {/* Password Input */}
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="rounded-full pl-6 pr-12 py-6 bg-background/80 backdrop-blur-sm border-input shadow-sm focus-visible:ring-primary text-base"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="p-3 rounded-xl bg-red-500/10 text-red-600 border border-red-200 text-sm animate-in zoom-in duration-300">
                        {error}
                      </div>
                    )}

                    {/* Success Message */}
                    {success && (
                      <div className="p-3 rounded-xl bg-green-500/10 text-green-600 border border-green-200 text-sm animate-in zoom-in duration-300">
                        {success}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full py-6 shadow-md"
                      disabled={formLoading}
                    >
                      {formLoading ? (
                        <span className="animate-spin">⏳</span>
                      ) : isRegistering ? (
                        "Create Account"
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Toggle Login/Register */}
                  <p className="text-sm text-muted-foreground">
                    {isRegistering ? (
                      <>
                        Already have an account?{' '}
                        <button
                          onClick={() => { setIsRegistering(false); setError(null); setSuccess(null); }}
                          className="underline hover:text-primary transition-colors font-medium"
                        >
                          Sign In
                        </button>
                      </>
                    ) : (
                      <>
                        Don't have an account?{' '}
                        <button
                          onClick={() => { setIsRegistering(true); setError(null); setSuccess(null); }}
                          className="underline hover:text-primary transition-colors font-medium"
                        >
                          Create Account
                        </button>
                      </>
                    )}
                  </p>

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
