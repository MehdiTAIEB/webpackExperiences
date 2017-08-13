import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

export default class List extends React.Component {
	render() {
		return(
			<li onClick={() => this.props.onClick()}>
				<Link to={this.props.route + '/' + this.props.value}>{this.props.value}</Link>
			</li>
		);
	}
}