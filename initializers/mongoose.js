import mongoose from 'mongoose';
import userSchemaRegister from '../app/models/user.js';
import eventSchemaRegister from '../app/models/event.js';

const connectionString = 'mongodb+srv://password:username@firstprojectcluster.iwkq8.mongodb.net/event-database?retryWrites=true&w=majority';

const init = async () => {
  await mongoose.connect(connectionString);
  userSchemaRegister();
  eventSchemaRegister();
};

export default init;
