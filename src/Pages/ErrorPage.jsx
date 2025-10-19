import React from 'react';
import error from '../assets/error-404.png'
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    return (
        <>
        <Navber></Navber>
            <div className='w-full flex h-screen items-center justify-center'>
                <img src={error} alt="" />
            </div>
        <Footer></Footer>
        </>

    );
};

export default ErrorPage;