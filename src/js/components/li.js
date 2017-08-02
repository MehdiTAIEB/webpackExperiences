import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


export default class List extends React.Component {
	render() {
		return(
			<li onClick={() => this.props.onClick()}>
				{this.props.children}
				<Link to="list">{this.props.value}</Link>
			</li>
		);
	}
}