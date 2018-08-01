import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', (req, res) => {
  res.status(200).send('Hello World');
});

export default app;
