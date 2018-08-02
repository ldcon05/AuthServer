import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routerApi from './routes/userRoutes';
import requestErrorMiddleware from './middlewares/requestError';
import authMiddleware from './middlewares/verifyAuth';

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routerApi);
app.use(authMiddleware);

app.get('/', (req, res) => res.status(200).send({message: 'Home'}));
app.use(requestErrorMiddleware);

export default app;
