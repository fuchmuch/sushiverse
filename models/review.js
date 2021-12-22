const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    name: { type: String, required: true },
    comments: {type: String, required: true},
    ratings: {type: Number, required: true},
    place: {type: Schema.Types.ObjectId, ref: 'places'},
  
  },
  { timestamps: true }
)

module.exports = mongoose.model('reviews', Review)