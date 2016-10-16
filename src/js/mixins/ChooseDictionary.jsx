// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Actions
import Actions from '../actions/DictionaryActions';
//Store
import DictionaryStores from '../stores/DictionaryStore';

export default {
  mixins: [StateMixin.connect(DictionaryStores)],
  getDefaultProps: function () {
    return {
      placeholder: ''
    }
  },
  getInitialState: function () {
    return {
      textField: ''
    };
  },
  onChange: function(event) {
    this.setState({textField: event.target.value});
  },
  convertToKana: function (event) {
    let
      value = event.target.value,
      dictionary = this.state.dictionary;

    for (let key in dictionary) {
      value = value.replace(new RegExp(key, 'g'), dictionary[key])
    }

    this.setState({textField: value});
  },
  changeDictionary: function (event) {
    if ((event.keyCode === ' '.charCodeAt(0) && event.ctrlKey) || this.props.changeDictionary) {
      Actions.changeDictionary();
    }
  }
};