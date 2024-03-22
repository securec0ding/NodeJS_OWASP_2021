// server.js

const express = require('express');
const bodyParser = require('body-parser');
const xmlParser = require('xml2js').parseString;

const app = express();
const PORT = 3000;

app.use(bodyParser.text({ type: 'text/xml' }));

app.post('/parse-xml', (req, res) => {
  const xmlData = req.body;

  // Insecure code: Parsing XML with external entity parsing enabled
  xmlParser(xmlData, { explicitChildren: true, explicitRoot: true, mergeAttrs: true }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error parsing XML');
    } else {
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

