const express = require('express');
const removeRotes = express.Router();
const { remove } = require('./../scripts/remove.js');

removeRotes.get('/', function (req, res) {
    const result = remove(req.query.input ? req.query.input : '');
  res.render('remove/index');
});

removeRotes.post('/', function (req, res) {
	const result = remove(req.body.input ? req.body.input : '');
  res.render('remove/index',{_string : result});
});

module.exports = removeRotes;