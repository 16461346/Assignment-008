import React from 'react';
import here from '../assets/logo.png'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="bg-black p-6 -mb-[30px]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6 sm:gap-0 px-4 sm:px-20">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <img className="w-10" src={here} alt="Logo" />
                    <h1 className="text-white font-bold text-lg sm:text-xl">HERO.IO</h1>
                </div>

                {/* Social Links Section */}
                <div className="text-center sm:text-left">
                    <h2 className="text-white font-bold pb-2 text-md sm:text-lg">Social Links</h2>
                    <div className="flex justify-center sm:justify-start gap-3">
                        <Link to={'https://www.facebook.com/'}><img className="w-6 h-6" src="https://i.ibb.co.com/7dyWmsGJ/fi-5969020.png" alt="Facebook" /></Link>
                        <Link to={'https://x.com/toiter3?lang=en'}> <img className="w-6 h-6" src="https://i.ibb.co.com/CpZCDm8b/fi-145807.png" alt="Twitter" /></Link>
                        <Link to={'https://www.linkedin.com/'}>   <img className="w-6 h-6" src="https://i.ibb.co.com/sdqZgbhx/fi-5968764.png" alt="Instagram" /></Link>
                    </div>
                </div>
            </div>

            <hr className="my-4 border-gray-700" />

            <div className="text-center text-white text-sm sm:text-base">
                Copyright © 2025 - All rights reserved
            </div>
        </div>

    );
};

export default Footer;