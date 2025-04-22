import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContext';
import DonationCard from './DonationCard';
import Spinner from '../../Spinner/Spinner';

const MyDonation = () => {

    const donations = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const [userDonate, setUserDonate] = useState([]);

    useEffect(() => {
        if (user?.email) {
            const filter = donations.filter(fil => fil.donateEmail === user.email);
            setUserDonate(filter);
        } else {
            setUserDonate([]);
        }
        setLoading(false);
    }, [donations, user?.email]);

    if (loading) {
        return (
            <div className='w-10/12 md:w-11/12 mx-auto my-5 flex justify-center items-center h-48'>
                <Spinner />
            </div>
        );
    }

    return (
        <div className='w-10/12 md:w-11/12 mx-auto my-5'>
            {
                userDonate.length === 0 ? (
                    <div className="text-center p-10 bg-slate-100 dark:bg-slate-800 rounded text-gray-500 dark:text-gray-300">
                        <h1 className="text-xl font-semibold">No Donations Found</h1>
                        <p className="text-sm mt-2">You haven't donated to any campaigns yet.</p>
                        <Link to="/Campaigns">
                            <button className="mt-4 btn btn-sm btn-primary">Donate</button>
                        </Link>
                    </div>
                ) : (
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-3'>
                        {
                            userDonate?.map(data => (
                                <DonationCard key={data._id} data={data} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );

};

export default MyDonation;