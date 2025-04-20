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
            <Carousel

                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
            >
                <div className='flex mx-auto'><img className='flex mx-auto border-4 border-blue-500 rounded-xl w-10/12 md:w-auto' src="https://i.ibb.co.com/BV9DTwhj/Slide1.jpg" alt="" /></div>
                <div className='flex mx-auto'><img className='flex mx-auto border-4 border-blue-500 rounded-xl w-10/12 md:w-auto' src="https://i.ibb.co.com/svvgGkbh/Slide2.jpg" alt="" /></div>
                <div className='flex mx-auto'><img className='flex mx-auto border-4 border-blue-500 rounded-xl w-10/12 md:w-auto' src="https://i.ibb.co.com/b5FPFjNB/Slide3.jpg" alt="" /></div>
                <div className='flex mx-auto'><img className='flex mx-auto border-4 border-blue-500 rounded-xl w-10/12 md:w-auto' src="https://i.ibb.co.com/HLV9vpkn/Slide4.jpg" alt="" /></div>
            </Carousel>;
        </div>
    );
};

export default Banner;