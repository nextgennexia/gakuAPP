// Libraries
import React from 'react';
//Store
import AppActions from '../actions/AppActions';
//Components
import ChooseModule from '../mixins/ChooseModule.jsx';
import FontIcon from 'material-ui/FontIcon';
//Locals
import { main_menu } from '../../locals/ru.json';
//Style
import '../../css/views/MainMenu.scss';

export default React.createClass({
  mixins: [ChooseModule],
  componentWillMount: function() {
    AppActions.enterMainPage();
  },
  componentWillUnmount: function() {
    AppActions.leaveMainPage();
  },
  render: function() {
    let _this = this;

    return (
      <div className='main-menu'>
        {
          main_menu.map(function(el){
            return (
              <ul className='menu-group' key={el.id} onClick={_this.chooseModule.bind(null, el.module)}>
                <FontIcon className='material-icons icon'>{el.icon}</FontIcon>
                <li className='menu-item'>
                  <ruby className='sub-item'>
                    <rt>{el.furigana}</rt>
                  </ruby>
                  <div className='sub-item'>{el.kanji}</div>
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
