import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContext';

const MyCampaigns = () => {

    const campaigns = useLoaderData();

    const { user } = useContext(AuthContext);

    const userCampaigns = campaigns.filter(campaign => campaign.useremail === user.email);


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
                            userCampaigns?.map(camp => (
                                <tr>
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
                                        <button className="btn btn-error btn-xs">Delete</button>
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