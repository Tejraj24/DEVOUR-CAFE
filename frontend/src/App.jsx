import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import './App.css'
import heroImage from './assets/hero-fallback.jpg'
import coffeePour from './assets/coffee-pour.jpg'
import pastries from './assets/pastries.jpg'
import cafeInterior from './assets/cafe-interior.jpg'
import video3 from './assets/video3.mp4'
import video4 from './assets/video4.mp4'
import devourLogo from './assets/devour-logo.png'
// import heroVideoSrc from './assets/Devour.mp4'
import GalleryCarousel from './components/GalleryCarousel'
import ImageTrail from './components/ImageTrail'

// Import GSAP and Lenis
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

const reviewsData = [
  {
    author: "Anjali",
    source: "Google",
    rating: 5,
    text: "Amazing place with authentic Indian flavors! The chai and snacks are just perfect. The staff is very welcoming and the ambiance reminds me of home."
  },
  {
    author: "Rajesh",
    source: "Google",
    rating: 5,
    text: "The food is rich in taste and spices, just like traditional Indian cuisine. The decor and music add to the cultural vibe. Highly recommended!"
  },
  {
    author: "Priya",
    source: "Google",
    rating: 5,
    text: "The ambiance is beautiful with lots of greenery, and the cappuccino was perfect. A lovely spot to relax and work."
  }
];

function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div 
      className="reviews-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="reviews-slider__track">
        {reviewsData.map((review, idx) => {
          const isActive = idx === activeIndex;
          const initial = review.author.charAt(0);
          return (
            <div 
              key={review.author} 
              className={`reviews-slider__slide ${isActive ? 'reviews-slider__slide--active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className={`review-card review-card-float ${idx === 1 ? 'review-card-float--delayed-1' : idx === 2 ? 'review-card-float--delayed-2' : ''}`}>
                <div className="review-card__avatar">
                  <span>{initial}</span>
                </div>
                <div className="review-card__stars">
                  {"★".repeat(review.rating)}
                </div>
                <blockquote className="review-card__quote">
                  <span className="quote-mark quote-mark--left">“</span>
                  {review.text}
                  <span className="quote-mark quote-mark--right">”</span>
                </blockquote>
                <div className="review-card__meta">
                  <span className="review-card__author">{review.author}</span>
                  <span className="review-card__source">via {review.source}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="reviews-slider__dots">
        {reviewsData.map((_, idx) => (
          <button
            key={idx}
            className={`reviews-slider__dot ${idx === activeIndex ? 'reviews-slider__dot--active' : ''}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Multiple videos for hero section
  
const heroVideos = [
  { src: 'https://71three.sfo3.cdn.digitaloceanspaces.com/jf/home_web-1.mp4', poster: heroImage },
];

  const galleryImages = [
    'https://static.spotapps.co/spots/93/bb66438d1f45658a8b54d34e974cce/full',
    'https://static.spotapps.co/spots/d3/c117eae3bc4e608516401915898960/full',
    'https://static.spotapps.co/spots/74/43764d75e14b8591ac410f76ebe8cd/full',
    'https://static.spotapps.co/spots/5b/143212f9f142d8aa04a29c2d02f0be/full',
    'https://static.spotapps.co/spots/be/9cf60df1dd42b288b8da725cd7f3bc/full',
    'https://static.spotapps.co/spots/4a/a5d2432dcb430882e5c900d543a544/full',
    'https://static.spotapps.co/spots/cd/9ed6f109ac417d963c4fa5b2bb7f33/full',
    'https://static.spotapps.co/spots/bd/d3df23a43346959e3609eba97ee003/full',
    'https://static.spotapps.co/spots/3b/994184c5124af5ae32c3ecfbe3b192/full',
    'https://static.spotapps.co/spots/9a/a375030491497caa256a7eeb80c211/full',
    'https://static.spotapps.co/spots/2d/4d4c3ca6ec4c48b12754f8074fc374/full',
    'https://static.spotapps.co/spots/bc/6a087f9afb4a3d916be5d750f06894/full',
  ];

  const trailImages = [
    coffeePour,
    pastries,
    cafeInterior,
    ...galleryImages.slice(0, 5)
  ];

  // Auto-rotate videos every 10 seconds
  useEffect(() => {
    if (heroVideos.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [heroVideos.length]);

  // Control hero video
  useEffect(() => {
    const video = document.querySelector('#heroVideo');
    if (!video) return;
    if (isHeroPlaying) video.play?.(); else video.pause?.();
  }, [isHeroPlaying, currentVideoIndex]);

  // Manual video navigation
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + heroVideos.length) % heroVideos.length);
  };

  const goToVideo = (index) => {
    setCurrentVideoIndex(index);
  };

  // Global Scroll & Animation Setup (Lenis & GSAP ScrollTrigger)
  useEffect(() => {
    // Respect user prefers-reduced-motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.scrollytelling-step, .scrollytelling-image').forEach(el => {
        el.classList.add('active');
      });
      return;
    }

    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Hero cinematic scroll animations
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    heroTl.to("#heroVideo", { scale: 1.1, ease: "none" }, 0);
    heroTl.to(".hero__overlay", { opacity: 0.75, ease: "none" }, 0);
    heroTl.to(".hero__headline", { y: -60, opacity: 0, ease: "none" }, 0);
    heroTl.to(".hero__subtitle", { y: -45, opacity: 0, ease: "none" }, 0);
    heroTl.to(".hero__scroll-indicator", { opacity: 0, ease: "none" }, 0);

    // 3. Featured Categories Scrollytelling Section Pinning & Stagger
    const steps = gsap.utils.toArray(".scrollytelling-step");
    const scrollytellingTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollytelling-section",
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Sync active categories step active classes based on scroll progress
          const progress = self.progress;
          const stepCount = steps.length;
          const activeIdx = Math.min(Math.floor(progress * stepCount), stepCount - 1);
          
          steps.forEach((step, idx) => {
            const stepEl = document.getElementById(`scrollytelling-step-${idx}`);
            const imgEl = document.getElementById(`scrollytelling-img-${idx}`);
            if (idx === activeIdx) {
              stepEl?.classList.add('active');
              imgEl?.classList.add('active');
            } else {
              stepEl?.classList.remove('active');
              imgEl?.classList.remove('active');
            }
          });
        }
      }
    });

    // Crossfades timeline scrub triggers
    steps.forEach((_, idx) => {
      if (idx === 0) return;
      const prevIdx = idx - 1;
      const startTime = prevIdx * 1;

      scrollytellingTl.to(`#scrollytelling-img-${prevIdx}`, { opacity: 0, scale: 1.05, duration: 0.5 }, startTime);
      scrollytellingTl.to(`#scrollytelling-img-${idx}`, { opacity: 1, scale: 1, duration: 0.5 }, startTime);

      scrollytellingTl.to(`#scrollytelling-step-${prevIdx}`, { opacity: 0, y: -20, duration: 0.3 }, startTime);
      scrollytellingTl.fromTo(`#scrollytelling-step-${idx}`, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        startTime + 0.2
      );
    });

    // 4. About Section Reveal Animations (Trigger only once)
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section--about",
        start: "top 75%",
        toggleActions: "play none none none",
      }
    });

    aboutTl.fromTo(".section--about .section__subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    aboutTl.fromTo(".section--about .section__title", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
    aboutTl.fromTo(".section--about .about-text p", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.4"
    );
    aboutTl.fromTo(".section--about .about-stats .stat", 
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );
    aboutTl.fromTo(".section--about .btn", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

    // Parallax on about Stack images
    gsap.fromTo(".img-main", 
      { y: 30 },
      { 
        y: -30, 
        ease: "none", 
        scrollTrigger: {
          trigger: ".section--about",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
    gsap.fromTo(".img-secondary", 
      { y: -20 },
      { 
        y: 40, 
        ease: "none", 
        scrollTrigger: {
          trigger: ".section--about",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // 5. Reviews Stagger Reveal
    gsap.fromTo(".review-card", 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section--reviews",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // 3D tilt tracking effect for About section images
  useEffect(() => {
    const card = document.querySelector('.about-images');
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = ((x / rect.width) - 0.5).toFixed(3);
      const yc = ((y / rect.height) - 0.5).toFixed(3);

      card.style.setProperty('--x', xc);
      card.style.setProperty('--y', yc);
      card.style.setProperty('--hover', '1');
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--x', '0');
      card.style.setProperty('--y', '0');
      card.style.setProperty('--hover', '0');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  

  // Contact form moved to /contact page; related state and handlers removed

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__video">
          <video 
            key={currentVideoIndex}
            id="heroVideo" 
            autoPlay={isHeroPlaying} 
            muted 
            loop 
            playsInline 
            preload="auto" 
            poster={heroVideos[currentVideoIndex]?.poster || heroImage} 
            aria-label="Cafe hero background video"
          >
            <source src={heroVideos[currentVideoIndex]?.src} type="video/mp4" />
          </video>
          
          {/* Video navigation controls */}
          {heroVideos.length > 1 && (
            <div className="hero__video-controls">
              <button className="hero__video-nav hero__video-nav--prev" onClick={prevVideo} aria-label="Previous video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="hero__video-dots">
                {heroVideos.map((_, index) => (
                  <button
                    key={index}
                    className={`hero__video-dot ${index === currentVideoIndex ? 'is-active' : ''}`}
                    onClick={() => goToVideo(index)}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
              
              <button className="hero__video-nav hero__video-nav--next" onClick={nextVideo} aria-label="Next video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="hero__overlay"></div>
        
        {/* Split Logo Navigation Header */}
        <nav className="site-header-nav">
          <div className="site-header-nav__inner container">
            
            {/* Mobile menu toggle (Left on mobile, hidden on desktop) */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Left Menu Links (Desktop) */}
            <div className="site-header-nav__col site-header-nav__col--left">
              <ul className="site-header-nav__menu">
                <li><Link to="/menu">menu</Link></li>
                <li><a href="#about">about</a></li>
              </ul>
            </div>

            {/* Center Logo Icon */}
            <div className="site-header-nav__col site-header-nav__col--center">
              <Link to="/" className="site-header-nav__logo">
                <img src={devourLogo} alt="Devour Cafe Logo" />
              </Link>
            </div>

            {/* Right Menu Links (Desktop) */}
            <div className="site-header-nav__col site-header-nav__col--right">
              <ul className="site-header-nav__menu">
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/reserve" className="site-header-nav__btn">reserve</Link></li>
              </ul>
            </div>

            {/* Mobile Brand Name (Right on mobile, hidden on desktop) */}
            <div className="site-header-nav__brand-mobile">
              <span>devour cafe</span>
            </div>

          </div>

          {/* Mobile Navigation overlay */}
          <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'mobile-nav-overlay--open' : ''}`}>
            <ul className="mobile-nav-menu">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>home</Link></li>
              <li><Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>menu</Link></li>
              <li><a href="#about" onClick={() => { setIsMobileMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>about</a></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>contact</Link></li>
              <li><Link to="/reserve" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-btn">reserve</Link></li>
            </ul>
          </div>
        </nav>

        <div className="hero__inner container">
          <button className="hero__play" aria-label={isHeroPlaying ? 'Pause background video' : 'Play background video'} onClick={() => setIsHeroPlaying(p => !p)}>
            {isHeroPlaying ? '❚❚' : '▶'}
          </button>
          <div className="hero__content">
            <h1 className="hero__headline">be kind to every kind.</h1>
            <p className="hero__subtitle">fresh organic brews & delicious street food</p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/menu">order now</Link>
            </div>
          </div>
          <div className="hero__scroll-indicator">
            <span>scroll</span>
            <div className="hero__scroll-line"></div>
          </div>
        </div>
      </header>

      <main>

        {/* Featured Categories Scrollytelling Section */}
        <section className="scrollytelling-section">
          <div className="scrollytelling-section__inner">
            <div className="scrollytelling-section__sticky">
              <div className="scrollytelling-section__layout container">
                <div className="scrollytelling-section__text-side">
                  <div className="scrollytelling-section__intro">
                    <span className="section__subtitle scrollytelling-section__main-subtitle">Every craving has a story.</span>
                    <h2 className="section__title scrollytelling-section__main-title">From Morning Coffee To Midnight Cravings</h2>
                  </div>
                  <div className="scrollytelling-section__category-info">
                    <div className="scrollytelling-step active" id="scrollytelling-step-0">
                      <span className="scrollytelling-step__emoji">☕</span>
                      <h3 className="scrollytelling-step__title">Morning Brew</h3>
                      <p className="scrollytelling-step__desc">Sip on our handcrafted artisanal coffees. Locally sourced organic beans roasted to perfection to kickstart your day with pure energy.</p>
                    </div>
                    <div className="scrollytelling-step" id="scrollytelling-step-1">
                      <span className="scrollytelling-step__emoji">🍜</span>
                      <h3 className="scrollytelling-step__title">Quick Comfort</h3>
                      <p className="scrollytelling-step__desc">Your favorite instant comfort food, elevated. From classic masala to peri-peri tadka, it is the ultimate quick indulgence.</p>
                    </div>
                    <div className="scrollytelling-step" id="scrollytelling-step-2">
                      <span className="scrollytelling-step__emoji">🍕</span>
                      <h3 className="scrollytelling-step__title">The Sharing Circle</h3>
                      <p className="scrollytelling-step__desc">Thin crust artisan pizzas loaded with fresh toppings and creamy melted mozzarella. A slice of pure joy made to be shared.</p>
                    </div>
                    <div className="scrollytelling-step" id="scrollytelling-step-3">
                      <span className="scrollytelling-step__emoji">🥤</span>
                      <h3 className="scrollytelling-step__title">Cool Refreshment</h3>
                      <p className="scrollytelling-step__desc">Sip on the refreshing flavor of our vibrant mocktails, from a cooling mint mojito to tropical pina coladas.</p>
                    </div>
                    <div className="scrollytelling-step" id="scrollytelling-step-4">
                      <span className="scrollytelling-step__emoji">🍰</span>
                      <h3 className="scrollytelling-step__title">Sweet Obsession</h3>
                      <p className="scrollytelling-step__desc">Indulge in sweet perfection. Thick, rich milkshakes, loaded chocolate waffles, and freshly baked gooey brownies.</p>
                    </div>
                  </div>
                </div>
                <div className="scrollytelling-section__visual-side">
                  <div className="scrollytelling-section__image-container">
                    <img 
                      id="scrollytelling-img-0"
                      src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop" 
                      alt="Coffee" 
                      className="scrollytelling-image active"
                    />
                    <img 
                      id="scrollytelling-img-1"
                      src="https://images.unsplash.com/photo-1692273212247-f5efb3fc9b87?q=80&w=1200&auto=format&fit=crop" 
                      alt="Maggi" 
                      className="scrollytelling-image"
                    />
                    <img 
                      id="scrollytelling-img-2"
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop" 
                      alt="Pizza" 
                      className="scrollytelling-image"
                    />
                    <img 
                      id="scrollytelling-img-3"
                      src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop" 
                      alt="Mocktails" 
                      className="scrollytelling-image"
                    />
                    <img 
                      id="scrollytelling-img-4"
                      src={pastries} 
                      alt="Desserts" 
                      className="scrollytelling-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section--about">
          <ImageTrail images={trailImages} />
          <div className="container about-grid" style={{ position: 'relative', zIndex: 2 }}>
            <div className="about-content">
              <span className="section__subtitle">Welcome to</span>
              <h2 className="section__title">Devour Cafe</h2>
              <div className="about-text">
                <p>Devour Cafe is locally owned and locally focused, offering handcrafted beverages and food every day.</p>
                <p>Featuring friendly service and natural ambience, our space is the perfect retreat for coffee lovers, creative meet-ups, and peaceful co-working sessions.</p>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Organic</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Hand</span>
                  <span className="stat-label">Crafted</span>
                </div>
              </div>
              <Link to="/visit" className="btn btn--outline">Visit Us</Link>
            </div>
            <div className="about-images">
              <div className="image-stack">
                <div className="gold-frame-arch"></div>
                <img src={cafeInterior} alt="Cafe Interior" className="img-main" loading="lazy" />
                <div className="img-secondary-wrapper">
                  <img src={coffeePour} alt="Coffee Pouring" className="img-secondary" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit section moved to dedicated /visit page */}

        {/* Reviews above gallery to match arrangement */}
        <section>
          <div className="container">
            <h2 className="section__title">Our Gallery</h2>
          </div>
          <GalleryCarousel images={galleryImages} />
        </section>

        {/* Gallery below reviews */}
        <section className="section section--reviews">
          <div className="container">
            <h2 className="section__title">Reviews</h2>
            <ReviewSlider />
          </div>
        </section>
        {/* Reserve section moved to /reserve page */}

        {/* Contact section moved to dedicated /contact page */}
      </main>

      <footer>
        {/* Section 1: CTA Band */}
        <div className="footer-cta">
          <div className="footer-cta__left">
            <a href="tel:+919929059003" className="footer-cta__phone">(+91) 9929059003</a>
          </div>
          <div className="footer-cta__center">
            <a href="https://www.instagram.com/devour.cafe" target="_blank" rel="noopener noreferrer" className="footer-cta__instagram">
              <FaInstagram size={28} className="footer-cta__icon" />
            </a>
          </div>
          <div className="footer-cta__right">
            <Link to="/menu" className="footer-cta__order btn btn--primary">Order Now</Link>
          </div>
        </div>

        {/* Section 2: Main Footer Grid */}
        <div className="footer-main">
          <div className="container footer-main__inner">
            <div className="footer-col">
              <h3 className="footer-col__title">Devour Cafe</h3>
              <p className="footer-col__text">
                a157, Jaipur, Shri Kishanpura<br />
                Rajasthan 302017
              </p>
            </div>
            <div className="footer-col">
              <h3 className="footer-col__title">Business Hours</h3>
              <p className="footer-col__text">Sun–Sat · 2:00 pm – 2:00 am</p>
            </div>
            <div className="footer-col">
              <h3 className="footer-col__title">Quick Links</h3>
              <ul className="footer-col__list">
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/visit">Visit</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col__title">Follow Us</h3>
              <a href="https://www.instagram.com/devour.cafe" target="_blank" rel="noopener noreferrer" className="footer-social__icon">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Bottom Copyright */}
        <div className="footer-bottom">
          <div className="container footer-bottom__inner">
            <p className="footer-bottom__copy">&copy; {new Date().getFullYear()} Devour Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
