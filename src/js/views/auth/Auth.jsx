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
      password = this.refs.password.input.value,
      firstName = this.refs.firstName.input.value,
      lastName = this.refs.lastName.input.value;

    Actions.createUser(login, password, firstName, lastName);
  },
  render: function () {
    return (
      <div className='auth'>
        <TextField hintText='Логин' ref='login' />
        <TextField hintText='Пароль' ref='password' />
        <TextField hintText='Имя' ref='firstName' />
        <TextField hintText='Фамилия' ref='lastName' />
        <RaisedButton label="Зарегистрироваться" onClick={this.onLogin} />
      </div>
    );
  }
});