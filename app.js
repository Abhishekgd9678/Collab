import React from "react";
import ReactDOM  from "react-dom/client";
import  {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Header from "./components/header";
import Card from "./components/item-card";
import Carousal from "./carousel"

const Applayout =()=>{
return(
    <>
    <Header/>
    <Carousal options={{loop:true}}/>
    {/* <Card/> */}
    </>
)


}
const Approuter=createBrowserRouter([{
    path:"/",
    element:<Applayout/>
}])





ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={Approuter}/>);