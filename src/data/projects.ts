export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  year: string;
  thumbnail: string;
  images: string[];
  description: string;
  problem: string;
  process: {
    step: number;
    title: string;
    content: string;
    image?: string;
  }[];
  results: string[];
  link?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "e-commerce-rebrand",
    title: "E-Commerce Brand Redesign",
    tagline: "From generic to iconic in 12 weeks",
    category: "Branding",
    tags: ["Branding", "UX", "Web Design"],
    year: "2024",
    thumbnail: "/projects/ecommerce-thumb.jpg",
    images: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg",
    ],
    description:
      "A complete brand overhaul for a mid-size e-commerce retailer struggling with recognition in a saturated market. The goal was to create a bold, memorable identity that would stand out on crowded shelves and screens.",
    problem:
      "The client had grown from a garage operation to a $2M/year business but still looked like a startup. Their packaging, website, and marketing materials were inconsistent and forgettable.",
    process: [
      {
        step: 1,
        title: "Discovery & Research",
        content:
          "We conducted 40 user interviews and analyzed competitor positioning. Key insight: customers valued authenticity and transparency over polish.",
      },
      {
        step: 2,
        title: "Visual Direction",
        content:
          "Developed a neo-brutalist direction—raw, honest, and bold. Black and white base with a striking red accent for calls-to-action.",
      },
      {
        step: 3,
        title: "Execution",
        content:
          "Applied the system across packaging, website, and marketing collateral. Created a modular design system for future growth.",
      },
    ],
    results: [
      "47% increase in brand recall in post-campaign survey",
      "23% improvement in conversion rate on the new site",
      "Featured in Design Week as 'Brand to Watch'",
    ],
    tech: ["Figma", "React", "Shopify"],
  },
  {
    id: "2",
    slug: "fitness-app-ux",
    title: "Fitness App UX Overhaul",
    tagline: "Making workouts actually happen",
    category: "UX Design",
    tags: ["UX", "Mobile", "Health"],
    year: "2024",
    thumbnail: "/projects/fitness-thumb.jpg",
    images: [
      "/projects/fitness-1.jpg",
      "/projects/fitness-2.jpg",
    ],
    description:
      "Redesign of a fitness tracking app with high download numbers but terrible retention. Users loved the concept but abandoned the app within two weeks.",
    problem:
      "The app had 500k downloads but only 8% 30-day retention. User research revealed overwhelming complexity and a lack of immediate gratification.",
    process: [
      {
        step: 1,
        title: "User Journey Mapping",
        content:
          "Mapped the complete user journey and identified friction points. The onboarding asked for 15+ data points before showing any value.",
      },
      {
        step: 2,
        title: "Progressive Disclosure",
        content:
          'Redesigned onboarding to get users to their first "workout complete" moment in under 60 seconds. Data collection spread across the first week.',
      },
      {
        step: 3,
        title: "Motivation System",
        content:
          "Implemented streak tracking and daily micro-goals. Added tactile, satisfying interactions throughout the app.",
      },
    ],
    results: [
      "30-day retention improved from 8% to 34%",
      "App Store rating increased from 3.2 to 4.6",
      "Featured as App of the Day in 12 countries",
    ],
    tech: ["Figma", "Framer", "React Native"],
  },
  {
    id: "3",
    slug: "editorial-website",
    title: "Editorial Magazine Website",
    tagline: "Reading should feel like an experience",
    category: "Web Design",
    tags: ["Web Design", "Typography", "Editorial"],
    year: "2023",
    thumbnail: "/projects/editorial-thumb.jpg",
    images: [
      "/projects/editorial-1.jpg",
      "/projects/editorial-2.jpg",
      "/projects/editorial-3.jpg",
      "/projects/editorial-4.jpg",
    ],
    description:
      "Complete website redesign for an independent literary magazine. The old site was a WordPress template that didn't reflect the publication's bold editorial voice.",
    problem:
      "The magazine had a passionate readership but their website felt generic. Submissions were down and ad revenue was declining.",
    process: [
      {
        step: 1,
        title: "Editorial Audit",
        content:
          "Analyzed top-performing articles and reader feedback. Readers wanted longer reads and a more immersive experience.",
      },
      {
        step: 2,
        title: "Typography System",
        content:
          "Built a custom typographic scale. Large, bold headlines. Generous whitespace. Reading-optimized body text.",
      },
      {
        step: 3,
        title: "Content-First Layout",
        content:
          "Designed layouts that put the writing first. Minimal chrome. Strategic use of accent color for navigation and CTAs.",
      },
    ],
    results: [
      "Average time on site increased by 89%",
      "Newsletter signups up 120%",
      "Webby Award nomination for Best Editorial Site",
    ],
    tech: ["Next.js", "Tailwind", "Sanity CMS"],
  },
  {
    id: "4",
    slug: "sustainability-dashboard",
    title: "Sustainability Metrics Dashboard",
    tagline: "Making carbon visible",
    category: "Product Design",
    tags: ["Product", "Data Viz", "SaaS"],
    year: "2023",
    thumbnail: "/projects/dashboard-thumb.jpg",
    images: [
      "/projects/dashboard-1.jpg",
      "/projects/dashboard-2.jpg",
    ],
    description:
      "B2B SaaS dashboard for companies tracking their environmental impact. The existing product was powerful but impenetrable—only power users could navigate it.",
    problem:
      'Customers had the data they needed but couldn\'t find it. Support tickets were dominated by "how do I..." questions.',
    process: [
      {
        step: 1,
        title: "Information Architecture",
        content:
          "Card sorting and tree testing with 30 customers. Reorganized navigation around user goals rather than data types.",
      },
      {
        step: 2,
        title: "Data Visualization",
        content:
          "Designed clear, scannable charts. Color-coded by impact level. Tooltips and contextual help throughout.",
      },
      {
        step: 3,
        title: "Report Builder",
        content:
          "Simplified the report creation flow. Template library. One-click export to PDF and presentation formats.",
      },
    ],
    results: [
      "Support tickets reduced by 45%",
      "NPS improved from 32 to 58",
      "Upsell to premium tier increased 28%",
    ],
    tech: ["Figma", "React", "D3.js"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}
