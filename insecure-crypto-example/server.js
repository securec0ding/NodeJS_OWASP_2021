// server.js

const express = require('express');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

// Vulnerable code: using weak cryptographic algorithm (MD5)
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

app.get('/', (req, res) => {
  // Simulate a user registering with a password
  const password = 'password123';
  const hashedPassword = hashPassword(password);

  res.send(`User registered with hashed password: ${hashedPassword}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

