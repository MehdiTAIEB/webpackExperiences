require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Main from './js/main';
import List from './js/list';

const app = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Main}>
			</Route>
			<Route path="/list" component={List}>
			</Route>
		</div>
	</BrowserRouter>,
	app
);