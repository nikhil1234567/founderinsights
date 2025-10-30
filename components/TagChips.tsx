"use client"

type Tag = 'All' | 'AI & Society' | 'Women Founders' | 'Creative Leadership'

export default function TagChips({
  active,
  onChange,
}: {
  active: Tag
  onChange: (tag: Tag) => void
}) {
  const tags: Tag[] = ['All', 'AI & Society', 'Women Founders', 'Creative Leadership']
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const selected = active === tag
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onChange(tag)}
            className={`rounded-full border px-3 py-1 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              selected
                ? 'border-accent bg-accent text-white'
                : 'border-neutral-200/70 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
            aria-pressed={selected}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}

