const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  ethInMarket: Number,
  tokensInMarket: Number,
  invariant: Number, 
  ethValueOfToken: Number
}, { timestamps: true })

mongoose.model('Event', eventSchema);