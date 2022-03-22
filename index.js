import expressInitializer from './initializers/express.js';
import mongooseInitializer from './initializers/mongoose.js';

const port = 4000;

await mongooseInitializer();
const app = await expressInitializer();

app.listen(port, () => {
  console.log('Backend started');
});
