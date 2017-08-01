import React from 'react';
import ReactDOM from 'react-dom';

export default class List extends React.Component {
	render() {
		return(
			<li onClick={() => this.props.onClick()}>
				{this.props.value}
			</li>
		);
	}
}