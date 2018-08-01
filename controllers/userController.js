import User from '../models/user';

const login = async (req, res, next) => {
  try {
    const loginUser = await User.findOne({ email: req.body.email, password: req.body.password });
    res.status(200).send(loginUser);
  } catch (error) {
    next();
  }
};

const register = async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body);
    res.status.send(createdUser);
  } catch (error) {
    next();
  }
};

export { login, register };

