import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
    </div>
  );
};

export default Navbar;
