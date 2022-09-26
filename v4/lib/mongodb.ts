import mongoose from "mongoose";

const mongo_uri = process.env.MONGODB_URI;

const globalAny:any = global; 

if (!mongo_uri) {
  throw new Error('You must provide a MongoLab URI');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached: globalType = globalAny.mongoose;

type globalType = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose>;
}

if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null };
}

/**
 * Creates a connection to the database 
 * and returns the connection info
 */

async function connectToDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongo_uri, {}).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDb;
