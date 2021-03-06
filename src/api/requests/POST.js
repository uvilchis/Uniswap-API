import axios from 'axios';

export const query = `mutation addEvent($input:NewEvent!){
  addEvent(input:$input){
    symbol
    ethPool
    tokenPool   
    invariant     
    ethValueOfToken
  }
}`;

export const postToEvents = (symbol, ethPool, tokenPool, invariant, ethValueOfToken) => {
  let variables = JSON.stringify({input: {
    symbol: symbol,
    ethPool: ethPool,
    tokenPool: tokenPool,
    invariant: invariant,
    ethValueOfToken: ethValueOfToken
  }});
  
  axios.post('http://ec2-34-197-169-170.compute-1.amazonaws.com:3000/graphql', {
    query: query,
    variables: variables
  }).then((res) => console.log(res.data, 'post confirmed'))
  .catch(err => console.log(err.data, 'ERROR '))

}

