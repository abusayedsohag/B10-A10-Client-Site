import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../Provider/Firebase_init';

const Register = () => {

    const [show, setShow] = useState(false)
    const { createUser, githubUser, googleUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleShow = (active) => {
        setShow(active)
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be Uppercase, Lowercase, at least 6 character",
            });

            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)

                const createAt = res.user?.metadata?.creationTime;
                const newUserData = { name, email, photoURL, password, createAt }

                const profile = {
                    displayName: name,
                    photoURL: photoURL,
                }

                updateProfile(auth.currentUser, profile)
                    .then(res => { console.log(res) })

                navigate('/')

                //store userdata in MongoDB
                fetch('http://localhost:5001/user', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUserData)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.insertedId) {
                            Swal.fire({
                                title: "Registration Succcessfully",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error.code)

                if (error.code == 'auth/email-already-in-use') {
                    Swal.fire({
                        title: "User Already Exist",
                        icon: "success",
                        draggable: true
                    });
                }
            })

        form.reset();
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
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Enter Your Photo URL" className="input input-bordered" required />
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
                            </div>
                            <div className="form-control mt-2">
                                <input type="submit" value="Register" className='btn btn-primary w-full' />
                            </div>

                            <p>I already have a Account, <Link to='/login'><b className='underline'>Login</b></Link></p>


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

export default Register;