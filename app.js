let express = require('express');
let bodyParser = require('body-parser');
let app = express();


const { countAmountOfEachCharacter } = require('./countAmountOfEachCharacter/script.js');
const { splitOddAndEven } = require('./splitOddAndEven/script.js');
//const splitScrip = require('./splitOddAndEven/script.js');
//const { calculator } = require('./public/script.js');


app.use(express.static(__dirname +'/public'));

app.use(bodyParser.urlencoded({extended: true}));


app.post('/countAmountOfEachCharacter/ergebnis', function(req, res) {
	console.log('es spricht buchstaben');
	res.end(JSON.stringify(req.body));
});

app.post('/splitOddAndEven/ergebnis', function(req, res) {
	console.log('es kann zählen');
	res.end(JSON.stringify(req.body));
});


app.get('/', function(req, res) {
console.log(req.params, req.query)
  res.sendFile(__dirname + "/index.html");
});

app.get('/countAmountOfEachCharacter', function(req, res) {
	console.log(req.params, req.query)
	const result = countAmountOfEachCharacter(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/countAmountOfEachCharacter/index.html");
});

app.get('/splitOddAndEven', function(req, res) {
	console.log(req.params, req.query)
	const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/splitOddAndEven/index.html");
});

app.get('/Taschenrechner', function(req, res) {
	console.log(req.params, req.query)
  res.sendFile(__dirname + "/Taschenrechner/index.html");
});

/*
app.get('/splitOddAndEven', function(req, res) {
	console.log(req.params, req.query)
	const result = splitScrip(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/splitOddAndEven/index.html");
});*/


app.listen(3000, function() {
  console.log('server ist auch da');
});
