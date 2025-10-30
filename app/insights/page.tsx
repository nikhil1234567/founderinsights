"use client"

import { useMemo, useState } from 'react'
import TagChips from '@/components/TagChips'
import InsightCard from '@/components/InsightCard'
import { insights as allInsights } from '@/lib/insights'

type Tag = 'All' | 'AI & Society' | 'Women Founders' | 'Creative Leadership'

export default function InsightsPage() {
  const [tag, setTag] = useState<Tag>('All')

  const filtered = useMemo(() => {
    if (tag === 'All') return allInsights
    return allInsights.filter((i) => i.tag === tag)
  }, [tag])

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold">Insights</h1>
          <p className="mt-2 text-neutral-600">Perspectives at the intersection of people, product, and narrative.</p>
        </div>
        <TagChips active={tag} onChange={setTag} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((i) => (
          <InsightCard key={i.slug} insight={i} />
        ))}
      </div>
    </div>
  )
}

