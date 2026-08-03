import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
