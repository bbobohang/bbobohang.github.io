import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<div className='row'>
			<nav className={isExpanded ? 'nav expanded' : 'nav'}>
				<button
					className='hamburger'
					onClick={() => {
						setExpanded(!isExpanded);
					}}
				>
					<GiHamburgerMenu />
				</button>
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
