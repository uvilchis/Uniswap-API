import Web3 from 'web3';
// new exchangeABI for new tokens 
import { exchangeABI } from '../exchangeABI';
import { symbolsAndAddresses } from './symbolsAndAddresses';
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/IgthRICCevGRA4S3cS2p"));

export const contractAndMethodCreator = () => {
  let contractsAndMethods = {};
  for (let i = 0; i < symbolsAndAddresses.length; i++) {
    let symbol = symbolsAndAddresses[i][0];
    let exchangeAddress = symbolsAndAddresses[i][1];
    let exchangeContract = new web3.eth.Contract(exchangeABI, exchangeAddress);
    
    let getInvariant = () => {
      return exchangeContract.methods.invariant().call().then((result, error) => {
        return result;
      }).catch(err => console.log(err))
    }
    
    let getEthPool = () => {
      return exchangeContract.methods.ethPool().call().then((result, error) => {
        return result;
      }).catch(err => console.log(err))
    }
  
    let getTokenPool = () => {
      return exchangeContract.methods.tokenPool().call().then((result, error) => {
        return result;
      }).catch(err => console.log(err))
    }
    
    contractsAndMethods[symbol] = { exchangeContract, getInvariant, getEthPool, getTokenPool };

  }

  return contractsAndMethods;
}
// the above function creates an object of this structure 
// we then pass this structure into middleware.js, where we create a chunk of functions to be fired in tandem, then the interval for which they'll be fired
/*
contractsAndMethods { BAT:
   { exchangeContract:
      Contract {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        BatchRequest: [Function: bound Batch],
        extend: [Function],
        clearSubscriptions: [Function],
        options: [Object],
        defaultAccount: [Getter/Setter],
        defaultBlock: [Getter/Setter],
        methods: [Object],
        events: [Object],
        _address: '0x80f5C1beA2Ea4a9C21E4c6D7831ae2Dbce45674d',
        _jsonInterface: [Array] },
     getInvariant: [Function: getInvariant],
     getEthPool: [Function: getEthPool],
     getTokenPool: [Function: getTokenPool] },
  DAI:
   { exchangeContract:
      Contract {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        BatchRequest: [Function: bound Batch],
        extend: [Function],
        clearSubscriptions: [Function],
        options: [Object],
        defaultAccount: [Getter/Setter],
        defaultBlock: [Getter/Setter],
        methods: [Object],
        events: [Object],
        _address: '0x9eb0461bcc20229bE61319372cCA84d782823FCb',
        _jsonInterface: [Array] },
     getInvariant: [Function: getInvariant],
     getEthPool: [Function: getEthPool],
     getTokenPool: [Function: getTokenPool] },
  MKR:
   { exchangeContract:
      Contract {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        BatchRequest: [Function: bound Batch],
        extend: [Function],
        clearSubscriptions: [Function],
        options: [Object],
        defaultAccount: [Getter/Setter],
        defaultBlock: [Getter/Setter],
        methods: [Object],
        events: [Object],
        _address: '0x4c86a3B3cf926De3644f60658071CA604949609f',
        _jsonInterface: [Array] },
     getInvariant: [Function: getInvariant],
     getEthPool: [Function: getEthPool],
     getTokenPool: [Function: getTokenPool] },
  OMG:
   { exchangeContract:
      Contract {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        BatchRequest: [Function: bound Batch],
        extend: [Function],
        clearSubscriptions: [Function],
        options: [Object],
        defaultAccount: [Getter/Setter],
        defaultBlock: [Getter/Setter],
        methods: [Object],
        events: [Object],
        _address: '0x1033f09e293200de63AF16041e83000aFBBfF5c0',
        _jsonInterface: [Array] },
     getInvariant: [Function: getInvariant],
     getEthPool: [Function: getEthPool],
     getTokenPool: [Function: getTokenPool] },
  ZRX:
   { exchangeContract:
      Contract {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        BatchRequest: [Function: bound Batch],
        extend: [Function],
        clearSubscriptions: [Function],
        options: [Object],
        defaultAccount: [Getter/Setter],
        defaultBlock: [Getter/Setter],
        methods: [Object],
        events: [Object],
        _address: '0x42E109452F4055c82a513A527690F2D73251367e',
        _jsonInterface: [Array] },
     getInvariant: [Function: getInvariant],
     getEthPool: [Function: getEthPool],
     getTokenPool: [Function: getTokenPool] } }
*/

// now you want to create a listener for each of the keys in this object 