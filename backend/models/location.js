const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Location = new Schema(
  {
    city: { type: String, required: true },
    country: {type: String, required: true},
    url: { type: String, required: true } ,

  },
  { timestamps: true }
)

module.exports = mongoose.model('locations', Location)