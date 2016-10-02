// Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import VerifyActions from '../actions/VerifyActions';
//Database
import Users from '../../db/Users.json';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: VerifyActions,
  getInitialState: function() {
    return {
      verified: {
        message: '',
        isRight: ''
      }
    };
  },
  onVerifyResult: function(userAnswer, rightAnswer, moduleName, subModuleName) {
    if (userAnswer.trim() === rightAnswer) {
      Users[0].modules[moduleName][subModuleName].push({
        key: rightAnswer,
        value: true
      });
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
  }
});
