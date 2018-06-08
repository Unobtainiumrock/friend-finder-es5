
// Vendor
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname,'/public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes 
var APIRoutes = require(path.join(__dirname,'/app/routing/apiRoutes'));
APIRoutes.attach(app);

var HTMLRoutes = require(path.join(__dirname,'/app/routing/htmlRoutes'));
HTMLRoutes.attach(app);

app.listen(PORT,function(){console.log('Listening on port:' + PORT )});