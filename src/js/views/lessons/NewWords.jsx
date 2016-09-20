import React from 'react';
import Words from '../../../db/lessons/lesson1/words.json';
import '../../../css/views/lessons/NewWords.scss';
import BackButton from '../../components/BackButton.jsx';

import ScrollArea from 'react-scrollbar';

export default React.createClass({
  getInitialState: function() {
    return {
      dataWords: Words,
      selected: ''
    }
  },
  setSelect: function(id) {
    this.setState({selected: id});
  },
  render: function() {
    var _this = this;

    return (
      <div className='new-words-page'>
        <h1>Новые слова</h1>
        <ScrollArea className='wrapper' speed={1} >
          <div className='table'>
            {
              this.state.dataWords.map(function(el){
                return (
                  <div
                    key={el.id}
                    className={el.id == _this.state.selected ? 'row active' : 'row'}
                    onClick={_this.setSelect.bind(null, el.id)}
                    >
                    <div className='cell kana'>{el.kana}</div>
                    <div className='cell kanji'>{el.kanji}</div>
                    <div className='cell trans'>{el.translate}</div>
                    <div className='cell song'></div>
                  </div>
                );
              })
            }
          </div>
        </ScrollArea>
        <BackButton label='Назад' />
      </div>
    );
  }
});