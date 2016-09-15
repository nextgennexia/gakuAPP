import React from 'react';
import Input from '../../components/Input.jsx';

const Introduction = React.createClass({
	render: function() {
		return (
			<div className='IntroductionPage'>
				<h1>学APP</h1>
        <Input />
			</div>
		);
	}
});

export default Introduction;