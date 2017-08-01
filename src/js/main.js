import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';

export default class Main extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}