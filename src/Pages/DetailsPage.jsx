import React, { useState, useEffect, Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import img1 from '../assets/icon-downloads.png';
import img2 from '../assets/icon-ratings.png';
import img3 from '../assets/icon-review.png';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToStorageDB, getApp } from '../Hooks/AddToDN';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import img from '../assets/App-Error.png'
import ErrorPage from './ErrorPage';

const DetailsPage = () => {
    const data = useLoaderData();
    const { clickid } = useParams();
    const parsid = parseInt(clickid);

    const singleApp = data.find(app => app.id === parsid);
    const { title, image, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = getApp();
        if (installedApps.includes(parsid)) {
            setInstalled(true);
        }
    }, [parsid]);

    const handleInstall = id => {
        addToStorageDB(id);
        setInstalled(true);
        toast.success('App Installed Successfully!', {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
            transition: Bounce,
        });
    };

    // Ratings descending order (5 star on top)
    const sortedRatings = [...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name));

    return (
        <>
            <Suspense fallback={ErrorPage}>
                <div className='flex flex-col lg:flex-row py-16 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8 gap-10'>
                    <div className='w-70 h-70 border border-gray-200 bg-gray-200 flex justify-center items-center'>
                        <img src={image} alt={title} />
                    </div>

                    <div className='flex-1'>
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
                        ${installed ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'}`}
                            onClick={() => handleInstall(parsid)}
                            disabled={installed}
                        >
                            {installed ? 'Installed' : `Install Now (${size} MB)`}
                        </button>

                    </div>

                </div>
                {/* Ratings Horizontal Bar Chart */}
                <div className='mt-20 text-center max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8 my-10 px-4 w-full'> {/* Ensure parent div full width */}
                    <h2 className='text-xl font-semibold mb-4'>Rating</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={sortedRatings}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" reversed width={80} /> {/* width adjust */}
                            <Tooltip />
                            <Bar dataKey="count" fill="#632EE3" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='border-1 border-gray-300 max-w-full sm:max-w-xl md:max-w-3xl ml-20 lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8 my-20'>
                    <h1 className='font-bold text-2xl'>Description</h1>
                    <p className='text-gray-500'>{description}</p>
                </div>
            </Suspense>

            <ToastContainer />
        </>
    );
};

export default DetailsPage;
