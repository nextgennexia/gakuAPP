import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from '../actions/Actions';
import api from '../../api/index';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  onLoginUser: function(login, password) {
    api.listUsers().then((data) => {
      let users = data.data;
    });
  },
  onCreateUser: function (login, password, firstName, lastName) {
    api.createUser({
      nickName: login,
      password: password,
      firstName: firstName,
      lastName: lastName
    }).then(() => {
      this.onLoginUser(login, password);
    });
  }
});
