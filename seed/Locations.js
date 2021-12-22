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
      url: 'https://i.pinimg.com/564x/38/6b/3d/386b3d57df9f613c89ff1c0d6e003676.jpg',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      url:'https://www.japan-guide.com/g18/3009_01.jpg',
    },
      
    {
      city: 'Seoul',
      country: 'South Korea',
      url: 'https://media.istockphoto.com/photos/seoul-city-skyline-and-downtown-and-skyscraper-at-night-is-the-best-picture-id1257892405?k=20&m=1257892405&s=170667a&w=0&h=PXLsM4Ycl4IlNQut7qKVTKqmSxlA6atiwMZ1tBGorJk=',
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


