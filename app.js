const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

const calculatorRoutes = require('./routes/calculator');

app.use('/calculator', calculatorRoutes);

const correctRouter = require('./routes/correct');

app.use('/correctMistakes', correctRouter);

const countRoutes = require('./routes/count');

app.use('/countAmountOfEachCharacter', countRoutes);

const mainRoutes = require('./routes/main');

app.use('/', mainRoutes);

const removeRotes = require('./routes/remove');

app.use('/removeExclamationMarksFromEnd', removeRotes);

const splitRoutes = require('./routes/split');

app.use('/splitOddAndEven', splitRoutes);

app.listen(3000);
