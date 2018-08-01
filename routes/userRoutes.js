import {Router} from 'express';

import { login, register } from '../controllers/userController';

const app = Router();

app.use('login', login);
app.use('register', register);


export default app;

