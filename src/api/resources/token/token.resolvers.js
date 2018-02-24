import { Token } from './token.model'
import merge from 'lodash.merge'

const addToken = (__, {input}) => {
  return Token.create(input)
}

const getToken = (__, {input}) => {
  return Token.findOne({ 'symbol': input })
}

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