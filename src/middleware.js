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
    let uniDecimals = 10**18;
    let ethInMarket = await listeners.getUniMarketEth();
    let tokensInMarket = await listeners.getMarketUniTokens();
    let invariant = await listeners.getUniInvariant();
    let ethValueOfToken = listeners.getTokenCost(uniDecimals);
    post.postToEvents("UNI", ethInMarket, tokensInMarket, invariant, ethValueOfToken)
  }, 15000)
}

export const swtEventListener = () => {
  setInterval(async() => {
    let swtDecimals = 10**18;
    let ethInMarket = await listeners.getSwtMarketEth();
    let tokensInMarket = await listeners.getMarketSwtTokens();
    let invariant = await listeners.getSwtInvariant();  
    let ethValueOfToken = listeners.getTokenCost(swtDecimals)
    post.postToEvents("SWT", ethInMarket, tokensInMarket, invariant, ethValueOfToken)
  }, 15000)
}



