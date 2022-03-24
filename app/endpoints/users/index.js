import createMiddleware from './create.js';
import meMiddleware from './me.js';

import authenticationMiddleware from '../../utils/authentication.js';

const registerMiddlewares = (app) => {
  app.get('/users/me', authenticationMiddleware, meMiddleware);
  app.post('/users', createMiddleware);
};

export default registerMiddlewares;