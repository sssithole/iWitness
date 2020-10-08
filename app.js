const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require('./api/v1/routes');

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To parse json data
app.use(bodyParser.json());
app.use(logger('common'));
app.use('/', routes);

app.listen(8080, () => console.log('==========iWitnessAPI==========='));
