import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const cardInfo = useLoaderData();

    console.log(cardInfo)

    return (
        <div>
            <h1>{cardInfo.Name}</h1>
        </div>
    );
};

export default Details;