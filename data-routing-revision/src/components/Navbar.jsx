import React from "react";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import DoctorProfileCard from "./DoctorProfileCard";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

        <input
          type="text"
          placeholder="Search doctors..."
          className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        <button className="relative text-slate-600 hover:text-blue-600 transition">
          <FiMessageSquare size={24} />

          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        <button className="relative text-slate-600 hover:text-blue-600 transition">
          <FiBell size={24} />

          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            5
          </span>
        </button>
        <DoctorProfileCard />
      </div>
    </nav>
  );
};

export default Navbar;
