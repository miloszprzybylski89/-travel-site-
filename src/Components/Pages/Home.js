import React from 'react';
// import { Router, Switch } from 'react-router-dom';
import '../../App.scss';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
	return (
		<>
			<HeroSection />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
