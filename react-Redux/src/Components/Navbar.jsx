import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">ShopEase</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition duration-200">
            Home
          </a>

          <a
            onClick={() => setToggle(false)}
            href="#"
            className="hover:text-blue-600 transition duration-200"
          >
            Products
          </a>

          <a
            onClick={() => setToggle(true)}
            href="#"
            className="hover:text-blue-600 transition duration-200"
          >
            Cart
          </a>

          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition duration-200">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
