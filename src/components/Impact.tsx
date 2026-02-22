const stats = [
  { value: "2.4M+", label: "Lives Impacted", detail: "Across 35 countries" },
  { value: "180+", label: "Active Programs", detail: "In education & health" },
  { value: "95%", label: "Funds to Field", detail: "Direct program spending" },
  { value: "16", label: "Years of Service", detail: "Since our founding" },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-foreground px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-light">
            Our Impact
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-background md:text-5xl">
            Numbers that tell
            <br />
            <span className="italic">our story</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-foreground p-10 text-center lg:p-12"
            >
              <p className="font-serif text-5xl font-light tracking-tight text-accent-light md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-background">
                {stat.label}
              </p>
              <p className="mt-2 text-xs font-light tracking-wide text-background/50">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mx-auto max-w-2xl text-base font-light leading-[1.8] text-background/60">
            Every number represents a life changed, a community strengthened, a
            future made brighter. Our commitment to transparency ensures that
            your generosity reaches those who need it most.
          </p>
        </div>
      </div>
    </section>
  );
}
