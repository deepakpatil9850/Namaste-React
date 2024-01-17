import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import MenuList from "./components/MenuList";


const App = () =>{
    

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <App />,
        errorElement: <Error />,
        children :[
        {
            path :"/",
            element : <Body />
        },
        {
            path :"about",
            element : <About />
        },
        {
            path : 'contact',
            element : <Contact />
        },
        {
            path : 'restroMenu/:resId',
            element : <MenuList />
        },
        ]
    },
    {
        path:"/about",
        element : <About />
    },
    {
        path : "/contact",
        element : <Contact />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);