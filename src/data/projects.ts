export type ProjectCategory = "copywriting" | "content" | "branding" | "blog" | "social";

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: ProjectCategory;
  description: string;
  excerpt: string;
  image?: string;
  tags: string[];
  year: string;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "copywriting", label: "Copywriting" },
  { id: "content", label: "Content Strategy" },
  { id: "branding", label: "Brand Voice" },
  { id: "blog", label: "Blog & Editorial" },
  { id: "social", label: "Social Media" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Tech Startup Landing Page",
    client: "Nexus Innovations",
    category: "copywriting",
    description:
      "Developed compelling landing page copy for a B2B SaaS product launch. Focused on clear value propositions and conversion-optimized headlines. Deliverables included hero section, feature descriptions, and call-to-action variations.",
    excerpt: "Conversion-focused landing page copy for B2B SaaS launch.",
    tags: ["Landing Pages", "B2B", "Conversion"],
    year: "2024",
  },
  {
    id: "2",
    title: "Industry Blog Series",
    client: "Finance Corp",
    category: "blog",
    description:
      "Wrote a 12-article thought leadership series for a financial services brand. Topics covered market trends, investment insights, and regulatory updates. Articles established the client as an industry authority and drove organic search traffic.",
    excerpt: "12-article thought leadership series for financial services.",
    tags: ["Thought Leadership", "SEO", "Finance"],
    year: "2024",
  },
  {
    id: "3",
    title: "Brand Voice Guidelines",
    client: "EcoRetail",
    category: "branding",
    description:
      "Created comprehensive brand voice documentation for a sustainability-focused retailer. Defined tone, terminology, and messaging frameworks across customer touchpoints. Ensured consistency across marketing, support, and product communications.",
    excerpt: "Brand voice documentation and messaging frameworks.",
    tags: ["Brand Voice", "Guidelines", "Sustainability"],
    year: "2023",
  },
  {
    id: "4",
    title: "Product Launch Campaign",
    client: "FitLife App",
    category: "content",
    description:
      "Designed content strategy and wrote copy for a fitness app product launch. Produced email sequences, social posts, and in-app messaging. Campaign achieved 3x benchmark engagement rates.",
    excerpt: "Multi-channel content strategy for app launch campaign.",
    tags: ["Email", "Social Media", "Product Launch"],
    year: "2024",
  },
  {
    id: "5",
    title: "LinkedIn Thought Leadership",
    client: "Executive Partners",
    category: "social",
    description:
      "Developed and wrote LinkedIn content for C-suite executives. Created posts, articles, and comment scripts that increased profile visibility and generated qualified B2B leads.",
    excerpt: "Executive LinkedIn content and engagement strategy.",
    tags: ["LinkedIn", "B2B", "Executive"],
    year: "2023",
  },
  {
    id: "6",
    title: "Website Redesign Copy",
    client: "HealthFirst Clinic",
    category: "copywriting",
    description:
      "Rewrote all website copy for a multi-location healthcare provider. Simplified complex medical information for patient audiences. Improved clarity and accessibility across service pages.",
    excerpt: "Patient-focused website copy for healthcare provider.",
    tags: ["Healthcare", "Web Copy", "Accessibility"],
    year: "2023",
  },
];
