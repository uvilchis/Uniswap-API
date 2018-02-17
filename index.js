const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const mongoDb = require('./db/mongo.js').db;
const bodyParser = require('body-parser');
const router = require('./router').router;
const app = express();

app.use(bodyParser.json());

// we keep the mongoose connection information in an external file for modularity's sake
// hypothesis: the mongo session is here so users don't have to constantly reconnect to mongo every time they come back to the site
// ^^^ a potentially expensive and inefficient way to go about things 

app.use(session({
    secret: 'i am only just learning how this works',
    store: new MongoStore({ mongooseConnection: mongoDb }),
    resave: false,
    saveUninitialized: false
}));

app.use('/', router);

app.listen(3000, () => console.log('listening on port 3000'));