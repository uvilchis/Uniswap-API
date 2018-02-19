//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import env from './env/key';
mongoose.Promise = global.Promise;

export const connect = (config = env) => {
  return mongoose.connect(config.db.url)
}