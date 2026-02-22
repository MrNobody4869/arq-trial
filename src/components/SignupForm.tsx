"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="signup" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-600">
            Get started
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Start your free trial today
          </p>
          <p className="mt-4 text-lg text-slate-600">
            No credit card required. Full access for 14 days.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          {submitted ? (
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Check your inbox
              </h3>
              <p className="mt-2 text-slate-600">
                We&apos;ve sent you a link to get started. Click the link to
                activate your free trial.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
              >
                Start Free Trial
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
