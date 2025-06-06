import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const AddCampaigns = () => {

    const { user } = useContext(AuthContext);

    const handleAdd = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const useremail = form.useremail.value;
        const username = form.username.value;
        const description = form.description.value;

        const newCampaign = { image, title, type, amount, deadline, useremail, username, description }

        fetch('https://crowdcube-server-site-alpha.vercel.app/campaigns', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully Added",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen py-6">
                <div className="hero-content flex-col md:w-11/12 bg-slate-700 md:p-10 rounded-md">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Add New Campaigns</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white">
                        <form onSubmit={handleAdd} className="card-body grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image or Thumbnail</span>
                                </label>
                                <input type="url" name='image' placeholder="Enter Your URL" className="input input-bordered bg-slate-700 text-white w-full dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Campaigns Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Campaigns Title" className="input input-bordered w-full bg-slate-700 text-white dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Campaign Type</span>
                                </label>
                                <select defaultValue="pickup" name='type' className="select w-full label bg-slate-700 text-white dark:border-blue-500">
                                    <option value="pickup" className='label-text' disabled selected>Pick your Campaign Type</option>
                                    <option value="Personal Issue">Personal Issue</option>
                                    <option value="Startup">Startup</option>
                                    <option value="Business">Business</option>
                                    <option value="Creative Ideas">Creative Ideas</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Donation Amount</span>
                                </label>
                                <input type="number" name="amount" className="input input-bordered w-full bg-slate-700 text-white dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label> <br />
                                <input type="date" name="deadline" className="input input-bordered w-full bg-slate-700 text-white dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" value={user.email} name="useremail" className="input input-bordered w-full bg-slate-700 text-white dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" value={user.displayName} name="username" className="input input-bordered w-full bg-slate-700 text-white dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className='textarea w-full dark:border-blue-500 bg-slate-700 text-white' placeholder='Description' name="description"></textarea>
                            </div>

                            <div className="form-control mt-6 md:col-span-2">
                                <input className='btn btn-secondary w-full' type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaigns;