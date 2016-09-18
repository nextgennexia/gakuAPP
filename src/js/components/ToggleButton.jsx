import React from 'react';
import Actions from '../actions/Actions';
import '../../css/components/ToggleButton.scss';

export default React.createClass({
  getInitialState: function () {
    return {
      label: 'あ',
      changeLabel: 1
    }
  },
  changeDictionary: function () {
    Actions.changeDictionary();
    this.state.changeLabel
      ? this.setState({label: 'ア', changeLabel: 0})
      : this.setState({label: 'あ', changeLabel: 1})
  },
  render: function () {
    return (
      <div className='g-toggle-button'>
        <button type='button' className={this.props.className} onClick={this.changeDictionary}>
          <div className='label'>
            <span>{this.state.label}</span>
          </div>
        </button>
      </div>
    );
  }
});
