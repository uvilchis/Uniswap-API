import http from 'http'
import https from 'https'
import fs from 'fs';
// import { execute, subscribe } from 'graphql'
import { createServer } from 'http'

import app from './server'
// import schema from './schema'
const options = {
  key: fs.readFileSync('./src/env/privkey.pem'),
  cert: fs.readFileSync('./src/env/fullchain.pem')
}

// const secureServer = https.createServer(options, app)
const server = http.createServer(app)
let currentApp = app

// secureServer.listen(4000, () => {
//   console.log('Secure server listening on port 4000')
// })

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp)
	server.on('request', app)
	currentApp = app
  })
}

/* 
The current workflow for this project is as follows 
a) Two MongoDB Models (/Resources/event.model & token.model)
- one for adding a new token, the other for adding events 
- Mongo's query functions are written around the structure of these models 

b) Resolvers (/Resources/event.resolvers & token.resolvers)
- fire upon a GraphQL query
- change how info is pulled from DB in these functions 

c) GraphQL Models (/Resources/event.graphql & token.graphql)
- as similar as possible in structure to mongo model
- type: defines the initial query structure 
- input: same structure as type, this is how graphQL will expect inputs for this type
- NOTE: Exclamation points mean that field is REQUIRED. Will throw errors if not provided
- extend type Query and extend type Mutation are extending the baseSchema in /Resources/graphQLRouter


d) GraphQL Router 
- Is where the GraphQL Models and Resolvers are compiled together by graphql-tools makeExecutableSchema
- tokenType and eventType are both the GraphQL Models 
- Query and Mutation are native to GraphQL
- ^^^ their use is instantiated here and extended by the models you create 

Everything above is scalable - the functions are token/event agnostic and will continue to work as more are added 
The listeners however, are a different story 
e) /Listeners/Tokens 
- functions are being written for every token 
- UNI has its own function set, SWT has its own set 
- these functions all do the same thing - the only thing that changes are the token and exchange addresses 
- presumably, you'd write one of these for each new token added - not a scalable solution 
- this is not a scalable solution 

THE WAY IT WORKS NOW 
- we create a new file in listeners/tokens/TOKENSYMBOL
- these functions are imported into middleware.js 
- ANOTHER function is created, which fires a set of functions in order 
- then manually writes the symbol for this token at the function's end 
- these functions are separately imported into server.js and individually invoked 


THE MISSION
- write a function factory of sorts 
- takes an array of arrays structured like so => ['symbol', 'address']
- create the functions for each of those arrays, then run them

TO ADD NEW OFFICIALLY SUPPORTED TOKENS 
- /listeners/tokens/symbolsAndAddresses
- 0th index = symbol, 1st index = exchangeAddress 
*/