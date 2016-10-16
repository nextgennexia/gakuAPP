// Libraries
import React from 'react';
//Components
import Menu from '../menu/Menu.jsx';
//Locals
import { practice } from '../../../locals/ru.json';
//Style
import '../../../css/views/practice/Practice.scss';

export default React.createClass({
  render: function () {
    return (
      <div className='practice'>
        <Menu menu={practice} addStyle='rows' />
      </div>
    );
  }
});
