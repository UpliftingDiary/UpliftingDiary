const express = require('express');

const quoteController = {};

quoteController.getSingleQuote = async (req, res, next) => {
  const url =
    'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result[0]);
    res.locals.quote = result[0];
    // res.json({ quote: result[0] });
    return next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = quoteController;
