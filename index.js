import app from './app';
import {port, db} from './config';
import mongoose from 'mongoose';

const connection = mongoose.connect(db, { useNewUrlParser: true });

if (connection) {
  app.listen(port, ()=> {
    console.log(`Conexión establecida con exito ${ port }`);
  });
}
