export default function Donate() {
  return (
    <section id="donate" className="relative bg-background px-6 py-28 lg:py-36">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          Join Us
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Your generosity
          <br />
          <span className="italic">changes everything</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-[1.8] text-muted">
          Every contribution, no matter the size, is a step toward a world where
          opportunity is not a privilege but a right. Stand with us in creating
          the future that every community deserves.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-accent px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-accent-light"
          >
            Donate Now
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-foreground px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Become a Partner
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 sm:grid-cols-3">
          {[
            { amount: "$25", impact: "Provides school supplies for one child" },
            { amount: "$100", impact: "Funds a community health visit" },
            { amount: "$500", impact: "Sponsors a clean water installation" },
          ].map((tier) => (
            <div key={tier.amount} className="text-center">
              <p className="font-serif text-3xl font-light text-accent">
                {tier.amount}
              </p>
              <p className="mt-2 text-xs font-light leading-relaxed text-muted">
                {tier.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
