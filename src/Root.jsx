import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Spinner from './Component/Spinner/Spinner';

const Root = () => {
    return (
        <div className='pt-4 sm:pt-8'>
            <Spinner></Spinner>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;