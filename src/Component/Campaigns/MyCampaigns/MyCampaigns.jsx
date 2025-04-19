import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContext';
import Swal from 'sweetalert2';

const MyCampaigns = () => {

    const campaigns = useLoaderData();

    const { user } = useContext(AuthContext);

    const [updateCamp, setUpdateCamp] = useState([])

    useEffect(() => {

        const userCampaigns = campaigns.filter(campaign => campaign.useremail === user.email);
        setUpdateCamp(userCampaigns);

    }, [campaigns, user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/campaign/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const deleteCampaigns = updateCamp.filter(fil => fil._id !== id)
                            setUpdateCamp(deleteCampaigns)
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                            });
                        }

                    })
            }
        });
    }


    return (
        <div className=' w-11/12 mx-auto my-6'>
            <div className="overflow-x-auto bg-slate-100 hidden md:block">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
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
                            updateCamp?.map(camp => (
                                <tr key={camp._id}>
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
                                        <h1 className="badge badge-outline badge-sm">{camp.type}</h1>
                                    </td>
                                    <td>
                                        <h1>{camp.amount} BDT</h1>
                                    </td>
                                    <th>
                                        <Link to={`/updateCampaign/${camp._id}`}><button className="btn btn-primary btn-xs">Update</button></Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(camp._id)} className="btn btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* For small screens (mobile) */}
            <div key={updateCamp._id} className="grid md:hidden">
                {updateCamp?.map((camp) => (
                    <div key={camp._id}>
                        <div className="bg-white p-4 flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <img src={camp.image} alt={camp.title} className="w-12 h-12 object-cover rounded" />
                                <div>
                                    <h2 className="font-bold">{camp.title}</h2>
                                    <p className="text-sm text-gray-500">Deadline: {camp.deadline}</p>
                                </div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="badge badge-outline badge-xs">{camp.type}</span>
                                <span className="font-semibold">Mini. Donate: <span className='font-normal text-xs'>{camp.amount} BDT</span></span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <Link className='btn btn-primary btn-xs w-1/2 rounded-e-full' to={`/updateCampaign/${camp._id}`}><button>Update</button></Link>
                                <button onClick={() => handleDelete(camp._id)} className="btn btn-error btn-xs w-1/2 rounded-s-full">Delete</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCampaigns;