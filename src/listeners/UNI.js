import Web3 from 'web3'
import { exchangeABI, uniExchangeAddress } from './config'

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/IgthRICCevGRA4S3cS2p"));
const uniExchangeContract = new web3.eth.Contract(exchangeABI, uniExchangeAddress);

let ethInMarket = 0; 
let tokensInMarket = 0; 
let invariant = 0;
let tokenCost  = 0;

// attempt -> we put these function calls into a function that gets exported 
// we import that function into the server and see if it gets called appropriately 

export const getInvariant = () => {
  uniExchangeContract.methods.invariant().call().then((result, error) => {
    invariant = result;
    console.log('invariant:' + invariant);
  });
}

export const getMarketEth = () => {
  uniExchangeContract.methods.ethInMarket().call().then((result, error) => {
    ethInMarket = result;
    console.log('ethInMarket:' + ethInMarket)
  });
}

export const getMarketTokens = () => {
  uniExchangeContract.methods.tokensInMarket().call().then((result, error) => {
    tokensInMarket = result;
    console.log('tokensInMarket:' + tokensInMarket)
  });
}

export const getTokenCost = () => {
  let ethIn = 1*10**18;
  let fee = ethIn/500;
  let marketEth = +ethInMarket
  let marketTokens = +tokensInMarket
  let invar = +invariant
  let newEthInMarket = marketEth + ethIn - fee;
  let newTokensInMarket = invar/newEthInMarket;
  let tokensOut = marketTokens - newTokensInMarket;
  tokenCost = tokensOut/ethIn;
}

export const uniListener = () => {
  getInvariant();
  getMarketEth();
  getMarketTokens();
  getTokenCost();
    
  setInterval(() => {
    getInvariant();
    getMarketEth();
    getMarketTokens();
    getTokenCost();
    console.log('Cost: ' + tokenCost + ' UNI/ETH');
  }, 15000);
}