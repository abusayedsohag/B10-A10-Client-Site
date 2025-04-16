import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {




    return (
        <div className='h-min-[450px]'>
            <div className="card card-compact h-full bg-base-100 shadow-xl">
                <figure>
                    <img 
                    src={card.image} 
                    alt="Shoes"
                    className='h-48 w-full'
                    />
                </figure>
                <div className="card-body justify-between">
                    <h2 className="card-title">{card.title}</h2>
                    <h1>{card.description}</h1>
                    <h1><span className='font-semibold'>Deadline:</span> {card.deadline}</h1>
                    <h2><span className='font-semibold'>Min. Donation:</span> {card.amount} BDT</h2>
                    <div className="card-actions">
                        <Link to={`/details/${card._id}`}><button className="btn btn-primary">See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;