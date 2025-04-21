import React, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Spinner from './Component/Spinner/Spinner';

const Root = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div>
            {
                loading ?
                    <>
                        <div className='h-screen w-full flex justify-center items-center'>
                            <Spinner></Spinner>
                        </div>
                    </>
                    :
                    <>
                        <div className='pt-4 sm:pt-8'>
                            <Navbar></Navbar>
                            <Outlet></Outlet>
                            <Footer></Footer>
                        </div>
                    </>
            }
        </div>
    );
};

export default Root;