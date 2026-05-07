"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const [mode, setMode] = useState("signin"); // signin or signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setMessage("Signed in successfully! Redirecting...");
      setTimeout(() => {
        window.location.href = "/appointments";
      }, 1000);
    } catch (err) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      setMessage(
        "Sign up successful! Check your email to confirm your account."
      );
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = mode === "signin" ? handleSignIn : handleSignUp;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-barber-black py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-barber-gold mb-2 text-center">
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-barber-gray text-center mb-12">
            {mode === "signin"
              ? "Book your haircut appointment"
              : "Create your account to get started"}
          </p>

          <div className="bg-barber-black-lighter border border-barber-gold rounded-lg p-8">
            {error && (
              <div className="bg-red-900 border border-red-600 rounded-lg p-4 mb-6 text-red-200 text-sm">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-900 border border-green-600 rounded-lg p-4 mb-6 text-green-200 text-sm">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading
                  ? mode === "signin"
                    ? "Signing In..."
                    : "Signing Up..."
                  : mode === "signin"
                  ? "Sign In"
                  : "Sign Up"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-barber-gray text-sm">
                {mode === "signin"
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                  className="text-barber-gold hover:text-barber-gold-dark ml-2 font-semibold transition"
                >
                  {mode === "signin" ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
