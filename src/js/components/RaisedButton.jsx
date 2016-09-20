import React from 'react';
import Actions from '../actions/Actions';
import '../../css/components/RaisedButton.scss';

const RaisedButton = React.createClass({
  getDefaultProps: function () {
    return {
      label: '',
      to: ''
    }
  },
  handleClick: function () {
    if (this.props.lesson) {
      Actions.chooseLesson(this.props.lesson);
    }
    this.context.router.push(this.props.to);
  },
  render: function () {
    return (
      <div className='g-button'>
        <button type='button' onClick={this.handleClick}>
          <div className='label'>
            <span>{this.props.label}</span>
          </div>
        </button>
      </div>
    );
  }
});

RaisedButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default RaisedButton;