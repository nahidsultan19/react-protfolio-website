import React from 'react';
import { Link } from 'react-router-dom';
import portfolio1 from '../assets/portfolio/Find-Phone.png';
import portfolio2 from '../assets/portfolio/lucy-one-react.png';
import portfolio3 from '../assets/portfolio/Service-provider.png';
import portfolio4 from '../assets/portfolio/parts-manufacturer.png';

const Projects = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-purple-500 my-4'>My Simple Portfolio Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-12 mx-12 pb-12'>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://nahidsultan19.github.io/find-phone-app-JS-API/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Phone Finder</h2>
                        <p>User could find their favorite phone <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://computer-accessories-store-react.netlify.app/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Lucky One</h2>
                        <p>Use could add item to cart and select item randomly <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://independent-service-prov-f9fbf.web.app/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Independent Service</h2>
                        <p>User could place the order for workout category after login the site <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><a href="https://vehicle-inventory-2e22b.web.app/" target="_blank">Live Site</a></button>
                        </div>
                        <h2 className="card-title">Parts Manufacturer</h2>
                        <p>Every user could place the order after login and he/she could see order list also could pay via tripe <Link to='' className=''>More..</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;