const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

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

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


