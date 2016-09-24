import mongoose from "mongoose";

import config from '../../config/config.json';

import '../models/Notes';
import '../models/Users';

const Note = mongoose.model('Note');
const User = mongoose.model('User');

export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
  return Note.find();
}

export function createNote(data) {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createdAt: new Date()
  });

  return note.save();
}

export function deleteNote(id) {
  return Note.findById(id).remove();
}

export function listUsers(id) {
  return User.find();
}

export function createUser(data) {
  const user = new User({
    nickName: data.nickName,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    createdAt: new Date()
  });

  return user.save();
}