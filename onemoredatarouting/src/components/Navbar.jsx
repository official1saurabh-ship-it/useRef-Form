import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/main/home"}>Home</NavLink>
      <NavLink to={"/main/about"}>About</NavLink>
      <NavLink to={"/main/services"}>Services</NavLink>
    </div>
  );
};

export default Navbar;
