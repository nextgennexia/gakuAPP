//Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import AuthActions from '../actions/AuthActions';
//Components
import api from '../../api/index';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: AuthActions,
  onLoginUser: function(login, password) {
    api.getUser({
      auth: {
        login: login,
        password: password,
      },
      getUser: true}).then((data) => {
        let user = data.data;
    });
  },
  onCreateUser: function (login, password, firstName, lastName) {
    api.createUser({
      auth: {
        nickName: login,
        password: password,
        firstName: firstName,
        lastName: lastName
      },
      createUser: true
    }).then(() => {
      this.onLoginUser(login, password);
    });
  }
});
