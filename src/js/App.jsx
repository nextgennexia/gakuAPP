import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../css/App.scss'

injectTapEventPlugin();

export default React.createClass({
  render: function () {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    );
  }
});
