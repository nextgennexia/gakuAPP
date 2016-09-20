import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from '../actions/Actions';
import WordsLesson1 from '../../db/lessons/lesson1/words.json';
import sss from '../../db/hiraganaDictionary.json';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  getInitialState: function() {
    return {
      data: ''
    }
  },
  onChooseLesson: function (lesson) {
    switch(lesson){
      case 1:
        this.setState({data: WordsLesson1});
        break;
      default:
        this.setState({data: WordsLesson1});
        break;
    }
    this.trigger(this.state.data);
  }
});
