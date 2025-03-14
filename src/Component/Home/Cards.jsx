import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Cards = () => {


    const cards = useLoaderData();

    // const handleadd = () => {

    //     const data = { name: "connected client side" }

    //     fetch('http://localhost:3000/campaigns', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => { console.log(data) })
    // }

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='text-center'>Our Present Campaings</h1>

            <div className='grid grid-cols-3 mt-6 gap-3'>
                {
                    cards.map(card => <Card card = {card} key = {card._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;