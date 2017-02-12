var admin = require("firebase-admin");
var express = require('express');
const app = require('express')();
const routes = require('./routes/routes');

app.use(express.static('public'));
app.use('/', routes);

app.listen(process.env.PORT || 5000, function () {
   console.log("Manager server started successfully at: 'http://localhost:5000'");
})
