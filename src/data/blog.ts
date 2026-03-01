export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Tips for Writing Compelling B2B Copy",
    excerpt: "Learn how to connect with decision-makers and drive conversions through strategic B2B copywriting techniques.",
    content: `
      B2B copywriting requires a different approach than consumer-facing content. Decision-makers are pressed for time and need clear value propositions.

      ## 1. Lead with the Problem
      Start by acknowledging the challenges your audience faces. This creates immediate relevance.

      ## 2. Use Data and Specificity
      Vague claims fall flat. Use concrete numbers, case studies, and specific outcomes.

      ## 3. Address Objections Proactively
      Anticipate concerns and address them within your copy. This builds trust.

      ## 4. Keep It Scannable
      Use headers, bullet points, and short paragraphs. Busy readers skim first.

      ## 5. Strong, Single CTA
      One clear call-to-action outperforms multiple competing options.
    `,
    author: "Writer Portfolio",
    date: "2024-02-15",
    category: "Copywriting",
    slug: "5-tips-writing-compelling-b2b-copy",
  },
  {
    id: "2",
    title: "Content Strategy for SaaS: A Practical Guide",
    excerpt: "A framework for building content that supports the buyer journey and generates qualified leads.",
    content: `
      SaaS companies often struggle with content that converts. Here's a practical framework.

      ## Map the Buyer Journey
      Identify each stage: Awareness, Consideration, Decision. Create content for each.

      ## Focus on Problem-Aware Content
      Most buyers search for solutions to specific problems. Match your content to those queries.

      ## Repurpose Strategically
      One webinar can become blog posts, social content, and email sequences.

      ## Measure What Matters
      Track metrics aligned with business goals: lead quality, not just traffic.
    `,
    author: "Writer Portfolio",
    date: "2024-02-08",
    category: "Content",
    slug: "content-strategy-saas-practical-guide",
  },
  {
    id: "3",
    title: "Why Your Brand Voice Matters",
    excerpt: "Consistency in brand voice builds trust and recognition. Here's how to define and maintain yours.",
    content: `
      Brand voice is more than tone—it's the consistent personality behind all your communications.

      ## Define Your Pillars
      What values does your brand embody? Friendly? Authoritative? Disruptive? Document these.

      ## Create a Style Guide
      A simple guide helps everyone on your team—and external writers—stay consistent.

      ## Test with Real Examples
      Write sample sentences that match (and don't match) your voice. Use these as reference.

      ## Review Regularly
      Brand voice can evolve. Revisit your guidelines annually.
    `,
    author: "Writer Portfolio",
    date: "2024-01-28",
    category: "Editorial",
    slug: "why-brand-voice-matters",
  },
  {
    id: "4",
    title: "Email Copy That Converts: Subject Lines That Work",
    excerpt: "Subject lines are your first impression. Learn the principles behind opens and engagement.",
    content: `
      The subject line makes or breaks your email. Here are principles that work.

      ## Curiosity vs. Clarity
      Balance intrigue with clarity. Vague curiosity often gets ignored; be specific about value.

      ## Personalization Beyond Names
      Reference past behavior, preferences, or segment-specific pain points.

      ## Length Considerations
      Mobile previews truncate. Front-load the most compelling words.

      ## A/B Test Systematically
      Change one variable at a time to learn what resonates with your audience.
    `,
    author: "Writer Portfolio",
    date: "2024-01-15",
    category: "Marketing",
    slug: "email-copy-subject-lines-that-work",
  },
]
