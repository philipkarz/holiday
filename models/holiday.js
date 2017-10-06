const
  mongoose = require('mongoose')
  holidaySchema = new mongoose.Schema({
      name: String,
      date: Date,
      religious: Boolean
  })

module.exports = mongoose.model('Holiday', holidaySchema)