import * as Mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let database: Mongoose.Connection;
export const connect = () => {
  if (database) {
    return;
  }
  Mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};

export const disconnect = () => {
  if (!database) {
    console.log('Database was not connected. Disconnecting nothing.');
    return;
  }

  console.log('Disonnected to database');
  Mongoose.disconnect();
};
