import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ item }) => {
	return (
		<div className='cardContainer'>
			<div className='imageContainer'>
				<a href={item.url} target='blank'>
					<img src={item.image} alt='Profile Image' className='image' />
					<div className='overlay'>
						<div className='overlayTitle'>{item.title}</div>
						<div className='overlaySubtitle '>{item.desc}</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
