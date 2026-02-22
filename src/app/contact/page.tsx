"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Get in Touch
        </p>
        <h1 className="text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          Let&apos;s work together
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Have a project in mind? Want to chat? Drop me a message and I&apos;ll
          get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
        </div>

        {status === "success" && (
          <p className="rounded-lg bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
            Thanks for your message! I&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-lg bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again or email me directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-[var(--accent)] px-6 py-4 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
