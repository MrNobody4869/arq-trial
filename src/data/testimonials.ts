export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Exceptional copy that transformed our landing page performance. Clear, compelling, and conversion-focused. Highly recommend for B2B projects.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "Nexus Innovations",
  },
  {
    id: "2",
    quote:
      "The blog series exceeded our expectations. Each piece was well-researched and positioned us as thought leaders in our space. Traffic and engagement both grew significantly.",
    author: "Marcus Webb",
    role: "Content Lead",
    company: "Finance Corp",
  },
  {
    id: "3",
    quote:
      "Working together on our brand voice was a game-changer. We now have clear guidelines that our entire team uses. The consistency across channels has never been better.",
    author: "Elena Rodriguez",
    role: "Brand Manager",
    company: "EcoRetail",
  },
];
