// Libraries
import React from 'react';
//Components
import ChooseModule from '../../mixins/ChooseModule.jsx';
import FontIcon from 'material-ui/FontIcon';

export default React.createClass({
  mixins: [ChooseModule],
  render: function() {
    return (
      <li className='menu-item' onClick={this.chooseModule.bind(null, this.props.module)}>
        {
          this.props.enum && <div className='enum'>第{this.props.enum}課：</div>
        }
        { this.props.icon && <FontIcon className='material-icons icon'>{this.props.icon}</FontIcon> }
        <div className='content-container'>
          {
            this.props.furigana
              && <ruby className='item-element'>
                  <rt>{this.props.furigana}</rt>
                 </ruby>
          }
          { this.props.kanji && <div className='item-element'>{this.props.kanji}</div> }
          <div className='item-element'>{this.props.localLang}</div>
        </div>
      </li>
    );
  }
});
