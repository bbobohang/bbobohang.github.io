import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {
	return (
		<div className='footerContainer'>
			<div className='socialContainer'>
				<a href='https://github.com/bbobohang/' target='blank'>
					<FaGithub
						color='white'
						size='40px'
						onMouseOver={({ target }) => (target.style.color = '#cf2947')}
						onMouseOut={({ target }) => (target.style.color = 'white')}
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/low-lee-hang-0a531a1b6/'
					target='blank'
				>
					<FaLinkedin
						color='white'
						size='40px'
						onMouseOver={({ target }) => (target.style.color = '#cf2947')}
						onMouseOut={({ target }) => (target.style.color = 'white')}
					/>
				</a>
				<a href='https://www.instagram.com/bobo_hang/' target='blank'>
					<FaInstagram
						color='white'
						size='40px'
						onMouseOver={({ target }) => (target.style.color = '#cf2947')}
						onMouseOut={({ target }) => (target.style.color = 'white')}
					/>
				</a>
			</div>
			<div className='content'>
				<p>© 2022 Designed by Low Lee Hang. All rights reserved.</p>
				<p>
					Source code can be found{' '}
					<a href='https://github.com/bbobohang/bbobohang.github.io' target='blank'>
						<u>here.</u>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
