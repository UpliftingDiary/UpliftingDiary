const express = require('express');
const app = express();
const postgres = require('postgres');
require('dotenv').config();
const quoteController = require('./controllers/quoteController.js');
const entryController = require('./controllers/entryController.js');

// function getUsers () {
//   SELECT input FROM entry;
// }
app.use(express.json()); //to receive req.body
app.use(express.urlencoded({ extended: false }));

app.get('/api/notes', entryController.entry, (req, res) => {
  // console.log(res.locals.notes);
  return res.status(200).json(res.locals.notes);
});

app.get('/api/notes/:id', entryController.oneEntry, (req, res) => {
  // console.log(res.locals.notes);
  return res.status(200).json(res.locals.note);
});

app.post('/api/notes', entryController.addEntry, (req, res) => {
  console.log('res.locals.addNote:', res.locals.addNote);

  return res.status(200).json(res.locals.addNote);
});

app.get('/api/quote', quoteController.getSingleQuote, (req, res) => {
  // console.log('back to frontend:', res.locals.quote);
  return res.status(200).json(res.locals.quote);
});

app.listen(3000, () => console.log(`Server running on port 3000`));
