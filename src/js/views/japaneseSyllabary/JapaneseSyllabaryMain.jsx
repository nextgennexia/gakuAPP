// Libraries
import React from 'react';
//Components
import ChooseModule from '../../mixins/ChooseModule.jsx';
//Locals
import { japanese_syllabary } from '../../../locals/ru.json';
//Style
import '../../../css/views/japaneseSyllabary/JapaneseSyllabaryMain.scss';

export default React.createClass({
  mixins: [ChooseModule],
  render: function () {
    let _this = this;

    return (
      <div className='japanese-syllabary'>
        {
          japanese_syllabary.map(function(el){
            return (
              <ul className='menu-group' key={el.id} onClick={_this.chooseModule.bind(null, el.module)}>
                <li className='menu-item'>
                  <div className='sub-item'>{el.kana}</div>
                  <div className='sub-item'>{el.local_lang}</div>
                </li>
              </ul>
            );
          })
        }
      </div>
    );
  }
});
