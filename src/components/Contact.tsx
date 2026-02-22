"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-section-alt px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
              We would love
              <br />
              <span className="italic">to hear from you</span>
            </h2>
            <p className="mt-6 text-base font-light leading-[1.8] text-muted">
              Whether you are interested in volunteering, partnership
              opportunities, or simply want to learn more about our work, our
              team is here to connect with you.
            </p>

            <div className="mt-12 space-y-6">
              {[
                {
                  label: "Email",
                  value: "hello@luminafoundation.org",
                  href: "mailto:hello@luminafoundation.org",
                },
                {
                  label: "Phone",
                  value: "+1 (555) 234-5678",
                  href: "tel:+15552345678",
                },
                {
                  label: "Address",
                  value: "142 Grace Avenue, Suite 300, New York, NY 10013",
                  href: "#",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="mt-1 block text-sm font-light text-foreground transition-colors hover:text-accent"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b border-border bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b border-border bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  placeholder="Tell us how you would like to get involved..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
