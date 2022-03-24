import mongoose from 'mongoose';

const middleware = async (req, res) => {
  const Event = mongoose.model('Event');
  const { user, body } = req;

  const {
    name,
    description,
    date,
  } = body;
  if (name != null && description != null && date != null) {
    const convertedDate = new Date(date);
    const event = await Event.create({
      name: name,
      description: description,
      date: convertedDate,
      owner: user.id,
    });

    res.send({
      id: event.id.toString(),
      name: event.name,
      description: event.description,
      date: event.date,
    });
  }
  else {
    res.sendStatus(409);
  }
};

export default middleware;