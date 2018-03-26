export { contractAndMethodCreator } from './contractsAndMethods';

export const getTokenCost = (tokenDecimals, ethPool, tokenPool, invariant) => {
    let ethInDecimals = 0.01;
    let ethInWei = ethInDecimals*10**18;
    let fee = ethInWei/500;
    let newEthPool = +ethPool + ethInWei - fee;
    let newTokenPool = +invariant/newEthPool;
    let tokensOut = +tokenPool - newTokenPool;
    let tokensOutDecimals = tokensOut/tokenDecimals;
    return JSON.stringify(tokensOutDecimals/ethInDecimals)
}

