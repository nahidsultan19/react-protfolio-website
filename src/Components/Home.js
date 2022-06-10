import React, { useEffect } from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Progress from './Progress';

const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Banner />
            <About />
            <Projects />
            <Progress />
            <Contact />
        </div>
    );
};

export default Home;