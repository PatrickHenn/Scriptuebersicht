const express = require('express');
const { count } = require('../scripts/count.js');

const countRoutes = express.Router();

countRoutes.get('/', (req, res) => {
  count(req.query.input ? req.query.input : '');
  res.render('count/index');
});

countRoutes.post('/', (req, res) => {
  const result = count(req.body.input ? req.body.input : '');
  res.render('count/index', { obj: result });
});

module.exports = countRoutes;
