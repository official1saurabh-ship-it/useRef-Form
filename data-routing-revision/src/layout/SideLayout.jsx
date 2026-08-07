import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";
import DoctorCard from "../components/DoctorCard.jsx";
import Navbar from "../components/Navbar.jsx";

const SideLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="flex w-64 flex-col justify-between bg-slate-900 p-4">
        <div className="text-red-500">MediCare</div>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="appointments"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Appointments
          </NavLink>
          <NavLink
            to="patients"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Patients
          </NavLink>
          <NavLink
            to="schedules"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="prescription"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Prescriptions
          </NavLink>
          <NavLink
            to="medical_records"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Medical Records
          </NavLink>
          <NavLink
            to="messages"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Messages
          </NavLink>
          <NavLink
            to="billing"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Billing
          </NavLink>
          <NavLink
            to="reports"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 font-medium text-sm ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Settings
          </NavLink>
        </nav>
        <div className="rounded-lg bg-slate-800 px-3 py-2 text-center font-medium text-sm text-slate-300">
          Logout
        </div>

        <div className="mt-7">
          <DoctorCard className="w-96 h-[200px] " />
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Routed Pages */}
        <main className="flex-1 p-6 bg-slate-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SideLayout;
