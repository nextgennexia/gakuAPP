import React from 'react';
import ToggleButton from '../../components/ToggleButton.jsx';
import Input from '../../components/InputTranslator.jsx';
import RaisedButton from '../../components/RaisedButton.jsx';

export default React.createClass({
  render: function () {
    return (
      <div className='introduction-page'>
        <h1>学APP</h1>
        <Input placeholder='ka->カ' />
        <ToggleButton className='small' />
        <RaisedButton label='Приступить!' to='/new-words' />
      </div>
    );
  }
});
