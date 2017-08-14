import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from  './components/header';
import Footer from  './components/footer';
import Sidebar from './components/sidebar';
import Body from './components/body';

export default class Category extends React.Component {
	render() {
		return(
			<div>
			<Header />
			<h1>{this.props.match.params.category}</h1>
			<Body value={this.props.match.params.category}/>
			<Sidebar />
			<Footer />
			</div>
		);
	}
}