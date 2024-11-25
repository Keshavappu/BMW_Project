// App.js
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Models from "./components/Models";
import Contact from "./components/Contact";
import Login from "./components/Login";
import "./App.css"
import Signup from "./components/Signup";
let router=createBrowserRouter([{
  path:"/",
  element:<Navbar></Navbar>,
  children:[
      {
          path:"/",
          element:<Home></Home>,
         
      },
      {
        path:"/about",
        element:<About></About>,
        
      },
      {
        path:"/models",
        element:<Models></Models>,
        
      },
      {
        path:"/contact",
        element:<Contact></Contact>,
        
      },
      {
        path:"/login",
        element:<Login></Login>,
        
      },
      {
        path:"/signup",
        element:<Signup></Signup>,
        
      }
  ]
}
])

function App() {
  return (
    <div>
      <RouterProvider  router={router}> </RouterProvider>
    </div>
    //
  );
}

export default App;
