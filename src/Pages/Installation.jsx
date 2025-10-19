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

        if (type === "rating") {
            const sortedByRating = [...myInstallation].sort((a, b) => b.ratingAvg - a.ratingAvg);
            setMyInstallation(sortedByRating);
        }
        else if (type === "downloads") {
            const sortedByDownloads = [...myInstallation].sort((a, b) => b.downloads - a.downloads);
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
        <Suspense fallback={ErrorPage}>
            <div className='max-w-full pb-30 sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mt-8'>
                    <h1 className='text-4xl font-extrabold'>Your Installed Apps</h1>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='flex my-10 items-center justify-between'>
                    <h2 className='font-bold'>{myInstallation.length} Apps Found</h2>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort by: {sort ? sort : "Select"}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handaleSort('rating')}>Most Rated</a></li>
                            <li><a onClick={() => handaleSort('downloads')}>Most Downloaded</a></li>
                        </ul>
                    </details>
                </div>

                <div className='flex flex-col gap-6'>
                    {myInstallation.length === 0 && (
                        <p className='text-center text-gray-500'>No Apps Installed Yet</p>
                    )}

                    {myInstallation.map(app => (
                        <div key={app.id} className="card bg-base-100 shadow-sm p-4">
                            <div className="flex items-center w-full">
                                <div className='flex gap-6'>
                                    <figure>
                                        <img
                                            className='w-[100px] h-[100px] object-cover'
                                            src={app.image}
                                            alt={app.title}
                                        />
                                    </figure>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-2'>
                                            <h1 className='text-xl font-bold'>{app.title} :</h1>
                                            <p>{app.companyName}</p>
                                        </div>
                                        <div className='flex gap-4 mt-2'>
                                            <span className='flex items-center gap-1'>
                                                <img src={img1} alt="downloads" className='w-4 h-4' />
                                                <h2>{app.downloads}M+</h2>
                                            </span>
                                            <span className='flex items-center gap-1'>
                                                <img src={img2} alt="rating" className='w-4 h-4' />
                                                <h2>{app.ratingAvg}</h2>
                                            </span>
                                            <span className='flex items-center gap-1'>
                                                <img src={img3} alt="reviews" className='w-4 h-4' />
                                                <h2>{app.reviews}</h2>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-auto">
                                    <button onClick={() => handaleRemove(app.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
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
