import React from 'react';
import '../utils/progress.css';

const Progress = () => {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'NodeJS/Express', level: 50 },
        { name: 'Python', level: 70 },
        { name: 'Django', level: 70 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 70 },
    ];

    return (

        <div className='lg:flex-col py-14'>
            <div className='px-12 md:mb-18'>
                <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-black rounded shadow p-4" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
                            <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                            <div className="relative h-2 bg-gray-300 rounded">
                                <div
                                    className="absolute top-0 left-0 h-2 bg-blue-500 rounded animate-progress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{skill.level}%</p>
                        </div>
                    ))}
                </div>
            </div>

        </div >

    );
};

export default Progress;