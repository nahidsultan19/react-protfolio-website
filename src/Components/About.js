import React from 'react';
import profile from '../assets/images/profile.png';

const About = () => {
    return (
        <div className='lg:flex bg-slate-100 lg:py-12'>
            <div className='pt-5 px-16'>
                <img src={profile} alt="" className='mask mask-circle p-10 lg:max-w-sm bg-gray-400' />
            </div>
            <div className='lg:py-20 ml-10 mt-8 pb-5 max-w-md'>
                <h2 className='text-2xl font-bold'>About Me</h2>
                <p>My Name is Nahid Sultan. Currently I'm pusuing Ms in Compter Science and Techology at Southwest University of Science and Technology.I love to learn new Techology.My goal is try to become a professional software developer.</p>
                <a href='https://drive.google.com/file/d/1ycG_yfYC8X_L0hDqmq5_XGRn9CMS9Lhj/view?usp=sharing' target="_blank" className='btn mt-5'>Download Resume</a>
            </div>
        </div>
    );
};

export default About;