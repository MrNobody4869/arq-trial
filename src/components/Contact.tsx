import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Contact
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          Get in touch — I&apos;d love to hear from you
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
