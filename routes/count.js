const express = require('express');
const countRoutes = express.Router();
const { count } = require('./../scripts/count.js');

countRoutes.get('/', function (req, res) {
	const result = count(req.query.input ? req.query.input : '');
  res.render('count/index');
});

countRoutes.post('/', function (req, res) {
	const result = count(req.body.input ? req.body.input : '');
  res.render('count/index',{obj : result});
});

module.exports = countRoutes;