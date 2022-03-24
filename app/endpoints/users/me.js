const middleware = async (req, res) => {
  res.send({
    email: req.user.email,
  });
};

export default middleware;