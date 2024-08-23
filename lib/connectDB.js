import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://indproinbd:Indian2000Products@indianproducts.x7vdz.mongodb.net/indianproducts?retryWrites=true&w=majority&appName=IndianProducts";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => console.log("db connected"))
      .catch((e) => console.log("ERROR IN DB CONNECTION", e));
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
