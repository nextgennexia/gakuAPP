//Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import Actions from '../actions/Actions';
//Database
import HiraganaDictionary from '../../db/hiraganaDictionary.json';
import KatakanaDictionary from '../../db/katakanaDictionary.json';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  getInitialState: function() {
    return {dictionary: HiraganaDictionary}
  },
  onChangeDictionary: function() {
    if (this.state.dictionary == HiraganaDictionary) {
      this.setState({dictionary: KatakanaDictionary});
    } else {
      this.setState({dictionary: HiraganaDictionary});
    }
    this.trigger(this.state.dictionary);
  }
});
