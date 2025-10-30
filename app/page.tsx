import Link from 'next/link'
import InsightCard from '@/components/InsightCard'
import { insights } from '@/lib/insights'

export default function HomePage() {
  const recent = insights.slice(0, 6)
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero */}
      <section className="text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Amplifying Founders. Empowering Ideas.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
          A platform for sophisticated thought leadership at the intersection of entrepreneurship, AI, and society. We foster the founder mindset and help launch voices into the mainstream.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-white font-medium shadow-sm transition hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Start a conversation
          </Link>
          <Link href="/insights" className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-3 text-neutral-800 hover:bg-neutral-50 transition">
            Explore insights
          </Link>
        </div>
      </section>

      {/* About snapshot */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold">About</h2>
          <p className="mt-3 text-neutral-700">
            Founder Insights monetizes thought leadership while advancing the societal conversation on AI. We build brands for thinkers and practitioners, manage speakers and writers, publish across formats, and deliver executive education.
          </p>
          <Link href="/about" className="mt-4 inline-flex text-accent font-medium">Learn more →</Link>
        </div>
        <div className="rounded-lg border border-neutral-200/70 p-5">
          <h3 className="font-medium">What we do</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
            <li>Thought leadership content: essays, podcasts, books, online courses</li>
            <li>Speaking & events: keynotes, workshops, conferences</li>
            <li>Consulting for corporations, schools, and incubators</li>
            <li>Executive education on entrepreneurship, AI ethics, and digital society</li>
          </ul>
        </div>
      </section>

      {/* Recent Insights */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold">Recent Insights</h2>
          <Link href="/insights" className="text-sm text-accent">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((i) => (
            <InsightCard key={i.slug} insight={i} />
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section>
        <h2 className="font-serif text-2xl font-semibold">Collaborations</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-neutral-500">
          {['Atlas', 'Nova', 'Kite', 'Harbor'].map((name) => (
            <div key={name} className="rounded-md border border-neutral-200/70 py-8 text-center text-sm">
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

