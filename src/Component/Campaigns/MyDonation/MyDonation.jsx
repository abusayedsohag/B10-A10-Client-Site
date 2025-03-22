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
        <div  className='my-6 w-11/12 mx-auto space-y-4'>
            {
                userDonate?.map(data => <DonationCard key={data._id} data={data} ></DonationCard>)
            }
        </div>
    );
};

export default MyDonation;