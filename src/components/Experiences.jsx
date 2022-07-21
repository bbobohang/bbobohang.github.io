import React from 'react';
import './Experiences.css';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import reactnative from '../assets/reactnative.png';
import node from '../assets/node.png';
import express from '../assets/express.png';

const Experiences = () => {
	return (
		<>
			<div className='expContainer' id='experiences'>
				<div className='title'>
					<h2>Experiences</h2>
				</div>
				<div className='expContent'>
					<img src={mongo} />
					<img src={react} />
					<img src={reactnative} />
					<img src={node} />
					<img src={express} />
				</div>
			</div>
		</>
	);
};

export default Experiences;
