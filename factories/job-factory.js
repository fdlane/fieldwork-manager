var faker = require('faker');

var usernames = ['maudevolk','neon.vnm','fdlane61','amberolive','zachary','donaldnash1989','mkaminski69'];

module.exports = function generateJobs(){
  return{
    createdBy: 'fieldwork-manager',
    createdDate: new Date(),
    editedBy: '',
    editedDate: '',
    location: faker.address.streetAddress(),
    metaId: faker.random.number({min: 1000000000, max: 9999999999}),
    scheduleDate: faker.date.recent(),
    assignedTo: faker.random.arrayElement(usernames),
    isActive: true,
  }
};
