import Link from 'next/link'
import InsightCard from '@/components/InsightCard'
import { insights } from '@/lib/insights'
import FloatingCircles from '@/components/FloatingCircles'
import WavyDivider from '@/components/WavyDivider'
import BlobShape from '@/components/BlobShape'
import DecorativeShape from '@/components/DecorativeShape'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export default function HomePage() {
  const recent = insights.slice(0, 6)
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Hero */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-blue-200/20" />
        <FloatingCircles />
        <div className="relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight gradient-text">
            Amplifying Founders. Empowering Ideas.
          </h1>
        <p className="mx-auto mt-5 max-w-2xl text-neutral-700">
          A platform for sophisticated thought leadership at the intersection of entrepreneurship, AI, and society. We foster the founder mindset and help launch voices into the mainstream.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-accent to-accent-light px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Start a conversation
          </Link>
          <Link href="/insights" className="inline-flex items-center rounded-md border border-blue-200 bg-white/80 backdrop-blur-sm px-5 py-3 text-neutral-800 transition-all hover:bg-white hover:scale-105 hover:shadow-md">
            Explore insights
          </Link>
        </div>
        </div>
      </section>

      <WavyDivider />

      {/* About snapshot */}
      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-start py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-transparent -z-10" />
        <BlobShape position="top-left" size="md" />
        <ScrollFadeIn>
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-semibold">About</h2>
          <p className="mt-3 text-neutral-800">
            Founder Insights monetizes thought leadership while advancing the societal conversation on AI. We build brands for thinkers and practitioners, manage speakers and writers, publish across formats, and create educational products.
          </p>
            <Link href="/about" className="mt-4 inline-flex text-accent font-medium">Learn more →</Link>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <div className="rounded-lg border border-blue-200/70 glass-strong p-5 transition-all hover:scale-105 hover:shadow-lg">
          <h3 className="font-medium text-neutral-800">What we do</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-800 list-disc list-inside">
            <li>Thought leadership content: essays, podcasts, books, online courses</li>
            <li>Speaking & events: keynotes, workshops, conferences</li>
            <li>Consulting for corporations, schools, and incubators</li>
            <li>Educational products: Apps and tools that heplp teach skills and concepts</li>
          </ul>
          </div>
        </ScrollFadeIn>
      </section>

      <WavyDivider flip />

      {/* Recent Insights */}
      <section className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-100/20 via-transparent to-transparent -z-10" />
        <BlobShape position="bottom-right" size="sm" />
        <ScrollFadeIn>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl font-semibold">Recent Insights</h2>
            <Link href="/insights" className="text-sm text-accent">View all</Link>
          </div>
        </ScrollFadeIn>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((i, index) => (
            <div key={i.slug} className={`animate-stagger${index % 3 === 0 ? '1' : index % 3 === 1 ? '2' : '3'}`}>
              <InsightCard insight={i} />
            </div>
          ))}
        </div>
        <DecorativeShape variant="circle" className="mt-8" />
      </section>

      <WavyDivider />

      {/* Collaborations */}
      <section className="relative">
        <BlobShape position="top-right" size="lg" />
        <h2 className="font-serif text-2xl font-semibold">Collaborations</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-neutral-600">
          {['Atlas', 'Nova', 'Kite', 'Harbor'].map((name) => (
            <div key={name} className="rounded-md border border-blue-200/70 bg-white py-8 text-center text-sm">
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

