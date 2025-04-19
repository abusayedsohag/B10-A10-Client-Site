import React from 'react';

const Error = () => {
    return (
        <div className='h-screen relative'>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-slate-700 z-10 rounded-b-full shadow-lg'></div>
            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 z-10 rounded-t-full shadow-lg'></div>

            <div className='relative z-20 flex justify-center items-center flex-col h-full gap-10 md:gap-5'>
                <h1 className='text-4xl md:text-8xl text-white font-black'>ERROR</h1>
                <h1 className='text-4xl md:text-8xl text-white font-black'>404</h1>
            </div>

            <button className='relative z-3'>BBBB</button>
        </div >
    );
};

export default Error;