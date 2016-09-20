import React from 'react';
import '../../css/views/GetStarted.scss';

export default React.createClass({
  getInitialState: function() {
    return {
      lesson: 1
    }
  },
  render: function () {
    return (
      <div className='get-started'>
        <div>New Words</div>
        <div>New Words: Practice</div>
        <div>Dialog Models</div>
        <div>Dialog: Practice</div>
      </div>
    );
  }
});
