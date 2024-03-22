// server.js

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/transfer" method="post">
      <input type="hidden" name="amount" value="1000">
      <input type="submit" value="Transfer Money">
    </form>
  `);
});

app.post('/transfer', (req, res) => {
  const amount = req.body.amount;
  // Vulnerable code: transferring money without CSRF protection
  // Imagine this is a bank transfer operation
  console.log(`Transferring $${amount}`);
  res.send(`Money transferred: $${amount}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

