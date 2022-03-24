import mongoose from 'mongoose';
import userSchemaRegister from '../app/models/user.js';

const connectionString = 'mongodb+srv://password:username@firstprojectcluster.iwkq8.mongodb.net/event-database?retryWrites=true&w=majority';

const init = async () => {
  await mongoose.connect(connectionString);
  userSchemaRegister();
};

export default init;
