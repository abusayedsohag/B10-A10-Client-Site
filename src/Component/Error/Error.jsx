import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-screen relative'>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-slate-700 z-10 rounded-b-full shadow-lg flex justify-center items-end'>
                <h1 className='text-4xl md:text-8xl text-white font-black pb-3'>ERROR</h1>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 z-30 rounded-t-full shadow-lg flex justify-start flex-col items-center'>
                <h1 className='text-4xl md:text-8xl text-white font-black'>404</h1>
                <br />
                <Link to="/" className='btn btn-secondary'>Go to Home</Link>
            </div>
        </div >
    );
};

export default Error;