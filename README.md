# Uniswap-API
Powered by Node.JS, MongoDB and GraphQL
- See the front end here! https://uniswap.io/

# What is it?
A horizontally scalable database and API, where information about multiple ERC20 token exchange smart contracts can be securely written to and retrieved from. 

# How does it work?
- A server fires requests to the Ethereum blockchain every 15 seconds for information about ERC20 tokens 
- Upon this request's completion, the information is written to the Mongo Database via GraphQL 
- This token parameter data is retrieved for visualization purposes on the front end

# To-Dos 
- Deploy the server 
- Change up the CORS headers to only accept post requests from the deployed address 
- Set up HTTPS
- Incorporate a function that truncates data every 24 hours to free up space in the database and increase its lifespan
