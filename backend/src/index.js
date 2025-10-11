const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
let nodemailer = null;
try { nodemailer = require('nodemailer'); } catch (e) { console.warn('nodemailer not installed; using mock mail transport'); }

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Email transporter (configure via env; falls back to console log/mocked)
let mailTransport;
if (nodemailer) {
  if (process.env.SMTP_URL) {
    mailTransport = nodemailer.createTransport(process.env.SMTP_URL);
  } else if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    mailTransport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: Boolean(process.env.EMAIL_SECURE === 'true'),
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
  } else {
    // Fallback: print emails to console for development
    mailTransport = nodemailer.createTransport({ jsonTransport: true });
  }
} else {
  // Mock transport if nodemailer is unavailable
  mailTransport = {
    async sendMail(opts) {
      console.log('[Mock Email] Would send:', {
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
      });
      return { message: Buffer.from(JSON.stringify(opts)) };
    }
  }
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'devour-cafe-backend' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  // In a real app, save to DB or send email here.
  return res.status(201).json({ ok: true });
});

// Create a reservation and notify via email
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, notes } = req.body || {};
    if (!name || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: 'name, phone, date, time, and guests are required' });
    }

    const toEmail = process.env.RESERVATION_TO_EMAIL || 'tejraj487@gmail.com';
    const toPhone = process.env.RESERVATION_TO_PHONE || '9929059003';

    const html = `
      <h2>New Table Reservation</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || '-'} </p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Notes:</strong> ${notes || '-'} </p>
      <hr/>
      <p><em>Also notify phone:</em> ${toPhone}</p>
    `;

    const info = await mailTransport.sendMail({
      from: process.env.EMAIL_FROM || 'no-reply@devour-cafe.local',
      to: toEmail,
      subject: `Reservation: ${name} on ${date} at ${time} for ${guests}`,
      html,
    });

    // If jsonTransport, log for visibility
    if (info && info.message) {
      try { console.log('Reservation email (jsonTransport):', info.message.toString()); } catch {}
    }

    // Persist reservation if DB is connected
    // DB storage removed; email notification only

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Reservation error:', err);
    return res.status(500).json({ error: 'Failed to create reservation' });
  }
});

  // Serve frontend build in production (if available)
  const distDir = path.resolve(__dirname, '../../frontend/dist');
  if (fs.existsSync(distDir)) {
    app.use(express.static(distDir));
    app.use((req, res, next) => {
      if (req.path.startsWith('/api')) return next();
      if (req.method !== 'GET') return next();
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

// Start server (no database)
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
