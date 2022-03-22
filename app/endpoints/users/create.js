import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const middleware = async (req, res) => {
  const User = mongoose.model('User');

  const foundUser = await User.findOne({ email: req.body.email });

  if (foundUser != null) {
    res.sendStatus(409);
  }
  else {
    await User.create({
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
    });
    res.send('CREATE!');
  }
};

export default middleware;