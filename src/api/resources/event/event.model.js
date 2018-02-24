import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    symbol: String, 
    ethInMarket: String,
    tokensInMarket: String,
    invariant: String, 
    ethValueOfToken: String
}, { timestamps: true })

export const Event = mongoose.model('event', eventSchema);


  