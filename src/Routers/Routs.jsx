import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import Loader from '../Pages/Loader';
import DetailsPage from '../Pages/DetailsPage';

export const router=createBrowserRouter([
 {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
            hydrateFallbackElement: <Loader/>,
            loader:()=> fetch('/primaryData.json')
        },
        {
            path: "/apps",
            element: <Apps></Apps>, 
            hydrateFallbackElement: <Loader/>,
            loader: ()=> fetch('/mainData.json')
        },
        {
            path: "/installation",
            element:<Installation></Installation>,
            
             loader: ()=> fetch('/mainData.json')
        },
        {
            path:'/detailsPage/:clickid',
            hydrateFallbackElement: <Loader/>,
            element:<DetailsPage></DetailsPage>,
            loader:()=>fetch('/mainData.json')
        }
    ]
 }
]);