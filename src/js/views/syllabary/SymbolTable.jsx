// Libraries
import React from 'react';
//Views
import SymbolColumn from './SymbolColumn.jsx';

export default React.createClass({
  render: function() {
    let syllabary = this.props.syllabary;

    return (
      <div>
        <div className='syllabary-name'>
          <span>{this.props.syllabaryTitle}</span>
        </div>
        <ul className='clearfix'>
          {
            syllabary.map(function(column, idx) {
              return (
                <li key={idx} className={`symbol-column count-${syllabary.length}`}>
                  <SymbolColumn data={column.column} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});
