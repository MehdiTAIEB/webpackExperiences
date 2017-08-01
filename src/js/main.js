import React from    'react';
import ReactDOM from 'react-dom';

import Header from  './components/header';
import Footer from  './components/footer';
import Sidebar from './components/sidebar';

export default class Main extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Sidebar />
				<Footer />
			</div>
		);
	}
}