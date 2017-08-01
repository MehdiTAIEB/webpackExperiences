import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default class Sidebar extends React.Component {
	constructor() {
		super();
		// array of menu
		// static or fetched from api
		this.state = {
			el: Array(10).fill({name:'asd', id: 2})
		};
	}
	generateRows () {
		var rows = [];
		rows = this.state.el.map((e, i) =>
			<List key={i} value={e.name} onClick={() => this.handleClick(e.id)}/>
		);
		return rows;
	}
	handleClick(i) {
		alert(i);
	}
	renderList() {
		var rows = this.generateRows();
		return (
			<div>
			{rows}			
			</div>
		);
	}
	render() {
		return(
			<div id="sidebar">
				<h1>Sidebar Maine</h1>
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}