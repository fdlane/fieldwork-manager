var admin = require("firebase-admin");
var express = require('express')
const generateWorker = require('./worker-factory');
const generateJobs = require('./jobs-factory');

var app = express()
var serviceAccount = "pstcc2017fieldwork-firebase-adminsdk-m19wq-d4b9d4ae7f.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pstcc2017fieldwork.firebaseio.com/"
});

var jobRef = admin.database().ref().child("jobs");
var workerRef = admin.database().ref().child("workers");

app.route('/')
.get((req, res) => {
  res.status(200).send('<h2>Manager Home</h2>')
})

app.route('/hello-world')
.get((req, res) => {
  helloWorldGETResponse(req, res)
})
.head((req, res) => {
  res.status(200).json({'response':'Hello World!'})
})

app.route('/seed')
.get((req, res) => {
  seedGETResponse(req, res);
})

app.route('/clear')
.get((req, res) => {
  workerRef.remove();
  jobRef.remove();
  res.status(200).send("cleared all entries!")
})

app.route('/Google')
.get((req, res) => {
  res.redirect('https://www.google.com/')
})

app.listen(process.env.PORT || 8081, function () {
   console.log("Manager server started successfully")
})

var helloWorldGETResponse = function (req, res) {
  var num = req.query.num;
  if(num === undefined)
    res.status(200).send('Hello World!')
  else if(num < 1)
    res.status(200).send('Hell0 W0rld!')
  else {
    var helloWorld = '';
    for (var i = 0; i < num; i++){
      helloWorld += (i + 1) + ') Hello World!<br />';
    }
    res.status(200).send(helloWorld)
  }
}

var seedGETResponse = function (req, res) {

  var num = req.query.num;

  if(num === undefined)
    num = 1;

  if(num > 15)
    num = 15;

  for(var i = 0; i < num; i++) {

    var worker = generateWorker(i);
    var job = generateJobs();

    workerRef.push(worker);
    jobRef.push(job);
  };

  res.status(200).send("seeded " + num + " entries!")
}
