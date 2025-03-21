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
            <div className="hero min-h-screen">
                <div className="hero-content flex-col bg-base-200">
                    <img src={cardInfo.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-4 space-y-2'>
                        <h1 className="text-5xl font-bold">{cardInfo.title}</h1>
                        <h1 className="text-2xl pt-4"><span className='font-medium'>Campaigns Type:</span> {cardInfo.type}</h1>
                        <h1 className="text-2xl"><span className='font-medium'>Minimum Donate Amount:</span> ${cardInfo.amount}</h1>
                        <h1 className="text-2xl"><span className='font-medium'>Deadline:</span> {cardInfo.deadline}</h1>
                        <h1 className="text-2xl"><span className='font-medium'>User Email:</span> {cardInfo.useremail}</h1>
                        <h1 className="text-2xl"><span className='font-medium'>User Name:</span> {cardInfo.username}</h1>

                        <p className="py-6">{cardInfo.description}</p>

                        <button onClick={handleDonate} className="btn btn-primary">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;