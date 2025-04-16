import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer';

const Root = () => {
    return (
        <div className='pt-4 sm:pt-8'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;