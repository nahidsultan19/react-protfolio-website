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
        <div id='project'>
            <h2 className='text-center text-3xl font-bold bg-gradient-to-r from-white bg-clip-text text-transparent'>My Simple Portfolio Project</h2>
            <div className='bg-gradient-to-r from-orange-500 to-orange w-96 h-1 mx-auto mb-4 shadow-xl'></div>&nbsp;
            <div className='md:flex flex-row px-10 pb-16 gap-8'>
                {projects.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
        </div>
    );
};

export default Projects;