import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import Spinner from '../Spinner/Spinner';

const Features = () => {

    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const featureData = [
        {
            image: 'https://i.ibb.co.com/wNMHJ3Jf/safety-box-12367705.png',
            title: 'Safe & Secure Donations',
            description: 'All transactions are encrypted to protect donors and recipients — giving you peace of mind with every contribution.'

        },
        {
            image: 'https://i.ibb.co.com/svj0608J/60413-OA7-H3-L-426.jpg',
            title: 'Donate From Anywhere',
            description: 'Support causes globally with multi-currency support and region-friendly access, no matter where you or the campaign is.'
        },
        {
            image: 'https://i.ibb.co.com/XxMhWyR2/4507693.jpg',
            title: 'Support What Matters',
            description: 'Choose campaigns by category, region, or urgency — find causes that align with your heart and values.'
        },
        {
            image: 'https://i.ibb.co.com/jPcYZCFf/804237-preview.jpg',
            title: 'Verified Campaigns Only',
            description: 'We manually review and verify every campaign to ensure your donation reaches real, deserving people and communities.'
        },
        {
            image: 'https://i.ibb.co.com/S44P0nzb/4979939-50880.jpg',
            title: 'Community Uplift System',
            description: 'Every donation helps someone rise. Join a community where donors and recipients support, connect, and uplift one another.'
        },
        {
            image: 'https://i.ibb.co.com/yFg87mzY/alarm-clock-693266.png',
            title: 'Real-Time Donation Tracking',
            description: 'Track how your donations are being received and used through transparent updates and progress bars.'
        },
        {
            image: 'https://i.ibb.co.com/WvLcTvFk/2756252-370964-PBTMMI-499.jpg',
            title: 'Live Campaign Updates',
            description: 'Stay informed with real-time updates from campaign owners — see how your donations are changing lives, moment by moment.'
        },

    ]




    return (
        <div className='py-4 bg-orange-400'>
            <h1 className='text-center text-2xl font-semibold p-5'>Exclusive Features</h1>

            <Marquee speed={150} pauseOnClick={true} pauseOnHover={true} >
                <div className='flex gap-5 pl-5'>

                    {featureData.map((feature, index) => (

                        <div className="relative h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl rounded-xl dark:bg-slate-800 dark:text-white">
                            {loading && (
                                <div className='absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-50 rounded-xl'>
                                    <Spinner />
                                </div>
                            )}
                            <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                                <figure className="px-5 pt-5 md:px-10 md:pt-10">
                                    <img
                                        src={feature.image}
                                        alt="Shoes"
                                        className={`rounded-xl w-16 md:w-20 ${loading ? 'opacity-0' : ''}`} 
                                        onLoad={handleImageLoad}/>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xs md:text-sm">{feature.title}</h2>
                                    <p className='text-xs md:text-sm'>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </Marquee>
        </div>
    );
};

export default Features;