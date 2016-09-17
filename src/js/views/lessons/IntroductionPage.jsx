import React from 'react';
import ToggleButton from '../../components/ToggleButton.jsx';
import Input from '../../components/Input.jsx';

export default React.createClass({
  render: function () {
    return (
      <div className='introduction-page'>
        <h1>学APP</h1>
        <Input placeholder='ka->カ' />
        <ToggleButton className='small' />
      </div>
    );
  }
});
