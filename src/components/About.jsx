import React from 'react';
import './About.css';
import image from '../assets/profileImage.jpg';

const About = () => {
	return (
		<div className='aboutContainer' id='about'>
			<div className='aboutLeft'>
				<div className='title'>
					<h2>About Me</h2>
				</div>
				<div className='imgContainer'>
					<img src={image} alt='Profile Image' />
				</div>
			</div>

			<div className='aboutRight'>
				<div className='contentContainer'>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto obcaecati
						sint cupiditate assumenda recusandae! A maiores aut optio esse reiciendis,
						repellat, natus consectetur fugit excepturi quam assumenda qui error
						rerum.
					</p>
				</div>
				<div className='buttonContainer'>
					<span>
						<button className='btn btnResume'>My Resume</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
