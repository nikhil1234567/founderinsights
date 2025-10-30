import Link from 'next/link'
import type { Insight } from '@/lib/insights'

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group block rounded-lg border border-neutral-200/70 p-5 transition hover:shadow-sm hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="text-xs text-neutral-500 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700">
          {insight.tag}
        </span>
        <time dateTime={insight.date}>{new Date(insight.date).toLocaleDateString()}</time>
      </div>
      <h3 className="mt-3 font-serif text-lg font-semibold text-neutral-900 group-hover:text-accent transition-colors">
        {insight.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600">{insight.excerpt}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
        Read more
        <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

