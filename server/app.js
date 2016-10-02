import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';

import config from '../config/config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();
const MongoStore = connectMongo(session);

// Set up connection of database
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

// Using bodyParser middleware
app.use(bodyParser.json());

// Using cookieParser middleware
app.use(cookieParser());

app.use(session({
  secret: config.session.secret,
  key: config.session.key,
  cookie: config.session.cookie,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/notes', (req, res) => {
  db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
  db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
  db.deleteNote(req.params.id).then(data => res.send(data));
});

app.post('/users', (req, res) => {
  if (req.body.getUser) {
     db.getUser(req.body.auth, req, res);
  }
  if (req.createUser) {
    db.createUser(req.body.auth).then(data => res.send(data));
  }
});

const server = app.listen(config.serverPort, function() {
  console.log(`Server is up and running on port ${config.serverPort}`);
});