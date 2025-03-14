import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {




    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                {/* <figure><img src="" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${card._id}`}><button className="btn btn-primary">See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;