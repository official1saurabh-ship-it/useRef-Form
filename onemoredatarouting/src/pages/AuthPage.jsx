import React from "react";
import { NavLink, Outlet } from "react-router";

import Login from "../components/Login";
import Register from "../components/Register";

const AuthPage = () => {
  return (
    <div>
      <NavLink to={"/"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <Outlet />
    </div>
  );
};

export default AuthPage;
