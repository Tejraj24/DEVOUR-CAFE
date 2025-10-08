import { useEffect, useState } from 'react'
import './App.css'
import heroImage from './assets/hero-fallback.jpg'
import coffeePour from './assets/coffee-pour.jpg'
import pastries from './assets/pastries.jpg'
import cafeInterior from './assets/cafe-interior.jpg'

function App() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });
  const galleryImages = [
    coffeePour,
    pastries,
    cafeInterior,
    heroImage,
  ];
  const nextImage = () => setGalleryIndex((i) => (i + 1) % galleryImages.length);
  const prevImage = () => setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

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

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending…' });
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setFormStatus({ type: 'error', message: 'Please fill name, email and message.' });
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setFormStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFormStatus({ type: 'error', message: 'Could not send message. Please try again.' });
    }
  };

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__video">
          <video autoPlay muted loop playsInline preload="auto" poster={heroImage} aria-label="Cafe hero background video">
            <source src="https://static.spotapps.co/website_videos/Founders%20Coffee%20Edited%20Video_Vimeo720p30.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__inner container">
          <nav className="hero__nav">
            <div className="brand">Devour Cafe</div>
            <ul>
              <li><a href="#catering">Catering</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#visit">Visit</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/menu">Menu</a></li>
            </ul>
          </nav>
          <div className="hero__content">
            <h1 className="hero__headline">Visit us at 123 Forest Path, Greenway</h1>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#visit">Visit us</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Removed Online Order section */}

        <section
          id="catering"
          className="section section--catering section--bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${cafeInterior})`,
          }}
        >
          <div className="container">
            <h2 className="section__title">Catering</h2>
            <p className="section__lead">Leave The Cooking To Us</p>
            <p>Effortless catering, impeccable results. Let us handle the details, so you can enjoy the occasion to the fullest.</p>
            <a className="btn btn--primary" href="#contact">Catering</a>
          </div>
        </section>

        <section
          id="about"
          className="section section--about section--bg reveal"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${pastries})`,
          }}
        >
          <div className="container">
            <h2 className="section__title">About us</h2>
            <h3>Devour Cafe</h3>
            <p>Devour Cafe is locally owned and locally focused, offering handcrafted beverages and food every day. Featuring friendly service and natural ambience, Devour Cafe is the perfect space for coffee, meet-ups, and co-working.</p>
            <a className="btn btn--primary" href="#story">Read more about us</a>
          </div>
        </section>

        {/* Visit Us */}
        <section id="visit" className="section section--visit reveal">
          <div className="container">
            <h2 className="section__title">Visit us</h2>
            <div className="visit">
              <div className="map-wrapper" aria-label="Map to Devour Cafe">
                <iframe
                  title="Devour Cafe Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.2000%2C28.6000%2C77.2500%2C28.6500&layer=mapnik&marker=28.6250%2C77.2250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="visit__details">
                <h3>Address</h3>
                <p>123 Forest Path, Greenway</p>
                <h3>Hours</h3>
                <p>Sun–Sat · 6:00 AM – 6:00 PM</p>
                <h3>Contact</h3>
                <p><a href="#contact">Send us a message</a></p>
                <p><a target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/?mlat=28.6250&mlon=77.2250#map=15/28.6250/77.2250">Get directions</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="section section--menu reveal">
          <div className="container">
            <h2 className="section__title">Menu highlights</h2>
            <div className="menu">
              <article className="card">
                <img src={coffeePour} alt="Signature Coffee" />
                <div className="card__body">
                  <h3>Signature Coffee</h3>
                  <p>Rich, smooth, and handcrafted. Our most loved pour.</p>
                </div>
              </article>
              <article className="card">
                <img src={pastries} alt="Fresh Pastries" />
                <div className="card__body">
                  <h3>Fresh Pastries</h3>
                  <p>Daily baked croissants, muffins, and artisan treats.</p>
                </div>
              </article>
              <article className="card">
                <img src={cafeInterior} alt="Brunch Specials" />
                <div className="card__body">
                  <h3>Brunch Specials</h3>
                  <p>Seasonal plates crafted with local ingredients.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--gallery reveal">
          <div className="container">
            <h2 className="section__title">Our Gallery</h2>
            <div className="gallery">
              <div className="gallery__frame">
                <img className="gallery__img" src={galleryImages[galleryIndex]} alt={`Gallery image ${galleryIndex + 1}`} />
                <div className="gallery__controls">
                  <button className="gallery__btn" onClick={prevImage} aria-label="Previous image">‹</button>
                  <span className="gallery__dots">
                    {galleryImages.map((_, i) => (
                      <span key={i} className={i === galleryIndex ? 'dot dot--active' : 'dot'} onClick={() => setGalleryIndex(i)} />
                    ))}
                  </span>
                  <button className="gallery__btn" onClick={nextImage} aria-label="Next image">›</button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact reveal">
          <div className="container">
            <h2 className="section__title">Contact us</h2>
            <div className="grid grid--2 contact-grid">
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="grid">
                  <label>
                    <span>Name</span>
                    <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
                  </label>
                </div>
                <label>
                  <span>Subject</span>
                  <input name="subject" value={form.subject} onChange={onChange} placeholder="How can we help?" />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows="5" value={form.message} onChange={onChange} placeholder="Write your message..." required />
                </label>
                <button className="btn btn--primary" disabled={formStatus.type === 'loading'}>
                  {formStatus.type === 'loading' ? 'Sending…' : 'Send message'}
                </button>
                {formStatus.type !== 'idle' && (
                  <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p>
                )}
              </form>
              <div className="contact-info">
                <div className="hours">
                  <h3>Hours</h3>
                  <p>Sun, Mon, Tue, Wed, Thur, Fri, Sat</p>
                  <p>6:00 AM - 6:00 PM</p>
                </div>
                <div className="location">
                  <h3>Find us on...</h3>
                  <div className="social-links">
                    <a href="#" aria-label="Facebook page">Facebook</a>
                    <a href="#" aria-label="Instagram page">Instagram</a>
                    <a href="#" aria-label="Google page">Google</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <div className="brand brand--invert">Devour Cafe</div>
            <p>Where nature meets flavor in every cup. Experience the art of exceptional coffee.</p>
          </div>
          <ul className="footer__links">
            <li><a href="#catering">Catering</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#visit">Visit</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/menu">Menu</a></li>
          </ul>
        </div>
        <div className="footer__bar">© {new Date().getFullYear()} Devour Cafe. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App


