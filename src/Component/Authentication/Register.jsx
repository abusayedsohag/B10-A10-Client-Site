import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../Provider/Firebase_init';
import Spinner from '../Spinner/Spinner';

const Register = () => {

    const [show, setShow] = useState(false)
    const { createUser, githubUser, googleUser, facebookUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleShow = (active) => {
        setShow(active)
    }

    const handleSignUp = (e) => {
        setLoading(true);
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setLoading(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be Uppercase, Lowercase, at least 6 character",
            });

            return;
        }

        createUser(email, password)
            .then(res => {

                const createAt = res.user?.metadata?.creationTime;
                const newUserData = { name, email, photoURL, password, createAt }

                const profile = {
                    displayName: name,
                    photoURL: photoURL,
                }

                updateProfile(auth.currentUser, profile)

                //store userdata in MongoDB
                fetch('https://crowdcube-server-site-alpha.vercel.app/user', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUserData)
                })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Registration Succcessfully",
                                icon: "success",
                                draggable: true
                            });
                            navigate('/');
                        }
                    }).catch(error => {
                        setLoading(false);
                        console.error("Error updating profile:", error);
                        Swal.fire({
                            title: "Error updating profile",
                            icon: "error",
                            text: error.message,
                            draggable: true
                        });
                    });
            })
            .catch(error => {

                if (error.code == 'auth/email-already-in-use') {
                    setLoading(false);
                    Swal.fire({
                        title: "User Already Exist",
                        icon: "error",
                        draggable: true
                    });
                } else {
                    Swal.fire({
                        title: "Registration Error",
                        icon: "error",
                        text: error.message,
                        draggable: true
                    });
                }
            })

        form.reset();
    }

    const handleSocialSignIn = (signInFn) => {
        setLoading(true);
        signInWithPopup(auth, signInFn)
            .then(res => {
                setLoading(false);
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });
                navigate('/');
            })
            .catch(error => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Already Another Credential",
                    text: "User Already Used Another Credential",
                });
            });
    };

    const googleSignIn = () => {
        handleSocialSignIn(googleUser);
    };

    const githubSignIn = () => {
        handleSocialSignIn(githubUser);
    };

    const facebookSignIn = () => {
        handleSocialSignIn(facebookUser);
    };

    return (
        <div>
            <div className="hero mt-4 md:mt-0">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold dark:text-white">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white">
                        {loading ? (
                            <div className="card-body flex justify-center items-center h-64">
                                <Spinner />
                            </div>
                        ) : (
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Full Name" className="input input-bordered dark:border-blue-400 dark:bg-slate-800 dark:text-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered dark:border-blue-400 dark:bg-slate-800 dark:text-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="Enter Your Photo URL" className="input input-bordered dark:border-blue-400 dark:bg-slate-800 dark:text-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input type={show ? 'text' : 'password'} placeholder="Enter Your Password" name='password' className="input input-bordered dark:border-blue-400 dark:bg-slate-800 dark:text-white" required />
                                        <button type='button' onClick={() => handleShow(!show)} className='absolute right-9'>
                                            {show ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-control mt-2">
                                    <input type="submit" value="Register" className='btn btn-primary w-full' disabled={loading} />
                                </div>
                                <p>I already have an Account, <Link to='/login'><b className='underline'>Login</b></Link></p>
                                <div className='flex justify-between items-center mt-4'>
                                    <hr className='border border-black w-5/12' />
                                    <h1>OR</h1>
                                    <hr className='border border-black w-5/12' />
                                </div>
                                <div className='h-14 flex justify-center items-center gap-4'>
                                    <button type='button' onClick={googleSignIn} className='btn btn-circle' disabled={loading}><i className="fa-brands fa-google text-xl"></i></button>
                                    <button type='button' onClick={githubSignIn} className='btn btn-circle' disabled={loading}><i className="fa-brands fa-github text-xl"></i></button>
                                    <button type='button' onClick={facebookSignIn} className='btn btn-circle' disabled={loading}><i className="fa-brands fa-facebook text-xl"></i></button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;