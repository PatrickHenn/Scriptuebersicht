const express = require('express');
const calculatorRoutes = express.Router();

calculatorRoutes.get('/', function (req, res) {
    res.render('calculator/index');
  });
  
  module.exports = calculatorRoutes;