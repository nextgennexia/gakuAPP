import React from 'react';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../css/App.scss'

injectTapEventPlugin();

const App = React.createClass({
  render: function () {
    return (
      <div className='App'>
        {this.props.children}
      </div>
    );
  }
});

export default App;