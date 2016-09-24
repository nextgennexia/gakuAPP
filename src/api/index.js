import axios from 'axios';

import { apiPrefix } from '../../config/config.json';

export default {
  listNotes() {
    return axios.get(`${apiPrefix}/notes`);
  },

  createNote(data) {
    return axios.post(`${apiPrefix}/notes`, data);
  },

  deleteNote(noteId) {
    return axios.delete(`${apiPrefix}/notes/${noteId}`);
  },
  listUsers() {
    return axios.get(`${apiPrefix}/users`);
  },
  createUser(data) {
    return axios.post(`${apiPrefix}/users`, data);
  },
}