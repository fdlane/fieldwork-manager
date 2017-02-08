const routes = require('express').Router();
const path = require("path");
const admin = require('firebase-admin');
const seedGETResponse = require('../responses/seedGETResponse')
const clearGETResponse = require('../responses/clearGETResponse')

admin.initializeApp({
  credential: admin.credential.cert("pstcc2017fieldwork-firebase-adminsdk-m19wq-d4b9d4ae7f.json"),
  databaseURL: "https://pstcc2017fieldwork.firebaseio.com"
});

routes.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname+'/index.html'));
});

routes.get('/seed', (req, res) => {
  res.status(200).send(seedGETResponse(req, res, admin));
});

routes.get('/clear', (req, res) => {
  res.status(200).send(clearGETResponse(req, res, admin));
});

module.exports = routes;
