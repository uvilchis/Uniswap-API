import axios from 'axios';

export const query = `mutation addEvent($input:NewEvent!){
  addEvent(input:$input){
    symbol
    ethInMarket
    tokensInMarket   
    invariant     
    ethValueOfToken
  }
}`;

export const postToEvents = (symbol, ethInMarket, tokensInMarket, invariant, ethValueOfToken) => {
  let variables = JSON.stringify({input: {
    symbol: symbol,
    ethInMarket: ethInMarket,
    tokensInMarket: tokensInMarket,
    invariant: invariant,
    ethValueOfToken: ethValueOfToken
  }});
  
  axios.post('http://localhost:3000/graphql', {
    query: query,
    variables: variables
  }).then((res) => console.log(res.data, 'post confirmed'))
  .catch(err => console.log(err.data, 'ERROR '))

}

