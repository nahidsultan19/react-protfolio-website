import React from 'react';
import { useNavigate } from 'react-router-dom';


const Project = ({ project }) => {
    const { id, name, url, img, des } = project;
    const navigate = useNavigate();

    const handleProjectDetail = id => {
        const detail = `/detail/${id}`;
        navigate(detail);
    }
    return (
        // <div className="card w-auto mx-auto max-w-lg bg-black-800 image-full max-h-60" data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
        //     <figure><img className='w-auto h-5' src={img} alt="portfolio4" /></figure>
        //     <div className="card-body">
        //         <div className="card-actions justify-start">
        //             <button className="btn btn-primary"><a href={url} target="_blank">Live Site</a></button>
        //             <button className='btn' onClick={() => handleProjectDetail(id)}>Details</button>
        //         </div>
        //         <h2 className="card-title">{name}</h2>
        //         {/* <p>{des.slice(0, 100)}</p> */}
        //     </div>
        // </div>
        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={img}
                    alt="Project Background"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h2 className="text-white text-xl font-bold">{name}</h2>
                </div>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base pb-4">
                    {des.slice(0, 36)}
                </p>
                <button className="btn btn-primary"><a href={url} target="_blank">Live Site</a></button>
                <button className='btn ml-2' onClick={() => handleProjectDetail(id)}>Details</button>
            </div>
        </div>

    );
};

export default Project;