import bcrypt from 'bcrypt';

import User from '../models/user';

const login = async (req, res, next) => {
  try {
    const findUserByEmail = await User.findOne({ email: req.body.email });
    if (findUserByEmail) {
      const comparePasswordHash = await comparePassword(req.body.password, findUserByEmail.password);
      if(comparePasswordHash){
        res.status(200).send(findUserByEmail);
      }else{
        res.status(401).send({error: 'Wrong Password'});
      }
    } else {
      res.status(401).send({error: 'Wrong Email'});
    }
  } catch (error) {
    next();
  }
};

const comparePassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result ? true : false;
};

const register = async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body);
    res.status(200).send(createdUser);
  } catch (error) {
    next();
  }
};


export { login, register, comparePassword };

