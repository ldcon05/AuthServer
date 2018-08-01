import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routerApi from './routes/userRoutes';
import requestError from './middlewares/requestError';

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors());

app.use('api/', routerApi);

app.use(requestError);

export default app;
