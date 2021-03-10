const express = require('express');
const { split } = require('../scripts/split.js');

const splitRoutes = express.Router();

splitRoutes.get('/', (req, res) => {
  split(req.query.input ? req.query.input : '');
  res.render('split/index');
});

splitRoutes.post('/', (req, res) => {
  const result = split(req.body.input ? req.body.input : '');
  res.render('split/index', result);
});

module.exports = splitRoutes;
