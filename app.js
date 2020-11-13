const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { count } = require('./scripts/count/script.js');
const { split } = require('./scripts/split/script.js');
const { remove } = require('./scripts/remove/script.js');


app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

//router
var router1 = require('./router/router1');
app.use('/api/', router1); 

app.post('/countAmountOfEachCharacter/ergebnis', function(req, res) {
	console.log('buch');
	pug.render('Hello world!');
	res.end('ergebnis/index',{params:req.body});
});

app.post('/splitOddAndEven/ergebnis', function(req, res) {
	console.log('zahlen');
	res.end(JSON.stringify(req.body));
});

app.get('/', function (req, res) {
  res.render('index');
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

app.get('/ergebnis', function(req, res) {
	res.render('ergebnis/index',{params: req.query});
});

app.listen(3000, function() {
  console.log('server ist auch da');
});

