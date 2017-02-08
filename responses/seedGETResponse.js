const generateWorker = require('../factories/worker-factory');
const generateJob = require('../factories/job-factory');

module.exports = function seedGETResponse(req, res, fAdmin){

  var workerRef = fAdmin.database().ref().child('workers');
  var jobRef = fAdmin.database().ref().child('jobs');

  var num = req.query.num;

  if (num === undefined)
    return "Query: ?num=#";

  if (num > 7)
    num = 7

  for(var i = 0; i < num; i++) {

    var worker = generateWorker(i);
    var job = generateJob();

    workerRef.push(worker);
    jobRef.push(job);
  };
  return "Seeded " + num + " entries!";
}
