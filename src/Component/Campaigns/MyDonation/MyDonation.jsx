import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContext';
import DonationCard from './DonationCard';

const MyDonation = () => {

    const donations = useLoaderData();
    const { user } = useContext(AuthContext);

    const [userDonate, setUserDonate] = useState([]);

    useEffect(() => {
        const filter = donations.filter(fil => fil.donateEmail === user.email)
        setUserDonate(filter)
    }, [donations, user?.email])

    return (
        <div className='w-10/12 md:w-11/12 mx-auto my-5'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-3'>
                {
                    userDonate?.map(data => <DonationCard key={data._id} data={data} ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default MyDonation;