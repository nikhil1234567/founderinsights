import Image from 'next/image'

const team = [
  {
    name: 'Marion Annau, JD, PhD',
    role: 'Chief Executive Officer',
    bio: 'Academic and entrepreneur specializing in constitutional law, technology, and democratic theory. Her research extends Rawlsian justice to protect freedom of speech and thought in the age of AI, proposing new safeguards for civic deliberation while maintaining free expression for commercial actors.',
    image: '/team/Marion.jpg',
  },
  {
    name: 'Reza Satchu',
    role: 'Senior Executive',
    bio: 'Entrepreneur and investor with extensive experience founding, operating, and advising high-growth companies, with a focus on leadership development and innovation.',
    image: '/team/reza.jpg',
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
    <div>
      <h1 className="font-serif text-3xl font-semibold">Team</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">A senior team combining academic rigor and entrepreneurial execution.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.name} className="rounded-lg border border-neutral-200/70 p-6">
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full bg-neutral-100 overflow-hidden relative">
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
            <h3 className="mt-4 font-medium">{m.name}</h3>
            <div className="text-sm text-neutral-600">{m.role}</div>
            <p className="mt-2 text-sm text-neutral-700">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

