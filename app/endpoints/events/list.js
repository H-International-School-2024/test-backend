import mongoose from 'mongoose';

const middleware = async (req, res) => {
  const Event = mongoose.model('Event');

  const events = await Event.find({ 
    date: { $gte: new Date() }
  });

  const result = events.map((event) => ({
    id: event.id,
    name : event.name,
    desription: event.description,
    date: event.date
  }));

  res.send(result);
};

export default middleware;