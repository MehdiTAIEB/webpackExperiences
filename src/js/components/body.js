import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Ul from './ul';
import body_list from '../data/body_list';

export default class Category extends React.Component {
	constructor() {
		super();
		this.state = {
			body_list: body_list
		};
	}
	render() {
		return(
			<body>
				list of videos for: {this.props.value}
				<Ul data={this.state.body_list} />
			</body>
		);
	}
}