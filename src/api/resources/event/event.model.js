import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    symbol: String, 
    ethPool: String,
    tokenPool: String,
    invariant: String, 
    ethValueOfToken: String
}, { timestamps: true, unique: true })

export const Event = mongoose.model('event', eventSchema);
