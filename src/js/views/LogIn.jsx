import React from 'react';
import StateMixin from 'reflux-state-mixin';
import LoginStore from '../../js/stores/LoginStore.jsx';
import Actions from '../actions/Actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../../css/views/LogIn.scss';

export default React.createClass({
  mixins: [StateMixin.connect(LoginStore)],
  onChange: function(event) {
    this.setState({
      nickname: event.target.value
    });
  },
  Login: function() {
    Actions.login(this.state.nickname);
  },
  render: function () {
    return (
      <div className='login'>
        {
          this.state.currentUser
            ? <div>
                <span>{this.state.currentUser.firstName}</span>
                <span>{this.state.currentUser.surname}</span>
              </div>
            : <div>
                <TextField hintText='login' onChange={this.onChange} />
                <RaisedButton label='LogIn' onClick={this.Login} />
              </div>
        }
      </div>
    );
  }
});
