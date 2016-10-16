// Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import VerifyActions from '../actions/VerifyActions';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: VerifyActions,
  getInitialState: function() {
    return {
      verified: {
        message: '',
        isRight: false
      }
    };
  },
  onVerifyResult: function(userAnswer, rightAnswer) {
    if (userAnswer.toLowerCase() === rightAnswer) {
      this.setState({
        verified: {
          message: '',
          isRight: true
        }
      });
    } else {
      this.setState({
        verified: {
          message: 'Вы ошиблись',
          isRight: false
        }
      });
    }
    this.trigger(this.state.verified);
  },
  onClear: function() {
    this.setState({
      verified: {
        message: '',
        isRight: false
      }
    });
  }
});
