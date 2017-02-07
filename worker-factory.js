var faker = require('faker');
var moment = require('moment');

var usernames = ['YHI06858','BBS91751','YTR03897','BQR91547','UUF99345','MZJ98941','CLX99299','RCB98317','YEA99700','SRM99527','DNX94131','NJA04203','DTR04691','YIM93222','XWC99626'];
var availDate = function(){
    let twoHoursAgo = moment().subtract(2, 'hours');
    return faker.date.between(twoHoursAgo.toDate(), new Date());
}

module.exports = function generateWorker(i){

  var date = availDate().toString();

  return {
    Username: usernames[i],
    AvailableDate: date,
    createdBy: "seeder.js",
    createdDate: faker.date.past(),
    displayName: faker.name.lastName() + ", " + faker.name.firstName(),
    editedBy: "seeder.js",
    editedDate: faker.date.past(),
    isAvailable:  faker.random.boolean(),
    lastJobUpdateDate: faker.date.recent(),
    jobCount: 10
  }
  /*
  afterCreate(worker, server) {
    server.createList('job', 10, {
      assignedTo: worker.username,
    });
    worker.save();
  },*/
};
