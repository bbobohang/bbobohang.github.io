import React from 'react';
import './Navbar.css';
const Navbar = () => {
	return (
		<div className='row'>
			<nav className='nav'>
				<ul className='navList'>
					<li className='navItem'>
						<a className='listItem' href='#about'>
							About
						</a>
					</li>
					<li className='navItem'>
						<a className='listItem' href='#skills'>
							Skills
						</a>
					</li>
					<li className='navItem'>
						<a className='listItem' href='#projects'>
							Projects
						</a>
					</li>
					<li className='navItem'>
						<a className='listItem' href='#experiences'>
							Experiences
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
