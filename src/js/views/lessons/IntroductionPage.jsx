import React from 'react';
import TextFieldJp from '../../components/TextFieldJp.jsx';

const Introduction = React.createClass({
	render: function() {
		return (
			<div className='IntroductionPage'>
				<h1>学APP</h1>
				<TextFieldJp hintText='ka->カ' />
			</div>
		);
	}
});

export default Introduction;