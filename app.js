import React from "react";
import ReactDOM  from "react-dom/client";
import  {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Header from "./components/header";
import Card from "./components/item-card";
import Carousal from "./components/carousel"
import "./components/css_files/base.css"
import "./components/css_files/embla.css"
import "./components/css_files/sandbox.css"

import data from './components/data.json'
import Buy from "./components/buy"
import Buy_page from "./components/buy_page";
import { Outlet } from "react-router-dom";

const SLIDES = Array.from(Array(data.data.length).keys())

const Applayout =()=>{
return(
    <> 
    <Header/>
    <Outlet />
    {/* <Card /> */}
    </>
)
}
// <Carousal slides={SLIDES} options={{loop:true,autoplay:true}}/>


const Approuter=createBrowserRouter([{
    path:"/",
    element:<Applayout/>,
    children:[
        {
            path:'/',
            element:<Card/>
        },
        {
            path:"buy_page",
            element:<Buy_page/>
        },
        {
            path:"buy/:id",
            element:<Buy />    
        },
    ]
    },
    
    
])





ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={Approuter}/>);