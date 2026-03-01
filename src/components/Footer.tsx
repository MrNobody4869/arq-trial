"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/50 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Elena Markov
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Writer & essayist. Essays on craft, memory, and the writing life.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2">
              {["/", "/blog", "/portfolio", "/about", "/contact"].map((path) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-sm text-zinc-400 hover:text-[var(--accent)] transition-colors"
                  >
                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Connect
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 hover:text-[var(--accent)] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-[var(--accent)] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-[var(--accent)] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Newsletter
            </h4>
            <p className="mt-2 text-sm text-zinc-400">
              Get new essays and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  disabled={status === "loading" || status === "success"}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-[var(--accent-muted)] disabled:opacity-70 transition-colors"
                >
                  {status === "loading" ? "..." : status === "success" ? "✓" : "Subscribe"}
                </button>
              </div>
              {status === "success" && (
                <p className="mt-2 text-sm text-emerald-500">Thank you for subscribing!</p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Elena Markov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
