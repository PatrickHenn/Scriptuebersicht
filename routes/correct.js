const express = require('express');
const { correct } = require('../scripts/correct.js');

const correctMistakes = express.Router();

correctMistakes.get('/', (req, res) => {
  correct(req.query.input ? req.query.input : '');
  res.render('correct/index');
});

correctMistakes.post('/', (req, res) => {
  const result = correct(req.body.input ? req.body.input : '');
  res.render('correct/index', { _newString: result });
});

module.exports = correctMistakes;
