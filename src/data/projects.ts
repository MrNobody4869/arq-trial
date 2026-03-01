export type ProjectCategory = "copywriting" | "content" | "editorial" | "marketing" | "social"

export interface Project {
  id: string
  title: string
  client: string
  category: ProjectCategory
  description: string
  deliverables: string[]
  image: string
  year: string
}

export const projects: Project[] = [
  {
    id: "tech-startup-blog",
    title: "Tech Startup Blog Series",
    client: "TechFlow Solutions",
    category: "content",
    description: "Developed a 12-part blog series covering product updates, industry insights, and thought leadership. Content drove 40% increase in organic traffic.",
    deliverables: ["Blog articles", "SEO optimization", "Content strategy"],
    image: "/images/project-1.jpg",
    year: "2024",
  },
  {
    id: "fintech-landing",
    title: "Fintech Landing Page Copy",
    client: "SecurePay Finance",
    category: "copywriting",
    description: "Crafted conversion-focused copy for a new SaaS landing page. Clear value propositions and compelling CTAs aligned with target audience.",
    deliverables: ["Landing page copy", "Headlines", "CTA optimization"],
    image: "/images/project-2.jpg",
    year: "2024",
  },
  {
    id: "brand-editorial",
    title: "Brand Editorial Guidelines",
    client: "Luxe Home Interiors",
    category: "editorial",
    description: "Created comprehensive editorial guidelines and tone-of-voice documentation for a luxury home furnishings brand.",
    deliverables: ["Style guide", "Tone documentation", "Sample copy"],
    image: "/images/project-3.jpg",
    year: "2023",
  },
  {
    id: "ecommerce-email",
    title: "E-commerce Email Campaigns",
    client: "Urban Threads Co.",
    category: "marketing",
    description: "Wrote seasonal email campaigns and promotional content. Campaigns achieved above-industry open and click-through rates.",
    deliverables: ["Email sequences", "Subject lines", "Promotional copy"],
    image: "/images/project-4.jpg",
    year: "2023",
  },
  {
    id: "social-content",
    title: "Social Media Content Calendar",
    client: "GreenLeaf Wellness",
    category: "social",
    description: "Developed a full quarter of social content including captions, carousel copy, and campaign messaging for a wellness brand.",
    deliverables: ["Content calendar", "Caption writing", "Campaign copy"],
    image: "/images/project-5.jpg",
    year: "2023",
  },
  {
    id: "saas-docs",
    title: "SaaS Documentation & Help Center",
    client: "CloudSync Pro",
    category: "content",
    description: "Wrote clear, user-friendly documentation and help center articles for a B2B software product.",
    deliverables: ["User guides", "FAQ content", "Video scripts"],
    image: "/images/project-6.jpg",
    year: "2024",
  },
]

export const categories: { value: ProjectCategory; label: string }[] = [
  { value: "copywriting", label: "Copywriting" },
  { value: "content", label: "Content" },
  { value: "editorial", label: "Editorial" },
  { value: "marketing", label: "Marketing" },
  { value: "social", label: "Social Media" },
]
