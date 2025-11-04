import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getInsightBySlug } from '@/lib/insights'
import BlobShape from '@/components/BlobShape'
import DecorativeShape from '@/components/DecorativeShape'

type Params = { slug: string }

export default function InsightDetail({ params }: { params: Params }) {
  const post = getInsightBySlug(params.slug)
  if (!post) return notFound()
  return (
    <article className="prose-content relative py-6 sm:py-8">
      <BlobShape position="top-right" size="md" />
      <div className="relative z-10">
        <div className="text-xs text-neutral-600 flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-neutral-800">
            {post.tag}
          </span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <h1 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">{post.title}</h1>
        <p className="mt-3 max-w-3xl text-sm sm:text-base text-neutral-800">{post.excerpt}</p>
        <DecorativeShape variant="circle" className="my-6" />
        <div className="mt-8 grid gap-4 max-w-3xl text-neutral-800">
          <p>
            This is a sample detail page. Replace with your long-form content, images, and references. We recommend keeping paragraphs short, using descriptive headings, and adding summaries for scannability.
          </p>
          <p>
            Consider adding callouts for frameworks, templates, or worksheets. Clear structure and outcomes make insights actionable for founders and teams.
          </p>
        </div>
        <Link href="/insights" className="mt-8 sm:mt-10 inline-flex items-center text-accent font-medium touch-manipulation min-h-[44px]">← Back to Insights</Link>
      </div>
    </article>
  )
}

