// Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import PracticeActions from '../actions/PracticeActions';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: PracticeActions,
  getInitialState: function() {
    return {
      currentNumber: 0,
      hasFocus: false
    };
  },
  onNextQuestion: function() {
    this.setState({
      currentNumber: this.state.currentNumber + 1
    });
  }
});
