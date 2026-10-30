import { Schema } from "mongoose";
import { registerModel } from "./_shared";

export const NEWSLETTER_STATUSES = ["subscribed", "unsubscribed"] as const;

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    source: { type: String, default: "unknown", maxlength: 40 },
    status: { type: String, enum: NEWSLETTER_STATUSES, default: "subscribed" },
  },
  { timestamps: true },
);

export const Newsletter = registerModel("Newsletter", schema);
