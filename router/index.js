const router = require('express').Router();

// GENERAL STRUCTURE 
// router.get('/coinName', model.method)
// first argument: the route to be queried, second argument: the function to be fired 
router.get('/', () => console.log('hello world!') )

module.exports = {
  router
};