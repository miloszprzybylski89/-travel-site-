import React from 'react';
// import { Router, Switch } from 'react-router-dom';
import '../../App.scss';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
	return (
		<>
			<HeroSection />
			<Cards />
		</>
	);
}

export default Home;
