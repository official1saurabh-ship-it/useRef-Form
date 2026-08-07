import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/Dashboard.jsx";
import Appointments from "./pages/Appointments.jsx";
import Patients from "./pages/Patients.jsx";
import Schedule from "./pages/Schedule.jsx";
import Prescription from "./pages/Prescription.jsx";
import Medical_Records from "./pages/Medical_Records.jsx";
import Messages from "./pages/Messages.jsx";
import Billing from "./pages/Billing.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";
import SideLayout from "./layout/SideLayout.jsx";
import TopLayout from "./layout/TopLayout.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import DoctorCard from "./components/DoctorCard.jsx";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SideLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "/appointments",
          element: <Appointments />,
        },
        {
          path: "/patients",
          element: <Patients />,
        },
        {
          path: "/schedules",
          element: <Schedule />,
        },
        {
          path: "/prescription",
          element: <Prescription />,
        },
        {
          path: "/medical_records",
          element: <Medical_Records />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/billing",
          element: <Billing />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },

        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/person",
          element: <DoctorCard />,
        },
      ],
    },
    {
      path: "/toplayout",
      element: <TopLayout />,
    },
    {
      path: "/mainlayout",
      element: <MainLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
