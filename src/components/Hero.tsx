import React from 'react';
import MainNews from './hero section/MainNews';
import MostRead from './hero section/MostRead';

const Hero = () => {
    return (
        <div className='mt-4 flex gap-5 max-w-7xl mx-auto'>
            <MainNews></MainNews>
            <MostRead></MostRead>
        </div>
    );
};

export default Hero;