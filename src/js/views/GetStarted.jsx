import React from 'react';
import RaisedButton from '../components/RaisedButton.jsx';
import '../../css/views/GetStarted.scss';

export default React.createClass({
  render: function () {
    return (
      <div className='get-started'>
        <h1>学APP</h1>
        <p>Добро пожаловать в 学APP, web приложение, которое поможет Вам в изучении японского языка!</p>
        <RaisedButton label='Приступить!' to='/introduction' />
      </div>
    );
  }
});
