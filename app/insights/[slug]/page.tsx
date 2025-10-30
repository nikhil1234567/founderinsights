import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getInsightBySlug } from '@/lib/insights'

type Params = { slug: string }

export default function InsightDetail({ params }: { params: Params }) {
  const post = getInsightBySlug(params.slug)
  if (!post) return notFound()
  return (
    <article className="prose-content">
      <div className="text-xs text-neutral-500 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700">
          {post.tag}
        </span>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      </div>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold">{post.title}</h1>
      <p className="mt-3 max-w-3xl text-neutral-700">{post.excerpt}</p>
      <div className="mt-8 grid gap-4 max-w-3xl text-neutral-800">
        <p>
          This is a sample detail page. Replace with your long-form content, images, and references. We recommend keeping paragraphs short, using descriptive headings, and adding summaries for scannability.
        </p>
        <p>
          Consider adding callouts for frameworks, templates, or worksheets. Clear structure and outcomes make insights actionable for founders and teams.
        </p>
      </div>
      <Link href="/insights" className="mt-10 inline-flex text-accent font-medium">← Back to Insights</Link>
    </article>
  )
}

