import { makeExecutableSchema } from 'graphql-tools';
import { tokenType, tokenResolvers } from './resources/token';
import { eventType, eventResolvers } from './resources/event';
import { graphqlExpress } from 'apollo-server-express';
import merge from 'lodash.merge'

const baseSchema = `
schema {
  query: Query
  mutation: Mutation
}
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    tokenType,
    eventType
  ],
  resolvers: merge (
    {},
    tokenResolvers,
    eventResolvers
  )
})

export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))