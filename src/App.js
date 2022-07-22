import React, { Fragment, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ScrollUpButton from 'react-scroll-up-button';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './App.css';

//Fading effect
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<Fragment>
			<ScrollUpButton AnimationDuration={500} />
			<div className='bg'>
				<div className='overlay' />
				<Navbar />
				<Header />
			</div>
			<div data-aos='fade-right'>
				<About />
			</div>
			<div data-aos='fade-right'>
				<Skills />
			</div>
			<div data-aos='fade-right'>
				<Projects />
			</div>
			<div data-aos='fade-right'>
				<Experiences />
			</div>

			<Footer />
		</Fragment>
	);
}

export default App;
