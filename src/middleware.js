import bodyParser from 'body-parser'
import express from 'express'
import * as post from './api/requests'
import * as listeners from './listeners'

export const setGlobalMiddleware = (app) => {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
}

// we create the object holding the token contracts and functions
const contractsAndMethods = listeners.contractAndMethodCreator();
// then we loop over the object and set an interval for the functions to fire and write to the database
export const createListeners = () => {
  for (let symbol in contractsAndMethods) {
    let token = contractsAndMethods[symbol];
    setInterval(async() => {
      let decimals = 10**18;
      let ethPool = await token.getEthPool();
      let tokenPool = await token.getTokenPool();
      let invariant = await token.getInvariant();
      let ethValueOfToken = listeners.getTokenCost(decimals, ethPool, tokenPool, invariant);
      post.postToEvents(symbol, ethPool, tokenPool, invariant, ethValueOfToken);
    }, 30000);
  }
}