import React from 'react';
import profile from '../assets/images/profile.png';

const About = () => {
    return (
        <div className='lg:flex bg-slate-100 lg:py-12' id='about'>
            <div className='pt-5 px-16'>
                <img src={profile} alt="" className='mask mask-circle p-10 lg:max-w-sm bg-indigo-200' data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000" />
            </div>
            <div className='lg:py-12 ml-10 mt-8 pb-5 max-w-md' data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000">
                <h2 className='text-2xl font-bold'>About Me</h2>
                <p className='text-justify'>My Name is Nahid Sultan. Currently pursuing MSc in Compter Science and Techology at Southwest University of Science and Technology. I love to learn new Techology.My goal is try to become a professional software developer. In that case, I'm learning technology meticulously. Also trying to up-to-date my technological skills.</p>
                <a href='https://drive.google.com/file/d/1ycG_yfYC8X_L0hDqmq5_XGRn9CMS9Lhj/view?usp=sharing' target="_blank" className='btn mt-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0'>Download Resume</a>
            </div>
        </div>
    );
};

export default About;