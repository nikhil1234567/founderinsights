import ServiceIcon from '@/components/ServiceIcon'
import BlobShape from '@/components/BlobShape'
import DecorativeShape from '@/components/DecorativeShape'
import WavyDivider from '@/components/WavyDivider'

export default function AboutPage() {
  return (
    <div className="prose-content">
      <div className="relative">
        <BlobShape position="top-right" size="lg" />
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold">About</h1>
        <p className="mt-4 text-neutral-800 max-w-3xl">
          Founder Insights is a for-profit platform dedicated to monetizing sophisticated thought leadership at the intersection of entrepreneurship, AI, and society. Our purpose is to foster the founder mindset—psychological and strategic capabilities to start and grow ventures—while engaging the societal implications of artificial intelligence for young people, families, and future leaders.
        </p>
      </div>

      <WavyDivider className="my-12" />

      <h2 className="mt-10 font-serif text-2xl font-semibold">What we do</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'Thought Leadership Content', desc: 'Publishing across essays, books, podcasts, and online courses.', icon: 'content' as const },
          { title: 'Speaking & Events', desc: 'Keynotes, workshops, and conferences for founders and innovators.', icon: 'speaking' as const },
          { title: 'Consulting', desc: 'Advising corporations, schools, and incubators on innovation culture.', icon: 'consulting' as const },
          { title: 'Educational Products', desc: 'Apps and tools that help teach modern skills and concepts.', icon: 'products' as const },
        ].map((v) => (
          <li key={v.title} className="rounded-lg border border-blue-200/70 bg-white p-5">
            <ServiceIcon type={v.icon} className="w-6 h-6" />
            <div className="font-medium text-neutral-800">{v.title}</div>
            <div className="mt-1 text-neutral-800 text-sm">{v.desc}</div>
          </li>
        ))}
      </ul>
      
      <DecorativeShape variant="arc" className="my-8" />

      <h2 className="mt-10 font-serif text-2xl font-semibold">Values</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'Insight with Impact', desc: 'We favor clarity that ships and stories that move people to act.' },
          { title: 'Human-Driven Strategy', desc: 'We center people—users, teams, and communities—in every decision.' },
          { title: 'Thoughtful Innovation', desc: 'We adopt new tools when they serve trust, quality, and efficiency.' },
          { title: 'Collaboration & Clarity', desc: 'We work openly, ask precise questions, and seek shared understanding.' },
        ].map((v) => (
          <li key={v.title} className="rounded-lg border border-blue-200/70 bg-white p-5">
            <div className="font-medium text-neutral-800">{v.title}</div>
            <div className="mt-1 text-neutral-800 text-sm">{v.desc}</div>
          </li>
        ))}
      </ul>
      <div className="relative mt-12">
        <BlobShape position="bottom-left" size="md" />
      </div>
    </div>
  )
}

