// Libraries
import React from 'react';
//Components
import ChooseModule from '../../mixins/ChooseModule.jsx';
import Menu from '../menu/Menu.jsx';
//Style
import '../../../css/views/syllabary/ChoosePart.scss';

export default React.createClass({
  mixins: [ChooseModule],
  render: function() {
    let
      _this = this,
      syllabaryProps = [
        {
          local_lang: `Японский алфавит 五十音 ${this.props.syllabary === 'hiragana' ? 'Хирагана' : 'Катакана'}`,
          module: `${_this.props.syllabary}/gojuon`
        },
        {
          local_lang: 'Дополнительные таблицы каны',
          module: `${_this.props.syllabary}/additional-symbols`
        },
        {
          local_lang: 'Ёон「拗音」',
          module: `${_this.props.syllabary}/yoon`
        }];

    return (
      <div className='syllabary-parts'>
        <Menu menu={syllabaryProps} addStyle='rows' />
      </div>
    );
  }
});
