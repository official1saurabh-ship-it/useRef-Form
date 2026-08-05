import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6 shadow-xl">
      {/* Main Section */}
      <div className="mb-8">
        <div className="text-xl font-bold mb-4 border-b border-slate-700 pb-2">
          Home
        </div>

        <div className="flex flex-col gap-3">
          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/medicines"
          >
            Medicines
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/doctors"
          >
            Doctors
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Patient Section */}
      <div>
        <div className="text-xl font-bold mb-4 border-b border-slate-700 pb-2">
          Patient
        </div>

        <div className="flex flex-col gap-3">
          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/patient"
          >
            Patient
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/prescription"
          >
            Prescription
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/graph"
          >
            Graph
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/chart"
          >
            Chart
          </NavLink>

          <NavLink
            className="hover:bg-slate-700 px-3 py-2 rounded-md transition-all"
            to="/data"
          >
            Data
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
