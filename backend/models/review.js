const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    name: { type: String, required: true },
    comments: {type: String, required: true},
    ratings: {type: Number, required: true},
    place_id: {type: Schema.Types.ObjectId, ref: 'places'},
    location_id: {type: Schema.Types.ObjectId, ref: 'locations'}
  },
  { timestamps: true }
)

module.exports = mongoose.model('reviews', Review)