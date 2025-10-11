import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'

function ReservationPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting…' })
    const { name, phone, date, time, guests } = form
    if (!name || !phone || !date || !time || !guests) {
      setStatus({ type: 'error', message: 'Please fill name, phone, date, time and guests.' })
      return
    }
    try {
      await emailjs.send(
        "service_dqm46dj",
        "template_ht2hg5c",
        {
          from_name: form.name,
          from_email: form.email || '-',
          subject: `Reservation request for ${form.date} at ${form.time} (${String(form.guests)} guests)`,
          message: `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || '-'}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${String(form.guests)}\nNotes: ${form.notes || '-'}`,
        },
        "31emgPSiGdx9ECKEr"
      )
      setStatus({ type: 'success', message: 'Reservation request sent. We will confirm shortly.' })
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' })
    } catch (err) {
      console.error('EmailJS reservation error:', err)
      setStatus({ type: 'error', message: 'Could not submit reservation. Please try again.' })
    }
  }

  return (
    <div className="page">
      <header className="subheader">
        <div className="container">
          <h1>Reserve a table</h1>
          <p>We’ll confirm your reservation via email or phone.</p>
        </div>
      </header>

      <main>
        <section className="section section--contact">
          <div className="container">
            <div className="grid grid--2 contact-grid">
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="grid">
                  <label>
                    <span>Name</span>
                    <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input name="phone" value={form.phone} onChange={onChange} placeholder="Your phone" required />
                  </label>
                </div>
                <div className="grid">
                  <label>
                    <span>Email (optional)</span>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
                  </label>
                  <label>
                    <span>Guests</span>
                    <input type="number" min="1" max="12" name="guests" value={form.guests} onChange={onChange} />
                  </label>
                </div>
                <div className="grid">
                  <label>
                    <span>Date</span>
                    <input type="date" name="date" value={form.date} onChange={onChange} required />
                  </label>
                  <label>
                    <span>Time</span>
                    <input type="time" name="time" value={form.time} onChange={onChange} required />
                  </label>
                </div>
                <label>
                  <span>Notes</span>
                  <textarea name="notes" rows="3" value={form.notes} onChange={onChange} placeholder="Any requests or occasion?" />
                </label>
                <button className="btn btn--primary" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? 'Submitting…' : 'Send reservation'}
                </button>
                {status.type !== 'idle' && (
                  <p className={`form-status ${status.type}`}>{status.message}</p>
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
            <div style={{ marginTop: '1rem' }}>
              <Link className="btn btn--outline" to="/">Back to home</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ReservationPage
