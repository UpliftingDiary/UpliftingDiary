const express = require('express');
const app = express();
const postgres = require('postgres');
require('dotenv').config();
const quoteController = require('./controllers/quoteController.js');

app.get('/entries', (req, res) => {
  console.log('inside the database');
  return res.status(200).json();
});

app.get('/api/quote', quoteController.getSingleQuote, (req, res) => {
  console.log('back to frontend:', res.locals.quote);
  return res.status(200).json(res.locals.quote);
});

app.listen(8080, () => console.log(`Server running on port 3000`));
