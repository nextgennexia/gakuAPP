import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LogIn from './views/LogIn.jsx';
import '../css/App.scss'

injectTapEventPlugin();

export default React.createClass({
  render: function () {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <div className='header'>
            <Link className='gaku-logo' to='/'>学APP</Link>
            <LogIn />
          </div>
          <div className='navbar'>

          </div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
});
