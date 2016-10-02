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
import FlatButton from 'material-ui/FlatButton';
//Style
import '../../../css/views/auth/Login.scss';

export default React.createClass({
  mixins: [StateMixin.connect(UsersStore)],
  onLogin: function() {
    let
      login = this.refs.login.input.value,
      password = this.refs.password.input.value

    AuthActions.loginUser(login, password);
  },
  render: function () {
    return (
      <div className='login'>
        <div className='login-info'>Войдите под своей учетной записью, чтобы сохранить пройденный материал!</div>
        <div className='login-control'>
          <div className='wrapper'>
            <TextField className='text-field' floatingLabelText="Логин" ref='login' />
            <TextField className='text-field' floatingLabelText='Пароль' ref='password' />
            <span className='reset-password'>Забыли пароль?</span>
            <div className='button'>
              <RaisedButton label="Войти" primary={true} onClick={this.onLogin} />
            </div>
            <div className='button'>
              <FlatButton label='Регистрация' href='#/signup' />
            </div>
          </div>
        </div>
      </div>
    );
  }
});