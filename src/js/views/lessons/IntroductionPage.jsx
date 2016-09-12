import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

import HiraganaDic from '../../../db/hiraganaDictionary.json';

const Introduction = React.createClass({
	getInitialState: function() {
		return {
			text: ''
		};
	},
	handleJpConvert: function(event) {
		var textFieldValue = event.target.value;
		if (event.charCode != 32) {
			for (let key in HiraganaDic) {
				textFieldValue = textFieldValue.replace(new RegExp(key, 'g'), HiraganaDic[key])
			}

			this.setState({text: textFieldValue});
		}
	},
	handleKatakanaConvert: function(event) {
		if (event.charCode == 32) {
		
		}
	},
	render: function() {
		return (
			<div className='IntroductionPage'>
				<h1>学APP</h1>
				<MuiThemeProvider>
					<TextField 
						hintText='ka -> か' 
						value={this.state.text}
						onChange={this.handleJpConvert}
						onKeyPress={this.handleKatakanaConvert}
					 />
				</MuiThemeProvider>
			</div>
		);
	}
});

export default Introduction;