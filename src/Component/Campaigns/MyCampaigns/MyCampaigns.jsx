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
        <div>
            <div className="overflow-x-auto bg-slate-100 w-11/12 mx-auto my-6">
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
        </div>
    );
};

export default MyCampaigns;