export default function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large circle - top right */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl" />
      {/* Medium circle - bottom left */}
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-blue-300/15 blur-2xl" />
      {/* Small circle - top left */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200/25 blur-xl" />
      {/* Arc shape - right side */}
      <svg className="absolute top-1/2 right-0 w-96 h-96 opacity-20" viewBox="0 0 200 200">
        <path
          d="M 100 0 Q 200 50 200 100 Q 200 150 100 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-300"
        />
      </svg>
    </div>
  )
}

