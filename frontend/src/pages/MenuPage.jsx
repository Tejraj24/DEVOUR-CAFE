import { Link } from 'react-router-dom'
import './menu.css'

const sections = [
  {
    title: 'Tea',
    items: [
      ['Ginger Tea', '₹40'],
      ['Cinnamon Tea', '₹45'],
      ['Masala Chai', '₹40'],
      ['Special Tea', '₹49'],
    ],
  },
  {
    title: 'Cold Coffee',
    items: [
      ['Ice Coffee', '₹20'],
      ['Paneer Tikka', '₹80'],
      ['Vada', '₹30'],
    ],
  },
  {
    title: 'Snacks',
    items: [
      ['Naan', '₹20'],
      ['Paneer Tikka', '₹80'],
      ['Vada', '₹30'],
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="menu-page">
      <header className="menu-hero">
        <div className="menu-hero__inner">
          <h1>Our Menu</h1>
          <p>Elegantly curated beverages and bites crafted with care.</p>
          <Link to="/" className="btn btn--light">← Back to Home</Link>
        </div>
      </header>

      <main className="menu-wrapper">
        {sections.map((sec) => (
          <section key={sec.title} className="menu-section">
            <h2>{sec.title}</h2>
            <ul>
              {sec.items.map(([name, price]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className="dots" aria-hidden>................................</span>
                  <span className="price">{price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="menu-footer">
        <p>Devour Cafe • Fresh brews, natural ambience</p>
      </footer>
    </div>
  )
}


