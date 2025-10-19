import React, { Suspense, useState } from 'react';
import { IoMdTrendingUp } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';
import error from '../assets/App-Error.png';
import { FadeLoader } from 'react-spinners';

const Apps = () => {
    const data = useLoaderData();

    // Sarch Oparation er Main
    const [sarch, setSarch] = useState('');
    const TrimSarch = sarch.trim().replace(/\s+/g, '').toLowerCase();
    const sarchOparation = TrimSarch ?
        data.filter(sData => sData.title.toLowerCase().replace(/\s+/g, '').includes(TrimSarch)) : data

    return (
        <>
            {/* {App er Header Section Start} */}
            <div className="text-center max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8 my-10 px-4">

                <div className="flex justify-center items-center text-3xl sm:text-4xl font-bold gap-2">
                    <h1>Trending Apps</h1>
                    <IoMdTrendingUp className="text-[#632EE3] mt-2" />
                </div>
                <p className="text-[#627382] mt-2 text-sm sm:text-base">
                    Explore all trending apps on the market developed by us
                </p>
            </div>
            {/* {App er Header Section Start} */}

            {/* Sarch And Total App start */}
            <div className='md:flex text-center justify-between max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8'>
                <h1 className='px-10 py-4 text-2xl font-bold'>({sarchOparation.length}) Apps Found</h1>
                <div className='px-10'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={sarch} onChange={e => setSarch(e.target.value)} type="search" required placeholder="Search here"></input>
                    </label>
                </div>
            </div>
            {/* Sarch And Total App end */}

            {/* All App Section Start */}

            <Suspense fallback={<FadeLoader />}>
                <div className='max-w-full pb-20 sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                        {sarchOparation && sarchOparation.length > 0 ? (
                            sarchOparation.map((item) => (
                                <Link to={`/detailsPage/${item.id}`}>
                                    <div
                                        key={item.id}
                                        className="card bg-base-100 shadow-sm hover:shadow-md transition w-full"
                                    >
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
                                                <p>
                                                    <span className="font-medium">{item.downloads}+</span>
                                                </p>
                                                <p>{item.ratingAvg} ⭐</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        ) : (
                            <p className=" flex py-10 justify-center col-span-full"><img src={error} alt="" /></p>
                        )}
                    </div>
                </div>
            </Suspense>
            {/* All App Section End */}
        </>

    );
};

export default Apps;