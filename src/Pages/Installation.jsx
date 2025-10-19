import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getApp } from '../Hooks/AddToDN';
import img1 from '../assets/icon-downloads.png';
import img2 from '../assets/icon-ratings.png';
import img3 from '../assets/icon-review.png';
import ErrorPage from './ErrorPage';

const Installation = () => {
    const data = useLoaderData();
    const [sort, setSort] = useState('');
    const [myInstallation, setMyInstallation] = useState([]);

    useEffect(() => {
        const storedIds = getApp(); // localStorage থেকে ids
        const idsNumber = storedIds.map(id => parseInt(id)); // string to number
        const installedApps = data.filter(app => idsNumber.includes(app.id));
        setMyInstallation(installedApps);
    }, [data]);

    const handaleSort = (type) => {
        setSort(type);

        if (type === "High-Low") {
            const sortedByDownloads = [...myInstallation].sort((a, b) => b.downloads - a.downloads);
            setMyInstallation(sortedByDownloads);
        }
        else if (type === "Low-High") {
            const sortedByDownloads = [...myInstallation].sort((a, b) => a.downloads - b.downloads);
            setMyInstallation(sortedByDownloads);
        }
        else {
            setMyInstallation(myInstallation);
        }
    };

    const handaleRemove = (id) => {
        const storedIds = getApp();
        const updatedIds = storedIds.filter(storedId => parseInt(storedId) !== id);
        localStorage.setItem('installed', JSON.stringify(updatedIds));
        const updatedList = myInstallation.filter(app => app.id !== id);
        setMyInstallation(updatedList);
    };

    return (
        <Suspense fallback={<ErrorPage />}>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl sm:text-4xl font-extrabold'>Your Installed Apps</h1>
                    <p className='text-gray-500 mt-2'>Explore all trending apps on the market developed by us</p>
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-4'>
                    <h2 className='font-bold text-lg'>{myInstallation.length} Apps Found</h2>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort by: {sort ? sort : "Select"}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handaleSort('High-Low')}>High-Low</a></li>
                            <li><a onClick={() => handaleSort('Low-High')}>Low-High</a></li>
                        </ul>
                    </details>
                </div>

                <div className='flex flex-col gap-6'>
                    {myInstallation.length === 0 && (
                        <p className='text-center text-gray-500'>No Apps Installed Yet</p>
                    )}

                    {myInstallation.map(app => (
                        <div key={app.id} className="card bg-base-100 shadow-sm p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                            <figure className='flex-shrink-0'>
                                <img
                                    className='w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg'
                                    src={app.image}
                                    alt={app.title}
                                />
                            </figure>

                            <div className='flex-1 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col sm:flex-row sm:items-center gap-1'>
                                        <h1 className='text-xl font-bold'>{app.title}</h1>
                                        <p className='text-gray-500 sm:ml-2'>{app.companyName}</p>
                                    </div>
                                    <div className='flex flex-wrap gap-4 mt-1'>
                                        <span className='flex items-center gap-1 text-gray-600'>
                                            <img src={img1} alt="downloads" className='w-4 h-4' />
                                            {app.downloads}M+
                                        </span>
                                        <span className='flex items-center gap-1 text-gray-600'>
                                            <img src={img2} alt="rating" className='w-4 h-4' />
                                            {app.ratingAvg}
                                        </span>
                                        <span className='flex items-center gap-1 text-gray-600'>
                                            <img src={img3} alt="reviews" className='w-4 h-4' />
                                            {app.reviews}
                                        </span>
                                    </div>
                                </div>

                                <div className='ml-auto'>
                                    <button onClick={() => handaleRemove(app.id)} className="btn btn-sm bg-red-500 text-white hover:bg-red-600">Uninstall</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Suspense>
    );
};

export default Installation;
