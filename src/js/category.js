import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from  './components/header';
import Footer from  './components/footer';
import Sidebar from './components/sidebar';

export default class Category extends React.Component {
	componentWillMount () {
		this.state = {category: this.props.match.params.category};
	}
	render() {
		return(
			<div>
			<Header />
			<h1>{this.state.category}</h1>
			<Sidebar />
			<Footer />
			</div>
		);
	}
}