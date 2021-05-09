import mongoose, { Schema, model } from "mongoose";

const contractSchema = new Schema({
  term: String,
  dateCreated: Date,
});

const userSchema = new Schema({
  name: String,
  birth: String,
  ip: String,
  dateAccepted: Date,
  forWho: String,
  otherName: String,
  otherBirth: String,
  contract: String,
});

//@ts-ignore
mongoose.models = {};

export const Contract = model("Contract", contractSchema);
export const User = model("User", userSchema);
