const express = require('express');
const entryController = {};

// import/require the entryModel methods
const { getEntries } = require('../model/entrymodel.js');
const { addEntries } = require('../model/entrymodel.js');
const { oneEntry } = require('../model/entrymodel.js');

entryController.entry = async (req, res, next) => {
  try {
    const notes = await getEntries();
    res.locals.notes = notes;

    return next();
  } catch (error) {
    console.log('error in entryController');
  }
};

entryController.addEntry = async (req, res, next) => {
  try {
    const addNote = await addEntries(req.body.note);
    res.locals.addNote = addNote.input;

    return next();
  } catch (error) {
    console.log('error in addController');
  }
};

entryController.oneEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('inside oneEntry: id', id);
    const oneNote = await oneEntry(id);
    res.locals.note = oneNote;
    return next();
  } catch (error) {
    console.log('error in oneEntryController');
  }
};

module.exports = entryController;
