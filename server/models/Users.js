import crypto from 'crypto';
import mongoose from "mongoose";

const
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    nickName       : { type: String, unique: true, required: true },
    hashedPassword : { type: String, required: true },
    salt           : { type: String, required: true },
    firstName      : { type: String },
    lastName       : { type: String },
    createdAt      : { type: Date, default: Date.now }
  });

UserSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

UserSchema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._plainPassword;
  });

UserSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

mongoose.model('User', UserSchema);