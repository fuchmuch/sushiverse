const db = require('../db');
const Location = require('../models/location');
const Place = require('../models/place');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const newYork= await Location.find({ city: 'New York' })
    const tokyo = await Location.find({ city: 'Tokyo' })
    const seoul= await Location.find({ city: 'Seoul' })
   
  const places = [
    {
      name: 'Sushi Noz',
      price: '$$$$',
      address: '181 East 78 St New York, NY 10075',
      description: 'Craftsmanship at its finest 8-seat 200-year-old hinoki wood sushi bar, serve twice nightly at 6:00 pm and 9:00 pm',
      url: 'https://cdn.vox-cdn.com/thumbor/NMivDFq6JIwWVDmAC3Z8jQ9iQBQ=/0x0:1169x777/1200x800/filters:focal(492x296:678x482)/cdn.vox-cdn.com/uploads/chorus_image/image/59216889/Screen_Shot_2018_03_30_at_12.39.43_PM.0.png',
      michelin_awardWinning: true,
      location_id: newYork[0]._id,
    },
    {
      name: 'Sushi Ginza Onodera',
      price: '$$$$',
      address: '461 5th Ave, New York, NY 10017',
      description: 'High-end branch of a Tokyo eatery offering omakase-only sushi in a pared-down yet warm setting.',
      url: 'https://lh3.googleusercontent.com/N5QDc559x6woyjW-Y1XQ3gpmdQAN-B-4Zb12LK4iS-NCCiNSjABh5WTxAxC4nF2TrR1l4iI4xNn3MorxPcLgqzFizfbQD9Qe6zVL8hR6CSg=s1440-e7-v1-rw',
      michelin_awardWinning: true,
      location_id: newYork[0]._id,
    },
    {
      name: 'Yoshino',
      price: '$$$$',
      address: '342 Bowery, New York, NY 10012',
      description: 'A sushi omakase restaurant by acclaimed Japanese Master Sushi Chef Tadashi "Edowan" Yoshida.',
      url: 'https://cdn.vox-cdn.com/thumbor/GN2HXS37qRKm1zxxfRGf-wA-Vgw=/0x0:2048x1365/1200x0/filters:focal(0x0:2048x1365):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22865174/EaterNY_Yoshino_MLANDSMAN_08.jpg',
      michelin_awardWinning: false,
      location_id: newYork[0]._id,
    },
   {
      name: 'Sukiyabashi Jiro',
      price: '$$$$',
      address: '6-12-2 Roppongi, Minato-ku, Tokyo, 106-0032, Japan',
      description: 'Relaxed, narrow choice with sushi bar seating for offerings from acclaimed chef Jiro Ono.',
      url: 'https://cdn.vox-cdn.com/thumbor/GN2HXS37qRKm1zxxfRGf-wA-Vgw=/0x0:2048x1365/1200x0/filters:focal(0x0:2048x1365):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22865174/EaterNY_Yoshino_MLANDSMAN_08.jpg',
      michelin_awardWinning: true,
      location_id: tokyo[0]._id
    },
    {
      name: 'Amamoto',
      price: '$$$$',
      address: '1 Chome-7-9 Higashiazabu, Minato City, Tokyo 106-0044, Japan',
      description: 'His aim is to take Edomae sushi to its next stage,he carries on the spirit of his mentor who said, “Masamichi, have courage”',
      url: 'https://cdn.vox-cdn.com/thumbor/GN2HXS37qRKm1zxxfRGf-wA-Vgw=/0x0:2048x1365/1200x0/filters:focal(0x0:2048x1365):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22865174/EaterNY_Yoshino_MLANDSMAN_08.jpg',
      michelin_awardWinning: true,
      location_id: tokyo[0]._id
    },
    {
        name: 'Kojima',
        price: '$$$$',
        address: '6F Boon the Shop, 21 Apgujeong-ro 60-gil, Gangnam-gu, SEOUL, South Korea',
        description: 'Prepared from ingredients that change daily, the sushi has an unadorned and fine taste',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/f871f6fc-ea67-41e5-a4f7-9a7b24ab94d3.jpg?width=1000',
        michelin_awardWinning: true,
        location_id: seoul[0]._id
      },
      {
        name: 'Mitou',
        price: '$$$$',
        address: '2F, 17 Nonhyeon-ro 151-gil, Gangnam-gu, SEOUL, South Korea',
        description: 'The omakase menu at Mitou changes on a monthly basis as they showcase some of the best local ingredients at the height of their freshness.',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/f871f6fc-ea67-41e5-a4f7-9a7b24ab94d3.jpg?width=1000',
        michelin_awardWinning: true,
        location_id: seoul[0]._id
      },

    
  ];

  await Place.insertMany(places);
  console.log('Created places!');
};

const run = async () => {
  await main();
  db.close();
};

run();




