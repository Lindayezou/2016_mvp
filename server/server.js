var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');


// var db = require('./app/config');
// var Users = require('./app/collections/users');
// var User = require('./app/models/user');
// var List = require('../client/app/list/list');
// var Link = require('./app/models/link');
// var Click = require('./app/models/click');

var app = express();

// app.set('views', __dirname + '/views');
// // app.set('view engine', 'ejs');
// app.use(partials());
// // Parse JSON (uniform resource locators)
// app.use(bodyParser.json());
// // Parse forms (signup/login)
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client'));

// app.get('/', 
// function(req, res) {
//   res.render('index');
// });

// app.get('/list', 
// function(req, res) {
//   List.reset().fetch().then(function(list) {
//     res.send(200, list.models);
//   });
// });


app.listen(8080);



// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// items = []

// http.createServer(function(request, response) {
//   var pathname = url.parse(request.url).pathname;
//   if (request.method === 'GET') {
//     console.log(pathname)
//     if (pathname === '/') {
//       fs.readFile('index.html', function(err, data) {
//         response.setHeader('Access-Control-Allow-Origin', '*');
//         response.write(data);
//         response.end();
//       });
//       } else if (pathname === '/app.js') {
//         fs.readFile('app.js', function(err, data){
//         response.setHeader('Access-Control-Allow-Origin', '*');
//         response.write(data);
//         response.end();
//         })
//     } else if (pathname === '/getItems') {
//       response.write(JSON.stringify(items))
//       response.end();
//     }
//   } else if (request.method === 'POST') {
//     if (pathname === '/addItem') {
//       receivedData = ""
//       request.on('data', function (chunk) {
//         receivedData += chunk;
//       });
//       request.on('end', function () {
//         items.push(receivedData);
//       })
//       response.end();
//     }
//   }
// }).listen('8080', '127.0.0.1');
// console.log('i start =)')

