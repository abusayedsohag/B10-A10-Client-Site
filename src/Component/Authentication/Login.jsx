import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../Provider/Firebase_init';
import Spinner from '../Spinner/Spinner';

const Login = () => {

    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { existingUser, googleUser, githubUser, facebookUser } = useContext(AuthContext)

    const handleShow = (active) => {
        setShow(active)
    }

    const handleSignIn = (e) => {
        setLoading(true);
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        existingUser(email, password)
            .then(res => {
                navigate('/')
                setLoading(false);
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Invalid Password",
                    text: "Email or Password is wrong!",
                });
            })

    }

    const handleSocialSignIn = (signInFn) => {
        setLoading(true);
        signInWithPopup(auth, signInFn)
            .then(res => {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
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
                        <h1 className="text-5xl font-bold dark:text-white">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white">
                        {loading ? (
                            <div className="card-body flex justify-center items-center h-48">
                                <Spinner />
                            </div>
                        ) : (
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-primary dark:bg-slate-800 dark:text-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input type={show ? 'text' : 'password'} placeholder="Enter Your Password" name='password' className="input input-primary dark:bg-slate-800 dark:text-white" required />
                                        <button type='button' onClick={() => handleShow(!show)} className='absolute right-9'>
                                            {show ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                        </button>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <input type="submit" value="Login" className='btn btn-primary w-full' disabled={loading} />
                                </div>
                                <button>I don't have an Account, <Link to='/register' className='underline hover:font-bold'>Register</Link></button>
                                <div className='flex justify-between items-center mt-4'>
                                    <hr className='border border-black w-5/12' />
                                    <h1>OR</h1>
                                    <hr className='border border-black w-5/12' />
                                </div>
                                <div className='h-14 flex justify-center items-center gap-4'>
                                    <button type='button' onClick={googleSignIn} className='btn btn-circle'><i className="fa-brands fa-google text-xl"></i></button>
                                    <button type='button' onClick={githubSignIn} className='btn btn-circle'><i className="fa-brands fa-github text-xl"></i></button>
                                    <button type='button' onClick={facebookSignIn} className='btn btn-circle'><i className="fa-brands fa-facebook text-xl"></i></button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;