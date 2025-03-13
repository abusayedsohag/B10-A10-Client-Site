import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='my-4'>
            <Carousel responsive={responsive}>
                <div className='flex mx-auto'><img  className='flex mx-auto' src="https://i.pinimg.com/736x/a9/a3/49/a9a349853cc1bf106c56068522641133.jpg" alt="" /></div>
                <div className='flex mx-auto'><img  className='flex mx-auto' src="https://i.pinimg.com/736x/a9/a3/49/a9a349853cc1bf106c56068522641133.jpg" alt="" /></div>
                <div className='flex mx-auto'><img  className='flex mx-auto' src="https://i.pinimg.com/736x/a9/a3/49/a9a349853cc1bf106c56068522641133.jpg" alt="" /></div>
                <div className='flex mx-auto'><img  className='flex mx-auto' src="https://i.pinimg.com/736x/a9/a3/49/a9a349853cc1bf106c56068522641133.jpg" alt="" /></div>
                <div className='flex mx-auto'><img  className='flex mx-auto' src="https://i.pinimg.com/736x/a9/a3/49/a9a349853cc1bf106c56068522641133.jpg" alt="" /></div>
            </Carousel>;
        </div>
    );
};

export default Banner;