import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';
function App() {
	return (
		<Fragment>
			<ScrollUpButton AnimationDuration={500} />
			<div className='bg'>
				<div className='overlay' />
				<Navbar />
				<Header />
			</div>
			<About />
			<Projects />
		</Fragment>
	);
}

export default App;
