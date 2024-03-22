// server.js

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  
  try {
    const response = await fetch(url); // Vulnerable code
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching URL');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

