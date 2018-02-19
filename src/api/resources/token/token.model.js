import mongoose from 'mongoose';

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

export const Token = mongoose.model('token', tokenSchema);