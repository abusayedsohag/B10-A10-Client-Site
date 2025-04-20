import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Home/Card';

const AllCampaigns = () => {

    const cards = useLoaderData();

    return (
        <div>
            <div className="w-11/12 mx-auto my-6">
                <div className="overflow-x-auto bg-slate-100 dark:bg-slate-800 dark:text-white hidden md:block">
                    <table className="table">
                        {/* head */}
                        <thead className=''>
                            <tr className='dark:text-white dark:border-b-white' >
                                <th>Campaigns</th>
                                <th>Campaigns Type</th>
                                <th>Min. Donation</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cards?.map(camp => (
                                    <tr key={camp._id} className='dark:border-b-blue-500'>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={camp.image} alt={camp.title} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{camp.title}</div>
                                                    <div className="text-sm opacity-50">Deadline : {camp.deadline}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h1 className="badge badge-outline badge-sm dark:text-white">{camp.type}</h1>
                                        </td>
                                        <td>
                                            <h1>{camp.amount} BDT</h1>
                                        </td>
                                        <th>
                                            <Link to={`/details/${camp._id}`}><button className="btn btn-primary lg:btn-xs">See More</button></Link>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* For small screens (mobile) */}
                <div key={cards._id} className="grid md:hidden">
                    {cards?.map((camp) => (
                        <div key={camp._id} className=''>
                            <div className="bg-white dark:bg-slate-800 dark:text-white p-4 flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <img src={camp.image} alt={camp.title} className="w-12 h-12 object-cover rounded" />
                                    <div>
                                        <h2 className="font-bold">{camp.title}</h2>
                                        <p className="text-sm text-gray-500">Deadline: {camp.deadline}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="badge badge-outline badge-xs dark:text-white">{camp.type}</span>
                                    <span className="font-semibold">Mini. Donate: <span className='font-normal text-xs'>{camp.amount} BDT</span></span>
                                </div>
                                <Link to={`/details/${camp._id}`} className="self-end">
                                    <button className="btn btn-primary btn-sm mt-2">See More</button>
                                </Link>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllCampaigns;