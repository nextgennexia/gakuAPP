// Libraries
import React from 'react';
//Store
import AppActions from '../actions/AppActions';
//Components
import Menu from './menu/Menu.jsx';
//Locals
import { main_menu } from '../../locals/ru.json';
//Style
import '../../css/views/HomePage.scss';

export default React.createClass({
  componentWillMount: function() {
    AppActions.enterMainPage();
  },
  componentWillUnmount: function() {
    AppActions.leaveMainPage();
  },
  render: function() {
    return (
      <div className='home-page'>
        <Menu menu={main_menu} addStyle='plate' />
      </div>
    );
  }
});
