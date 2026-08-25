import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import ProductsDetailPage from "../pages/ProductsDetailPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproduct" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductsDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
