import React from 'react';
import RaisedButton from '../components/RaisedButton.jsx';
import '../../css/views/GetStarted.scss';

export default React.createClass({
  render: function () {
    return (
      <div className='get-started'>
        <h1>学APP</h1>
        <h3>Добро пожаловать в 学APP!</h3>
        <p>学APP - это приложение, которое поможет вам в изучении японского языка с НУЛЯ. 学APP сделает процесс изучения японского языка максимально интересным и позволит в кратчайшие сроки овладеть основами японской разговорный речи! Данное приложение подходит всех групп изучающих японский язык!</p>
        <p>Каждый урок состоит из:</p>
        <ul>
          <li>Новые слова</li>
          <li>Грамматика</li>
          <li>Речевые модели</li>
          <li>Диалог</li>
          <li>Задачи
            <ul>
              <li>Задачи за текущий урок</li>
              <li>Задачи на закрепление предыдущего урока</li>
            </ul>
          </li>
        </ul>
        <RaisedButton label='Приступить!' to='/new-words' />
      </div>
    );
  }
});
