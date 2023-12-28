// contactDetailsSchema.js

const mongoose = require('mongoose');

const contactDetailsSchema = new mongoose.Schema({
  newEmail: { type: String, required: true },
  newPhoneNumber: { type: String, required: true },
});

const ContactDetails = mongoose.model('ContactDetails', contactDetailsSchema);

module.exports = ContactDetails;
