import { useEffect, useRef } from 'react';
import './ImageTrail.css';

export default function ImageTrail({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Disable on touch screens or small viewports
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileViewport = window.innerWidth <= 768;
    if (isTouchDevice || isMobileViewport) return;

    const container = containerRef.current;
    if (!container || !images || images.length === 0) return;

    const parent = container.parentElement;
    if (!parent) return;

    let globalIndex = 0;
    let lastMousePos = { x: 0, y: 0 };
    let lastImageTime = 0;

    const handleMouseMove = (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      const distance = Math.hypot(clientX - lastMousePos.x, clientY - lastMousePos.y);
      const now = Date.now();

      // Trigger new image based on distance or time
      if (distance > 50 && now - lastImageTime > 40) {
        lastMousePos = { x: clientX, y: clientY };
        lastImageTime = now;

        const imgIndex = globalIndex % images.length;
        globalIndex++;

        const imgEl = document.createElement('img');
        imgEl.src = images[imgIndex];
        imgEl.className = 'trail-image';

        // Calculate position relative to the container
        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        imgEl.style.left = `${x}px`;
        imgEl.style.top = `${y}px`;

        // Add a slight random rotation
        const rotation = Math.random() * 30 - 15;
        imgEl.style.setProperty('--rot', `${rotation}deg`);

        container.appendChild(imgEl);

        // Remove the image after the animation finishes
        setTimeout(() => {
          if (container.contains(imgEl)) {
            container.removeChild(imgEl);
          }
        }, 1200);
      }
    };

    parent.addEventListener('mousemove', handleMouseMove);

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
    };
  }, [images]);

  return <div className="image-trail-container" ref={containerRef} />;
}
