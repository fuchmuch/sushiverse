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
      location: newYork[0].id,
    },
    {
        name: 'Noda',
        price: '$$$$',
        address: '6 W 28th St, New York, 10001',
        description: 'Eight-seat sushi bar devoted to high-end omakase dinners, with a separate romantic lounge area.',
        url: 'https://images.squarespace-cdn.com/content/v1/59b2ca8e0abd0445de5efaa5/1522286676838-XMT7DLNDI7RWSRPFZR88/548+Fulk_Noda_90317-02-02.jpg?format=2500w',
        michelin_awardWinning: true,
        location: newYork[0].id,
      },
    {
      name: 'Sushi Ginza Onodera',
      price: '$$$$',
      address: '461 5th Ave, New York, NY 10017',
      description: 'High-end branch of a Tokyo eatery offering omakase-only sushi in a pared-down yet warm setting.',
      url: 'https://lh3.googleusercontent.com/N5QDc559x6woyjW-Y1XQ3gpmdQAN-B-4Zb12LK4iS-NCCiNSjABh5WTxAxC4nF2TrR1l4iI4xNn3MorxPcLgqzFizfbQD9Qe6zVL8hR6CSg=s1440-e7-v1-rw',
      michelin_awardWinning: true,
      location: newYork[0].id,
    },
    {
        name: 'SHION 69 Leonard Street',
        price: '$$$$',
        address: '69 Leonard St, New York, 10013',
        description: 'Refined Japanese spot with a 12-seat counter for omakase sushi & kaiseki dinners.',
        url: 'https://static01.nyt.com/images/2021/11/30/dining/30rest-shion-7/29rest-shion-7-mobileMasterAt3x.jpg',
        michelin_awardWinning: true,
        location: newYork[0].id,
      },
      {
        name: 'Uogashi',
        price: '$$$',
        address: '318 W 51st St, New York, NY 10019',
        description: 'A hidden gem in midtown.Down-to-earth seafood restaurant specializing in traditional sushi dishes,all fresh fishes handle by a sushi master chef Take.',
        url: 'https://static01.nyt.com/images/2019/11/06/dining/05REST-UOGA-slide-OSDA/05REST-UOGA-slide-OSDA-mobileMasterAt3x.jpg',
        michelin_awardWinning: false,
        location: newYork[0].id,
      },
      {
        name: 'Sushi Nakazawa',
        price: '$$$',
        address: '318 W 51st St, New York, NY 10019',
        description: `Within the twenty-course meal,chef Daisuke Nakazawa ,of Jiro Dreams of Sushi fame, prepares a sushi omakase unlike any other`,
        url: 'https://cdn.vox-cdn.com/thumbor/irYGksRXaaKt6pVEz5pBgthSZ-o=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/3358936/2014_nakazawa1.0.0.jpg',
        michelin_awardWinning: true,
        location: newYork[0].id,
      },
    {
      name: 'Yoshino',
      price: '$$$$',
      address: '342 Bowery, New York, NY 10012',
      description: 'A sushi omakase restaurant by acclaimed Japanese Master Sushi Chef Tadashi "Edowan" Yoshida.',
      url: 'https://cdn.vox-cdn.com/thumbor/GN2HXS37qRKm1zxxfRGf-wA-Vgw=/0x0:2048x1365/1200x0/filters:focal(0x0:2048x1365):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22865174/EaterNY_Yoshino_MLANDSMAN_08.jpg',
      michelin_awardWinning: false,
      location: newYork[0].id,
    },
    {
        name: 'Uchu',
        price: '$$$$',
        address: '217 Eldridge St, New York, NY 10002',
        description: 'Two tiny bars set the stage for prix fixe omakase sushi, Japanese tasting menus & spirits.',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/679d97f1-5d1a-414a-885d-697f8ef7b18b.jpg?width=1000',
        michelin_awardWinning: true,
        location: newYork[0].id,
      },
    {
        name: 'Sushi Zo Hanare Midtown',
        price: '$$$$',
        address: '127 E 39th St, New York, NY 10016',
        description: 'High-end branch of an LA sushi bar devoted to traditional, omakase-only dining in a simple setting',
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/11/21/72/f8/sushi-zo-hanare-midtown.jpg',
        michelin_awardWinning: false,
        location: newYork[0].id,
      },
      {
        name: 'Tsukimi',
        price: '$$$$',
        address: '228 E 10th St, New York, NY 10003',
        description: 'Japanese tasting menus highlighting ingredients of the season are presented in an intimate setting.',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/6d5f4c90-5d1f-4388-996f-485f3661d64e.jpg?width=1000',
        michelin_awardWinning: true,
        location: newYork[0].id,
      },
      {
        name: 'Kosaka',
        price: '$$$$',
        address: '220 W 13th St, New York, 10011',
        description: 'Sushi bar offering a high-end, multicourse "choice of chef" menu in a simple 18-seat space.',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/08ade175-4650-4ac5-9cb9-0b71f4b2c4de.jpeg?width=1000',
        michelin_awardWinning: true,
        location: newYork[0].id,
      },
      {
        name: 'Icca',
        price: '$$$$',
        address: '20 Warren St, New York, NY 10007',
        description: 'Longtime Ginza Onodera chef also Michelin Star awarded Sushi Chef Kazushige Suzuki and his team opened a new restaurant.',
        url: 'https://lh3.googleusercontent.com/A-cAZL7EvrvsFcXgQQ0GeM2ZXDlZkbXJcXspgaFjw5ulmK_cYvKlpGZRd_WfgqtjDWyC5EiIPHwl_110L7QV5igy7XqL_vcZDLBOdnxw=s1440-e7-v1-rw',
        michelin_awardWinning: false,
        location: newYork[0].id,
      },
      {
        name: 'Takeda',
        price: '$$$',
        address: '566 Amsterdam Ave, New York, NY 10024',
        description: 'Takeda is a warm and appealing intimate space specializing in Edomae Style Sushi.',
        url: 'https://thesushilegend.com/wp-content/uploads/2020/06/IMG_1999.jpg',
        michelin_awardWinning: false,
        location: newYork[0].id,
      },
      {
        name: 'Sushi by Bou',
        price: '$$',
        address: '32A East 32nd Street, New York, NY 10016',
        description: 'A high-end omakase served with time options(30min and 60min) with affordable prices.',
        url: 'https://10619-2.s.cdn12.com/rests/original/506_502715214.jpg',
        michelin_awardWinning: false,
        location: newYork[0].id,
      },
   {
      name: 'Sukiyabashi Jiro',
      price: '$$$$',
      address: '6-12-2 Roppongi, Minato-ku, Tokyo, 106-0032, Japan',
      description: 'Relaxed, narrow choice with sushi bar seating for offerings from acclaimed chef Jiro Ono.',
      url: 'https://external-preview.redd.it/2bK2NJbEJSiBmW8baCciKbJfEso9d6W_UmXQRKxCblc.jpg?width=960&crop=smart&auto=webp&s=14320a5a1c12bd262f683e7bd119ea32f38d7ca3',
      michelin_awardWinning: true,
      location: tokyo[0].id
    },
    {
      name: 'Higashiazabu Amamoto',
      price: '$$$$',
      address: '1 Chome-7-9 Higashiazabu, Minato City, Tokyo 106-0044, Japan',
      description: 'His aim is to take Edomae sushi to its next stage,he carries on the spirit of his mentor who said, “Masamichi, have courage”',
      url: 'http://tabemonojourney.com/wp-content/uploads/hm_bbpui/3386/4hg2aq1f735deaa50emdw7hk8aujv4lp.jpeg',
      michelin_awardWinning: true,
      location: tokyo[0].id
    },
    {
        name: 'Sushi Enrike',
        price: '$$$$',
        address: '1-chome-8-7 Ginza Chuo City Tokyo',
        description: 'Owned by a famous celebrity number one hostess as known as Eri Ogawa, she opened a brand new sushi business in Ginza in 2021',
        url: 'https://ximg.retty.me/resize/s600x600/-/retty/img_repo/l/01/27225610.jpg',
        michelin_awardWinning: false,
        location: tokyo[0].id
      },
      {
        name: 'Sushi Saito',
        price: '$$$$',
        address: '1st Floor, Ark Hills South Tower, 1-4-5 Roppongi, Minato-ku, Tokyo',
        description: 'Previous three Michelin stars restaurant until it chose to stop accepting public reservations. Impossible to get a reservation at Sushi Saito unless you are a regular patron or a VIP.',
        url: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2018/11/05121707-review-saito03_cover_2000x1200.jpg',
        michelin_awardWinning: true,
        location: tokyo[0].id
      },
    {
        name: 'Kojima',
        price: '$$$$',
        address: '6F Boon the Shop, 21 Apgujeong-ro 60-gil, Gangnam-gu, SEOUL, South Korea',
        description: 'Prepared from ingredients that change daily, the sushi has an unadorned and fine taste',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/f871f6fc-ea67-41e5-a4f7-9a7b24ab94d3.jpg?width=1000',
        michelin_awardWinning: true,
        location: seoul[0].id
      },
      {
        name: 'Mitou',
        price: '$$$$',
        address: '2F, 17 Nonhyeon-ro 151-gil, Gangnam-gu, SEOUL, South Korea',
        description: 'The omakase menu at Mitou changes on a monthly basis as they showcase some of the best local ingredients at the height of their freshness.',
        url: 'https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/5ddcf89a-983c-4c16-a72d-45607c3ef87a.jpg?width=1000',
        michelin_awardWinning: true,
        location: seoul[0].id
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




