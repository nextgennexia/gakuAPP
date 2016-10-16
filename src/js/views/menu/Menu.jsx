// Libraries
import React from 'react';
//Components
import MenuItem from './MenuItem.jsx';
//Style
import '../../../css/views/menu/Menu.scss';

export default React.createClass({
  render: function() {
    return (
      <ul className={`menu ${this.props.addStyle}`}>
        {
          this.props.menu.map(function(el, idx) {
            let props = {
              key: idx,
              icon: el.icon,
              furigana: el.furigana,
              kanji: el.kanji,
              localLang: el.local_lang,
              enum: el.enum,
              module: el.module
            };

            return <MenuItem {...props} />
          })
        }
      </ul>
    );
  }
});
