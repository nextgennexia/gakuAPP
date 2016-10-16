// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Actions
import DictionaryActions from '../../actions/DictionaryActions';
import VerifyActions from '../../actions/VerifyActions';
//Store
import VerifyStore from '../../stores/VerifyStore';
//Components
import ChooseDictionary from '../../mixins/ChooseDictionary.jsx';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
  mixins: [StateMixin.connect(VerifyStore), ChooseDictionary],
  componentWillReceiveProps: function() {
    this.setState({textField: ''});
  },
  checkAnswer: function(userAnswer, rightAnswer) {
    VerifyActions.verifyResult(userAnswer, rightAnswer);
  },
  render: function () {
    return (
      <div className='question-form'>
        {
          !this.state.verified.isRight &&
            <div>
              <div>
                <TextField
                  className='text-field'
                  floatingLabelText='Введите ответ'
                  errorText={this.state.verified.message}
                  value={this.state.textField}
                  onChange={this.props.currentQuestion ? this.convertToKana : this.onChange}
                  onKeyDown={this.changeDictionary} />
                {
                  this.props.currentQuestion
                    && <FloatingActionButton mini={true} onClick={DictionaryActions.changeDictionary}>
                        <span>{this.state.label}</span>
                      </FloatingActionButton>
                }
              </div>
              <div>
                <RaisedButton
                  label='Проверить'
                  className='action-button'
                  primary={true}
                  onClick={this.checkAnswer.bind(null, this.state.textField, this.props.answer)}
                />
              </div>
            </div>
        }
      </div>
    );
  }
});
