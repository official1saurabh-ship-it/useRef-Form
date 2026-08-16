import React, { useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="grid grid-cols-6 gap-1">
      {product.map((elem) => {
        return <ProductCard product={elem} />;
      })}
    </div>
  );
};

export default Products;
