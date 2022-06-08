import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-md rounded-lg shadow-2xl" />
                <div className='max-w-lg px-12'>
                    <h1 class="text-5xl font-bold">Nahid Sultan</h1>
                    <p class="py-6 text-xl">Front End Developer.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;