const middleware = async (req, res) => {
  console.log(req.headers);
  res.send({
    email: 'email of the user logged in',
  });
};

export default middleware;