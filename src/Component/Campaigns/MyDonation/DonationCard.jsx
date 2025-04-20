import React from 'react';

const DonationCard = ({ data }) => {


    return (
        <div>
            <div className='h-[450px]'>
                <div className="card card-compact h-full bg-base-100 dark:bg-slate-800 dark:text-white shadow-xl">
                    <figure>
                        <img
                            src={data.image}
                            alt="Shoes"
                            className='h-48 w-full'
                        />
                    </figure>
                    <div className="card-body justify-between">
                        <h2 className="card-title">{data.title}</h2>
                        <h1>{data.description}</h1>
                        <h1 className='text-xs md:text-sm'><span className='font-semibold'>Host_Name:</span> {data.username}</h1>
                        <h1 className='text-xs md:text-sm'><span className='font-semibold'>Host_Email:</span> {data.useremail}</h1>
                        <h2><span className='font-semibold'>Donated:</span> {data.amount} BDT</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;