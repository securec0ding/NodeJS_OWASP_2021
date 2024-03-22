// server.js

const express = require('express');

const app = express();
const PORT = 3000;

let loggedInUser = null;

app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === 'admin' && password === 'password') {
    loggedInUser = username;
    res.send('Login successful');
  } else {
    res.send('Invalid credentials');
  }
});

app.get('/admin', (req, res) => {
  if (loggedInUser === 'admin') {
    res.send('Welcome, admin!');
  } else {
    res.status(403).send('Access forbidden');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

