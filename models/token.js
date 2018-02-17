const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  tokenAdress : {
    type: String,
    unique: true,
    required: [true, 'Token must have an etheruem address']
  },
  
  symbol: {
    type: String,
    unique: true,
    required: [true, 'Token must have a name']
  }
});

// TODO: write the methods that allow something to be added 
// TODO: write the route that decides what token gets added 
// those routes for sure are going to need graphQL

mongoose.model('Token', tokenSchema);