import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import HiraganaDic from '../../db/hiraganaDictionary.json';
import KatakanaDic from '../../db/katakanaDictionary.json';

const TextFieldJp = React.createClass({
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
		var textFieldValue = event.target.value;

		if (event.charCode == 32) {
		 for (let key in KatakanaDic) {
				textFieldValue = textFieldValue.replace(new RegExp(key, 'g'), KatakanaDic[key])
			}

			this.setState({text: textFieldValue});
		}
	},
	render: function() {
		return (
				<MuiThemeProvider>
					<TextField 
						hintText={this.props.hintText} 
						value={this.state.text}
						onChange={this.handleJpConvert}
						onKeyPress={this.handleKatakanaConvert}
						name='input-jp'
					 />
				</MuiThemeProvider>
		);
	}
});

export default TextFieldJp;