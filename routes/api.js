require('dotenv').config();
const express = require('express');
const apiRoutes = express.Router();
const { createOrder, getOrder } = require('./../scripts/createOrder.js');

apiRoutes.get('/',async function (req, res) {
  console.log(req.body,'query:',req.query);
    const result = await getOrder(req.query ? req.query : '');
  res.render('api/index',{getOrder : result});
});

apiRoutes.post('/',async function (req, res) {
  console.log(req.body);
  const result = await createOrder(req.body ? req.body : '');
res.render('api/index',{createOrder : result});
});

// router.get('/:id', function (req, res) {
//   res.render('routes/etwas');
// });

module.exports = apiRoutes;