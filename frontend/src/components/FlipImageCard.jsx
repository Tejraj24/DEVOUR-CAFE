import { useEffect, useMemo, useState } from 'react'

export default function FlipImageCard({ images = [], height = 240, radius = 12, autoFlip = false, intervalMs = 2500 }) {
  const safeImages = images.length > 0 ? images : ['https://picsum.photos/800/600?blur=1']
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = safeImages.length

  const frontImage = useMemo(() => safeImages[index % total], [index, total, safeImages])
  const backImage = useMemo(() => safeImages[(index + 1) % total], [index, total, safeImages])
  const flipped = index % 2 === 1

  const next = () => setIndex((i) => (i + 1) % (total * 2))

  useEffect(() => {
    if (!autoFlip || total < 2 || isPaused) return
    const id = setInterval(next, Math.max(800, intervalMs))
    return () => clearInterval(id)
  }, [autoFlip, intervalMs, total, isPaused])

  return (
    <div
      className={flipped ? 'flip-card flip-card--fade is-flipped' : 'flip-card flip-card--fade'}
      style={{ height: `${height}px`, borderRadius: `${radius}px` }}
      onClick={next}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="button"
      aria-label="Show next image"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } }}
    >
      <div className="flip-card__inner">
        <div
          className="flip-card__face flip-card__face--front"
          style={{ backgroundImage: `url(${frontImage})` }}
          aria-hidden={flipped}
        />
        <div
          className="flip-card__face flip-card__face--back"
          style={{ backgroundImage: `url(${backImage})` }}
          aria-hidden={!flipped}
        />
      </div>
    </div>
  )
}
