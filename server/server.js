var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
var db = require('../database/db.js');
console.log(db);

var app = express();

app.use(express.static(__dirname + '/../client'));

app.listen(8080);


