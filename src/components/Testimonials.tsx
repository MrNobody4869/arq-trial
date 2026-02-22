const testimonials = [
  {
    quote:
      "Taskflow transformed how we ship. We went from chaotic spreadsheets to a clear roadmap in one week. Our sprint velocity improved 40%.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    avatar: "SC",
  },
  {
    quote:
      "Finally, a tool that gets startups. No bloat, no complexity—just what we need to stay aligned. The Pro plan pays for itself in time saved.",
    author: "Marcus Rodriguez",
    role: "Co-founder, FlowState",
    avatar: "MR",
  },
  {
    quote:
      "We tried five project management tools before Taskflow. This is the one that actually stuck. The team loves it.",
    author: "Emily Watson",
    role: "Head of Product, LaunchPad",
    avatar: "EW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-600">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Loved by startup teams
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
