import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  }
});

const register = () => {
  mongoose.model('Event', eventSchema);
}

export default register;