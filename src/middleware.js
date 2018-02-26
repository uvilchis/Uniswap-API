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
    var ethInMarket = await listeners.getUniMarketEth()
    var tokensInMarket = await listeners.getMarketUniTokens()
    var invariant = await listeners.getUniInvariant()
    
    let ethValueOfTokenCalculation = () => {
      let ethIn = 1*10**18;
      let fee = ethIn/500;
      let marketEth = +ethInMarket
      let marketTokens = +tokensInMarket
      let invar = +invariant
      let newEthInMarket = marketEth + ethIn - fee;
      let newTokensInMarket = invar/newEthInMarket;
      let tokensOut = marketTokens - newTokensInMarket;
      
      let tokensForEth = tokensOut/ethIn;
      
      return JSON.stringify(ethIn/tokensOut)
    }
    
    let ethValueOfToken = ethValueOfTokenCalculation()
  
    post.postToEvents("UNI", ethInMarket, tokensInMarket, invariant, ethValueOfToken)

  }, 15000)
}


export const swtEventListener = () => {
  setInterval(async() => {
    var ethInMarket = await listeners.getSwtMarketEth()
    var tokensInMarket = await listeners.getMarketSwtTokens()
    var invariant = await listeners.getSwtInvariant()
    
    let ethValueOfTokenCalculation = () => {
      let ethIn = 1*10**18;
      let fee = ethIn/500;
      let marketEth = +ethInMarket
      let marketTokens = +tokensInMarket
      let invar = +invariant
      let newEthInMarket = marketEth + ethIn - fee;
      let newTokensInMarket = invar/newEthInMarket;
      let tokensOut = marketTokens - newTokensInMarket;
      
      let tokensForEth = tokensOut/ethIn;
      
      return JSON.stringify(ethIn/tokensOut)
    }
    
    let ethValueOfToken = ethValueOfTokenCalculation()
  
    post.postToEvents("SWT", ethInMarket, tokensInMarket, invariant, ethValueOfToken)

  }, 15000)
}



