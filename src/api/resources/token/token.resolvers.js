import { Token } from './token.model'

const addToken = (__, {input}) => {
  return Token.create(input)
}

const getToken = (__, {input}) => {
  return Token.findOne({ 'symbol': input })
}

// Would you ever need to remove tokens outside of testing environments?
const removeToken = (__, {symbol}) => {
  return Token.findOneAndRemove({"symbol": symbol}).exec()
}

export const tokenResolvers = {
  Query: {
   Token: getToken
  },
  Mutation: {
    addToken,
    removeToken
  }
}