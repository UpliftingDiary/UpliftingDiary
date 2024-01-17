const express = require('express');
const entryController = {};

// import/require the entryModel methods
const { getEntries } = require('../model/entrymodel.js');
const { addEntries } = require('../model/entrymodel.js');

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
    // const { input } = req.body;
    console.log('req.body', req.body);
    const addNote = await addEntries(req.body);
    console.log('Inside addController');
    res.locals.addNote = addNote;

    return next();
  } catch (error) {
    console.log('error in addController');
  }
};

module.exports = entryController;
