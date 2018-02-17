const mongoose = require('mongoose');
const TokenSchema = require('./models/token');
const EventSchema = require('./models/event');

const DB_CREDENTIALS = require('../env/key.js').mongo_creds;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb succesfully connected!'));

mongoose.Promise = global.Promise;
mongoose.connect(DB_CREDENTIALS);

module.exports = {
  mongoose,
  db
};