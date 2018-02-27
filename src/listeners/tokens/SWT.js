import Web3 from 'web3'
import { exchangeABI } from '../config'

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/IgthRICCevGRA4S3cS2p"));
const swtExchangeAddress = '0x4632a7Cd732c625dcc48d75E289c209422e1D2B7';
const swtExchangeContract = new web3.eth.Contract(exchangeABI, swtExchangeAddress);

export const swtDecimals = 10**18;

export const getSwtInvariant = () => {
 return swtExchangeContract.methods.invariant().call().then((result, error) => {
    console.log(result, 'invariant')
    return result;
  }).catch(err => console.log(err))
}

export const getSwtMarketEth = () => {
  return swtExchangeContract.methods.ethInMarket().call().then((result, error) => {
    console.log(result, 'marketEth')
    return result;
  }).catch(err => console.log(err))
}

export const getMarketSwtTokens = () => {
  return swtExchangeContract.methods.tokensInMarket().call().then((result, error) => {
    console.log(result, 'marketTokens')
    return result;
  }).catch(err => console.log(err))
}

