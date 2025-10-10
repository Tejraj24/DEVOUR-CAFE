import { useEffect, useMemo, useRef, useState } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => { savedCallback.current = callback }, [callback]);
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => savedCallback.current && savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function GalleryCarousel({ images = [], autoPlay = true, interval = 3000, continuous = true, speedSeconds = 30 }) {
  const hasImages = images && images.length > 0;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;

  const goTo = (i) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Only use discrete interval mode when not in continuous marquee
  useInterval(() => { if (!continuous && autoPlay && !isPaused && total > 1) next() }, (!continuous && autoPlay) ? interval : null);

  const idBase = useMemo(() => `carousel-${Math.random().toString(36).slice(2, 8)}`, []);
  const loopImages = useMemo(() => continuous ? [...images, ...images] : images, [images, continuous]);

  // Lightbox: ESC to close, arrows to navigate
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, index]);

  // Touch swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  if (!hasImages) return null;

  return (
    <section className="section section--gallery" aria-label="Image gallery carousel">
      <div
        className={
          (continuous ? 'container carousel carousel--marquee' : 'container carousel') +
          (isPaused ? ' is-paused' : '')
        }
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel__viewport" role="group" aria-roledescription="carousel" aria-label="Gallery">
          <div
            className="carousel__track"
            style={continuous ? { '--marquee-duration': `${speedSeconds}s` } : { transform: `translateX(-${index * 100}%)` }}
          >
            {(continuous ? loopImages : images).map((src, i) => (
              <div className="carousel__slide" key={`${idBase}-slide-${i}`} aria-roledescription="slide" aria-label={`Slide ${((i % total) + 1)} of ${total}`}>
                <img className="carousel__img" src={src} alt={`Gallery image ${((i % total) + 1)}`} loading="lazy" onClick={() => { setLightboxOpen(true); goTo(i % total); }} />
              </div>
            ))}
          </div>
        </div>

        {!continuous && (
        <div className="carousel__controls">
          <button className="carousel__btn" onClick={prev} aria-label="Previous image" title="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="carousel__dots" role="tablist" aria-label="Select slide">
            {images.map((_, i) => (
              <button
                key={`${idBase}-dot-${i}`}
                className={i === index ? 'carousel__dot is-active' : 'carousel__dot'}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="carousel__btn" onClick={next} aria-label="Next image" title="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            className="carousel__toggle"
            aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
            onClick={() => setIsPaused(p => !p)}
          >
            {isPaused ? 'Play' : 'Pause'}
          </button>
        </div>
        )}

        {lightboxOpen && (
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Image ${index + 1} of ${total}`} onClick={() => setLightboxOpen(false)}>
            <button className="lightbox__close" aria-label="Close" onClick={() => setLightboxOpen(false)}>×</button>
            <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev(); }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <img className="lightbox__img" src={images[index]} alt={`Full image ${index + 1}`} />
            <button className="lightbox__nav lightbox__nav--next" aria-label="Next" onClick={(e) => { e.stopPropagation(); next(); }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
