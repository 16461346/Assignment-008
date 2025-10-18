import React from 'react';
import { createBrowserRouter } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import Loader from '../Pages/Loader';

export const router=createBrowserRouter([
 {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            index:true,
            element: <Home></Home>,
            hydrateFallbackElement: <Loader/>,
            loader:()=> fetch('primaryData.json')
        },
        {
            path: "/apps",
            element: <Apps></Apps>
        },
        {
            path: "/installation",
            element:<Installation></Installation>
        }
    ]
 }
]);