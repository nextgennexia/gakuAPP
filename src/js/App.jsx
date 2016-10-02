// Libraries
import React from 'react';
//Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//Views
import Header from './views/Header.jsx';
//Style
import '../css/App.scss'

injectTapEventPlugin();

export default React.createClass({
  render: function () {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <Header />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
});
