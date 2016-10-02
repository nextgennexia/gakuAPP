// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Actions
import PopupActions from '../../actions/PopupActions';
//Store
import SyllabaryStore from '../../stores/SyllabaryStore';
//Style
import '../../../css/views/japaneseSyllabary/ColumnSymbol.scss';

export default React.createClass({
  mixins: [StateMixin.connect(SyllabaryStore)],
  openSymbolInfo: function(symbol) {
    PopupActions.openSymbolInfo(symbol);
  },
  render: function() {
    let _this = this;

    return (
      <ul>
        {
          this.props.data.map(function(symbol) {
            return (
              <li
                key={symbol.id}
                className='symbol'
                onClick={_this.openSymbolInfo.bind(null, symbol)}
              >
                <span>{symbol.symbol}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
});
