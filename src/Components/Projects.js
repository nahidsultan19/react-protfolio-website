import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='project' className='mb-18 py-10'>
            <h2 className='text-center text-3xl font-bold bg-gradient-to-r from-white bg-clip-text text-transparent'>My Simple Portfolio Project</h2>
            <div className='bg-gradient-to-r from-orange-500 to-orange w-96 h-0.5 mx-auto mb-4 shadow-xl'></div>&nbsp;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 pb-16 gap-8'>
                {projects.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
        </div>
    );
};

export default Projects;