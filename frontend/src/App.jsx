import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import heroImage from './assets/hero-fallback.jpg'
import coffeePour from './assets/coffee-pour.jpg'
import pastries from './assets/pastries.jpg'
import cafeInterior from './assets/cafe-interior.jpg'
import GalleryCarousel from './components/GalleryCarousel'

function App() {
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const [reserveForm, setReserveForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' });
  const [reserveStatus, setReserveStatus] = useState({ type: 'idle', message: '' });
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

  // Control hero video
  useEffect(() => {
    const video = document.querySelector('#heroVideo');
    if (!video) return;
    if (isHeroPlaying) video.play?.(); else video.pause?.();
  }, [isHeroPlaying]);

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

  const onReserveChange = (e) => {
    const { name, value } = e.target;
    setReserveForm((f) => ({ ...f, [name]: value }));
  };

  const onReserveSubmit = async (e) => {
    e.preventDefault();
    setReserveStatus({ type: 'loading', message: 'Submitting…' });
    const { name, phone, date, time, guests } = reserveForm;
    if (!name || !phone || !date || !time || !guests) {
      setReserveStatus({ type: 'error', message: 'Please fill name, phone, date, time and guests.' });
      return;
    }
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...reserveForm, guests: Number(reserveForm.guests) }),
      });
      if (!res.ok) throw new Error('Failed to submit reservation');
      setReserveStatus({ type: 'success', message: 'Reservation request sent. We will confirm shortly.' });
      setReserveForm({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' });
    } catch (err) {
      setReserveStatus({ type: 'error', message: 'Could not submit reservation. Please try again.' });
    }
  };

  // Contact form moved to /contact page; related state and handlers removed

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__video">
          <video id="heroVideo" autoPlay={isHeroPlaying} muted loop playsInline preload="auto" poster={heroImage} aria-label="Cafe hero background video">
            <source src="https://static.spotapps.co/website_videos/Founders%20Coffee%20Edited%20Video_Vimeo720p30.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__inner container">
          <button className="hero__play" aria-label={isHeroPlaying ? 'Pause background video' : 'Play background video'} onClick={() => setIsHeroPlaying(p => !p)}>
            {isHeroPlaying ? '❚❚' : '▶'}
          </button>
          <nav className="hero__nav">
            <div className="brand">Devour Cafe</div>
            <ul>
              <li><a href="#catering">Catering</a></li>
              <li><a href="#about">About</a></li>
              <li><Link to="/visit">Visit</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/menu">Menu</Link></li>
            </ul>
          </nav>
          <div className="hero__content">
            <h1 className="hero__headline">Visit us at 123 Forest Path, Greenway</h1>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/visit">Visit us</Link>
            </div>
          </div>
        </div>
      </header>

      <main>

        <section
          id="catering"
          className="section section--catering"
        >
          <div className="container">
            <h2 className="section__title">Catering</h2>
            <p className="section__lead">Leave The Cooking To Us</p>
            <p>Effortless catering, impeccable results. Let us handle the details, so you can enjoy the occasion to the fullest.</p>
            <Link className="btn btn--primary" to="/contact">Contact for Catering</Link>
          </div>
        </section>

        <section
          id="about"
          className="section section--about section--bg reveal"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80), url(https://picsum.photos/1600/900?blur=1)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container">
            <h2 className="section__title">About us</h2>
            <h3>Devour Cafe</h3>
            <p>Devour Cafe is locally owned and locally focused, offering handcrafted beverages and food every day. Featuring friendly service and natural ambience, Devour Cafe is the perfect space for coffee, meet-ups, and co-working.</p>
          </div>
        </section>

        {/* Visit section moved to dedicated /visit page */}

        {/* Reviews above gallery to match arrangement */}
        <section className="section section--reviews reveal">
          <div className="container">
            <h2 className="section__title">Reviews</h2>
            <div className="reviews">
              <div className="review">
                <h4>Review by - Google</h4>
                <h5>five star review by Sarah M:</h5>
                <blockquote>What a great place! The coffee flights are amazing. Why order 1 flavor when you can have 4! The food was super flavorful. Staff super friendly and the ambience is super laid back and adorable. Will be back next time we are in town.</blockquote>
              </div>
              <div className="review">
                <h4>Review by - Google</h4>
                <h5>five star review by Alex K:</h5>
                <blockquote>If you had to choose only one place to get the best coffee & breakfast it would be ONLY here! Don't even look around, tastes are heavenly delicious! Vibe and seating area feels like your own home, Music and flowers are calming and relaxing.</blockquote>
              </div>
              <div className="review">
                <h4>Review by - Google</h4>
                <h5>five star review by Priya S:</h5>
                <blockquote>The ambiance is beautiful with lots of greenery, and the cappuccino was perfect. A lovely spot to relax and work.</blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery below reviews */}
        <section className="reveal">
          <div className="container">
            <h2 className="section__title">Our Gallery</h2>
          </div>
          <GalleryCarousel images={galleryImages} />
        </section>

        {/* Reserve a Table */}
        <section id="reserve" className="section section--contact reveal">
          <div className="container">
            <h2 className="section__title">Reserve a table</h2>
            <div className="grid grid--2 contact-grid">
              <form className="contact-form" onSubmit={onReserveSubmit}>
                <div className="grid">
                  <label>
                    <span>Name</span>
                    <input name="name" value={reserveForm.name} onChange={onReserveChange} placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input name="phone" value={reserveForm.phone} onChange={onReserveChange} placeholder="Your phone" required />
                  </label>
                </div>
                <div className="grid">
                  <label>
                    <span>Email (optional)</span>
                    <input type="email" name="email" value={reserveForm.email} onChange={onReserveChange} placeholder="you@example.com" />
                  </label>
                  <label>
                    <span>Guests</span>
                    <input type="number" min="1" max="12" name="guests" value={reserveForm.guests} onChange={onReserveChange} />
                  </label>
                </div>
                <div className="grid">
                  <label>
                    <span>Date</span>
                    <input type="date" name="date" value={reserveForm.date} onChange={onReserveChange} required />
                  </label>
                  <label>
                    <span>Time</span>
                    <input type="time" name="time" value={reserveForm.time} onChange={onReserveChange} required />
                  </label>
                </div>
                <label>
                  <span>Notes</span>
                  <textarea name="notes" rows="3" value={reserveForm.notes} onChange={onReserveChange} placeholder="Any requests or occasion?" />
                </label>
                <button className="btn btn--primary" disabled={reserveStatus.type === 'loading'}>
                  {reserveStatus.type === 'loading' ? 'Submitting…' : 'Send reservation'}
                </button>
                {reserveStatus.type !== 'idle' && (
                  <p className={`form-status ${reserveStatus.type}`}>{reserveStatus.message}</p>
                )}
              </form>
              <div className="contact-info">
                <div className="hours">
                  <h3>We’ll confirm your reservation</h3>
                  <p>Requests are sent to our team at <strong>tejraj487@gmail.com</strong> and <strong>9929059003</strong>.</p>
                  <p>We usually confirm within minutes during open hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer__bar">© {new Date().getFullYear()} Devour Cafe. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App


