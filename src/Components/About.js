import React from 'react';
import profile from '../assets/images/profile.png';

const About = () => {
    return (
        <div className='lg:flex justify-center items-center sm:px-10 text-white' id='about'>
            <div className=''>
                <img src={profile} alt="" className='mask mask-circle p-10 lg:max-w-sm md:w-96 sm:mx-auto bg-indigo-200' data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000" />
            </div>
            <div className='lg:py-12 ml-10 pb-5 max-w-md  sm:pe-4' data-aos="fade-left" data-aos-offset="200" data-aos-duration="2000">
                <h2 className='text-2xl font-bold'>About Me</h2>
                <div className='bg-gradient-to-r from-orange-500 to-orange w-1/4 h-0.5'></div>&nbsp;
                <p className='text-justify'>I am an enthusiastic Software Developer, with a few years of experience in Frontend Technology. I specialize in building user-friendly and performant web applications using modern frontend technologies. I'm proficient in React.js and its ecosystem.
                    I have some portfolio projects similar to this technology. Also, I have developed the MERN Stack project. Looking for a position where I can explore my knowledge.
                    My strength is in JavaScript, React, NodeJS/ExpressJS, HTML, CSS, Tailwind CSS, Bootstrap, Firebase, and MongoDB. I am also familiar with Redux.</p>
                &nbsp;
                <p>I strive to write clean, modular, and maintainable code, following best practices and industry standards.</p>
                <a href='https://drive.google.com/file/d/1ycG_yfYC8X_L0hDqmq5_XGRn9CMS9Lhj/view?usp=sharing' target="_blank" className='btn mt-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0'>Download Resume</a>
            </div>
        </div>
    );
};

export default About;