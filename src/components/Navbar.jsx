import React from 'react';
import './Navbar.css';
const Navbar = () => {
	return (
		<div className='row'>
			<nav className='nav'>
				<ul className='navList'>
					<li className='navItem'>
						<a href='#about'>About</a>
					</li>
					<li className='navItem'>
						<a href='#projects'>Projects</a>
					</li>
					<li className='navItem'>
						<a href='#'>Experiences</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
