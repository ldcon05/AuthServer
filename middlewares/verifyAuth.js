import jwt from 'jwt-simple';
import moment from 'moment';

import { JWT_TOKEN_SECRET } from '../config';

export default function isAuth(req,res,next) {
  if(!req.headers.authorization){
    return res.status(403).send({message: 'You are not authorized'});
  }

  const payload = jwt.decode(req.headers.authorization, JWT_TOKEN_SECRET);

  if (payload.exp <= moment().unix()){
    return res.status(401).send({message: 'Token deprecated'});
  }

  next();
}
