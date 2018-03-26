import express from 'express';
import { setGlobalMiddleware, uniEventListener, swtEventListener, createListeners } from './middleware';
import { graphQLRouter } from './api';
import { graphiqlExpress } from 'apollo-server-express';
import { connect } from './db';
import cors from 'cors';

const app = express();

setGlobalMiddleware(app);
connect();
createListeners();


app.use('/graphql', cors(), graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

app.all("*", (req, res) => {
  res.json({ok: true})
})

export default app;