import mongoose from 'mongoose';


// token name or token ID? 
const eventSchema = new mongoose.Schema({
    tokenName: String, 
    ethInMarket: Number,
    tokensInMarket: Number,
    invariant: Number, 
    ethValueOfToken: Number
}, { timestamps: true })

// events will need to be 
// added (uniquely)
// retrieve - all events retrieved by token 

export const Event = mongoose.model('event', eventSchema);