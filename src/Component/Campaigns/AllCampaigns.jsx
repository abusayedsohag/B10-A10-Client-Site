import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Spinner from '../Spinner/Spinner';


const AllCampaigns = () => {

    const cardsData = useLoaderData();
    const [loading, setLoading] = useState(true)
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (cardsData) {
            setCards([...cardsData]);
            setLoading(false);
        }
    }, [cardsData]);

    const sortOrder = (info) => {
        const sorted = [...cards].sort((a, b) => info === "Ascending" ? a.amount - b.amount : b.amount - a.amount)
        setCards(sorted)
    }

    if (loading) {
        return (
            <div className="w-11/12 mx-auto my-6 flex justify-center items-center h-48">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <div className="w-11/12 mx-auto my-6">

                <div className='flex justify-between items-center mb-1'>

                    <div>
                        <h1 className='text-center dark:text-white text-lg md:text-2xl font-bold'>
                            Our Present{' '}
                            <span className='text-bold text-red-600'>
                                <Typewriter
                                    words={['Initiative', 'Drive', 'Effort', 'Project', 'Mission', 'Program', 'Operation', 'Movement']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>

                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn-xs md:btn dark:bg-slate-800 dark:text-white">
                            <i className="fa-solid fa-filter"></i> Sort
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow dark:bg-slate-900 dark:text-white">
                            <li>
                                <div onClick={() => sortOrder('Ascending')}><i className="fa-solid fa-arrow-down-short-wide"></i>Ascending</div>
                            </li>
                            <li>
                                <div onClick={() => sortOrder('Descending')}><i className="fa-solid fa-arrow-down-wide-short"></i>Descending</div>
                            </li>
                        </ul>
                    </div>
                </div>

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