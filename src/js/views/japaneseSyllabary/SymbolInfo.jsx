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
    let _this = this;

    return (
      <section className={`${Object.keys(this.state.currentSymbol).length ? '' : 'dn'} symbol-info`}>
        <nav className='related-symbols'>
          {
            this.state.symbolsList.length
              ? <div>
                  <div className='description'>Дополнительные символы:</div>
                  <div className='buttons'>
                    <RaisedButton
                      label={this.state.initialSymbol.symbol}
                      onClick={this.selectRelatedSymbol.bind(null, this.state.initialSymbol)}
                    />
                    {
                      this.state.symbolsList.map(function(symbol) {
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
            <span>{this.state.currentSymbol.symbol}</span>
          </figure>
          <div className='ta-l'>
            <span>Чтение: </span>
            <span>{this.state.currentSymbol.name}</span>
          </div>
          <div className='ta-l'>
            <span>Ромадзи: </span>
            <span>{this.state.currentSymbol.name}</span>
          </div>
          <div>
            <TextField
              id={`text-field-${this.state.currentSymbol.name}`}
              className='text-field'
              floatingLabelText={`Введите「${this.state.currentSymbol.name}」`}
              errorText={this.state.verified.message}
              value={this.state.textField}
              onChange={this.convertToKana}
              onKeyDown={this.changeDictionary}
            />
          </div>
          <div>
            {
              this.state.verified.isRight
                ? <RaisedButton
                    label='Закрыть'
                    className='button-close'
                    secondary={true}
                    onClick={this.closeSymbolInfo}
                  />
                : <RaisedButton
                    label='Проверить'
                    primary={true}
                    onClick={this.checkAnswer.bind(null, this.state.textField, this.state.currentSymbol.symbol)}
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
