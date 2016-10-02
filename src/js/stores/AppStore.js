// Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Store
import AppActions from '../actions/AppActions';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: AppActions,
  getInitialState: function() {
    return {hasMainPage: false}
  },
  onEnterMainPage: function() {
    this.setState({hasMainPage: true});
  },
  onLeaveMainPage: function() {
    this.setState({hasMainPage: false});
  }
});
