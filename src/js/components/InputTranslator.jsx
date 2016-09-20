import React from 'react';
import StateMixin from 'reflux-state-mixin';
import Actions from '../actions/Actions';
import DictionaryStores from '../stores/DictionaryStore';
import '../../css/components/Input.scss';

export default React.createClass({
  mixins: [StateMixin.connect(DictionaryStores)],
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
  convertToKana: function (event) {
    let
      value = event.target.value,
      dictionary = this.state.dictionary;

    for (let key in dictionary) {
      value = value.replace(new RegExp(key, 'g'), dictionary[key])
    }

    this.setState({text: value});
  },
  changeDictionary: function (event) {
    if ((event.keyCode === ' '.charCodeAt(0) && event.ctrlKey) || this.props.changeDictionary) {
      Actions.changeDictionary();
    }
  },
  render: function () {
    return (
      <div className='g-input'>
        <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.convertToKana}
          onKeyDown={this.changeDictionary}
        />
        <div>
          <hr />
          <hr className='g-input-border'/>
        </div>
      </div>
    );
  }
});
