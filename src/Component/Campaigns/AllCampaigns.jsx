import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Home/Card';

const AllCampaigns = () => {

    const cards = useLoaderData();

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='text-center'>Our Recent Campaings</h1>

            <div className='grid grid-cols-3 mt-6 gap-3'>
                {
                    cards.map(card => <Card card={card} key={card._id}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCampaigns;