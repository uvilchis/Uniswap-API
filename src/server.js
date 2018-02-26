import express from 'express';
import { setGlobalMiddleware, uniEventListener } from './middleware';
import { graphQLRouter } from './api';
import { graphiqlExpress } from 'apollo-server-express';
import { connect } from './db';

const app = express();

setGlobalMiddleware(app);
connect();
uniEventListener();

app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

app.all("*", (req, res) => {
  res.json({ok: true})
})

export default app;