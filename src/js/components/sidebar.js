import React from 'react';
import ReactDOM from 'react-dom';

import Ul from './ul';

export default class Sidebar extends React.Component {
	constructor() {
		super();
		// array of menu
		// static or fetched from api
		this.state = {
			el: Array(10).fill({name:'category', id: 2, route: '/list'})
		};
	}
	render() {
		return(
			<aside>
				<h1>Sidebar Maine</h1>
				<Ul data={this.state.el} />
			</aside>
		);
	}
}