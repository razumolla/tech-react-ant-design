import React from 'react';
import About from '../Home/About';
import Faq from '../Home/Faq';
import Feature from '../Home/Feature';
import Hero from '../Home/Hero';
import Pricing from '../Home/Pricing';
import Works from '../Home/Works';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Feature></Feature>
            <Works></Works>
            <Faq></Faq>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;