import Link from 'next/link'

const services = [
  {
    title: 'Thought Leadership Content',
    desc: 'Publishing across essays, books, podcasts, and online courses for mainstream reach.',
  },
  {
    title: 'Speaking & Events',
    desc: 'Keynotes, workshops, and conferences tailored to founders, innovators, and educators.',
  },
  {
    title: 'Consulting',
    desc: 'Advisory for corporations, schools, and incubators on entrepreneurship and innovation culture.',
  },
  {
    title: 'Executive Education',
    desc: 'Curricula and programs on entrepreneurship, AI ethics, and digital society.',
  },
]

export default function ServicesPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold">Services</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">A platform to launch thought leaders and deliver high-signal learning across sectors.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-neutral-200/70 p-6">
            <h3 className="font-medium text-lg">{s.title}</h3>
            <p className="mt-2 text-neutral-700 text-sm">{s.desc}</p>
            <Link href="/contact" className="mt-4 inline-flex text-accent font-medium">Inquire →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

