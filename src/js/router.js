// Libraries
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';
//Views
import App from './App.jsx';
import HomePage from './views/HomePage.jsx';
import Auth from '../js/views/auth/Auth.jsx';
import Signup from '../js/views/auth/Signup.jsx';
import NewWords from '../js/views/lessons/NewWords.jsx';
import SelectSyllabary from './views/syllabary/SelectSyllabary.jsx';
import SyllabaryPage from './views/syllabary/SyllabaryPage.jsx';
import ChoosePart from '../js/views/syllabary/ChoosePart.jsx';
import Practice from './views/practice/Practice.jsx';
import PracticeForm from './views/practice/PracticeForm.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={HomePage} />
			<Route path='/auth' component={Auth} />
			<Route path='/signup' component={Signup} />
			<Route path='/get-started' component={HomePage} />
      {/* ===> Syllabary */}
			<Route path='/japanese-syllabary' component={SelectSyllabary} />
			<Route path='/hiragana' component={() => (<ChoosePart syllabary='hiragana' />)} />
      <Route path='/katakana' component={() => (<ChoosePart syllabary='katakana' />)} />
      <Route path='/hiragana/gojuon' component={() => (<SyllabaryPage syllabary='hiragana' module='gojuon' />)} />
      <Route path='/katakana/gojuon' component={() => (<SyllabaryPage syllabary='katakana' module='gojuon' />)} />
      <Route path='/hiragana/additional-symbols' component={() => (<SyllabaryPage syllabary='hiragana' module='additional-symbols' />)} />
      <Route path='/katakana/additional-symbols' component={() => (<SyllabaryPage syllabary='katakana' module='additional-symbols' />)} />
      <Route path='/hiragana/yoon' component={() => (<SyllabaryPage syllabary='hiragana' module='yoon' />)} />
      <Route path='/katakana/yoon' component={() => (<SyllabaryPage syllabary='katakana' module='yoon' />)} />
      {/* <=== Syllabary */}
      {/* ===> Practice */}
      <Route path='/practice' component={Practice} />
      <Route path='/practice/hiragana/gojuon' component={() => (<PracticeForm section='hiragana' subSection='gojuon' />)} />
      <Route path='/practice/hiragana/additional-symbols' component={() => (<PracticeForm section='hiragana' subSection='additional_symbols' />)} />
      <Route path='/practice/hiragana/yoon' component={() => (<PracticeForm section='hiragana' subSection='yoon' />)} />
      {/* <=== Practice */}
			<Route path='/new-words' component={NewWords} />
			<Route path='*' component={HomePage} />
		</Route>
	</Router>, document.getElementById('gaku-app')
);
