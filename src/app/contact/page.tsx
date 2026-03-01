import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white mb-2">
          Get in Touch
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Have a project in mind? Send a message and I&apos;ll respond as soon as
          possible.
        </p>

        <ContactForm />

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Prefer email? Reach out directly at{" "}
            <a
              href="mailto:hello@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
