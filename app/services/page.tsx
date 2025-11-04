import Link from 'next/link'
import ServiceIcon from '@/components/ServiceIcon'
import BlobShape from '@/components/BlobShape'
import DecorativeShape from '@/components/DecorativeShape'
import ScrollFadeIn from '@/components/ScrollFadeIn'

const services = [
  {
    title: 'Thought Leadership Content',
    desc: 'Publishing across essays, books, podcasts, and online courses for mainstream reach.',
    icon: 'content' as const,
  },
  {
    title: 'Speaking & Events',
    desc: 'Keynotes, workshops, and conferences tailored to founders, innovators, and educators.',
    icon: 'speaking' as const,
  },
  {
    title: 'Consulting',
    desc: 'Advisory for corporations, schools, and incubators on entrepreneurship and innovation culture.',
    icon: 'consulting' as const,
  },
  {
    title: 'Educational Products',
    desc: 'Apps and tools that help teach modern skills and concepts.',
    icon: 'products' as const,
  },
]

export default function ServicesPage() {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-transparent -z-10" />
      <BlobShape position="top-left" size="lg" />
      <div className="relative z-10">
        <ScrollFadeIn>
          <h1 className="font-serif text-3xl font-semibold">Services</h1>
          <p className="mt-2 text-neutral-700 max-w-2xl">A platform to launch thought leaders and deliver high-signal learning across sectors.</p>
        </ScrollFadeIn>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, index) => (
            <ScrollFadeIn key={s.title} delay={index * 100}>
              <div className="rounded-lg border border-blue-200/70 glass-strong p-6 transition-all hover:scale-105 hover:shadow-lg">
                <ServiceIcon type={s.icon} className="w-6 h-6" />
                <h3 className="font-medium text-lg text-neutral-800">{s.title}</h3>
                <p className="mt-2 text-neutral-800 text-sm">{s.desc}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center text-accent font-medium transition-all hover:scale-105">Inquire →</Link>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
      <DecorativeShape variant="dot-pattern" className="mt-12" />
    </div>
  )
}

