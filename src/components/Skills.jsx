import React from 'react';
import './Skills.css';
import { RiComputerFill } from 'react-icons/ri';
import { IoMdAnalytics } from 'react-icons/io';
import { FaBusinessTime } from 'react-icons/fa';
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
							<span>Programming</span>
						</span>
						<span className='itemDesc'>
							<p>
								<b>Topics:</b> <br />
								Web Development, Mobile App Development, Data Analytics, Data Science,
								AI, Algorithms, Machine Learning, Object-Oriented Design, Agile
								<br /> <br />
								<b>Programming Languages:</b>
								<br />
								ReactJS, React Native, Node.js, HTML, CSS, Java, Python, Flutter,
								Firebase, C, MongoDB, MySQL
							</p>
						</span>
					</div>
					<div className='itemContainer'>
						<span className='itemTitle'>
							<FaBusinessTime size={60} color='grey' />
							<span>Business</span>
						</span>
						<span className='itemDesc'>
							<p>
								<b>Topics:</b> <br />
								Conjuct Consulting, Product Management, Project Management
								<br /> <br />
								<b>Sofware:</b>
								<br />
								Word, Powerpoint, Excel
							</p>
						</span>
					</div>
					<div className='itemContainer'>
						<span className='itemTitle'>
							<IoMdAnalytics size={60} color='grey' />
							<span>Analytics</span>
						</span>
						<span className='itemDesc'>
							<p>
								<b>Topics:</b> <br />
								Artificial Intelligence (NLP), Data Preparation, Data Discovery, Data
								Visualization, Predictive And Prescriptive Analytics, Data Automation
								<br /> <br />
								<b>Software:</b>
								<br />
								Python, R, Tableau, Alteryx, Quicksight, Athena
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
