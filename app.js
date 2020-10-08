let express = require('express');
let app = express();
const { countAmountOfEachCharacter } = require('./countAmountOfEachCharacter/script.js');
//const splitScrip = require('./splitOddAndEven/script.js');
const { splitOddAndEven } = require('./splitOddAndEven/script.js');
const { number } = require('./Taschenrechner/script.js');


app.use(express.static(__dirname +'/public'));


app.get('/', function(req, res) {
console.log(req.params, req.query)
  res.sendFile(__dirname + "/index.html");
});

app.get('/countAmountOfEachCharacter', function(req, res) {
console.log(req.params, req.query)
const result = countAmountOfEachCharacter(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/countAmountOfEachCharacter/index.html");
});

/*app.get('/splitOddAndEven', function(req, res) {
console.log(req.params, req.query)
const result = splitScrip(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/splitOddAndEven/index.html");
});*/

app.get('/splitOddAndEven', function(req, res) {
console.log(req.params, req.query)
const result = splitOddAndEven(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/splitOddAndEven/index.html");
});

app.get('/Taschenrechner', function(req, res) {
console.log(req.params, req.query)
const result = number(req.query.input ? req.query.input : '');
  res.sendFile(__dirname + "/Taschenrechner/index.html");
});


app.listen(3000, function() {
  console.log('server ist auch da');
});
