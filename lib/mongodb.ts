import mongoose from "mongoose";

type Cache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
const g = globalThis as unknown as { _mongoose?: Cache };
const cache: Cache = (g._mongoose ??= { conn: null, promise: null });

export class DbNotConfiguredError extends Error {}

export function isDbConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

export async function connectDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not configured. Add it to .env.local and restart the server.");
    throw new DbNotConfiguredError("MONGODB_URI is not configured");
  }
  if (cache.conn) return cache.conn;
  console.log("Connecting to MongoDB");
  cache.promise ??= mongoose.connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 5000 });
  try {
    cache.conn = await cache.promise;
  } catch (e) {
    cache.promise = null;
    throw e;
  }
  return cache.conn;
}

export function dbState() {
  return ["disconnected", "connected", "connecting", "disconnecting"][mongoose.connection.readyState] ?? "unknown";
}
