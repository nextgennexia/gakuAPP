// Libraries
import React from 'react';
//Views
import Login from './Login.jsx';
//Style
import '../../../css/views/auth/Auth.scss';

export default React.createClass({
  render: function () {
    return (
      <div className='auth'>
        <Login/>
      </div>
    );
  }
});