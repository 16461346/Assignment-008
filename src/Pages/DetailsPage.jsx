import React, { useState, useEffect, Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import img1 from '../assets/icon-downloads.png';
import img2 from '../assets/icon-ratings.png';
import img3 from '../assets/icon-review.png';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToStorageDB, getApp } from '../Hooks/AddToDN';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
        if (installedApps.includes(parsid)) setInstalled(true);
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

    const sortedRatings = [...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name));

    return (
        <>
            <Suspense fallback={<ErrorPage />}>
                <div className="container mx-auto py-10 px-4">
                    {/* App Info */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        {/* Image */}
                        <div className="w-full lg:w-1/3 flex justify-center items-center bg-gray-200 rounded-lg p-4">
                            <img src={image} alt={title} className="object-contain w-full h-64 lg:h-80" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col gap-6">
                            <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
                            <p className="text-gray-500">{description}</p>
                            <p className="text-gray-400 text-sm">
                                Developed by <span className="text-purple-600 font-semibold">{companyName}</span>
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                                <div className="stat text-center bg-base-100 shadow rounded-lg p-4">
                                    <img src={img1} alt="downloads" className="w-8 h-8 mx-auto" />
                                    <div className="stat-title">Downloads</div>
                                    <div className="stat-value">{downloads}</div>
                                </div>
                                <div className="stat text-center bg-base-100 shadow rounded-lg p-4">
                                    <img src={img2} alt="ratings" className="w-8 h-8 mx-auto" />
                                    <div className="stat-title">Average Rating</div>
                                    <div className="stat-value">{ratingAvg}</div>
                                </div>
                                <div className="stat text-center bg-base-100 shadow rounded-lg p-4">
                                    <img src={img3} alt="reviews" className="w-8 h-8 mx-auto" />
                                    <div className="stat-title">Total Reviews</div>
                                    <div className="stat-value">{reviews}</div>
                                </div>
                            </div>

                            <button
                                className={`btn btn-primary mt-4 w-full lg:w-1/3 text-white ${
                                    installed ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'
                                }`}
                                onClick={() => handleInstall(parsid)}
                                disabled={installed}
                            >
                                {installed ? 'Installed' : `Install Now (${size} MB)`}
                            </button>
                        </div>
                    </div>

                    {/* Ratings Chart */}
                    <div className="mt-10 w-full">
                        <h2 className="text-xl font-semibold mb-4 text-center">Rating Breakdown</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={sortedRatings}
                                layout="vertical"
                                margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" reversed width={80} />
                                <Tooltip />
                                <Bar dataKey="count" fill="#632EE3" barSize={25} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Description Section */}
                    <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Full Description</h2>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
            </Suspense>

            <ToastContainer />
        </>
    );
};

export default DetailsPage;
