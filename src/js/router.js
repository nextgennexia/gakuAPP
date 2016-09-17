import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import App from './App.jsx';
import GetStarted from './views/GetStarted.jsx';
import Introduction from './views/lessons/IntroductionPage.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Redirect from='/' to='get-started' />
		<Route path='/' component={App}>
			<Route path='/get-started' component={GetStarted} />
			<Route path='/introduction' component={Introduction} />
		</Route>
	</Router>, document.getElementById('gaku-app')
);
