// Libraries
import React from 'react';
import { Link, hashHistory } from 'react-router';
import StateMixin from 'reflux-state-mixin';
//Store
import AppStore from '../stores/AppStore';
//Components
import IconButton from 'material-ui/IconButton';
//Style
import '../../css/views/Header.scss';

export default React.createClass({
  mixins: [StateMixin.connect(AppStore)],
  renderBackButton: function() {
    if (!this.state.hasMainPage) {
      return <IconButton className='arrow-back'
                         iconClassName='material-icons'
                         onClick={hashHistory.goBack}>arrow_back</IconButton>
    }
  },
  render: function () {
    return (
      <header　className='header'>
        {this.renderBackButton()}
        <Link className='gaku-logo' to='/'>学APP </Link>
        <IconButton className='menu' iconClassName='material-icons'>menu</IconButton>
      </header>
    );
  }
});
