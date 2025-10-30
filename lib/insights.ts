export type Insight = {
  slug: string
  title: string
  excerpt: string
  tag: 'AI & Society' | 'Women Founders' | 'Creative Leadership'
  date: string
}

export const insights: Insight[] = [
  {
    slug: 'ai-ethics-in-early-stage-products',
    title: 'AI Ethics in Early-Stage Products',
    excerpt: 'Guidelines for founders shipping AI features responsibly from day one.',
    tag: 'AI & Society',
    date: '2025-06-10',
  },
  {
    slug: 'fundraising-stories-from-women-founders',
    title: 'Fundraising Stories from Women Founders',
    excerpt: 'Tactics, narratives, and boundaries that shift the investor conversation.',
    tag: 'Women Founders',
    date: '2025-05-18',
  },
  {
    slug: 'leading-creatively-in-ambiguous-markets',
    title: 'Leading Creatively in Ambiguous Markets',
    excerpt: 'How creative leadership frameworks de-risk decisions in uncertain environments.',
    tag: 'Creative Leadership',
    date: '2025-04-02',
  },
  {
    slug: 'designing-trust-ux-for-ml-products',
    title: 'Designing Trust UX for ML Products',
    excerpt: 'Interfaces that build user trust without hiding the probabilistic nature of ML.',
    tag: 'AI & Society',
    date: '2025-03-21',
  },
  {
    slug: 'founder-wellness-and-sustainable-output',
    title: 'Founder Wellness and Sustainable Output',
    excerpt: 'Burnout prevention as a strategic advantage in high-velocity teams.',
    tag: 'Women Founders',
    date: '2025-02-14',
  },
  {
    slug: 'storytelling-that-aligns-teams-and-investors',
    title: 'Storytelling that Aligns Teams and Investors',
    excerpt: 'A practical narrative structure for clarity and momentum.',
    tag: 'Creative Leadership',
    date: '2025-01-29',
  },
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug)
}

