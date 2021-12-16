const db = require('../db');
const Place = require('../models/place');
const Location = require('../models/location')
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const yoshino = await Place.find({ name: 'Yoshino' })
    const sushiNoz= await Place.find({ name: 'Sushi Noz' })
    const sushiGinzaOnodera = await Place.find({ name: 'Sushi Ginza Onodera' })
    const amamoto= await Place.find({ name: 'Amamoto' })
    const sukiyabashiJiro = await Place.find({ name: 'Sukiyabashi Jiro' })
    const kojima = await Place.find({ name: 'Kojima' })
    const mitou = await Place.find({ name: 'Mitou' })


  const reviews = [
    {
      name: 'Ellen',
      comments: 'My best birthday dinner ever!',
      ratings: 5,
      place: yoshino[0]._id,
    
    },
    {
      name: 'Angie',
      comments: 'delicious, spectacular!',
      ratings: 4,
      place: sushiNoz[0]._id,
    
      
    },
    {
      name: 'Gihae',
      comments: 'Just a beautiful classic',
      ratings: 4,
      place: sushiGinzaOnodera[0]._id,
    
    },
    {
        name: 'Kei',
        comments: 'Authentic, deep taste',
        ratings: 4,
        place: amamoto[0]._id,
        
      },
      {
        name: 'Josh',
        comments: 'Fabulous, It was worth it to wait a year',
        ratings: 5,
        place: sukiyabashiJiro[0]._id,
       
      },
      {
        name: 'Leila',
        comments: 'deilicous but pricy',
        ratings: 3,
        place: kojima[0]._id,
       
      },
      {
        name: 'Jess',
        comments: 'pretty, delicious.. Chefs were so nice!',
        ratings: 5,
        place: mitou[0]._id,
      },


    
  ];

  await Review.insertMany(reviews);
  console.log('Created reviews!');
};

const run = async () => {
  await main();
  db.close();
};

run();




