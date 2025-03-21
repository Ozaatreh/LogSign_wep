const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Dummy user (simulate DB)
const users = [{ email: "test@example.com", passwordHash: bcrypt.hashSync("password123", 10) }];

app.use(cors());
app.use(bodyParser.json());

// Rate limiter for login
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many login attempts, try again later." }
});

app.post('/api/login', limiter, async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid email or password' });

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return res.status(401).json({ message: 'Invalid email or password' });

  const token = jwt.sign({ email }, 'your_secret_key', { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

app.post('/api/logout', (req, res) => {
  // For token-based auth, logout is handled client-side by deleting token
  res.json({ message: 'Logged out' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
