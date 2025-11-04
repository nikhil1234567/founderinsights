type WavyDividerProps = {
  flip?: boolean
  className?: string
}

export default function WavyDivider({ flip = false, className = '' }: WavyDividerProps) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 ${flip ? 'transform rotate-180' : ''}`}
      >
        <path
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-blue-50"
        />
      </svg>
    </div>
  )
}

