import mongoose from "mongoose";

import '../models/Notes';
import '../models/Users';

const Note = mongoose.model('Note');
const User = mongoose.model('User');

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

export function getUser(data, req, res) {
  User.findOne({nickName: data.login}, function(err, user){
    var result = {user: user};

    if (err) {
      result.errors = {serverError: err};
      res.send(result);
    }
    if (user) {
      if (user.checkPassword(data.password)) {
        req.session.user = user._id;
        console.log(user._id);
        res.send(result);
      } else {
        result.errors = {incorrectPassword: true};
        res.send(result);
      }
    } else {
      result.errors = {notFoundUser: true};
      res.send(result);
    }
  });

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