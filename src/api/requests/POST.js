import axios from 'axios';

export const addEvent = `mutation addEvent($input:NewEvent!){
  addEvent(input:$input){
    symbol
    ethInMarket
    tokensInMarket   
    invariant     
    ethValueOfToken
  }
}`;

export const postToEvents = (symbol, ethInMarket, tokensInMarket, invariant, ethValueOfToken) => {
  let variables = {
    symbol: symbol,
    ethInMarket: ethInMarket,
    tokensInMarket: tokensInMarket,
    invariant: invariant,
    ethValueOfToken: ethValueOfToken
  }

  axios.post('http://localhost:3000/graphql', {
    data: JSON.stringify({addEvent, variables})
  }).then(res => console.log('it works!', res))
  .catch(err => console.log('BIG ERROR', err))
}

