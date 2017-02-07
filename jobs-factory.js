var faker = require('faker');

var usernames = ['YHI06858','BBS91751','YTR03897','BQR91547','UUF99345','MZJ98941','CLX99299','RCB98317','YEA99700','SRM99527','DNX94131','NJA04203','DTR04691','YIM93222','XWC99626'];

module.exports = function generateJobs(){
  return{
    createdBy: 'fieldwork-manager',
    createdDate: new Date(),
    editedBy: '',
    editedDate: '',
    location: faker.address.streetAddress(),
    metaId: faker.random.number({min: 1000000000, max: 9999999999}),
    scheduleDate: faker.date.recent(),
    assignedTo: faker.random.arrayElement(usernames)
  }
};
