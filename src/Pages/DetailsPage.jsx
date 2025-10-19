import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import img1 from '../assets/icon-downloads.png';
import img2 from '../assets/icon-ratings.png';
import img3 from '../assets/icon-review.png';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsPage = () => {
    const data = useLoaderData();
    const { clickid } = useParams();
    const parsid = parseInt(clickid);
    const singleApp = data.find(app => app.id === parsid);
    const { title, image, companyName, description, size, reviews, ratingAvg, downloads } = singleApp;

    // State for Install Button
    const [installed, setInstalled] = useState(false);

    const handleInstall = () => {
        setInstalled(true);
        toast.success('App Installed Successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <>
            <div className='flex py-16 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8'>
                <div className='w-70 h-70 border-1 flex border-gray-200 bg-gray-200 justify-center items-center'>
                    <img src={image} alt={title} />
                </div>
                <div className='pl-10'>
                    <div>
                        <h1 className='text-2xl font-bold'>{title} : {description}</h1>
                        <p className='text-gray-400 pb-4'>
                            Developed by -: <span className='text-[#632EE3] font-semibold'>{companyName}</span>
                        </p>
                        <hr />
                    </div>
                    <div className='flex gap-10 py-7'>
                        <span>
                            <img src={img1} alt="download img" />
                            <p>Downloads</p>
                            <h2>{downloads}</h2>
                        </span>
                        <span>
                            <img src={img2} alt="rating img" />
                            <p>Average Ratings</p>
                            <h2>{ratingAvg}</h2>
                        </span>
                        <span>
                            <img src={img3} alt="review img" />
                            <p>Total Reviews</p>
                            <h2>{reviews}</h2>
                        </span>
                    </div>

                    <button
                        className={`btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white 
                        ${installed ? 'cursor-not-allowed' : ''}`}
                        onClick={handleInstall}
                        disabled={installed}
                    >
                        {installed ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>
            
            <ToastContainer />
        </>
    );
};

export default DetailsPage;
