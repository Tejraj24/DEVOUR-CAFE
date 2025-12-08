import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import './App.css'
import heroImage from './assets/hero-fallback.jpg'
import coffeePour from './assets/coffee-pour.jpg'
import pastries from './assets/pastries.jpg'
import cafeInterior from './assets/cafe-interior.jpg'
import devourLogo from './assets/devour-logo.png'
// import heroVideoSrc from './assets/Devour.mp4'
import video2 from './assets/video2.mp4'
import video3 from './assets/video3.mp4'
import video4 from './assets/video4.mp4'
// import video5 from './assets/video5.mp4'
import GalleryCarousel from './components/GalleryCarousel'

function App() {
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Multiple videos for hero section
  
const heroVideos = [
  // { src: heroVideoSrc, poster: heroImage },
  { src: video2, poster: video2 },
  { src: video3, poster: video3 },
  { src: video4, poster: video4 },
  // { src: video5, poster: video5 },
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

  // Scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      })
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
        <div className="hero__inner container">
          <div className="hero__logo">
            <img src={devourLogo} alt="Devour Cafe Logo" className="hero__logo-img" />
          </div>
          <button className="hero__play" aria-label={isHeroPlaying ? 'Pause background video' : 'Play background video'} onClick={() => setIsHeroPlaying(p => !p)}>
            {isHeroPlaying ? '❚❚' : '▶'}
          </button>
          <nav className="hero__nav">
            <div className="brand">Devour Cafe</div>
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu--open' : ''}`}>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
              <li><Link to="/visit" onClick={() => setIsMobileMenuOpen(false)}>Visit</Link></li>
              <li><Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
            </ul>
          </nav>
          <div className="hero__content">
            <h1 className="hero__headline">Visit us Near Rtech Mall, Jagtpura</h1>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/visit">Visit us</Link>
            </div>
          </div>
        </div>
      </header>

      <main>

        <section
          id="about"
          className="section section--about reveal"
        >
          <div className="container">
            <h2 className="section__title">About us</h2>
            <h3>Devour Cafe</h3>
            <p>Devour Cafe is locally owned and locally focused, offering handcrafted beverages and food every day. Featuring friendly service and natural ambience, Devour Cafe is the perfect space for coffee, meet-ups, and co-working.</p>
          </div>
        </section>

        {/* Visit section moved to dedicated /visit page */}

        {/* Reviews above gallery to match arrangement */}
        <section className="reveal">
          <div className="container">
            <h2 className="section__title">Our Gallery</h2>
          </div>
          <GalleryCarousel images={galleryImages} />
        </section>

        {/* Gallery below reviews */}
        <section className="section section--reviews reveal">
          <div className="container">
            <h2 className="section__title">Reviews</h2>
            <div className="reviews">
              <div className="review">
                <h4>Review by - Google</h4>
                <h5>★★★★★ review by Anjali</h5>
                <blockquote>Amazing place with authentic Indian flavors! The chai and snacks are just perfect. The staff is very welcoming and the ambiance reminds me of home.</blockquote>
              </div>
              <div className="review">
                <h4>Review by - Google</h4>
                <h5>★★★★★ review by Rajesh</h5>
                <blockquote>The food is rich in taste and spices, just like traditional Indian cuisine. The decor and music add to the cultural vibe. Highly recommended!</blockquote>
              </div>
              <div className="review">
                <h4>Review by - Google</h4>
                <h5>★★★★★ review by Priya</h5>
                <blockquote>The ambiance is beautiful with lots of greenery, and the cappuccino was perfect. A lovely spot to relax and work.</blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Reserve section moved to /reserve page */}

        {/* Contact section moved to dedicated /contact page */}
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <div className="brand brand--invert">Devour Cafe</div>
            <p>Where nature meets flavor in every cup. Experience the art of exceptional coffee.</p>
          </div>
          <ul className="footer__links">
            <li><a href="#about">About</a></li>
            <li><Link to="/visit">Visit</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
            <li className="social-icon">
              <a href="https://www.instagram.com/devour.cafe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bar"> {new Date().getFullYear()} Devour Cafe. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
