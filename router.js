const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express()//<--
require('dotenv').config();
const { createOrder } = require('./scripts/createOrder.js');
const { getOrder } = require('./scripts/createOrder.js');  

router.use(express.static(__dirname +'/public'));
router.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');//<--


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

module.exports = router;