import React from 'react';
import code from '../assets/images/code.png';
import ParticleBackground from './ParticleBackground';



const Banner = () => {

    return (
        <div>
            {/* <ParticleBackground /> */}
            <div class="grid grid-cols-1 md:grid-cols-2 bg-black">
                <div className=' text-white lg:py-28 my-5 lg:px-12 ml-7'>
                    <h2 className='text-3xl' data-aos="slide-right" data-aos-offset="200" data-aos-duration="1000">Welcome To my Website</h2>
                    <h3 className='text-4xl font-bold py-2' data-aos="slide-right" data-aos-offset="200" data-aos-duration="1500">Nahid Sultan</h3>
                    <p className='text-xl font-bold' data-aos="slide-right" data-aos-offset="200" data-aos-duration="2000">Front End Developer</p>
                    <a href='#about' className='btn glass mt-5'>About Me</a>
                </div>
                <div className='py-14'>
                    <img src={code} alt="" className='md:max-w-md mt-4' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" />
                </div>
            </div>
        </div>
    );
};

export default Banner;