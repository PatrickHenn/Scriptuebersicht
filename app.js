const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { countAmountOfEachCharacter } = require('./countAmountOfEachCharacter/script.js');
const { splitOddAndEven } = require('./splitOddAndEven/script.js');
const { removeExclamationMarksFromEnd } = require('./removeExclamationMarksFromEnd/script.js');


app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

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
	const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.render('splitOddAndEven/index');
});

app.get('/countAmountOfEachCharacter', function (req, res) {
	const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.render('countAmountOfEachCharacter/index');
});

app.get('/Taschenrechner', function (req, res) {
  res.render('taschenrechner/index');
});

app.get('/removeExclamationMarksFromEnd', function (req, res) {
  res.render('removeExclamationMarksFromEnd/index');
});

app.get('/ergebnis', function(req, res) {
	res.render('ergebnis/index',{params: req.query});
});

app.listen(3000, function() {
  console.log('server ist auch da');
});

