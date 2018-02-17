const mongoose = require('mongoose');
// import the schemas here when they have been created


const DB_CREDENTIALS = require('../env/key.js').mongo_creds;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb succesfully connected!'));

mongoose.Promise = global.Promise;
mongoose.connect(DB_CREDENTIALS);

module.exports = {
  mongoose,
  db
}

