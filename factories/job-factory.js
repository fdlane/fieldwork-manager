var faker = require('faker');

var usernames = ['maudevolk','neon.vnm','fdlane61','amberolive','zachary','donaldnash1989','mkaminski69'];
var categories = ['outage', 'replacement', 'service'];
var images = ['PowerLine.jpg', 'meter.jpg', 'broken-sign.jpg', 'pothole.jpg'];

module.exports = function generateJobs(){
  return{
    createdBy: 'fieldwork-manager',
    description: 'some description',
    createdDate: new Date(),
    editedBy: '',
    editedDate: new Date(),
    contactInfo: 'customer@email.com',
    category: faker.random.arrayElement(categories),
    location: faker.address.streetAddress(),
    metaId: faker.random.number({min: 1000000000, max: 9999999999}),
    scheduleDate: faker.date.recent(),
    assignedTo: 'UNASSIGNED',
    isActive: true,
    status:'pending',
    jobImage: faker.random.arrayElement(images),
  }
};
