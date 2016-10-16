// Libraries
import React from 'react';
import StateMixin from 'reflux-state-mixin';
//Store
import PracticeStore from '../../stores/PracticeStore';
//Views
import PracticeQuestionForm from './PracticeQuestionForm.jsx';
import PracticeRightForm from './PracticeRightForm.jsx';
//Lesson
import Practice from '../../../db/practice/practice.json';
//Config
import config from '../../../locals/config.json';

export default React.createClass({
  mixins: [StateMixin.connect(PracticeStore)],
  currentPractice: [],
  componentWillMount: function() {
    this.currentPractice = Practice[this.props.section];
    this.currentPractice = this.currentPractice.sort(function(a, b) {
      return Math.random() - 0.5;
    });
  },
  render: function() {
    let currentQuestion = this.currentPractice[this.state.currentNumber];

    return (
      <section className='practice'>
        <div className='symbol-info'>
          <div className='view'>
            <div
              className='sample'
              style={{backgroundImage: `url(${config.images_path + currentQuestion.questionImage})`}}
            ></div>
            <PracticeRightForm answer={currentQuestion.answer} resultAudio={currentQuestion.resultAudio} />
            <PracticeQuestionForm answer={currentQuestion.answer} hasConverting={currentQuestion.hasConverting} />
          </div>
        </div>
      </section>
    );
  }
});
