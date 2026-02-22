const testimonials = [
  {
    quote:
      "The scholarship from Lumina did not just change my life. It changed my entire family's trajectory. I am now the first doctor in my village.",
    name: "Dr. Amara Osei",
    role: "Bright Minds Alumna, Ghana",
  },
  {
    quote:
      "Working with Lumina taught me that sustainable change begins when communities lead. Their approach is unlike any organization I have partnered with.",
    name: "Prof. Elena Marchetti",
    role: "Partner, University of Geneva",
  },
  {
    quote:
      "The clean water project transformed our village. Our children are healthier, our women have more time, and our future feels possible again.",
    name: "Maria Santos",
    role: "Community Leader, Philippines",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="bg-section-alt px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Voices of Change
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Stories from the
            <br />
            <span className="italic">communities we serve</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col justify-between border border-border bg-card p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-lg lg:p-12"
            >
              <div>
                <svg
                  className="mb-6 h-8 w-8 text-accent/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="font-serif text-lg font-light italic leading-[1.7] text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  {item.name}
                </p>
                <p className="mt-1 text-xs font-light tracking-wide text-muted">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
