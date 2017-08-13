import React from 'react';
import ReactDOM from 'react-dom';

import List from './li';

export default class Ul extends React.Component {
	 generateRows (data) {
	 	var rows = [];
	 	rows = data.map((e, i) =>
	 		<List key={i} value={e.name} route={e.route} onClick={() => this.handleClick(e)}/>
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