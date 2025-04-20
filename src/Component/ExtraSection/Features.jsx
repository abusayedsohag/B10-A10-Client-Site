import React from 'react';
import Marquee from "react-fast-marquee";

const Features = () => {
    return (
        <div className='py-4 bg-orange-400'>
            <h1 className='text-center text-2xl font-semibold p-5'>Exclusive Features</h1>

            <Marquee speed={150} pauseOnClick={true} pauseOnHover={true} >
                <div className='flex gap-5 pl-5'>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/wNMHJ3Jf/safety-box-12367705.png"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Safe & Secure Donations</h2>
                            <p className='text-xs md:text-sm'>All transactions are encrypted to protect donors and recipients — giving you peace of mind with every contribution.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/svj0608J/60413-OA7-H3-L-426.jpg"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Donate From Anywhere</h2>
                            <p className='text-xs md:text-sm'>Support causes globally with multi-currency support and region-friendly access, no matter where you or the campaign is.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/XxMhWyR2/4507693.jpg"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Support What Matters</h2>
                            <p className='text-xs md:text-sm'>Choose campaigns by category, region, or urgency — find causes that align with your heart and values.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/jPcYZCFf/804237-preview.jpg"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Verified Campaigns Only</h2>
                            <p className='text-xs md:text-sm'>We manually review and verify every campaign to ensure your donation reaches real, deserving people and communities.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/S44P0nzb/4979939-50880.jpg"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Community Uplift System</h2>
                            <p className='text-xs md:text-sm'>Every donation helps someone rise. Join a community where donors and recipients support, connect, and uplift one another.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/yFg87mzY/alarm-clock-693266.png"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Real-Time Donation Tracking</h2>
                            <p className='text-xs md:text-sm'>Track how your donations are being received and used through transparent updates and progress bars.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-52 w-72 md:h-64 md:w-80 lg:h-64 lg:w-96 shadow-xl dark:bg-slate-800 dark:text-white">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                                src="https://i.ibb.co.com/WvLcTvFk/2756252-370964-PBTMMI-499.jpg"
                                alt="Shoes"
                                className="rounded-xl w-16 md:w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xs md:text-sm">Live Campaign Updates</h2>
                            <p className='text-xs md:text-sm'>Stay informed with real-time updates from campaign owners — see how your donations are changing lives, moment by moment.</p>
                        </div>
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default Features;