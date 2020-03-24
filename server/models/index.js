import mongoose from 'mongoose';

import User from './user';

mongoose.set('useCreateIndex', true);


const connectDb = () => {
  if (process.env.TEST_DATABASE_URL) {
    return mongoose.connect(process.env.TEST_DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }

  if (process.env.DATABASE_URL) {
    return mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }
};

const models = { User };

export { connectDb };

export default models;
