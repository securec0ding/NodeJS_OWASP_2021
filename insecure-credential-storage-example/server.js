// server.js

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

let credentials = {};

// Load credentials from a file (insecure)
try {
  credentials = JSON.parse(fs.readFileSync('credentials.json'));
} catch (error) {
  console.error("Error reading credentials file:", error);
}

app.get('/login', (req, res) => {
  const { username, password } = req.query;

  if (credentials[username] === password) {
    res.send('Login successful');
  } else {
    res.send('Invalid credentials');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

