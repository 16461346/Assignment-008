import React from 'react';
import logo from '../assets/logo.png'
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className="navbar max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/apps'}>Apps</Link></li>
                        <li><Link to={'/installation'}>Installation</Link></li>
                    </ul>

                </div>
                <Link to={'/'} className="flex cursor-pointer items-center justify-center text-xl">
                    <img className='w-[40px]' src={logo} alt="logo" /><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                        HERO.IO
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 border-blue-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/apps"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 border-blue-500" : ""
                            }
                        >
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 border-blue-500" : ""
                            }
                        >
                            Installation
                        </NavLink>
                    </li>
                </ul>
                            
            </div>
            <div className="navbar-end">
                <Link to={'https://github.com/16461346'} className="w-[145px] btn h-[43px] bg-gradient-to-r text-white from-[#632EE3] to-[#9F62F2]"><span><BsGithub /></span> Contribute</Link>
            </div>

        </div>
    );
};

export default Navber;