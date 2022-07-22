import React, { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './Header.css';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Header = () => {
	return (
		<div className='headerContainer'>
			<div data-aos='fade-up' className='headerLeft'>
				<h1>Low Lee Hang</h1>
				<h5>
					{/* 3rd Year Student pursing Double Degree <br />
					in Computer Science and Business Analytics */}
					<ReactTypingEffect
						text={[
							'Aspiring Software Engineer',
							'Web Development Enthusiast',
							'Penultimate Student in NTU',
						]}
						speed={100}
						eraseSpeed={100}
						typingDelay={100}
					/>
				</h5>
				<button className='btn headerBtn'>
					<a className='headerBtnText' href='mailto:lowl0017@e.ntu.edu.sg'>
						Get In Touch
					</a>
				</button>
				<a href='#about'>
					<div className='headerIcon'>
						<AiOutlineArrowDown size={50} />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Header;
