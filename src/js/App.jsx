import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../css/App.scss'

injectTapEventPlugin();

export default React.createClass({
  render: function () {
    return (
      <div className='app'>
        <div　className='header'>
          <Link className='gaku-logo' to='/'>学APP</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
});
