import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import CSS from '../../css/views/GetStarted.scss';

const GetStarted = React.createClass({
	render: function() {
		return (
			<div className='GetStarted'>
				<h1>学APP</h1>
				<p>Добро пожаловать в 学APP, web приложение, которое поможет Вам в изучении японского языка!</p>
				<MuiThemeProvider>
					<RaisedButton label='Приступить!' href='#/introduction' />
				</MuiThemeProvider>
			</div>
		);
	}
});

export default GetStarted;