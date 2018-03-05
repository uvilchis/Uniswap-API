import Web3 from 'web3'
import { exchangeABI } from '../config'

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/IgthRICCevGRA4S3cS2p"));
const uniExchangeAddress = '0xcDc30C3b02c5776495298198377D2Fc0fd6B1F1C';
const uniExchangeContract = new web3.eth.Contract(exchangeABI, uniExchangeAddress);

export const uniDecimals = 10**18

export const getUniInvariant = () => {
 return uniExchangeContract.methods.invariant().call().then((result, error) => {
    return result;
  }).catch(err => console.log(err))
}

export const getUniMarketEth = () => {
  return uniExchangeContract.methods.ethInMarket().call().then((result, error) => {
    return result;
  }).catch(err => console.log(err))
}

export const getUniMarketTokens = () => {
  return uniExchangeContract.methods.tokensInMarket().call().then((result, error) => {
   return result;
  }).catch(err => console.log(err))
}

