import React from 'react';
import Baner from '../Components/Baner';
import { Link, useLoaderData } from 'react-router';
import { IoMdTrendingUp } from 'react-icons/io';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>

            <Baner></Baner>


            <div className="text-center max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto sm:px-6 lg:px-8 my-10 px-4">

                <div className="flex justify-center items-center text-3xl sm:text-4xl font-bold gap-2">
                    <h1>Trending Apps</h1>
                     <IoMdTrendingUp className="text-[#632EE3] mt-2" />
                </div>
                <p className="text-[#627382] mt-2 text-sm sm:text-base">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            <div className='max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {data && data.length > 0 ? (
                        data.map((item) => (
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

                        ))
                    ) : (
                        <p className="text-center col-span-full">No apps found.</p>
                    )}
                </div>
                <div className='my-6 text-center items-center'>
                    <Link to={'/apps'} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[145px] text-white '>Show All</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
