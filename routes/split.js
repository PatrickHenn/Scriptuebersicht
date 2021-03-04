const express = require('express');
const splitRoutes = express.Router();
const { split } = require('./../scripts/split.js');

splitRoutes.get('/', function (req, res) {
	const result = split(req.query.input ? req.query.input : '');
  res.render('split/index');
});

splitRoutes.post('/', function (req, res) {
	const result = split(req.body.input ? req.body.input : '');
  res.render('split/index',result);
});

module.exports = splitRoutes;