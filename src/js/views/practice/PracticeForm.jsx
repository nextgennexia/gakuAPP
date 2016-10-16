// Libraries
import React from 'react';
//Actions
import Actions from '../../actions/Actions';
//Components
import ChooseDictionary from '../../mixins/ChooseDictionary.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import Sound from 'react-sound';
import SoundMixin from '../../mixins/SoundMixin.jsx';
//Lesson
import HiraganaSyllabary from '../../../db/lessons/syllabary/hiraganaSyllabary.json';
import KatakanaSyllabary from '../../../db/lessons/syllabary/KatakanaSyllabary.json';
//Config
import config from '../../../locals/config.json';

export default React.createClass({
  mixins: [ChooseDictionary, SoundMixin],
  currentSyllabary: {},
  testData: [],
  getInitialState: function() {
    return {
      currentSymbol: '',
      currentNumber: 0,
      verified: {
        message: '',
        isRight: ''
      }
    };
  },
  componentDidMount: function() {
    let _this = this;

    if (this.props.section === 'hiragana') {
      this.currentSyllabary = HiraganaSyllabary;
    } else {
      this.currentSyllabary = KatakanaSyllabary;
    }

    switch (this.props.subSection) {
      case 'gojuon':
        this.currentSyllabary.main_syllabary.map(function(el) {
          _this.testData = _this.testData.concat(el.column);
        });
      break;
      case 'additional_symbols':
        this.currentSyllabary.additional_symbols.map(function(el) {
          _this.testData = _this.testData.concat(el.column);
        });
      break;
      case 'yoon':
        this.currentSyllabary.yoon.map(function(el) {
          _this.testData = _this.testData.concat(el.column);
        });
      break;
    }

    this.testData = this.testData.filter(function(el) {
      return el.symbol;
    });

    this.testData = this.testData.sort(function(a, b) {
      return Math.random() - 0.5;
    });
    this.setState({currentSymbol: this.testData[this.state.currentNumber]});
  },
  checkAnswer: function(userAnswer, rightAnswer) {
    if (userAnswer === rightAnswer) {
      this.setState({
        verified: {
          message: '',
          isRight: true
        }
      });
    } else {
      this.setState({
        verified: {
          message: 'Вы ошиблись',
          isRight: false
        }
      });
    }
  },
  nextQuestion: function() {

    this.setState({
      currentNumber: this.state.currentNumber + 1,
      currentSymbol: this.testData[this.state.currentNumber + 1],
      verified: {
        message: '',
        isRight: false
      }
    });
    console.log(this.state.currentNumber);
  },
  render: function() {
    return (
      <section className='practice'>
        <div className='symbol-info'>
          <div className='view'>
            <div
              className='sample'
              style={{backgroundImage: `url(${config.images_path + this.state.currentSymbol.image})`}}
            ></div>
            {
              this.state.verified.isRight
                ? <div>
                    <div>
                      <FlatButton
                        label={`「${this.state.currentSymbol.romaji}」`}
                        icon={<FontIcon className='material-icons'>play_circle_filled</FontIcon>}
                        onClick={this.playSound}
                      />
                      <Sound
                        url={config.audios_path + this.state.currentSymbol.audio}
                        playStatus={this.state.statusPlay}
                        onFinishedPlaying={this.stopSound}/>
                    </div>
                    <div>ローマ字：{this.state.currentSymbol.romaji}</div>
                    <RaisedButton
                      label='Далее'
                      secondary={true}
                      onClick={this.nextQuestion}
                    />
                  </div>
                : <div>
                    <div>
                      <TextField
                        className='text-field'
                        floatingLabelText='Введите ответ'
                        errorText={this.state.verified.message}
                        value={this.state.textField}
                        onChange={this.convertToKana}
                        onKeyDown={this.changeDictionary} />
                      <FloatingActionButton mini={true} onClick={Actions.changeDictionary}>
                        <span>{this.state.label}</span>
                      </FloatingActionButton>
                    </div>
                    <div>
                      <RaisedButton
                        label='Проверить'
                        primary={true}
                        onClick={this.checkAnswer.bind(null, this.state.textField, this.state.currentSymbol.symbol)}
                      />
                    </div>
                  </div>
            }

          </div>
        </div>
      </section>
    );
  }
});
