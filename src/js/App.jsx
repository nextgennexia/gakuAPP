import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import CSS from '../css/App.scss'

const App = React.createClass({
	render: function() {
		return (
			<div className='App'>
				{this.props.children}
			</div>
		);
	}
});

export default App;