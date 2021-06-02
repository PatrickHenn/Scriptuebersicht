const express = require('express');
const { remove } = require('../scripts/remove.js');

const puppiesRotes = express.Router();

puppiesRotes.get('/', (req, res) => {
  remove(req.query.input ? req.query.input : '');
  res.render('puppies/index');
});

puppiesRotes.post('/', (req, res) => {
  const result = remove(req.body.input ? req.body.input : '');
  res.render('puppies/index', { _string: result });
});

module.exports = puppiesRotes;
