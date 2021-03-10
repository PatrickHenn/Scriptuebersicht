require('dotenv').config();
const express = require('express');
const { createOrder, getOrder } = require('../scripts/createOrder.js');

const apiRoutes = express.Router();

apiRoutes.get('/', async (req, res) => {
  console.log(req.body, 'query:', req.query);
  const result = await getOrder(req.query ? req.query : '');
  res.render('api/index', { getOrder: result });
});

apiRoutes.post('/', async (req, res) => {
  console.log(req.body);
  const result = await createOrder(req.body ? req.body : '');
  res.render('api/index', { createOrder: result });
});

module.exports = apiRoutes;
