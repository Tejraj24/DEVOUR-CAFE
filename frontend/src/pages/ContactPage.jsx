import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending…' })
    const { name, email, message } = form
    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill name, email and message.' })
      return
    }
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS env vars missing')
      }

      await emailjs.send(
        "service_dqm46dj",
        "template_ht2hg5c",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'New contact message',
          message: form.message,
        },
        "31emgPSiGdx9ECKEr"
      )
      setStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS contact error:', err)
      setStatus({ type: 'error', message: 'Could not send message. Please try again.' })
    }
  }
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-subtitle">We'd love to hear from you. Reservations, catering, or feedback — say hello.</p>
        </div>
      </header>

      <main>
        <section className="section section--contact">
          <div className="container contact-layout">
            <div className="contact-card">
              <h2>Write to us</h2>
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  <span>Name</span>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
                </label>
                <label>
                  <span>Subject</span>
                  <input name="subject" value={form.subject} onChange={onChange} placeholder="How can we help?" />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows="5" value={form.message} onChange={onChange} placeholder="Write your message..." required />
                </label>
                <button className="btn btn--primary" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? 'Sending…' : 'Send message'}
                </button>
                {status.type !== 'idle' && (
                  <p className={`form-status ${status.type}`}>{status.message}</p>
                )}
              </form>
            </div>
            <div className="contact-info">
              <div className="info-card">
                <h3>Contact details</h3>
                <p><strong>Email:</strong> tejraj487@gmail.com</p>
                <p><strong>Phone:</strong> (+91) 9929059003</p>
              </div>
              <div className="info-card">
                <h3>Visit us</h3>
                <p>A157, Jaipur, Shri Kishanpura, Rajasthan 302017</p>
                <a className="btn btn--outline" href="/visit">See directions</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
