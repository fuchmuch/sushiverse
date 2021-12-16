const db = require('../db');
const Place = require('../models/place');
const Location = require('../models/location')
const Review= require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

  const locations = [
    {
      // url: '', am i putting google map API in here???
      city: 'New York',
      country: 'United States',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
    },
      
    {
      city: 'Seoul',
      country: 'South Korea',
    },
   
  ];

  await Location.insertMany(locations);
  console.log('Created locations!');
};

const run = async () => {
  await main();
  db.close();
};

run();  


