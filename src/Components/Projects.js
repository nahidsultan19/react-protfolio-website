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
            <h2 className='text-center text-3xl font-bold text-gradient-to-r text-slate-100 my-4 py-12'>My Simple Portfolio Project</h2>
            <div className='md:flex flex-row px-10 pb-16'>
                {projects.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
        </div>
    );
};

export default Projects;