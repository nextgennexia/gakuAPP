import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import TextFieldMixin from '../../mixins/TextFieldMixin.jsx';
import TextFieldCss from '../../../css/components/TextFieldCss.scss';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Introduction = React.createClass({
	mixins: [TextFieldMixin],
	render: function() {
		return (
			<div className='IntroductionPage'>
				<h1>学APP</h1>
				<MuiThemeProvider>
					<TextField 
						hintText='ka->カ' 
						value={this.state.text}
						onChange={this.handleJpConvert}
						onKeyDown={this.changeKana}
						className='CustomInput'
					 />
				</MuiThemeProvider>
			</div>
		);
	}
});

export default Introduction;