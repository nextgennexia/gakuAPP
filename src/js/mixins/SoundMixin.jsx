// Libraries
import React from 'react';
//Components
import Sound from 'react-sound';

export default {
  getInitialState: function() {
    return {
      statusPlay: Sound.status.STOPPED
    };
  },
  playSound: function() {
    this.setState({
      statusPlay: Sound.status.PLAYING
    });
  },
  stopSound: function () {
    this.setState({
      statusPlay: Sound.status.STOPPED
    });
  }
};