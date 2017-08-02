import React from 'react';
import ReactDOM from 'react-dom';

import List from './li';

export default class Ul extends React.Component {
	 generateRows (data) {
	 	var rows = [];
	 	rows = data.map((e, i) =>
	 		<List key={i} value={e.name} onClick={() => this.handleClick(e.id)}/>
	 	);
	 	return rows;
	 }
	 handleClick(i) {
	 	// allegedly suppose to trigger route change
	 	console.log(i);
	 }
	render() {
		return(
			<ul>
				{this.generateRows(this.props.data)}
			</ul>
		);
	}
}