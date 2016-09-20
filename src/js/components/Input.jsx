import React from 'react';
import '../../css/components/Input.scss';

export default React.createClass({
  getDefaultProps: function () {
    return {
      placeholder: ''
    }
  },
  getInitialState: function () {
    return {
      text: ''
    };
  },
  onChange: function(event) {
    this.setState({text: event.target.value});
  },
  render: function () {
    return (
      <div className='g-input'>
        <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.onChange}
        />
        <div>
          <hr />
          <hr className='g-input-border'/>
        </div>
      </div>
    );
  }
});
