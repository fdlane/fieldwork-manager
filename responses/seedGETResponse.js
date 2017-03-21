const generateWorker = require('../factories/worker-factory');
const generateJob = require('../factories/job-factory');

module.exports = function seedGETResponse(req, res, fAdmin){

  var responseString = "";
  var workerRef = fAdmin.database().ref().child('workers');
  var jobRef = fAdmin.database().ref().child('jobs');

  var seedjob = 0;
  if(req.query.jobs !== undefined && req.query.jobs > 0){
    seedjob = req.query.jobs;
    responseString += "Seeded " + seedjob + " jobs!\n";
  }
  var seedworker = 0;
  if(req.query.workers !== undefined && req.query.workers > 0){
    seedworker = req.query.workers;
    responseString += "Seeded " + seedworker + " workers!\n";
  }

  for(var i = 0; i < seedworker; i++) {
    var worker = generateWorker(i);
    workerRef.push(worker);
  };

  for(var i = 0; i < seedjob; i++) {
    var job = generateJob();
    jobRef.push(job);
  };

  return responseString;
}
