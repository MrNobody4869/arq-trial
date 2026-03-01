"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Have a question, collaboration idea, or just want to say hello? I&apos;d
          love to hear from you.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="Your name"
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="you@example.com"
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-zinc-300"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            disabled={status === "loading"}
          >
            <option value="">Select a topic</option>
            <option value="general">General inquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="speaking">Speaking / Events</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="Your message..."
            disabled={status === "loading"}
          />
        </div>

        {status === "success" && (
          <p className="text-sm text-emerald-500">
            Thank you! Your message has been sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try again or email me directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-[var(--accent)] px-6 py-3 font-medium text-zinc-950 hover:bg-[var(--accent-muted)] disabled:opacity-70 transition-colors sm:w-auto"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
