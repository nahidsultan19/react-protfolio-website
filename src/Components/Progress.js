import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import code from '../assets/images/code.png';
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

        // <div className='lg:flex lg:py-12 px-10'>
        //     <div className='grow'>
        //         <h2 className='text-4xl font-bold'>Skills</h2>
        //         <ProgressBar completed={90} className="py-5" customLabel="JavaScript" />
        //         <ProgressBar completed={70} customLabel="React" />
        //         <ProgressBar completed={50} className="py-5" customLabel="Node/Express" />
        //         <ProgressBar completed={70} customLabel="Python" />
        //         <ProgressBar completed={80} className="py-5" customLabel="Django" />
        //         <ProgressBar completed={90} customLabel="HTML" />
        //         <ProgressBar completed={85} className="py-5" customLabel="CSS" />
        //         <ProgressBar completed={80} customLabel="Bootstrap" />
        //         <ProgressBar completed={70} className="py-5" customLabel="Tailwind CSS" />
        //     </div>
        //     <div className='py-6 px-4'>
        //         <img className='w-full h-auto' src={code} alt="" />
        //     </div>
        // </div>

        // <section className="bg-black-800 py-10">
        //     <div className='grid grid-cols-1 md:grid-cols-2'>
        //         <div className="container mx-auto px-10">
        //             <h2 className="text-2xl font-bold mb-4">Skills</h2>
        //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                 {skills.map((skill, index) => (
        //                     <div key={index} className="bg-black rounded shadow p-4" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
        //                         <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
        //                         <div className="relative h-2 bg-gray-300 rounded">
        //                             <div
        //                                 className="absolute top-0 left-0 h-2 bg-blue-500 rounded animate-progress"
        //                                 style={{ width: `${skill.level}%` }}
        //                             ></div>
        //                         </div>
        //                         <p className="text-sm text-gray-600 mt-2">{skill.level}%</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className='container'>
        //             <PieChart width={500} height={400}>
        //                 <Pie data={skills} dataKey="level" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
        //                     {skills.map((entry, index) => (
        //                         <Cell key={`cell-${index}`} />
        //                     ))}
        //                 </Pie>
        //                 <Tooltip />
        //                 <Legend />
        //             </PieChart>
        //         </div>
        //     </div>
        // </section>

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