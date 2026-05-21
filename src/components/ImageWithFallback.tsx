import { useState, type ImgHTMLAttributes } from 'react'

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackClassName = '',
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-midnight-light bg-gradient-to-br from-midnight-light to-midnight ${fallbackClassName || className}`}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <span className="font-display text-2xl text-golden/80">Dar Srouge</span>
          <span className="text-xs text-gray-400">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  )
}
