// Libraries
import React from 'react';
//Actions
import PopupActions from '../../actions/PopupActions';
//Style
import '../../../css/views/syllabary/SymbolColumn.scss';

export default React.createClass({
  openSymbolInfo: function(symbol) {
    PopupActions.openSymbolInfo(symbol);
  },
  render: function() {
    let _this = this;

    return (
      <ul>
        {
          this.props.data.map(function(symbol, idx) {
            return (
              <li key={idx} className='symbol' onClick={symbol.symbol && _this.openSymbolInfo.bind(null, symbol)}>
                <span>{symbol.symbol}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
});
