import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import Spinner from '../Spinner/Spinner';

const Card = ({ card }) => {

    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Slide triggerOnce cascade duration={2000} >
                <div className='h-[450px] relative'>
                    {loading && (
                        <div className='absolute z-10 top-0 left-0 w-full h-48 flex justify-center items-center bg-gray-100 bg-opacity-50'>
                            <Spinner />
                        </div>
                    )}

                    <div className="card card-compact h-full bg-base-100 dark:bg-slate-800 dark:text-white shadow-xl">
                        <figure>
                            <img
                                src={card.image}
                                alt="Shoes"
                                className={`h-48 w-full ${loading ? 'opacity-0' : ''}`}
                                onLoad={handleImageLoad}
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
            </Slide>
        </>
    );
};

export default Card;