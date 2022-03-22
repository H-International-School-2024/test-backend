import createMiddleware from './create.js';
import meMiddleware from './me.js';

const registerMiddlewares = (app) => {
  app.get('/users/me', meMiddleware);
  app.post('/users', createMiddleware);
};

export default registerMiddlewares;