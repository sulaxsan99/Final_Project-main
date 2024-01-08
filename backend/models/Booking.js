const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    // unique:true,
  },
  user: {
    type:String,
    // ref: 'User',  // Reference to the User model
    required: true
  },
  filename:{
    type:String,
  },
  image: {
    type: String,  // Binary data for the image
    contentType: String  // Mime type of the image
  }
});

// Check if the model is already compiled before compiling it
module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
