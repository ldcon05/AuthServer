import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import {bcryptSaltRounds} from '../config';
import generateToken from '../helpers/auth';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  authorization: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) {
  bcrypt
    .hash(this.password, bcryptSaltRounds)
    .then(hash => {
      this.password = hash;
      this.authorization = generateToken(this.email);
      next();
    })
    .catch(next);
});

export default mongoose.model('User', userSchema);
