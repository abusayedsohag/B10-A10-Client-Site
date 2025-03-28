import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../Provider/Firebase_init';

const Login = () => {

    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const { existingUser, googleUser, githubUser } = useContext(AuthContext)

    const handleShow = (active) => {
        setShow(active)
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        existingUser(email, password)
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });

                navigate('/')

            })
            .catch(error => {
                console.log(error.code)
                Swal.fire({
                    icon: "error",
                    title: "Invalid Password",
                    text: "Email or Password is wrong!",
                });
            })

    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleUser)
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });

                navigate('/')

            })
            .catch(error => {
                console.log(error.code)
                Swal.fire({
                    icon: "error",
                    title: "Invalid Password",
                    text: "Email or Password is wrong!",
                });
            })
    }

    const githubSignIn = () => {
        signInWithPopup(auth, githubUser)
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });

                navigate('/')

            })
            .catch(error => {
                console.log(error)
                console.log(error.code)
                Swal.fire({
                    icon: "error",
                    title: "Invalid Password",
                    text: "Email or Password is wrong!",
                });
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className='flex items-center'>
                                    <input type={show ? 'text' : 'password'} placeholder="Enter Your Password" name='password' className="input input-bordered" required />
                                    <button type='button' onClick={() => handleShow(!show)} className='absolute right-9'>
                                        {
                                            show ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>
                                        }
                                    </button>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type="submit" value="Login" className='btn btn-primary w-full' />
                            </div>

                            <button>I don't have a Account, <Link to='/register' className='underline hover:font-bold'>Register</Link></button>


                            <div className='flex justify-between items-center mt-4'>
                                <hr className='border border-black w-5/12' />
                                <h1>OR</h1>
                                <hr className='border border-black w-5/12' />
                            </div>
                            <div className='h-14 flex justify-center items-center gap-4'>
                                <button onClick={googleSignIn}><i className="fa-brands fa-google text-3xl"></i></button>
                                <button onClick={githubSignIn}><i className="fa-brands fa-github text-3xl"></i></button>
                                {/* <button onClick={facebookSignIn}><i className="fa-brands fa-facebook text-3xl"></i></button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;