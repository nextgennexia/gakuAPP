// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Actions
import VerifyActions from '../../actions/VerifyActions';
import PracticeActions from '../../actions/PracticeActions';
//Store
import VerifyStore from '../../stores/VerifyStore';
//Components
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import SoundMixin from '../../mixins/SoundMixin.jsx';
import Sound from 'react-sound';
//Config
import config from '../../../locals/config.json';

export default React.createClass({
  mixins: [StateMixin.connect(VerifyStore), SoundMixin],
  nextQuestion: function() {
    PracticeActions.nextQuestion();
    VerifyActions.clear();
  },
  componentWillUnmount: function() {
    VerifyActions.clear();
  },
  render: function () {
    return (
      <div className='right-form'>
        {
          this.state.verified.isRight &&
            <div>
              <div>
                <FlatButton
                  label={`「${this.props.answer}」`}
                  icon={<FontIcon className='material-icons'>play_circle_filled</FontIcon>}
                  onClick={this.playSound}
                />
                <Sound
                  url={config.audios_path + this.props.resultAudio}
                  playStatus={this.state.statusPlay}
                  onFinishedPlaying={this.stopSound}/>
              </div>
              <div>ローマ字：{this.props.answer}</div>
              <RaisedButton
                label='Далее'
                className='action-button'
                secondary={true}
                onClick={this.nextQuestion}
              />
            </div>
        }
      </div>
    );
  }
});
