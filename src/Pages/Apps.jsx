import React, { useState, } from 'react';
import { IoMdTrendingUp } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';
import error from '../assets/App-Error.png';
import { FadeLoader } from 'react-spinners';

const Apps = () => {
    const data = useLoaderData();
    const [sarch, setSarch] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSarch(value);
        setLoading(true);

        // simulate delay
        setTimeout(() => {
            const TrimSarch = value.trim().replace(/\s+/g, '').toLowerCase();
            const result = TrimSarch
                ? data.filter(app => app.title.toLowerCase().replace(/\s+/g, '').includes(TrimSarch))
                : data;
            setFilteredData(result);
            setLoading(false);
        }, 300); // 300ms delay
    };

    return (
        <>
            {/* Header */}
            <div className="text-center max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8 my-10 px-4">
                <div className="flex justify-center items-center text-3xl sm:text-4xl font-bold gap-2">
                    <h1>Trending Apps</h1>
                    <IoMdTrendingUp className="text-[#632EE3] mt-2" />
                </div>
                <p className="text-[#627382] mt-2 text-sm sm:text-base">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            {/* Search */}
            <div className='md:flex text-center justify-between max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8'>
                <h1 className='px-10 py-4 text-2xl font-bold'>({filteredData.length}) Apps Found</h1>
                <div className='px-10'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={sarch}
                            onChange={handleSearch}
                            type="search"
                            required
                            placeholder="Search here"
                        />
                    </label>
                </div>
            </div>

            {/* Apps */}
            <div className='max-w-full pb-20 sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {loading ? (
                        <div className="col-span-full flex justify-center py-10">
                            <FadeLoader color="#632EE3" />
                        </div>
                    ) : filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <Link key={item.id} to={`/detailsPage/${item.id}`}>
                                <div className="card bg-base-100 shadow-sm hover:shadow-md transition w-full">
                                    <figure className="px-4 pt-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-xl h-40 w-full object-cover"
                                        />
                                    </figure>
                                    <div className="py-4 px-6">
                                        <h2 className="text-left text-[14px] sm:text-[16px] font-semibold">
                                            {item.title} <span className="font-normal">: {item.companyName}</span>
                                        </h2>
                                        <div className="flex pt-2 justify-between items-center">
                                            <p><span className="font-medium">{item.downloads}M+</span></p>
                                            <p>{item.ratingAvg} ⭐</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="flex py-10 justify-center col-span-full">
                            <img src={error} alt="No apps found" />
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Apps;
