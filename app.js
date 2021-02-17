const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
//const methodOverride = require('method-override');
const { count } = require('./scripts/count.js');
const { split } = require('./scripts/split.js');
const { remove } = require('./scripts/remove.js');
const { correct } = require('./scripts/correct.js');
const { createOrder } = require('./scripts/createOrder.js');
const { getOrder } = require('./scripts/createOrder.js');


app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');


app.post('/countAmountOfEachCharacter', function (req, res) {
	const result = count(req.body.input ? req.body.input : '');
  res.render('count/index',{obj : result});
});

app.post('/splitOddAndEven', function (req, res) {
	const result = split(req.body.input ? req.body.input : '');
  res.render('split/index',result);
});

app.post('/removeExclamationMarksFromEnd', function (req, res) {
	const result = remove(req.body.input ? req.body.input : '');
  res.render('remove/index',{_string : result});
});

app.post('/correctMistakes', function (req, res) {
	const result = correct(req.body.input ? req.body.input : '');
  res.render('correct/index',{_newString : result});
});


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/test', function (req, res) {
  res.render('test');
});

app.get('/splitOddAndEven', function (req, res) {
	const result = split(req.query.input ? req.query.input : '');
  res.render('split/index');
});

app.get('/countAmountOfEachCharacter', function (req, res) {
	const result = count(req.query.input ? req.query.input : '');
  res.render('count/index');
});

app.get('/taschenrechner', function (req, res) {
  res.render('taschenrechner/index');
});

app.get('/removeExclamationMarksFromEnd', function (req, res) {
	const result = remove(req.query.input ? req.query.input : '');
  res.render('remove/index');
});

app.get('/correctMistakes', function (req, res) {
	const result = correct(req.query.input ? req.query.input : '');
  res.render('correct/index');
});

app.get('/countAmountOfEachCharacter', function(req, res) {
console.log(req.params, req.query)
  res.sendFile(__dirname + "./countAmountOfEachCharacter/index");
});

app.get('/api',async function (req, res) {
  console.log(req.body,'query:',req.query);
	const result = await getOrder(req.query ? req.query : '');
  res.render('api/index',{getOrder : result});
});

app.post('/api',async function (req, res) {
  console.log(req.body);
	const result = await createOrder(req.body ? req.body : '');
  res.render('api/index',{createOrder : result});//<--
});

/*
app.use(methodOverride());
app.use(function(err, req, res, next) {
  res.sendFile(__dirname + 'wartung/index.html');
});
*/

app.listen(3000, function() {
  console.log('server ist auch da');
});

