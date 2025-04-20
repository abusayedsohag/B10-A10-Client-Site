import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Cards = () => {

    const { campaign } = useLoaderData();

    return (
        <div className='w-10/12 md:w-11/12 mx-auto my-5'>
            <h1 className='text-center text-2xl font-bold'>Our Present Campaings</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-3'>
                {
                    campaign.map(card => <Card card={card} key={card._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;