import React from "react";
import ReactDOM  from "react-dom/client";
import  {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Header from "./components/header";
import Card from "./components/item-card";
import Carousal from "./carousel"
import "./components/css_files/base.css"
import "./components/css_files/embla.css"
import "./components/css_files/sandbox.css"

import data from './components/data.json'

const SLIDES = Array.from(Array(data.data.length).keys())
console.log(SLIDES)

const Applayout =()=>{
return(
    <>
    <Header/>
    <Carousal slides={SLIDES} options={{loop:true}}/>
    <Card />
    </>
)


}
const Approuter=createBrowserRouter([{
    path:"/",
    element:<Applayout/>
}])





ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={Approuter}/>);