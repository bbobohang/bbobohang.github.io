import React from 'react';
import './About.css';
import image from '../assets/about.jpg';

const About = () => {
	return (
		<div className='aboutContainer' id='about'>
			<div className='leftRightContainer'>
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
							I am currently pursuing Double Degree in Business (Specialisation in
							Business Analytics) and Computer Science at Nanyang Technological
							University (NTU). This multi-disciplinary programme integrates two
							disciplines hence, equpping me with both hard and soft skills to put on
							different hats as both an Engineer and Business graduate. I am passionate
							in building/designing applications to provide value to people's life.
							<br />
							<br />
							Talks about #WebDevelopment #MobileDevelopment #MachineLearning
						</p>
					</div>
					<div className='buttonContainer'>
						<span>
							<a
								href={require('../../src/assets/NTU_Low_Lee_Hang_Resume.pdf')}
								download='NTU_Low_Lee_Hang_Resume'
								target='_blank'
							>
								<button className='btn btnResume'>My Resume</button>
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
