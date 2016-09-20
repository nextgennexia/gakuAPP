import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from '../actions/Actions';
import UserData from '../../db/userData.json';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  getInitialState: function() {
    return {
      nickname: '',
      currentUser: ''
    }
  },
  onLogin: function (nickname) {
    let $this = this;

    UserData.forEach(function (el) {
      el.nickname == nickname && $this.setState({currentUser: el});
    });

    this.trigger(this.state.currentUser);
  }
});
