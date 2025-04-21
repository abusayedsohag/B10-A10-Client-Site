import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import { Typewriter } from 'react-simple-typewriter';
import Spinner from '../Spinner/Spinner';

const Cards = () => {

    const { campaign } = useLoaderData();

    if (!campaign) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <Spinner />
            </div>
        );
    }

    return (
        <div className='w-10/12 md:w-11/12 mx-auto my-5'>
            <h1 className='text-center dark:text-white text-xl md:text-3xl font-bold'>
                Our Present{' '}
                <span className='text-bold text-red-600'>
                    <Typewriter
                        words={['Initiative', 'Drive', 'Effort', 'Project', 'Mission', 'Program', 'Operation', 'Movement']}
                        loop={100}
                        cursor
                        cursorStyle='__'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-3'>
                {
                    campaign.map(card => <Card card={card} key={card._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;