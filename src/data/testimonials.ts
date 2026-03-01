export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Professional, on-time, and the quality exceeded our expectations. The blog content consistently performs well and aligns perfectly with our brand.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions",
  },
  {
    id: "2",
    quote: "Turned complex product features into clear, compelling copy that resonates with our B2B audience. Conversion rates improved significantly.",
    author: "James Mitchell",
    role: "Head of Product",
    company: "SecurePay Finance",
  },
  {
    id: "3",
    quote: "The editorial guidelines they created gave our entire team clarity and consistency. Our brand voice finally feels cohesive across all channels.",
    author: "Emma Rodriguez",
    role: "Creative Director",
    company: "Luxe Home Interiors",
  },
]
