import React from "react";
import ReactDOM  from "react-dom/client";
import  {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Header from "./components/header";
const Applayout =()=>{
return(
    <>
    <Header/>
    </>
)


}
const Approuter=createBrowserRouter([{
    path:"/",
    element:<Applayout/>
}])





ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={Approuter}/>);