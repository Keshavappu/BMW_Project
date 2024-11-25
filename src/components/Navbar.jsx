// src/components/Navbar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import bmwlogo from "./asset/bmwlogo.jfif"


const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
    <Link to="/"><img src={bmwlogo} alt="" srcset="" height="50px"width="50px"/></Link>
      <ul>
       
        <li><Link to="/about">About</Link></li>
        <li><Link to="/models">Models</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    <div>
      <Outlet></Outlet>
    </div>
    </div>
  );
};

export default Navbar;
