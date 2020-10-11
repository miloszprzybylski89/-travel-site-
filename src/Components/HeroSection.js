import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HeroSection.scss';

function HeroSection() {
	return (
		<div className="hero-container">
			{/* <video
				src={require('../Assets/videos/video-2.mp4')}
				autoPlay
				loop
				muted
			/> */}
			<h1>ADVENTURE AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button
					className="btns"
					ButtonStyle="btn--outlin"
					buttonSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					className="btns"
					ButtonStyle="btn--primary"
					buttonSize="btn--large"
				>
					WATCH TRAILER <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
