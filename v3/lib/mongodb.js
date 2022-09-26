// create mongoose connection
import mongoose from 'mongoose';

const mongo_uri = process.env.MONGODB_URI;

if (!mongo_uri) {
  throw new Error('You must provide a MongoLab URI');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDb;