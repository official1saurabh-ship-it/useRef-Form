import React from "react";
import { useNavigate } from "react-router";
const Login = () => {
  let Navigate = useNavigate();
  return (
    <form onClick={() => Navigate("/main/home")}>
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your password" />
    </form>
  );
};

export default Login;
