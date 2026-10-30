import mongoose, { Schema, type Model, type SchemaDefinition } from "mongoose";

/** Attribution fields stored with every submission. */
export const trackingFields: SchemaDefinition = {
  source: { type: String, default: "unknown", maxlength: 40, index: true },
  utm_source: { type: String, maxlength: 100 },
  utm_medium: { type: String, maxlength: 100 },
  utm_campaign: { type: String, maxlength: 100 },
  pagePath: { type: String, maxlength: 200 },
};

export function makeSchema(fields: SchemaDefinition, statuses: readonly string[]) {
  const schema = new Schema(
    { ...fields, ...trackingFields, status: { type: String, enum: statuses, default: statuses[0], index: true } },
    { timestamps: true },
  );
  schema.index({ createdAt: -1 });
  return schema;
}


/**
 * Register a model, replacing any cached copy in development. Without this, Next.js hot reload keeps the
 * first-registered schema alive and Mongoose silently drops fields added or renamed since.
 */
export function registerModel(name: string, schema: Schema): Model<unknown> {
  if (process.env.NODE_ENV !== "production" && mongoose.models[name]) mongoose.deleteModel(name);
  return mongoose.models[name] ?? mongoose.model(name, schema);
}
