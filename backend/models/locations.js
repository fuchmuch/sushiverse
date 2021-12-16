const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Location = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: {type: String, required: true},
    // age_requirement: {type: Boolean, required: true},
  },
  { timestamps: true }
)

module.exports = mongoose.model('locations', Location)