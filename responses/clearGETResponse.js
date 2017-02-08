
module.exports = function clearGETResponse(req, res, fAdmin){
  var workerRef = fAdmin.database().ref().child('workers');
  var jobRef = fAdmin.database().ref().child('jobs');
  workerRef.remove();
  jobRef.remove();
}
