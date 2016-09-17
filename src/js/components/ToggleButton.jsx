import React from 'react';
import Actions from '../actions/Actions';
import '../../css/components/ToggleButton.scss';

export default React.createClass({
  getDefaultProps: function () {
    return {
      label: 'ア'
    }
  },
  changeDictionary: function () {
    Actions.changeDictionary();
  },
  render: function () {
    return (
      <div className='g-toggle-button'>
        <button type='button' className={this.props.className} onClick={this.changeDictionary}>
          <div className='label'>
            <span>{this.props.label}</span>
          </div>
        </button>
      </div>
    );
  }
});
