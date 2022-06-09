import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, url, img, des } = project;
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60" data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
            <figure><img src={img} alt="portfolio4" /></figure>
            <div className="card-body">
                <div className="card-actions justify-start">
                    <button className="btn btn-primary"><a href={url} target="_blank">Live Site</a></button>
                    <button className='btn'>Details</button>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{des.slice(0, 20)} <Link to='' className=''>More..</Link></p>
            </div>
        </div>
    );
};

export default Project;