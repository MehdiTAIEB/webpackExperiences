import React from 'react';
import ReactDOM from 'react-dom';

import Ul from './ul';

export default class Sidebar extends React.Component {
	constructor() {
		super();
		// array of menu
		// static or fetched from api
		this.state = {
			el: Array(10).fill({name:'asd', id: 2})
		};
	}
	render() {
		return(
			<div id="sidebar">
				<h1>Sidebar Maine</h1>
				<Ul data={this.state.el} />
			</div>
		);
	}
}