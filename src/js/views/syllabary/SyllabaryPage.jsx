// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Views
import SymbolInfo from './SymbolInfo.jsx';
import SymbolTable from './SymbolTable.jsx';
//Store
import SyllabaryStore from '../../stores/SyllabaryStore';
//Lesson
import HiraganaSyllabary from '../../../db/lessons/syllabary/hiraganaSyllabary.json';
import KatakanaSyllabary from '../../../db/lessons/syllabary/KatakanaSyllabary.json';
//Style
import '../../../css/views/syllabary/SymbolTable.scss';

export default React.createClass({
  mixins: [StateMixin.connect(SyllabaryStore)],
  syllabaryName: '',
  currentPart: {},
  currentSyllabary: {},
  render: function() {
    let
      syllabaryName,
      currentSyllabary = {},
      syllabaryProps = {},
      symbolProps = {
        syllabary: syllabaryProps.syllabary,
        initialSymbol: this.state.initialSymbol || '',
        currentSymbol: this.currentSymbol || ''
      };

    if (this.props.syllabary === 'hiragana') {
      currentSyllabary = HiraganaSyllabary;
      syllabaryName = 'Хирагана';
    } else {
      currentSyllabary = KatakanaSyllabary;
      syllabaryName = 'Катакана';
    }

    switch (this.props.module) {
      case 'gojuon':
        syllabaryProps.syllabaryTitle = `Японский алфавит 五十音 ${syllabaryName}`;
        syllabaryProps.syllabary = currentSyllabary.main_syllabary;
        break;
      case 'additional-symbols':
        syllabaryProps.syllabaryTitle  = 'Дополнительные таблицы каны';
        syllabaryProps.syllabary = currentSyllabary.additional_symbols;
        break;
      case 'yoon':
        syllabaryProps.syllabaryTitle  = 'Ёон「拗音」';
        syllabaryProps.syllabary = currentSyllabary.yoon;
        break;
    }

    return (
      <div className='syllabary'>
        <div className='symbol-table'>
          <SymbolTable {...syllabaryProps} />
        </div>
        { this.state.initialSymbol.symbol && <SymbolInfo {...symbolProps} /> }
      </div>
    );
  }
});
