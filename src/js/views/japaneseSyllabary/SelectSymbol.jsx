// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Views
import ColumnSymbol from './ColumnSymbol.jsx';
import SymbolInfo from './SymbolInfo.jsx';
//Store
import SyllabaryStore from '../../stores/SyllabaryStore';
//Lesson
import HiraganaSyllabary from '../../../db/lessons/syllabary/hiraganaSyllabary.json';
import KatakanaSyllabary from '../../../db/lessons/syllabary/KatakanaSyllabary.json';
//Style
import '../../../css/views/japaneseSyllabary/SelectSymbol.scss';

export default React.createClass({
  mixins: [StateMixin.connect(SyllabaryStore)],
  componentWillMount: function() {
    this.props.syllabary === 'hiragana'
      ? this.setState({syllabary: HiraganaSyllabary})
      : this.setState({syllabary: KatakanaSyllabary})
  },
  getInitialState: function() {
    return ({
      syllabary: []
    });
  },
  render: function() {
    return (
      <div className={`${Object.keys(this.state.initialSymbol).length ? 'of-h' : ''} select-symbol`}>
        <ul className='symbol-table'>
          {
            this.state.syllabary.map(function(column) {
              return (
                <li key={column.id} className='symbol-column'>
                  <ColumnSymbol data={column.column} />
                </li>
              );
            })
          }
        </ul>
        <SymbolInfo syllabary={this.props.syllabary} />
      </div>
    );
  }
});
