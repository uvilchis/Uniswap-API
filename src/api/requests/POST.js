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
  
<<<<<<< HEAD
  axios.post('https://ec2-34-193-175-237.compute-1.amazonaws.com:4000/graphql', {
=======
  axios.post('http://ec2-34-193-175-237.compute-1.amazonaws.com:3000/graphql', {
>>>>>>> 9fe39e384e8e4d87331e1c407f7d6fcd7e6efd1c
    query: query,
    variables: variables
  }).then((res) => console.log(res.data, 'post confirmed'))
  .catch(err => console.log(err.data, 'ERROR '))

}

