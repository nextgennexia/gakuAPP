// Libraries
import React from 'react';
//Components
import Menu from '../menu/Menu.jsx';
//Locals
import { japanese_syllabary } from '../../../locals/ru.json';
//Style
import '../../../css/views/syllabary/SelectSyllabary.scss';

export default React.createClass({
  render: function () {
    return (
      <div className='syllabary'>
        <Menu menu={japanese_syllabary} addStyle='plate' />
      </div>
    );
  }
});
