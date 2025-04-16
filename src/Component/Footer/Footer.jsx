import React from 'react';
import logosvg from '../../assets/favicon/favicon.svg'

const Footer = () => {
    return (
        <footer className="grid space-y-5 sm:grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 bg-orange-400 text-base-content p-10">
            <nav>
                <img className='w-20 rounded-full' src={logosvg} alt="" />
                <p className='font-bold'>
                    <span className='text-2xl'>Crowd<span className='text-blue-600'>Cube</span> Ltd.</span>
                    <br />
                    Providing reliable tech since 2000
                </p>
            </nav>
            <nav className='flex flex-col font-semibold sm:hidden lg:flex'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='flex flex-col font-semibold'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='flex flex-col font-semibold'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;