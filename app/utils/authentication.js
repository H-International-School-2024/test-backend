import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const authenticationMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization != null) {
    const splitted = authorization.split(' ');

    const authorizationPart = splitted[1];
    const buffer = Buffer.from(authorizationPart, 'base64');
    const realAuthorizationHeader = buffer.toString();
    const [email, password] = realAuthorizationHeader.split(':');
    const User = mongoose.model('User');

    const user = await User.findOne({ email: email });
    if (user != null) {
      if (bcryptjs.compareSync(password, user.password)) {
        req.user = user;
        next();
      }
      else {
        res.sendStatus(401);
      }
    }
    else {
      res.sendStatus(401);
    }
  }
  else {
    res.sendStatus(401);
  }
};

export default authenticationMiddleware;