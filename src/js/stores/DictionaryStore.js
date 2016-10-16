//Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import Actions from '../actions/DictionaryActions';
//Database
import HiraganaDictionary from '../../db/hiraganaDictionary.json';
import KatakanaDictionary from '../../db/katakanaDictionary.json';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  getInitialState: function() {
    return {
      dictionary: HiraganaDictionary,
      label: 'あ',
    }
  },
  onChangeDictionary: function() {
    if (this.state.dictionary == HiraganaDictionary) {
      this.setState({
        dictionary: KatakanaDictionary,
        label: 'ア'
      });
    } else {
      this.setState({
        dictionary: HiraganaDictionary,
        label: 'あ'
      });
    }
    this.trigger(this.state.dictionary, this.state.label);
  }
});
