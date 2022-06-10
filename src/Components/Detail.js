import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    return (
        <div className='min-h-screen mt-20'>
            <h2>Project Detail:{id}</h2>
        </div>
    );
};

export default Detail;