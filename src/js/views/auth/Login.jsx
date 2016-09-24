import React from 'react';
import StateMixin from 'reflux-state-mixin';
import Actions from '../../../js/actions/Actions';
import UsersStore from '../../../js/stores/UsersStore';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
  mixins: [StateMixin.connect(UsersStore)],
  onLogin: function() {
    let
      login = this.refs.login.input.value,
      password = this.refs.password.input.value

    Actions.loginUser(login, password);
  },
  render: function () {
    return (
      <div className='login'>
        <TextField hintText='Логин' ref='login' />
        <TextField hintText='Пароль' ref='password' />
        <RaisedButton label="Войти" onClick={this.onLogin} />
      </div>
    );
  }
});