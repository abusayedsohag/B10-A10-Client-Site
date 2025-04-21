import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaigns = () => {

    const campaignData = useLoaderData();
    const param = useParams();

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const description = form.description.value;

        const updateCampaign = { image, title, type, amount, deadline, description }

        fetch(`https://crowdcube-server-site-alpha.vercel.app/campaign/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updateCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Successfully Updated",
                        icon: "success",
                        draggable: true
                    });
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

    return (
        <div>
            <div className="hero min-h-screen py-6">
                <div className="hero-content flex-col md:w-11/12 bg-slate-700 md:p-10 rounded-md">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Update Campaign</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white">
                        <form onSubmit={handleUpdate} className="card-body grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image or Thumbnail</span>
                                </label>
                                <input type="url" name='image' defaultValue={campaignData.image} className="input input-bordered bg-slate-700 text-white w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Campaigns Title</span>
                                </label>
                                <input type="text" name='title' defaultValue={campaignData.title} className="input input-bordered bg-slate-700 text-white w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Campaign Type</span>
                                </label>
                                <select name='type' className="input input-bordered bg-slate-700 text-white w-full" defaultValue={campaignData.type}>
                                    <option className='label-text' disabled selected>Pick your Campaign Type</option>
                                    <option>Personal Issue</option>
                                    <option>Startup</option>
                                    <option>Business</option>
                                    <option>Creative Ideas</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Donation Amount</span>
                                </label>
                                <input type="number" name="amount" className="input input-bordered w-full bg-slate-700 text-white" required defaultValue={campaignData.amount} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label> <br />
                                <input type="date" name="deadline" className="input input-bordered w-full bg-slate-700 text-white" required defaultValue={campaignData.deadline} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" value={campaignData.useremail} name="useremail" className="input input-bordered w-full bg-slate-700 text-white" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" value={campaignData.username} name="username" className="input input-bordered w-full bg-slate-700 text-white" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className='textarea w-full bg-slate-700 text-white' placeholder='Description' defaultValue={campaignData.description} name="description"></textarea>
                            </div>

                            <div className="form-control mt-6 md:col-span-2">
                                <input className='btn btn-secondary w-full' type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaigns;