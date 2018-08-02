import jwt from 'jwt-simple';
import moment from 'moment';

import {JWT_TOKEN_SECRET} from '../config';

export default function generateToken(user){
  let payload = {
    sub: user,
    iat: moment().unix(),
    exp: moment().add(1, 'month').unix()
  };
  return jwt.encode(payload, JWT_TOKEN_SECRET);
}
