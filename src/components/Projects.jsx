import React, { useState } from 'react';
import './Projects.css';
import profileImage from '../assets/profileImage.jpg';
import bg from '../assets/bg.jpg';
import ProjectCard from './ProjectCard';
import gym from '../assets/gymapp.png';
import devcon from '../assets/devcon.png';
import ezce from '../assets/react.png';
import flutter from '../assets/flutter.png';
import jyp from '../assets/juypter.png';
import citi from '../assets/citi.png';
const Projects = () => {
	const [currentTab, setCurrentTab] = useState('1');
	const tabs = [
		{
			id: 1,
			tabTitle: 'Personal',
			title: 'Personal',
			content: [
				{
					id: 1,
					image: citi,
					title: 'Wealth Buddy',
					desc: 'Champion web app for Citi HackOverflow 2022',
					url: 'https://github.com/Interstellarkai/Eternals',
					// demo_url: 'https://gym-buddy-reactjs.netlify.app/',
				},
				{
					id: 2,
					image: gym,
					title: 'Gym Buddy',
					desc:
						'Gym exercises application built using Reactjs, Material UI and RapidAPI',
					url: 'https://github.com/bbobohang/Gym-Buddy',
					demo_url: 'https://gym-buddy-reactjs.netlify.app/',
				},
				{
					id: 3,
					image: ezce,
					title: 'eczeStrong',
					desc:
						'React Native app to help Eczema patients alleviate their mental & physical wellbeing',
					url: 'https://github.com/bbobohang/eczeStrong',
					demo_url: 'https://expo.dev/@bobohang/AlvinApp',
				},
				{
					id: 4,
					image: devcon,
					title: 'DevConnector',
					desc: 'Social network for developers to connect, built on the MERN stack',
					url: 'https://github.com/bbobohang/Dev-Connector',
					demo_url: 'https://quiet-retreat-63438.herokuapp.com/',
				},
			],
		},
		{
			id: 2,
			tabTitle: 'Academic',
			title: 'Academic',
			content: [
				{
					id: 1,
					image: flutter,
					title: 'CarparkCompanion',
					desc:
						'Flutter application build for CZ2006 Software Engineering course in NTU. ',
					url: 'https://github.com/bbobohang/CarparkCompanion',
					demo_url: 'https://www.youtube.com/watch?v=A_JhkTmLcMU',
				},
				{
					id: 2,
					image: jyp,
					title: 'DCA-VOO',
					desc:
						'This project is to test out whether dollar cost averaging of investing is more profitable than lumpsum investing. ',
					url: 'https://github.com/bbobohang/DCA-VOO',
				},
			],
		},
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className='projectContainer' id='projects'>
			<div className='projFlex'>
				<div className='projTitle'>
					<h2>Projects</h2>
				</div>
				<div className='projSubtitle'>
					Below are some of the projects that I have worked on
				</div>
				<div className='container'>
					<div className='tabs'>
						<div className='btnWrapper'>
							{tabs.map((tab, i) => (
								<button
									key={i}
									id={tab.id}
									disabled={currentTab === `${tab.id}`}
									onClick={handleTabClick}
									className='btnProject'
								>
									{tab.tabTitle}
								</button>
							))}
						</div>
					</div>
					<div className='content'>
						{tabs.map((tab, i) => (
							<div key={i}>
								{currentTab === `${tab.id}` && (
									<div className='contentWrapper'>
										{tab.content.map((item, i) => (
											<ProjectCard item={item} />
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
