import React from 'react';
import { hashHistory } from 'react-router';
import '../../css/components/RaisedButton.scss';

export default React.createClass({
  getDefaultProps: function () {
    return {
      label: '',
      to: ''
    }
  },
  render: function () {
    return (
      <div className='g-button secondary'>
        <button type='button' onClick={hashHistory.goBack}>
          <div className='label'>
            <span>{this.props.label}</span>
          </div>
        </button>
      </div>
    );
  }
});
