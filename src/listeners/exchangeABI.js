export const exchangeABI = 
[{"anonymous":false,"inputs":[{"indexed":true,"name":"liquidityProvider","type":"address"},{"indexed":true,"name":"sharesBurned","type":"uint256"}],"name":"Divestment","type":"event"},{"constant":false,"inputs":[],"name":"addFeesToMarketPublic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sharesBurned","type":"uint256"},{"name":"_minEth","type":"uint256"},{"name":"_minTokens","type":"uint256"}],"name":"divestLiquidity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minTokens","type":"uint256"},{"name":"_timeout","type":"uint256"},{"name":"_recipient","type":"address"}],"name":"ethToTokenPayment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_minTokens","type":"uint256"},{"name":"_timeout","type":"uint256"}],"name":"ethToTokenSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAmount","type":"uint256"}],"name":"initializeExchange","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_minShares","type":"uint256"}],"name":"investLiquidity","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"ethIn","type":"uint256"},{"indexed":true,"name":"tokensOut","type":"uint256"}],"name":"EthToTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"liquidityProvider","type":"address"},{"indexed":true,"name":"sharesPurchased","type":"uint256"}],"name":"Investment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"tokensIn","type":"uint256"},{"indexed":true,"name":"ethOut","type":"uint256"}],"name":"TokenToEthPurchase","type":"event"},{"constant":false,"inputs":[{"name":"_tokenAmount","type":"uint256"},{"name":"_minEth","type":"uint256"},{"name":"_timeout","type":"uint256"},{"name":"_recipient","type":"address"}],"name":"tokenToEthPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAmount","type":"uint256"},{"name":"_minEth","type":"uint256"},{"name":"_timeout","type":"uint256"}],"name":"tokenToEthSwap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_minTokens","type":"uint256"}],"name":"tokenToTokenIn","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenPurchased","type":"address"},{"name":"_recipient","type":"address"},{"name":"_tokensSold","type":"uint256"},{"name":"_minTokensReceived","type":"uint256"},{"name":"_timeout","type":"uint256"}],"name":"tokenToTokenPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenPurchased","type":"address"},{"name":"_tokensSold","type":"uint256"},{"name":"_minTokensReceived","type":"uint256"},{"name":"_timeout","type":"uint256"}],"name":"tokenToTokenSwap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"ethFees","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ethPool","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factoryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FEE_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_provider","type":"address"}],"name":"getShares","outputs":[{"name":"_shares","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"invariant","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenFees","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenPool","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
