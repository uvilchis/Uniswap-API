import { makeExecutableSchema } from 'graphql-tools';
import { tokenType } from './resources/token';
import { eventType } from './resources/event';
import { graphqlExpress } from 'apollo-server-express';

const baseSchema = `
schema {
  query: Query
}
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    tokenType,
    eventType
  ]
})

export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))