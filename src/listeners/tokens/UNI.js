import Web3 from 'web3'
import { exchangeABI } from '../config'

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/IgthRICCevGRA4S3cS2p"));
const uniExchangeAddress = '0xcDc30C3b02c5776495298198377D2Fc0fd6B1F1C';
const uniExchangeContract = new web3.eth.Contract(exchangeABI, uniExchangeAddress);

// attempt -> we put these function calls into a function that gets exported 
// we import that function into the server and see if it gets called appropriately 

export const getInvariant = () => {
 return uniExchangeContract.methods.invariant().call().then((result, error) => {
    console.log(result, 'invariant')
    return result;
  }).catch(err => console.log(err))
}

export const getMarketEth = () => {
  return uniExchangeContract.methods.ethInMarket().call().then((result, error) => {
    console.log(result, 'marketEth')
    return result;
  }).catch(err => console.log(err))
}

export const getMarketTokens = () => {
  return uniExchangeContract.methods.tokensInMarket().call().then((result, error) => {
    console.log(result, 'marketTokens')
    return result;
  }).catch(err => console.log(err))
}

