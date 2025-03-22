import React from 'react';

const DonationCard = ({ data }) => {


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='h-40 w-40'>
                    <img
                        src={data.image}
                        alt={data.title}
                        className='h-full object-contain'
                    />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                    <h2 className="badge badge-outline badge-sm">{data.type}</h2>
                    <h2 className="font-bold">Donate Amount: <span className='font-normal'>{data.amount} BDT</span></h2>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;