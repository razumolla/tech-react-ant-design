import React from 'react';
import About from '../Home/About';
import Faq from '../Home/Faq';
import Feature from '../Home/Feature';
import Hero from '../Home/Hero';
import Works from '../Home/Works';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Feature></Feature>
            <Works></Works>
            <Faq></Faq>
        </div>
    );
};

export default Home;