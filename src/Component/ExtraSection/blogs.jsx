import React from 'react';
import Marquee from "react-fast-marquee";

const Blogs = () => {
    return (
        <div className='py-4 bg-orange-400'>
            <h1 className='text-center text-2xl font-semibold p-5'>Exclusive Videos</h1>

            <Marquee speed={100} pauseOnClick={true} pauseOnHover={true} direction='right' >
                <div className='flex gap-5 pl-5'>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/0CbFrom3Qkk?si=p77LztvDO-jipSz7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/TqhNILVX8IE?si=fJEXW3Bucm5SQLJ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/mPRXhNFPgwo?si=x1acAamQGSlkG5wR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/hP7ddF5HjhA?si=StdKOtgMD-mDYv9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/WTdPnJMOr7Y?si=6-PArQnbr1P665FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/FuWJYBBqJi4?si=4SYaeN6Zv5MjU1N3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="card shadow-xl">
                        <iframe className='rounded-md' src="https://www.youtube.com/embed/m21x2cQ4JvI?si=j4BUtFid24J_ol_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default Blogs;