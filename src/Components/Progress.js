import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import code from '../assets/images/code.png';

const Progress = () => {
    return (

        <div className='lg:flex lg:py-12 px-10'>
            <div className='grow'>
                <h2 className='text-4xl font-bold'>Skills</h2>
                <ProgressBar completed={90} className="py-5" customLabel="JavaScript" />
                <ProgressBar completed={70} customLabel="React" />
                <ProgressBar completed={50} className="py-5" customLabel="Node/Express" />
                <ProgressBar completed={70} customLabel="Python" />
                <ProgressBar completed={80} className="py-5" customLabel="Django" />
                <ProgressBar completed={90} customLabel="HTML" />
                <ProgressBar completed={85} className="py-5" customLabel="CSS" />
                <ProgressBar completed={80} customLabel="Bootstrap" />
                <ProgressBar completed={70} className="py-5" customLabel="Tailwind CSS" />
            </div>
            <div className='py-6 px-4'>
                <img className='w-full h-auto' src={code} alt="" />
            </div>
        </div>

    );
};

export default Progress;