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
            <h2 className='text-center text-3xl uppercase font-bold text-purple-500 my-4'>My Simple Portfolio Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-12 mx-12 pb-12'>
                {projects.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
        </div>
    );
};

export default Projects;