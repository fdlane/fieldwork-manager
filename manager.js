var admin = require("firebase-admin");
const app = require('express')();
const routes = require('./routes/routes');

app.use('/', routes);

app.listen(process.env.PORT || 8081, function () {
   console.log("Manager server started successfully");
})
