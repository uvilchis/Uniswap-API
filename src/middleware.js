import bodyParser from 'body-parser'
import express from 'express'
import * as post from './api/requests'
import * as listeners from './listeners'

export const setGlobalMiddleware = (app) => {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
}

export const uniEventListener = () => {
  setInterval(async() => {
    let uniDecimals = listeners.uniDecimals;
    let ethInMarket = await listeners.getUniMarketEth();
    let tokensInMarket = await listeners.getUniMarketTokens();
    let invariant = await listeners.getUniInvariant();
    let ethValueOfToken = listeners.getTokenCost(uniDecimals, ethInMarket, tokensInMarket, invariant);
    post.postToEvents("UNI", ethInMarket, tokensInMarket, invariant, ethValueOfToken);
  }, 15000)
}

export const swtEventListener = () => {
  setInterval(async() => {
    let swtDecimals = listeners.swtDecimals;
    let ethInMarket = await listeners.getSwtMarketEth();
    let tokensInMarket = await listeners.getSwtMarketTokens();
    let invariant = await listeners.getSwtInvariant();  
    let ethValueOfToken = listeners.getTokenCost(swtDecimals, ethInMarket, tokensInMarket, invariant);
    post.postToEvents("SWT", ethInMarket, tokensInMarket, invariant, ethValueOfToken);
  }, 15000)
}

// not a scalable solution
// as more tokens get added, the chance of an event being added at exactly the 15 second mark decreases 
// need to revisit this and come up with a better solution for ensuring data is written to database at exactly the 15 second timestamp 

export const startEventListeners = () => {
  let hasHit0thSecond = false;
   let secondChecker = setInterval (()=> {
      let currentSecond = new Date().getSeconds();
      console.log(hasHit0thSecond, currentSecond)
      if (currentSecond === 0) {
        uniEventListener();
        swtEventListener();
        hasHit0thSecond = true;
      }
      if (hasHit0thSecond) {
        clearInterval(secondChecker);
        console.log('listeners starting');
      }
    }, 100)
}


