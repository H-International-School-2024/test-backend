import express from 'express';
import cors from 'cors';

import userEndpoints from '../app/endpoints/users/index.js';
import eventEndpoints from '../app/endpoints/events/index.js';

let i = 0;

const init = async () => {
  const app = express();
  
  app.use(cors());
  app.use(express.json())
  
  userEndpoints(app);
  eventEndpoints(app);

  return app;
};

export default init;