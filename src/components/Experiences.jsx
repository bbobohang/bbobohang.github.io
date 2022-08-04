import React from 'react';
import './Experiences.css';
import cc from '../assets/cc.png';
import marketnode from '../assets/marketnode.png';
import micepad from '../assets/micepad.png';
import livspace from '../assets/livspace.png';
import bac from '../assets/bac.png';
const EXP = [
	{
		title: 'Livspace',
		subtitle: 'Product Analyst',
		desc: (
			<p>
				Forming an opinion, testing and validating that opinion through data, and
				structuring the necessary dependencies to capture the data in meaningful and
				tangible ways
			</p>
		),
		image: livspace,
	},
	{
		title: 'MarketNode',
		subtitle: 'Software Test Engineer',
		desc: (
			<p>
				Develop new test automation scripts of modules. Analyze log files and
				provide support by troubleshooting scripts <br />
				<br />
				Tech Stack: Java, Selenium, Ubuntu
			</p>
		),
		image: marketnode,
	},
	{
		title: 'Micepad',
		subtitle: 'Customer Sucess Intern',
		desc: (
			<p>
				Project co-ordinator for certification of ISO 27001. Collaborated with
				internal stakeholders such as Development Team, Human Resource to develop
				strategies to improve information security <br />
				<br />
				Conducted ISMS Awareness and PDPA Training for Micepad’s 22 employees,
				increasing IS awareness to > 90%
			</p>
		),
		image: micepad,
	},
	{
		title: 'Business Analytics Club',
		subtitle: 'Vice President',
		desc:
			'A leading student-run club in NTU, aiming to develop a new generation of Business Analytics and IT Professionals.',
		image: bac,
	},
	{
		title: 'Conjuct Consulting',
		subtitle: 'Associate Consultant',
		desc: 'Pro Bono Consulting for IASH.SG',
		image: cc,
	},
];
const Experiences = () => {
	return (
		<>
			<div className='expContainer' id='experiences'>
				<div className='expFlex'>
					<div className='title'>
						<h2>Experiences</h2>
					</div>
					<div className='grid-container'>
						{EXP.map((item, index) => (
							<div className='grid-item' key={index}>
								<div className='item-image-container'>
									<img src={item.image} />
								</div>
								<div className='item-title'>{item.title}</div>
								<div className='item-subtitle'>{item.subtitle}</div>
								<div className='item-desc'>{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Experiences;
