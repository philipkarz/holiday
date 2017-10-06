const
  mongoose = require('mongoose')
  holidaySchema = new mongoose.Schema({
      name: {type: String, required: true},
      date: {type: Date, required: true},
      religious: {type: Boolean}
  })

  
module.exports = mongoose.model('Holiday', holidaySchema)