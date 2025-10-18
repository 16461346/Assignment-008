import React from 'react';
import error from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='w-full flex h-screen items-center justify-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;