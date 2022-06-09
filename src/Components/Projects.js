import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import portfolio1 from '../assets/portfolio/Find-Phone.png';
import portfolio2 from '../assets/portfolio/lucy-one-react.png';
import portfolio3 from '../assets/portfolio/Service-provider.png';
import portfolio4 from '../assets/portfolio/parts-manufacturer.png';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl uppercase font-bold text-purple-500 my-4'>My Simple Portfolio Project</h2>
            {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-12 mx-12 pb-12'>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                    <figure><img src={portfolio1} alt="portfolio1" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://nahidsultan19.github.io/find-phone-app-JS-API/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Phone Finder</h2>
                        <p>User could find their favorite phone <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60" data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
                    <figure><img src={portfolio2} alt="portfolio2" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://computer-accessories-store-react.netlify.app/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Lucky One</h2>
                        <p>Use could add item to cart and select item randomly <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60" data-aos="fade-up" data-aos-offset="200" data-aos-duration="3000">
                    <figure><img src={portfolio3} alt="portfolio3" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://independent-service-prov-f9fbf.web.app/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Independent Service</h2>
                        <p>User could place the order for workout category after login the site <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60" data-aos="fade-up" data-aos-offset="200" data-aos-duration="3000">
                    <figure><img src={portfolio4} alt="portfolio4" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://parts-manufacturer-90332.web.app/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Parts Manufacturer</h2>
                        <p>Every user could place the order after login and he/she could see order list also could pay via tripe <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-12 mx-12 pb-12'>
                {projects.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
        </div>
    );
};

export default Projects;