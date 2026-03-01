import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Contact
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Have a project in mind? Send a message and I&apos;ll get back to you soon.
        </p>
        <ContactForm />
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You can also reach me at{" "}
            <a href="mailto:hello@example.com" className="text-corporate-blue dark:text-corporate-accent hover:underline">
              hello@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
