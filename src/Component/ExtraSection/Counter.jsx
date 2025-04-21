import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Counter = () => {

    const { campaigns, donations, user } = useLoaderData();
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    if (!campaigns || !donations || !user) {
        return (
            <div className='my-6 md:my-16 lg:my-24 flex justify-center items-center h-48'>
                <Spinner />
            </div>
        );
    }

    return (
        <div className='my-6 md:my-16 lg:my-24 relative'>
            {loading && (
                <div className='absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50'>
                    <Spinner />
                </div>
            )}
            <div className=''>
                <img
                    src="https://i.ibb.co.com/kWHBMkN/Picture1.jpg"
                    alt="Counter Background"
                    className={`brightness-50 w-full h-full object-cover ${loading ? 'opacity-0' : ''}`}
                    onLoad={handleImageLoad}
                />
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