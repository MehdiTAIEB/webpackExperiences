import React from 'react';
import ReactDOM from 'react-dom';

import Ul from './ul';
import header_list from '../data/header_list';

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			header_list: header_list
		};
	}
	render() {
		return(
			<header>
				<h1>header Maine</h1>
				<Ul data={this.state.header_list} />
			</header>
		);
	}
}