import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const Details = () => {

    const cardInfo = useLoaderData();

    const { user } = useContext(AuthContext);

    console.log(cardInfo)

    const handleDonate = () => {
        const donateName = user.displayName;
        const donateEmail = user.email;
        const { image, title, type, amount, deadline, description, useremail, username } = cardInfo;
        const donationData = { image, title, type, amount, deadline, description, useremail, username, donateName, donateEmail }
        console.log(donationData)

        fetch('http://localhost:5001/donatelist', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(donationData)
        })
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: "Donate Successfully",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => { console.log(error) })
    }


    return (
        <div>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col bg-slate-700 mx-auto w-11/12 rounded-md my-5">
                    <img src={cardInfo.image} className="rounded-lg shadow-2xl w-64 md:w-96" />
                    <div className='md:p-4 md:space-y-2 w-full'>
                        <h1 className="md:text-4xl lg:text-5xl font-bold">{cardInfo.title}</h1>
                        <p className="py-1 md:py-6">{cardInfo.description}</p>
                        <h1 className="md:text-lg pt-4"><span className='font-medium md:text-xl'>Campaigns Type:</span> {cardInfo.type}</h1>
                        <h1 className="md:text-lg"><span className='font-medium md:text-xl'>Mini. Donate:</span> {cardInfo.amount} BDT</h1>
                        <h1 className="md:text-lg"><span className='font-medium md:text-xl'>Deadline:</span> {cardInfo.deadline}</h1>
                        <h1 className="md:text-lg"><span className='font-medium md:text-xl'>Host_Name:</span> {cardInfo.username}</h1>
                        <h1 className="md:text-lg"><span className='font-medium md:text-xl'>Host_Email:</span> {cardInfo.useremail}</h1>
                        <br />
                        <button onClick={handleDonate} className="btn btn-secondary w-full ">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;