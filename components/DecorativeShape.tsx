type DecorativeShapeProps = {
  variant?: 'circle' | 'arc' | 'dot-pattern'
  className?: string
}

export default function DecorativeShape({ variant = 'circle', className = '' }: DecorativeShapeProps) {
  if (variant === 'circle') {
    return (
      <div className={`flex justify-center items-center ${className}`} aria-hidden="true">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-blue-300/30" />
          <div className="w-3 h-3 rounded-full bg-blue-300/40" />
          <div className="w-2 h-2 rounded-full bg-blue-300/30" />
        </div>
      </div>
    )
  }

  if (variant === 'arc') {
    return (
      <div className={`flex justify-center ${className}`} aria-hidden="true">
        <svg width="120" height="40" viewBox="0 0 120 40" className="opacity-30">
          <path
            d="M 0 20 Q 30 0 60 20 Q 90 40 120 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-300"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'dot-pattern') {
    return (
      <div className={`flex justify-center gap-2 ${className}`} aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300/40" />
        ))}
      </div>
    )
  }

  return null
}

