import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nickName   : { type: String },
  password   : { type: String, required: true },
  firstName  : { type: String },
  lastName   : { type: String },
  createdAt  : { type: Date }
});

mongoose.model('User', UserSchema);