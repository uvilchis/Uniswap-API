import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    ethInMarket: Number,
    tokensInMarket: Number,
    invariant: Number, 
    ethValueOfToken: Number
}, { timestamps: true })

export const Event = mongoose.model('event', eventSchema);