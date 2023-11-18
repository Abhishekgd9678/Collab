import React from "react";
import ReactDOM  from "react-dom/client";
import  {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Header from "./components/header";
import Card from "./components/item-card";

const Applayout =()=>{
return(
    <>
    <Header/>
    <Card/>
   
    </>
)


}
const Approuter=createBrowserRouter([{
    path:"/",
    element:<Applayout/>
}])





ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={Approuter}/>);