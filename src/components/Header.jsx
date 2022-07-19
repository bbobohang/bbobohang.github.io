import React from 'react';
import './Header.css';
const Header = () => {
	return (
		<div className='headerContainer'>
			<div className='headerLeft'>
				<h1>Low Lee Hang</h1>
				<h5>
					3rd Year Student pursing Double Degree <br />
					in Computer Science and Business Analytics
				</h5>
				<button className='btn'>
					<a href='mailto:lowl0017@e.ntu.edu.sg'>Get In Touch</a>
				</button>
			</div>
			<div className='headerRight'></div>
		</div>
	);
};

export default Header;
