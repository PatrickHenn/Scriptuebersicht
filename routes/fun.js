const express = require('express');
const { fun } = require('../scripts/fun.js');

const countRoutes = express.Router();

countRoutes.get('/', (req, res) => {
  fun(req.query.input ? req.query.input : '');
  res.render('fun/index');
});

countRoutes.post('/', (req, res) => {
  const result = fun(req.body.input ? req.body.input : '');
  res.render('fun/index', { obj: result });
});

module.exports = countRoutes;
