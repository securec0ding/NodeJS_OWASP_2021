// server.js

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/file', (req, res) => {
  const fileName = req.query.name;

  // Vulnerable code: serving files without proper validation
  fs.readFile(`./files/${fileName}`, (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

