import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';
import { RiSlideshow2Fill } from 'react-icons/ri';
const ProjectCard = ({ item }) => {
	return (
		// <div className='cardContainer'>
		// 	<div className='imageContainer'>
		// 		<a href={item.url} target='blank'>
		// 			<div className='front-face'>
		// 				<img src={item.image} alt='Profile Image' className='image' />
		// 			</div>
		// 			<div className='back-face'>
		// 				<div className='overlay'>
		// 					<div className='overlayTitle'>{item.title}</div>
		// 					<div className='overlaySubtitle '>{item.desc}</div>
		// 				</div>
		// 			</div>
		// 		</a>
		// 	</div>
		// </div>
		<div class='card'>
			<div
				class='front-face'
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div class='back-face'>
				<p className='back-face-title'>{item.title}</p>
				<p className='back-face-subtitle'>{item.desc}</p>
				<a href={item.url} target='blank'>
					<FaGithub
						color='white'
						size='40px'
						onMouseOver={({ target }) => (target.style.cursor = 'pointer')}
						className='demo-icon'
					/>
				</a>
				{item.demo_url && (
					<a href={item.demo_url} target='blank'>
						<RiSlideshow2Fill
							className='demo-icon'
							color='white'
							size='40px'
							onMouseOver={({ target }) => (target.style.cursor = 'pointer')}
						/>
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
