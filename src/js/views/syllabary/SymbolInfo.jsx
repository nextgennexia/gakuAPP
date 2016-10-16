// Libraries
import React from 'react';
//Actions
import PopupActions from '../../actions/PopupActions';
//Components
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Sound from 'react-sound';
import SoundMixin from '../../mixins/SoundMixin.jsx';
//Style
import '../../../css/views/syllabary/SymbolInfo.scss';
//Config
import config from '../../../locals/config.json';

export default React.createClass({
  mixins: [SoundMixin],
  getInitialState: function() {
    return {
      writing: false
    };
  },
  componentWillReceiveProps : function() {
    this.setState({
      textField: '',
      writing: false
    });
  },
  closeSymbolInfo: function() {
    PopupActions.closeSymbolInfo();
  },
  toggleWriting: function() {
    this.state.writing ? this.setState({writing: false}) : this.setState({writing: true});
  },
  render: function() {
    return (
      <section>
        <div className='symbol-info'>
          <div className='view'>
            <div
              className={`sample${this.state.writing ? ' writing' : ''}`}
              style={{backgroundImage: `url(${config.images_path + this.props.initialSymbol.image})`}}
            ></div>
            <FlatButton
              className='view-writing'
              label={this.state.writing ? 'Скрыть написание' : 'Показать порядок написания'}
              onClick={this.toggleWriting}
            />
            <div>
              <FlatButton
                label={`「${this.props.initialSymbol.romaji}」`}
                icon={<FontIcon className='material-icons'>play_circle_filled</FontIcon>}
                onClick={this.playSound}
              />
              <Sound
                url={config.audios_path + this.props.initialSymbol.audio}
                playStatus={this.state.statusPlay}
                onFinishedPlaying={this.stopSound}/>
            </div>
            <div>ローマ字：{this.props.initialSymbol.romaji}</div>
          </div>
          <IconButton className='close' iconClassName='material-icons' onClick={this.closeSymbolInfo}>close</IconButton>
        </div>
      </section>
    );
  }
});
