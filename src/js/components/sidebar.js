import React from 'react';
import ReactDOM from 'react-dom';

import Ul from './ul';
import sidebar_list from '../data/sidebar_list';

export default class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			sidebar_list: sidebar_list
		};
	}
	render() {
		return(
			<aside>
				<h1>Sidebar Maine</h1>
				<Ul data={this.state.sidebar_list} />
			</aside>
		);
	}
}