// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Actions
import PopupActions from '../../actions/PopupActions';
import VerifyActions from '../../actions/VerifyActions';
//Store
import SyllabaryStore from '../../stores/SyllabaryStore';
import VerifyStore from '../../stores/VerifyStore';
//Components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ChooseDictionary from '../../mixins/ChooseDictionary.jsx';
//Style
import '../../../css/views/japaneseSyllabary/SymbolInfo.scss';

export default React.createClass({
  mixins: [StateMixin.connect(SyllabaryStore), StateMixin.connect(VerifyStore), ChooseDictionary],
  getInitialState: function() {
    return {
      currentSymbol: {}
    };
  },
  componentWillReceiveProps : function() {
    this.setState({
      currentSymbol: this.state.initialSymbol,
      textField: '',
      verified: {
        isRight: ''
      }
    });
  },
  closeSymbolInfo: function() {
    PopupActions.closeSymbolInfo();
  },
  selectRelatedSymbol: function(symbol) {
    this.setState({
      currentSymbol: symbol
    });
  },
  checkAnswer: function(userAnswer, rightAnswer) {
    VerifyActions.verifyResult(userAnswer, rightAnswer, 'syllabary', this.props.syllabary);
  },
  render: function() {
    let
      _this = this,
      _initialSymbol = this.state.initialSymbol,
      _symbolList = this.state.symbolsList,
      _currentSymbol = this.state.currentSymbol,
      _textField = this.state.textField,
      _verified = this.state.verified;

    return (
      <section className={`${Object.keys(_initialSymbol).length ? '' : 'dn'} symbol-info`}>
        <nav className='related-symbols'>
          {
            _symbolList.length
              ? <div>
                  <div className='description'>Дополнительные символы:</div>
                  <div className='buttons'>
                    <RaisedButton
                      label={_initialSymbol.symbol}
                      onClick={this.selectRelatedSymbol.bind(null, _initialSymbol)}
                    />
                    {
                      _symbolList.map(function(symbol) {
                        return (
                          <RaisedButton
                            key={symbol.id}
                            label={symbol.symbol}
                            onClick={_this.selectRelatedSymbol.bind(null, symbol)}
                          />
                        )
                      })
                    }
                  </div>
                </div>

            : ''
          }
        </nav>
        <div className='view'>
          <figure>
            <img src='' />
            <span>{_currentSymbol.symbol}</span>
          </figure>
          <div className='ta-l'>
            <span>Чтение: </span>
            <span>{_currentSymbol.romaji}</span>
          </div>
          <div className='ta-l'>
            <span>Ромадзи: </span>
            <span>{_currentSymbol.romaji}</span>
          </div>
          <div>
            <TextField
              id={`text-field-${_currentSymbol.romaji}`}
              className='text-field'
              floatingLabelText={`Введите ${_currentSymbol.hint && _currentSymbol.hint.map(function(hint) {
                return `「${hint}」`
              })}`}
              errorText={_verified.message}
              value={_textField}
              onChange={this.convertToKana}
              onKeyDown={this.changeDictionary}
            />
          </div>
          <div>
            {
              _verified.isRight
                ? <RaisedButton
                    label='Закрыть'
                    className='button-close'
                    secondary={true}
                    onClick={this.closeSymbolInfo}
                  />
                : <RaisedButton
                    label='Проверить'
                    primary={true}
                    onClick={this.checkAnswer.bind(null, _textField, _currentSymbol.symbol)}
                  />
            }
          </div>
        </div>
        <IconButton
          className='close'
          iconClassName='material-icons'
          onClick={this.closeSymbolInfo}
        >
          close
        </IconButton>
      </section>
    );
  }
});
