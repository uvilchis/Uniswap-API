import bodyParser from 'body-parser'
import express from 'express'
import * as post from './api/requests'
import * as listeners from './listeners'

export const setGlobalMiddleware = (app) => {
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
}

export const uniEventListener = () => {
  setInterval(async() => {
    var ethInMarket = await listeners.getUniMarketEth();
    var tokensInMarket = await listeners.getMarketUniTokens();
    var invariant = await listeners.getUniInvariant();
    var uniDecimals = 10**18;

   let getTokenCost = (tokenDecimals) => {
     let ethInDecimals = 0.01;
     let ethInWei = ethInDecimals*10**18;
     let fee = ethInWei/500;
     let newEthInMarket = +ethInMarket + ethInWei - fee;
     let newTokensInMarket = +invariant/newEthInMarket;
     let tokensOut = +tokensInMarket - newTokensInMarket;
     let tokensOutDecimals = tokensOut/tokenDecimals;

     return JSON.stringify(tokensOutDecimals/ethInDecimals)
   }
    
    let ethValueOfToken = getTokenCost(uniDecimals);
  
    post.postToEvents("UNI", ethInMarket, tokensInMarket, invariant, ethValueOfToken)

  }, 15000)
}


export const swtEventListener = () => {
  setInterval(async() => {
    var ethInMarket = await listeners.getSwtMarketEth();
    var tokensInMarket = await listeners.getMarketSwtTokens();
    var invariant = await listeners.getSwtInvariant();
    var swtDecimals = 10**18;
    
    let getTokenCost = (tokenDecimals) => {
      let ethInDecimals = 0.01;
      let ethInWei = ethInDecimals*10**18;
      let fee = ethInWei/500;
      let newEthInMarket = +ethInMarket + ethInWei - fee;
      let newTokensInMarket = +invariant/newEthInMarket;
      let tokensOut = +tokensInMarket - newTokensInMarket;
      let tokensOutDecimals = tokensOut/tokenDecimals;
 
      return JSON.stringify(tokensOutDecimals/ethInDecimals)
    }
    
    let ethValueOfToken = getTokenCost(swtDecimals)
  
    post.postToEvents("SWT", ethInMarket, tokensInMarket, invariant, ethValueOfToken)

  }, 15000)
}



