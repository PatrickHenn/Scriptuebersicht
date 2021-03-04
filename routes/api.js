const express = require('express');
const router = express.Router();
const { createOrder } = require('../scripts/createOrder.js');
const { getOrder } = require('../scripts/createOrder.js');  
const { orgaId } = require('../scripts/lib/request.js');

router.get('/',async function (req, res) {
  console.log(req.body,'query:',req.query);
    const result = await getOrder(req.query ? req.query : '');
  res.render('api/index',{getOrder : result});
});

router.post('/',async function (req, res) {
console.log(req.body);
  const result = await createOrder(req.body ? req.body : '');
res.render('api/index',{createOrder : result});//<--
});

router.get('/:id', function (req, res) {
  res.render('router/index');
});

module.exports = router;