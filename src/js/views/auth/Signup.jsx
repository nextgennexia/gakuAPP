// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Actions
import AuthActions from '../../../js/actions/AuthActions';
//Store
import UsersStore from '../../../js/stores/UsersStore';
//Components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//Style
import '../../../css/views/auth/Signup.scss';

export default React.createClass({
  mixins: [StateMixin.connect(UsersStore)],
  onLogin: function() {
    let
      login = this.refs.login.input.value,
      password = this.refs.password.input.value,
      firstName = this.refs.firstName.input.value,
      lastName = this.refs.lastName.input.value;

    AuthActions.createUser(login, password, firstName, lastName);
  },
  render: function () {
    return (
      <div className='auth'>
        <div className='signup'>
          <div className='signup-info'>Войдите под своей учетной записью, чтобы сохранить пройденный материал!</div>
          <div className='signup-control'>
            <div className='wrapper'>
              <TextField className='text-field' floatingLabelText='Логин' ref='login' />
              <TextField className='text-field' floatingLabelText='Пароль' ref='password' />
              <TextField className='text-field' floatingLabelText='Имя' ref='firstName' />
              <TextField className='text-field' floatingLabelText='Фамилия' ref='lastName' />
              <div className='button'>
                <RaisedButton label='Зарегистрироваться' primary={true} onClick={this.onLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});