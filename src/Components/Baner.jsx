import React from 'react';
import { Link } from 'react-router';
import hero from '../assets/hero.png'

const Baner = () => {
    return (
        <div className="pt-8 bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-extrabold">We Build <br />
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '> Productive</span> Apps</h1>
                    <p className="py-6 text-[#627382] ">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='flex gap-4 justify-center'>
                        <Link to={'https://play.google.com/store/apps?hl=en'} className="btn"> <img src={'https://i.ibb.co.com/x8GHRrtV/fi-16076057.png'} alt="" />Google Play</Link>
                        <Link to={'https://www.apple.com/app-store/'} className="btn"><img src={'https://i.ibb.co.com/gZz6jf5s/Group-1.png'} alt="" />App Store</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <img src={hero} alt="" />
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 text-center text-white overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                    Trusted By Millions, Built For You
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-0">
                    <div>
                         <p className='text-gray-200'>Total Downloads</p>
                        <h3 className="text-3xl md:text-4xl font-extrabold">29.6M</h3>
                        <p className="text-sm opacity-80">21% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-gray-200'>Total Reviews</p>
                        <h3 className="text-3xl md:text-4xl font-extrabold">906K</h3>
                        <p className="text-sm opacity-80">46% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-gray-200'>Active Apps</p>
                        <h3 className="text-3xl md:text-4xl font-extrabold">132+</h3>
                        <p className="text-sm opacity-80">31 More Will Launch</p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Baner;