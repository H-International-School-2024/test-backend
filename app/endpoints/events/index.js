import listMiddleware from './list.js';
import createMiddleware from './create.js';

import authenticationMiddleware from '../../utils/authentication.js';

const registerMiddlewares = (app) => {
  app.get('/events', listMiddleware);
  app.post('/events', authenticationMiddleware, createMiddleware);
};

export default registerMiddlewares;