import React from 'react';
import { Link } from 'react-router';

const GetStarted = React.createClass({
	render: function() {
		return (
			<div className='GetStarted'>
				<h1>学APP</h1>
				<p>Добро пожаловать в 学APP, web приложение, которое поможет Вам в изучении японского языка!</p>
				<Link className='AppStart' to='/introduction'>Приступить!</Link>
			</div>
		);
	}
});

export default GetStarted;