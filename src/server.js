import express from 'express';
import setupMiddleware from './middleware';
import { graphQLRouter } from './api';
import { graphiqlExpress } from 'apollo-server-express';
import { connect } from './db';
import * as listeners from './listeners'

const app = express();

setupMiddleware(app);
connect();
listeners.uniListener();

app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

app.all("*", (req, res) => {
  res.json({ok: true})
})

export default app;