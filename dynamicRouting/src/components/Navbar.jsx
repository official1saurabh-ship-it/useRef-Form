import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">Doctor</div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Home
          </div>

          <div
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            About
          </div>

          <div
            onClick={() => navigate("/allproduct")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Products
          </div>

          {/* <div
            onClick={() => navigate("/product")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Product Detail
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
