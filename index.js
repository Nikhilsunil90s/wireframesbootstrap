var app = require('express')();
var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var bCrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var router = require('./router.js');
var Authrouter = require('./Authrouter.js');

// Access public folder from root
app.use('/public', express.static('public'));
app.get('/layouts/', function(req, res) {
  res.render('view');
});

// Add Authentication Route file with app
app.use('/', Authrouter); 

//For set layouts of html view
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Add Route file with app
app.use('/', router); 

const port =  process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:3000');
});
