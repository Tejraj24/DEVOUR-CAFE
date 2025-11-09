import { useState } from 'react'
import './visit.css'
import heroImage from '../assets/hero-fallback.jpg'

export default function VisitPage() {
  const [useAltMap, setUseAltMap] = useState(false)
  const googleEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7122.56711097425!2d75.85073728932291!3d26.799098483036776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9002500b855%3A0xc41bf0163cc7c151!2sDevour%20Cafe!5e0!3m2!1sen!2sin!4v1760007183569!5m2!1sen!2sin"
  // Approx bbox around (lat,lon) = (26.799098, 75.850737)
  const osmEmbed = "https://www.openstreetmap.org/export/embed.html?bbox=75.840737,26.789098,75.860737,26.809098&layer=mapnik&marker=26.799098,75.850737"

  return (
    <div className="visit-page">
      <header className="visit-hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${heroImage})`
      }}>
        <div className="container">
          <h1 className="visit-title">Visit Devour Cafe</h1>
          <p className="visit-subtitle">A refined escape for great coffee and conversation</p>
        </div>
      </header>

      <main>
        <section className="section section--visit-intro">
          <div className="container visit-grid">
            <div className="visit-card">
              <h2>Location</h2>
              <p> A157, Jaipur, Shri Kishanpura, Rajasthan 302017</p>
              <a className="btn btn--primary" target="_blank" rel="noopener noreferrer" href="https://share.google/AwJUxMNWD1k0fr96O">Get Directions</a>
            </div>
            <div className="visit-card">
              <h2>Hours</h2>
              <p>Sun–Sat · 2:00 PM – 2:00 AM</p>
            </div>
            <div className="visit-card">
              <h2>Contact</h2>
              <p>Email: Founder@devour.com</p>
              <p>Phone: (+91) 8769617155</p>
              <p>Phone: (+91) 9784565246</p>
              <p>Phone: (+91) 9929221066</p>
            </div>
          </div>
        </section>

        <section className="section section--map">
          <div className="container">
            <div className="map-embed" aria-label="Map to Devour Cafe">
              <iframe
                title="Devour Cafe Location"
                src={useAltMap ? osmEmbed : googleEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div style={{ marginTop: '8px', textAlign: 'center' }}>
                <button className="btn btn--primary" type="button" onClick={() => setUseAltMap(v => !v)}>
                  {useAltMap ? 'Back to Google Map' : 'Use alternative map'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
