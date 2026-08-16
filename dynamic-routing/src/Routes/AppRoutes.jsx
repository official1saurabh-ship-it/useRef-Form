import React from "react";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Product from "../pages/Product";
import { Routes, Route } from "react-router-dom";
import AddMultipleProducts from "../pages/AddMultipleProducts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproduct" element={<AllProducts />} />
        <Route path="/multipleproduct" element={<AddMultipleProducts />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
