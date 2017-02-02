var express = require('express')
var app = express()

app.route('/')
.get((req, res) => {
  res.status(200).send('<h2>Manager Home</h2>')
})

app.route('/HelloWorld')
.get((req, res) => {
  helloWorldGETResponse(req, res)
})
.head((req, res) => {
  res.status(200).json({'response':'HelloWorld'})
})

app.route('/clear')
.get((req, res) => {

})

app.route('/Google')
.get((req, res) => {
  res.redirect('https://www.google.com/')
})

var server = app.listen(process.env.PORT || 8081, "localhost", function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
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
