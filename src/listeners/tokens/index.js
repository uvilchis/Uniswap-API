export { contractAndMethodCreator } from './contractsAndMethods';

export const getTokenCost = (tokenDecimals, ethInMarket, tokensInMarket, invariant) => {
    let ethInDecimals = 0.01;
    let ethInWei = ethInDecimals*10**18;
    let fee = ethInWei/500;
    let newEthInMarket = +ethInMarket + ethInWei - fee;
    let newTokensInMarket = +invariant/newEthInMarket;
    let tokensOut = +tokensInMarket - newTokensInMarket;
    let tokensOutDecimals = tokensOut/tokenDecimals;
    return JSON.stringify(tokensOutDecimals/ethInDecimals)
}