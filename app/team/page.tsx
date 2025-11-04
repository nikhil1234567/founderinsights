import Image from 'next/image'
import BlobShape from '@/components/BlobShape'
import DecorativeShape from '@/components/DecorativeShape'
import ScrollFadeIn from '@/components/ScrollFadeIn'

const team = [
  {
    name: 'Marion Annau',
    role: 'Chief Executive Officer',
    bio: 'Academic and entrepreneur specializing in constitutional law, technology, and democratic theory. Her research extends Rawlsian justice to protect freedom of speech and thought in the age of AI, proposing new safeguards for civic deliberation while maintaining free expression for commercial actors. Degrees: BA, LLB, MA, candidate doctor of juridical science.',
    image: '/team/marion.jpg',
  },
  {
    name: 'Mandy Anger',
    role: 'Chief Financial Officer',
    bio: 'Financial leader overseeing planning, controls, and operational excellence to support FI\'s growth and partnerships.',
    image: '/team/mandy.jpg',
  },
]

export default function TeamPage() {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-transparent -z-10" />
      <BlobShape position="top-right" size="lg" />
      <div className="relative z-10">
        <ScrollFadeIn>
          <h1 className="font-serif text-3xl font-semibold">Team</h1>
          <p className="mt-2 text-neutral-700 max-w-2xl">A senior team combining academic rigor and entrepreneurial execution.</p>
        </ScrollFadeIn>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m, index) => (
          <ScrollFadeIn key={m.name} delay={index * 150}>
            <div className="rounded-lg border border-blue-200/70 glass-strong p-6 transition-all hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full bg-blue-100 overflow-hidden relative">
                {m.image && (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>
            <h3 className="mt-4 font-medium text-neutral-800">{m.name}</h3>
            <div className="text-sm text-neutral-700">{m.role}</div>
              <p className="mt-2 text-sm text-neutral-800">{m.bio}</p>
            </div>
          </ScrollFadeIn>
        ))}
        </div>
        <DecorativeShape variant="circle" className="mt-12" />
      </div>
      <BlobShape position="bottom-left" size="md" />
    </div>
  )
}

