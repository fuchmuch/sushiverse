const mongoose = require('mongoose')
const LocationSchema = require('./location')
const PlaceScheme = require('./place');
const ReviewSchema = require('./review')

const Location = mongoose.model('locations', LocationSchema)
const Place = mongoose.model('places', PlaceSchema)
const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Location,
  Place,
  Review,
}