import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import App from './App.jsx';
import GetStarted from './views/GetStarted.jsx';
import Introduction from './views/lessons/IntroductionPage.jsx';
import NewWords from '../js/views/lessons/NewWords.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Redirect from='/' to='get-started' />
		<Route path='/' component={App}>
			<Route path='/get-started' component={GetStarted} />
			<Route path='/introduction' component={Introduction} />
			<Route path='/new-words' component={NewWords} />
		</Route>
	</Router>, document.getElementById('gaku-app')
);
