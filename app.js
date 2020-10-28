const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const { countAmountOfEachCharacter } = require('./countAmountOfEachCharacter/script.js');
const { splitOddAndEven } = require('./splitOddAndEven/script.js');
//const splitScrip = require('./splitOddAndEven/script.js');

app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');


app.post('/countAmountOfEachCharacter/ergebnis', function(req, res) {
	console.log('es spricht buchstaben');
	pug.render('p Hello world!');
	res.end(JSON.stringify(req.body));
});

app.post('/splitOddAndEven/ergebnis', function(req, res) {
	console.log('es kann zählen');
	res.end(JSON.stringify(req.body));
});


app.get('/', function (req, res) {
  res.render('index.pug');
});

app.get('/splitOddAndEven', function (req, res) {
	const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.render('splitOddAndEven/splitOddAndEven_index.pug');
});

app.get('/countAmountOfEachCharacter', function (req, res) {
	const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.render('countAmountOfEachCharacter/countAmountOfEachCharacter_index.pug');
});

app.get('/Taschenrechner', function (req, res) {
  res.render('Taschenrechner/Taschenrechner_index.pug');
});

/*

app.get('/countAmountOfEachCharacter', function(req, res) {
	console.log(req.params, req.query)
	const result = countAmountOfEachCharacter(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/countAmountOfEachCharacter/index.html");
});

app.get('/splitOddAndEven', function(req, res) {
	console.log(req.params, req.query)
	const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/splitOddAndEven/index.pug");
});

*/
//start server
app.listen(3000, function() {
  console.log('server ist auch da');
});

