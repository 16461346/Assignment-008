import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
       <div className="flex flex-col min-h-screen max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navber></Navber>
        <div className="flex-1 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;