import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../js/views/auth/Login.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../css/App.scss'

injectTapEventPlugin();

export default React.createClass({
  render: function () {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <div　className='header'>
            <Link className='gaku-logo' to='/'>学APP</Link>
            <Link to='/auth'>学APP</Link>
            <Login />
          </div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
});
