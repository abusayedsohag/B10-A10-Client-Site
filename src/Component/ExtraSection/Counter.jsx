import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Counter = () => {

    const { campaigns, donations, user } = useLoaderData();


    return (
        <div className='my-6 md:my-16 lg:my-24 relative'>
            <div className=''>
                <img src="https://i.ibb.co.com/kWHBMkN/Picture1.jpg" alt="" className='brightness-50' />
            </div>
            <div className='absolute inset-0 flex justify-around text-center items-center'>
                <div>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>{campaigns.length}</h1>
                    <h2 className='text-xs md:text-2xl lg:text-3xl font-semibold text-white'>Campaigns</h2>
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>{donations.length}</h1>
                    <h2 className='text-xs md:text-2xl lg:text-3xl font-semibold text-white'>Donations</h2>
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>{user.length}</h1>
                    <h2 className='text-xs md:text-2xl lg:text-3xl font-semibold text-white'>Total Users</h2>
                </div>
            </div>
        </div>
    );
};

export default Counter;