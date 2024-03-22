// server.js

const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === 'admin' && password === 'password') {
    res.send('Welcome, admin!');
  } else {
    res.send('Invalid credentials');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

