import React from 'react';
// import { Link } from 'react-router-dom';
import code from '../assets/images/code.png';
import { HashLink as Link } from 'react-router-hash-link';
import ParticleBackground from './ParticleBackground';


const Banner = () => {

    return (
        <div>
            {/* <ParticleBackground /> */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className=' text-white lg:py-28 my-5 lg:px-12 ml-7'>
                    <h2 className='text-3xl' data-aos="slide-right" data-aos-offset="200" data-aos-duration="1000">Hi, I'm</h2>
                    <h3 className='text-4xl font-bold py-2 text-orange-500' data-aos="slide-right" data-aos-offset="200" data-aos-duration="1500">Nahid Sultan</h3>
                    <p className='text-xl font-bold' data-aos="slide-right" data-aos-offset="200" data-aos-duration="2000">Front End Developer</p>
                    <Link smooth to='#about' className='btn glass mt-5'>About Me</Link>
                </div>
                <div className='py-14'>
                    <img src={code} alt="" className='md:max-w-md mt-4' data-aos="fade-down" data-aos-offset="200" data-aos-duration="2000" />
                </div>
            </div>
        </div>
    );
};

export default Banner;