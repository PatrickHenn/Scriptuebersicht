const express = require('express');
const correctMistakes = express.Router();
const { correct } = require('./../scripts/correct.js');

correctMistakes.get('/', function (req, res) {
    const result = correct(req.query.input ? req.query.input : '');
  res.render('correct/index');
});

correctMistakes.post('/', function (req, res) {
	const result = correct(req.body.input ? req.body.input : '');
  res.render('correct/index',{_newString : result});
});

module.exports = correctMistakes;