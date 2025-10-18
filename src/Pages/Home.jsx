import React from 'react';
import Baner from '../Components/Baner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>

            <Baner />


            <div className="text-center my-10 px-4">
                <h1 className="text-3xl sm:text-4xl font-bold">Trending Apps</h1>
                <p className="text-[#627382] mt-2 text-sm sm:text-base">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

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
        </div>
    );
};

export default Home;
