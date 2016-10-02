// Libraries
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';
//Views
import App from './App.jsx';
import MainMenu from './views/MainMenu.jsx';
import Auth from '../js/views/auth/Auth.jsx';
import Signup from '../js/views/auth/Signup.jsx';
import Introduction from './views/lessons/IntroductionPage.jsx';
import NewWords from '../js/views/lessons/NewWords.jsx';
import JapaneseSyllabary from './views/japaneseSyllabary/JapaneseSyllabaryMain.jsx';
import SelectSymbol from './views/japaneseSyllabary/SelectSymbol.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={MainMenu} />
			<Route path='/auth' component={Auth} />
			<Route path='/signup' component={Signup} />
			<Route path='/get-started' component={MainMenu} />
			<Route path='/japanese-syllabary' component={JapaneseSyllabary} />
			<Route path='/hiragana' component={() => (<SelectSymbol syllabary='hiragana' />)} />
			<Route path='/katakana' component={() => (<SelectSymbol syllabary='katakana' />)} />
			<Route path='/introduction' component={Introduction} />
			<Route path='/new-words' component={NewWords} />
			<Route path='*' component={MainMenu} />
		</Route>
	</Router>, document.getElementById('gaku-app')
);
