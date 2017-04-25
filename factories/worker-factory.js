var faker = require('faker');
var moment = require('moment');

var usernames = ['maudevolk','neon.vnm','fdlane61','amberolive','zachary','donaldnash1989','mkaminski69'];

var availDate = function(){
    let twoHoursAgo = moment().subtract(2, 'hours');
    return faker.date.between(twoHoursAgo.toDate(), new Date());
}

module.exports = function generateWorker(i){

  var date = availDate().toString();

  return {
    username: usernames[i],
    availableDate: date,
    createdBy: "fieldwork-manager",
    createdDate: new Date(),
    displayName: faker.name.lastName() + ", " + faker.name.firstName(),
    editedBy: "",
    editedDate: null,
    isAvailable:  faker.random.boolean(),
    jobCount: 0,
    isActive: true,
  }
};
