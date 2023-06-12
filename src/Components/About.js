import React from 'react';
import profile from '../assets/images/profile.png';

const About = () => {
    return (
        <div className='lg:flex justify-center items-center h-screen' id='about'>
            <div className=''>
                <img src={profile} alt="" className='mask mask-circle p-10 lg:max-w-sm bg-indigo-200' data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000" />
            </div>
            <div className='lg:py-12 ml-10 pb-5 max-w-md' data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000">
                <h2 className='text-2xl font-bold'>About Me</h2>
                <p className='text-justify'>I am an enthusiastic Software Developer, with a few years of experience in Frontend Technology. Recently, I'm working with Frontend Development using React. I have some portfolio projects similar to this technology. Also, I have developed the MERN Stack project. Looking for a position where I can explore my knowledge.

                    My strength is in JavaScript, React, Python, Django, NodeJS/ExpressJS, HTML, CSS, Tailwind CSS, Bootstrap, Firebase, and MongoDB. I am also familiar with Redux, TypeScript,</p>
                <a href='https://drive.google.com/file/d/1ycG_yfYC8X_L0hDqmq5_XGRn9CMS9Lhj/view?usp=sharing' target="_blank" className='btn mt-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0'>Download Resume</a>
            </div>
        </div>
    );
};

export default About;