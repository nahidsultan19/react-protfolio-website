import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const { id } = useParams();


    return (
        <div className='min-h-screen mt-20'>
            <h2>Project Detail: {id}</h2>
            {/* <h2>{name}</h2> */}
        </div>
    );
};

export default Detail;