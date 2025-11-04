type BlobShapeProps = {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
}

export default function BlobShape({ position = 'top-right', size = 'md' }: BlobShapeProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  }

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} opacity-10 pointer-events-none`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path
          d="M47.5,-57.5C59.8,-45.1,66.4,-28.1,67.8,-10.9C69.2,6.3,65.4,23.7,56.8,36.9C48.2,50.1,34.8,59.1,20.2,63.8C5.6,68.5,-10.2,68.9,-24.5,64.5C-38.8,60.1,-51.6,50.9,-60.2,38.7C-68.8,26.5,-73.2,11.3,-72.5,-3.6C-71.8,-18.5,-65.9,-37,-55.9,-49.4C-45.9,-61.8,-31.8,-68,-17.2,-66.5C-2.6,-65,12.4,-55.8,47.5,-57.5Z"
          transform="translate(100 100)"
          fill="currentColor"
          className="text-blue-300"
        />
      </svg>
    </div>
  )
}

