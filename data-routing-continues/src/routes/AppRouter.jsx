import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Doctors from "../pages/Doctors.jsx";
import Medicines from "../pages/Medicines.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Patient from "../pages/Patient.jsx";
import Prescription from "../pages/Prescription.jsx";
import Graph from "../pages/Graph.jsx";
import Data from "../pages/Data.jsx";
import Chart from "../pages/Chart.jsx";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "doctors",
          element: <Doctors />,
        },
        {
          path: "medicines",
          element: <Medicines />,
        },
        {
          path: "patient",
          element: <Patient />,
        },
        {
          path: "prescription",
          element: <Prescription />,
        },
        {
          path: "graph",
          element: <Graph />,
        },
        {
          path: "data",
          element: <Data />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
