import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink>All Campaign</NavLink></li>
            {
                user && (
                    <>
                        <li><NavLink to="/addCampaigns">Add New Cmapaign</NavLink></li>
                        <li><NavLink>My Campaign</NavLink></li>
                        <li><NavLink>My Donations</NavLink></li>
                    </>
                )
            }
        </>
    );

    return (
        <div>
            <div className="navbar bg-blue-400 text-white w-11/12 mx-auto rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Crowdcube</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end'>
                    {
                        user ? (
                            <div className='w-full'>
                                {
                                    user.photoURL ? (

                                        <div className='flex justify-end'>
                                            <h1 className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-500
                                            hover:w-full">

                                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 group-hover:opacity-100"></span>

                                                <span className="text-black text-xl transition-transform duration-300 group-hover:scale-0"><img className='rounded-full' src={user.photoURL} /></span>

                                                <span className="absolute scale-0 text-white transition-transform duration-500 group-hover:scale-100 hover:opacity-100 w-full">
                                                    <div className='w-full flex justify-between items-center'>
                                                        <h1 className='text-sm flex justify-center items-center pl-3 w-full'>{user.displayName}</h1>
                                                        <button onClick={() => logOutUser()} className='btn rounded-e-full'>Log Out</button>
                                                    </div>
                                                </span>
                                            </h1>
                                        </div>

                                    ) : (
                                        <i className="fa-solid fa-circle-user text-3xl pr-3"></i>
                                    )
                                }
                            </div>
                        ) : (
                            <div className='navbar-end gap-1'>
                                <div className="">
                                    <Link to='/login'><h1 className="btn">Login</h1></Link>
                                </div>
                                <div className="">
                                    <Link to='/register'><h1 className="btn">Register</h1></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;