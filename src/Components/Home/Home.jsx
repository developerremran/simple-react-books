import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../simple-project/public/94115-reading-boy.json";

const Home = () => {
    return (
        <div className='flex items-center my-container'>
            <div className='w-1/2'>
                <p className='bg-orange-300 p-1 rounded-full inline-flex font-semibold text-white'>On Sale!</p>
                <h2>A reader lives a
                    thousand lives <span> before he dies </span></h2>
                <p className='mb-5'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='inline-flex p-2 bg-blue-400 gap-2 rounded-md text-white
                '>
                    <button className='btn '>view store</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </div>
                <button className=' p-2 bg-blue-400 gap-2 rounded-md text-white ml-5'>learn More</button>
            </div>
            <div className='w-1/2 items-end'>
            <Lottie animationData={groovyWalkAnimation} loop={true} className='w-3/4' />;
            </div>
        </div>
    );
};

export default Home;