import React from 'react';
import './Skills.css';
import { RiComputerFill } from 'react-icons/ri';

const Skills = () => {
	return (
		<div className='skillsContainer' id='skills'>
			<div className='title'>
				<h2>Skills</h2>
			</div>
			<div className='flexContainer'>
				<div className='rightContainer'>
					<div className='itemContainer'>
						<span className='itemTitle'>
							<RiComputerFill size={60} color='grey' />
							<span>Technology</span>
						</span>
						<span className='itemDesc'>
							<p>
								<b>Topics:</b> <br />
								Web Development, Mobile App Development, Data Analytics, Data Science,
								AI, Algorithms, Machine Learning, Object-Oriented Design, Agile, SCRUM
								<br /> <br />
								<b>Programming Languages:</b>
								<br />
								ReactJS, React Native, Java, Python, Node.js, HTML, CSS, JQuery,
								GraphQL, C, MongoDB
							</p>
						</span>
					</div>
					<div className='itemContainer'>
						<span className='itemTitle'>
							<RiComputerFill size={60} color='grey' />
							<span>Business</span>
						</span>
						<span className='itemDesc'>
							<p>
								<b>Topics:</b> <br />
								Web Development, Mobile App Development, Data Analytics, Data Science,
								AI, Algorithms, Machine Learning, Object-Oriented Design, Agile, SCRUM
								<br /> <br />
								<b>Programming Languages:</b>
								<br />
								ReactJS, React Native, Java, Python, Node.js, HTML, CSS, JQuery,
								GraphQL, C, MongoDB
							</p>
						</span>
					</div>
					<div className='itemContainer'>
						<span className='itemTitle'>
							<RiComputerFill size={60} color='grey' />
							<span>Analytics</span>
						</span>
						<span className='itemDesc'>
							<p>
								<b>Topics:</b> <br />
								Web Development, Mobile App Development, Data Analytics, Data Science,
								AI, Algorithms, Machine Learning, Object-Oriented Design, Agile, SCRUM
								<br /> <br />
								<b>Programming Languages:</b>
								<br />
								ReactJS, React Native, Java, Python, Node.js, HTML, CSS, JQuery,
								GraphQL, C, MongoDB
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
