// Libraries
import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
//Actions
import PopupActions from '../actions/PopupActions';

export default Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: PopupActions,
  getInitialState: function() {
    return {
      symbolsList: [],
      initialSymbol: {},
      currentSymbol: {}
    };
  },
  onOpenSymbolInfo: function(symbol) {
    this.setState({
      symbolsList: symbol.more_symbols,
      initialSymbol: symbol,
      currentSymbol: symbol
    });
  },
  onCloseSymbolInfo: function() {
    this.setState({
      symbolsList: [],
      initialSymbol: {},
      currentSymbol: {}
    });
  }
});
